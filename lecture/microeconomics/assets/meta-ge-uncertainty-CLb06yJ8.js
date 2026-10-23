var e=[{id:`full-insurance`,statement:{ko:String.raw`로그 효용, \(\pi_1 = 1/2\), 총보유량 \(E_1 = E_2 = 10\) (총량 위험 없음), \(e^1 = (7, 3)\)이라 하자. Arrow–Debreu 균형에서 두 소비자 모두 완전보험을 받음(상태에 무관한 소비) 을 직접 계산으로 확인하라.`,en:String.raw`With log utility, \(\pi_1 = 1/2\), aggregate endowments \(E_1 = E_2 = 10\) (no aggregate risk), and \(e^1 = (7, 3)\), verify by direct computation that the Arrow–Debreu equilibrium gives both consumers full insurance (state-independent consumption).`},display:[String.raw`q_s = \frac{\pi_s (W_1 + W_2)}{E_s}, \qquad c_{is} = \frac{\pi_s W_i}{q_s}`],preset:{E1:10,e11:7,e12:3,gamma:1,pi1:.5},presetCaption:{ko:String.raw`총량 위험 없음 — 두 소비자 모두 \((5, 5)\) 소비.`,en:String.raw`No aggregate risk — both consume \((5, 5)\).`},proof:[{text:{ko:String.raw`\(q_1 = 0.5 \cdot 20/10 = 1\), \(q_2 = 1\)이다. 부는 \(W_1 = 7 + 3 = 10\), \(W_2 = 10\)이다.`,en:String.raw`\(q_1 = 0.5 \cdot 20/10 = 1\), \(q_2 = 1\). Wealths: \(W_1 = 7 + 3 = 10\), \(W_2 = 10\).`}},{text:{ko:String.raw`수요는 \(c_{i1} = 0.5 \cdot 10/1 = 5\), \(c_{i2} = 5\)이다 — 두 소비자 모두 상태에서 독립적인 \((5, 5)\)를 소비한다. 이것이 상호성 원리(mutuality): 총량 위험이 없으면 위험회피적 소비자들은 idiosyncratic 위험을 완전히 나눈다.`,en:String.raw`Demands are \(c_{i1} = 0.5 \cdot 10/1 = 5\), \(c_{i2} = 5\) — both consume state-independent \((5, 5)\). This is the mutuality principle: with no aggregate risk, risk-averse consumers fully share idiosyncratic risk.`}}]},{id:`aggregate-risk-remains`,statement:{ko:String.raw`같은 설정에서 총량 위험을 도입하자: \(E_1 = 12\), \(E_2 = 8\).

균형 소비를 구하고, 총량 위험은 보험될 수 없음을 보여라.`,en:String.raw`Introduce aggregate risk into the same setup: \(E_1 = 12\), \(E_2 = 8\).

Find equilibrium consumption and show that aggregate risk cannot be insured away.`},display:[String.raw`\frac{c_{11}}{c_{12}} = \frac{E_1}{E_2} = 1.5`],preset:{E1:12,e11:7,e12:3,gamma:1,pi1:.5},presetCaption:{ko:String.raw`\(E = (12, 8)\) — 소비 \((5.75, 3.83)\), 총량을 따라간다.`,en:String.raw`\(E = (12, 8)\) — consumption \((5.75, 3.83)\), tracking the aggregate.`},proof:[{text:{ko:String.raw`\(q_1 : q_2 = \frac{0.5}{12} : \frac{0.5}{8} = 2:3\)이다. \(r = q_1/q_2 = 2/3\)으로 두면 \(W_1 = \frac{2}{3} \cdot 7 + 3 = \frac{23}{3}\)이다.`,en:String.raw`\(q_1 : q_2 = \frac{0.5}{12} : \frac{0.5}{8} = 2:3\). With \(r = q_1/q_2 = 2/3\), \(W_1 = \frac{2}{3} \cdot 7 + 3 = \frac{23}{3}\).`}},{text:{ko:String.raw`\(c_{11} = 0.5 \cdot \frac{23}{3} / \frac{2}{3} = 5.75\), \(c_{12} = 0.5 \cdot \frac{23}{3} = 3.833\)이다. \(c_{11}/c_{12} = 1.5 = E_1/E_2\): 모든 소비자의 소비가 총량과 같은 비율로 움직인다 — 총량 위험은 나눌 수 있어도 없앨 수는 없다.`,en:String.raw`\(c_{11} = 0.5 \cdot \frac{23}{3} / \frac{2}{3} = 5.75\), \(c_{12} = 0.5 \cdot \frac{23}{3} = 3.833\). And \(c_{11}/c_{12} = 1.5 = E_1/E_2\): everyone's consumption moves in lockstep with the aggregate — aggregate risk can be shared but not eliminated.`}}]}],t=[{id:`state-price-formula`,statement:{ko:String.raw`\(\pi = (1/3, 1/3, 1/3)\), \(E = (6, 10, 14)\)일 때 상태가격 \(q_s\)를 직접 계산하라.`,en:String.raw`With \(\pi = (1/3, 1/3, 1/3)\) and \(E = (6, 10, 14)\), compute the state prices \(q_s\) directly.`},display:[String.raw`q_s = \frac{\pi_s / E_s}{\sum_t \pi_t / E_t}`],preset:{E1:6,E2:10,E3:14,pi1:1/3,pi2:1/3},presetCaption:{ko:String.raw`\(E = (6, 10, 14)\) — \(q \approx (0.493, 0.296, 0.211)\).`,en:String.raw`\(E = (6, 10, 14)\) — \(q \approx (0.493, 0.296, 0.211)\).`},proof:[{text:{ko:String.raw`\(\pi_s/E_s = (1/18,\ 1/30,\ 1/42)\)이다. 통분하면 \((35, 21, 15)/630\)이므로 합은 \(71/630\)이다.`,en:String.raw`\(\pi_s/E_s = (1/18,\ 1/30,\ 1/42)\). Over the common denominator 630: \((35, 21, 15)/630\), summing to \(71/630\).`}},{text:{ko:String.raw`정규화하면 \(q = (35/71,\ 21/71,\ 15/71) \approx (0.493, 0.296, 0.211)\)이다.`,en:String.raw`Normalizing, \(q = (35/71,\ 21/71,\ 15/71) \approx (0.493, 0.296, 0.211)\).`}}]},{id:`scarcity-premium`,statement:{ko:String.raw`위 예에서 \(q_s/\pi_s\)를 계산하고, 왜 가장 희소한 상태의 상태가격이 확률보다 높은지 설명하라.`,en:String.raw`In the example above, compute \(q_s/\pi_s\) and explain why the scarcest state's price exceeds its probability.`},display:[String.raw`\frac{q_1}{\pi_1} \approx 1.479, \quad \frac{q_2}{\pi_2} \approx 0.887, \quad \frac{q_3}{\pi_3} \approx 0.634`],preset:{E1:6,E2:10,E3:14,pi1:1/3,pi2:1/3},presetCaption:{ko:String.raw`희소성 프리미엄: \(q_1/\pi_1\)이 가장 크다.`,en:String.raw`Scarcity premium: \(q_1/\pi_1\) is largest.`},proof:[{text:{ko:String.raw`\(q_1/\pi_1 = (35/71)/(1/3) = 105/71 \approx 1.479\), \(q_2/\pi_2 = 63/71 \approx 0.887\), \(q_3/\pi_3 = 45/71 \approx 0.634\)이다.`,en:String.raw`\(q_1/\pi_1 = (35/71)/(1/3) = 105/71 \approx 1.479\), \(q_2/\pi_2 = 63/71 \approx 0.887\), \(q_3/\pi_3 = 45/71 \approx 0.634\).`}},{text:{ko:String.raw`상태 1은 총보유량이 \(6\)으로 가장 희소해서 한계효용이 가장 높다 — 그래서 "상태 1에서 1달러"라는 상품이 확률 \(1/3\)보다 비싸게 거래된다. 상태가격은 확률이 아니라 한계효용 가중 확률이다.`,en:String.raw`State 1 is scarcest (\(E_1 = 6\)), hence highest marginal utility — so "one dollar in state 1" trades above its probability \(1/3\). State prices are marginal-utility-weighted probabilities, not raw probabilities.`}}]}],n={id:`ge-uncertainty`,title:{ko:`불확실성하의 일반균형`,en:`General Equilibrium under Uncertainty`},summary:{ko:`상태별 상품과 Arrow–Debreu 균형 — 완전보험의 상호성 원리와 상태가격의 희소성 프리미엄.`,en:`State-contingent commodities and Arrow–Debreu equilibrium — the mutuality principle of full insurance and the scarcity premium in state prices.`},scenes:[{id:`arrow-debreu`,title:{ko:`Arrow–Debreu 균형`,en:`Arrow–Debreu Equilibrium`},order:1,summary:{ko:String.raw`상태별 소비를 그리는 에지워스 상자입니다.
두 사람이 서로의 위험을 나눠 갖는 장면입니다.

나라 전체의 위험이 없으면 서로 보험을 들어 줍니다.
그래서 두 사람 다 어느 상태든 똑같이 소비합니다.
이것이 완전보험, 상호성 원리입니다.
나라 전체가 흔들리면 다 같이 흔들립니다.

예를 들면, 🍎 사과 농부 민수와 🍌 바나나 농부 지훈이 있습니다.
올해 민수 밭만 흉작이면 지훈이 나눠 줍니다.
반대면 민수가 나눠 줍니다.
둘 다 매년 똑같이 먹을 수 있습니다.
그런데 나라 전체가 흉작이면 나눌 게 없어 둘 다 적게 먹습니다.`,en:String.raw`An Edgeworth box for consumption in each state.
Two people share each other's risk here.

With no risk for the whole economy, they insure each other.
Both consume exactly the same in every state.
That is full insurance, the mutuality principle.
When the whole economy shakes, everyone shakes together.

For example, Minsu grows 🍎 apples and Jihoon grows 🍌 bananas.
If only Minsu's harvest fails, Jihoon shares.
If only Jihoon's fails, Minsu shares.
Both eat the same every year.
But if the whole country's harvest fails, there is nothing to share.`},tex:[String.raw`c_{is} = \frac{\pi_s^{1/\gamma} q_s^{-1/\gamma} W_i}{\sum_t \pi_t^{1/\gamma} q_t^{1-1/\gamma}}`,String.raw`E_1 = E_2 \implies c_{i1} = c_{i2} \quad \text{(full insurance)}`],controls:[{kind:`slider`,key:`E1`,label:{ko:`상태 1 총보유량`,en:`total state-1 endowment`},min:6,max:14,step:.5,init:10},{kind:`slider`,key:`e11`,label:{ko:`소비자 1 상태-1 보유`,en:`consumer 1 state-1 endowment`},min:1,max:13,step:.5,init:7},{kind:`slider`,key:`e12`,label:{ko:`소비자 1 상태-2 보유`,en:`consumer 1 state-2 endowment`},min:1,max:13,step:.5,init:3},{kind:`slider`,key:`gamma`,label:{ko:`위험회피도 γ`,en:`risk aversion γ`},min:.5,max:3,step:.1,init:1},{kind:`slider`,key:`pi1`,label:{ko:`상태 1 확률`,en:`state-1 probability`},min:.2,max:.8,step:.05,init:.5}],problems:e},{id:`state-prices`,title:{ko:`상태가격과 희소성`,en:`State Prices and Scarcity`},order:2,summary:{ko:String.raw`세 가지 상태의 확률과 상태가격을 나란히 봅니다.

상태가격은 그냥 확률이 아닙니다.
한계효용으로 무겁게 가중한 확률입니다.
가장 희소한 상태의 1달러가 가장 비쌉니다.
아래 식이 그 가중 방식을 보여 줍니다.

예를 들면, 평소엔 🍞 빵이 넘치는 마을이 있습니다.
흉년이 든 해에는 빵이 아주 귀합니다.
그 해에 쓸 돈 1만 원은 평소의 1만 원보다 훨씬 값집니다.`,en:String.raw`Three states, with probabilities and state prices side by side.

A state price is not a raw probability.
It is a probability weighted by marginal utility.
A dollar in the scarcest state costs the most.
The formula below shows exactly that weighting.

For example, a village usually has plenty of 🍞 bread.
In a famine year, bread is very scarce.
Money to spend in that year is worth far more than money in a normal year.`},tex:[String.raw`q_s = \frac{\pi_s / E_s}{\sum_t \pi_t / E_t}`],prerequisites:[`arrow-debreu`],controls:[{kind:`slider`,key:`E1`,label:{ko:`상태 1 총보유량`,en:`state-1 total endowment`},min:4,max:16,step:.5,init:6},{kind:`slider`,key:`E2`,label:{ko:`상태 2 총보유량`,en:`state-2 total endowment`},min:4,max:16,step:.5,init:10},{kind:`slider`,key:`E3`,label:{ko:`상태 3 총보유량`,en:`state-3 total endowment`},min:4,max:16,step:.5,init:14},{kind:`slider`,key:`pi1`,label:{ko:`확률 π1`,en:`probability π1`},min:.1,max:.8,step:.05,init:.33},{kind:`slider`,key:`pi2`,label:{ko:`확률 π2`,en:`probability π2`},min:.1,max:.8,step:.05,init:.33}],problems:t}]};export{n as t};