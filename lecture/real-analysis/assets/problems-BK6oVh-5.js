var e={"logic-propositions":[{id:`logic-propositions-contrapositive-equivalence`,statement:{ko:String.raw`진리표를 이용해 \(P \to Q\)가 그 대우 \(\lnot Q \to \lnot P\)와 논리적으로 동치임을 완전히 증명하세요.

네 행을 모두 직접 계산하고, 왜 모든 행에서 진릿값이 일치하면 논리적 동치인지 설명하세요.`,en:String.raw`Use a truth table to prove completely that \(P \to Q\) is logically equivalent to its contrapositive \(\lnot Q \to \lnot P\).

Compute all four rows explicitly and explain why matching truth values in every row means logical equivalence.`},display:[String.raw`(P \to Q) \;\equiv\; (\lnot Q \to \lnot P)`],preset:{connective:`implies`,contrapositive:!0},presetCaption:{ko:String.raw`연결사 함의, 대우 열 표시: \(P \to Q\) 열과 \(\lnot Q \to \lnot P\) 열이 4개 행에서 모두 일치하고, 역 \(Q \to P\) 열은 \((T, F)\) 행에서 다릅니다.`,en:String.raw`Connective: implication, contrapositive column shown: the \(P \to Q\) and \(\lnot Q \to \lnot P\) columns agree in all 4 rows, while the converse \(Q \to P\) column differs in the \((T, F)\) row.`},proof:[{text:{ko:String.raw`\(P \to Q\)는 정의상 \(\lnot P \lor Q\)와 같습니다.

네 행을 직접 계산합니다.

\((P, Q) = (T, T)\): \(P \to Q = T\), 대우 \((\lnot Q) \to (\lnot P) = F \to F = T\).

\((T, F)\): \(P \to Q = T \to F = F\), 대우 \(T \to F = F\).`,en:String.raw`By definition \(P \to Q\) is \(\lnot P \lor Q\).

Compute the four rows explicitly.

\((P, Q) = (T, T)\): \(P \to Q = T\), contrapositive \((\lnot Q) \to (\lnot P) = F \to F = T\).

\((T, F)\): \(P \to Q = T \to F = F\), contrapositive \(T \to F = F\).`}},{text:{ko:String.raw`\((P, Q) = (F, T)\): \(P \to Q = F \to T = T\) (전건이 거짓이면 함의는 참), 대우 \(F \to T = T\).

\((F, F)\): \(P \to Q = F \to F = T\), 대우 \(T \to T = T\).

따라서 네 행의 진릿값 쌍은 \((T,T), (F,F), (T,T), (T,T)\) — 두 열이 행마다 완전히 일치합니다.`,en:String.raw`\((P, Q) = (F, T)\): \(P \to Q = F \to T = T\) (an implication with a false antecedent is true), contrapositive \(F \to T = T\).

\((F, F)\): \(P \to Q = F \to F = T\), contrapositive \(T \to T = T\).

So the row-by-row truth pairs are \((T,T), (F,F), (T,T), (T,T)\) — the two columns match in every row.`}},{text:{ko:String.raw`모든 행에서 진릿값이 일치한다는 것은, \(P\)와 \(Q\)에 어떤 진릿값을 대입해도 두 명제가 같은 값을 가진다는 뜻입니다.

"언제 참인가"에 대한 답이 가능한 모든 경우에서 똑같으므로, 두 명제는 논리적으로 동치입니다.

이것이 대우 증명법의 정당화입니다: \(P \to Q\) 대신 동치인 \(\lnot Q \to \lnot P\)를 증명해도 됩니다.`,en:String.raw`Matching truth values in every row means the two propositions take the same value under every assignment of truth values to \(P\) and \(Q\).

Their "when is this true" answers coincide in every possible case, so the two propositions are logically equivalent.

This justifies proof by contrapositive: instead of \(P \to Q\) we may prove the equivalent \(\lnot Q \to \lnot P\).`}}]},{id:`logic-propositions-de-morgan`,statement:{ko:String.raw`진리표로 드모르간 법칙 \(\lnot(P \land Q) \iff (\lnot P) \lor (\lnot Q)\)를 증명하세요.

네 행에서 양변의 진릿값을 모두 계산하고, 어느 행에서 \(\land\)가 \(F\)가 되는지 관찰하세요.`,en:String.raw`Prove De Morgan's law \(\lnot(P \land Q) \iff (\lnot P) \lor (\lnot Q)\) with a truth table.

Compute both sides in all four rows, and observe in which rows the \(\land\) column is \(F\).`},display:[String.raw`\lnot(P \land Q) \;\iff\; (\lnot P) \lor (\lnot Q)`],preset:{connective:`and`,contrapositive:!0},presetCaption:{ko:String.raw`연결사 논리곱, 대우 열 표시: \(P \land Q\) 열에서 \(T\)인 행은 \((T, T)\) 하나뿐이며, 그 행에서만 \(\lnot(P \land Q)\)와 \((\lnot P) \lor (\lnot Q)\)가 함께 \(F\)가 됩니다.`,en:String.raw`Connective: conjunction, contrapositive column shown: the \(P \land Q\) column is \(T\) only in the \((T, T)\) row, and only in that row are \(\lnot(P \land Q)\) and \((\lnot P) \lor (\lnot Q)\) both \(F\).`},proof:[{text:{ko:String.raw`먼저 \(P \land Q\) 열: \((T,T) \to T\), \((T,F) \to F\), \((F,T) \to F\), \((F,F) \to F\) — \(T\)는 \((T,T)\) 행 하나뿐입니다. 따라서 좌변 \(\lnot(P \land Q)\)의 열은 \((F, T, T, T)\) 순서가 됩니다.`,en:String.raw`First the \(P \land Q\) column: \((T,T) \to T\), \((T,F) \to F\), \((F,T) \to F\), \((F,F) \to F\) — \(T\) occurs only in the \((T, T)\) row. Hence the left side \(\lnot(P \land Q)\) has the column \((F, T, T, T)\) in row order.`}},{text:{ko:String.raw`우변 \((\lnot P) \lor (\lnot Q)\)를 행마다 계산합니다.

\((T,T)\): \(F \lor F = F\).

\((T,F)\): \(F \lor T = T\).

\((F,T)\): \(T \lor F = T\).

\((F,F)\): \(T \lor T = T\).

즉 우변의 열도 \((F, T, T, T)\) — 좌변과 행마다 일치합니다.`,en:String.raw`Now compute the right side \((\lnot P) \lor (\lnot Q)\) row by row.

\((T,T)\): \(F \lor F = F\).

\((T,F)\): \(F \lor T = T\).

\((F,T)\): \(T \lor F = T\).

\((F,F)\): \(T \lor T = T\).

So the right side also has column \((F, T, T, T)\) — matching the left side row by row.`}},{text:{ko:String.raw`두 열이 모든 행에서 일치하므로 \(\lnot(P \land Q)\)와 \((\lnot P) \lor (\lnot Q)\)는 논리적으로 동치입니다.

관찰: \(P \land Q\)가 \(F\)가 되는 세 행 — 곧 \(P\)와 \(Q\) 중 적어도 하나가 거짓인 행 — 에서 정확히 우변도 \(T\)가 됩니다.

"둘 다 참이 아니다"와 "적어도 하나가 거짓이다"는 같은 말입니다.`,en:String.raw`Since the two columns agree in every row, \(\lnot(P \land Q)\) and \((\lnot P) \lor (\lnot Q)\) are logically equivalent.

Observe: in exactly the three rows where \(P \land Q\) is \(F\) — i.e. where at least one of \(P, Q\) is false — the right side is \(T\).

"Not both are true" says the same thing as "at least one is false".`}}]},{id:`logic-propositions-converse-not-equivalent`,statement:{ko:String.raw`\(P \to Q\)가 그 역 \(Q \to P\)와 동치가 아님을 보이세요.

두 값이 갈라지는 행 \((P, Q) = (T, F)\)를 직접 제시하고, 대신 성립하는 동치 \(P \to Q \iff \lnot P \lor Q\)를 진리표로 증명하세요.`,en:String.raw`Show that \(P \to Q\) is NOT equivalent to its converse \(Q \to P\).

Exhibit the row \((P, Q) = (T, F)\) where they split, and instead prove the true equivalence \(P \to Q \iff \lnot P \lor Q\) with a truth table.`},display:[String.raw`(P \to Q) \;\not\equiv\; (Q \to P), \qquad (P \to Q) \;\equiv\; (\lnot P \lor Q)`],preset:{connective:`implies`,contrapositive:!1},presetCaption:{ko:String.raw`연결사 함의, 대우 열 숨김: \(P \to Q\) 열 \((T, F, T, T)\)와 역 \(Q \to P\) 열 \((T, T, F, T)\)가 \((T, F)\) 행에서 \(F\) 대 \(T\)로 갈라집니다.`,en:String.raw`Connective: implication, contrapositive column hidden: the \(P \to Q\) column \((T, F, T, T)\) and the converse \(Q \to P\) column \((T, T, F, T)\) split \(F\) vs \(T\) in the \((T, F)\) row.`},proof:[{text:{ko:String.raw`\((P, Q) = (T, F)\) 행을 봅니다.

\(P \to Q = T \to F = F\)인 반면, 역 \(Q \to P = F \to T = T\)입니다.

한 행에서라도 진릿값이 다르면 논리적 동치가 아니므로, \(P \to Q\)와 \(Q \to P\)는 동치가 아닙니다.

직관적으로도: "\(x\)가 소수이면 \(x\)는 홀수이거나 \(2\)이다"는 참이지만, 그 역은 거짓입니다.`,en:String.raw`Look at the row \((P, Q) = (T, F)\).

There \(P \to Q = T \to F = F\), while the converse \(Q \to P = F \to T = T\).

A single row with different truth values rules out logical equivalence, so \(P \to Q\) and \(Q \to P\) are not equivalent.

Intuitively: "if \(x\) is prime then \(x\) is odd or equal to \(2\)" is true, but its converse is false.`}},{text:{ko:String.raw`대신 \(P \to Q \iff \lnot P \lor Q\)를 증명합니다 — 이것이 함의의 정의이기도 합니다.

\(\lnot P \lor Q\)의 열을 계산하면: \((T,T)\): \(F \lor T = T\); \((T,F)\): \(F \lor F = F\); \((F,T)\): \(T \lor T = T\); \((F,F)\): \(T \lor F = T\).

즉 \((T, F, T, T)\) — \(P \to Q\) 열과 행마다 일치합니다.`,en:String.raw`Instead we prove \(P \to Q \iff \lnot P \lor Q\) — which is also the definition of implication.

Computing the \(\lnot P \lor Q\) column: \((T,T)\): \(F \lor T = T\); \((T,F)\): \(F \lor F = F\); \((F,T)\): \(T \lor T = T\); \((F,F)\): \(T \lor F = T\).

That is \((T, F, T, T)\) — matching the \(P \to Q\) column row by row.`}},{text:{ko:String.raw`따라서 \(P \to Q\)는 \(\lnot P \lor Q\)와 동치입니다.

이 형태는 부정의 이동을 쉽게 만듭니다: \(\lnot(P \to Q) \equiv \lnot(\lnot P \lor Q) \equiv P \land \lnot Q\) (드모르간).

즉 함의가 거짓이 되는 경우는 정확히 한 가지 — 전건은 참인데 후건이 거짓인 \((T, F)\) 행뿐입니다.`,en:String.raw`Hence \(P \to Q\) is equivalent to \(\lnot P \lor Q\).

This form makes negations easy to push inward: \(\lnot(P \to Q) \equiv \lnot(\lnot P \lor Q) \equiv P \land \lnot Q\) (by De Morgan).

So there is exactly one way an implication can be false — the row \((T, F)\): true antecedent, false consequent.`}}]}],quantifiers:[{id:`quantifiers-negate-eps-delta-continuity`,kind:`concept`,statement:{ko:String.raw`점 \(a\)에서의 연속성의 \(\varepsilon\)-\(\delta\) 정의 — "모든 \(\varepsilon > 0\)에 대해, 모든 \(x\)에 대해 \(|x-a| < \delta\)이면 \(|f(x)-f(a)| < \varepsilon\)인 \(\delta > 0\)이 존재한다" — 를 완전히 부정하세요.

부정된 명제가 \(f\)에 대해 정확히 무엇을 말하는지 풀어서 설명하세요.`,en:String.raw`Negate completely the \(\varepsilon\)-\(\delta\) definition of continuity of \(f\) at \(a\) — "for all \(\varepsilon > 0\) there is \(\delta > 0\) such that for all \(x\), \(|x-a| < \delta\) implies \(|f(x)-f(a)| < \varepsilon\)".

State precisely what the negation says about \(f\).`},display:[String.raw`\lnot\big(\forall\varepsilon{>}0\ \exists\delta{>}0\ \forall x\,(|x-a|<\delta \to |f(x)-f(a)|<\varepsilon)\big)`,String.raw`\exists\varepsilon{>}0\ \forall\delta{>}0\ \exists x\,(|x-a|<\delta \;\land\; |f(x)-f(a)|\ge\varepsilon)`],preset:{statement:`eps-delta`,x:2,negated:!0},presetCaption:{ko:String.raw`명제 \(\varepsilon\)-\(\delta\) (\(\varepsilon = 2.5\), \(\delta = \varepsilon/2 = 1.25\)), 부정 사슬 표시: 마지막 단계 \(\exists\varepsilon{>}0\ \forall\delta{>}0\ \exists t\,(|t| < \delta \land |2t| \ge \varepsilon)\).`,en:String.raw`The \(\varepsilon\)-\(\delta\) statement (\(\varepsilon = 2.5\), \(\delta = \varepsilon/2 = 1.25\)), negation chain shown: final step \(\exists\varepsilon{>}0\ \forall\delta{>}0\ \exists t\,(|t| < \delta \land |2t| \ge \varepsilon)\).`},choices:[{ko:String.raw`\(\exists\varepsilon{>}0\ \exists\delta{>}0\ \exists x\,(|x-a|<\delta \land |f(x)-f(a)|\ge\varepsilon)\)`,en:String.raw`\(\exists\varepsilon{>}0\ \exists\delta{>}0\ \exists x\,(|x-a|<\delta \land |f(x)-f(a)|\ge\varepsilon)\)`},{ko:String.raw`\(\exists\varepsilon{>}0\ \forall\delta{>}0\ \exists x\,(|x-a|<\delta \land |f(x)-f(a)|\ge\varepsilon)\)`,en:String.raw`\(\exists\varepsilon{>}0\ \forall\delta{>}0\ \exists x\,(|x-a|<\delta \land |f(x)-f(a)|\ge\varepsilon)\)`},{ko:String.raw`\(\exists\varepsilon{>}0\ \forall\delta{>}0\ \exists x\,(|x-a|<\delta \to |f(x)-f(a)|\ge\varepsilon)\)`,en:String.raw`\(\exists\varepsilon{>}0\ \forall\delta{>}0\ \exists x\,(|x-a|<\delta \to |f(x)-f(a)|\ge\varepsilon)\)`},{ko:String.raw`\(\forall\varepsilon{>}0\ \forall\delta{>}0\ \exists x\,(|x-a|\ge\delta \land |f(x)-f(a)|<\varepsilon)\)`,en:String.raw`\(\forall\varepsilon{>}0\ \forall\delta{>}0\ \exists x\,(|x-a|\ge\delta \land |f(x)-f(a)|<\varepsilon)\)`}],correctIndex:1,explanation:{ko:String.raw`부정은 양화사를 하나씩 뒤집고 (\(\forall\)는 \(\exists\)로, \(\exists\)는 \(\forall\)로) 마지막 함의를 \(\lnot(P \to Q) \equiv P \land \lnot Q\)로 바꿔 얻습니다. 첫 번째 선택지는 \(\delta\)의 양화사를 뒤집지 않았고, 세 번째는 함의를 그대로 두었으며, 네 번째는 바깥쪽 \(\forall\varepsilon\)를 뒤집지 않고 부등식만 바꿨습니다.`,en:String.raw`The negation flips every quantifier (\(\forall\) becomes \(\exists\), \(\exists\) becomes \(\forall\)) and rewrites the final implication via \(\lnot(P \to Q) \equiv P \land \lnot Q\). The first option fails to flip the \(\delta\) quantifier, the third keeps the implication instead of turning it into a conjunction, and the fourth never flips the outer \(\forall\varepsilon\) and merely reverses the inequalities.`},proof:[{text:{ko:String.raw`바깥의 부정을 한 단계씩 안으로 밀며 양화사를 뒤집습니다 (\(\lnot\forall = \exists\lnot\), \(\lnot\exists = \forall\lnot\)).
1단계: \(\exists\varepsilon > 0\ \lnot\big(\exists\delta > 0\ \forall x\,(|x-a| < \delta \to |f(x)-f(a)| < \varepsilon)\big)\).
2단계: \(\exists\varepsilon > 0\ \forall\delta > 0\ \lnot\big(\forall x\,(|x-a| < \delta \to |f(x)-f(a)| < \varepsilon)\big)\).`,en:String.raw`Push the outer negation inward one step at a time, flipping each quantifier (\(\lnot\forall = \exists\lnot\), \(\lnot\exists = \forall\lnot\)).
Step 1: \(\exists\varepsilon > 0\ \lnot\big(\exists\delta > 0\ \forall x\,(|x-a| < \delta \to |f(x)-f(a)| < \varepsilon)\big)\).
Step 2: \(\exists\varepsilon > 0\ \forall\delta > 0\ \lnot\big(\forall x\,(|x-a| < \delta \to |f(x)-f(a)| < \varepsilon)\big)\).`}},{text:{ko:String.raw`3단계: \(\exists\varepsilon > 0\ \forall\delta > 0\ \exists x\ \lnot\big(|x-a| < \delta \to |f(x)-f(a)| < \varepsilon\big)\).
마지막으로 함의의 부정을 사용합니다: \(\lnot(P \to Q) \equiv P \land \lnot Q\) (논제 1의 문제 3). 따라서 최종 부정은 \(\exists\varepsilon > 0\ \forall\delta > 0\ \exists x\,\big(|x-a| < \delta \land |f(x)-f(a)| \ge \varepsilon\big)\)입니다.`,en:String.raw`Step 3: \(\exists\varepsilon > 0\ \forall\delta > 0\ \exists x\ \lnot\big(|x-a| < \delta \to |f(x)-f(a)| < \varepsilon\big)\).
Finally use the negation of an implication: \(\lnot(P \to Q) \equiv P \land \lnot Q\) (scene 1, problem 3). The final negation is \(\exists\varepsilon > 0\ \forall\delta > 0\ \exists x\,\big(|x-a| < \delta \land |f(x)-f(a)| \ge \varepsilon\big)\).`}},{text:{ko:String.raw`이 명제가 \(f\)에 대해 말하는 바: 고정된 간격 \(\varepsilon > 0\)이 존재해서, \(a\)에 아무리 가까이 다가가도 (\(\delta\)를 아무리 작게 잡아도) \(f(x)\)가 \(f(a)\)로부터 \(\varepsilon\) 이상 떨어진 점 \(x\)가 항상 존재합니다 — 즉 \(f\)는 \(a\)에서 "끊어져" 있습니다. 이것이 정확히 "\(f\)는 \(a\)에서 불연속"의 정의입니다.`,en:String.raw`What this says about \(f\): there is a fixed gap \(\varepsilon > 0\) such that, no matter how close to \(a\) we look (however small \(\delta\) is taken), there is always a point \(x\) with \(f(x)\) at least \(\varepsilon\) away from \(f(a)\) — i.e. \(f\) stays "torn" at \(a\). This is exactly the definition of "\(f\) is discontinuous at \(a\)".`}}]},{id:`quantifiers-order-matters`,statement:{ko:String.raw`\(\forall x \in \mathbb{R}\ \exists y \in \mathbb{R}\ (y > x)\)를 증명하고 (증인 \(y = x+1\)), \(\exists y \in \mathbb{R}\ \forall x \in \mathbb{R}\ (y > x)\)가 거짓임을 증명하세요.

결론: 양화사의 순서가 의미를 바꾼다.`,en:String.raw`Prove \(\forall x \in \mathbb{R}\ \exists y \in \mathbb{R}\ (y > x)\) (witness \(y = x+1\)) and disprove \(\exists y \in \mathbb{R}\ \forall x \in \mathbb{R}\ (y > x)\).

Conclusion: quantifier order matters.`},display:[String.raw`\forall x\ \exists y\ (y > x)\ \text{is true},\qquad \exists y\ \forall x\ (y > x)\ \text{is false}`],preset:{statement:`forall-exists`,x:2,negated:!1},presetCaption:{ko:String.raw`명제 \(\forall x\,\exists y\,(y > x)\) (참), 도전값 \(x = 2\): 증인 \(y = 3\), \(3 > 2\) 성립.`,en:String.raw`The statement \(\forall x\,\exists y\,(y > x)\) (true), challenge \(x = 2\): witness \(y = 3\), and \(3 > 2\) holds.`},proof:[{text:{ko:String.raw`첫 번째 명제를 증명합니다. 임의의 \(x \in \mathbb{R}\)가 주어졌다고 하세요. \(y = x + 1\)이라 두면 \(y \in \mathbb{R}\)이고 \(y - x = 1 > 0\), 즉 \(y > x\)입니다.

\(x\)는 임의였으므로 모든 \(x\)에 대해 그런 \(y\)가 존재합니다 — \(\forall x\ \exists y\ (y > x)\)가 참입니다. 씬의 도전값 \(x = 2\)에서는 증인이 \(y = 3\)이고 \(3 > 2\)가 성립합니다.`,en:String.raw`Prove the first statement. Let an arbitrary \(x \in \mathbb{R}\) be given. Set \(y = x + 1\); then \(y \in \mathbb{R}\) and \(y - x = 1 > 0\), i.e. \(y > x\).

Since \(x\) was arbitrary, such a \(y\) exists for every \(x\) — \(\forall x\ \exists y\ (y > x)\) is true. At the scene's challenge \(x = 2\) the witness is \(y = 3\) and \(3 > 2\) holds.`}},{text:{ko:String.raw`두 번째 명제를 반증합니다. 어떤 후보 \(y_0 \in \mathbb{R}\)가 주어지든, \(x = y_0 + 1\)이라 두면 \(x \in \mathbb{R}\)이고 \(y_0 > x\)는 \(y_0 > y_0 + 1\), 즉 \(0 > 1\)과 동치라 거짓입니다.

따라서 "모든 \(x\)에 대해 \(y_0 > x\)"인 \(y_0\)는 존재하지 않습니다 — \(\exists y\ \forall x\ (y > x)\)는 거짓입니다. 씬에서 후보 \(y = 2\)는 \(x' = 3\)에 무너집니다.`,en:String.raw`Disprove the second statement. Whatever candidate \(y_0 \in \mathbb{R}\) is proposed, set \(x = y_0 + 1\); then \(x \in \mathbb{R}\) and \(y_0 > x\) is equivalent to \(y_0 > y_0 + 1\), i.e. \(0 > 1\), which is false.

Hence no \(y_0\) satisfies "\(y_0 > x\) for all \(x\)" — \(\exists y\ \forall x\ (y > x)\) is false. In the scene the candidate \(y = 2\) falls to \(x' = 3\).`}},{text:{ko:String.raw`결론: 양화사의 순서가 의미를 완전히 바꿉니다. \(\forall x\ \exists y\)에서는 \(y\)가 \(x\)에 의존해도 되지만 (\(y = x+1\)), \(\exists y\ \forall x\)에서는 하나의 \(y\)가 모든 \(x\)에 통해야 합니다.

\(\varepsilon\)-\(\delta\) 정의에서 \(\delta\)가 \(\varepsilon\)에 의존해도 되는 이유가 바로 이 순서입니다.`,en:String.raw`Conclusion: quantifier order completely changes the meaning. In \(\forall x\ \exists y\) the choice of \(y\) may depend on \(x\) (\(y = x+1\)), but in \(\exists y\ \forall x\) a single \(y\) must work for every \(x\).

This ordering is exactly why \(\delta\) in the \(\varepsilon\)-\(\delta\) definition is allowed to depend on \(\varepsilon\).`}}]},{id:`quantifiers-unbounded-one-over-x`,statement:{ko:String.raw`"\(f\)는 \((0,1]\)에서 유계" — 즉 \(\exists M\ \forall x \in (0,1]\ |f(x)| \le M\) — 를 부정하여 \(\forall M\ \exists x \in (0,1]\ |f(x)| > M\)을 얻은 뒤, 그 형태를 이용해 \(f(x) = 1/x\)가 \((0,1]\)에서 유계가 아님을 증명하세요.`,en:String.raw`Negate "\(f\) is bounded on \((0,1]\)" — i.e. \(\exists M\ \forall x \in (0,1]\ |f(x)| \le M\) — to obtain \(\forall M\ \exists x \in (0,1]\ |f(x)| > M\), then use that form to prove \(f(x) = 1/x\) is unbounded on \((0,1]\).`},display:[String.raw`\lnot\big(\exists M\ \forall x \in (0,1]\ (|f(x)| \le M)\big)\ \equiv\ \forall M\ \exists x \in (0,1]\ (|f(x)| > M)`,String.raw`x = \frac{1}{|M|+2} \in (0,1],\qquad f(x) = |M|+2 > M`],preset:{statement:`exists-forall`,x:2,negated:!0},presetCaption:{ko:String.raw`명제 \(\exists y\,\forall x\,(y > x)\) (거짓), 부정 사슬 표시: 마지막 단계 \(\forall y\,\exists x\,(y \le x)\) — 유계 부정의 양화사 패턴과 같습니다.`,en:String.raw`The statement \(\exists y\,\forall x\,(y > x)\) (false), negation chain shown: final step \(\forall y\,\exists x\,(y \le x)\) — the same quantifier pattern as the negation of boundedness.`},proof:[{text:{ko:String.raw`유계의 정의를 부정합니다: \(\lnot\big(\exists M\ \forall x \in (0,1]\ (|f(x)| \le M)\big)\).
부정을 안으로 밀면 \(\forall M\ \lnot\big(\forall x \in (0,1]\ (|f(x)| \le M)\big)\)가 되고, 다시 밀면 \(\forall M\ \exists x \in (0,1]\ \lnot(|f(x)| \le M)\), 즉 \(\forall M\ \exists x \in (0,1]\ (|f(x)| > M)\)입니다.

말로 풀면: "어떤 경계 \(M\)을 제시해도, 그것을 초과하는 점 \(x\)가 존재한다" — 이것이 무계의 정의입니다.`,en:String.raw`Negate the definition of boundedness: \(\lnot\big(\exists M\ \forall x \in (0,1]\ (|f(x)| \le M)\big)\).
Pushing the negation inward gives \(\forall M\ \lnot\big(\forall x \in (0,1]\ (|f(x)| \le M)\big)\), then \(\forall M\ \exists x \in (0,1]\ \lnot(|f(x)| \le M)\), i.e. \(\forall M\ \exists x \in (0,1]\ (|f(x)| > M)\).

In words: "whatever bound \(M\) is proposed, there is a point \(x\) exceeding it" — that is the definition of unboundedness.`}},{text:{ko:String.raw`이제 \(f(x) = 1/x\) (\(x \in (0,1]\))에 적용합니다. 임의의 \(M \in \mathbb{R}\)가 주어졌다고 하세요. \(x = \frac{1}{|M|+2}\)라 두면, 분모가 양수이므로 \(x > 0\)이고 \(|M|+2 \ge 2\)이므로 \(x \le \frac12 < 1\) — 즉 \(x \in (0,1]\)입니다.

이때 \(|f(x)| = f(x) = |M|+2\)인데, \(|M| \ge M\)이므로 \(|M|+2 > M\)입니다. 따라서 이 \(x\)에서 \(|f(x)| > M\)이 성립합니다.`,en:String.raw`Now apply it to \(f(x) = 1/x\) (\(x \in (0,1]\)). Let an arbitrary \(M \in \mathbb{R}\) be given. Set \(x = \frac{1}{|M|+2}\); the denominator is positive so \(x > 0\), and \(|M|+2 \ge 2\) gives \(x \le \frac12 < 1\) — hence \(x \in (0,1]\).

Then \(|f(x)| = f(x) = |M|+2\), and since \(|M| \ge M\) we have \(|M|+2 > M\). So \(|f(x)| > M\) holds at this \(x\).`}},{text:{ko:String.raw`\(M\)은 임의였으므로, 모든 \(M\)에 대해 \(|f(x)| > M\)인 \(x \in (0,1]\)가 존재합니다 — 곧 \(\forall M\ \exists x \in (0,1]\ (|f(x)| > M)\)이 성립하므로 \(f\)는 \((0,1]\)에서 유계가 아닙니다. 핵심은 양화사 순서입니다: \(M\)이 먼저 주어지면(∀M) 그에 맞는 \(x\)를 나중에(∃x) 골라도 되기 때문에, \(M\)에 의존하는 선택 \(x = 1/(|M|+2)\)가 허용됩니다.`,en:String.raw`Since \(M\) was arbitrary, for every \(M\) there is an \(x \in (0,1]\) with \(|f(x)| > M\) — i.e. \(\forall M\ \exists x \in (0,1]\ (|f(x)| > M)\) holds, so \(f\) is unbounded on \((0,1]\). The key is the quantifier order: because \(M\) is given first (\(\forall M\)), the witness \(x\) may be chosen afterwards (\(\exists x\)), which is why the \(M\)-dependent choice \(x = 1/(|M|+2)\) is legitimate.`}}]}],"direct-proof":[{id:`direct-proof-rational-sum`,statement:{ko:String.raw`두 유리수의 합이 유리수임을 직접증명으로 증명하고, 이 씬의 기본 수 \(r_1 = \frac34\), \(r_2 = -\frac56\)에 각 단계를 그대로 대입하여 합이 \(-\frac{1}{12}\)임을 단계별로 검증하세요.`,en:String.raw`Prove by a direct proof that the sum of two rational numbers is rational, and verify each step on this scene's default numbers \(r_1 = \frac34\), \(r_2 = -\frac56\), confirming the sum is \(-\frac{1}{12}\) step by step.`},display:[String.raw`r_1 = \frac{p_1}{q_1},\ r_2 = \frac{p_2}{q_2} \;\Rightarrow\; r_1 + r_2 = \frac{p_1 q_2 + p_2 q_1}{q_1 q_2}`],preset:{p1:3,q1:4,p2:-5,q2:6},presetCaption:{ko:String.raw`\(p_1 = 3\), \(q_1 = 4\), \(p_2 = -5\), \(q_2 = 6\): 분자 \(18 - 20 = -2\), 분모 \(24\), \(\gcd(2, 24) = 2\), 약분하면 \(-\frac{1}{12} \approx -0.083333\).`,en:String.raw`\(p_1 = 3\), \(q_1 = 4\), \(p_2 = -5\), \(q_2 = 6\): numerator \(18 - 20 = -2\), denominator \(24\), \(\gcd(2, 24) = 2\), reduced \(-\frac{1}{12} \approx -0.083333\).`},proof:[{text:{ko:String.raw`가정을 받아들입니다: \(r_1, r_2\)가 유리수이므로 정수 \(p_1, q_1, p_2, q_2\) (\(q_1 \ne 0\), \(q_2 \ne 0\))가 존재하여 \(r_1 = \frac{p_1}{q_1}\), \(r_2 = \frac{p_2}{q_2}\)입니다. 직접증명은 이 가정을 곧바로 계산으로 연결합니다.`,en:String.raw`Take the hypothesis: since \(r_1, r_2\) are rational, there exist integers \(p_1, q_1, p_2, q_2\) with \(q_1 \ne 0\), \(q_2 \ne 0\) such that \(r_1 = \frac{p_1}{q_1}\) and \(r_2 = \frac{p_2}{q_2}\). A direct proof feeds this assumption straight into a computation.`}},{text:{ko:String.raw`통분합니다: \(r_1 + r_2 = \frac{p_1 q_2}{q_1 q_2} + \frac{p_2 q_1}{q_1 q_2} = \frac{p_1 q_2 + p_2 q_1}{q_1 q_2}\).

분자 \(p_1 q_2 + p_2 q_1\)은 정수들의 곱과 합의 합이므로 정수이고, 분모 \(q_1 q_2\)는 0이 아닌 정수들의 곱이므로 0이 아닌 정수입니다.

따라서 \(r_1 + r_2\)는 정수의 비 — 즉 유리수입니다.

이것이 결론에 대한 직접증명입니다.

씬의 수로 확인하면: \(\frac{3 \cdot 6 + (-5) \cdot 4}{4 \cdot 6} = \frac{18 - 20}{24} = \frac{-2}{24} = -\frac{1}{12} \approx -0.083333\).`,en:String.raw`Use a common denominator: \(r_1 + r_2 = \frac{p_1 q_2}{q_1 q_2} + \frac{p_2 q_1}{q_1 q_2} = \frac{p_1 q_2 + p_2 q_1}{q_1 q_2}\).

The numerator \(p_1 q_2 + p_2 q_1\) is a sum of products of integers, hence an integer; the denominator \(q_1 q_2\) is a product of nonzero integers, hence a nonzero integer.

So \(r_1 + r_2\) is a ratio of integers — rational.

That completes the direct proof.

On the scene's numbers: \(\frac{3 \cdot 6 + (-5) \cdot 4}{4 \cdot 6} = \frac{18 - 20}{24} = \frac{-2}{24} = -\frac{1}{12} \approx -0.083333\).`},display:[String.raw`\frac{3}{4} + \frac{-5}{6} = \frac{-2}{24} = -\frac{1}{12}`]}]},{id:`direct-proof-rational-product-square`,statement:{ko:String.raw`두 유리수의 곱이 유리수임을 직접증명으로 증명하세요.

이어서 유리수의 제곱이 유리수임을 증명하고, 씬의 수 \(r_1 = \frac34\), \(r_2 = -\frac56\)에 대해 곱이 \(-\frac58\)임을 검증하세요.`,en:String.raw`Prove by a direct proof that the product of two rational numbers is rational.

Then prove that the square of a rational number is rational, and verify on the scene's numbers \(r_1 = \frac34\), \(r_2 = -\frac56\) that the product is \(-\frac58\).`},display:[String.raw`r_1 r_2 = \frac{p_1 p_2}{q_1 q_2}, \qquad r_1^2 = \frac{p_1^2}{q_1^2}`],preset:{p1:3,q1:4,p2:-5,q2:6},presetCaption:{ko:String.raw`\(p_1 = 3\), \(q_1 = 4\), \(p_2 = -5\), \(q_2 = 6\): 곱 \(-\frac{15}{24} = -\frac58 = -0.625\).`,en:String.raw`\(p_1 = 3\), \(q_1 = 4\), \(p_2 = -5\), \(q_2 = 6\): product \(-\frac{15}{24} = -\frac58 = -0.625\).`},proof:[{text:{ko:String.raw`가정: \(r_1 = \frac{p_1}{q_1}\), \(r_2 = \frac{p_2}{q_2}\) (정수, \(q_1, q_2 \ne 0\)).

곱셈하면 \(r_1 r_2 = \frac{p_1 p_2}{q_1 q_2}\).

분자 \(p_1 p_2\)는 정수이고 분모 \(q_1 q_2\)는 0이 아닌 정수이므로 곱은 유리수입니다.

씬의 수: \(\frac{3 \cdot (-5)}{4 \cdot 6} = \frac{-15}{24} = -\frac58 = -0.625\) (분자·분모를 3으로 약분).`,en:String.raw`Assume \(r_1 = \frac{p_1}{q_1}\), \(r_2 = \frac{p_2}{q_2}\) (integers, \(q_1, q_2 \ne 0\)).

Multiplying gives \(r_1 r_2 = \frac{p_1 p_2}{q_1 q_2}\).

The numerator \(p_1 p_2\) is an integer and the denominator \(q_1 q_2\) is a nonzero integer, so the product is rational.

On the scene's numbers: \(\frac{3 \cdot (-5)}{4 \cdot 6} = \frac{-15}{24} = -\frac58 = -0.625\) (dividing numerator and denominator by 3).`}},{text:{ko:String.raw`제곱은 곱의 특수한 경우: \(r = \frac{p}{q}\) (\(q \ne 0\))이면 \(r^2 = \frac{p^2}{q^2}\)이고, \(p^2\)는 정수, \(q^2\)는 양의 정수(따라서 \(\ne 0\))이므로 \(r^2\)는 유리수입니다.

예: \(r_1^2 = \left(\frac34\right)^2 = \frac{9}{16}\).

두 명제 모두 가정에서 결론으로 곧장 가는 한 번의 계산으로 증명됩니다 — 직접증명의 전형적인 형태입니다.`,en:String.raw`The square is a special case of the product: if \(r = \frac{p}{q}\) with \(q \ne 0\), then \(r^2 = \frac{p^2}{q^2}\), and \(p^2\) is an integer while \(q^2\) is a positive integer (hence \(\ne 0\)), so \(r^2\) is rational.

Example: \(r_1^2 = \left(\frac34\right)^2 = \frac{9}{16}\).

Both claims are proved by a single computation running straight from hypothesis to conclusion — the typical shape of a direct proof.`}}]},{id:`direct-proof-odd-square`,statement:{ko:String.raw`정수 \(n\)이 홀수이면 \(n^2\)도 홀수임을 직접증명으로 증명하세요: \(n = 2k + 1\)로 쓰고 전개하여 \((2k+1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1\)을 보이세요.`,en:String.raw`Prove by a direct proof that if an integer \(n\) is odd then \(n^2\) is odd: write \(n = 2k + 1\) and expand to show \((2k+1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1\).`},display:[String.raw`n = 2k + 1 \;\Rightarrow\; n^2 = (2k+1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1`],preset:{p1:1,q1:2,p2:1,q2:2},presetCaption:{ko:String.raw`이 문제는 홀수 \(n\)에 대한 대수 증명에 대한 것입니다 — 프리셋은 씬의 유효한 기본 조합 \(r_1 = r_2 = \frac12\).`,en:String.raw`This problem is about an algebraic proof for odd \(n\) — the preset is a valid scene combination, \(r_1 = r_2 = \frac12\).`},proof:[{text:{ko:String.raw`가정: \(n\)은 홀수입니다.

홀수의 정의에 의해, 어떤 정수 \(k\)가 존재하여 \(n = 2k + 1\)입니다.

이제 계산합니다: \(n^2 = (2k+1)^2 = 4k^2 + 4k + 1\).`,en:String.raw`Assume \(n\) is odd.

By the definition of odd, there is an integer \(k\) with \(n = 2k + 1\).

Now compute: \(n^2 = (2k+1)^2 = 4k^2 + 4k + 1\).`}},{text:{ko:String.raw`짝수 부분을 묶습니다: \(4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1\).

여기서 \(2k^2 + 2k\)는 정수이므로, \(n^2\)는 "2 곱하기 정수, 더하기 1" — 즉 홀수입니다.

가정에서 결론까지 한 번의 전개로 도달했으므로 이것은 직접증명입니다.

(주목: 이 보조정리는 다음 씬인 대우법 씬이 정확히 소비하는 것입니다 — "\(n^2\)이 짝수 \(\Rightarrow\) \(n\)이 짝수"의 증명은 대우인 "\(n\)이 홀수 \(\Rightarrow\) \(n^2\)이 홀수"로 귀결되며, 그 대우의 증명이 바로 이 직접증명입니다.)`,en:String.raw`Group the even part: \(4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1\).

Since \(2k^2 + 2k\) is an integer, \(n^2\) is "twice an integer, plus one" — odd.

One expansion carried us from hypothesis to conclusion, so this is a direct proof.

(Note: this lemma is exactly what the next scene, contrapositive, consumes — the proof of "\(n^2\) even \(\Rightarrow\) \(n\) even" reduces to its contrapositive "\(n\) odd \(\Rightarrow\) \(n^2\) odd", whose proof is precisely this direct proof.)`}}]}],contrapositive:[{id:`contrapositive-square-even`,statement:{ko:String.raw`정수 \(n\)에 대해 "\(n^2\)이 짝수이면 \(n\)도 짝수이다"를 대우법으로 완전히 증명하세요.

대우인 "\(n\)이 홀수이면 \(n^2\)이 홀수이다"를 홀수 제곱 전개로 증명하는 것으로 귀결시키세요.`,en:String.raw`Prove completely, by contrapositive, that for an integer \(n\), "if \(n^2\) is even then \(n\) is even".

Reduce the claim to its contrapositive, "if \(n\) is odd then \(n^2\) is odd", and prove that by the odd-square expansion.`},display:[String.raw`n^2 \text{ even} \Rightarrow n \text{ even} \quad\Longleftrightarrow\quad n \text{ odd} \Rightarrow n^2 \text{ odd}`],preset:{n:7,view:`contrapositive`},presetCaption:{ko:String.raw`\(n = 7\) (홀수): \(n = 2 \cdot 3 + 1\), \(n^2 = 49 = 2 \cdot 24 + 1\) — 홀수. 대우의 계산이 직접 보인다.`,en:String.raw`\(n = 7\) (odd): \(n = 2 \cdot 3 + 1\), \(n^2 = 49 = 2 \cdot 24 + 1\) — odd. The contrapositive computation is on display.`},proof:[{text:{ko:String.raw`증명하려는 명제는 \(P \Rightarrow Q\) (\(P\): "\(n^2\)이 짝수", \(Q\): "\(n\)이 짝수")입니다. 함의와 그 대우는 논리적으로 동치이므로(둘 다 \(P\) 참·\(Q\) 거짓일 때만 거짓), 대우 \(\lnot Q \Rightarrow \lnot P\), 즉 "\(n\)이 홀수이면 \(n^2\)이 홀수이다"를 증명합니다.`,en:String.raw`The claim is \(P \Rightarrow Q\) with \(P\): "\(n^2\) is even" and \(Q\): "\(n\) is even". An implication is logically equivalent to its contrapositive (both fail exactly when \(P\) is true and \(Q\) false), so we prove \(\lnot Q \Rightarrow \lnot P\): "if \(n\) is odd then \(n^2\) is odd".`}},{text:{ko:String.raw`대우는 직접증명으로 증명됩니다: \(n\)이 홀수이면 어떤 정수 \(k\)에 대해 \(n = 2k + 1\)이고, \(n^2 = (2k+1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1\).

\(2k^2 + 2k\)는 정수이므로 \(n^2\)은 홀수입니다.

씬에서 확인: \(n = 7\)이면 \(k = 3\), \(n^2 = 49 = 2 \cdot (2 \cdot 9 + 6) + 1 = 2 \cdot 24 + 1\).

이로써 대우가 증명되었고, 동치성에 의해 원래 명제 "\(n^2\)이 짝수이면 \(n\)이 짝수"도 증명됩니다.

(직접 시도가 막히는 이유: \(n^2 = 2m\)이라는 가정은 \(n\)에 대한 계산 손잡이를 주지 않습니다 — 대우는 가정을 \(n\) 자체의 형태 \(2k+1\)로 바꿔 줍니다.)`,en:String.raw`The contrapositive is proved directly: if \(n\) is odd, then \(n = 2k + 1\) for some integer \(k\), and \(n^2 = (2k+1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1\).

Since \(2k^2 + 2k\) is an integer, \(n^2\) is odd.

Check in the scene: \(n = 7\) gives \(k = 3\) and \(n^2 = 49 = 2 \cdot (2 \cdot 9 + 6) + 1 = 2 \cdot 24 + 1\).

The contrapositive is proved, so by equivalence the original claim "if \(n^2\) is even then \(n\) is even" is proved.

(Why the direct attempt stalls: the assumption \(n^2 = 2m\) gives no handle for computing with \(n\) — the contrapositive swaps it for the workable form \(n = 2k + 1\).)`},display:[String.raw`(2k+1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1`]}]},{id:`contrapositive-linear-odd`,statement:{ko:String.raw`정수 \(n\)에 대해 "\(3n + 2\)가 홀수이면 \(n\)도 홀수이다"를 대우법으로 증명하세요.

먼저 직접 경로가 왜 어색한지 — \(3n + 2\)가 홀수이면 \(3n\)이 홀수라는 것만 얻어지고, \(n\) 자체에는 손이 닿지 않음을 — 설명하세요.`,en:String.raw`Prove by contrapositive that for an integer \(n\), "if \(3n + 2\) is odd then \(n\) is odd".

First explain why the direct route is awkward: "\(3n + 2\) odd" only yields "\(3n\) odd", with no direct grip on \(n\) itself.`},display:[String.raw`3n + 2 \text{ odd} \Rightarrow n \text{ odd} \quad\Longleftrightarrow\quad n \text{ even} \Rightarrow 3n + 2 \text{ even}`],preset:{n:8,view:`contrapositive`},presetCaption:{ko:String.raw`\(n = 8\) (짝수): \(n = 2 \cdot 4\), \(3n + 2 = 26 = 2(3 \cdot 4 + 1) = 2 \cdot 13\) — 짝수. 대우의 방향이 보인다.`,en:String.raw`\(n = 8\) (even): \(n = 2 \cdot 4\), \(3n + 2 = 26 = 2(3 \cdot 4 + 1) = 2 \cdot 13\) — even. The contrapositive direction is on display.`},proof:[{text:{ko:String.raw`직접 경로가 어색한 이유: \(3n + 2\)가 홀수라고 가정하면 \(3n = (3n + 2) - 2\)이므로 \(3n\)은 홀수입니다.

하지만 "3 곱하기 \(n\)이 홀수"에서 "\(n\)이 홀수"로 넘어가려면, \(n\)이 짝수일 수 없다는 별도의 논증이 필요합니다 — \(n\) 자체를 계산할 형태가 없습니다.

그래서 대우로 돕니다: "\(n\)이 짝수이면 \(3n + 2\)도 짝수이다".`,en:String.raw`Why the direct route is awkward: assuming \(3n + 2\) is odd gives \(3n = (3n + 2) - 2\), so \(3n\) is odd.

But passing from "3 times \(n\) is odd" to "\(n\) is odd" needs a separate argument that \(n\) cannot be even — there is no computable form of \(n\) to work with.

So we turn to the contrapositive: "if \(n\) is even then \(3n + 2\) is even".`}},{text:{ko:String.raw`대우를 직접증명합니다: \(n\)이 짝수이면 \(n = 2k\) (정수 \(k\))이고, \(3n + 2 = 3(2k) + 2 = 6k + 2 = 2(3k + 1)\).

\(3k + 1\)은 정수이므로 \(3n + 2\)는 짝수입니다.

대우가 증명되었으므로, 동치성에 의해 원래 명제 "\(3n + 2\)가 홀수이면 \(n\)이 홀수"가 증명됩니다.

씬에서 확인: \(n = 8 = 2 \cdot 4\)이면 \(3n + 2 = 26 = 2(3 \cdot 4 + 1) = 2 \cdot 13\), 짝수입니다.`,en:String.raw`Prove the contrapositive directly: if \(n\) is even, write \(n = 2k\) with \(k\) an integer; then \(3n + 2 = 3(2k) + 2 = 6k + 2 = 2(3k + 1)\).

Since \(3k + 1\) is an integer, \(3n + 2\) is even.

The contrapositive is proved, so by equivalence the original claim "if \(3n + 2\) is odd then \(n\) is odd" is proved.

Check in the scene: \(n = 8 = 2 \cdot 4\) gives \(3n + 2 = 26 = 2(3 \cdot 4 + 1) = 2 \cdot 13\), even.`}}]},{id:`contrapositive-divisible-by-three`,statement:{ko:String.raw`정수 \(n\)에 대해 "\(n^2\)이 3으로 나누어떨어지면 \(n\)도 3으로 나누어떨어진다"를 증명하세요.

대우를 취한 뒤, 3으로 나누어떨어지지 않는 경우를 \(n = 3k + 1\)과 \(n = 3k + 2\)로 나누어 각각 \(n^2\)도 3으로 나누어떨어지지 않음을 보이세요.`,en:String.raw`Prove that for an integer \(n\), "if \(n^2\) is divisible by 3 then \(n\) is divisible by 3".

Take the contrapositive, then split the case "3 does not divide \(n\)" into \(n = 3k + 1\) and \(n = 3k + 2\), showing in each case that 3 does not divide \(n^2\).`},display:[String.raw`n = 3k+1 \Rightarrow n^2 = 3(3k^2 + 2k) + 1, \qquad n = 3k+2 \Rightarrow n^2 = 3(3k^2 + 4k + 1) + 1`],preset:{n:9,view:`statement`},presetCaption:{ko:String.raw`\(n = 9\): \(n^2 = 81 = 3 \cdot 27\) — 3으로 나누어떨어지고, \(n = 9 = 3 \cdot 3\)도 그렇다. 명제 형태 그대로의 확인.`,en:String.raw`\(n = 9\): \(n^2 = 81 = 3 \cdot 27\) — divisible by 3, and \(n = 9 = 3 \cdot 3\) is too. A check in the statement's own form.`},proof:[{text:{ko:String.raw`대우를 증명합니다: "3이 \(n\)을 나누지 않으면 3은 \(n^2\)도 나누지 않는다".

나눗셈 정리에 의해, 3이 \(n\)을 나누지 않으면 나머지가 1 또는 2이므로 어떤 정수 \(k\)에 대해 \(n = 3k + 1\) 또는 \(n = 3k + 2\)입니다.

두 경우를 각각 계산합니다.`,en:String.raw`We prove the contrapositive: "if 3 does not divide \(n\) then 3 does not divide \(n^2\)".

By the division algorithm, if 3 does not divide \(n\) the remainder is 1 or 2, so \(n = 3k + 1\) or \(n = 3k + 2\) for some integer \(k\).

Compute each case.`}},{text:{ko:String.raw`경우 1: \(n = 3k + 1\)이면 \(n^2 = 9k^2 + 6k + 1 = 3(3k^2 + 2k) + 1\) — 3으로 나눈 나머지가 1이므로 3은 \(n^2\)를 나누지 않습니다.

경우 2: \(n = 3k + 2\)이면 \(n^2 = 9k^2 + 12k + 4 = 3(3k^2 + 4k + 1) + 1\) — 역시 나머지가 1이므로 3은 \(n^2\)를 나누지 않습니다.

두 경우 모두 대우의 결론을 주므로 대우가 증명되고, 동치성에 의해 원래 명제가 증명됩니다.

씬에서 확인: \(n = 9 = 3 \cdot 3\)은 3으로 나누어떨어지고 \(n^2 = 81 = 3 \cdot 27\)도 그렇습니다.`,en:String.raw`Case 1: if \(n = 3k + 1\) then \(n^2 = 9k^2 + 6k + 1 = 3(3k^2 + 2k) + 1\) — remainder 1 on division by 3, so 3 does not divide \(n^2\).

Case 2: if \(n = 3k + 2\) then \(n^2 = 9k^2 + 12k + 4 = 3(3k^2 + 4k + 1) + 1\) — again remainder 1, so 3 does not divide \(n^2\).

Both cases give the contrapositive's conclusion, so the contrapositive is proved, and by equivalence so is the original claim.

Check in the scene: \(n = 9 = 3 \cdot 3\) is divisible by 3 and \(n^2 = 81 = 3 \cdot 27\) is too.`}}]}],contradiction:[{id:`contradiction-euclid`,statement:{ko:String.raw`유클리드의 정리를 완전히 증명하세요: 소수는 무한히 많다.

귀류법으로 — 소수가 \(p_1, \ldots, p_k\)뿐이라 가정하고, \(N = p_1 \cdots p_k + 1\)이 (i) \(N \ge 2\)이므로 소인수를 가지고, (ii) 그 소인수가 어떤 \(p_i\)와도 같을 수 없음을 보여 모순을 이끌어내세요.

특히 "\(N\) 자체는 소수일 필요가 없다"는 미묘한 점(\(k = 6\)에서는 \(N = 30031 = 59 \times 509\))을 다루세요.`,en:String.raw`Prove Euclid's theorem completely: there are infinitely many primes.

Use proof by contradiction — assume \(p_1, \ldots, p_k\) are all the primes, and show that \(N = p_1 \cdots p_k + 1\) (i) has a prime factor, since \(N \ge 2\), and (ii) that this factor cannot equal any \(p_i\), deriving a contradiction.

In particular, address the subtlety that \(N\) itself need not be prime (for \(k = 6\), \(N = 30031 = 59 \times 509\)).`},display:[String.raw`N = p_1 p_2 \cdots p_k + 1, \qquad N \equiv 1 \pmod{p_i} \ \text{for all } i`,String.raw`k = 6:\quad N = 30031 = 59 \times 509`],preset:{k:6},presetCaption:{ko:String.raw`\(k = 6\): \(P = 30030\), \(N = 30031 = 59 \times 509\) — \(N\)은 합성수지만 소인수 \(59\)와 \(509\)는 모두 목록 \(\{2, 3, 5, 7, 11, 13\}\) 밖에 있는 새 소수.`,en:String.raw`\(k = 6\): \(P = 30030\), \(N = 30031 = 59 \times 509\) — \(N\) is composite, but its prime factors \(59\) and \(509\) are new primes off the list \(\{2, 3, 5, 7, 11, 13\}\).`},proof:[{text:{ko:String.raw`귀류법으로 증명합니다.

소수가 유한하다 — 즉 소수의 전체 목록이 \(p_1, \ldots, p_k\)뿐이라 가정하세요 (\(k \ge 1\)).

\(P = p_1 \cdots p_k\)라 두고 \(N = P + 1\)로 두면 \(N \ge 2 \cdot 1 + 1 = 3 \ge 2\)입니다.`,en:String.raw`We argue by contradiction.

Suppose there are only finitely many primes — a complete list \(p_1, \ldots, p_k\) (\(k \ge 1\)).

Put \(P = p_1 \cdots p_k\) and \(N = P + 1\); then \(N \ge 3 \ge 2\).`}},{text:{ko:String.raw`보조 결과: 2 이상의 모든 정수는 소인수를 가집니다.

증명 (강한 귀납법): \(n = 2\)이면 \(n\) 자체가 소수입니다.

\(n > 2\)이면 \(n\)이 소수이거나 \(n = ab\), \(1 < a, b < n\)입니다; 합성수인 경우 귀납 가정에 의해 \(a\)가 소인수 \(q\)를 가지고, \(q \mid a \mid n\)이므로 \(q\)가 \(n\)의 소인수입니다.

이를 \(N\)에 적용하면 \(N\)의 소인수 \(q\)가 존재합니다.`,en:String.raw`Lemma: every integer \(\ge 2\) has a prime factor.

Proof (strong induction): for \(n = 2\), \(n\) itself is prime.

For \(n > 2\), either \(n\) is prime or \(n = ab\) with \(1 < a, b < n\); in the composite case the induction hypothesis gives \(a\) a prime factor \(q\), and \(q \mid a \mid n\), so \(q\) is a prime factor of \(n\).

Applying this to \(N\) yields a prime factor \(q\) of \(N\).`}},{text:{ko:String.raw`\(q\)는 어떤 \(p_i\)와도 다릅니다.

실제로 각 \(i\)에 대해 \(p_i \mid P\)이므로 \(N = P + 1 \equiv 1 \pmod{p_i}\), 즉 \(p_i\)는 \(N\)을 나누지 못합니다.

그런데 \(q \mid N\)이므로 \(q \ne p_i\) — 모든 \(i\)에 대해 성립합니다.

즉 \(q\)는 목록에 없는 소수이고, "목록이 완전하다"는 가정과 모순입니다.

따라서 소수는 무한히 많습니다. ∎`,en:String.raw`\(q\) differs from every \(p_i\).

Indeed, \(p_i \mid P\) for each \(i\), so \(N = P + 1 \equiv 1 \pmod{p_i}\): no \(p_i\) divides \(N\).

But \(q \mid N\), hence \(q \ne p_i\) for every \(i\).

So \(q\) is a prime missing from the supposedly complete list — a contradiction.

Hence there are infinitely many primes. ∎`}},{text:{ko:String.raw`미묘한 점: \(N\) 자체가 소수일 필요는 없습니다.

\(k = 6\)이면 \(P = 2 \cdot 3 \cdot 5 \cdot 7 \cdot 11 \cdot 13 = 30030\)이고 \(N = 30031 = 59 \times 509\)는 합성수입니다.

그래도 증명은 온전합니다 — 핵심은 "\(N\)의 소인수는 모두 새 소수"이지 "\(N\)이 새 소수"가 아니기 때문입니다.

한편 이 증명은 새 소수가 \(N\)의 소인수 중 하나라는 것까지는 말해 주지만, 어떤 것인지는 소인수분해를 해야 알 수 있습니다.`,en:String.raw`The subtlety: \(N\) itself need not be prime.

For \(k = 6\), \(P = 2 \cdot 3 \cdot 5 \cdot 7 \cdot 11 \cdot 13 = 30030\) and \(N = 30031 = 59 \times 509\) is composite.

The proof is unaffected — its claim is "\emph{every} prime factor of \(N\) is new", not "\(N\) is a new prime".

The proof does pin down that a new prime is among the factors of \(N\), but identifying it requires factoring \(N\).`}}]},{id:`contradiction-log2-5`,statement:{ko:String.raw`귀류법으로 \(\log_2 5\)가 무리수임을 증명하세요.

힌트: \(\log_2 5 = \frac{p}{q}\) (\(p, q\)는 양의 정수)라 가정하면 \(2^p = 5^q\)를 얻습니다 — 왼쪽은 짝수이고 오른쪽은 홀수입니다.`,en:String.raw`Prove by contradiction that \(\log_2 5\) is irrational.

Hint: if \(\log_2 5 = \frac{p}{q}\) with \(p, q\) positive integers, then \(2^p = 5^q\) — the left side is even and the right side is odd.`},display:[String.raw`\log_2 5 = \frac{p}{q} \;\Rightarrow\; 5 = 2^{p/q} \;\Rightarrow\; 5^q = 2^p`,String.raw`2^p \text{ is even } (p \ge 1), \qquad 5^q \text{ is odd}`],preset:{k:4},presetCaption:{ko:String.raw`씬 프리셋은 기본값 \(k = 4\) (\(P = 210\), \(N = 211\))입니다 — 이 문제는 씬의 수치가 아니라 귀류법의 구조 자체에 대한 문제입니다.`,en:String.raw`The scene preset is the default \(k = 4\) (\(P = 210\), \(N = 211\)) — this problem is about the shape of proof by contradiction itself, not the scene's numbers.`},proof:[{text:{ko:String.raw`귀류법으로 증명합니다.

\(\log_2 5\)가 유리수라 가정하세요.

\(\log_2 5 > \log_2 4 = 2 > 0\)이므로 \(\log_2 5 = \frac{p}{q}\) (\(p, q\)는 양의 정수)로 쓸 수 있습니다 — 특히 \(p \ge 1\)입니다.`,en:String.raw`We argue by contradiction.

Suppose \(\log_2 5\) is rational.

Since \(\log_2 5 > \log_2 4 = 2 > 0\), we can write \(\log_2 5 = \frac{p}{q}\) with \(p, q\) positive integers — in particular \(p \ge 1\).`}},{text:{ko:String.raw`로그의 정의에서 \(5 = 2^{p/q}\)이고, 양변을 \(q\)제곱하면 \(5^q = 2^p\)입니다.

그런데 \(p \ge 1\)이므로 왼쪽 \(2^p = 2 \cdot 2^{p-1}\)은 짝수이고, 오른쪽 \(5^q\)는 홀수들의 곱이라 홀수입니다.

짝수와 홀수가 같을 수는 없으므로 모순입니다.

따라서 \(\log_2 5\)는 무리수입니다. ∎`,en:String.raw`By the definition of the logarithm, \(5 = 2^{p/q}\), and raising both sides to the power \(q\) gives \(5^q = 2^p\).

But \(p \ge 1\) makes \(2^p = 2 \cdot 2^{p-1}\) even, while \(5^q\), a product of odd numbers, is odd.

An even number cannot equal an odd number — a contradiction.

Hence \(\log_2 5\) is irrational. ∎`}},{text:{ko:String.raw`참고: \(\frac{p}{q}\)를 기약분수로 둘 필요는 없습니다 — 짝·홀수 논증만으로 충분합니다. 더 깊은 이유: 산술의 기본정리(소인수분해의 유일성)에 의해 \(2^p\)의 소인수는 2뿐이고 \(5^q\)의 소인수는 5뿐이라, 양의 지수를 가진 두 거듭제곱은 결코 같아질 수 없습니다.`,en:String.raw`Note: there is no need to put \(\frac{p}{q}\) in lowest terms — the parity argument alone suffices. The deeper reason is the fundamental theorem of arithmetic (unique prime factorization): \(2^p\) has only the prime factor 2 and \(5^q\) only the prime factor 5, so the two powers with positive exponents can never agree.`}}]},{id:`contradiction-rational-plus-irrational`,statement:{ko:String.raw`귀류법으로 증명하세요: \(r\)이 유리수이고 \(x\)가 무리수이면 \(r + x\)도 무리수입니다.`,en:String.raw`Prove by contradiction: if \(r\) is rational and \(x\) is irrational, then \(r + x\) is irrational.`},display:[String.raw`r + x = s \in \mathbb{Q} \;\Rightarrow\; x = s - r \in \mathbb{Q}`],preset:{k:4},presetCaption:{ko:String.raw`씬 프리셋은 기본값 \(k = 4\) (\(P = 210\), \(N = 211\))입니다 — 이 문제는 씬의 수치가 아니라 귀류법의 구조 자체에 대한 문제입니다.`,en:String.raw`The scene preset is the default \(k = 4\) (\(P = 210\), \(N = 211\)) — this problem is about the shape of proof by contradiction itself, not the scene's numbers.`},proof:[{text:{ko:String.raw`귀류법으로 증명합니다.

\(r + x\)가 유리수라 가정하고 \(s = r + x \in \mathbb{Q}\)라 두세요.

그러면 \(x = s - r\)입니다.`,en:String.raw`We argue by contradiction.

Suppose \(r + x\) is rational, and put \(s = r + x \in \mathbb{Q}\).

Then \(x = s - r\).`}},{text:{ko:String.raw`유리수들의 차는 유리수입니다: \(r = \frac{a}{b}\), \(s = \frac{c}{d}\) (\(a, c \in \mathbb{Z}\), \(b, d \in \mathbb{Z}\), \(b, d \ne 0\))이면 \(x = s - r = \frac{cb - ad}{bd}\)이고, \(cb - ad \in \mathbb{Z}\), \(bd \ne 0\)이므로 \(x \in \mathbb{Q}\)입니다.`,en:String.raw`A difference of rationals is rational: if \(r = \frac{a}{b}\) and \(s = \frac{c}{d}\) (with \(a, c \in \mathbb{Z}\), \(b, d \in \mathbb{Z}\), \(b, d \ne 0\)), then \(x = s - r = \frac{cb - ad}{bd}\), and \(cb - ad \in \mathbb{Z}\) with \(bd \ne 0\), so \(x \in \mathbb{Q}\).`}},{text:{ko:String.raw`이는 \(x\)가 무리수라는 가정과 모순입니다.

따라서 \(r + x\)는 유리수일 수 없고, 즉 무리수입니다.

∎ (같은 논증으로 \(r \ne 0\)인 유리수 \(r\)과 무리수 \(x\)에 대해 \(rx\)도 무리수임을 보일 수 있습니다: \(rx = s\)이면 \(x = s/r\)은 유리수들의 몫이기 때문입니다.)`,en:String.raw`This contradicts the assumption that \(x\) is irrational.

Hence \(r + x\) cannot be rational — it is irrational.

∎ (The same argument shows \(rx\) is irrational for rational \(r \ne 0\) and irrational \(x\): if \(rx = s\) then \(x = s/r\) is a quotient of rationals.)`}}]}],"cases-existence":[{id:`cases-abs-product`,statement:{ko:String.raw`경우 나누기로 완전히 증명하세요: 모든 실수 \(x, y\)에 대해 \(|xy| = |x|\,|y|\).

네 가지 부호 경우(0인 경우는 경우 1에 포함)를 빠짐없이 다루고, 각 경우에서 \(|t|\)의 정의(\(t \ge 0\)이면 \(t\), \(t < 0\)이면 \(-t\))를 직접 적용하세요.`,en:String.raw`Prove completely by cases: \(|xy| = |x|\,|y|\) for all real \(x, y\).

Cover all four sign cases (the zero case folds into case 1) and apply the definition of \(|t|\) (\(t\) if \(t \ge 0\), \(-t\) if \(t < 0\)) directly in each case.`},display:[String.raw`|xy| = |x|\,|y| \qquad \forall x, y \in \mathbb{R}`,String.raw`x < 0 < y \;\Rightarrow\; |xy| = -(xy) = (-x) \cdot y = |x|\,|y|`],preset:{part:`cases`,x:-2,y:3},presetCaption:{ko:String.raw`\((x, y) = (-2, 3)\): 경우 3 (\(x < 0 < y\)) — \(|xy| = |-6| = 6 = 2 \cdot 3 = |x|\,|y|\).`,en:String.raw`\((x, y) = (-2, 3)\): case 3 (\(x < 0 < y\)) — \(|xy| = |-6| = 6 = 2 \cdot 3 = |x|\,|y|\).`},proof:[{text:{ko:String.raw`경우 1: \(x \ge 0\), \(y \ge 0\).

그러면 \(xy \ge 0\)이므로 \(|xy| = xy\)입니다.

또한 \(|x| = x\), \(|y| = y\)이므로 \(|x|\,|y| = xy\) — 양변이 같습니다.

(\(x = 0\) 또는 \(y = 0\)인 경우도 여기에 포함됩니다: \(xy = 0\)이라 \(|xy| = 0 = |x|\,|y|\)입니다.)`,en:String.raw`Case 1: \(x \ge 0\), \(y \ge 0\).

Then \(xy \ge 0\), so \(|xy| = xy\).

Also \(|x| = x\) and \(|y| = y\), so \(|x|\,|y| = xy\) — both sides agree.

(The case \(x = 0\) or \(y = 0\) folds in here: \(xy = 0\) gives \(|xy| = 0 = |x|\,|y|\).)`}},{text:{ko:String.raw`경우 2: \(x > 0\), \(y < 0\).

그러면 \(xy < 0\)이므로 \(|xy| = -(xy)\)입니다.

\(-xy = x \cdot (-y)\)이고 \(|x| = x\), \(|y| = -y\)이므로 \(|x|\,|y| = x \cdot (-y)\) — 양변이 같습니다.`,en:String.raw`Case 2: \(x > 0\), \(y < 0\).

Then \(xy < 0\), so \(|xy| = -(xy)\).

Since \(-xy = x \cdot (-y)\) and \(|x| = x\), \(|y| = -y\), we get \(|x|\,|y| = x \cdot (-y)\) — both sides agree.`}},{text:{ko:String.raw`경우 3: \(x < 0\), \(y > 0\).

그러면 \(xy < 0\)이므로 \(|xy| = -(xy) = (-x) \cdot y\)입니다.

\(|x| = -x\), \(|y| = y\)이므로 \(|x|\,|y| = (-x) \cdot y\) — 양변이 같습니다.`,en:String.raw`Case 3: \(x < 0\), \(y > 0\).

Then \(xy < 0\), so \(|xy| = -(xy) = (-x) \cdot y\).

Since \(|x| = -x\) and \(|y| = y\), we get \(|x|\,|y| = (-x) \cdot y\) — both sides agree.`}},{text:{ko:String.raw`경우 4: \(x < 0\), \(y < 0\).

그러면 \(xy > 0\)이므로 \(|xy| = xy\)입니다.

\(|x| = -x\), \(|y| = -y\)이므로 \(|x|\,|y| = (-x) \cdot (-y) = xy\) — 양변이 같습니다.

네 경우가 모든 \((x, y) \in \mathbb{R}^2\)를 빠짐없이 덮으므로, \(|xy| = |x|\,|y|\)가 모든 실수 \(x, y\)에 대해 성립합니다. ∎`,en:String.raw`Case 4: \(x < 0\), \(y < 0\).

Then \(xy > 0\), so \(|xy| = xy\).

Since \(|x| = -x\) and \(|y| = -y\), we get \(|x|\,|y| = (-x) \cdot (-y) = xy\) — both sides agree.

The four cases cover every \((x, y) \in \mathbb{R}^2\) with nothing left out, so \(|xy| = |x|\,|y|\) holds for all real \(x, y\). ∎`}}]},{id:`existence-irrational-power`,statement:{ko:String.raw`비구성적으로 증명하세요: \(a^b\)가 유리수인 무리수 \(a, b\)가 존재합니다.

\(c = \sqrt{2}^{\sqrt{2}}\)로 두고 "\(c\)가 유리수인 경우 / 무리수인 경우"로 나누세요.

지수 단계 \(\big(\sqrt{2}^{\sqrt{2}}\big)^{\sqrt{2}} = \sqrt{2}^{\sqrt{2} \cdot \sqrt{2}} = \sqrt{2}^{2} = 2\)를 지수법칙 \((u^v)^w = u^{vw}\) (\(u > 0\))부터 엄밀히 정당화하고, 왜 이 증명이 비구성적인지 설명하세요.`,en:String.raw`Prove non-constructively: there exist irrational numbers \(a, b\) with \(a^b\) rational.

Put \(c = \sqrt{2}^{\sqrt{2}}\) and split into "if \(c\) is rational / if \(c\) is irrational".

Rigorously justify the exponent step \(\big(\sqrt{2}^{\sqrt{2}}\big)^{\sqrt{2}} = \sqrt{2}^{\sqrt{2} \cdot \sqrt{2}} = \sqrt{2}^{2} = 2\) from the power law \((u^v)^w = u^{vw}\) (\(u > 0\)), and explain why this proof is non-constructive.`},display:[String.raw`c = \sqrt{2}^{\sqrt{2}} \approx 1.6325269194381528`,String.raw`c \in \mathbb{Q} \Rightarrow a = b = \sqrt{2}; \qquad c \notin \mathbb{Q} \Rightarrow a = c,\ b = \sqrt{2},\ a^b = 2`],preset:{part:`existence`,x:-2,y:3},presetCaption:{ko:String.raw`존재 증명 갈래도: \(c = \sqrt{2}^{\sqrt{2}} \approx 1.6325\)에서 두 갈래가 갈라져 "존재한다"로 모인다. \(c^{\sqrt{2}} \approx 2.0000000000\).`,en:String.raw`The existence fork: from \(c = \sqrt{2}^{\sqrt{2}} \approx 1.6325\) two branches split and rejoin at "existence". \(c^{\sqrt{2}} \approx 2.0000000000\).`},proof:[{text:{ko:String.raw`\(\sqrt{2}\)가 무리수임은 이미 알려져 있습니다(씬 'sqrt2-irrational' 문제 참조).

\(c = \sqrt{2}^{\sqrt{2}}\)로 두세요 — 무리수의 무리수 제곱입니다.

\(c\)가 유리수인지 무리수인지는 묻지 않고, 두 경우를 나눕니다.`,en:String.raw`That \(\sqrt{2}\) is irrational is known (see the 'sqrt2-irrational' scene problems).

Put \(c = \sqrt{2}^{\sqrt{2}}\) — an irrational power of an irrational.

Without asking whether \(c\) is rational or irrational, split into two cases.`}},{text:{ko:String.raw`경우 1: \(c\)가 유리수. \(a = b = \sqrt{2}\)로 두면 \(a, b\)는 무리수이고 \(a^b = \sqrt{2}^{\sqrt{2}} = c\)는 유리수 — 증명 끝입니다.`,en:String.raw`Case 1: \(c\) is rational. Put \(a = b = \sqrt{2}\): then \(a, b\) are irrational and \(a^b = \sqrt{2}^{\sqrt{2}} = c\) is rational — done.`}},{text:{ko:String.raw`경우 2: \(c\)가 무리수.

\(a = c\), \(b = \sqrt{2}\)로 두면 \(a, b\)는 무리수이고, 지수법칙 \((u^v)^w = u^{vw}\) (\(u > 0\)인 실수 \(u, v, w\)에 대해 성립)를 \(u = \sqrt{2}\), \(v = w = \sqrt{2}\)에 적용하면 \(a^b = \big(\sqrt{2}^{\sqrt{2}}\big)^{\sqrt{2}} = \sqrt{2}^{\sqrt{2} \cdot \sqrt{2}} = \sqrt{2}^{2} = 2\) — 유리수입니다.

수치로도 확인됩니다: \(c^{\sqrt{2}} \approx 2.0000000000\).`,en:String.raw`Case 2: \(c\) is irrational.

Put \(a = c\), \(b = \sqrt{2}\): then \(a, b\) are irrational, and applying the power law \((u^v)^w = u^{vw}\) (valid for real \(u > 0\) and real \(v, w\)) with \(u = \sqrt{2}\), \(v = w = \sqrt{2}\) gives \(a^b = \big(\sqrt{2}^{\sqrt{2}}\big)^{\sqrt{2}} = \sqrt{2}^{\sqrt{2} \cdot \sqrt{2}} = \sqrt{2}^{2} = 2\) — rational.

Numerically too: \(c^{\sqrt{2}} \approx 2.0000000000\).`}},{text:{ko:String.raw`어느 경우든 무리수 \(a, b\)와 유리수 \(a^b\)가 존재하므로 증명이 끝났습니다.

이 증명은 비구성적입니다: 어떤 \((a, b)\) 쌍이 조건을 만족하는지 끝내 말하지 않기 때문입니다 — 경우 1이 참이면 \((\sqrt{2}, \sqrt{2})\)이고 경우 2가 참이면 \((c, \sqrt{2})\)이지만, \(c\)가 유리수인지 무리수인지는 증명 어디에서도 판단하지 않습니다.

(참고로 겔폰드-슈나이더 정리에 의해 \(c\)는 실제로 초월수 — 따라서 무리수 — 임이 알려져 경우 2가 참이지만, 위 증명은 그 사실을 전혀 사용하지 않습니다.) ∎`,en:String.raw`In either case irrational \(a, b\) exist with \(a^b\) rational, completing the proof.

The proof is non-constructive: it never says which pair \((a, b)\) works — \((\sqrt{2}, \sqrt{2})\) if case 1 holds, \((c, \sqrt{2})\) if case 2 holds — because whether \(c\) is rational or irrational is never decided anywhere in the proof.

(The Gelfond–Schneider theorem does imply \(c\) is in fact transcendental, hence irrational, so case 2 is the true one — but the proof above never uses that.) ∎`}}]},{id:`cases-squares-mod-4`,statement:{ko:String.raw`경우 나누기(\(n\)이 짝수 / 홀수)로 증명하세요: 모든 정수의 제곱은 \(4\)로 나눈 나머지가 \(0\) 또는 \(1\)입니다.

이를 이용해 방정식 \(x^2 + y^2 = 3\)이 정수 해를 갖지 않음을 보이세요.`,en:String.raw`Prove by cases (\(n\) even / \(n\) odd): every integer square is congruent to \(0\) or \(1\) modulo \(4\).

Use this to show that \(x^2 + y^2 = 3\) has no integer solutions.`},display:[String.raw`n = 2k \Rightarrow n^2 = 4k^2 \equiv 0 \pmod 4; \qquad n = 2k+1 \Rightarrow n^2 = 4(k^2+k)+1 \equiv 1 \pmod 4`,String.raw`x^2 + y^2 \pmod 4 \in \{0, 1, 2\} \not\ni 3`],preset:{part:`cases`,x:2,y:2},presetCaption:{ko:String.raw`\((x, y) = (2, 2)\): 경우 1 (\(x, y \ge 0\)) — \(|xy| = 4 = 2 \cdot 2 = |x|\,|y|\).`,en:String.raw`\((x, y) = (2, 2)\): case 1 (\(x, y \ge 0\)) — \(|xy| = 4 = 2 \cdot 2 = |x|\,|y|\).`},proof:[{text:{ko:String.raw`경우 1: \(n\)이 짝수, \(n = 2k\) (\(k \in \mathbb{Z}\)). 그러면 \(n^2 = 4k^2\)이므로 \(n^2 \equiv 0 \pmod 4\)입니다.`,en:String.raw`Case 1: \(n\) is even, \(n = 2k\) (\(k \in \mathbb{Z}\)). Then \(n^2 = 4k^2\), so \(n^2 \equiv 0 \pmod 4\).`}},{text:{ko:String.raw`경우 2: \(n\)이 홀수, \(n = 2k+1\).

그러면 \(n^2 = 4k^2 + 4k + 1 = 4(k^2 + k) + 1\)이므로 \(n^2 \equiv 1 \pmod 4\)입니다.

두 경우가 모든 정수를 빠짐없이 덮으므로, 정수 제곱의 \(4\) 모듈러 나머지는 항상 \(0\) 또는 \(1\)입니다.`,en:String.raw`Case 2: \(n\) is odd, \(n = 2k+1\).

Then \(n^2 = 4k^2 + 4k + 1 = 4(k^2 + k) + 1\), so \(n^2 \equiv 1 \pmod 4\).

The two cases cover every integer with nothing left out, so every integer square is \(0\) or \(1\) modulo \(4\).`}},{text:{ko:String.raw`이제 \(x^2 + y^2 = 3\)이 정수 해를 가진다고 가정하세요 (귀류법).

\(x^2 \pmod 4, y^2 \pmod 4 \in \{0, 1\}\)이므로, 그 합 \(x^2 + y^2 \pmod 4\)는 \(\{0, 1, 2\}\) 중 하나입니다: \(0+0 = 0\), \(0+1 = 1\), \(1+1 = 2\).

그런데 \(3 \equiv 3 \pmod 4\)는 이 집합에 없으므로 모순입니다.

따라서 \(x^2 + y^2 = 3\)의 정수 해는 존재하지 않습니다. ∎`,en:String.raw`Now suppose \(x^2 + y^2 = 3\) had an integer solution (proof by contradiction).

Since \(x^2 \pmod 4, y^2 \pmod 4 \in \{0, 1\}\), their sum \(x^2 + y^2 \pmod 4\) lies in \(\{0, 1, 2\}\): \(0+0 = 0\), \(0+1 = 1\), \(1+1 = 2\).

But \(3 \equiv 3 \pmod 4\) is not in this set — a contradiction.

Hence \(x^2 + y^2 = 3\) has no integer solutions. ∎`}}]}],"disproof-iff":[{id:`disproof-div4`,kind:`counterexample`,statement:{ko:String.raw`“\(n^2\)이 4로 나누어떨어지면 \(n\)도 4로 나누어떨어진다”는 주장을 반례 \(n = 2\)로 반박하세요. 주장의 논리형 \(\forall n \in \mathbb{Z}\,(4 \mid n^2 \Rightarrow 4 \mid n)\)과 그 부정 \(\exists n \in \mathbb{Z}\,(4 \mid n^2 \text{ and } 4 \nmid n)\)을 명시적으로 쓰고, 왜 단 하나의 증인으로 증명이 끝나는지 설명하세요.`,en:String.raw`Disprove the claim "if \(n^2\) is divisible by 4 then \(n\) is divisible by 4" using the counterexample \(n = 2\). Write out the claim's logical form \(\forall n \in \mathbb{Z}\,(4 \mid n^2 \Rightarrow 4 \mid n)\) and its negation \(\exists n \in \mathbb{Z}\,(4 \mid n^2 \text{ and } 4 \nmid n)\) explicitly, and explain why a single witness settles the matter.`},display:[String.raw`\forall n \in \mathbb{Z}\,(4 \mid n^2 \Rightarrow 4 \mid n),\qquad \lnot\Big(\forall n \in \mathbb{Z}\,P(n)\Big) = \exists n \in \mathbb{Z}\,\lnot P(n)`,String.raw`n = 2:\quad n^2 = 4,\; 4 \mid 4,\; \text{but } 4 \nmid 2`],preset:{claim:`div4`,n:2},presetCaption:{ko:String.raw`주장 \(4 \mid n^2 \Rightarrow 4 \mid n\), 테스트 \(n = 2\): \(n^2 = 4\)이므로 가정이 참, 결론 \(4 \mid 2\)는 거짓 — 반례 확정.`,en:String.raw`claim \(4 \mid n^2 \Rightarrow 4 \mid n\), test \(n = 2\): \(n^2 = 4\) makes the hypothesis true, the conclusion \(4 \mid 2\) is false — counterexample confirmed.`},verdict:{ko:String.raw`이 명제는 거짓이다 — \(n = 2\)가 반례이다 (\(4 \mid 2^2\)이지만 \(4 \nmid 2\)).`,en:String.raw`The claim is false — \(n = 2\) is a counterexample (\(4 \mid 2^2\) but \(4 \nmid 2\)).`},proof:[{text:{ko:String.raw`주장은 전칭 명제입니다: \(\forall n \in \mathbb{Z}\,(4 \mid n^2 \Rightarrow 4 \mid n)\) — 정의역은 \(n \in \mathbb{Z}\)입니다.

논리학의 기본 규칙에 따라 그 부정은 존재 명제 \(\exists n \in \mathbb{Z}\,\lnot(4 \mid n^2 \Rightarrow 4 \mid n)\)이고, 함축의 부정 \(\lnot(P \Rightarrow Q) = P \wedge \lnot Q\)에 의해 \(\exists n \in \mathbb{Z}\,(4 \mid n^2 \wedge 4 \nmid n)\)이 됩니다.

즉 “가정은 참인데 결론은 거짓인 \(n \in \mathbb{Z}\)가 하나라도 존재한다”를 보이면 충분하고, 그 역도 마찬가지입니다.`,en:String.raw`The claim is a universal statement: \(\forall n \in \mathbb{Z}\,(4 \mid n^2 \Rightarrow 4 \mid n)\) — the domain is \(n \in \mathbb{Z}\).

By the basic rules of logic its negation is the existential statement \(\exists n \in \mathbb{Z}\,\lnot(4 \mid n^2 \Rightarrow 4 \mid n)\), which by \(\lnot(P \Rightarrow Q) = P \wedge \lnot Q\) equals \(\exists n \in \mathbb{Z}\,(4 \mid n^2 \wedge 4 \nmid n)\).

So it suffices to exhibit one \(n \in \mathbb{Z}\) for which the hypothesis is true and the conclusion false — and conversely, one such \(n\) is all it takes.`}},{text:{ko:String.raw`\(n = 2\)를 취합니다.

\(n^2 = 4\)이고 \(4 \mid 4\)이므로 가정은 참입니다.

그런데 \(n = 2\)는 4로 나누어떨어지지 않으므로 결론 \(4 \mid n\)은 거짓입니다.

따라서 \(n = 2\)는 부정 명제 \(\exists n\,(4 \mid n^2 \wedge 4 \nmid n)\)의 증인이고, 원래 전칭 주장은 거짓입니다.`,en:String.raw`Take \(n = 2\).

Then \(n^2 = 4\) and \(4 \mid 4\), so the hypothesis is true.

But \(n = 2\) is not divisible by 4, so the conclusion \(4 \mid n\) is false.

Hence \(n = 2\) is a witness to \(\exists n\,(4 \mid n^2 \wedge 4 \nmid n)\), and the original universal claim is false.`},display:[String.raw`n = 2:\quad 4 \mid n^2 = 4\ \text{true},\qquad 4 \mid 2\ \text{false (i.e. } 4 \nmid 2\ \text{true)} \Rightarrow\ \text{counterexample}`]},{text:{ko:String.raw`주석: 백 개의 \(n\)에서 가정이 결론을 따라다니는 것을 확인해도 — 예를 들어 \(n = 4, 8, 12\)에서는 모두 참입니다 — 전칭 주장은 증명되지 않습니다.

반례 하나가 무한한 지지 예보다 강합니다.

(이 주장의 ‘고친 버전’ — \(n\)이 짝수 \(\iff\) \(n^2\)이 짝수 — 은 아래 문제 2에서 양방향으로 증명합니다.)`,en:String.raw`Remark: checking a hundred values of \(n\) where the hypothesis trails the conclusion — e.g. \(n = 4, 8, 12\) all work — never proves a universal claim.

One counterexample outweighs infinitely many supporting cases.

(The "fixed version" of this claim — \(n\) is even \(\iff\) \(n^2\) is even — is proved in both directions in problem 2 below.)`}}]},{id:`iff-even-squares`,statement:{ko:String.raw`\(n\)이 짝수인 것과 \(n^2\)이 짝수인 것이 동치임을 양방향으로 완전히 증명하세요. \(\Rightarrow\) 방향은 직접 증명 (\(n = 2k\)에서 \(n^2 = 2(2k^2)\)), \(\Leftarrow\) 방향은 대우 (홀수 \(n = 2k+1\)에서 \(n^2 = 2(2k^2+2k)+1\)은 홀수)를 사용하고, 두 방향이 왜 서로 다른 증명인지 명시하세요.`,en:String.raw`Prove completely, in both directions, that \(n\) is even if and only if \(n^2\) is even. Use a direct proof for the \(\Rightarrow\) direction (\(n = 2k\) gives \(n^2 = 2(2k^2)\)) and the contrapositive for the \(\Leftarrow\) direction (odd \(n = 2k+1\) gives odd \(n^2 = 2(2k^2+2k)+1\)), and state explicitly why the two directions are different proofs.`},display:[String.raw`n\ \text{even} \iff n^2\ \text{even}`,String.raw`\Rightarrow:\ n = 2k \;\Rightarrow\; n^2 = 2(2k^2),\qquad \Leftarrow:\ \lnot(n\ \text{even}) \Rightarrow \lnot(n^2\ \text{even})`],preset:{claim:`primes-odd`,n:2},presetCaption:{ko:String.raw`씐에 이 양방향 주장을 직접 시험하는 프리셋은 없으므로(반례 장면의 주장만 있음), 가장 작은 반례 \(n = 2\) 위치의 프리셋 — 이 문제는 증명 연습입니다.`,en:String.raw`The scene has no preset directly testing this biconditional (only the counterexample claims), so this preset marks the smallest-counterexample position \(n = 2\) — this problem is proof practice.`},proof:[{text:{ko:String.raw`(\(\Rightarrow\)) \(n\)이 짝수라 하세요.

그러면 어떤 정수 \(k\)에 대해 \(n = 2k\)입니다.

제곱하면 \(n^2 = 4k^2 = 2(2k^2)\)이고, \(2k^2\)가 정수이므로 \(n^2\)은 짝수입니다.

이것은 직접 증명 — 가정에서 출발해 정의를 풀고 결론에 도달했습니다.`,en:String.raw`(\(\Rightarrow\)) Suppose \(n\) is even.

Then \(n = 2k\) for some integer \(k\).

Squaring gives \(n^2 = 4k^2 = 2(2k^2)\), and since \(2k^2\) is an integer, \(n^2\) is even.

This is a direct proof — it starts from the assumption, unfolds the definition, and reaches the conclusion.`}},{text:{ko:String.raw`(\(\Leftarrow\)) 역방향은 직접 증명이 막힙니다: “\(n^2\)이 짝수”라는 가정에서 \(n\)을 꺼내 쓸 방법이 없기 때문입니다.

대신 대우를 증명합니다: \(n\)이 홀수이면 \(n^2\)도 홀수이다.

\(n = 2k+1\)이라 두면 \(n^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1\)이고, \(2k^2 + 2k\)가 정수이므로 \(n^2\)은 홀수입니다.

대우가 참이므로 원래 함축 \(n^2\) 짝수 \(\Rightarrow\) \(n\) 짝수도 참입니다.`,en:String.raw`(\(\Leftarrow\)) The reverse direction resists a direct proof: from the assumption "\(n^2\) is even" there is no way to extract \(n\).

Prove the contrapositive instead: if \(n\) is odd then \(n^2\) is odd.

Write \(n = 2k+1\); then \(n^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1\), and since \(2k^2 + 2k\) is an integer, \(n^2\) is odd.

The contrapositive holds, so the original implication "\(n^2\) even \(\Rightarrow\) \(n\) even" holds.`},display:[String.raw`(2k+1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1\ \text{odd}`]},{text:{ko:String.raw`두 방향은 서로 다른 증명입니다: \(\Rightarrow\)는 짝수의 정의 \(n = 2k\)를 직접 풀어 썼고, \(\Leftarrow\)는 정의가 아닌 대우 명제로 우회했습니다.

둘 중 하나만 증명하면 동치가 아니라 함축 하나만 얻습니다.

“\(P \iff Q\)”를 주장하려면 두 화살표가 모두 필요하고, 보통은 이렇게 서로 다른 논증이 필요합니다.`,en:String.raw`The two directions are genuinely different proofs: \(\Rightarrow\) unfolds the definition of even, \(n = 2k\), directly, while \(\Leftarrow\) goes around it via the contrapositive.

Proving only one direction establishes an implication, not an equivalence.

To claim "\(P \iff Q\)" both arrows are needed, and they usually require different arguments like this.`}}]},{id:`iff-square-equality`,statement:{ko:String.raw`실수 \(x, y\)에 대해 \(x^2 = y^2\)인 것과 \(x = y\) 또는 \(x = -y\)인 것이 동치임을 증명하세요. \(\Rightarrow\) 방향은 \(x^2 - y^2 = (x-y)(x+y) = 0\)과 곱이 0이면 인자가 0이라는 성질을, \(\Leftarrow\) 방향은 각 경우에 대한 직접 대입을 사용하세요.`,en:String.raw`Prove that for real \(x, y\), \(x^2 = y^2\) holds if and only if \(x = y\) or \(x = -y\). For the \(\Rightarrow\) direction use the factorization \(x^2 - y^2 = (x-y)(x+y) = 0\) together with the zero-product property; for the \(\Leftarrow\) direction substitute directly in each case.`},display:[String.raw`x^2 = y^2 \iff (x = y\ \text{or}\ x = -y)`,String.raw`\Rightarrow:\ x^2 - y^2 = (x-y)(x+y) = 0,\qquad \Leftarrow:\ (-y)^2 = y^2`],preset:{claim:`abs-equal`,n:3},presetCaption:{ko:String.raw`주장 \(|x| = |y| \Rightarrow x = y\), 테스트 쌍 \((3, -3)\): \(|3| = |-3| = 3\)이지만 \(3 \ne -3\) — 이 문제의 양방향 버전에 대한 반례입니다.`,en:String.raw`claim \(|x| = |y| \Rightarrow x = y\), test pair \((3, -3)\): \(|3| = |-3| = 3\) but \(3 \ne -3\) — a counterexample to the one-directional version this problem repairs both ways.`},proof:[{text:{ko:String.raw`(\(\Rightarrow\)) \(x^2 = y^2\)이라 가정합니다.

양변에서 \(y^2\)을 빼면 \(x^2 - y^2 = 0\)이고, 인수분해하면 \((x-y)(x+y) = 0\)입니다.

실수에서는 두 수의 곱이 0이면 둘 중 하나가 0이므로 (0이 아닌 수로 나누면 되기 때문입니다), \(x - y = 0\) 또는 \(x + y = 0\) — 즉 \(x = y\) 또는 \(x = -y\)입니다.`,en:String.raw`(\(\Rightarrow\)) Suppose \(x^2 = y^2\).

Subtracting \(y^2\) from both sides gives \(x^2 - y^2 = 0\), and factoring yields \((x-y)(x+y) = 0\).

For real numbers, a product of two numbers is 0 only if one of them is 0 (divide by whichever factor is nonzero), so \(x - y = 0\) or \(x + y = 0\) — i.e. \(x = y\) or \(x = -y\).`}},{text:{ko:String.raw`(\(\Leftarrow\)) 역방향은 두 경우를 각각 직접 확인합니다.

\(x = y\)이면 \(x^2 = y^2\)는 자명하고, \(x = -y\)이면 \(x^2 = (-y)^2 = y^2\)입니다.

두 경우 모두 \(x^2 = y^2\)이 성립합니다.`,en:String.raw`(\(\Leftarrow\)) The reverse direction is checked directly in each case.

If \(x = y\) then \(x^2 = y^2\) is immediate, and if \(x = -y\) then \(x^2 = (-y)^2 = y^2\).

In both cases \(x^2 = y^2\) holds.`}},{text:{ko:String.raw`주석: 이 양방향 정리는 씬의 반례를 설명합니다 — 먼저 \(|x| = |y| \iff x^2 = y^2\) 자체를 양방향으로 증명합니다.

\((\Rightarrow)\) \(|x| = |y|\)이면 양변을 제곱해 \(x^2 = |x|^2 = |y|^2 = y^2\)입니다 (\(|t|^2 = t^2\) 사용).

\((\Leftarrow)\) \(x^2 = y^2\)이면 \(|x|^2 = |y|^2\)이고, \(|x|, |y| \ge 0\)이며 제곱은 \([0, \infty)\)에서 단사(엄격히 증가)이므로 \(|x| = |y|\)입니다.

따라서 \(|x| = |y|\)는 \(x^2 = y^2\)와 동치이고, 실제로 강제되는 것은 “\(x = y\)”가 아니라 “\(x = y\) 또는 \(x = -y\)”입니다.

씬의 쌍 \((n, -n)\)은 바로 두 번째 경우의 증인입니다.

반례를 만난 뒤 주장을 어떻게 고쳐야 하는지 보여 주는 전형적인 예입니다.`,en:String.raw`Remark: this biconditional explains the scene's counterexample — first prove \(|x| = |y| \iff x^2 = y^2\) itself, in both directions.

\((\Rightarrow)\) If \(|x| = |y|\), squaring gives \(x^2 = |x|^2 = |y|^2 = y^2\) (using \(|t|^2 = t^2\)).

\((\Leftarrow)\) If \(x^2 = y^2\) then \(|x|^2 = |y|^2\); since \(|x|, |y| \ge 0\) and squaring is injective (strictly increasing) on \([0, \infty)\), it follows that \(|x| = |y|\).

Hence \(|x| = |y|\) is equivalent to \(x^2 = y^2\), so what is actually forced is not "\(x = y\)" but "\(x = y\) or \(x = -y\)".

The scene's pairs \((n, -n)\) are witnesses to the second alternative.

This is the classic pattern: a counterexample shows how the claim must be repaired.`}}]}],"strong-induction":[{id:`strong-induction-prime-factorization`,statement:{ko:String.raw`강한 귀납법으로 증명하세요: 2 이상의 모든 정수는 소수들의 곱이다. \(n\)이 소수인 경우와 합성수인 경우(\(n = a \cdot b\), \(1 < a, b < n\))를 나누고, 약한 귀납 단계(“\(P(n-1)\)을 가정하고 \(P(n)\)을 증명”)가 정확히 어디에서 막히는지 짚으세요 (\(n\)의 인자 \(a, b\)는 보통 \(n-1\) 근처에 있지 않으므로 \(P(n-1)\)이 그들에 대해 아무 말도 하지 못합니다).`,en:String.raw`Prove by strong induction that every integer \(n \ge 2\) is a product of primes. Split into the cases where \(n\) is prime and where \(n = a \cdot b\) is composite (\(1 < a, b < n\)), and pinpoint exactly where the weak-induction step ("assume \(P(n-1)\), prove \(P(n)\)") breaks down: the factors \(a, b\) of \(n\) are typically nowhere near \(n - 1\), so \(P(n-1)\) says nothing about them.`},display:[String.raw`P(n):\ n\ \text{is a product of primes},\qquad n \ge 2`,String.raw`\text{assume } P(2), \dots, P(n-1);\quad \text{prove } P(n)`],preset:{n:30},presetCaption:{ko:String.raw`\(n = 30 = 2 \times 3 \times 5\): 합성수, 첫 분기 \(a = 2\), \(b = 15\) — \(n-1 = 29\)와 무관한 위치.`,en:String.raw`\(n = 30 = 2 \times 3 \times 5\): composite, first split \(a = 2\), \(b = 15\) — nowhere near \(n-1 = 29\).`},proof:[{text:{ko:String.raw`강한 귀납 가정을 세웁니다: 어떤 \(n \ge 2\)에 대해, \(2 \le k < n\)인 모든 \(k\)에 대해 \(P(k)\)가 참이라 가정합니다 — 즉 \(k\)는 소수들의 곱입니다. \(n\)에 대해 \(P(n)\)을 증명합니다.`,en:String.raw`Set up the strong-induction hypothesis: for some \(n \ge 2\), assume \(P(k)\) holds for every \(2 \le k < n\) — i.e. each such \(k\) is a product of primes. Prove \(P(n)\).`}},{text:{ko:String.raw`경우 1: \(n\)이 소수. 그러면 \(n\)은 그 자체로 “소수들의 곱”(인자가 하나인 곱)입니다.

이것이 밑에 해당하는 경우이며, 증명할 것이 없습니다.`,en:String.raw`Case 1: \(n\) is prime. Then \(n\) is itself a "product of primes" (a product with one factor).

This is the base-like case; there is nothing to prove.`}},{text:{ko:String.raw`경우 2: \(n\)이 합성수. 그러면 \(n = a \cdot b\)인 \(1 < a, b < n\)이 존재합니다. \(a < n\)이므로 강한 귀납 가정 \(P(a)\)가 적용되어 \(a = p_1 \cdots p_r\)은 소수들의 곱이고, 마찬가지로 \(b = q_1 \cdots q_s\)도 소수들의 곱입니다.

따라서 \(n = p_1 \cdots p_r \cdot q_1 \cdots q_s\) — 소수들의 곱입니다. \(P(n)\)이 증명되었습니다.`,en:String.raw`Case 2: \(n\) is composite. Then \(n = a \cdot b\) for some \(1 < a, b < n\). Since \(a < n\), the strong hypothesis \(P(a)\) applies and gives \(a = p_1 \cdots p_r\) as a product of primes; likewise \(b = q_1 \cdots q_s\).

Hence \(n = p_1 \cdots p_r \cdot q_1 \cdots q_s\) — a product of primes. This proves \(P(n)\).`}},{text:{ko:String.raw`약한 귀납이 막히는 지점: 약한 귀납은 \(P(n-1)\) 하나만 제공합니다. 그러나 \(n = 30\)의 경우 필요한 것은 \(P(29)\)가 아니라 \(P(2)\)와 \(P(15)\)입니다 — 인자 \(a = 2\), \(b = 15\)가 \(n-1 = 29\) 근처에 전혀 있지 않기 때문입니다.

\(P(n-1)\)은 \(a\)와 \(b\)에 대해 아무 것도 말해주지 못하므로, 약한 귀납 단계는 진행할 수 없습니다. 강한 가정이 “\(n\)보다 작은 모든 수”를 커버하기 때문에 이 증명이 돌아갑니다.`,en:String.raw`Where weak induction stalls: weak induction supplies only \(P(n-1)\). But for \(n = 30\) what is needed is not \(P(29)\) — it is \(P(2)\) and \(P(15)\), because the factors \(a = 2\), \(b = 15\) are nowhere near \(n - 1 = 29\).

The hypothesis \(P(n-1)\) says nothing about \(a\) and \(b\), so the weak step cannot proceed. The proof works precisely because the strong hypothesis covers every number below \(n\).`},display:[String.raw`n = 30 = 2 \times 15:\quad P(2), P(15)\ \text{needed},\quad P(29)\ \text{useless}`]}]},{id:`strong-induction-postage-stamps`,statement:{ko:String.raw`강한 귀납법으로 증명하세요: 12 이상의 모든 정수는 \(4a + 5b\) (\(a, b \ge 0\) 정수) 꼴로 쓸 수 있다. 밑 경우 네 개 \(12 = 3 \cdot 4\), \(13 = 2 \cdot 4 + 5\), \(14 = 4 + 2 \cdot 5\), \(15 = 3 \cdot 5\)를 확인하고, \(n \ge 16\)인 경우 가정을 \(n-4\)에 적용한 뒤 4짜리 우표 하나를 더하세요. 밑 경우가 왜 정확히 네 개 연속이어야 하는지 설명하세요 (귀납 단계가 4만큼 뒤로 점프하기 때문입니다).`,en:String.raw`Prove by strong induction that every integer \(n \ge 12\) can be written as \(4a + 5b\) with integers \(a, b \ge 0\). Check the four base cases \(12 = 3 \cdot 4\), \(13 = 2 \cdot 4 + 5\), \(14 = 4 + 2 \cdot 5\), \(15 = 3 \cdot 5\); for \(n \ge 16\) apply the hypothesis to \(n - 4\) and add one 4-stamp. Explain why exactly four consecutive base cases are needed (the induction step jumps back by 4).`},display:[String.raw`P(n):\ \exists a, b \ge 0\ \text{with}\ n = 4a + 5b,\qquad n \ge 12`,String.raw`n \ge 16 \;\Rightarrow\; n - 4 \ge 12:\quad n = (n-4) + 4`],preset:{n:30},presetCaption:{ko:String.raw`\(n = 30 = 5 \cdot 4 + 2 \cdot 5 = 20 + 10\): \(a = 5\), \(b = 2\).`,en:String.raw`\(n = 30 = 5 \cdot 4 + 2 \cdot 5 = 20 + 10\): \(a = 5\), \(b = 2\).`},proof:[{text:{ko:String.raw`밑 경우: \(12 = 3 \cdot 4 + 0 \cdot 5\) (\(a = 3\), \(b = 0\)), \(13 = 2 \cdot 4 + 1 \cdot 5\) (\(a = 2\), \(b = 1\)), \(14 = 1 \cdot 4 + 2 \cdot 5\) (\(a = 1\), \(b = 2\)), \(15 = 0 \cdot 4 + 3 \cdot 5\) (\(a = 0\), \(b = 3\)) — 네 경우 모두 직접 확인됩니다.`,en:String.raw`Base cases: \(12 = 3 \cdot 4 + 0 \cdot 5\) (\(a = 3\), \(b = 0\)), \(13 = 2 \cdot 4 + 1 \cdot 5\) (\(a = 2\), \(b = 1\)), \(14 = 1 \cdot 4 + 2 \cdot 5\) (\(a = 1\), \(b = 2\)), \(15 = 0 \cdot 4 + 3 \cdot 5\) (\(a = 0\), \(b = 3\)) — each checked directly.`}},{text:{ko:String.raw`귀납 단계: \(n \ge 16\)이라 하고, \(12 \le k < n\)인 모든 \(k\)에 대해 \(P(k)\)를 가정합니다 (강한 귀납). \(n - 4 \ge 12\)이므로 가정이 \(n - 4\)에 적용되어 \(n - 4 = 4a + 5b\)인 \(a, b \ge 0\)이 존재합니다.

양변에 4를 더하면 \(n = 4(a+1) + 5b\) — \(P(n)\)이 증명되었습니다.`,en:String.raw`Induction step: let \(n \ge 16\) and assume \(P(k)\) for all \(12 \le k < n\) (strong induction). Since \(n - 4 \ge 12\), the hypothesis applies to \(n - 4\), giving \(n - 4 = 4a + 5b\) for some \(a, b \ge 0\).

Adding 4 to both sides, \(n = 4(a+1) + 5b\) — proving \(P(n)\).`}},{text:{ko:String.raw`밑 경우가 네 개 연속이어야 하는 이유: 귀납 단계는 \(n\)에서 \(n-4\)로 4만큼 뒤로 점프합니다. 따라서 \(n \ge 16\)에 대한 증명이 \(12, 13, 14, 15\) 중 하나에 “착지”하려면, 4로 나눈 나머지가 \(0, 1, 2, 3\)인 경우가 모두 밑에 있어야 합니다. 세 개만 있으면 한 나머지 류가 밑 없이 떠버립니다.

일반적으로 점프 폭이 \(m\)이면 연속된 밑 경우 \(m\)개가 필요합니다. 예: \(30 - 4 \cdot 4 = 14\)이므로, \(30 = (14\)의 표현\() + 4 \cdot 4 = (4 + 2 \cdot 5) + 16 = 5 \cdot 4 + 2 \cdot 5\).`,en:String.raw`Why four consecutive base cases: the induction step jumps back by 4, from \(n\) to \(n - 4\). So for the proof of \(n \ge 16\) to "land" on one of \(12, 13, 14, 15\), every remainder class \(0, 1, 2, 3\) modulo 4 must be present among the bases. With only three, one residue class would be left hanging.

In general a jump of \(m\) needs \(m\) consecutive base cases. Example: \(30 - 4 \cdot 4 = 14\), so \(30 = (\text{expression for } 14) + 4 \cdot 4 = (4 + 2 \cdot 5) + 16 = 5 \cdot 4 + 2 \cdot 5\).`}}]},{id:`strong-induction-prime-divisor`,statement:{ko:String.raw`강한 귀납법으로 증명하세요: 2 이상의 모든 정수 \(n\)은 소인수를 가진다. \(n\)이 소수이면 자기 자신이 소인수이고, 합성수이면 \(n = a \cdot b\) (\(1 < a < n\))로 쓰고 \(a\)에 가정을 적용하세요 — \(a\)의 소인수 \(p\)는 \(n\)도 나눕니다.`,en:String.raw`Prove by strong induction that every integer \(n \ge 2\) has a prime divisor. If \(n\) is prime it divides itself; if \(n = a \cdot b\) is composite (\(1 < a < n\)), apply the hypothesis at \(a\) — a prime divisor \(p\) of \(a\) also divides \(n\).`},display:[String.raw`P(n):\ \exists\ \text{prime } p\ \text{with}\ p \mid n,\qquad n \ge 2`,String.raw`n = a \cdot b,\ 1 < a < n:\quad p \mid a \;\Rightarrow\; p \mid n`],preset:{n:36},presetCaption:{ko:String.raw`\(n = 36 = 2^2 \cdot 3^2\): 소인수 2와 3. 트리에서 \(36 = 2 \times 18\) → \(18 = 2 \times 9\) → \(9 = 3 \times 3\).`,en:String.raw`\(n = 36 = 2^2 \cdot 3^2\): prime divisors 2 and 3. In the tree, \(36 = 2 \times 18\) → \(18 = 2 \times 9\) → \(9 = 3 \times 3\).`},proof:[{text:{ko:String.raw`강한 귀납 가정을 세웁니다: 어떤 \(n \ge 2\)에 대해, \(2 \le k < n\)인 모든 \(k\)가 소인수를 가진다고 가정합니다. \(P(n)\)을 증명합니다.`,en:String.raw`Set up the strong-induction hypothesis: for some \(n \ge 2\), assume every \(2 \le k < n\) has a prime divisor. Prove \(P(n)\).`}},{text:{ko:String.raw`경우 1: \(n\)이 소수. 그러면 \(n\) 자신이 \(n\)의 소인수입니다 (\(n \mid n\)).`,en:String.raw`Case 1: \(n\) is prime. Then \(n\) itself is a prime divisor of \(n\) (\(n \mid n\)).`}},{text:{ko:String.raw`경우 2: \(n\)이 합성수. 그러면 \(n = a \cdot b\)인 \(1 < a, b < n\)이 존재합니다. \(a < n\)이므로 가정이 \(a\)에 적용되어, 소수 \(p\)와 \(p \mid a\)인 경우가 존재합니다.

\(a \mid n\)이므로 (\(n = a \cdot b\)) 약수 관계의 추이성에 의해 \(p \mid n\)입니다. 즉 \(p\)는 \(n\)의 소인수입니다.`,en:String.raw`Case 2: \(n\) is composite. Then \(n = a \cdot b\) for some \(1 < a, b < n\). Since \(a < n\), the hypothesis applies at \(a\), giving a prime \(p\) with \(p \mid a\).

Because \(a \mid n\) (as \(n = a \cdot b\)), transitivity of divisibility yields \(p \mid n\). So \(p\) is a prime divisor of \(n\).`},display:[String.raw`p \mid a,\ a \mid n \;\Rightarrow\; p \mid n \quad (\text{transitivity})`]},{text:{ko:String.raw`주석: 이 정리는 문제 1(소인수분해)의 “한 걸음짜리” 버전입니다. \(n = 36\)에서 가정은 \(a = 2\)에 적용되어 \(p = 2\)를 내놓고, \(2 \mid 2\)이고 \(2 \mid 36\)이므로 끝입니다.

전체 소인수분해를 구하지 않아도, 소인수 하나의 존재는 같은 강한 귀납 구조로 따라옵니다.`,en:String.raw`Remark: this theorem is the "one-step" version of problem 1 (full factorization). For \(n = 36\) the hypothesis is applied at \(a = 2\), yielding \(p = 2\), and \(2 \mid 2\) with \(2 \mid 36\) finishes it.

The existence of a single prime divisor follows from the same strong-induction skeleton, without computing the whole factorization.`}}]}],"relations-equivalence":[{id:`relations-equivalence-modular-proof`,statement:{ko:String.raw`정수의 집합 \(\mathbb{Z}\) 위에서 합동식 \(a \sim b \iff n \mid (a - b)\)로 정의된 관계가 동치관계임을 완전히 증명하세요 — 반사·대칭·추이 세 조건을 각각 나눗셈의 산술로 끌어내리세요.`,en:String.raw`Prove completely that the relation \(a \sim b \iff n \mid (a - b)\) on the integers \(\mathbb{Z}\) is an equivalence relation — pull each of the three conditions, reflexive, symmetric, transitive, down to the arithmetic of divisibility.`},display:[String.raw`a \sim b \;\iff\; a \equiv b \pmod n`,String.raw`n \mid (a-b),\; n \mid (b-c) \;\Rightarrow\; n \mid (a-c) = (a-b) + (b-c)`],preset:{n:4},presetCaption:{ko:String.raw`\(n = 4\): \(U\)는 \(0\)부터 \(11\)까지의 \(12\)개 수, 동치류는 \([0] = \{0, 4, 8\}\), \([1] = \{1, 5, 9\}\), \([2] = \{2, 6, 10\}\), \([3] = \{3, 7, 11\}\). 예: \(7 \sim 3\) (\(7 - 3 = 4\)), \(7 \sim 4\)는 거짓 (\(7 - 4 = 3\)은 \(4\)로 나누어지지 않음).`,en:String.raw`\(n = 4\): \(U\) is the \(12\) numbers \(0\) through \(11\), and the classes are \([0] = \{0, 4, 8\}\), \([1] = \{1, 5, 9\}\), \([2] = \{2, 6, 10\}\), \([3] = \{3, 7, 11\}\). Examples: \(7 \sim 3\) (\(7 - 3 = 4\)), but \(7 \sim 4\) is false (\(7 - 4 = 3\) is not divisible by \(4\)).`},proof:[{text:{ko:String.raw`반사(reflexive): 모든 정수 \(a\)에 대해 \(a - a = 0\)이고 \(n \mid 0\)이므로 \(a \sim a\). 씬의 수치로는 \(n = 4\)일 때 \(U\)의 \(12\)개 원소가 모두 자기자신과 관련됩니다.`,en:String.raw`Reflexive: for every integer \(a\), \(a - a = 0\) and \(n \mid 0\), so \(a \sim a\). In the scene at \(n = 4\), all \(12\) elements of \(U\) are related to themselves.`}},{text:{ko:String.raw`대칭(symmetric): \(a \sim b\)라 하세요. 그러면 \(n \mid (a - b)\)라서 \(a - b = nk\)인 정수 \(k\)가 존재하고, 이로부터 \(b - a = -nk = n(-k)\)이므로 \(n \mid (b - a)\), 즉 \(b \sim a\).

씬에서는 \(U\)의 모든 \(12^2 = 144\)개 순서쌍에 대해 확인됩니다.`,en:String.raw`Symmetric: suppose \(a \sim b\). Then \(n \mid (a - b)\), so \(a - b = nk\) for some integer \(k\), and therefore \(b - a = -nk = n(-k)\), giving \(n \mid (b - a)\), i.e. \(b \sim a\).

In the scene this is checked for all \(12^2 = 144\) ordered pairs of \(U\).`}},{text:{ko:String.raw`추이(transitive): \(a \sim b\)이고 \(b \sim c\)라 하세요. \(a - b = nk\), \(b - c = nm\)인 정수 \(k, m\)이 존재하고, 두 식을 더하면 \(a - c = (a - b) + (b - c) = nk + nm = n(k + m)\)이므로 \(n \mid (a - c)\), 즉 \(a \sim c\).

씬에서는 \(12^3 = 1728\)개 삼중항이 모두 확인됩니다. 세 조건이 성립하므로 합동식은 동치관계입니다.`,en:String.raw`Transitive: suppose \(a \sim b\) and \(b \sim c\). There are integers \(k, m\) with \(a - b = nk\) and \(b - c = nm\); adding gives \(a - c = (a - b) + (b - c) = nk + nm = n(k + m)\), so \(n \mid (a - c)\), i.e. \(a \sim c\).

In the scene all \(12^3 = 1728\) triples check out. The three conditions hold, so congruence is an equivalence relation.`}}]},{id:`relations-equivalence-partition-theorem`,statement:{ko:String.raw`분할 정리(partition theorem)를 완전히 증명하세요: 집합 \(S\) 위의 동치관계 \(\sim\)에 대해 (i) 모든 \(x\)는 그 동치류 \([x]\)에 속하고, (ii) \([x]\)와 \([y]\)가 원소를 하나라도 공유하면 \([x] = [y]\)입니다.

이로부터 서로 다른 동치류는 겹치지 않고 동치류 전체가 \(S\)를 덮음을 도출하세요.`,en:String.raw`Prove the partition theorem completely: for an equivalence relation \(\sim\) on a set \(S\), (i) every \(x\) belongs to its own equivalence class \([x]\), and (ii) if \([x]\) and \([y]\) share even one element then \([x] = [y]\).

Deduce that distinct classes are disjoint and that the classes together cover \(S\).`},display:[String.raw`[x] = \{y \in S : y \sim x\}`,String.raw`z \in [x] \cap [y] \;\Rightarrow\; [x] = [y]`],preset:{n:4},presetCaption:{ko:String.raw`\(n = 4\): 네 동치류 \([0] = \{0, 4, 8\}\), \([1] = \{1, 5, 9\}\), \([2] = \{2, 6, 10\}\), \([3] = \{3, 7, 11\}\)은 서로 겹치지 않고 합집합이 \(U\) 전체입니다 — 분할 정리의 유한 구체예.`,en:String.raw`\(n = 4\): the four classes \([0] = \{0, 4, 8\}\), \([1] = \{1, 5, 9\}\), \([2] = \{2, 6, 10\}\), \([3] = \{3, 7, 11\}\) are pairwise disjoint and their union is all of \(U\) — the partition theorem in a finite example.`},proof:[{text:{ko:String.raw`(i) 반사성(reflexivity)에 의해 \(x \sim x\)이므로 \(x \in [x]\)입니다. 따라서 어떤 동치류도 비어 있지 않고, 모든 원소가 최소 하나의 동치류에 들어갑니다 — 동치류들의 합집합이 \(S\) 전체입니다.`,en:String.raw`(i) By reflexivity \(x \sim x\), hence \(x \in [x]\). So no class is empty, and every element lies in at least one class — the classes cover \(S\).`}},{text:{ko:String.raw`(ii)의 준비: 원소 \(z \in [x] \cap [y]\)가 존재한다고 하세요. 정의에 의해 \(z \sim x\)이고 \(z \sim y\)입니다.

대칭성에 의해 \(z \sim x\)에서 \(x \sim z\)를 얻고, 여기에 \(z \sim y\)와 추이성을 적용하면 \(x \sim y\)를 얻습니다.`,en:String.raw`Setup for (ii): suppose some \(z \in [x] \cap [y]\) exists. By definition \(z \sim x\) and \(z \sim y\).

Symmetry turns \(z \sim x\) into \(x \sim z\), and transitivity with \(z \sim y\) then gives \(x \sim y\).`}},{text:{ko:String.raw`이제 \([x] \subseteq [y]\)를 보입니다. \(w \in [x]\)라 하면 \(w \sim x\)이고, 위의 준비에서 얻은 \(x \sim y\)와 \(w \sim x\)를 추이성으로 바로 이으면 \(w \sim y\), 즉 \(w \in [y]\)입니다.

역할을 바꾸면 \([y] \subseteq [x]\)도 얻어지므로 \([x] = [y]\)입니다.`,en:String.raw`Now show \([x] \subseteq [y]\). If \(w \in [x]\) then \(w \sim x\); chaining \(w \sim x\) with \(x \sim y\) from the setup by transitivity gives \(w \sim y\) directly, i.e. \(w \in [y]\).

Swapping the roles gives \([y] \subseteq [x]\), hence \([x] = [y]\).`}},{text:{ko:String.raw`결론: 두 동치류가 조금이라도 겹치면 둘은 같습니다. 따라서 서로 다른 동치류는 서로소이고, (i)에 의해 그 합집합은 \(S\)입니다 — 동치관계는 집합을 동치류들로 분할(partition)합니다.

\(n = 4\)인 씬에서는 네 동치류가 \(U\)의 \(12\)개 원소를 \(3\)개씩 정확히 나눠 가집니다.`,en:String.raw`Conclusion: if two classes overlap at all, they are equal. Hence distinct classes are disjoint, and by (i) their union is \(S\) — an equivalence relation partitions its set into equivalence classes.

In the scene at \(n = 4\), the four classes split the \(12\) elements of \(U\) into exactly \(3\) each.`}}]},{id:`relations-equivalence-vitali-cosets`,statement:{ko:String.raw`실수 집합 \(\mathbb{R}\) 위에서 \(x \sim y \iff x - y \in \mathbb{Q}\)로 관계를 정의합니다. (a) 이 관계가 동치관계임을 증명하고, (b) 동치류의 모양을 규명하세요(\([x] = x + \mathbb{Q}\)), (c) 이 분할에서 각 동치류마다 대표원소 하나를 골라 모은 집합이 비탈리 집합(Vitali set)의 구성과 정확히 같음을 설명하세요.`,en:String.raw`Define a relation on \(\mathbb{R}\) by \(x \sim y \iff x - y \in \mathbb{Q}\). (a) Prove it is an equivalence relation, (b) determine the shape of its equivalence classes (\([x] = x + \mathbb{Q}\)), and (c) explain why collecting one representative from each class of this partition is exactly the Vitali-set construction.`},display:[String.raw`x \sim y \iff x - y \in \mathbb{Q}`,String.raw`[x] = x + \mathbb{Q} = \{x + q : q \in \mathbb{Q}\}`],preset:{n:2},presetCaption:{ko:String.raw`\(n = 2\): 유한 원형 — 두 동치류 \([0] = \{0, 2, 4\}\)와 \([1] = \{1, 3, 5\}\)가 \(U = \{0, \dots, 5\}\)를 분할합니다. 나머지 대신 “같은 유리수 차이”를 쓰는 것이 이 문제의 관계입니다.`,en:String.raw`\(n = 2\): the finite prototype — the two classes \([0] = \{0, 2, 4\}\) and \([1] = \{1, 3, 5\}\) partition \(U = \{0, \dots, 5\}\). This problem's relation swaps "same remainder" for "same rational difference".`},proof:[{text:{ko:String.raw`(a) 반사: \(x - x = 0 \in \mathbb{Q}\)이므로 \(x \sim x\). 대칭: \(x - y \in \mathbb{Q}\)이면 \(y - x = -(x - y) \in \mathbb{Q}\)이므로 \(y \sim x\) (유리수는 부호를 바꿔도 유리수).

추이: \(x - y \in \mathbb{Q}\)이고 \(y - z \in \mathbb{Q}\)이면 \(x - z = (x - y) + (y - z) \in \mathbb{Q}\)이므로 \(x \sim z\) (유리수의 합은 유리수). 앞선 문제 1의 합동식 증명과 정확히 같은 골격이며, “나눗셈”이 “\(\mathbb{Q}\)의 원소”로 대체됐을 뿐입니다.`,en:String.raw`(a) Reflexive: \(x - x = 0 \in \mathbb{Q}\), so \(x \sim x\). Symmetric: if \(x - y \in \mathbb{Q}\) then \(y - x = -(x - y) \in \mathbb{Q}\), so \(y \sim x\) (rationals stay rational under negation).

Transitive: if \(x - y \in \mathbb{Q}\) and \(y - z \in \mathbb{Q}\) then \(x - z = (x - y) + (y - z) \in \mathbb{Q}\), so \(x \sim z\) (sums of rationals are rational). This is the same skeleton as the congruence proof in problem 1, with "divisibility" replaced by "membership in \(\mathbb{Q}\)".`}},{text:{ko:String.raw`(b) \([x] = \{y \in \mathbb{R} : y - x \in \mathbb{Q}\}\)이고 \(y = x + (y - x)\)라 두면 이 집합은 정확히 \(x + \mathbb{Q} = \{x + q : q \in \mathbb{Q}\}\) — 유리수 집합을 \(x\)만큼 통째로 평행이동한 복사본입니다. 유리수 차이만큼 떨어진 실수들은 서로 동일시되고, 분할 정리(문제 2)에 의해 이 이동된 복사본들이 \(\mathbb{R}\)을 겹침 없이 덮습니다.`,en:String.raw`(b) \([x] = \{y \in \mathbb{R} : y - x \in \mathbb{Q}\}\); writing \(y = x + (y - x)\) shows this set is exactly \(x + \mathbb{Q} = \{x + q : q \in \mathbb{Q}\}\) — a shifted copy of the rationals, translated by \(x\). Reals a rational distance apart are identified, and by the partition theorem (problem 2) these shifted copies tile \(\mathbb{R}\) without overlap.`}},{text:{ko:String.raw`(c) 각 동치류 \(x + \mathbb{Q}\)에서 대표원소 딱 하나를 골라 모은 집합이 비탈리 집합입니다. 그런데 동치류가 비가산히 많고 어느 하나도 “자연스러운” 대표원소가 없기 때문에, 이 선택은 선택 공리(the axiom of choice)를 필요로 합니다 — 규칙으로는 고를 수 없고, 공리가 존재만을 보장합니다. 적분 단원의 비탈리(vitali) 씬에서는 바로 이 집합이 르베그 가측(measure)이 아님을 보입니다.

대표원소는 \([0,1]\) 안에서 고릅니다 (모든 동치류 \(x + \mathbb{Q}\)는 \([0,1]\)와 만남) — 따라서 \(V \subseteq [0,1]\)입니다. \(q \in \mathbb{Q} \cap [-1,1]\)인 이동 \(V + q\)들은 서로소입니다: \((V + q_1) \cap (V + q_2) \ne \emptyset\)이면 두 대표원소의 차가 \(q_2 - q_1 \in \mathbb{Q}\)라 같은 동치류에 속해 둘이 같아야 하고, 따라서 \(q_1 = q_2\)입니다. 모든 이동은 평행이동 불변성에 의해 \(V\)와 측도가 같고, 합집합은 \([0,1]\)를 덮으며 (각 \(x \in [0,1]\)는 그 대표원소와 \(|q| \le 1\)인 유리수 \(q\)만큼 차이 남), \([-1, 2]\) 안에 들어갑니다.

\(V\)가 가측이고 \(m(V) = 0\)이면 가산합집합의 측도가 \(0\)이라 \([0,1]\)를 덮는다는 데 모순이고, \(m(V) > 0\)이면 \([-1, 2]\) 안의 합집합 측도가 무한대가 되어 모순입니다. 따라서 \(V\)는 가측이 아닙니다.`,en:String.raw`(c) Choosing exactly one representative from each class \(x + \mathbb{Q}\) and collecting them produces a Vitali set. But there are uncountably many classes and none has a "natural" representative, so this choice requires the axiom of choice — no rule can make the picks; the axiom only guarantees existence. In the integration chapter's vitali scene, this very set is shown not to be Lebesgue measurable.

Take the representatives in \([0,1]\) (every class \(x + \mathbb{Q}\) meets \([0,1]\)), so \(V \subseteq [0,1]\). The translates \(V + q\) for \(q \in \mathbb{Q} \cap [-1,1]\) are pairwise disjoint: if \((V + q_1) \cap (V + q_2) \ne \emptyset\) then two representatives differ by \(q_2 - q_1 \in \mathbb{Q}\), hence lie in the same class, hence are equal, so \(q_1 = q_2\). They all have the same measure as \(V\) (translation invariance), they cover \([0,1]\) (each \(x \in [0,1]\) differs from its representative by a rational \(q\) with \(|q| \le 1\)), and their union lies in \([-1, 2]\).

If \(V\) were measurable with \(m(V) = 0\), the countable union would have measure \(0\), contradicting that it covers \([0,1]\); if \(m(V) > 0\), the union inside \([-1, 2]\) would have infinite measure, again a contradiction. Hence \(V\) is not measurable.`}}]}],"function-proofs":[{id:`function-proofs-injective-implies`,statement:{ko:String.raw`\(g \circ f\)가 단사(injective)라면 \(f\)도 단사임을 완전히 증명하세요.

그리고 씬의 injective-chain 예제(\(f = [0,1]\), \(g = [0,1,0]\))를 이용해, 이 가정이 \(g\) 자체에 대해서는 아무것도 보장하지 않음(\(g(0) = g(2) = 0\))을 확인하세요.`,en:String.raw`Prove completely that if \(g \circ f\) is injective then \(f\) is injective.

Then use the scene's injective-chain tables (\(f = [0,1]\), \(g = [0,1,0]\)) to confirm that this hypothesis guarantees nothing about \(g\) itself (\(g(0) = g(2) = 0\)).`},display:[String.raw`f(a_1) = f(a_2) \;\Rightarrow\; g(f(a_1)) = g(f(a_2)) \;\Rightarrow\; a_1 = a_2`,String.raw`g \circ f = [0, 1] \text{ injective},\quad g(0) = g(2) = 0 \;\Rightarrow\; g \text{ not injective}`],preset:{example:`injective-chain`},presetCaption:{ko:String.raw`injective-chain: \(A = [0,1]\), \(B = [0,1,2]\), \(C = [0,1]\), \(f = [0,1]\), \(g = [0,1,0]\), 합성 \(g \circ f = [0,1]\) (단사). \(f\) 단사 ✓, \(g\) 단사 ✗.`,en:String.raw`injective-chain: \(A = [0,1]\), \(B = [0,1,2]\), \(C = [0,1]\), \(f = [0,1]\), \(g = [0,1,0]\), composition \(g \circ f = [0,1]\) (injective). \(f\) injective ✓, \(g\) injective ✗.`},proof:[{text:{ko:String.raw`\(f(a_1) = f(a_2)\)라 가정하세요.

양변에 \(g\)를 적용하면 \((g \circ f)(a_1) = g(f(a_1)) = g(f(a_2)) = (g \circ f)(a_2)\)입니다.

가정에 의해 \(g \circ f\)는 단사이므로 \(a_1 = a_2\) — 따라서 \(f\)는 단사입니다.

그림으로는: 합성 화살표 끝에서 시작점을 유일하게 복원할 수 있다면, 앞쪽 화살표도 시작점을 유일하게 복원합니다.`,en:String.raw`Assume \(f(a_1) = f(a_2)\).

Applying \(g\) to both sides gives \((g \circ f)(a_1) = g(f(a_1)) = g(f(a_2)) = (g \circ f)(a_2)\).

By hypothesis \(g \circ f\) is injective, so \(a_1 = a_2\) — hence \(f\) is injective.

In the picture: if the composite arrows recover the starting point uniquely, so do the first-stage arrows.`}},{text:{ko:String.raw`역은 성립하지 않습니다: 씬의 표에서는 \(g \circ f = [0,1]\)이 단사이고 \(f = [0,1]\)도 단사이지만, \(g = [0,1,0]\)은 \(g(0) = g(2) = 0\)을 만족하므로 단사가 아닙니다. 뒷쪽 함수 \(g\)는 앞쪽 함수 \(f\)의 치역 밖에서 마음대로 충돌해도 합성의 단사성에는 영향을 주지 않습니다 (이 예제에서 \(2 \in B\)는 \(f\)의 치역에 들어가지 않습니다).`,en:String.raw`The converse fails: in the scene's tables, \(g \circ f = [0,1]\) is injective and \(f = [0,1]\) is injective, yet \(g = [0,1,0]\) satisfies \(g(0) = g(2) = 0\) and is not injective. The later map \(g\) may collide freely outside the image of \(f\) without affecting the composite's injectivity (here \(2 \in B\) lies outside the image of \(f\)).`}}]},{id:`function-proofs-bijective-inverse-order`,statement:{ko:String.raw`\(f\)와 \(g\)가 모두 전단사(bijective)라면 \(g \circ f\)도 전단사고 \((g \circ f)^{-1} = f^{-1} \circ g^{-1}\)임을, 결합법칙을 써서 양쪽 곱이 항등함수가 됨을 보이는 방식으로 완전히 증명하세요.

씬의 bijective 표에서 \(g \circ f\)가 항등함수가 되는 것도 직접 확인하세요.`,en:String.raw`Prove completely that if \(f\) and \(g\) are both bijective then \(g \circ f\) is bijective and \((g \circ f)^{-1} = f^{-1} \circ g^{-1}\), using associativity to show both products are the identity.

Also verify directly on the scene's bijective tables that \(g \circ f\) comes out as the identity.`},display:[String.raw`(f^{-1} \circ g^{-1}) \circ (g \circ f) = f^{-1} \circ (g^{-1} \circ g) \circ f = \mathrm{id}`,String.raw`(g \circ f) \circ (f^{-1} \circ g^{-1}) = g \circ (f \circ f^{-1}) \circ g^{-1} = \mathrm{id}`],preset:{example:`bijective`},presetCaption:{ko:String.raw`bijective: \(A = B = C = [0,1,2]\), \(f = [1,2,0]\), \(g = [2,0,1]\), 합성 \(g \circ f = [g(1), g(2), g(0)] = [0,1,2]\) (항등함수). \(f^{-1} = [2,0,1]\), \(g^{-1} = [1,2,0]\).`,en:String.raw`bijective: \(A = B = C = [0,1,2]\), \(f = [1,2,0]\), \(g = [2,0,1]\), composition \(g \circ f = [g(1), g(2), g(0)] = [0,1,2]\) (the identity). \(f^{-1} = [2,0,1]\), \(g^{-1} = [1,2,0]\).`},proof:[{text:{ko:String.raw`먼저 \((f^{-1} \circ g^{-1}) \circ (g \circ f)\)를 결합법칙으로 다시 묶습니다: \((f^{-1} \circ g^{-1}) \circ (g \circ f) = f^{-1} \circ (g^{-1} \circ g) \circ f\). \(g\)는 전단사이므로 \(g^{-1} \circ g = \mathrm{id}_{B}\)이고, \(f\)는 전단사이므로 \(f^{-1} \circ \mathrm{id}_{B} \circ f = f^{-1} \circ f = \mathrm{id}_{A}\) — 좌역함수입니다.`,en:String.raw`First regroup \((f^{-1} \circ g^{-1}) \circ (g \circ f)\) by associativity: \((f^{-1} \circ g^{-1}) \circ (g \circ f) = f^{-1} \circ (g^{-1} \circ g) \circ f\). Since \(g\) is bijective, \(g^{-1} \circ g = \mathrm{id}_{B}\), and since \(f\) is bijective, \(f^{-1} \circ \mathrm{id}_{B} \circ f = f^{-1} \circ f = \mathrm{id}_{A}\) — a left inverse.`}},{text:{ko:String.raw`반대 방향도 마찬가지입니다: \((g \circ f) \circ (f^{-1} \circ g^{-1}) = g \circ (f \circ f^{-1}) \circ g^{-1} = g \circ \mathrm{id}_{B} \circ g^{-1} = \mathrm{id}_{C}\) — 우역함수입니다. 좌역함수와 우역함수를 모두 가지므로 \(g \circ f\)는 전단사이고 그 역함수는 \(f^{-1} \circ g^{-1}\)입니다 (역함수의 유일성).`,en:String.raw`The other direction is the same: \((g \circ f) \circ (f^{-1} \circ g^{-1}) = g \circ (f \circ f^{-1}) \circ g^{-1} = g \circ \mathrm{id}_{B} \circ g^{-1} = \mathrm{id}_{C}\) — a right inverse. Having both a left and a right inverse makes \(g \circ f\) bijective with inverse \(f^{-1} \circ g^{-1}\) (uniqueness of inverses).`}},{text:{ko:String.raw`씬의 표에서 직접 확인: \(f = [1,2,0]\), \(g = [2,0,1]\)이면 \((g \circ f)(0) = g(f(0)) = g(1) = 0\), \((g \circ f)(1) = g(2) = 1\), \((g \circ f)(2) = g(0) = 2\)이므로 \(g \circ f = [0,1,2]\) — 항등함수입니다. 역표 \(f^{-1} = [2,0,1]\), \(g^{-1} = [1,2,0]\)에 대해서도 같은 합성을 계산하면 \((f^{-1} \circ g^{-1})(0) = f^{-1}(g^{-1}(0)) = f^{-1}(1) = 0\), \((1)\)에서 \(f^{-1}(2) = 1\), \((2)\)에서 \(f^{-1}(0) = 2\) — 역시 \([0,1,2]\)이며 \((g \circ f)^{-1} = f^{-1} \circ g^{-1}\)을 모델의 brute-force 검증으로 뒷받침합니다.`,en:String.raw`Direct check on the scene's tables: with \(f = [1,2,0]\) and \(g = [2,0,1]\), \((g \circ f)(0) = g(f(0)) = g(1) = 0\), \((g \circ f)(1) = g(2) = 1\), \((g \circ f)(2) = g(0) = 2\), so \(g \circ f = [0,1,2]\) — the identity. For the inverse tables \(f^{-1} = [2,0,1]\), \(g^{-1} = [1,2,0]\): \((f^{-1} \circ g^{-1})(0) = f^{-1}(g^{-1}(0)) = f^{-1}(1) = 0\), then \(f^{-1}(2) = 1\) at \((1)\) and \(f^{-1}(0) = 2\) at \((2)\) — again \([0,1,2]\), matching \((g \circ f)^{-1} = f^{-1} \circ g^{-1}\) as verified by brute force in the model.`}}]},{id:`function-proofs-surjective-implies`,statement:{ko:String.raw`\(g \circ f\)가 전사(surjective)라면 \(g\)도 전사임을 완전히 증명하세요.

그리고 씬의 surjective-chain 표(\(f = [0,1]\), \(g = [0,1,0]\), \(B = [0,1,2]\))에서 \(f\)는 전사가 아니면서(\(2\)를 놓침) 합성 \(g \circ f = [0,1]\)이 \(C\)를 온전히 덮는 이유를 표로 확인하세요.`,en:String.raw`Prove completely that if \(g \circ f\) is surjective then \(g\) is surjective.

Then use the scene's surjective-chain tables (\(f = [0,1]\), \(g = [0,1,0]\), \(B = [0,1,2]\)) to check why \(f\) fails to be surjective (it misses \(2\)) while the composition \(g \circ f = [0,1]\) still covers all of \(C\).`},display:[String.raw`c \in C \;\Rightarrow\; \exists a: g(f(a)) = c \;\Rightarrow\; b = f(a) \text{ has } g(b) = c`,String.raw`g \circ f = [0, 1] \text{ surjective onto } C,\quad 2 \notin f(A) \;\Rightarrow\; f \text{ not surjective}`],preset:{example:`surjective-chain`},presetCaption:{ko:String.raw`surjective-chain: \(A = [0,1]\), \(B = [0,1,2]\), \(C = [0,1]\), \(f = [0,1]\) (\(2\)를 놓침 — 전사 아님), \(g = [0,1,0]\) (전사 ✓), 합성 \(g \circ f = [0,1]\) (전사 ✓).`,en:String.raw`surjective-chain: \(A = [0,1]\), \(B = [0,1,2]\), \(C = [0,1]\), \(f = [0,1]\) (misses \(2\) — not surjective), \(g = [0,1,0]\) (surjective ✓), composition \(g \circ f = [0,1]\) (surjective ✓).`},proof:[{text:{ko:String.raw`\(c \in C\)를 임의로 잡으세요.

\(g \circ f\)가 전사이므로 \(g(f(a)) = c\)인 \(a \in A\)가 존재합니다.

이제 \(b = f(a) \in B\)로 두면 \(g(b) = g(f(a)) = c\) — \(c\)의 \(g\)-역원소가 존재하므로 \(g\)는 전사입니다.

그림으로는: 합성 화살표가 \(C\)의 모든 점을 맞히면, 뒷쪽 화살표도 모든 점을 맞혀야 합니다.`,en:String.raw`Take any \(c \in C\).

Since \(g \circ f\) is surjective, there is \(a \in A\) with \(g(f(a)) = c\).

Setting \(b = f(a) \in B\) gives \(g(b) = g(f(a)) = c\) — so \(c\) has a \(g\)-preimage, and \(g\) is surjective.

In the picture: if the composite arrows hit every point of \(C\), the later arrows must too.`}},{text:{ko:String.raw`앞쪽 함수 \(f\)는 전사일 필요가 없습니다: 이 예제에서 \(f = [0,1]\)은 \(B\)의 원소 \(2\)를 놓치므로 전사가 아니지만, \(g = [0,1,0]\)이 \(g(0) = 0\), \(g(1) = 1\)로 \(C\)의 양쪽 원소를 모두 맞히기 때문에 합성 \(g \circ f = [0,1]\)은 전사입니다. \(g\)가 \(f\)의 치역 밖에서 추가로 뭘 하는지는 합성에 아무 영향이 없습니다 (여기서 \(g(2) = 0\)).`,en:String.raw`The first map \(f\) need not be surjective: in this example \(f = [0,1]\) misses the element \(2\) of \(B\) and is not surjective, yet \(g = [0,1,0]\) hits both elements of \(C\) via \(g(0) = 0\), \(g(1) = 1\), so the composition \(g \circ f = [0,1]\) is surjective. Whatever \(g\) does outside the image of \(f\) is invisible to the composition (here \(g(2) = 0\)).`}}]}]};export{e as problemsByScene};