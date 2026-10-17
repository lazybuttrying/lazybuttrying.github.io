---
title: "지갑 labeling pipeline: 128GB OOM을 40GB로 낮춘 세 가지 결정"
excerpt: "on-chain 거래소 지갑 labeling pipeline이 128GB machine에서 터졌다. 월 단위 partitioning, thread별 독립 DuckDB, 주입 직전 queueing으로 40GB 안에 넣은 기록."

categories:
  - Engineering
tags:
  - [duckdb, parquet, pipeline, memory, crypto]

permalink: /engineering/wallet-labeling-memory/

toc: true
toc_sticky: true

date: 2026-10-16
last_modified_at: 2026-10-17
---

## 들어가며

석사논문(stablecoin 차익거래 분석)을 위해 거래소 간 자금 흐름을 추적해야 했다. [Flipside](https://flipsidecrypto.xyz)에서 Ethereum·Tron 네트워크의 USDT/USDC 전송 기록을 가져오고, [Arkham](https://www.arkhamintelligence.com) API의 주소 인텔리전스로 업비트·빗썸·바이낸스 지갑에 labeling을 붙이는 pipeline이다.

DuckDB 매뉴얼을 요약할 생각은 없다. 이 글은 128GB machine에서 터진 labeling 작업을 40GB 안에 넣으면서 실제로 먹힌 세 가지 결정만 정리한 것이다. on-chain 데이터든 아니든, "memory가 터지는데 machine은 못 늘리는" pipeline을 굴리는 사람을 독자로 상정했다.

## 1. 시간으로 자른다: 월 단위 Parquet partitioning

가장 먼저 한 일은 데이터를 시간으로 자르는 것이다. Flipside에서 수집할 때부터 월 단위 [Parquet](https://parquet.apache.org/docs/) 파일로 나눠 저장하고, labeling 작업도 한 번에 한 달치만 memory에 올린다.

Parquet를 고른 건 columnar라서가 다가 아니다. 핵심은 column별 dictionary encoding이다. token symbol(USDT/USDC)처럼 distinct 값이 몇 개인 column은 dictionary에 한 번만 저장되고 데이터는 작은 정수 code로 들어가서, 파일 크기와 읽기 I/O가 동시에 줄어든다. 반대로 from/to address 같은 고유값 위주 column은 dictionary 효과가 거의 없다. 이쪽의 memory 부담은 encoding이 아니라 월 단위 partitioning으로 잡는다. encoding이 먹는 부분과 partitioning이 먹는 부분이 나뉘어 있으니, 둘을 헷갈리면 memory 계산이 어긋난다.

**사례**: 처음엔 전송 기록을 한 번에 처리했다. 전체 기간치를 memory에 올리고 Arkham label과 join하는 순간 128GB를 넘겨서 작업이 실패했다. 월 단위로 자르고 나서는 한 번에 올라가는 데이터가 "한 달치"로 고정됐다. I/O와 memory peak이 동시에 상한이 걸린 셈이다. 분석 단위도 어차피 월별이라 손해 볼 게 없었다.

**언제 쓰나**: 분석 단위가 시간 구간으로 나뉠 때. 월별이든 일별이든, 쿼리 패턴과 partition 단위가 일치하면 된다.
**overkill일 때**: 전체 데이터가 memory에 여유롭게 들어가면 그냥 통째로 읽는 게 빠르다.

## 2. Python thread + thread별 독립 DuckDB, API 호출은 connection pool로 직렬화

병렬 처리는 Python threading으로 했다. 무거운 join과 집계는 DuckDB(C++)가 담당해서 GIL이 병목이 되지 않는다.

흔한 실수는 connection 하나를 공유하는 것이다. thread들이 같은 memory 공간을 나눠 쓰면 누가 얼마나 먹는지 예측하기 어렵고, peak이 튀는 순간 전체가 죽는다. 그래서 worker thread마다 자기만의 in-memory DuckDB connection을 열고, 각각에 memory 상한을 건다. ([`memory_limit` 설정은 DuckDB 공식 문서 참조](https://duckdb.org/docs/1.1/configuration/overview))

```python
# worker thread마다 독립된 in-memory DuckDB + 명시적 memory 상한
con = duckdb.connect(":memory:")
con.execute("PRAGMA memory_limit='10GB'")
```

thread는 4개로 고정했고, 각 connection에 10GB 상한을 걸었다. 전체 memory 사용량은 "4 × 10GB = 40GB"로 사전에 계산된다. 예측 가능한 게 핵심이다.

한편 Arkham API label 조회는 공유 connection pool을 통과시킨다. pool이 동시 호출을 직렬로 묶어줘서 rate limit을 넘지 않는다. 병렬로 때렸다가는 API가 막혀서 전체 pipeline이 선다.

**사례**: 공유 connection으로 돌릴 때는 어느 thread가 memory를 얼마나 쓰는지 알 수 없어서, 터지기 전까지는 "잘 돌아가네" 하고 착각하기 쉬웠다. 독립 connection으로 바꾸고 나서는 상한선을 사전에 계산할 수 있게 됐고, 그 뒤로는 OOM이 한 번도 안 났다.

**언제 쓰나**: worker 간 공유 상태가 없을 때. partition이 서로 독립적이면 된다.
**overkill일 때**: 단일 thread로도 충분히 빨리 끝나면 그냥 하나만 쓴다. thread를 늘리는 순간부터 memory 계산이 필요해진다.

## 3. queue는 주입 직전에만 쓴다

병렬 pipeline의 또 다른 함정은 worker 사이에 큰 데이터 뭉치를 queue로 주고받는 것이다. queue에 쌓이는 순간 memory 계산이 깨진다. producer가 consumer보다 조금만 빨라도 queue가 무한정 불어난다.

여기서는 queue를 데이터 주입 직전에만 썼다. 무거운 전송 기록은 각 worker가 자기 partition 안에서 끝까지 처리하고, queue를 통과하는 건 labeling이 끝난 작은 결과 batch뿐이다. 공유되는 게 "처리된 결과"뿐이라 충돌도 없고, queue가 memory를 잡아먹을 일도 없다.

**사례**: 처음 설계에서는 worker가 읽은 원본 batch를 그대로 queue에 넣었다. labeling이 병목이 되는 순간 queue에 원본 데이터가 쌓이면서, partitioning으로 잡아둔 memory 상한이 무의미해졌다. queue를 통과하는 걸 "처리된 결과"로 바꾸고 나서야 상한 계산이 다시 맞기 시작했다.

## 결과

- peak memory: 128GB 초과(OOM) → 40GB 이내 (약 1/3)
- 처리 속도: 기존과 동일
- 예측 가능성: 4 threads × 10GB = 40GB로 상한선이 사전에 계산됨

속도가 그대로인 게 포인트다. memory를 줄이려고 disk spill을 남발하면 보통 느려지는데, partitioning 덕분에 각 worker의 working set이 memory 안에 들어가서 I/O penalty가 없었다.

## 솔직한 꼬리말 — 이 설계의 한계

공정하게 밝히면, 이 설계에도 구멍은 있다.

- **한 달치가 상한을 넘기면 그대로 터진다.** 그때는 주 단위나 주소 prefix로 더 잘라야 한다. partitioning은 "가장 큰 partition이 상한 안에 든다"는 전제 위에 서 있다.
- **속도가 동일하게 나온 건 운도 있었다.** working set이 memory에 들어갔기 때문이지, 이 패턴이 항상 공짜는 아니다. partition이 커지면 disk spill이 불가피하고, 그때는 느려지는 걸 받아들여야 한다.
- **Arkham API rate limit**은 이 설계로 없앨 수 없다. connection pool로 직렬화해서 넘지 않게 막는 게 다다. label 조회 자체가 병목이 되면 worker를 늘리는 게 아니라 caching을 먼저 고민해야 한다.

## 더 읽을 거

- [Research 탭 — 석사논문 pipeline](/research/) — 이 pipeline이 쓰이는 논문 연구 소개
