var e=[{id:`optimal-reserve`,statement:{ko:String.raw`구매자 가치 \(v \sim U[0,1]\)이고 리저브가 \(r\)인 직접 메커니즘에서 기대수익이 \(R(r) = r - r^2\)임을 보이고,

수익을 극대화하는 \(r^*\)를 구하라.`,en:String.raw`With buyer value \(v \sim U[0,1]\) and reserve \(r\), show that expected revenue of the direct mechanism is \(R(r) = r - r^2\),

and find the revenue-maximizing \(r^*\).`},display:[String.raw`\psi(v) = v - \frac{1 - F(v)}{f(v)} = v - (1 - v) = 2v - 1`,String.raw`R(r) = \int_r^1 \psi(v)\, dv = r - r^2`],preset:{r:.5,v:.7,rhat:.7},presetCaption:{ko:String.raw`\(r^* = 0.5\), \(R = 0.25\) — 최적 리저브.`,en:String.raw`\(r^* = 0.5\), \(R = 0.25\) — the optimal reserve.`},proof:[{text:{ko:String.raw`분포함수가 \(F(v) = v\), 밀도가 \(f(v) = 1\)이므로 가상가치는 \(\psi(v) = v - (1-v)/1 = 2v - 1\)이다. \(\psi(v) \ge 0 \iff v \ge 1/2\) — 판매가 기대수익에 플러스로 기여하는 구간이다.`,en:String.raw`With \(F(v) = v\) and density \(f(v) = 1\), the virtual value is \(\psi(v) = v - (1-v)/1 = 2v - 1\). And \(\psi(v) \ge 0 \iff v \ge 1/2\) — the region where selling adds to expected revenue.`}},{text:{ko:String.raw`기대수익은 가상잉여의 기댓값이다: \(R(r) = \int_r^1 (2v-1)\,dv = [v^2 - v]_r^1 = (1-1) - (r^2-r) = r - r^2\).`,en:String.raw`Expected revenue is the expected virtual surplus: \(R(r) = \int_r^1 (2v-1)\,dv = [v^2 - v]_r^1 = (1-1) - (r^2-r) = r - r^2\).`}},{text:{ko:String.raw`1계 조건 \(R'(r) = 1 - 2r = 0\)에서 \(r^* = 0.5\)를 얻고, \(R''(r) = -2 < 0\)이므로 최대값이다.

\(R(0.5) = 0.5 - 0.25 = 0.25\).

직관: \(r < 0.5\)에서 판매하면 가상가치가 음수인 구매자에게 파는 셈이라 수익이 깎이고, \(r > 0.5\)에서는 양의 가상잉여를 버린다 — 위 패널의 파란 영역이 곧 기대수익이다.`,en:String.raw`The first-order condition \(R'(r) = 1 - 2r = 0\) gives \(r^* = 0.5\), and \(R''(r) = -2 < 0\) confirms a maximum.

\(R(0.5) = 0.5 - 0.25 = 0.25\).

The intuition: selling at \(r < 0.5\) means selling to buyers with negative virtual value, which drags revenue down, while \(r > 0.5\) throws away positive virtual surplus — the blue region in the top panel is exactly the expected revenue.`},display:[String.raw`r^* = \frac{1}{2}, \qquad R(r^*) = \frac{1}{2} - \frac{1}{4} = 0.25`]}]},{id:`truth-telling`,statement:{ko:String.raw`\(r = 0.5\), 진짜 가치 \(v = 0.7\)인 구매자가 \(\hat{v} = 0.3\)이라고 속였을 때의 보수와 진실을 말했을 때의 보수를 비교하라.

반대로 \(v = 0.4\)인 구매자가 \(\hat{v} = 0.8\)이라고 속이면 어떻게 되는가?`,en:String.raw`With reserve \(r = 0.5\), compare the payoff of a buyer with true value \(v = 0.7\) who lies with \(\hat{v} = 0.3\) against telling the truth.

What happens when a buyer with \(v = 0.4\) lies with \(\hat{v} = 0.8\)?`},display:[String.raw`U(v, \hat{v}) = (v - r) \cdot \mathbf{1}\{\hat{v} \ge r\}`,String.raw`U(0.7, 0.7) = 0.2, \qquad U(0.7, 0.3) = 0`],preset:{r:.5,v:.7,rhat:.3},presetCaption:{ko:String.raw`\(v = 0.7\), \(\hat{v} = 0.3\) — 거짓말은 물건을 놓친다.`,en:String.raw`\(v = 0.7\), \(\hat{v} = 0.3\) — the lie loses the good.`},proof:[{text:{ko:String.raw`진실을 말하면 \(\hat{v} = 0.7 \ge 0.5\)이므로 낙찰받아 \(r = 0.5\)를 내고 \(0.7 - 0.5 = 0.2\)를 얻는다.

\(\hat{v} = 0.3 < 0.5\)로 속이면 탈락해 보수는 0이다.

진실이 \(0.2\)만큼 낫다 — 낮게 속이면 양의 잉여를 통째로 버린다.`,en:String.raw`Telling the truth, \(\hat{v} = 0.7 \ge 0.5\) wins the good, pays \(r = 0.5\), and earns \(0.7 - 0.5 = 0.2\).

Lying with \(\hat{v} = 0.3 < 0.5\) loses the good for a payoff of 0.

Truth wins by \(0.2\) — under-reporting throws away the whole positive surplus.`}},{text:{ko:String.raw`반대 방향도 마찬가지다.

\(v = 0.4\)인 구매자가 진실을 말하면 \(0.4 < 0.5\)이므로 0을 얻는다. \(\hat{v} = 0.8\)로 속이면 낙찰받지만 \(0.5\)를 내야 하므로 보수는 \(0.4 - 0.5 = -0.1\) — 가치보다 비싸게 산 셈이다.

어느 방향으로 속여도 진실보다 나아질 수 없으므로, 이 직접 메커니즘은 유인양립적이다.`,en:String.raw`The reverse direction is symmetric.

A buyer with \(v = 0.4\) who tells the truth gets 0 since \(0.4 < 0.5\). Lying with \(\hat{v} = 0.8\) wins the good but costs \(0.5\), for a payoff of \(0.4 - 0.5 = -0.1\) — paying more than the value.

No lie in either direction beats the truth, so this direct mechanism is incentive compatible.`}}]}],t=[{id:`overbidding-cost`,statement:{ko:String.raw`내 가치 \(v = 60\)이고 상대는 진실을 입찰한다.

내가 \(b = 80\)으로 오버비딩하면 기대보수·승률·기대지불을 구하고, 진실 입찰(\(b = 60\))과 비교하라.`,en:String.raw`My value is \(v = 60\) and the opponent bids truthfully.

If I overbid with \(b = 80\), compute my expected payoff, win probability, and expected payment, and compare with truthful bidding (\(b = 60\)).`},display:[String.raw`U(b; v) = \int_0^b \frac{v - v_o}{100}\, dv_o = \frac{vb - b^2/2}{100}`,String.raw`U(80; 60) = \frac{4800 - 3200}{100} = 16 < 18 = U(60; 60)`],preset:{v:60,b:80},presetCaption:{ko:String.raw`\(v = 60\), \(b = 80\) — 오버비딩은 2의 손실.`,en:String.raw`\(v = 60\), \(b = 80\) — overbidding loses 2.`},proof:[{text:{ko:String.raw`기대보수는 \(U(b; 60) = (60b - b^2/2)/100\)이다. \(b = 80\)이면 \(U = (4800 - 3200)/100 = 16\), 진실 입찰 \(b = 60\)이면 \(U = (3600 - 1800)/100 = 18\) — 오버비딩의 손실은 \(18 - 16 = 2\)이다.`,en:String.raw`Expected payoff is \(U(b; 60) = (60b - b^2/2)/100\). At \(b = 80\), \(U = (4800 - 3200)/100 = 16\); at truthful \(b = 60\), \(U = (3600 - 1800)/100 = 18\) — overbidding loses \(18 - 16 = 2\).`}},{text:{ko:String.raw`손실의 원천: \(v_o \in (60, 80]\)일 때 이기기는 하지만 \(v_o > 60 = v\)를 지불해 음의 잉여를 얻는다.

승률은 \(80/100 = 0.8\)로 오르지만 기대지불도 \(80^2/200 = 32\)로 함께 올라 순효과는 음수다.

\(dU/db = (60-b)/100\)이므로 \(b > 60\) 구간에서는 기울기가 음수 — 입찰을 올릴수록 보수가 줄어든다.`,en:String.raw`The source of the loss: when \(v_o \in (60, 80]\) you win but pay \(v_o > 60 = v\), earning negative surplus.

The win probability rises to \(80/100 = 0.8\), but expected payment rises with it to \(80^2/200 = 32\), and the net effect is negative.

Since \(dU/db = (60-b)/100 < 0\) for \(b > 60\), raising the bid past the value only shrinks the payoff.`},display:[String.raw`\frac{dU}{db} = \frac{v - b}{100}, \qquad \left.\frac{dU}{db}\right|_{b=80} = -0.2`]}]},{id:`underbidding-cost`,statement:{ko:String.raw`같은 상황에서 \(b = 40\)으로 언더비딩하면 기대보수는 얼마인가?

진실 입찰과 비교하고, 어떤 입찰도 진실을 이길 수 없음을 일반적으로 증명하라.`,en:String.raw`In the same situation, what is the expected payoff of underbidding with \(b = 40\)?

Compare with truthful bidding and prove in general that no bid can beat the truth.`},display:[String.raw`U(40; 60) = \frac{2400 - 800}{100} = 16 < 18 = U(60; 60)`],preset:{v:60,b:40},presetCaption:{ko:String.raw`\(v = 60\), \(b = 40\) — 언더비딩도 2의 손실.`,en:String.raw`\(v = 60\), \(b = 40\) — underbidding also loses 2.`},proof:[{text:{ko:String.raw`\(U(40; 60) = (2400 - 800)/100 = 16\) — 진실 입찰보다 \(2\) 낮다.

\(v_o \in (40, 60]\)일 때 질 수밖에 없는데, 그 구간에서는 이겼다면 \(60 - v_o > 0\)의 양의 잉여를 얻을 수 있었다.

언더비딩의 손실은 놓친 승리의 기회비용이다.`,en:String.raw`\(U(40; 60) = (2400 - 800)/100 = 16\) — lower than truthful bidding by \(2\).

Whenever \(v_o \in (40, 60]\) you lose, yet winning there would have earned the positive surplus \(60 - v_o > 0\).

The loss from underbidding is the opportunity cost of forfeited wins.`}},{text:{ko:String.raw`일반적으로 \(U(v; v) - U(b; v) = \frac{v^2}{200} - \frac{vb - b^2/2}{100} = \frac{(v-b)^2}{200} \ge 0\) — 어떤 \(b\)도 진실 입찰을 이길 수 없다. 이것이 진실 말하기가 약우월전략이라는 것의 계산적 증명이다.`,en:String.raw`In general, \(U(v; v) - U(b; v) = \frac{v^2}{200} - \frac{vb - b^2/2}{100} = \frac{(v-b)^2}{200} \ge 0\) — no bid beats truthful bidding. This is the computational proof that truth-telling is a weakly dominant strategy.`},display:[String.raw`U(v; v) - U(b; v) = \frac{(v-b)^2}{200} \ge 0`]}]}],n={id:`mechanism-design`,title:{ko:`메커니즘 디자인`,en:`Mechanism Design`},summary:{ko:`계시원리로 직접 메커니즘에 집중하고, 가상가치로 최적 경매를 설계한 뒤, 2가격 경매에서 진실을 말하는 것이 왜 우월전략인지 숫자로 확인한다.`,en:`Focus on direct mechanisms via the revelation principle, design the optimal auction with virtual values, then verify numerically why truth-telling is dominant in a second-price auction.`},scenes:[{id:`revelation`,title:{ko:`계시원리와 최적경매`,en:`The Revelation Principle and Optimal Auctions`},order:1,summary:{ko:String.raw`이 씬은 물건 하나를 파는 최적의 규칙을 찾는다. 복잡한 게임은 접어두고 직접 묻는 방식만 본다.

계시원리 덕분에 정직한 규칙만 찾으면 된다. 사는 사람의 진짜 가치를 직접 물어본다. 최저가보다 낮게 말하면 못 산다. 최저가 이상이면 그 최저가만 낸다. 최저가를 잘 정하면 기대수익이 최대가 된다. 아래 식의 가상가치가 그 지점을 알려준다.

예를 들면, 당신이 ⚽ 축구공 하나를 판다. 친구는 그 공이 8,000원어치 가치가 있다고 생각한다. 당신은 최저가를 5,000원으로 정한다. 친구가 5,000원 이상이라고 말하면 공을 가져간다. 내는 💰 돈은 딱 5,000원이다. 거짓말을 해도 이득이 없어 솔직해진다.`,en:String.raw`This scene finds the best rule for selling one item. We skip complicated games and only ask directly.

The revelation principle says honest rules are enough. Ask the buyer what the item is truly worth. Reports below the reserve get nothing. Reports at or above it pay exactly the reserve. A well-chosen reserve maximizes expected revenue. The virtual value in the formula below marks the spot.

For example, you sell one ⚽ soccer ball. Your friend values it at 8,000 won. You set the reserve at 5,000 won. If your friend reports at least 5,000, the ball is theirs. They pay exactly 5,000 💰 won. Lying gains nothing, so honesty wins.`},tex:[String.raw`\psi(v) = v - \frac{1-F(v)}{f(v)} = 2v - 1`,String.raw`R(r) = \int_r^1 \psi(v)\, dv = r - r^2, \qquad r^* = \frac{1}{2}`],controls:[{kind:`slider`,key:`r`,label:{ko:`리저브 r`,en:`reserve r`},min:0,max:.9,step:.05,init:.5},{kind:`slider`,key:`v`,label:{ko:`진짜 가치 v`,en:`true value v`},min:0,max:1,step:.05,init:.7},{kind:`slider`,key:`rhat`,label:{ko:`보고값 r̂`,en:`report r̂`},min:0,max:1,step:.05,init:.7}],problems:e},{id:`vickrey`,title:{ko:`2가격 경매: 진실 말하기가 우월전략`,en:`Second-Price Auction: Truth-Telling Is Dominant`},order:2,summary:{ko:String.raw`이 씬은 2가격 경매에서 솔직한 입찰이 왜 최선인지 보여준다. 상대는 한 명이고 솔직하게 입찰한다.

내 입찰은 내가 낼 가격을 정하지 않는다. 이기면 상대가 부른 가격만큼만 낸다. 그래서 가치보다 높게 부를 이유가 없다. 높게 부르면 가치보다 비싸게 사는 일만 생긴다. 낮게 부르면 살 수 있던 승리를 놓친다. 아래 식처럼 손실은 거리의 제곱으로 커진다.

예를 들면, 반에서 ⚽ 공 하나를 경매로 판다. 당신은 그 공이 6,000원어치라고 생각한다. 친구는 4,000원을 불렀다. 솔직히 6,000원을 부르면 당신이 이긴다. 내는 💰 돈은 친구의 4,000원뿐이다. 8,000원을 불러도 내는 돈은 똑같다. 대신 친구가 7,000원이었다면 손해를 보고 사게 된다.`,en:String.raw`This scene shows why honest bidding wins in a second-price auction. There is one opponent, and they bid honestly.

Your bid does not set the price you pay. Winning means paying the opponent's bid. So bidding above your value gains nothing. It only creates wins that cost too much. Bidding lower throws away wins you could afford. As the formula below shows, the loss grows with the square of the gap.

For example, your class auctions off one ⚽ ball. You value it at 6,000 won. A friend bids 4,000 won. Bid your honest 6,000 and you win. You pay only the friend's 4,000 💰 won. Bid 8,000 and the price stays the same. But if the friend had bid 7,000, you would overpay.`},tex:[String.raw`U(b; v) = \int_0^b \frac{v - v_o}{100}\, dv_o = \frac{vb - b^2/2}{100}`,String.raw`U(v; v) - U(b; v) = \frac{(v-b)^2}{200} \ge 0`],prerequisites:[`revelation`],controls:[{kind:`slider`,key:`v`,label:{ko:`내 가치 v`,en:`my value v`},min:0,max:100,step:1,init:60},{kind:`slider`,key:`b`,label:{ko:`내 입찰 b`,en:`my bid b`},min:0,max:100,step:1,init:60}],problems:t}]};export{n as t};