var e=[{id:`cheap-world-money`,difficulty:2,topics:[`trade-balance`],statement:{ko:String.raw`세계 이자율이 \(r^* = 5\%\)에서 \(r^* = 2\%\)로 떨어졌다.

저축 이동과 투자 이동이 없는 작은 개방경제에서 \(S\), \(I\), \(NX\)를 구하고, 이 나라가 대출국인지 차입국인지 말하라. (저축은 \(S = 60 + 8r^*\), 투자는 \(I = 140 - 8r^*\)다.)`,en:String.raw`The world interest rate falls from \(r^* = 5\%\) to \(r^* = 2\%\).

In a small open economy with no saving or investment shifts, find \(S\), \(I\), and \(NX\), and say whether the country is a lender or a borrower. (Saving is \(S = 60 + 8r^*\) and investment is \(I = 140 - 8r^*\).)`},solution:[{text:{ko:String.raw`싼 세계 금리는 저축의 보상을 줄인다: \(S = 60 + 8 \cdot 2 = 76\). 반대로 빌리는 값은 싸지니 투자는 는다: \(I = 140 - 8 \cdot 2 = 124\).`,en:String.raw`Cheap world money pays less for saving: \(S = 60 + 8 \cdot 2 = 76\). Borrowing is cheaper, so investment rises: \(I = 140 - 8 \cdot 2 = 124\).`}},{text:{ko:String.raw`순수출은 \(NX = S - I = 76 - 124 = -48\)이다. 투자에 필요한 자금 중 \(48\)을 국내 저축으로 못 메우니 해외에서 빌려 온다 — 이 나라는 차입국이고, 무역적자 \(48\)은 정확히 그 차입과 같다.`,en:String.raw`Net exports are \(NX = S - I = 76 - 124 = -48\). Domestic saving falls \(48\) short of funding investment, so that \(48\) is borrowed from abroad — the country is a borrower, and its trade deficit of \(48\) is exactly that borrowing.`}}],viz:{sceneId:`trade-balance`,preset:{rate:2,saving:0,invest:0,tariff:!1},presetCaption:{ko:String.raw`세계 이자율 \(2\%\) — \(NX = -48\)인 차입국.`,en:String.raw`World rate \(2\%\) — a borrower with \(NX = -48\).`}}},{id:`dissaving-and-the-currency`,difficulty:3,topics:[`trade-balance`,`exchange-rate`],statement:{ko:String.raw`순저축 \(S - I = 20\)인 흑자국이 정부 재정적자로 \(S - I = -20\)까지 떨어졌다.

순수출 일정이 \(NX(\varepsilon) = 90 - 5\varepsilon\)일 때, (1) 환율은 얼마나 절상되는가?

(2) 순수출은 얼마나 변하는가?

(3) 그 사이에 관세를 걸었다면 두 답이 달라졌을까?`,en:String.raw`A surplus country with net saving \(S - I = 20\) slides to \(S - I = -20\) on government deficits.

With the net-export schedule \(NX(\varepsilon) = 90 - 5\varepsilon\): (1) how much does the exchange rate appreciate?

(2) how much do net exports change?

(3) would either answer change if a tariff had been imposed along the way?`},solution:[{text:{ko:String.raw`(1) 흑자일 때 \(\varepsilon^* = (90 - 20) / 5 = 14\), 적자일 때 \(\varepsilon^* = (90 + 20) / 5 = 22\)다. 환율은 \(22 - 14 = 8\)만큼 절상된다.`,en:String.raw`(1) In surplus, \(\varepsilon^* = (90 - 20) / 5 = 14\); in deficit, \(\varepsilon^* = (90 + 20) / 5 = 22\). The exchange rate appreciates by \(22 - 14 = 8\).`}},{text:{ko:String.raw`(2) 순수출은 항등식 때문에 순저축과 똑같이 움직인다: \(+20\)에서 \(-20\)으로, 정확히 \(40\) 나빠진다. 환율이 \(8\) 오른 대가가 순수출 \(5 \cdot 8 = 40\)의 감소인 셈이다.`,en:String.raw`(2) Net exports track net saving exactly, by the identity: from \(+20\) to \(-20\), a worsening of exactly \(40\). The \(8\) points of appreciation cost \(5 \cdot 8 = 40\) of net exports — the two answers are the same fact seen from two sides.`}},{text:{ko:String.raw`(3) 달라지지 않는다.

관세는 저축도 투자도 움직이지 못하니 \(S - I\)가 그대로고, 환율이 다시 조정돼 순수출을 \(S - I\)에 맞춘다.

적자를 고치고 싶으면 관세가 아니라 저축(재정)을 손봐야 한다.`,en:String.raw`(3) No.

A tariff moves neither saving nor investment, so \(S - I\) is unchanged, and the exchange rate readjusts to pin net exports to \(S - I\) again.

To fix a deficit you fix saving — the budget — not trade.`}}],viz:{sceneId:`exchange-rate`,preset:{netSaving:-20,slope:5},presetCaption:{ko:String.raw`재정적자 뒤의 자리 — \(S - I = -20\), \(\varepsilon^* = 22\).`,en:String.raw`After the deficits — \(S - I = -20\), \(\varepsilon^* = 22\).`}}}];export{e as exercises};