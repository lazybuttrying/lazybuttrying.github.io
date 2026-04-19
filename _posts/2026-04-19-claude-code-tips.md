---
title: "해커톤에서 Claude Code 제대로 쓰는 법 — Sales Intel Squad 빌드 회고"
excerpt: "AI Agent Olympics Milan 2026 출품작을 Claude Code로 만들면서 반복해서 효과를 본 5개 패턴."

categories:
  - Tips
tags:
  - [claude-code, cli, agent, hackathon, workflow]

permalink: /tips/claude-code-tips/

toc: true
toc_sticky: true

date: 2026-04-19
last_modified_at: 2026-04-19
---

## 들어가며

최근 몇 달 동안 **Sales Intel Squad**라는 agent 기반 사이드 프로젝트를 Claude Code로 빌드하고 있다. AI Agent Olympics Milan 2026에 출품할 목적이었고, 개발 기간은 짧았으며 팀은 나 혼자였다. 짧은 시간 안에 쓸만한 것을 만들려면 AI와의 협업 패턴 자체를 최적화해야 했다.

공식 문서를 요약할 생각은 없다. 이 글은 실제 이 프로젝트에서 반복해서 효과를 본, 그리고 한 번 설정해두면 세션마다 계속 돌아오는 5가지 패턴만 추려서 기록한 것이다. 해커톤·사이드 프로젝트 규모에서 Claude Code를 쓰는 주니어 개발자를 독자로 상정했다.

## 1. Memory는 인덱스 + 타입별 파일로

Claude Code의 Auto Memory는 세션 간에 사용자·피드백·프로젝트 맥락을 유지하는 기능이다. 내 실수는 처음에 `MEMORY.md` 한 파일에 다 쑤셔 넣은 것. 그랬더니 컨텍스트 창에 매번 들어가는 본문이 커져서 정작 쓸 토큰을 잡아먹었다.

지금은 이 구조를 쓴다:

```
memory/
├── MEMORY.md               # 인덱스 (한 줄씩 포인터만)
├── user_role.md            # 내가 누구고 어떤 프로젝트를 하는지
├── feedback_docs_alongside_code.md
├── feedback_no_real_person_outreach.md
├── project_sales_intel_squad.md
└── reference_linear_project.md
```

`MEMORY.md`는 정말 인덱스만. 각 항목에 `- [user role](user_role.md) — 주니어 개발자, Sales Intel Squad 빌드 중` 같은 한 줄. 실제 내용은 타입별 파일에 들어 있고, 필요할 때만 Claude가 읽는다.

**사례**: 프로젝트 시작 2주차쯤 `MEMORY.md`가 40줄을 넘었다. 세션을 열 때마다 그 40줄이 전부 컨텍스트로 들어가서, 정작 그 세션에 필요 없는 "작년에 끝난 데이터 수집 방식" 같은 정보가 매번 로드됐다. 인덱스 + 타입별 파일로 쪼개고 나서는 `MEMORY.md`가 12줄로 줄었고, Claude는 그 세션에 관련된 파일만 필요할 때 꺼내 읽게 됐다. 첫 턴 응답도 빨라지고 토큰도 덜 쓴다.

**언제 쓰나**: 두 번째 세션부터. 첫 세션에서는 무리해서 구조 잡지 말고 일단 돌아가게.
**오버킬일 때**: 세션이 3번 안 넘어가는 1회성 프로토타입.

## 2. "또 말해야 하네" 싶을 때 feedback 메모리

해커톤 상황에선 같은 지시를 세 번 이상 반복하게 되는 순간이 반드시 온다. "docs는 코드랑 같이 커밋해줘", "실제 사람한테 이메일 자동으로 보내지 마", "커밋 메시지 앞에 스코프 붙여줘" 같은 것들.

세 번째 반복하기 전에 feedback 타입 메모리로 저장하면, 다음 세션부터 Claude가 알아서 적용한다.

```markdown
---
name: docs alongside code
description: 기능/아키/배포 변경은 같은 커밋에 docs/<subsystem>.md 업데이트를 포함한다
type: feedback
---

기능, 아키텍처, 배포 방식이 바뀌면 반드시 같은 커밋에
`docs/<subsystem>.md` 를 함께 수정한다.

**Why:** Sales Intel Squad 초반에 코드와 문서가 따로 돌아
다니다가 온보딩 때 문서가 실제와 어긋나 있어서 다시 디
버깅하는 손해를 봄.

**How to apply:** PR 단위로 항상 동반 수정. docs-only 커
밋은 허용하되, code-only 커밋은 리뷰에서 막는다.
```

**Why / How to apply 두 줄**이 핵심이다. 그게 없으면 나중에 규칙이 엣지 케이스에 부딪혔을 때 Claude가 혼자 판단을 못 한다.

**사례**: "실제 사람한테 아웃리치 이메일을 테스트 중에 보내지 말 것"을 세 번 다른 세션에서 반복해 말하고 있는 내 모습을 발견했다. 네 번째에 feedback 메모리로 저장하면서 **Why** 에 "지난번 데모 준비하다 테스트용 주소가 실제 고객 리스트에 섞여서 보내질 뻔했음" 을 적어뒀다. 그 후로는 내가 시키지 않아도 Claude가 이메일 송신 코드를 만들 때 "이거 테스트 환경에서만 돌리는 거 맞죠?"를 먼저 확인한다. 같은 규칙이라도 **Why**가 있어야 엣지 케이스에서 작동한다.

## 3. 반복 허용 명령은 `.claude/settings.local.json`

프롬프트마다 "이 명령 허용할까요?" 팝업이 뜨면 흐름이 끊긴다. 반대로 `Bash(*)` 같은 와일드카드를 허용하면 위험하다. 그래서 **실제로 반복되는 명령만** 구체 패턴으로 허용 리스트에 넣는다.

Sales Intel Squad의 예시:

```json
{
  "permissions": {
    "allow": [
      "Bash(python3 -m json.tool:*)",
      "Bash(docker compose up -d *)",
      "Bash(docker compose logs *)",
      "Bash(curl -s http://localhost:*)"
    ]
  }
}
```

- `python3 -m json.tool` — API 응답 파싱할 때 수십 번 돌림
- `docker compose` — 로컬 스택 재기동
- `curl localhost` — health endpoint 확인

반대로 `vercel deploy --prod`, `git push --force`, `rm -rf` 같은 건 절대 허용 리스트에 안 넣는다. 해커톤 막판에 실수로 production 날리는 시나리오를 피하는 최소한의 안전장치.

**사례**: 통합 테스트 디버깅을 할 때 `python3 -m json.tool` 을 한 세션에서 20번 넘게 돌렸다. 매번 퍼미션 팝업이 뜨면서 흐름이 끊겼다. 한 번 허용 리스트에 넣자 "JSON 파싱 → 뭔가 이상함 → 다시 파싱" 의 디버깅 루프가 끊김 없이 돌아간다. 반대로 막판에 피곤해진 새벽 2시의 내가 실수로 `vercel deploy --prod` 를 쳐도 Claude가 매번 나를 한 번 멈춰 세우도록 이건 허용 리스트에 **절대** 안 넣었다.

**팁**: `/fewer-permission-prompts` skill이 최근 세션 기록을 훑어서 반복된 read-only 명령을 자동으로 추려준다. 처음에 한 번 돌려보면 편하다.

## 4. 큰 변경 전엔 Plan Mode + Explore 서브에이전트

"이 기능 추가하려면 코드베이스 어디부터 건드려야 해?" 같은 질문이 들기 시작하면, 바로 구현에 들어가지 말고 Plan Mode로 전환한다 (`Shift`+`Tab` 두 번).

Plan Mode에서 Claude는:
1. Explore 서브에이전트를 병렬로 띄워서 코드베이스를 훑고
2. `/Users/dyk/.claude/plans/<branch-name>.md` 파일에 실행 계획을 쓰고
3. 내 승인 전까지 아무것도 건드리지 않는다.

Sales Intel Squad에서는 agent 파이프라인 전체를 리팩터링할 때 이걸로 **계획 파일을 먼저 합의**한 뒤 실행했다. 구현 중간에 "그럼 X 부분은 어떡하죠?" 하고 되돌아오는 상황이 훨씬 줄었다.

**사례**: "lead enrichment 파이프라인에 LinkedIn 데이터 붙여줘" 라고 막연히 시켰던 적이 있다. Plan Mode 없이 바로 넘겼으면 Claude가 내가 생각한 것과 다른 모듈에서 작업을 시작했을 거고, 4개 파일이 엉뚱하게 수정된 뒤에야 내가 알아차렸을 가능성이 크다. Plan Mode에서는 Explore 서브에이전트가 먼저 "현재 enrichment 로직이 어디에 있는지" 를 매핑해서 계획 파일에 적었고, 내가 그 매핑을 보자마자 잘못된 모듈 지정을 고칠 수 있었다. revert + 재시도에 걸렸을 20분을 아꼈다.

**언제 쓰나**: 2개 이상 파일 변경되거나, 아키텍처가 바뀌거나, 실행 비용이 큰 작업.
**오버킬일 때**: 타이포 수정, 한 파일 안 단순 리팩터링.

## 5. 긴 작업은 background + Monitor, `sleep 300` 금지

해커톤 막판에 빌드·테스트·배포가 동시에 돌면 "이게 끝날 때까지 5분만 기다리자"가 쉽게 나온다. 여기서 `sleep 300`을 걸면 컨텍스트 캐시가 만료돼서 다음 턴이 느려지고 비싸진다.

그 대신:

```bash
# 길게 돌 명령은 background로
npm run build &  # ← 하지 말 것, 아래 방식 사용
```

Claude Code에서는 Bash tool의 `run_in_background: true` 옵션을 쓰면, 명령이 백그라운드에서 돌고 **완료 시 자동 알림**이 온다. 폴링할 필요 없음.

로그를 스트리밍으로 감시해야 할 때는 Monitor tool:

```
tail -f deploy.log | grep -E --line-buffered "DONE|ERROR|FAILED"
```

매칭되는 라인이 뜰 때마다 이벤트로 들어온다. 해커톤 판막바지에 배포 로그 지켜보면서 다른 작업 이어가기 좋다.

**사례**: agent 통합 테스트 풀 세트가 4분 정도 걸렸다. 처음에 습관적으로 `sleep 240` 을 걸었다가, 그 다음 턴이 유난히 느리고 토큰도 많이 쓰는 걸 보고 이유를 찾아봤다 — 프롬프트 캐시 TTL(5분)을 살짝 넘겨서 전체 대화가 cold read 된 것. `run_in_background: true` 로 바꾼 뒤에는 테스트가 돌아가는 동안 내가 다른 파일을 리팩터링했고, 테스트가 끝나면 알림이 왔다. 캐시가 따뜻한 상태로 두 작업이 모두 굴러갔다.

**원칙**: 60초 이하로 기다릴 일이면 그냥 기다리고, 5분 이상 걸릴 일이면 background로. 중간(1~5분)을 `sleep`으로 때우는 게 가장 비효율 — 캐시가 만료되는 딱 그 구간이다.

## 솔직한 꼬리말 — 안 써본 것

공정하게 밝히면, 나도 아직 Claude Code의 절반만 쓰고 있다. 이번 프로젝트에서는 아래를 **안** 썼다:

- **MCP 서버 풀스택 통합** — Vercel/Linear/Gmail MCP 연결해두면 바깥 시스템을 직접 조작할 수 있지만, 해커톤 규모에서는 설정 비용이 크다. 운영 중인 실제 프로덕트에서나 투자할 만함.
- **Vercel Workflow, Rolling Releases, Vercel Sandbox** — 프로덕션 규모 agent 인프라. 내 프로젝트는 그 지점까지 안 갔다.
- **Custom skill 만들기** — 플러그인 skill(`/vercel:deploy`, `/commit-commands:commit`)은 자주 썼지만 내 로컬 skill은 아직 안 만들었음. 다음 프로젝트에서 시도 예정.

독자도 전부 다 할 필요는 없다. 위 5개 패턴만 먼저 안착시켜도 세션당 체감 생산성이 크게 달라진다.

## 더 읽을 거

- [Claude Code CLI Shortcuts](/tips/claude-code-shortcuts/) — 키 바인딩·슬래시 커맨드 레퍼런스
- Sales Intel Squad 프로젝트의 `docs/claude-code-tips.md` 원본 노트 (내부 문서)
