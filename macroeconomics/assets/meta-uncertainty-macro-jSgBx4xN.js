var e=[{id:`coin-flip-fortune`,statement:{ko:String.raw`동전 한 번으로 재산이 \(160\)이 되거나 \(40\)이 된다 (반반).

효용이 \(u(x) = \sqrt{x}\)인 사람에게 이 도박의 확실성 등가는 얼마이고, 위험 프리미엄은 얼마인가?`,en:String.raw`One coin flip makes your wealth \(160\) or \(40\) (fifty-fifty).

For a person with utility \(u(x) = \sqrt{x}\), what is the gamble's certainty equivalent, and what is the risk premium?`},preset:{prob:.5,spread:60,copies:1},presetCaption:{ko:String.raw`재산 \(160\) 또는 \(40\), 반반 — 그림의 점들이 정확히 이 경우다.`,en:String.raw`Wealth \(160\) or \(40\), fifty-fifty — the dots in the picture are exactly this case.`},proof:[{text:{ko:String.raw`기대재산은 \(E[W] = 0.5 \cdot 160 + 0.5 \cdot 40 = 100\)이다. 기대효용은 돈이 아니라 효용의 평균이다: \(EU = 0.5\sqrt{160} + 0.5\sqrt{40} \approx 9.49\).`,en:String.raw`Expected wealth is \(E[W] = 0.5 \cdot 160 + 0.5 \cdot 40 = 100\). Expected utility averages the utility, not the money: \(EU = 0.5\sqrt{160} + 0.5\sqrt{40} \approx 9.49\).`}},{text:{ko:String.raw`확실성 등가는 \(CE = EU^2\)인데, 제곱하면 정확히 떨어진다: \(\frac{1}{4}(160 + 40 + 2\sqrt{160 \cdot 40}) = \frac{1}{4}(200 + 160) = 90\). 위험 프리미엄은 \(100 - 90 = 10\)이다 — 평균보다 \(10\) 적은 확실한 돈과 이 도박이 맞먹는다.`,en:String.raw`The certainty equivalent is \(CE = EU^2\), and the square comes out exact: \(\frac{1}{4}(160 + 40 + 2\sqrt{160 \cdot 40}) = \frac{1}{4}(200 + 160) = 90\). The risk premium is \(100 - 90 = 10\) — a sure \(90\) feels exactly as good as this gamble averaging \(100\).`}},{text:{ko:String.raw`보험으로 읽으면: 손실 \(120\)이 확률 \(0.5\)로 닥치니 공정 보험료는 \(0.5 \cdot 120 = 60\)이고, 전액 보험에 가입하면 재산 \(100\)이 확실해져 \(CE = 90\)보다 좋다. 낼 수 있는 최대 보험료는 \(160 - 90 = 70\)으로, 공정 보험료보다 정확히 위험 프리미엄 \(10\)만큼 크다.`,en:String.raw`Read as insurance: a loss of \(120\) hits with probability \(0.5\), so the fair premium is \(0.5 \cdot 120 = 60\), and full insurance locks in wealth \(100\) — better than \(CE = 90\). The most this person pays in total is \(160 - 90 = 70\), exactly the risk premium \(10\) above the fair premium.`}}]},{id:`shareholder-sixteen-projects`,statement:{ko:String.raw`기업이 안전한 프로젝트(이윤 \(40\) 확실)와 위험한 프로젝트(이윤 \(80\) 또는 \(20\), 반반) 중 하나를 골라야 한다.

그리고 주주가 똑같은 위험 프로젝트 \(16\)개를 독립적으로 들고 있다면 평균 이윤의 퍼짐과, 평균이 안전한 이윤 \(40\)보다 낮아질 확률은?`,en:String.raw`A firm must choose between a safe project (profit \(40\) for sure) and a risky one (profit \(80\) or \(20\), fifty-fifty).

If a shareholder instead holds \(16\) independent copies of the risky project, what is the spread of the average profit, and the chance the average falls below the safe profit \(40\)?`},preset:{prob:.5,spread:60,copies:16},presetCaption:{ko:String.raw`복사본 \(16\)개 — 아래 패널의 점이 \(\sigma / \sqrt{16}\) 자리에 있다.`,en:String.raw`Sixteen copies — the dot in the lower panel sits at \(\sigma / \sqrt{16}\).`},proof:[{text:{ko:String.raw`기업은 기대이윤만 본다: 위험한 프로젝트는 \(0.5 \cdot 80 + 0.5 \cdot 20 = 50 > 40\)이므로 위험한 쪽을 고른다. 반으로 쪼개질 수 있는데도 그렇다 — 판단 기준이 효용이 아니라 이윤의 평균이기 때문이다.`,en:String.raw`The firm looks only at expected profit: the risky project gives \(0.5 \cdot 80 + 0.5 \cdot 20 = 50 > 40\), so it takes the risky one — even though it can come out at \(20\). The yardstick is the average of profit, not of utility.`}},{text:{ko:String.raw`프로젝트 하나의 퍼짐은 \(\sigma = 30\)이다.

독립적인 복사본 \(N\)개의 평균의 퍼짐은 \(\sigma / \sqrt{N}\)이므로, \(16\)개면 \(30 / 4 = 7.5\)로 줄어든다.

평균이 \(40\) 아래로 떨어지려면 \(16\)개 중 좋은 결과가 \(5\)개 이하여야 하는데, 그 확률은 약 \(10.5\%\)다 (복사본 \(1\)개일 때는 \(50\%\)).`,en:String.raw`One project's spread is \(\sigma = 30\).

The average of \(N\) independent copies has spread \(\sigma / \sqrt{N}\), so with \(16\) copies it shrinks to \(30 / 4 = 7.5\).

The average falls below \(40\) only when at most \(5\) of the \(16\) come out high — probability about \(10.5\%\) (with a single copy it is \(50\%\)).`}},{text:{ko:String.raw`그래서 주주는 위험을 거의 느끼지 않는다: 기대이윤 \(50\)은 그대로인데 위험만 증발한다. 분산할 수 없는 자기 일자리 하나에 묶인 가계와, 분산할 수 있는 주주의 태도가 갈리는 이유다.`,en:String.raw`So the shareholder barely feels the risk: the expected profit \(50\) survives while the danger evaporates. That is why a household tied to one undiversifiable job and a diversified shareholder face the same gamble with opposite attitudes.`}}]}],t=[{id:`job-loss-fear-doubles-saving`,statement:{ko:String.raw`오늘 소득이 \(100\), 내일 소득이 보통은 \(60\)인데 실직하면 \(20\)으로 떨어지는 가계가 있다 (\(u = \sqrt{x}\), \(\beta = 0.9\)).

실직 확률이 \(0\)일 때와 \(40\%\)일 때, 저축은 어떻게 달라지는가?`,en:String.raw`A household earns \(100\) today and \(60\) tomorrow — or \(20\) if it loses its job (\(u = \sqrt{x}\), \(\beta = 0.9\)).

How does its saving change between a job-loss probability of \(0\) and one of \(40\%\)?`},preset:{risk:.4,spread:24},presetCaption:{ko:String.raw`실직 확률 \(40\%\) — 위쪽 패널의 두 막대가 이 문제의 답이다.`,en:String.raw`Job-loss risk \(40\%\) — the two bars in the upper panel are this problem's answer.`},proof:[{text:{ko:String.raw`위험이 없으면 내일 소득이 \(60\)으로 확실하고, 최적 저축은 약 \(11.5\)다 (오늘 소비 \(88.5\)). 내일의 한계효용과 오늘의 한계효용이 \(\beta\)를 끼고 맞먹는 지점이다.`,en:String.raw`With no risk, tomorrow's income is a sure \(60\) and optimal saving is about \(11.5\) (consumption today \(88.5\)) — the point where tomorrow's marginal utility, scaled by \(\beta\), balances today's.`}},{text:{ko:String.raw`실직 확률 \(40\%\)가 생기면 최적 저축은 \(23\)으로 정확히 두 배가 된다.

나쁜 상태에서 효용 곡선의 기울기가 훨씬 가파르기 때문이다 — 내일 가난할지 모른다는 가능성이 오늘의 소비를 \(77\)까지 끌어내린다.

평균 소득이 아니라 '최악의 경우'가 저축을 정한다.`,en:String.raw`At a \(40\%\) job-loss risk, optimal saving exactly doubles to \(23\).

The utility curve is far steeper in the bad state, so the mere possibility of a poor tomorrow pulls consumption today down to \(77\).

Saving is set by the worst case, not by average income.`}},{text:{ko:String.raw`한 가계에게는 현명한 자기보험이지만, 모든 가계가 동시에 이렇게 하면 오늘의 총수요가 그만큼 줄어든다. 앞서 본 저축의 역설이 두려움으로 재점화되는 셈이다.`,en:String.raw`For one household this is wise self-insurance, but if every household does it at once, today's aggregate demand falls by the same amount — the paradox of thrift, restarted by fear.`}}]},{id:`factory-waits-out-the-fog`,statement:{ko:String.raw`되돌릴 수 없는 공장 투자가 비용 \(100\)에 내일 가치 \(110 \pm 40\) (즉 \(150\) 또는 \(70\), 반반)을 낸다.

기대이윤만 보면 지금 투자해야 할 것 같은데, 내일까지 기다리면 어떻게 되는가?`,en:String.raw`An irreversible factory investment costs \(100\) and will be worth \(110 \pm 40\) tomorrow (that is, \(150\) or \(70\), fifty-fifty).

Expected profit says invest now — what happens if the firm waits until tomorrow instead?`},preset:{risk:.25,spread:40},presetCaption:{ko:String.raw`퍼짐 \(40\) — 아래쪽 패널에서 기다림의 값이 지금 투자를 크게 앞지른다.`,en:String.raw`Spread \(40\) — in the lower panel the value of waiting towers over investing now.`},proof:[{text:{ko:String.raw`지금 투자하면 기대이윤은 \(110 - 100 = 10\)이다. 나쁜 상태의 손실 \(30\)까지 이미 평균에 들어가 있다.`,en:String.raw`Investing now has expected profit \(110 - 100 = 10\). The bad state's loss of \(30\) is already inside that average.`}},{text:{ko:String.raw`기다리면 좋은 상태에서만 투자할 수 있다: \(0.5 \cdot (150 - 100) + 0.5 \cdot 0 = 25\).

한 기간 늦는 대가로 \(0.95\)를 곱해도 \(23.75\)로, 지금 투자의 \(10\)을 크게 넘는다.

기다림이 주는 순수한 유연성의 값은 \(25 - 10 = 15\)다.`,en:String.raw`Waiting lets the firm invest only in the good state: \(0.5 \cdot (150 - 100) + 0.5 \cdot 0 = 25\).

Even after the one-period delay discount of \(0.95\), that is \(23.75\) — far above investing now at \(10\).

The pure flexibility is worth \(25 - 10 = 15\).`}},{text:{ko:String.raw`평균 \(110\)은 한 번도 움직이지 않았다.

퍼짐만 \(0\)에서 \(40\)으로 커졌을 뿐인데 결정이 뒤집힌다.

퍼짐이 약 \(11.1\)을 넘는 순간부터 기다림이 이기기 시작한다 — 불확실성 그 자체가 투자를 얼리는 것이다.`,en:String.raw`The mean \(110\) never moved; only the spread grew, from \(0\) to \(40\), and the decision flipped. Waiting starts to win once the spread passes about \(11.1\) — uncertainty itself is what freezes the investment.`}}]}],n={id:`uncertainty-macro`,title:{ko:`위험과 불확실성`,en:`Risk and Uncertainty`},summary:{ko:String.raw`미시경제학이 한 사람의 위험 회피와 한 기업의 기대이윤을 따로 다뤘다면, 거시경제학에서는 그 태도들이 합쳐져 경기 자체를 움직인다. 확률을 아는 리스크 앞에서는 사람이 보험을 사고 기업이 분산으로 버티지만, 확률 자체를 모르는 불확실성이 커지면 가계는 예비적 저축으로, 기업은 투자 관망으로 물러선다 — 평균은 하나도 나빠지지 않았는데 수요가 얼어붙는 이유를 본다.`,en:String.raw`Micro treated one person's risk aversion and one firm's expected profit separately; in macro, those attitudes add up and move the economy itself. Faced with risk — probabilities known — people buy insurance and firms lean on diversification. But when uncertainty grows, with the probabilities themselves unknown, households retreat into precautionary saving and firms into wait-and-see, and demand freezes even though no average has worsened. This chapter traces both attitudes from the person to the economy.`},scenes:[{id:`expected-utility-vs-profit`,title:{ko:`기대효용 대 기대이윤`,en:`Expected Utility vs Expected Profit`},order:1,summary:{ko:String.raw`미시에서는 한 사람의 위험 태도와 한 기업의 선택을 따로 봤다. 거시에서는 그 태도들이 합쳐져 경제 전체를 움직인다.

사람은 흔들리는 결과를 싫어해 보험을 산다. 평균이 같아도 확실한 쪽을 고른다. 기업은 평균 이윤만 보고 위험한 쪽을 고른다. 여럿이 나눠 가지면 흔들림이 작아지기 때문이다. 아래 식들이 사람과 기업의 잣대를 나란히 보여 준다. 여기서 다루는 건 확률을 아는 리스크다.

예를 들면, 동전 던지기로 💰 용돈을 정한다고 해보자. 앞면이면 10,000원, 뒷면이면 0원이다. 평균은 5,000원이지만, 너는 확실한 4,500원을 더 좋아할 수 있다. 무서워서 양보하는 500원이 보험료와 같은 돈이다.`,en:String.raw`In micro, one person's attitude to risk and one firm's choice were studied apart. In macro, those attitudes add up and move the whole economy.

People dislike shaky outcomes, so they buy insurance. Given the same average, they pick the sure thing. Firms read only average profit and take the riskier project. Splitting it among many shareholders shrinks the shakiness. The formulas below set the two yardsticks side by side. Everything here is risk, where the odds are known.

For example, say a coin flip decides your 💰 allowance. Heads pays 10,000 won, tails pays nothing. The average is 5,000 won, yet you might prefer a sure 4,500. The 500 you give up out of caution is just like an insurance premium.`},tex:[String.raw`EU = p\sqrt{W_{hi}} + (1-p)\sqrt{W_{lo}}`,String.raw`E[\pi] = p\pi_{hi} + (1-p)\pi_{lo}`,String.raw`\sigma_{\bar{X}} = \frac{\sigma}{\sqrt{N}}`],controls:[{kind:`slider`,key:`prob`,label:{ko:`좋은 결과의 확률 p`,en:`probability of the good outcome p`},min:.1,max:.9,step:.05,init:.5},{kind:`slider`,key:`spread`,label:{ko:`도박의 퍼짐 (재산 100±)`,en:`gamble spread (wealth 100±)`},min:0,max:95,step:5,init:60},{kind:`slider`,key:`copies`,label:{ko:`주주가 가진 복사본 수 N`,en:`copies the shareholder holds N`},min:1,max:25,step:1,init:1}],problems:e},{id:`uncertainty-shocks`,title:{ko:`불확실성이 경기침체가 될 때`,en:`When Uncertainty Becomes the Recession`},order:2,summary:{ko:String.raw`미시에서 불확실성은 보험으로 나눌 수 있는 한 사람의 문제였다. 거시에서는 모두가 동시에 불안해지면 보험을 들어 줄 상대가 사라진다.

내일 💼 일자리를 잃을까 무서우면 오늘 지갑을 닫는다. 모두가 동시에 아끼면 🏪 가게 매출이 줄고 경기가 식는다. 기업도 나쁜 소식이 무서워 큰 투자를 미룬다. 평균은 하나도 나빠지지 않았다. 불안만 커져도 침체가 시작될 수 있다.

예를 들면, 반 친구들이 모두 💰 용돈을 아끼기 시작했다고 해보자. 혹시 모를 일에 대비하려는 것이다. 아무도 🍬 사탕을 안 사면 가게 주인은 물건을 덜 들여놓는다. 나쁜 일은 아직 안 일어났는데, 동네가 조용해진다.`,en:String.raw`In micro, uncertainty was one person's problem, shareable through insurance. In macro, when everyone is anxious at once, nobody is left to insure with.

Fear of losing a 💼 job tomorrow closes wallets today. When everyone saves at once, 🏪 shop sales fall and the economy cools. Firms, fearing bad news, also postpone big investments. No average has gotten any worse. A recession can start from anxiety alone.

For example, imagine all your classmates start saving their 💰 allowance. Each one is just bracing for a rainy day. But if nobody buys 🍬 candy, the shopkeeper orders less stock. Nothing bad has happened yet, and already the neighborhood has gone quiet.`},tex:[String.raw`\sqrt{y_1 - s} + \beta\left[q\sqrt{s + y_2^{bad}} + (1-q)\sqrt{s + y_2^{good}}\right]`,String.raw`\delta \cdot E[\max(V - I, 0)]`],prerequisites:[`expected-utility-vs-profit`],controls:[{kind:`slider`,key:`risk`,label:{ko:`실직 확률 q`,en:`job-loss probability q`},min:0,max:.5,step:.05,init:.25},{kind:`slider`,key:`spread`,label:{ko:`투자 가치의 퍼짐 (110±)`,en:`investment value spread (110±)`},min:0,max:60,step:2,init:24}],problems:t}]};export{n as t};