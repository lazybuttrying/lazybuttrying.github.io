var e=[{id:`ce-price-formula`,difficulty:1,topics:[`edgeworth-box`],statement:{ko:String.raw`\(a_1 = 1/3\), \(a_2 = 2/3\), \(W = (12, 12)\), \(e^1 = (9, 3)\)인 경제에서 균형가격 \(p_1\)(\(p_2 = 1\) 기준)을 구하라.`,en:String.raw`In an economy with \(a_1 = 1/3\), \(a_2 = 2/3\), \(W = (12, 12)\), \(e^1 = (9, 3)\), find the equilibrium price \(p_1\) (with \(p_2 = 1\)).`},display:[String.raw`p_1 = \frac{a_1 e^1_2 + a_2 e^2_2}{(1-a_1) e^1_1 + (1-a_2) e^2_1}`],solution:[{text:{ko:String.raw`\(e^2 = (3, 9)\)이다. 분자 \(= \frac{1}{3} \cdot 3 + \frac{2}{3} \cdot 9 = 1 + 6 = 7\), 분모 \(= \frac{2}{3} \cdot 9 + \frac{1}{3} \cdot 3 = 6 + 1 = 7\)이므로 \(p_1 = 1\)이다.`,en:String.raw`\(e^2 = (3, 9)\). Numerator \(= \frac{1}{3} \cdot 3 + \frac{2}{3} \cdot 9 = 1 + 6 = 7\); denominator \(= \frac{2}{3} \cdot 9 + \frac{1}{3} \cdot 3 = 6 + 1 = 7\); so \(p_1 = 1\).`}},{text:{ko:String.raw`\(w_1 = 9 + 3 = 12\)이므로 \(x^1 = (12/3,\ 2 \cdot 12/3) = (4, 8)\), \(w_2 = 3 + 9 = 12\)이므로 \(x^2 = (2 \cdot 12/3,\ 12/3) = (8, 4)\)이다. 합이 \((12, 12)\)로 청산된다.`,en:String.raw`\(w_1 = 9 + 3 = 12\), so \(x^1 = (12/3,\ 2 \cdot 12/3) = (4, 8)\); \(w_2 = 3 + 9 = 12\), so \(x^2 = (2 \cdot 12/3,\ 12/3) = (8, 4)\). They sum to \((12, 12)\): markets clear.`}}],viz:{sceneId:`edgeworth-box`,preset:{a1:1/3,a2:2/3,e1x:9,e1y:3},presetCaption:{ko:String.raw`\(a_1 = 1/3\), \(a_2 = 2/3\), \(e^1 = (9, 3)\) — 균형 \((4, 8)\)과 \((8, 4)\).`,en:String.raw`\(a_1 = 1/3\), \(a_2 = 2/3\), \(e^1 = (9, 3)\) — equilibrium \((4, 8)\) and \((8, 4)\).`}}},{id:`pareto-inefficient-endowment`,difficulty:2,topics:[`edgeworth-box`,`welfare-theorems`],statement:{ko:String.raw`보유량 자체가 파레토 비효율적일 수 있음을 보여라: \(a_1 = a_2 = 1/2\), \(W = (10, 10)\), \(e^1 = (9, 1)\)일 때, 두 소비자 모두를 strictly 개선하는 배분을 하나 제시하라.`,en:String.raw`Show that the endowment itself can be Pareto inefficient: with \(a_1 = a_2 = 1/2\), \(W = (10, 10)\), \(e^1 = (9, 1)\), exhibit an allocation that strictly improves both consumers.`},solution:[{text:{ko:String.raw`보유량에서의 효용은 \(u_1 = \sqrt{9} = 3\), \(u_2 = \sqrt{1 \cdot 9} = 3\)이다.`,en:String.raw`Endowment utilities are \(u_1 = \sqrt{9} = 3\), \(u_2 = \sqrt{1 \cdot 9} = 3\).`}},{text:{ko:String.raw`배분 \(x^1 = (5, 5)\), \(x^2 = (5, 5)\)를 생각하자.

\(u_1 = u_2 = 5 > 3\)이므로 두 소비자 모두 strictly 개선된다.

따라서 보유량은 파레토 비효율적이다 — 거래의 이득이 존재한다.`,en:String.raw`Consider \(x^1 = (5, 5)\), \(x^2 = (5, 5)\).

Then \(u_1 = u_2 = 5 > 3\), so both strictly improve.

The endowment is Pareto inefficient — there are gains from trade.`}}]},{id:`transfer-direction`,difficulty:2,topics:[`welfare-theorems`],statement:{ko:String.raw`대칭 경제(\(a_1 = a_2 = 1/2\), \(W = (10,10)\), \(e^1 = (7,3)\))에서 파레토 최적점 \(x^1 = (4, 4)\)를 분권화하려면 이전소득이 어느 방향으로 흘러야 하는가?

크기를 구하라.`,en:String.raw`In the symmetric economy (\(a_1 = a_2 = 1/2\), \(W = (10,10)\), \(e^1 = (7,3)\)), in which direction must the lump-sum transfer flow to decentralize the Pareto optimum \(x^1 = (4, 4)\)?

Find its size.`},display:[String.raw`T = p \cdot (x^1 - e^1)`],solution:[{text:{ko:String.raw`지지 가격은 \(MRS(4,4) = 1\)이므로 \(p_1 = 1\)이다. \(T = 1 \cdot (4 - 7) + (4 - 3) = -2\)이다.`,en:String.raw`The supporting price is \(MRS(4,4) = 1\), so \(p_1 = 1\). Then \(T = 1 \cdot (4 - 7) + (4 - 3) = -2\).`}},{text:{ko:String.raw`\(T < 0\)이므로 이전소득은 소비자 1에게서가 아니라 소비자 1로부터 빠져나간다 — 즉 소비자 2에게 2만큼 준다.

이전 후 \(w_1 = 8\), \(x^1 = (4, 4)\)가 최적이다.

목표점이 보유량보다 소비자 1에게 불리하므로 당연하다.`,en:String.raw`\(T < 0\) means the transfer flows away from consumer 1 — i.e., 2 units go to consumer 2.

After the transfer \(w_1 = 8\) and \(x^1 = (4, 4)\) is optimal.

Natural, since the target favors consumer 1 less than the endowment does.`}}],viz:{sceneId:`welfare-theorems`,preset:{a1:.5,a2:.5,e1x:7,e1y:3,t:.397},presetCaption:{ko:String.raw`목표 \((4, 4)\) 근처 — \(T = -2\) (소비자 2에게로).`,en:String.raw`Near the target \((4, 4)\) — \(T = -2\) (toward consumer 2).`}}},{id:`core-shrinks-with-trade`,difficulty:3,topics:[`edgeworth-box`],statement:{ko:String.raw`코어가 항상 경쟁균형을 포함함을 증명하라.

(힌트: 균형 배분 \(x^*\)가 코어 밖이라고 가정하면, 어떤 제휴가 차단할 수 있는가? 균형가격에서 그 제휴의 예산을 생각해 보라.)`,en:String.raw`Prove that the core always contains the competitive equilibrium.

(Hint: suppose the equilibrium allocation \(x^*\) were outside the core — which coalition could block it? Consider that coalition's budget at equilibrium prices.)`},solution:[{text:{ko:String.raw`\(x^*\)가 코어 밖이면 어떤 제휴 \(S\)가 \(y^S\)로 차단한다: 모든 \(i \in S\)에 \(u_i(y^i) > u_i(x^{*i})\), \(\sum_{i \in S} y^i = \sum_{i \in S} e^i\).`,en:String.raw`If \(x^*\) is outside the core, some coalition \(S\) blocks it with \(y^S\): \(u_i(y^i) > u_i(x^{*i})\) for all \(i \in S\) and \(\sum_{i \in S} y^i = \sum_{i \in S} e^i\).`}},{text:{ko:String.raw`\(x^{*i}\)는 예산 \(p \cdot e^i\)에서의 최적 선택이므로, 더 좋은 \(y^i\)는 예산을 초과해야 한다: \(p \cdot y^i > p \cdot e^i\).

모든 \(i \in S\)에 대해 합하면 \(p \cdot \sum_S y^i > p \cdot \sum_S e^i\)가 되는데, 이는 \(\sum_S y^i = \sum_S e^i\)와 모순이다.

따라서 차단 제휴는 존재하지 않는다.`,en:String.raw`Since \(x^{*i}\) is optimal at budget \(p \cdot e^i\), anything better must exceed the budget: \(p \cdot y^i > p \cdot e^i\).

Summing over \(i \in S\) gives \(p \cdot \sum_S y^i > p \cdot \sum_S e^i\), contradicting \(\sum_S y^i = \sum_S e^i\).

No blocking coalition exists.`}}]}];export{e as exercises};