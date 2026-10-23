var e=[{id:`one-cafe-wage-cut`,statement:{ko:String.raw`카페 한 곳이 시급을 \(10\)에서 \(8\)로 내렸다 (노동수요 \(L = 60 - 4w\), 직원 한 명이 만드는 매출 \(14\)).

고용과 이윤은 어떻게 되는가?`,en:String.raw`One cafe cuts its wage from \(10\) to \(8\) (labor demand \(L = 60 - 4w\), each worker brings in sales of \(14\)).

What happens to its jobs and profit?`},preset:{view:`one-firm`,dwage:2,mpc:.75},presetCaption:{ko:String.raw`한 회사 보기 — 임금 \(2\) 인하, 다른 조건은 고정.`,en:String.raw`One-firm view — a wage cut of \(2\), everything else held fixed.`},proof:[{text:{ko:String.raw`수요곡선을 따라 내려간다: 임금 \(10\)에서는 \(L = 60 - 4 \cdot 10 = 20\)명, 임금 \(8\)에서는 \(L = 60 - 4 \cdot 8 = 28\)명. 고용은 \(8\)명 는다.`,en:String.raw`Slide down the demand curve: at wage \(10\), \(L = 60 - 4 \cdot 10 = 20\) workers; at wage \(8\), \(L = 60 - 4 \cdot 8 = 28\). Jobs rise by \(8\).`}},{text:{ko:String.raw`이윤은 직원 한 명당 마진 \((14 - w)\)에 고용을 곱한 것이다: 인하 전 \((14 - 10) \cdot 20 = 80\), 인하 후 \((14 - 8) \cdot 28 = 168\).

비용은 줄고 사람은 늘고 이윤은 두 배가 넘는다.

단, 이 계산은 손님들의 소득이 그대로라는 가정 위에 서 있다 — 그 가정이 무너지는 경우는 다음 문제에서 본다.`,en:String.raw`Profit is the per-worker margin \((14 - w)\) times jobs: before, \((14 - 10) \cdot 20 = 80\); after, \((14 - 8) \cdot 28 = 168\).

Costs down, headcount up, profit more than doubled.

But the whole calculation stands on one assumption — that customers' incomes stay put. The next problem removes it.`}}]},{id:`every-cafe-wage-cut`,kind:`counterexample`,statement:{ko:String.raw`이번에는 나라의 모든 카페가 동시에 임금을 \(2\)씩 내렸다.

노동자 \(100\)명, 1인당 산출 \(15\), 한계소비성향 \(c = 0.75\)인 경제에서 고용은 어떻게 되는가?`,en:String.raw`Now every cafe in the country cuts wages by \(2\) at the same time.

In an economy with \(100\) workers, output per worker \(15\), and MPC \(c = 0.75\), what happens to jobs?`},preset:{view:`whole-economy`,dwage:2,mpc:.75},presetCaption:{ko:String.raw`경제 전체 보기 — 임금 \(2\) 인하, \(c = 0.75\).`,en:String.raw`Whole-economy view — a wage cut of \(2\), \(c = 0.75\).`},verdict:{ko:String.raw`이 명제는 거짓이다 — 모든 카페가 함께 임금을 내리면 고용은 늘지 않고 \(100\)명에서 \(60\)명으로 줄어든다`,en:String.raw`The claim is false — when every cafe cuts wages together, jobs do not rise; they fall from \(100\) to \(60\)`},proof:[{text:{ko:String.raw`먼저 소득이 샌다: \(100\)명이 각자 \(2\)씩 덜 받으니 임금총액은 \(200\) 줄고, 소비는 그 \(0.75\)배인 \(150\) 줄어든다. 승수 \(\frac{1}{1 - 0.75} = 4\)가 이를 증폭해 산출은 \(150 \cdot 4 = 600\) 감소, \(1500\)에서 \(900\)으로 떨어진다.`,en:String.raw`First, income leaks out: \(100\) workers each earning \(2\) less shrinks the wage bill by \(200\), and consumption falls by \(0.75\) of that, \(150\). The multiplier \(\frac{1}{1 - 0.75} = 4\) amplifies it: output falls by \(150 \cdot 4 = 600\), from \(1500\) to \(900\).`}},{text:{ko:String.raw`고용은 산출을 1인당 산출로 나눈 것이다: \(900 / 15 = 60\)명. 임금을 내렸는데 일자리는 \(40\)개 사라졌다.

임금총액도 처음 의도한 \(200\)이 아니라, 임금과 일자리가 함께 줄며 \(8 \cdot 60 = 480\)까지, 즉 \(520\)이나 줄었다.

한 회사에서는 통했던 처방이 전체에서는 정반대로 작동한다 — 이것이 구성의 오류다.`,en:String.raw`Jobs are output divided by output per worker: \(900 / 15 = 60\). Wages were cut, yet \(40\) jobs vanished.

The wage bill did not stop at the intended \(200\) drop either — with wages and jobs falling together it lands at \(8 \cdot 60 = 480\), a fall of \(520\).

The prescription that worked for one firm works in reverse for the whole: the fallacy of composition.`}}]}],t=[{id:`small-shock-swallowed`,statement:{ko:String.raw`시장의 적정 가격이 \(1\)만큼 내려갔다.

메뉴 비용이 \(4\)인 식당은 가격표를 바꿀까? (가만히 있을 때 손해는 \(2\delta^2\))`,en:String.raw`The market's ideal price fell by \(1\).

A restaurant with a menu cost of \(4\) — does it reprint its price list? (Standing still loses \(2\delta^2\).)`},preset:{delta:1,fee:4},presetCaption:{ko:String.raw`작은 충격 \(\delta = 1\), 메뉴 비용 \(4\) — 가격 유지.`,en:String.raw`Small shock \(\delta = 1\), menu cost \(4\) — price stays.`},proof:[{text:{ko:String.raw`가만히 있을 때의 손해는 \(2 \cdot 1^2 = 2\)다. 메뉴 비용 \(4\)보다 작으니 가격표를 바꾸는 쪽이 오히려 손해다 — 합리적인 선택은 "안 바꾸기"다.

이윤은 \(100 - 2 = 98\)로 거의 그대로다. 이윤 언덕의 꼭대기 근처는 평평해서, 조금 빗나가도 거의 아프지 않기 때문이다.`,en:String.raw`Standing still loses \(2 \cdot 1^2 = 2\). That is less than the menu cost \(4\), so reprinting would lose more than it saves — the rational choice is to leave the price alone.

Profit is \(100 - 2 = 98\), nearly intact: near the top of the profit hill the ground is flat, so a small miss barely hurts.`}},{text:{ko:String.raw`대신 판매량이 흡수한다: 너무 비싸진 가격에 손님이 \(5\)명 떠나 판매량은 \(50\)에서 \(45\)로 준다. 가격은 멀쩡한데 수량이 다친 것 — 이것이 단기 거시 변동의 얼굴이다.

(무대응 구간의 경계는 \(\sqrt{4 / 2} \approx 1.41\): 충격이 이보다 작으면 모두 삼켜진다.)`,en:String.raw`Quantity absorbs it instead: the now-too-high price sheds \(5\) customers, and volume falls from \(50\) to \(45\). The price is spotless while the quantity is bruised — the face of a short-run macro fluctuation.

(The band's edge is \(\sqrt{4 / 2} \approx 1.41\): any smaller shock is swallowed whole.)`}}]},{id:`big-shock-adjusts`,statement:{ko:String.raw`이번에는 적정 가격이 \(3\)만큼 내려갔다.

메뉴 비용이 \(4\)인 같은 식당은 어떻게 할까?`,en:String.raw`This time the ideal price fell by \(3\).

What does the same restaurant, menu cost \(4\), do now?`},preset:{delta:3,fee:4},presetCaption:{ko:String.raw`큰 충격 \(\delta = 3\), 메뉴 비용 \(4\) — 가격 조정.`,en:String.raw`Big shock \(\delta = 3\), menu cost \(4\) — price adjusts.`},proof:[{text:{ko:String.raw`손해는 제곱으로 자란다: \(2 \cdot 3^2 = 18\). 충격이 \(3\)배가 되자 손해는 \(9\)배가 됐다.

이제 메뉴 비용 \(4\)를 훌쩍 넘으니 가격을 내리는 게 낫다. 조정 후 이윤은 \(100 - 4 = 96\)으로, 버텼을 경우의 \(100 - 18 = 82\)보다 훨씬 낫다.`,en:String.raw`The loss grows with the square: \(2 \cdot 3^2 = 18\). Triple the shock, nine times the loss.

That towers over the menu cost \(4\), so cutting the price wins. After adjusting, profit is \(100 - 4 = 96\), far better than the \(100 - 18 = 82\) from standing still.`}},{text:{ko:String.raw`가격이 \(10\)에서 \(7\)로 움직였으니 판매량은 \(50\)을 회복한다. 큰 충격에서는 가격이 흡수하고 수량이 멀쩡하고, 작은 충격에서는 수량이 흡수하고 가격이 멀쩡하다 — 어느 쪽이 충격을 맞는지가 충격의 크기에 달렸다.`,en:String.raw`The price moved from \(10\) to \(7\), so volume recovers to \(50\). Big shocks are absorbed by prices and leave quantities whole; small shocks are absorbed by quantities and leave prices whole — which side takes the hit depends on the shock's size.`}}]}],n={id:`wages-unemployment`,title:{ko:`임금의 두 얼굴과 실업`,en:`The Two Faces of Wages, and Unemployment`},summary:{ko:String.raw`미시에서 임금은 회사가 내는 비용이었고, 가격은 어긋나면 곧바로 제자리로 돌아갔다. 거시에서 임금은 비용인 동시에 가계의 소득이고, 가격은 메뉴 비용에 발이 묶여 있다. 임금의 두 얼굴이 만드는 구성의 오류, 그리고 가격이 안 움직일 때 수량과 일자리가 대신 충격을 맞는 방식을 두 모형으로 만져본다.`,en:String.raw`In micro, a wage was a cost the firm pays, and a price that slipped out of place snapped right back. In macro, a wage is a cost and a household's income at the same time, and prices are held in place by menu costs. Two models let you touch the fallacy of composition the wage's two faces create, and how quantities and jobs end up absorbing shocks when prices will not move.`},scenes:[{id:`two-faces-of-wages`,title:{ko:`임금의 두 얼굴: 한 회사 vs 경제 전체`,en:`The Two Faces of a Wage: One Firm vs the Whole Economy`},order:1,summary:{ko:String.raw`미시에서 임금은 회사가 내는 비용이었다. 거시에서 그 임금은 가계의 소득이기도 하다.

한 회사만 임금을 내리면 사람을 더 뽑는다. 그런데 모든 회사가 함께 내리면 어떨까. 손님의 지갑이 얇아져 물건이 안 팔린다. 결국 일자리 자체가 사라진다. 아래 식이 그 연쇄를 보여 준다.

예를 들면, 동네 🏪 빵집이 💵 알바비를 깎으면 알바를 한 명 더 쓸 수 있다. 하지만 동네 모든 가게가 깎으면 손님들 용돈이 줄어 🍞 빵이 안 팔린다. 그러면 알바 자리도 줄어든다.`,en:String.raw`In micro, a wage is a cost the firm pays. In macro, that same wage is also the household's income.

One firm that cuts wages can hire more people. But what if every firm cuts at once? Customers' wallets get thinner, and goods stop selling. In the end, the jobs themselves vanish. The formula below traces that chain.

For example, a corner 🏪 bakery that cuts 💵 pay can afford one more helper. But if every shop in town cuts pay, customers have less to spend and 🍞 bread stops selling. Then helper jobs disappear too.`},tex:[String.raw`L = 60 - 4w`,String.raw`\Delta Y = \frac{c \cdot \Delta B}{1 - c}`],controls:[{kind:`select`,key:`view`,label:{ko:`보기 (렌즈)`,en:`view (lens)`},options:[`one-firm`,`whole-economy`],init:`one-firm`},{kind:`slider`,key:`dwage`,label:{ko:`임금 인하 폭 Δw`,en:`wage cut Δw`},min:0,max:4,step:.5,init:2},{kind:`slider`,key:`mpc`,label:{ko:`한계소비성향 c (전체 보기에서만 작동)`,en:`MPC c (bites only in the economy view)`},min:0,max:.9,step:.05,init:.75}],problems:e},{id:`menu-costs`,title:{ko:`메뉴 비용: 가격이 안 움직일 때`,en:`Menu Costs: When Prices Won't Move`},order:2,summary:{ko:String.raw`미시에서는 가격이 어긋나면 곧바로 움직였다. 거시에서는 가격표 바꾸는 비용이 가격을 붙잡는다.

가격을 바꾸려면 메뉴판을 새로 찍어야 한다. 그 비용이 아까워 가게는 웬만하면 버틴다. 충격이 작으면 손해를 보고도 그대로 둔다. 아래 식의 문턱을 넘을 만큼 클 때만 가격을 바꾼다. 가격이 얼면 판매량과 일자리가 충격을 대신 맞는다.

예를 들면, 🏪 문구점 ✏️ 연필 값은 500원이다. 원가가 조금 올라도 사장님은 가격표를 안 바꾼다. 새로 쓰는 수고가 더 크기 때문이다. 대신 연필을 조금 덜 갖다 놓는다.`,en:String.raw`In micro, an out-of-place price moved at once. In macro, the cost of changing price tags holds prices still.

Changing a price means reprinting the menu. Shops hate that cost, so they put up with small losses. Only a shock past the threshold below makes them move. While prices stay frozen, sales and jobs take the hit instead.

For example, ✏️ pencils at the 🏪 stationery shop cost 500 won. Costs creep up a little, but the owner leaves the tag alone. Rewriting every tag is more trouble than the small loss. Instead, the shop simply stocks fewer pencils.`},tex:[String.raw`\pi(p) = \pi^* - k(p - p^*)^2`,String.raw`\delta^* = \sqrt{F / k}`],prerequisites:[`two-faces-of-wages`],controls:[{kind:`slider`,key:`delta`,label:{ko:`충격 크기 δ (적정 가격의 하락 폭)`,en:`shock size δ (drop in the ideal price)`},min:0,max:4,step:.25,init:1},{kind:`slider`,key:`fee`,label:{ko:`메뉴 비용 F`,en:`menu cost F`},min:0,max:16,step:1,init:4}],problems:t}]};export{n as t};