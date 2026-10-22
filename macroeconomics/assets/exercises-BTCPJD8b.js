var e=[{id:`wage-cut-c-06`,difficulty:2,topics:[`two-faces-of-wages`],statement:{ko:String.raw`경제 전체가 임금을 \(3\)씩 내렸다.

한계소비성향이 \(c = 0.6\)일 때 (1) 산출과 고용의 변화, (2) 최종 임금총액을 구하라. (노동자 \(100\)명, 1인당 산출 \(15\), 원래 임금 \(10\))`,en:String.raw`The whole economy cuts wages by \(3\).

With MPC \(c = 0.6\), find (1) the change in output and jobs, and (2) the final wage bill. (\(100\) workers, output \(15\) each, starting wage \(10\).)`},solution:[{text:{ko:String.raw`(1) 임금총액의 1차 감소는 \(3 \cdot 100 = 300\)이고, 소비는 \(0.6 \cdot 300 = 180\) 줄어든다. 승수 \(\frac{1}{1 - 0.6} = 2.5\)를 타면 산출은 \(180 \cdot 2.5 = 450\) 감소해 \(1500\)에서 \(1050\)이 되고, 고용은 \(1050 / 15 = 70\)명 — \(30\)명이 일자리를 잃는다.`,en:String.raw`(1) The first-round wage-bill loss is \(3 \cdot 100 = 300\); consumption falls by \(0.6 \cdot 300 = 180\). Through the multiplier \(\frac{1}{1 - 0.6} = 2.5\), output falls by \(180 \cdot 2.5 = 450\), from \(1500\) to \(1050\), and jobs land at \(1050 / 15 = 70\) — \(30\) jobs gone.`}},{text:{ko:String.raw`(2) 최종 임금총액은 새 임금 \(7\)에 남은 고용 \(70\)을 곱한 \(490\)이다.

처음 겨냥한 감소 \(300\)의 두 배 가까운 \(510\)이 사라졌다 — 임금과 일자리가 함께 줄면 임금총액은 스스로를 먹으며 줄어든다.

한 회사만 봤다면 답은 정반대다: 같은 인하로 그 회사는 \(L = 60 - 4 \cdot 7 = 32\)명, 즉 \(12\)명을 더 뽑는다.`,en:String.raw`(2) The final wage bill is the new wage \(7\) times the surviving jobs \(70\): \(490\).

The fall is \(510\), nearly twice the intended \(300\) — when wages and jobs fall together, the wage bill feeds on itself.

Through the one-firm lens the answer flips: the same cut lets one firm hire \(L = 60 - 4 \cdot 7 = 32\), twelve MORE workers.`}}],viz:{sceneId:`two-faces-of-wages`,preset:{view:`whole-economy`,dwage:3,mpc:.6},presetCaption:{ko:String.raw`경제 전체 보기 — 임금 \(3\) 인하, \(c = 0.6\): 고용 \(100 \to 70\).`,en:String.raw`Whole-economy view — wage cut \(3\), \(c = 0.6\): jobs \(100 \to 70\).`}}},{id:`menu-cost-band-f8`,difficulty:3,topics:[`menu-costs`],statement:{ko:String.raw`메뉴 비용이 \(F = 8\)이고 이윤 언덕이 \(\pi = 100 - 2(p - p^*)^2\)이다.

(1) 무대응 구간의 경계 \(\delta^*\)는 얼마인가?

(2) 충격 \(\delta = 1.5\)와 \(\delta = 2.5\)에서 각각 가격과 판매량은 어떻게 되는가?

(3) 충격 분포가 같은 회사 \(12\)곳 중 몇 곳이 가격을 그대로 두는가?`,en:String.raw`The menu cost is \(F = 8\) and the profit hill is \(\pi = 100 - 2(p - p^*)^2\).

(1) Where is the edge \(\delta^*\) of the inaction band?

(2) For shocks \(\delta = 1.5\) and \(\delta = 2.5\), what happens to the price and to volume?

(3) Among twelve firms drawing the scene's assorted shocks, how many keep their price?`},solution:[{text:{ko:String.raw`(1) 경계는 손해 \(2\delta^2\)이 메뉴 비용 \(8\)과 같아지는 곳이다: \(\delta^* = \sqrt{8 / 2} = 2\). 충격이 \(2\)를 넘지 않으면 버티는 쪽이 싸고, 넘으면 바꾸는 쪽이 싸다.`,en:String.raw`(1) The edge is where the standing-still loss \(2\delta^2\) equals the menu cost \(8\): \(\delta^* = \sqrt{8 / 2} = 2\). Shocks up to \(2\) are cheaper to swallow; past \(2\), cheaper to reprint.`}},{text:{ko:String.raw`(2) \(\delta = 1.5\): 손해 \(2 \cdot 1.5^2 = 4.5 < 8\)이라 가격 \(10\)을 유지하고, 판매량은 \(50 - 5 \cdot 1.5 = 42.5\)로 준다. \(\delta = 2.5\): 손해 \(2 \cdot 2.5^2 = 12.5 > 8\)이라 가격을 \(7.5\)로 내리고, 판매량은 \(50\)을 회복한다.`,en:String.raw`(2) At \(\delta = 1.5\): the loss \(2 \cdot 1.5^2 = 4.5 < 8\), so the price stays at \(10\) and volume falls to \(50 - 5 \cdot 1.5 = 42.5\). At \(\delta = 2.5\): the loss \(2 \cdot 2.5^2 = 12.5 > 8\), so the price drops to \(7.5\) and volume recovers to \(50\).`}},{text:{ko:String.raw`(3) 경계 \(2\) 안에 충격이 들어온 회사가 가격을 유지한다.

장면의 충격 목록 \(0.25\)부터 \(4\)까지 중 \(2\) 이하가 \(8\)곳이므로, \(12\)곳 중 \(8\)곳 \((67\%)\)이 가격을 얼린 채 수량으로 충격을 맞는다.

메뉴 비용이 클수록 이 몫이 커지고, 경제 전체의 가격은 더 끈적해진다.`,en:String.raw`(3) Firms whose shock lands inside the band edge \(2\) keep their price.

Of the scene's shock list, from \(0.25\) to \(4\), eight values are at most \(2\), so \(8\) of \(12\) firms \((67\%)\) freeze their price and let quantities take the hit.

The bigger the menu cost, the bigger that share — and the stickier the whole economy's prices.`}}],viz:{sceneId:`menu-costs`,preset:{delta:1.5,fee:8},presetCaption:{ko:String.raw`메뉴 비용 \(8\), 충격 \(1.5\) — 구간 안이라 가격 유지, 회사 \(8/12\)곳이 동결.`,en:String.raw`Menu cost \(8\), shock \(1.5\) — inside the band, price stays; \(8\) of \(12\) firms frozen.`}}}];export{e as exercises};