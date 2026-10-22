var e=[{id:`coffee-only-shock`,statement:{ko:String.raw`☕ 커피값만 \(2\)에서 \(4\)로 올랐다. 🍞 빵값은 \(4\), 월급은 \(100\) 그대로다.

커피와 빵 소비는 어떻게 변하고, 물가 지수는 얼마가 될까?`,en:String.raw`Only the ☕ coffee price rises, from \(2\) to \(4\). 🍞 Bread stays at \(4\) and pay stays at \(100\).

What happens to coffee and bread consumption, and what is the price index?`},preset:{coffee:4,inflate:!1},presetCaption:{ko:String.raw`커피값만 두 배 — 빵값과 월급은 고정.`,en:String.raw`Only the coffee price doubles — bread price and pay fixed.`},proof:[{text:{ko:String.raw`이 소비자는 소득의 절반을 커피에 쓰기로 되어 있다.

가격이 두 배가 되면 살 수 있는 양은 절반이다: \(x_1 = 0.5 \cdot 100 / 4 = 12.5\)잔.

어제의 \(25\)잔에서 정확히 반으로 줄었다.`,en:String.raw`This consumer always spends half of income on coffee. Double the price and the quantity halves: \(x_1 = 0.5 \cdot 100 / 4 = 12.5\) cups — exactly half of yesterday's \(25\).`}},{text:{ko:String.raw`빵에 쓰는 돈도 소득의 절반 그대로라 빵 소비는 \(x_2 = 0.5 \cdot 100 / 4 = 12.5\)개로 변하지 않는다.

대신 장바구니의 개수 비중은 빵 쪽으로 기운다: 빵의 몫이 \(\frac{1}{3}\)에서 \(\frac{1}{2}\)로 오른다.

상대 가격이 움직이면 실질 배분이 이렇게 재배열된다.`,en:String.raw`The money going to bread is still half of income, so bread consumption is unchanged at \(x_2 = 0.5 \cdot 100 / 4 = 12.5\) loaves.

But the basket's mix by items tilts toward bread: its share rises from \(\frac{1}{3}\) to \(\frac{1}{2}\).

When a relative price moves, the real allocation rearranges like this.`}},{text:{ko:String.raw`물가 지수는 원래 장바구니(커피 \(25\)잔, 빵 \(12.5\)개)를 새 가격으로 다시 산 값이다: \((4 \cdot 25 + 4 \cdot 12.5) / 100 = 1.5\), 즉 지수 \(150\). 실질 소득은 \(100 / 1.5 \approx 66.7\) — 월급 숫자는 그대로인데 살 수 있는 장바구니는 \(\frac{2}{3}\)로 줄었다.`,en:String.raw`The price index re-prices the base basket (\(25\) cups, \(12.5\) loaves) at the new prices: \((4 \cdot 25 + 4 \cdot 12.5) / 100 = 1.5\), an index of \(150\). Real income is \(100 / 1.5 \approx 66.7\) — the paycheck's number never moved, yet the basket it buys shrank to \(\frac{2}{3}\).`}}]},{id:`everything-doubles`,statement:{ko:String.raw`어느 날 아침, 모든 가격과 월급이 정확히 두 배가 됐다. ☕ 커피 \(4\), 🍞 빵 \(8\), 월급 \(200\).

장바구니는 어떻게 될까?`,en:String.raw`One morning, every price and the paycheck exactly double. ☕ Coffee \(4\), 🍞 bread \(8\), pay \(200\).

What happens to the basket?`},preset:{coffee:2,inflate:!0},presetCaption:{ko:String.raw`전부 두 배 켬 — 실효 가격은 커피 \(4\) · 빵 \(8\), 소득 \(200\).`,en:String.raw`Double-everything on — effective prices are coffee \(4\) · bread \(8\), income \(200\).`},proof:[{text:{ko:String.raw`수요부터 보자: \(x_1 = 0.5 \cdot 200 / 4 = 25\)잔, \(x_2 = 0.5 \cdot 200 / 8 = 12.5\)개.

어제와 소수점까지 똑같다.

가격과 소득이 같은 비율로 커지면 수요는 꿈쩍도 하지 않는다.`,en:String.raw`Start with demand: \(x_1 = 0.5 \cdot 200 / 4 = 25\) cups, \(x_2 = 0.5 \cdot 200 / 8 = 12.5\) loaves — identical to yesterday, to the decimal. When prices and income scale by the same factor, demand does not budge.`}},{text:{ko:String.raw`변한 것은 명목 숫자뿐이다. 지출 총액은 \(100\)에서 \(200\)으로, 물가 지수도 \(200\)으로 뛰었지만, 실질 소득은 \(200 / 2 = 100\)으로 그대로고 상대 가격 \(p_1 / p_2 = 0.5\)도 그대로다.`,en:String.raw`Only the nominal numbers moved. Total spending jumped from \(100\) to \(200\), and the price index to \(200\) as well, but real income is \(200 / 2 = 100\), unchanged, and the relative price \(p_1 / p_2 = 0.5\) never moved either.`}},{text:{ko:String.raw`물가수준은 상대 가격 하나 건드리지 않고도 오를 수 있다. 실질이 아니라 자의 눈금이 바뀐 것이다 — 이것이 화폐 중립성의 가장 순수한 형태다.`,en:String.raw`The price level can rise without touching a single relative price.

Nothing real changed — the ruler's markings did.

This is money neutrality in its purest form.`}}]}],t=[{id:`textbook-inflation`,statement:{ko:String.raw`중앙은행이 돈을 연 \(10\%\)씩 늘리고, 실질 산출은 연 \(3\%\)씩 자라며, 유통속도는 일정하다.

인플레이션율은 얼마이고, \(10\)년 뒤 물가수준(시작 \(100\))은 얼마일까?`,en:String.raw`The central bank grows money at \(10\%\) a year, real output grows at \(3\%\) a year, and velocity is constant.

What is inflation, and where is the price level (starting at \(100\)) after \(10\) years?`},preset:{moneyGrowth:10,realGrowth:3,velRising:!1},presetCaption:{ko:String.raw`통화 증가 \(10\%\), 실질 성장 \(3\%\), 유통속도 일정.`,en:String.raw`Money growth \(10\%\), real growth \(3\%\), velocity constant.`},proof:[{text:{ko:String.raw`인플레이션은 돈의 증가에서 실질 성장이 흡수한 몫을 뺀 나머지로, 아래 식과 같다. 물건이 \(3\%\)씩 늘어나는 속도는 그만큼의 돈 증가를 가격 상승 없이 받아낸다.`,en:String.raw`Inflation is what is left of money growth after real growth absorbs its share, as in the formula below. Output growing at \(3\%\) soaks up that much money growth without pushing prices up.`},display:[String.raw`\pi = g_M + g_V - g_Y = 10 + 0 - 3 = 7\%`]},{text:{ko:String.raw`물가 경로는 매년 \(1.07\)배가 된다: \(P(10) = 100 \cdot 1.07^{10} \approx 196.7\). 연 \(7\%\)가 별것 아닌 듯 보여도 \(10\)년이면 물가가 거의 두 배다.`,en:String.raw`The price path multiplies by \(1.07\) each year: \(P(10) = 100 \cdot 1.07^{10} \approx 196.7\). Seven percent a year sounds small, but over a decade prices nearly double.`}}]},{id:`money-doubling-experiment`,statement:{ko:String.raw`밤사이 통화량이 정확히 두 배가 됐다 (\(M = 10000 \rightarrow 20000\)). 유통속도(\(V = 1\))와 실질 산출(\(Y = 100\))은 장기적으로 그대로다.

물가수준과 실질 화폐잔고는 어떻게 될까?`,en:String.raw`Overnight, the money supply exactly doubles (\(M = 10000 \rightarrow 20000\)). Velocity (\(V = 1\)) and real output (\(Y = 100\)) stay put in the long run.

What happens to the price level and to real money balances?`},preset:{moneyGrowth:0,realGrowth:0,velRising:!1},presetCaption:{ko:String.raw`증가율 \(0\)인 평평한 경로 — 두 배 실험은 이 수준(levels) 위에서 읽는다.`,en:String.raw`Flat paths at zero growth — the doubling experiment is read off these levels.`},proof:[{text:{ko:String.raw`교환방정식을 물가로 풀면 아래 식이 된다.

전에는 \(P = 10000 \cdot 1 / 100 = 100\)이었는데, 돈이 두 배가 되면 \(P = 20000 \cdot 1 / 100 = 200\) — 물가도 정확히 두 배가 된다.

다른 실이 고정돼 있으니 방정식의 균형은 물가 혼자 맞춘다.`,en:String.raw`Solving the exchange equation for prices gives the formula below.

Before, \(P = 10000 \cdot 1 / 100 = 100\); with twice the money, \(P = 20000 \cdot 1 / 100 = 200\) — the price level exactly doubles.

With every other string held fixed, prices alone restore the equation's balance.`},display:[String.raw`P = MV / Y`]},{text:{ko:String.raw`실질 화폐잔고는 \(M / P\)다: 전에는 \(10000 / 100 = 100\), 후에는 \(20000 / 200 = 100\).

사람들이 실제로 쥘 수 있는 구매력은 그대로다.

실질 산출 \(Y = 100\)도 움직이지 않았다.`,en:String.raw`Real money balances are \(M / P\): \(10000 / 100 = 100\) before, \(20000 / 200 = 100\) after.

The purchasing power people actually hold is unchanged.

Real output, \(Y = 100\), never moved either.`}},{text:{ko:String.raw`돈을 두 배로 늘려도 실질 세계는 어제와 같고 명목 눈금만 두 배가 됐다. 장기에서 화폐는 중립적이다 — 단, 이 그림은 가격이 다 조정된 뒤의 이야기다.`,en:String.raw`Double the money and the real world is yesterday's world with the nominal ruler rescaled. In the long run money is neutral — though this picture is the one after prices have finished adjusting.`}}]}],n={id:`money-prices`,title:{ko:`화폐와 물가`,en:`Money and Prices`},summary:{ko:String.raw`미시에서 가격은 물건과 물건 사이의 교환 비율이었는데, 거시에서는 모든 가격을 한데 묶은 물가수준과, 그 수준을 재는 자인 화폐가 주인공이 된다. 상대 가격이 하나도 안 변했는데 물가만 오를 수 있는지, 돈을 두 배로 늘리면 정말 가격만 두 배가 되는지 — 물가수준과 교환방정식으로 화폐 중립성의 씨앗을 본다.`,en:String.raw`In micro, a price was an exchange ratio between two goods; in macro, the price level — all prices bundled into one number — and money, the ruler that measures it, take center stage. Can the price level rise while no relative price moves? If money doubles, do only prices double? The price level and the equation of exchange plant the seed of money neutrality.`},scenes:[{id:`price-vs-level`,title:{ko:`가격은 비율, 물가는 수준`,en:`A Price Is a Ratio; the Price Level Is a Level`},order:1,summary:{ko:String.raw`미시에서 가격은 물건끼리의 교환 비율이었다. 거시에서는 모든 가격의 평균인 물가수준이 따로 등장한다.

☕ 커피값만 오르면 장바구니가 바뀐다. 값싼 쪽으로 소비가 옮겨 가기 때문이다. 그런데 가격과 월급이 전부 두 배가 되면 어떨까. 사는 물건은 어제와 똑같다. 오르는 것은 지출 금액뿐이다.

예를 들면, 🏪 문구점에서 ✏️ 연필은 100원, 지우개는 200원이다. 둘 다 두 배가 되고 💰 용돈도 두 배가 되면, 살 수 있는 묶음은 전과 똑같다.`,en:String.raw`In micro, a price was an exchange ratio between two goods. In macro, the average of all prices — the price level — appears as its own object.

If only ☕ coffee gets pricier, the basket really changes. Shoppers shift toward what stayed cheap. But suppose every price and every paycheck double. What people buy stays exactly the same. Only the money handed over doubles.

For example, at the 🏪 stationery shop a ✏️ pencil costs 100 won and an eraser 200 won. If both prices double and your 💰 allowance doubles too, you can buy the very same set as before.`},tex:[String.raw`x_1 = \alpha W / p_1`,String.raw`x_2 = (1 - \alpha) W / p_2`],controls:[{kind:`slider`,key:`coffee`,label:{ko:`커피 가격`,en:`coffee price`},min:1,max:8,step:.5,init:2},{kind:`toggle`,key:`inflate`,label:{ko:`전부 두 배 (가격도 월급도)`,en:`double everything (prices and pay)`},init:!1}],problems:e},{id:`quantity-theory`,title:{ko:`교환방정식과 화폐 중립성`,en:`The Equation of Exchange and Neutrality`},order:2,summary:{ko:String.raw`미시의 세계에는 화폐가 거의 없었다. 거시에서는 화폐가 한가운데로 들어온다.

돈이 두 배로 늘면 물가도 두 배가 된다. 실제 물건의 양은 그대로다. 아래 식이 말하듯, 돈은 자의 눈금만 바꾼다. 인플레이션은 돈 증가에서 실질 성장이 빼고 남은 몫이다.

예를 들면, 반 🧑 친구 10명이 🍬 사탕 10개를 나눈다. 사탕 그림이 그려진 💰 종이돈이 두 배로 풀리면, 사탕 하나 값만 두 배가 된다.`,en:String.raw`In micro, money barely appeared; barter ran the markets. In macro, money moves to the center.

Double the money and prices double too. The pile of real goods does not grow. As the equation below says, money only rescales the ruler. Inflation is money growth minus real growth.

For example, ten 🧑 classmates share ten 🍬 candies. If the 💰 paper money with candy pictures doubles, each candy just costs twice as much.`},tex:[String.raw`MV = PY`,String.raw`\pi = g_M + g_V - g_Y`],prerequisites:[`price-vs-level`],controls:[{kind:`slider`,key:`moneyGrowth`,label:{ko:`통화 증가율 (%/년)`,en:`money growth (%/yr)`},min:0,max:20,step:1,init:10},{kind:`slider`,key:`realGrowth`,label:{ko:`실질 성장률 (%/년)`,en:`real growth (%/yr)`},min:0,max:6,step:1,init:3},{kind:`toggle`,key:`velRising`,label:{ko:`유통속도 상승 (연 2%)`,en:`velocity rising (2%/yr)`},init:!1}],problems:t}]};export{n as t};