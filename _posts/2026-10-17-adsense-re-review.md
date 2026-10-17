---
title: "AdSense 재심사: 사이트에서 발견된 문제를 추적한 세 가지 작업"
excerpt: "AdSense 심사에서 '사이트에서 발견된 문제 수정 필요' 한 줄 받고 반려됐다. Guide/FAQ/Methodology 3종 추가, www→apex 301 redirect, per-view document title로 재심사를 준비한 기록."

categories:
  - Tips
tags:
  - [adsense, seo, netlify, i18n]

permalink: /tips/adsense-re-review/

toc: true
toc_sticky: true

date: 2026-10-17
last_modified_at: 2026-10-17
---

## 들어가며

[villagertier.com](https://villagertier.com) — 모동숲 드림 주민 조합기. AdSense 타임라인은 이렇다: 6/5 가입, 6/7 심사 제출, 6/14 반려. 반려 사유는 "사이트에서 발견된 문제 수정 필요" 한 줄이 전부다.

사이트 자체는 정상이다. HTTP 200, 391명 리스트 렌더, ads.txt 서빙까지 확인했다. 광고 코드도 이미 완성돼 있다 — AdSense loader가 실배포 번들에 포함돼 있고 매 방문 로드되며, 랜딩+메인에 AdSlot 2곳이 있다. 문제는 slot ID가 없다는 것. slot ID는 승인 후에만 생성할 수 있어서, 지금 AdSlot은 null이다. 즉 bottleneck은 코드가 아니라 "승인" 그 자체다.

이 글은 재심사를 위해 실제로 한 세 가지 작업을 정리한 것이다. AdSense 재심사를 준비하는 사람을 독자로 상정했다.

## 1. content를 채운다: Guide/FAQ/Methodology

반려 사유 한 줄에서 추정한 첫 번째 원인은 thin content다. 단일 페이지 도구 사이트라 crawler가 읽을 텍스트가 거의 없다. 주민 391명의 이름이 있긴 하지만, 그건 리스트지 content가 아니다.

그래서 Guide/FAQ/Methodology 3종 페이지를 추가했다. 한/영/일 3개국어, 52개 i18n keys. typecheck, tests 20/20, build 통과까지 확인하고 넣었다.

About 섹션도 랜딩에 넣었다. 비공식 팬 프로젝트라는 고지 포함 — Nintendo IP를 쓰는 팬 사이트라, 이건 AdSense 이전에 밝혀둘 문제다. changelog 페이지도 추가했다. 사이트가 "살아있다"는 신호를 crawler와 심사자에게 준다.

**사례**: 6/14 반려 메일은 사유를 한 줄만 준다. 뭘 고쳐야 할지 안 알려주니, AdSense가 공개적으로 말하는 기준(충분한 content, 고유한 가치)에서 역으로 추적할 수밖에 없었다. 제일 먼저 눈에 밟힌 게 "읽을 게 없는 페이지"였다.

**언제 쓰나**: AdSense 재심사를 준비할 때. 단일 페이지 도구 사이트라면 거의 필수 코스다.
**overkill일 때**: 이미 content가 충분한 블로그라면 이 작업은 필요 없다. 도구가 아니라 글이 본체인 사이트는 해당 없음.

## 2. host를 하나로 묶는다: www → apex 301 redirect

두 번째로 찾은 문제는 duplicate host였다. www.villagertier.com이 apex와 별개로 HTTP 200을 뱉고 있었다. 같은 content가 두 host에 있으면 crawler 입장에서는 duplicate content다.

netlify.toml에 redirect를 추가했다:

```toml
# Canonical host: redirect www to apex (avoid duplicate content on two hosts)
[[redirects]]
  from = "https://www.villagertier.com/*"
  to = "https://villagertier.com/:splat"
  status = 301
  force = true
```

주의할 점은 순서다. SPA fallback(`/* → /index.html`, status 200)보다 먼저 평가되어야 해서 redirect를 위에 둔다. `force = true`로 파일 존재 여부와 무관하게 적용한다. AdSense와 Search Console을 단일 canonical domain에 묶어두는 게 목적이다.

**사례**: 브라우저에서는 www와 apex가 같은 사이트로 보인다. 하지만 서버 입장에서는 별개의 host였고, 둘 다 200을 뱉고 있었다. 직접 확인하기 전에는 몰랐다.

**언제 쓰나**: www와 apex를 둘 다 쓰는 사이트라면. AdSense와 Search Console을 단일 canonical domain에 묶어둘 때.
**overkill일 때**: 처음부터 apex(또는 www) 하나로만 운영했다면 할 게 없다.

## 3. title을 뷰마다 다르게 준다

hash routing SPA라 실경로는 "/" 하나뿐이다. 그래도 document title은 뷰마다 다르게 줬다. Guide, FAQ, Methodology, changelog가 각자의 title을 가진다. crawler와 탭을 오가는 사용자에게 현재 위치를 알려주는 가장 싼 신호다.

**사례**: SPA는 URL이 바뀌어도 title이 그대로인 경우가 많다. 탭을 여러 개 열어둔 사용자는 어느 탭이 뭔지 모른다. 한 줄이면 고쳐지는 문제라 그냥 했다.

**언제 쓰나**: SPA인데 title이 고정인 경우. 한 줄이면 된다.
**overkill일 때**: 페이지마다 title이 이미 다르면 해당 없음.

## 결과

한 것:
- Guide/FAQ/Methodology 3종 (ko/en/ja, 52 i18n keys)
- About 섹션 (비공식 팬 프로젝트 고지 포함)
- changelog 페이지
- per-view document title
- www → apex 301 redirect

남은 것:
- AdSense 사이트 페이지에서 반려 사유 직접 확인
- 재심사 요청
- 승인 후 광고 단위 2개의 slot ID 생성 → `VITE_ADSENSE_SLOT_MAIN`/`VITE_ADSENSE_SLOT_LANDING`에 설정 (그 전까지 AdSlot은 null)

참고로 트래픽 신호도 있다. Search Console 기준 28일간 클릭 10회 (10/16). 크진 않지만 0은 아니다.

## 솔직한 꼬리말 — 이 작업의 한계

- **반려 사유는 추정에 불과하다.** AdSense는 구체적인 이유를 알려주지 않는다. "사이트에서 발견된 문제" 한 줄로 뭘 고쳐야 할지 역추적하는 건 educated guess다. content를 채운다고 승인이 보장되진 않는다.
- **팬 사이트의 IP 리스크는 별개다.** Nintendo IP를 쓰는 비공식 프로젝트라, AdSense 승인 후에도 저작권 이슈는 남는다. About에 고지를 넣은 건 최소한의 선이다.
- **slot ID 없이는 검증이 안 된다.** 코드가 완성돼 있어도 승인 전에는 광고가 실제로 뜨는지 확인할 방법이 없다. 배포하고 "될 거야"라고 믿는 구간이 있다.

## 더 읽을 거

- [villagertier.com](https://villagertier.com) — 문제의 사이트
