var e=[{id:`pigouvian-tax`,statement:{ko:String.raw`수요 \(P = 10 - Q\), 사적 한계비용 \(MPC = 2 + Q\), 한계피해 \(MD = 2 + 0.5Q\)라 하자. 시장 균형과 사회적 최적을 구하고, 피구세가 시장을 사회적 최적로 되돌림을 직접 확인하라.`,en:String.raw`Let demand be \(P = 10 - Q\), private marginal cost \(MPC = 2 + Q\), and marginal damage \(MD = 2 + 0.5Q\). Find the market equilibrium and the social optimum, and verify by hand that the Pigouvian tax restores the social optimum.`},display:[String.raw`MSC(Q) = MPC(Q) + MD(Q) = 4 + 1.5Q`,String.raw`\tau = MD(Q_s)`],preset:{E:2,F:.5,taxOn:!0},presetCaption:{ko:String.raw`피구세 \(\tau = 3.2\) 적용 — 점선이 사회적 최적에 닿는다.`,en:String.raw`Pigouvian tax \(\tau = 3.2\) applied — the dashed curve hits the social optimum.`},proof:[{text:{ko:String.raw`시장 균형은 \(MPC =\) 수요에서 \(2 + Q = 10 - Q\), 즉 \(Q_p = 4\)이다. 사회적 최적은 \(MSC =\) 수요에서 \(4 + 1.5Q = 10 - Q\), 즉 \(2.5Q = 6\)이므로 \(Q_s = 2.4\)이다. 시장은 과잉생산한다.`,en:String.raw`The market equilibrium solves \(MPC =\) demand: \(2 + Q = 10 - Q\), so \(Q_p = 4\). The social optimum solves \(MSC =\) demand: \(4 + 1.5Q = 10 - Q\), so \(2.5Q = 6\) and \(Q_s = 2.4\). The market overproduces.`}},{text:{ko:String.raw`피구세는 사회적 최적에서의 한계피해와 같아야 한다: \(\tau = MD(2.4) = 2 + 0.5 \cdot 2.4 = 3.2\). 세금 포함 사적 비용 \(2 + Q + 3.2\)를 수요와 만나게 하면 \(5.2 + Q = 10 - Q\)에서 \(Q = 2.4 = Q_s\) — 정확히 사회적 최적이다.`,en:String.raw`The Pigouvian tax must equal marginal damage at the social optimum: \(\tau = MD(2.4) = 2 + 0.5 \cdot 2.4 = 3.2\). Equating tax-inclusive private cost to demand, \(5.2 + Q = 10 - Q\) gives \(Q = 2.4 = Q_s\) — exactly the social optimum.`}}]},{id:`dwl-externality`,statement:{ko:String.raw`같은 예에서 교정되지 않은 외부성의 사중손실을 삼각형 넓이로 계산하라. 한계피해가 상수(\(F = 0\))이면 답이 어떻게 달라지는가?`,en:String.raw`In the same example, compute the deadweight loss of the uncorrected externality as a triangle area. How does the answer change if marginal damage is constant (\(F = 0\))?`},preset:{E:2,F:.5,taxOn:!1},presetCaption:{ko:String.raw`세금 없음 — 빨간 삼각형이 사중손실 \(3.2\)이다.`,en:String.raw`No tax — the red triangle is the DWL of \(3.2\).`},proof:[{text:{ko:String.raw`사중손실 삼각형은 \(Q_s = 2.4\)부터 \(Q_p = 4\)까지, 수요곡선과 MSC 곡선 사이다. 높이는 \(Q_p\)에서의 간격 \(MD(4) = 2 + 2 = 4\)이고 밑변은 \(4 - 2.4 = 1.6\)이므로, 넓이는 \(4 \cdot 1.6 / 2 = 3.2\)이다.`,en:String.raw`The DWL triangle runs from \(Q_s = 2.4\) to \(Q_p = 4\), between the demand and MSC curves. Its height is the gap at \(Q_p\), \(MD(4) = 2 + 2 = 4\), and its base is \(4 - 2.4 = 1.6\), so the area is \(4 \cdot 1.6 / 2 = 3.2\).`}},{text:{ko:String.raw`\(F = 0\)이면 \(MD = 2\) 상수이다. \(Q_s = (10-2-2)/2 = 3\), 삼각형 높이는 \(2\), 밑변은 \(4-3 = 1\)이므로 사중손실은 \(1\)이다. 피해가 일정하면 피구세도 \(\tau = 2\)로 일정하다.`,en:String.raw`With \(F = 0\), \(MD = 2\) is constant. Then \(Q_s = (10-2-2)/2 = 3\); the triangle has height \(2\) and base \(4-3 = 1\), so DWL is \(1\). With constant damage the Pigouvian tax is also constant at \(\tau = 2\).`},display:[String.raw`DWL = \frac{MD \cdot (Q_p - Q_s)}{2}`]}]}],t=[{id:`samuelson-condition`,statement:{ko:String.raw`\(D_1: P = 10 - G\), \(D_2: P = 8 - G\), 한계비용 \(c = 4\)인 공공재에서 사무엘슨 조건으로 사회적 최적 공급량 \(G^*\)를 구하라.`,en:String.raw`For a public good with \(D_1: P = 10 - G\), \(D_2: P = 8 - G\) and marginal cost \(c = 4\), find the socially optimal quantity \(G^*\) from the Samuelson condition.`},display:[String.raw`\sum_i MRS_i = MRT \quad\Longleftrightarrow\quad D_1(G^*) + D_2(G^*) = c`],preset:{a1:10,a2:8,c:4},presetCaption:{ko:String.raw`수직합이 \(MC = 4\)와 만나는 점 \(G^* = 7\).`,en:String.raw`The vertical sum meets \(MC = 4\) at \(G^* = 7\).`},proof:[{text:{ko:String.raw`공공재는 비경합적이므로 수요를 수직으로 합한다: \(\Sigma D(G) = (10 - G) + (8 - G) = 18 - 2G\) (둘 다 양수인 구간에서).`,en:String.raw`Because the good is non-rival, demands sum vertically: \(\Sigma D(G) = (10 - G) + (8 - G) = 18 - 2G\) (where both are positive).`}},{text:{ko:String.raw`사무엘슨 조건 \(\Sigma D(G^*) = c\)에서 \(18 - 2G^* = 4\), 즉 \(G^* = 7\)이다. \(G = 7\)에서 \(D_1 = 3 > 0\), \(D_2 = 1 > 0\)이므로 꺾이는 구간이 아니어서 유효하다.`,en:String.raw`The Samuelson condition \(\Sigma D(G^*) = c\) gives \(18 - 2G^* = 4\), so \(G^* = 7\). At \(G = 7\), \(D_1 = 3 > 0\) and \(D_2 = 1 > 0\), so we are not on the kinked part — the solution is valid.`}}]},{id:`free-rider-nash`,statement:{ko:String.raw`같은 예에서 자발적 기여의 내쉬균형을 구하고, 누가 무임승차하는지 확인하라. 과소공급의 사중손실도 계산하라.`,en:String.raw`In the same example, find the Nash equilibrium of voluntary contributions, identify the free-rider, and compute the deadweight loss of underprovision.`},preset:{a1:10,a2:8,c:4},presetCaption:{ko:String.raw`사적 공급 \(6\) vs 사회적 최적 \(7\) — 소비자 2가 무임승차한다.`,en:String.raw`Private supply \(6\) vs social optimum \(7\) — consumer 2 free-rides.`},proof:[{text:{ko:String.raw`소비자 \(i\)의 반응함수는 \(g_i = \max(0, (a_i - c) - g_j)\)이다 (기울기가 1이므로). 원하는 총량은 소비자 1이 \(6\), 소비자 2가 \(4\)이다.`,en:String.raw`Consumer \(i\)'s reaction function is \(g_i = \max(0, (a_i - c) - g_j)\) (slopes are 1). Desired totals are \(6\) for consumer 1 and \(4\) for consumer 2.`}},{text:{ko:String.raw`수요가 더 큰 소비자 1이 \(g_1 = 6\)을 제공하고, 소비자 2는 \(g_2 = \max(0, 4 - 6) = 0\)으로 무임승차한다. 일탈 유인이 없다: 소비자 2가 조금 보태면 한계편익 \(8 - 6 = 2\)가 비용 \(4\)보다 작다. 총 사적 공급은 \(6 < 7 = G^*\)이다.`,en:String.raw`Consumer 1, with the keener demand, provides \(g_1 = 6\); consumer 2 free-rides with \(g_2 = \max(0, 4 - 6) = 0\). No deviation pays: if consumer 2 added a little, marginal benefit \(8 - 6 = 2\) would fall short of cost \(4\). Total private supply is \(6 < 7 = G^*\).`}},{text:{ko:String.raw`총후생 \(W(G) = 18G - G^2 - 4G = 14G - G^2\)에서 \(W(7) = 49\), \(W(6) = 48\)이므로 사중손실은 \(1\)이다 — 그림의 빨간 영역이다.`,en:String.raw`Total welfare \(W(G) = 18G - G^2 - 4G = 14G - G^2\) gives \(W(7) = 49\) and \(W(6) = 48\), so the deadweight loss is \(1\) — the red region in the figure.`},display:[String.raw`DWL = W(G^*) - W(G_{Nash}) = 49 - 48 = 1`]}]}],n={id:`externalities-public-goods`,title:{ko:`외부성과 공공재`,en:`Externalities and Public Goods`},summary:{ko:`시장이 실패하는 두 장면 — 남에게 피해를 주는데 값을 치르지 않는 외부성, 그리고 모두가 쓰지만 아무도 사지 않는 공공재.`,en:`Two scenes of market failure — externalities, where harm to others goes unpriced, and public goods, which everyone uses but no one buys.`},scenes:[{id:`externality`,title:{ko:`외부성과 피구세`,en:`Externalities and the Pigouvian Tax`},order:1,summary:{ko:String.raw`공장이 만드는 값과 동네가 치르는 값이 어긋나는 장면입니다.

공장은 자기 비용만 셉니다.
연기가 주는 피해는 세지 않습니다.
사회적 비용은 아래 식처럼 두 비용을 더한 값입니다.
그래서 공장은 싸다고 너무 많이 만듭니다.
사라진 후생이 빨간 삼각형입니다.
피구세를 켜면 비용곡선이 올라 최적점을 겨냥합니다.

예를 들면, 🏭 공장이 장난감 1개를 만들면 100원이 듭니다.
그런데 굴뚝 연기로 옆집 빨래가 더러워집니다.
그 손해가 30원어치입니다.
진짜 비용은 130원인데 공장은 100원만 셉니다.
그래서 장난감을 너무 많이 만듭니다.`,en:String.raw`The factory's cost and the neighborhood's cost come apart here.

The factory counts only its own cost.
It never counts the harm from its smoke.
Social cost adds the two together, as in the formula below.
So the factory produces too much, thinking it is cheap.
The lost welfare is the red triangle.
Flip the Pigouvian tax on, and the cost curve aims at the social optimum.

For example, a 🏭 factory makes one toy for 100 won.
Its chimney smoke dirties the neighbor's laundry.
That damage is worth 30 won.
The true cost is 130 won, but the factory counts only 100.
So it makes too many toys.`},tex:[String.raw`MSC(Q) = MPC(Q) + MD(Q)`,String.raw`\tau^{Pigou} = MD(Q_s), \qquad Q(\tau^{Pigou}) = Q_s`],controls:[{kind:`slider`,key:`E`,label:{ko:`피해 절편 E`,en:`damage intercept E`},min:0,max:4,step:.25,init:2},{kind:`slider`,key:`F`,label:{ko:`피해 기울기 F`,en:`damage slope F`},min:0,max:1,step:.1,init:.5},{kind:`toggle`,key:`taxOn`,label:{ko:`피구세 부과`,en:`impose Pigouvian tax`},init:!1}],problems:e},{id:`public-goods`,title:{ko:`공공재와 무임승차`,en:`Public Goods and Free-Riding`},order:2,summary:{ko:String.raw`모두가 같이 쓰는 것을 누가 돈 내서 만들까요.
공공재 수요는 가로가 아니라 세로로 합치는 장면입니다.

한 단위를 모두가 동시에 씁니다.
그래서 각자 낼 돈을 세로로 더합니다.
그 합이 비용과 만나는 점이 최적입니다.
그런데 각자 계산하면 이야기가 달라집니다.
남이 내겠지 싶어 자기는 안 냅니다.
결국 모인 돈이 모자라 공급이 부족합니다.

예를 들면, 반 🧑 친구 30명이 돈을 모아 교실에 ⚽ 공을 사려 합니다.
공 1개 값은 3만 원입니다.
절반이 '남들이 내겠지' 하고 안 내면 돈이 모자랍니다.
결국 공을 못 사서 아무도 놀지 못합니다.`,en:String.raw`Everyone uses the same public good, but who pays to provide it?
Public-good demands add up vertically, not horizontally.

Everyone consumes the same unit at the same time.
So willingness to pay is stacked vertically.
Where that sum meets the cost is the optimum.
But each person reasons differently.
Hoping others will pay, each pays nothing.
Too little is collected, so supply falls short.

For example, 30 🧑 classmates chip in to buy a ⚽ ball for the classroom.
The ball costs 30,000 won.
If half think 'the others will pay' and pay nothing, the money falls short.
Nobody gets a ball to play with.`},tex:[String.raw`\sum_i D_i(G^*) = c \quad \text{(Samuelson)}`,String.raw`g_i = \max\left(0, \frac{a_i - c}{b_i} - g_j\right) \quad \text{(Nash)}`],prerequisites:[`externality`],controls:[{kind:`slider`,key:`a1`,label:{ko:`수요1 절편 a1`,en:`demand 1 intercept a1`},min:4,max:14,step:.5,init:10},{kind:`slider`,key:`a2`,label:{ko:`수요2 절편 a2`,en:`demand 2 intercept a2`},min:2,max:12,step:.5,init:8},{kind:`slider`,key:`c`,label:{ko:`한계비용 c`,en:`marginal cost c`},min:1,max:8,step:.5,init:4}],problems:t}]};export{n as t};