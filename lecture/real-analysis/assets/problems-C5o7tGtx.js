var e=[{id:`baire-proof`,statement:{ko:String.raw`Baire Category Theorem을 증명하세요: 완비 거리공간 \(X\)가 nowhere dense인 집합들의 가산합집합 \(X = \bigcup_{n=1}^{\infty} E_n\)으로 표현되는 것은 불가능합니다.

즉 완비 거리공간은 자기 자신 안에서 meagre(제1 범주)가 될 수 없습니다.`,en:String.raw`Prove the Baire Category Theorem: a complete metric space \(X\) cannot be written as a countable union \(X = \bigcup_{n=1}^{\infty} E_n\) of nowhere dense sets.

In other words, a complete metric space is not meagre (first-category) in itself.`},display:[String.raw`X = \bigcup_{n=1}^{\infty} E_n, \qquad \operatorname{int}(\overline{E_n}) = \varnothing \ \ \forall n`,String.raw`\overline{B}(x_{k+1}, r_{k+1}) \subseteq B(x_k, r_k) \setminus \overline{E_{k+1}}, \qquad 0 < r_{k+1} < r_k/2`],preset:{stage:6},presetCaption:{ko:String.raw`stage 6: \(I_6 = [0.75,\, 0.8125]\), 생존자 \(x \approx 0.78125\) — \(q_1 = 0\), \(q_2 = 1\)을 구간 안에서 회피했고, 나머지는 이미 밖에 있었습니다. 이 중첩 닫힌구간들이 증명의 중첩 닫힌공 \(\overline{B}(x_k, r_k)\)에 해당합니다.`,en:String.raw`stage 6: \(I_6 = [0.75,\, 0.8125]\), survivor \(x \approx 0.78125\) — dodged \(q_1 = 0\), \(q_2 = 1\) inside the interval; the rest already lay outside. These nested closed intervals are the proof's nested closed balls \(\overline{B}(x_k, r_k)\).`},proof:[{text:{ko:String.raw`먼저 \(X \ne \varnothing\)라고 가정합니다 — \(X = \varnothing\)이면 \(X = \bigcup_n \varnothing\)로 빈 공간은 자기 안에서 meagre하므로, 비어 있지 않음이 정리에서 필수입니다.

\(E_1\)이 nowhere dense이므로 \(\operatorname{int}(\overline{E_1}) = \varnothing\)이고, \(U_1 = X \setminus \overline{E_1}\)은 비어 있지 않은 열린집합입니다 (\(U_1 = \varnothing\)이면 \(\overline{E_1} = X\)라 \(\operatorname{int}(\overline{E_1}) = X \ne \varnothing\)가 되기 때문입니다).

\(x_1 \in U_1\)을 잡으면 \(B(x_1, \rho) \subseteq U_1\)인 \(\rho > 0\)이 있고, \(r_1 = \min(\rho/2, 1/2)\)로 두면 닫힌공 \(\overline{B}(x_1, r_1) \subseteq U_1\)이며 \(r_1 < 1\)입니다.`,en:String.raw`Assume first that \(X \ne \varnothing\) — if \(X = \varnothing\) then \(X = \bigcup_n \varnothing\), so the empty space is meagre in itself and nonemptiness is essential to the theorem.

Since \(E_1\) is nowhere dense, \(\operatorname{int}(\overline{E_1}) = \varnothing\), so \(U_1 = X \setminus \overline{E_1}\) is a nonempty open set (if \(U_1 = \varnothing\) then \(\overline{E_1} = X\), giving \(\operatorname{int}(\overline{E_1}) = X \ne \varnothing\)).

Pick \(x_1 \in U_1\); some \(\rho > 0\) has \(B(x_1, \rho) \subseteq U_1\), and with \(r_1 = \min(\rho/2, 1/2)\) the closed ball \(\overline{B}(x_1, r_1) \subseteq U_1\) with \(r_1 < 1\).`}},{text:{ko:String.raw`귀납적으로 \(\overline{B}(x_k, r_k)\)가 잡혔다고 하자.

\(V = B(x_k, r_k) \setminus \overline{E_{k+1}}\)은 비어 있지 않은 열린집합입니다: \(B(x_k, r_k)\)가 비어 있지 않은 열린집합인데, 만약 \(B(x_k, r_k) \subseteq \overline{E_{k+1}}\)이라면 \(B(x_k, r_k) \subseteq \operatorname{int}(\overline{E_{k+1}}) = \varnothing\)이 되어 모순이기 때문입니다.

\(x_{k+1} \in V\)를 잡고 반지름을 \(r_k/2\)보다 작게, 그리고 \(V\) 안에 닫힌공이 들어가도록 줄이면 \(\overline{B}(x_{k+1}, r_{k+1}) \subseteq B(x_k, r_k) \setminus \overline{E_{k+1}}\), \(0 < r_{k+1} < r_k/2\)를 얻습니다.`,en:String.raw`Inductively, suppose \(\overline{B}(x_k, r_k)\) is chosen.

Then \(V = B(x_k, r_k) \setminus \overline{E_{k+1}}\) is a nonempty open set: \(B(x_k, r_k)\) is nonempty open, and \(B(x_k, r_k) \subseteq \overline{E_{k+1}}\) would give \(B(x_k, r_k) \subseteq \operatorname{int}(\overline{E_{k+1}}) = \varnothing\), a contradiction.

Pick \(x_{k+1} \in V\) and shrink the radius below \(r_k/2\) so the closed ball fits in \(V\): \(\overline{B}(x_{k+1}, r_{k+1}) \subseteq B(x_k, r_k) \setminus \overline{E_{k+1}}\) with \(0 < r_{k+1} < r_k/2\).`}},{text:{ko:String.raw`수열 \((x_k)\)는 Cauchy입니다: \(m > k\)이면 \(x_m \in \overline{B}(x_{k+1}, r_{k+1}) \subseteq B(x_k, r_k)\)이므로 \(d(x_k, x_m) < r_k\)이고, \(r_k \le 2^{-(k-1)} r_1 \to 0\)이기 때문입니다 (\(k = 1\)에서는 등호이고, \(k \ge 2\)에서는 \(r_{j+1} < r_j/2\)를 반복 적용해 엄격한 부등식을 얻습니다). \(X\)가 완비이므로 \(x_k \to x \in X\)인 극한이 존재합니다.`,en:String.raw`The sequence \((x_k)\) is Cauchy: for \(m > k\), \(x_m \in \overline{B}(x_{k+1}, r_{k+1}) \subseteq B(x_k, r_k)\), so \(d(x_k, x_m) < r_k\), and \(r_k \le 2^{-(k-1)} r_1 \to 0\) (equality at \(k = 1\); for \(k \ge 2\) iterating \(r_{j+1} < r_j/2\) gives the strict inequality). Completeness of \(X\) gives a limit \(x_k \to x \in X\).`}},{text:{ko:String.raw`고정된 \(k\)에 대해 꼬리 \((x_m)_{m \ge k}\)는 닫힌집합 \(\overline{B}(x_k, r_k)\) 안에 있으므로 극한 \(x \in \overline{B}(x_k, r_k)\)입니다. 따라서 모든 \(k\)에 대해 \(x \in \bigcap_k \overline{B}(x_k, r_k)\)이고, \(x \in \overline{B}(x_1, r_1) \subseteq X \setminus \overline{E_1}\)이며 \(j \ge 2\)에 대해 \(x \in \overline{B}(x_j, r_j) \subseteq B(x_{j-1}, r_{j-1}) \setminus \overline{E_j}\)이므로, \(x \notin E_j\)가 모든 \(j\)에 대해 성립합니다.`,en:String.raw`For fixed \(k\), the tail \((x_m)_{m \ge k}\) lies in the closed set \(\overline{B}(x_k, r_k)\), so the limit \(x \in \overline{B}(x_k, r_k)\). Hence \(x \in \bigcap_k \overline{B}(x_k, r_k)\) for all \(k\); with \(x \in \overline{B}(x_1, r_1) \subseteq X \setminus \overline{E_1}\) and, for \(j \ge 2\), \(x \in \overline{B}(x_j, r_j) \subseteq B(x_{j-1}, r_{j-1}) \setminus \overline{E_j}\), we get \(x \notin E_j\) for every \(j\).`}},{text:{ko:String.raw`그런데 \(x \in X = \bigcup_j E_j\)이므로 어떤 \(j\)에 대해 \(x \in E_j\)이어야 합니다 — 모순입니다.

따라서 완비 거리공간은 nowhere dense 집합들의 가산합집합이 될 수 없습니다.

직관: nowhere dense 집합은 "구멍"을 남기고, 완비성은 그 구멍들을 따라 내려간 극한점을 공간 안에 붙잡아 둡니다.`,en:String.raw`But \(x \in X = \bigcup_j E_j\), so \(x \in E_j\) for some \(j\) — a contradiction.

Hence a complete metric space cannot be a countable union of nowhere dense sets.

The intuition: each nowhere dense set leaves a "hole", and completeness traps the limit point obtained by descending through those holes inside the space.`}}]},{id:`irrationals`,statement:{ko:String.raw`모델의 중첩구간을 이용해 \([0, 1]\) 안에 무리수가 존재함을 증명하세요: \([0, 1]\)의 유리수를 \(q_1, q_2, \dots\)로 열거하고 각 단계에서 구간 안에 들어온 \(q_k\)를 피하는 닫힌구간 \(I_k\)를 잡습니다.

길이 \(\ell_k = b_k - a_k \to 0\)임을 보이고 (유리수가 조밀하다는 것을 이용), \(\bigcap_k I_k = \{x\}\)인 점 \(x\)가 모든 \(q_k\)와 다름을 보이세요.`,en:String.raw`Use the model's nested intervals to prove an irrational exists in \([0, 1]\): enumerate the rationals of \([0, 1]\) as \(q_1, q_2, \dots\) and at each stage take a closed interval \(I_k\) dodging \(q_k\) whenever it lands inside.

Show the lengths \(\ell_k = b_k - a_k \to 0\) (using density of the rationals), and that the point \(x\) with \(\bigcap_k I_k = \{x\}\) differs from every \(q_k\).`},display:[String.raw`q_k \in I_{k-1} \ \Longrightarrow \ \ell_k = \ell_{k-1}/4, \quad q_k \notin I_k`,String.raw`\ell_k \to 0, \qquad \bigcap_{k=1}^{\infty} I_k = \{x\}, \qquad x \ne q_k \ \forall k`],preset:{stage:14},presetCaption:{ko:String.raw`stage 14: \(I_{14} = [0.80859375,\, 0.8125]\) (길이 \(1/256\)), 생존자 \(x \approx 0.810546875\) — \(q_1 = 0\), \(q_2 = 1\), \(q_7 = 3/4\), \(q_{11} = 4/5\)를 구간 안에서 회피했고, \(x\)는 열거된 14개의 유리수 모두와 다릅니다.`,en:String.raw`stage 14: \(I_{14} = [0.80859375,\, 0.8125]\) (length \(1/256\)), survivor \(x \approx 0.810546875\) — dodged \(q_1 = 0\), \(q_2 = 1\), \(q_7 = 3/4\), \(q_{11} = 4/5\) inside the interval; \(x\) differs from all 14 rationals listed.`},proof:[{text:{ko:String.raw`구성에 의해 각 \(I_k\)는 닫힌구간이고 \(I_{k+1} \subseteq I_k\)이며, \(q_k\)가 \(I_{k-1}\) 안에 들어오면 길이가 \(1/4\)로 줄어드는 \(I_k\)를 잡아 \(q_k \notin I_k\)가 됩니다 (\(q_k\)가 이미 밖에 있으면 \(I_k = I_{k-1}\)).`,en:String.raw`By construction each \(I_k\) is a closed interval with \(I_{k+1} \subseteq I_k\); when \(q_k\) lands in \(I_{k-1}\) we take \(I_k\) of one-quarter the length with \(q_k \notin I_k\) (if \(q_k\) already lies outside, \(I_k = I_{k-1}\)).`}},{text:{ko:String.raw`길이가 \(0\)으로 수렴함을 보입니다.

단계 \(K\) 이후로 더 이상 "적중"이 없다고 가정하면, \(n \ge K\)인 모든 \(n\)에 대해 \(I_n = I_K\)이고 길이는 양수로 고정됩니다.

그런데 \(I_K\)는 양의 길이를 가지므로 유리수를 무한히 많이 포함하고, 각 유리수는 열거에서 정확히 한 번씩 등장하므로, \(m > K\)이면서 \(q_m \in I_K\)인 \(m\)이 존재합니다.

그러면 \(I_{m-1} = I_K \ni q_m\)이므로 단계 \(m\)은 적중 — 모순입니다.

따라서 적중은 무한히 많이 일어나고, 매번 길이가 \(1/4\)이 되므로 \(\ell_k \to 0\)입니다.`,en:String.raw`The lengths tend to \(0\).

Suppose no more "hits" occur after stage \(K\); then \(I_n = I_K\) for all \(n \ge K\) and the length stays positive.

But \(I_K\) has positive length, so it contains infinitely many rationals, each appearing exactly once in the enumeration — hence some \(q_m \in I_K\) has index \(m > K\).

Then \(I_{m-1} = I_K \ni q_m\), so stage \(m\) is a hit — a contradiction.

Hits therefore occur infinitely often, and each one quarters the length, so \(\ell_k \to 0\).`}},{text:{ko:String.raw`\(\mathbb{R}\)의 완비성에 의해 (중첩구간 정리), 길이가 \(0\)으로 가는 중첩 닫힌구간들의 교집합은 정확히 한 점입니다: \(\bigcap_k I_k = \{x\}\). 그리고 \(x \in I_k\)이면서 \(q_k \notin I_k\)이므로, \(x \ne q_k\)가 모든 \(k\)에 대해 성립합니다.`,en:String.raw`By completeness of \(\mathbb{R}\) (the nested interval theorem), nested closed intervals whose lengths tend to \(0\) intersect in exactly one point: \(\bigcap_k I_k = \{x\}\). And since \(x \in I_k\) while \(q_k \notin I_k\), we have \(x \ne q_k\) for every \(k\).`}},{text:{ko:String.raw`\(\{q_k\}\)는 \([0, 1]\)의 모든 유리수를 열거하므로, \(x\)는 \([0, 1]\) 안의 무리수입니다.

따라서 \([0, 1] = \bigcup_k \{q_k\}\) — 점들의 가산합집합 — 일 수 없고, \([0, 1]\)은 비가산입니다.

이것이 Baire 정리의 한 점 버전(point-set version)입니다: 한 점짜리 집합은 \(\mathbb{R}\)에서 nowhere dense이므로, 완비인 \([0, 1]\)이 점들의 가산합집합이면 Baire 정리에 모순됩니다.`,en:String.raw`Since \(\{q_k\}\) enumerates every rational of \([0, 1]\), \(x\) is an irrational in \([0, 1]\).

Hence \([0, 1] = \bigcup_k \{q_k\}\) — a countable union of points — is impossible, and \([0, 1]\) is uncountable.

This is the point-set version of Baire's theorem: a singleton is nowhere dense in \(\mathbb{R}\), so \([0, 1]\), being complete, cannot be a countable union of points without contradicting Baire.`}}]},{id:`typical-nondiff`,statement:{ko:String.raw`[아이디어 스케치 — 완전한 증명이 아닙니다] \(C[0, 1]\)에 sup norm \(\|f\|_\infty\)를 주면 완비 거리공간이 됩니다.

\(m \ge 1\)에 대해 \(F_m = \{f : \exists x\ \forall y\ |f(x) - f(y)| \le m|x-y|\}\)라 두세요.

각 \(F_m\)이 closed nowhere dense임(스케치)을 이용해, "어느 점에서도 미분 가능하지 않은 함수가 typical하다" — 즉 comeager — 는 아이디어를 설명하세요.

아래의 closed/nowhere dense 검증은 스케치이며, 완전히 증명하지 않습니다.`,en:String.raw`[Idea-level sketch — not a complete proof] \(C[0, 1]\) with the sup norm \(\|f\|_\infty\) is a complete metric space.

For \(m \ge 1\) let \(F_m = \{f : \exists x\ \forall y\ |f(x) - f(y)| \le m|x-y|\}\).

Using that each \(F_m\) is closed nowhere dense (sketch), explain the idea that "nowhere-differentiable functions are typical" — i.e. comeager.

The closed/nowhere-dense verifications below are sketched, not fully proved here.`},display:[String.raw`F_m = \{f \in C[0,1] : \exists x\ \forall y\ |f(x) - f(y)| \le m|x-y|\}`,String.raw`\text{differentiable somewhere} \subseteq \bigcup_{m=1}^{\infty} F_m \quad \text{(meagre)}`],preset:{stage:10},presetCaption:{ko:String.raw`stage 10: \(I_{10} = [0.796875,\, 0.8125]\), 생존자 \(x \approx 0.8046875\) — 세 번의 축소로 \(q_1\), \(q_2\), \(q_7\)을 구간 안에서 회피했습니다. 같은 중첩공 아이디어를 \(C[0, 1]\)에 적용하면 미분 불가능한 함수가 typical해집니다.`,en:String.raw`stage 10: \(I_{10} = [0.796875,\, 0.8125]\), survivor \(x \approx 0.8046875\) — three shrinkings dodged \(q_1\), \(q_2\), \(q_7\) inside. The same nested-ball idea, applied in \(C[0,1]\), makes nowhere-differentiable functions typical.`},isHint:!0,proof:[{text:{ko:String.raw`[스케치] \(F_m\)은 닫힌집합입니다.

\(f_j \in F_m\)이 \(f_j \to f\) (uniformly)이고 각 \(f_j\)의 witness가 \(x_j\) — 즉 \(|f_j(x_j) - f_j(y)| \le m|x_j - y|\) — 라 하자.

Bolzano–Weierstrass로 부분수열 \(x_{j'} \to x\)를 잡으면, 부등식을 극한으로 넘겨 \(|f(x) - f(y)| \le m|x - y|\)를 얻으므로 \(f \in F_m\)입니다.`,en:String.raw`[Sketch] \(F_m\) is closed. If \(f_j \in F_m\) with \(f_j \to f\) uniformly, witnessed by \(x_j\) — i.e. \(|f_j(x_j) - f_j(y)| \le m|x_j - y|\) — pass to a convergent subsequence \(x_{j'} \to x\) (Bolzano–Weierstrass); the estimate survives the limit as \(|f(x) - f(y)| \le m|x - y|\), so \(f \in F_m\).`}},{text:{ko:String.raw`[스케치] \(F_m\)은 nowhere dense입니다.

\(f \in F_m\)와 \(\varepsilon > 0\)가 주어지면, 먼저 \(f\)를 \(\varepsilon/2\) 이내에서 piecewise-linear \(p\)로 근사하고(uniform continuity), 그 위에 진폭 \(<\varepsilon/2\)이면서 기울기가 \(p\)의 기울기보다 \(m\) 이상 큰 미세한 톱니파(zigzag)를 얹습니다.

그러면 어떤 후보점 \(x\)에서도 근처의 톱니 하나가 \(m\)-Lipschitz bound를 깨뜨리므로, 섭동된 \(g\)는 \(F_m\)에 속하지 않으면서 \(\|g - f\|_\infty < \varepsilon\)입니다.

닫힌집합이므로 내부는 비어 있습니다.`,en:String.raw`[Sketch] \(F_m\) is nowhere dense.

Given \(f \in F_m\) and \(\varepsilon > 0\), first approximate \(f\) within \(\varepsilon/2\) by a piecewise-linear \(p\) (uniform continuity), then superimpose a fine zigzag of amplitude \(<\varepsilon/2\) whose slopes exceed those of \(p\) by more than \(m\).

At every candidate point \(x\), a nearby tooth of the zigzag breaks the \(m\)-Lipschitz bound, so the perturbed \(g \notin F_m\) while \(\|g - f\|_\infty < \varepsilon\).

Being closed, \(F_m\) has empty interior.`}},{text:{ko:String.raw`어느 점에서든 미분 가능한 함수는 \(\bigcup_m F_m\)에 속합니다.

\(f'(x_0)\)이 존재하면, \(|y - x_0| < \delta\)에서는 \(|f(y) - f(x_0)| \le m_1|y - x_0|\) (\(m_1 \ge |f'(x_0)| + 1\))이고, \(|y - x_0| \ge \delta\)인 먼 점에서는 유계성으로 \(|f(y) - f(x_0)| \le 2\|f\|_\infty \le \frac{2\|f\|_\infty}{\delta}|y - x_0|\)입니다.

정수 \(m \ge \max(m_1, 2\|f\|_\infty/\delta)\)를 잡으면 모든 \(y\)에 대해 \(|f(y) - f(x_0)| \le m|y - x_0|\) — 즉 \(f \in F_m\)입니다.`,en:String.raw`A function differentiable at even one point lies in \(\bigcup_m F_m\). If \(f'(x_0)\) exists, then \(|f(y) - f(x_0)| \le m_1|y - x_0|\) for \(|y - x_0| < \delta\) (take \(m_1 \ge |f'(x_0)| + 1\)), while for far points \(|y - x_0| \ge \delta\) boundedness gives \(|f(y) - f(x_0)| \le 2\|f\|_\infty \le \frac{2\|f\|_\infty}{\delta}|y - x_0|\). With an integer \(m \ge \max(m_1, 2\|f\|_\infty/\delta)\) we get \(|f(y) - f(x_0)| \le m|y - x_0|\) for all \(y\) — i.e. \(f \in F_m\).`}},{text:{ko:String.raw`따라서 "어느 점에서든 미분 가능한 함수들" \(\subseteq \bigcup_{m=1}^{\infty} F_m\)은 nowhere dense 집합들의 가산합집합 — meagre입니다.

그 여집합인 "어디서도 미분 가능하지 않은 함수들"은 comeager이며, Baire 정리(문제 1)에 의해 비어 있지 않을 뿐 아니라 조밀합니다.

다시 강조합니다: 위의 closed/nowhere dense 검증은 아이디어 스케치이며, 완전한 증명은 여기서 다루지 않습니다.`,en:String.raw`Hence "functions differentiable somewhere" \(\subseteq \bigcup_{m=1}^{\infty} F_m\) is a countable union of nowhere dense sets — meagre.

Its complement, the nowhere-differentiable functions, is comeager, and by Baire (problem 1) it is not just nonempty but dense.

To stress again: the closed/nowhere-dense verifications above are idea-level sketches, not complete proofs.`}}]}],t=[{id:`thomae-approximants`,statement:{ko:String.raw`\(n \ge 2\)에 대해 \(f_n(x) = \sum \frac{1}{q}\,\mathrm{tri}(n^3(x - p/q))\)라 두세요.

합은 \(1 \le q \le n\), \(0 \le p \le q\), \(\gcd(p,q) = 1\)인 기약분수들에 대해서만 취하고, \(\mathrm{tri}(t) = \max(0, 1 - |t|)\)입니다.

각 \(f_n\)이 \([0, 1]\)에서 연속이고, Thomae 함수 \(T\) (기약분수 \(p/q\)에서 \(1/q\), 무리수에서 \(0\), \(T(0) = T(1) = 1\))로 점별수렴 \(f_n(x) \to T(x)\) 함을 증명하세요.`,en:String.raw`For \(n \ge 2\) let \(f_n(x) = \sum \frac{1}{q}\,\mathrm{tri}(n^3(x - p/q))\), summed over reduced fractions with \(1 \le q \le n\), \(0 \le p \le q\), \(\gcd(p,q) = 1\), where \(\mathrm{tri}(t) = \max(0, 1 - |t|)\).

Prove each \(f_n\) is continuous on \([0, 1]\) and converges pointwise to Thomae's function \(T\) (\(1/q\) at reduced \(p/q\), \(0\) at irrationals, \(T(0) = T(1) = 1\)): \(f_n(x) \to T(x)\) for every \(x\).`},display:[String.raw`f_n(x) = \sum_{\substack{1 \le q \le n \\ 0 \le p \le q \\ \gcd(p,q)=1}} \frac{1}{q}\,\mathrm{tri}\!\left(n^3\left(x - \tfrac{p}{q}\right)\right)`,String.raw`\text{tent width } \frac{2}{n^3} < \frac{1}{n(n-1)} \le \text{ spacing of reduced fractions} \;\Longrightarrow\; \text{disjoint tents}`],preset:{N:12},presetCaption:{ko:String.raw`\(N = 12\): 47개의 텐트가 서로 겹치지 않습니다. \(f_{12}(1/2) = 0.5\), \(f_{12}(\sqrt{2}/2) = 0\), \(f_{12}(1/3) = 1/3\) — 탐침점에서 이미 Thomae 값과 정확히 일치합니다. 아래 증명이 이 점별수렴의 기계입니다.`,en:String.raw`\(N = 12\): 47 pairwise disjoint tents. \(f_{12}(1/2) = 0.5\), \(f_{12}(\sqrt{2}/2) = 0\), \(f_{12}(1/3) = 1/3\) — the probes already match Thomae exactly. The proof below is the machine behind this pointwise convergence.`},proof:[{text:{ko:String.raw`먼저 합이 기약분수에 대해서만 취해지는 이유를 분명히 합니다.

모든 순서쌍 \((p, q)\)에 대해 합하면 같은 유리수가 여러 번 세어집니다 (\(1/2 = 2/4 = 3/6 = \cdots\)).

그러면 \(x = 1/2\)에서 높이가 \(1/2 + 1/4 + 1/6 + \cdots\)로 쌓여 발산하므로 Thomae 함수로 수렴할 수 없습니다.

기약분수만 취하면 각 유리수가 정확히 한 번씩 등장합니다.`,en:String.raw`First, why the sum is over reduced fractions only.

Summing over all pairs \((p, q)\) counts each rational many times (\(1/2 = 2/4 = 3/6 = \cdots\)): at \(x = 1/2\) the stacked heights \(1/2 + 1/4 + 1/6 + \cdots\) would diverge, so the sum could never converge to Thomae.

With reduced fractions each rational appears exactly once.`}},{text:{ko:String.raw`각 텐트 \(x \mapsto \mathrm{tri}(n^3(x - p/q))\)는 연속함수들의 합성이므로 연속이고, 합은 유한합(항이 최대 \(\sum_{q \le n}(q+1)\)개)이므로 \(f_n\)은 연속입니다. 또한 \(f_n \ge 0\)입니다.`,en:String.raw`Each tent \(x \mapsto \mathrm{tri}(n^3(x - p/q))\) is continuous (a composition of continuous maps), and the sum is finite (at most \(\sum_{q \le n}(q+1)\) terms), so \(f_n\) is continuous. Also \(f_n \ge 0\).`}},{text:{ko:String.raw`텐트들은 서로 겹치지 않습니다.

분모가 \(\le n\)인 서로 다른 기약분수 \(p/q \ne r/s\)에 대해 \(\left|\frac{p}{q} - \frac{r}{s}\right| = \frac{|ps - qr|}{qs} \ge \frac{1}{qs}\)입니다.

\(qs \le n(n-1)\)이면 이는 \(\ge 1/(n(n-1))\)이고, \(qs = n^2\)이면 \(q = s = n\)이므로 \(|ps - qr| = n|p - r| \ge n\)이어서 몫은 \(\ge 1/n \ge 1/(n(n-1))\)입니다.

따라서 간격은 항상 \(\ge 1/(n(n-1))\)입니다.`,en:String.raw`The tents are pairwise disjoint.

For distinct reduced fractions \(p/q \ne r/s\) with denominators \(\le n\), \(\left|\frac{p}{q} - \frac{r}{s}\right| = \frac{|ps - qr|}{qs} \ge \frac{1}{qs}\).

If \(qs \le n(n-1)\) this is \(\ge 1/(n(n-1))\); if \(qs = n^2\) then \(q = s = n\), so \(|ps - qr| = n|p - r| \ge n\) and the quotient is \(\ge 1/n \ge 1/(n(n-1))\).

Hence the spacing is always \(\ge 1/(n(n-1))\).`}},{text:{ko:String.raw`텐트의 받침(support) 너비는 \(2/n^3\)인데, \(2/n^3 < 1/(n(n-1))\)입니다 (\(2(n-1) < n^2\), 즉 \((n-1)^2 + 1 > 0\)). 따라서 두 텐트의 받침이 겹칠 수 없고, 각 점 \(x\)에서는 최대 하나의 텐트만 0이 아닙니다.`,en:String.raw`Each tent's support has width \(2/n^3\), and \(2/n^3 < 1/(n(n-1))\) (since \(2(n-1) < n^2\), i.e. \((n-1)^2 + 1 > 0\)). So no two tent supports overlap: at each \(x\) at most one tent is nonzero.`}},{text:{ko:String.raw`유리수 \(x = a/b\) (기약분수, \(0 \le a \le b\))인 경우: \(n \ge b\)이면 \((a, b)\) 텐트가 \(\frac{1}{b}\,\mathrm{tri}(0) = 1/b\)를 기여합니다.

다른 기약분수 \(p/q\) (\(q \le n\))와의 거리는 \(\ge 1/(n(n-1)) > 1/n^3\)이므로 그 텐트는 \(x\)에서 0입니다.

따라서 \(f_n(a/b) = 1/b = T(a/b)\) — \(n \ge b\)부터 영원히 정확합니다.`,en:String.raw`For rational \(x = a/b\) in lowest terms (\(0 \le a \le b\)): if \(n \ge b\), the tent at \((a, b)\) contributes \(\frac{1}{b}\,\mathrm{tri}(0) = 1/b\).

Every other reduced \(p/q\) (\(q \le n\)) is at distance \(\ge 1/(n(n-1)) > 1/n^3\) from \(x\), so its tent vanishes at \(x\).

Hence \(f_n(a/b) = 1/b = T(a/b)\) — exact from \(n \ge b\) onward.`}},{text:{ko:String.raw`무리수 \(x\)인 경우: \(\varepsilon > 0\)에 대해 \(1/Q_0 < \varepsilon\)인 정수 \(Q_0 \ge 1\)을 택합니다.

분모 \(\le Q_0\)인 기약분수는 \([0, 1]\) 안에 유한개뿐이고 모두 \(x\)와 다르므로, \(c := \min|x - p/q| > 0\)입니다.

\(n^3 c > 1\)인 \(n\)에 대해 분모 \(\le Q_0\)인 텐트들은 \(x\)를 빗나가고, 나머지 텐트들의 높이는 \(\le 1/(Q_0+1) < \varepsilon\)이며, \(x\)에서 0이 아닌 텐트는 최대 하나뿐입니다.

따라서 \(0 \le f_n(x) < \varepsilon\) — 즉 \(f_n(x) \to 0 = T(x)\)입니다.`,en:String.raw`For irrational \(x\): given \(\varepsilon > 0\), pick an integer \(Q_0 \ge 1\) with \(1/Q_0 < \varepsilon\).

The reduced rationals in \([0, 1]\) with denominator \(\le Q_0\) are finitely many, all different from \(x\), so \(c := \min|x - p/q| > 0\).

For \(n\) with \(n^3 c > 1\), the tents with denominator \(\le Q_0\) miss \(x\); every other tent has height \(\le 1/(Q_0+1) < \varepsilon\); and at most one tent is nonzero at \(x\).

Hence \(0 \le f_n(x) < \varepsilon\) — i.e. \(f_n(x) \to 0 = T(x)\).`}}]},{id:`thomae-continuity`,statement:{ko:String.raw`Thomae 함수 \(T\)가 모든 유리수에서 불연속이고 모든 무리수에서 연속임을 증명하세요.

즉 \(T\)의 연속점 집합은 무리수 전체 — 조밀한 \(G_\delta\) 집합 — 입니다.`,en:String.raw`Prove Thomae's function \(T\) is discontinuous at every rational and continuous at every irrational.

That is, the continuity set of \(T\) is exactly the irrationals — a dense \(G_\delta\).`},display:[String.raw`T(x) = \begin{cases} 1/q & x = p/q \text{ in lowest terms} \\ 0 & x \text{ irrational} \end{cases}`,String.raw`\{x : T \text{ continuous at } x\} = \mathbb{R} \setminus \mathbb{Q} = \bigcap_{q=1}^{\infty} \bigcap_{p \in \mathbb{Z}} \left(\mathbb{R} \setminus \left\{\tfrac{p}{q}\right\}\right)`],preset:{N:5},presetCaption:{ko:String.raw`\(N = 5\): \(f_5\)는 11개의 텐트로 이루어진 연속함수입니다. 극한 \(T\)는 유리수 \(1/2, 1/3\)에서는 봉우리(\(0.5, 1/3\))를 세우지만 무리수에서는 \(0\)으로 가라앉습니다 — 아래 증명이 이 갈라짐의 이유입니다.`,en:String.raw`\(N = 5\): \(f_5\) is continuous, built from 11 tents. The limit \(T\) spikes (\(0.5, 1/3\)) at the rationals \(1/2, 1/3\) but sinks to \(0\) at irrationals — the proof below is why the split happens.`},proof:[{text:{ko:String.raw`유리수 \(r = a/b\) (기약분수)에서는 \(T(r) = 1/b > 0\)입니다.

무리수는 조밀하므로 \(r\)로 수렴하는 무리수열 \(x_k \to r\)이 있고, \(T(x_k) = 0 \not\to 1/b = T(r)\)입니다.

따라서 \(T\)는 \(r\)에서 불연속입니다.`,en:String.raw`At a rational \(r = a/b\) in lowest terms, \(T(r) = 1/b > 0\).

The irrationals are dense, so there is a sequence of irrationals \(x_k \to r\) with \(T(x_k) = 0 \not\to 1/b = T(r)\).

Hence \(T\) is discontinuous at \(r\).`}},{text:{ko:String.raw`무리수 \(x_0\)에서는 \(T(x_0) = 0\)입니다.

\(\varepsilon > 0\)에 대해 \(M > 1/\varepsilon\)인 정수를 택합니다.

\(1/b \ge \varepsilon\)인 유리수, 즉 분모 \(b \le M\)인 유리수는 구간 \([x_0 - 1, x_0 + 1]\) 안에 유한개뿐입니다.

\(\delta\)를 그 유한집합에서 \(x_0\)까지의 최소 거리라 하면 (\(x_0\)가 무리수이므로 \(\delta > 0\)), \(|x - x_0| < \delta\)인 모든 \(x\)에 대해: \(x\)가 유리수이면 분모가 \(M\)보다 크므로 \(T(x) < \varepsilon\)이고, 무리수이면 \(T(x) = 0\)입니다.

즉 \(|T(x) - T(x_0)| < \varepsilon\) — \(T\)는 \(x_0\)에서 연속입니다.`,en:String.raw`At an irrational \(x_0\), \(T(x_0) = 0\).

Given \(\varepsilon > 0\), pick an integer \(M > 1/\varepsilon\).

The rationals with \(1/b \ge \varepsilon\), i.e. denominator \(b \le M\), are finitely many in \([x_0 - 1, x_0 + 1]\).

Let \(\delta\) be the minimum distance from \(x_0\) to this finite set (\(\delta > 0\) since \(x_0\) is irrational).

Then for \(|x - x_0| < \delta\): if \(x\) is rational its denominator exceeds \(M\), so \(T(x) < \varepsilon\); if irrational, \(T(x) = 0\).

Thus \(|T(x) - T(x_0)| < \varepsilon\) — \(T\) is continuous at \(x_0\).`}},{text:{ko:String.raw`따라서 연속점 집합은 무리수 전체 \(\mathbb{R} \setminus \mathbb{Q}\)입니다.

각 유리수 \(\{p/q\}\)는 닫힌집합이므로 그 여집합 \(\mathbb{R} \setminus \{p/q\}\)는 열린 조밀집합입니다.

고정된 \(q\)에 대해 모든 \(p\)를 제거해야 하므로 교집합을 취합니다: \(\mathbb{R} \setminus \mathbb{Q} = \bigcap_{q \ge 1}\bigcap_{p \in \mathbb{Z}}(\mathbb{R} \setminus \{p/q\})\) — 순서쌍 \((p, q)\)가 가산개이므로 이는 열린집합들의 가산교집합, 즉 \(G_\delta\)입니다.

무리수는 조밀하므로 이는 조밀한 \(G_\delta\)입니다.`,en:String.raw`Hence the continuity set is exactly the irrationals \(\mathbb{R} \setminus \mathbb{Q}\).

Each singleton \(\{p/q\}\) is closed, so its complement \(\mathbb{R} \setminus \{p/q\}\) is open and dense.

For fixed \(q\) every \(p\) must be removed, so the inner operation is an intersection: \(\mathbb{R} \setminus \mathbb{Q} = \bigcap_{q \ge 1}\bigcap_{p \in \mathbb{Z}}(\mathbb{R} \setminus \{p/q\})\) — the pairs \((p, q)\) are countable, so this is a countable intersection of open sets, a \(G_\delta\).

The irrationals are dense, so it is a dense \(G_\delta\).`}}]},{id:`baire-one-theorem`,statement:{ko:String.raw`\(f: \mathbb{R} \to \mathbb{R}\)가 Baire 1급 함수(연속함수열의 점별 극한)라고 하세요.

진동(oscillation) \(\omega_f(x) = \inf\{\mathrm{diam}\,f(U) : U \ni x \text{인 근방}\}\)에 대해 각 집합 \(\{x : \omega_f(x) < 1/k\}\)가 열린 조밀집합임을 증명하고, Baire 카테고리 정리로부터 \(f\)의 연속점 집합이 조밀한 \(G_\delta\)를 포함함을 결론지으세요.`,en:String.raw`Let \(f: \mathbb{R} \to \mathbb{R}\) be Baire class 1 (a pointwise limit of continuous functions).

For the oscillation \(\omega_f(x) = \inf\{\mathrm{diam}\,f(U) : U \text{ a neighborhood of } x\}\), prove each set \(\{x : \omega_f(x) < 1/k\}\) is open and dense, and conclude via the Baire category theorem that the continuity set of \(f\) contains a dense \(G_\delta\).`},display:[String.raw`\omega_f(x) = \inf_{U \ni x} \mathrm{diam}\,f(U), \qquad \omega_f(x) = 0 \iff f \text{ continuous at } x`,String.raw`\{x : f \text{ continuous at } x\} \supseteq \bigcap_{k=1}^{\infty} \left\{x : \omega_f(x) < \tfrac{1}{k}\right\}, \text{ a dense } G_\delta`],preset:{N:5},presetCaption:{ko:String.raw`\(N = 5\): Thomae 함수는 Baire 1급이면서 연속이 아닙니다 — 그래도 연속점(무리수)이 조밀한 \(G_\delta\)를 이룹니다. 아래 증명은 이것이 모든 Baire 1급 함수에 대해 성립함을 보입니다.`,en:String.raw`\(N = 5\): Thomae's function is Baire-1 yet discontinuous — but its continuity points (the irrationals) still form a dense \(G_\delta\). The proof below shows this holds for every Baire-1 function.`},proof:[{text:{ko:String.raw`먼저 \(\omega_f(x) = 0\)가 \(x\)에서의 연속성과 동치임을 확인합니다.

(\(\Rightarrow\)) \(\omega_f(x) = 0\)이면 모든 \(\varepsilon > 0\)에 대해 \(\mathrm{diam}\,f(U) < \varepsilon\)인 근방 \(U\)가 있어, \(y \in U\)일 때 \(|f(y) - f(x)| \le \mathrm{diam}\,f(U) < \varepsilon\)입니다.

(\(\Leftarrow\)) \(f\)가 \(x\)에서 연속이면 모든 \(\varepsilon > 0\)에 대해 \(f(U) \subseteq (f(x) - \varepsilon, f(x) + \varepsilon)\)인 근방 \(U\)가 있어 \(\mathrm{diam}\,f(U) \le 2\varepsilon\), 즉 \(\omega_f(x) \le 2\varepsilon\)입니다.

\(\varepsilon\)이 임의이므로 \(\omega_f(x) = 0\)입니다.`,en:String.raw`First, \(\omega_f(x) = 0\) iff \(f\) is continuous at \(x\).

(\(\Rightarrow\)) If \(\omega_f(x) = 0\), every \(\varepsilon > 0\) admits a neighborhood \(U\) with \(\mathrm{diam}\,f(U) < \varepsilon\), so \(|f(y) - f(x)| \le \mathrm{diam}\,f(U) < \varepsilon\) for \(y \in U\).

(\(\Leftarrow\)) If \(f\) is continuous at \(x\), every \(\varepsilon > 0\) admits a neighborhood \(U\) with \(f(U) \subseteq (f(x) - \varepsilon, f(x) + \varepsilon)\), so \(\mathrm{diam}\,f(U) \le 2\varepsilon\) and \(\omega_f(x) \le 2\varepsilon\); \(\varepsilon\) arbitrary gives \(\omega_f(x) = 0\).`}},{text:{ko:String.raw`\(\{x : \omega_f(x) < 1/k\}\)는 열려 있습니다: \(\omega_f(x_0) < c < 1/k\)이면 \(\mathrm{diam}\,f(U) < c\)인 근방 \(U\)가 존재하고, 모든 \(x \in U\)에 대해 \(U\) 자체가 \(x\)의 근방이므로 \(\omega_f(x) \le \mathrm{diam}\,f(U) < c < 1/k\)입니다. 즉 \(U \subseteq \{\omega_f < 1/k\}\)입니다.`,en:String.raw`\(\{x : \omega_f(x) < 1/k\}\) is open: if \(\omega_f(x_0) < c < 1/k\), some neighborhood \(U\) has \(\mathrm{diam}\,f(U) < c\); for every \(x \in U\), \(U\) is itself a neighborhood of \(x\), so \(\omega_f(x) \le \mathrm{diam}\,f(U) < c < 1/k\). Thus \(U \subseteq \{\omega_f < 1/k\}\).`}},{text:{ko:String.raw`이제 조밀성을 보입니다.

\(f_n \to f\)를 점별수렴하는 연속함수열이라 하세요.

\(\mathbb{R}\)을 길이 \(< 1/(2k)\)인 닫힌구간들 \(V_j\) (\(j \in \mathbb{Z}\))로 덮되, 그 내부들도 \(\mathbb{R}\)을 덮도록 합니다 (예: \(V_j = [\frac{j}{8k} - \frac{1}{8k}, \frac{j}{8k} + \frac{1}{8k}]\).

비어 있지 않은 열린집합 \(U_0\)를 고정합니다.

각 \(x \in U_0\)에 대해 \(f(x)\)는 어떤 \(\mathrm{int}(V_j)\)에 속하고, \(f_m(x) \to f(x)\)이므로 \(m \ge n\)일 때 \(f_m(x) \in V_j\)인 \(n\)이 존재합니다.

따라서 \(U_0 = \bigcup_{n,j} H_{n,j}\)입니다.

여기서 \(H_{n,j} = \{x \in U_0 : m \ge n \Rightarrow f_m(x) \in V_j\}\)는 \(U_0\)에서 상대적으로 닫힌집합입니다 (\(f_m\) 연속, \(V_j\) 닫힘).`,en:String.raw`Now density.

Let \(f_n \to f\) pointwise with \(f_n\) continuous.

Cover \(\mathbb{R}\) by closed intervals \(V_j\) (\(j \in \mathbb{Z}\)) of length \(< 1/(2k)\) whose interiors also cover \(\mathbb{R}\) (e.g. \(V_j = [\frac{j}{8k} - \frac{1}{8k}, \frac{j}{8k} + \frac{1}{8k}]\).

Fix a nonempty open \(U_0\).

For each \(x \in U_0\), \(f(x)\) lies in some \(\mathrm{int}(V_j)\), and since \(f_m(x) \to f(x)\) there is \(n\) with \(f_m(x) \in V_j\) for all \(m \ge n\).

Hence \(U_0 = \bigcup_{n,j} H_{n,j}\), where \(H_{n,j} = \{x \in U_0 : f_m(x) \in V_j \ \forall m \ge n\}\) is relatively closed in \(U_0\) (\(f_m\) continuous, \(V_j\) closed).`}},{text:{ko:String.raw`\(U_0\) 자체는 완비가 아니므로 Baire 정리를 \(U_0\)에 직접 적용할 수는 없습니다 — 대신 닫힌공으로 제한합니다.

\(U_0\)가 열려 있고 비어 있지 않으므로 \(\overline{B}(x_0, r) \subseteq U_0\)인 닫힌공이 있고, \(\overline{B}(x_0, r)\)는 완비입니다.

\(\overline{B}(x_0, r) = \bigcup_{n,j} (H_{n,j} \cap \overline{B}(x_0, r))\)이고 각 \(H_{n,j} \cap \overline{B}(x_0, r)\)는 이 완비공간에서 닫혀 있으므로, Baire 정리에 의해 어떤 \(H_{n_0,j_0} \cap \overline{B}(x_0, r)\)는 \(\overline{B}(x_0, r)\)에서 상대내부가 비어 있지 않습니다.

열린공 \(B(x_0, r)\)와 교차시키면 비어 있지 않은 열린집합 \(W \subseteq H_{n_0,j_0}\) (\(W \subseteq U_0\))를 얻습니다 (상대내부를 이루는 열린집합은 \(\overline{B}(x_0, r)\)와 만나므로 그 내부와도 만납니다).

\(y \in W\)에 대해 \(f_m(y) \in V_{j_0}\) (\(m \ge n_0\))이고 \(V_{j_0}\)가 닫혔으므로 극한 \(f(y) \in V_{j_0}\)입니다.

즉 \(f(W) \subseteq V_{j_0}\)이므로 \(\mathrm{diam}\,f(W) < 1/(2k)\)입니다.

\(W\)는 그 안의 각 점 \(x\)의 근방이므로 \(\omega_f(x) \le \mathrm{diam}\,f(W) < 1/k\)입니다.

따라서 \(W \subseteq U_0 \cap \{\omega_f < 1/k\} \ne \varnothing\) — \(\{\omega_f < 1/k\}\)는 조밀합니다.`,en:String.raw`\(U_0\) itself is not complete, so Baire's theorem cannot be applied to \(U_0\) directly — restrict to a closed ball instead.

Since \(U_0\) is open and nonempty, some closed ball \(\overline{B}(x_0, r) \subseteq U_0\) exists, and \(\overline{B}(x_0, r)\) is complete.

Now \(\overline{B}(x_0, r) = \bigcup_{n,j} (H_{n,j} \cap \overline{B}(x_0, r))\) with each \(H_{n,j} \cap \overline{B}(x_0, r)\) closed in this complete space, so by Baire's theorem some \(H_{n_0,j_0} \cap \overline{B}(x_0, r)\) has nonempty relative interior in \(\overline{B}(x_0, r)\).

Intersecting with the open ball \(B(x_0, r)\) gives a nonempty open \(W \subseteq H_{n_0,j_0}\) with \(W \subseteq U_0\) (an open set meeting \(\overline{B}(x_0, r)\) in a relative-interior piece also meets its interior).

For \(y \in W\), \(f_m(y) \in V_{j_0}\) for all \(m \ge n_0\), and \(V_{j_0}\) closed gives \(f(y) \in V_{j_0}\).

So \(f(W) \subseteq V_{j_0}\) and \(\mathrm{diam}\,f(W) < 1/(2k)\).

Since \(W\) is a neighborhood of each of its points \(x\), \(\omega_f(x) \le \mathrm{diam}\,f(W) < 1/k\).

Thus \(W \subseteq U_0 \cap \{\omega_f < 1/k\} \ne \varnothing\) — \(\{\omega_f < 1/k\}\) is dense.`}},{text:{ko:String.raw`각 \(\{\omega_f < 1/k\}\)가 열린 조밀집합이므로, Baire 카테고리 정리에 의해 \(G := \bigcap_{k=1}^{\infty}\{\omega_f < 1/k\}\)는 조밀한 \(G_\delta\)입니다. 첫 단계에서 \(G \subseteq \{\omega_f = 0\} = \{f\)의 연속점\(\}\)이므로, \(f\)의 연속점 집합은 조밀한 \(G_\delta\)를 포함합니다. ∎`,en:String.raw`Each \(\{\omega_f < 1/k\}\) is open and dense, so by the Baire category theorem \(G := \bigcap_{k=1}^{\infty}\{\omega_f < 1/k\}\) is a dense \(G_\delta\). By the first step, \(G \subseteq \{\omega_f = 0\} =\) the continuity set of \(f\), so the continuity set of \(f\) contains a dense \(G_\delta\). ∎`}}]}],n=[{id:`clopen-r-trivial`,statement:{ko:String.raw`\(\mathbb{R}\)의 부분집합 \(A\)가 열린 집합이자 닫힌 집합(clopen)이고 \(\emptyset \ne A \ne \mathbb{R}\)이라고 가정하세요.

모순을 이끌어내어, \(\mathbb{R}\)의 clopen 집합은 \(\emptyset\)와 \(\mathbb{R}\)뿐임을 완전히 증명하세요.`,en:String.raw`Let \(A \subseteq \mathbb{R}\) be both open and closed (clopen), with \(\emptyset \ne A \ne \mathbb{R}\).

Derive a contradiction, proving completely that the only clopen subsets of \(\mathbb{R}\) are \(\emptyset\) and \(\mathbb{R}\) itself.`},display:[String.raw`\text{clopen in } \mathbb{R} \implies A = \emptyset \text{ or } A = \mathbb{R}`],preset:{case:`open-interval`,x:.5,eps:.2},presetCaption:{ko:String.raw`\(X = \mathbb{R}\), \(A = (0,1)\): 열려 있지만 닫혀 있지 않습니다 — \(\mathbb{R}\)에서는 nontrivial clopen이 존재하지 않습니다.`,en:String.raw`\(X = \mathbb{R}\), \(A = (0,1)\): open but not closed — no nontrivial clopen set exists in \(\mathbb{R}\).`},proof:[{text:{ko:String.raw`\(A\)가 clopen이면 여집합 \(A^c\)도 clopen입니다: \(A\)가 열려 있으면 \(A^c\)는 닫혀 있고, \(A\)가 닫혀 있으면 \(A^c\)는 열려 있기 때문입니다. \(A \ne \emptyset\)이므로 \(A^c \ne \mathbb{R}\)… 정확히는 \(A \ne \mathbb{R}\)이므로 \(A^c \ne \emptyset\)이고, \(A \ne \emptyset\)이므로 \(A\) 자체도 비어 있지 않습니다.`,en:String.raw`If \(A\) is clopen then so is its complement \(A^c\): \(A\) open makes \(A^c\) closed, and \(A\) closed makes \(A^c\) open. Since \(A \ne \mathbb{R}\) we have \(A^c \ne \emptyset\), and since \(A \ne \emptyset\), \(A\) itself is nonempty.`}},{text:{ko:String.raw`따라서 \(\mathbb{R} = A \cup A^c\)는 서로소인 두 비어 있지 않은 열린 집합으로의 분해 — 즉 \(\mathbb{R}\)의 분리(separation)입니다.

이제 \(\mathbb{R}\)이 연결집합임을 보입니다.

\(\mathbb{R} = U \cup V\)가 서로소인 비어 있지 않은 열린 집합으로의 분해라고 가정하고, \(a \in U\), \(b \in V\)를 잡습니다 (필요하면 이름을 바꿔 \(a < b\)).`,en:String.raw`Hence \(\mathbb{R} = A \cup A^c\) is a decomposition into two disjoint nonempty open sets — a separation of \(\mathbb{R}\).

Now we show \(\mathbb{R}\) is connected.

Suppose \(\mathbb{R} = U \cup V\) with \(U, V\) disjoint nonempty open; pick \(a \in U\), \(b \in V\) (renaming so \(a < b\)).`}},{text:{ko:String.raw`\(c = \sup(U \cap [a,b])\)라 둡니다 (\(a\)를 포함하므로 비어 있지 않고, \(b\)가 상계).

\(U\)는 열려 있을 뿐 아니라 \(U = \mathbb{R} \setminus V\)이므로 닫혀 있기도 합니다.

\(c\)는 \(U \cap [a,b]\)의 폐포에 속하므로 \(c \in \overline{U} = U\)입니다.

\(c \le b\)이고, \(b \in V\)이며 서로소이므로 \(c \ne b\), 즉 \(c < b\)입니다.

\(U\)가 열려 있으므로 어떤 \(\varepsilon > 0\)에 대해 \((c-\varepsilon, c+\varepsilon) \subseteq U\)입니다.

여기서 \(\delta = \min(\varepsilon/2, (b-c)/2) > 0\)으로 줄이면 (\(c < b\)이므로), \(c + \delta \in [a,b]\)이면서 \(c\)보다 크고 \(c + \delta \in U\)이므로 \(U \cap [a,b]\)에 속해야 합니다 — \(c = \sup\)에 모순됩니다.

따라서 \(\mathbb{R}\)의 분리는 존재하지 않습니다.`,en:String.raw`Put \(c = \sup(U \cap [a,b])\) (nonempty, containing \(a\); bounded above by \(b\)).

\(U\) is not only open but also closed, since \(U = \mathbb{R} \setminus V\).

Now \(c\) lies in the closure of \(U \cap [a,b]\), so \(c \in \overline{U} = U\).

We have \(c \le b\), and \(c \ne b\) (as \(b \in V\) and the sets are disjoint), so \(c < b\).

Since \(U\) is open, \((c-\varepsilon, c+\varepsilon) \subseteq U\) for some \(\varepsilon > 0\).

Now shrink to \(\delta = \min(\varepsilon/2, (b-c)/2) > 0\) (positive since \(c < b\)): then \(c + \delta \in [a,b]\), exceeds \(c\), and lies in \(U\), so it belongs to \(U \cap [a,b]\) — contradicting \(c = \sup\).

Hence no separation of \(\mathbb{R}\) exists.`}},{text:{ko:String.raw`이는 2단계의 분리와 모순되므로, 가정한 nontrivial clopen 집합 \(A\)는 존재하지 않습니다.

즉 \(\mathbb{R}\)의 clopen 집합은 \(\emptyset\)와 \(\mathbb{R}\)뿐입니다.

씬의 \(A = (0,1)\)은 열려 있지만 닫혀 있지 않아서 이 정리를 피합니다 — 닫혀 있게 하려면 빠진 극한점 \(0, 1\)을 넣어야 하고, 그러면 열린 쪽이 깨집니다.`,en:String.raw`This contradicts the separation from the second step, so the assumed nontrivial clopen set \(A\) cannot exist: the only clopen subsets of \(\mathbb{R}\) are \(\emptyset\) and \(\mathbb{R}\). The scene's \(A = (0,1)\) is open but not closed, dodging this theorem — closing it would require adding the missing limit points \(0, 1\), which would break openness.`}}]},{id:`clopen-subspace-pieces`,statement:{ko:String.raw`부분공간 \(X = [0,1] \cup [2,3] \subseteq \mathbb{R}\)와 \(A = [0,1]\)에 대해, \(A\)가 \(X\)에서는 clopen이지만 \(\mathbb{R}\)에서는 열려 있지 않음을 완전히 증명하세요.`,en:String.raw`For the subspace \(X = [0,1] \cup [2,3] \subseteq \mathbb{R}\) and \(A = [0,1]\), prove completely that \(A\) is clopen in \(X\) but not open in \(\mathbb{R}\).`},display:[String.raw`[0,1] = X \cap (-1/2,\, 3/2) = X \cap [-1/2,\, 3/2]`],preset:{case:`clopen-pieces`,x:1,eps:.5},presetCaption:{ko:String.raw`\(x = 1\), \(\varepsilon = 0.5\): 경계점 \(1\)에서도 \((1-0.5, 1+0.5) \cap X = (0.5, 1] \subseteq A\)이므로 \(X\) 기준으로 공이 \(A\) 안에 머뭅니다 — \(X\)에서의 열림이 보입니다.`,en:String.raw`\(x = 1\), \(\varepsilon = 0.5\): even at the boundary point \(1\), \((1-0.5, 1+0.5) \cap X = (0.5, 1] \subseteq A\), so the ball stays in \(A\) relative to \(X\) — openness in \(X\) made visible.`},proof:[{text:{ko:String.raw`\(X\)에서 열림: \([0,1] = X \cap (-1/2,\, 3/2)\)임을 확인합니다.

\(\subseteq\)는 자명하고, 역으로 \(X \cap (-1/2,\, 3/2)\)의 점은 \([0,1]\)에 있거나 \([2,3] \cap (-1/2,\, 3/2)\)에 있어야 하는데 후자는 비어 있으므로 \([0,1]\)에 속합니다.

\((-1/2,\, 3/2)\)는 \(\mathbb{R}\)에서 열려 있으므로, \([0,1]\)은 \(X\)에서 열려 있습니다.`,en:String.raw`Openness in \(X\): check \([0,1] = X \cap (-1/2,\, 3/2)\).

The inclusion \(\subseteq\) is clear; conversely a point of \(X \cap (-1/2,\, 3/2)\) lies in \([0,1]\) or in \([2,3] \cap (-1/2,\, 3/2)\), and the latter is empty, so it lies in \([0,1]\).

Since \((-1/2,\, 3/2)\) is open in \(\mathbb{R}\), \([0,1]\) is open in \(X\).`}},{text:{ko:String.raw`\(X\)에서 닫힘: 같은 논증으로 \([0,1] = X \cap [-1/2,\, 3/2]\)입니다 (\([2,3] \cap [-1/2,\, 3/2] = \emptyset\)).

\([-1/2,\, 3/2]\)는 \(\mathbb{R}\)에서 닫혀 있으므로 \([0,1]\)은 \(X\)에서 닫혀 있습니다.

따라서 \([0,1]\)은 \(X\)의 clopen 집합입니다.`,en:String.raw`Closedness in \(X\): the same argument gives \([0,1] = X \cap [-1/2,\, 3/2]\) (since \([2,3] \cap [-1/2,\, 3/2] = \emptyset\)).

As \([-1/2,\, 3/2]\) is closed in \(\mathbb{R}\), \([0,1]\) is closed in \(X\).

Hence \([0,1]\) is clopen in \(X\).`}},{text:{ko:String.raw`\(\mathbb{R}\)에서는 열려 있지 않음: \(1 \in [0,1]\)이지만, 모든 \(\varepsilon > 0\)에 대해 공 \((1-\varepsilon, 1+\varepsilon)\)은 \(1 + \varepsilon/2 \notin [0,1]\)을 포함합니다. 따라서 같은 집합 \([0,1]\)이 \(X\)에서는 clopen이면서 \(\mathbb{R}\)에서는 (닫혀 있기만 하고) 열려 있지 않습니다 — clopen은 ambient에 상대적인 개념입니다.`,en:String.raw`Not open in \(\mathbb{R}\): \(1 \in [0,1]\), yet every ball \((1-\varepsilon, 1+\varepsilon)\) contains \(1 + \varepsilon/2 \notin [0,1]\). So the same set \([0,1]\) is clopen in \(X\) while in \(\mathbb{R}\) it is merely closed, not open — clopenness is relative to the ambient space.`}}]},{id:`clopen-separation`,statement:{ko:String.raw`\(X\)를 위상공간, \(A \subseteq X\)를 clopen 집합이라 하세요.

\(\emptyset \ne A \ne X\)이면 \(X\)는 연결집합이 아님을 완전히 증명하세요.`,en:String.raw`Let \(X\) be a topological space and \(A \subseteq X\) clopen.

Prove completely that if \(\emptyset \ne A \ne X\) then \(X\) is disconnected.`},display:[String.raw`X = A \cup A^c, \qquad A \cap A^c = \emptyset, \qquad A,\, A^c \ne \emptyset \text{ open in } X`],preset:{case:`clopen-gap`,x:.5,eps:.3},presetCaption:{ko:String.raw`\(X = (0,1) \cup (1,2)\), \(A = (0,1)\): \(X = A \cup A^c\)는 서로소인 비어 있지 않은 열린 집합으로의 분해 — \(X\)가 연결집합이 아님을 보여줍니다.`,en:String.raw`\(X = (0,1) \cup (1,2)\), \(A = (0,1)\): \(X = A \cup A^c\) is a separation into disjoint nonempty opens — showing \(X\) is disconnected.`},proof:[{text:{ko:String.raw`\(A\)가 clopen이면 여집합 \(A^c = X \setminus A\)도 clopen입니다: 여집합을 취하면 열림과 닫힘이 뒤바뀌기 때문입니다 (\(A\)가 열려 있으면 \(A^c\)는 닫혀 있고, \(A\)가 닫혀 있으면 \(A^c\)는 열려 있습니다).`,en:String.raw`If \(A\) is clopen then so is its complement \(A^c = X \setminus A\): complementation swaps openness and closedness (\(A\) open makes \(A^c\) closed; \(A\) closed makes \(A^c\) open).`}},{text:{ko:String.raw`\(\emptyset \ne A \ne X\)이므로 \(A\)와 \(A^c\)는 모두 비어 있지 않습니다.

또한 \(X = A \cup A^c\), \(A \cap A^c = \emptyset\)이며, 둘 다 \(X\)에서 열려 있습니다 — 즉 \(X\)의 분리(separation)입니다.

따라서 \(X\)는 연결집합이 아닙니다.`,en:String.raw`Since \(\emptyset \ne A \ne X\), both \(A\) and \(A^c\) are nonempty.

Moreover \(X = A \cup A^c\), \(A \cap A^c = \emptyset\), and both are open in \(X\) — a separation of \(X\).

Hence \(X\) is disconnected.`}},{text:{ko:String.raw`역도 성립합니다: \(X = U \cup V\)가 분리이면 \(U = X \setminus V\)는 닫혀 있기도 하므로 clopen입니다.

즉 "nontrivial clopen 집합이 존재한다"는 "연결집합이 아니다"와 동치입니다.

위 문제 1은 \(X = \mathbb{R}\)인 특별한 경우입니다 — \(\mathbb{R}\)이 연결집합이므로 nontrivial clopen이 있을 수 없습니다.`,en:String.raw`The converse holds too: if \(X = U \cup V\) is a separation then \(U = X \setminus V\) is also closed, hence clopen.

So "a nontrivial clopen set exists" is equivalent to "disconnected".

Problem 1 above is the special case \(X = \mathbb{R}\) — since \(\mathbb{R}\) is connected, no nontrivial clopen set can exist there.`}}]}],r=[{id:`interval-connected`,statement:{ko:String.raw`구간 \([0,1]\)이 연결집합임을 완전히 증명하세요.

즉, \([0,1]\)에서 열려 있는 서로소인 두 집합 \(U, V\)가 \([0,1] = U \cup V\)를 만족하면, \(U\)와 \(V\) 중 적어도 하나는 비어 있음을 보이세요.`,en:String.raw`Prove completely that the interval \([0,1]\) is connected.

That is, show that if \(U, V\) are disjoint sets, both open in \([0,1]\), with \([0,1] = U \cup V\), then at least one of \(U, V\) is empty.`},display:[String.raw`[0,1] = U \cup V,\ U \cap V = \emptyset,\ U, V \text{ open in } [0,1] \implies U = \emptyset \text{ or } V = \emptyset`],preset:{case:`interval`,t:.5},presetCaption:{ko:String.raw`\(t = 0.5\): 절단점 \(0.5\) 자체가 어느 쪽에도 속하지 않아 덮지 못합니다 — \([0,1]\)에서는 어떤 절단도 이렇게 실패합니다.`,en:String.raw`\(t = 0.5\): the cut point \(0.5\) itself belongs to neither side, so the pair does not cover — every cut of \([0,1]\) fails this way.`},proof:[{text:{ko:String.raw`\([0,1] = U \cup V\)가 분리라고 가정하고, \(U, V\)가 모두 비어 있지 않다고 가정합니다.

이름을 바꿔 \(0 \in U\)라 둡니다 (\(0\)은 \(U\)와 \(V\) 중 하나에 속하는데, \(1 - x\) 대칭으로 두 경우 모두 같은 논증이 됩니다).

집합 \(S = \{x \in [0,1] : [0,x] \subseteq U\}\)와 \(c = \sup S\)를 둡니다.

\(0 \in S\)이므로 \(S \ne \emptyset\)이고, \(1\)이 상계이므로 완비성 공리에 의해 \(c \in [0,1]\)이 존재합니다.`,en:String.raw`Suppose \([0,1] = U \cup V\) is a separation, with \(U, V\) both nonempty.

Renaming if needed, assume \(0 \in U\) (\(0\) lies in one of \(U, V\), and the symmetry \(x \mapsto 1 - x\) makes the two cases identical).

Put \(S = \{x \in [0,1] : [0,x] \subseteq U\}\) and \(c = \sup S\).

Since \(0 \in S\), \(S \ne \emptyset\); it is bounded above by \(1\), so \(c \in [0,1]\) exists by completeness.`}},{text:{ko:String.raw`먼저 \(c \in U\)임을 보입니다.

\(V\)가 \([0,1]\)에서 열려 있으므로 그 여집합 \(U = [0,1] \setminus V\)는 \([0,1]\)에서 닫혀 있습니다 — 즉 \(U\)는 자기 폐포와 같습니다: \(\overline{U} \cap [0,1] = U\).

\(c = 0\)이면 \(c = 0 \in U\)입니다. \(c > 0\)이면, 모든 \(\varepsilon > 0\)에 대해 supremum의 정의로 \(x \in S\)이고 \(c - \varepsilon < x \le c\)인 \(x\)가 존재합니다.

이때 \(x \in [0,x] \subseteq U\)이므로 근방 \((c-\varepsilon, c+\varepsilon)\)가 \(U\)와 만나고, 따라서 \(c \in \overline{U}\)입니다.

결론적으로 \(c \in \overline{U} \cap [0,1] = U\)입니다.`,en:String.raw`First, \(c \in U\).

Since \(V\) is open in \([0,1]\), its complement \(U = [0,1] \setminus V\) is closed in \([0,1]\) — that is, \(U\) equals its own closure in the subspace: \(\overline{U} \cap [0,1] = U\).

If \(c = 0\) then \(c = 0 \in U\). If \(c > 0\), then for every \(\varepsilon > 0\) the definition of supremum gives \(x \in S\) with \(c - \varepsilon < x \le c\).

That \(x\) satisfies \(x \in [0,x] \subseteq U\), so the neighborhood \((c-\varepsilon, c+\varepsilon)\) meets \(U\), and hence \(c \in \overline{U}\).

Therefore \(c \in \overline{U} \cap [0,1] = U\).`}},{text:{ko:String.raw`다음으로 \([0,c] \subseteq U\)임을 확인합니다: \(y < c\)이면 supremum의 정의로 \(y < x \le c\)인 \(x \in S\)가 있어 \(y \in [0,x] \subseteq U\)이고, 끝점 \(c\) 자체도 앞 단계에서 \(U\)에 속합니다.

이제 \(c = 1\)임을 보입니다. \(c < 1\)이라 가정해 보세요.

\(c \in U\)이고 \(U\)가 \([0,1]\)에서 열려 있으므로, 어떤 \(\delta > 0\)에 대해 \((c-\delta, c+\delta) \cap [0,1] \subseteq U\)입니다.

\(\delta' = \min(\delta/2, (1-c)/2) > 0\)으로 두면 (\(c < 1\)이므로) \([0, c+\delta'] = [0,c] \cup (c, c+\delta'] \subseteq U\)가 됩니다.

즉 \(c + \delta' \in S\)인데 \(c + \delta' > c = \sup S\)라 모순입니다. 따라서 \(c = 1\)입니다.`,en:String.raw`Next, \([0,c] \subseteq U\): if \(y < c\) then the definition of supremum gives \(x \in S\) with \(y < x \le c\), so \(y \in [0,x] \subseteq U\); and the endpoint \(c\) itself lies in \(U\) by the previous step.

Now \(c = 1\). Suppose instead \(c < 1\).

Since \(c \in U\) and \(U\) is open in \([0,1]\), there is \(\delta > 0\) with \((c-\delta, c+\delta) \cap [0,1] \subseteq U\).

Put \(\delta' = \min(\delta/2, (1-c)/2) > 0\) (positive since \(c < 1\)). Then \([0, c+\delta'] = [0,c] \cup (c, c+\delta'] \subseteq U\).

So \(c + \delta' \in S\), yet \(c + \delta' > c = \sup S\) — a contradiction. Hence \(c = 1\).`}},{text:{ko:String.raw`따라서 \([0,1] = [0,c] \subseteq U\)입니다.

그런데 분리는 \(V \ne \emptyset\)를 요구하므로 \(v \in V\)인 \(v\)가 존재합니다.

\(v \in [0,1] \subseteq U\)이면서 \(v \in V\)이면 \(U \cap V \ne \emptyset\)가 되어 서로소라는 가정에 모순됩니다.

결론적으로 \([0,1]\)의 분리는 존재하지 않으며, \([0,1]\)은 연결집합입니다.

씬에서 절단이 늘 실패하는 이유가 이것입니다 — 절단점 \(t \in [0,1]\)은 어느 열린 쪽에도 속할 수 없고, 이 증명은 그 현상이 모든 열린 쌍에서 일어난다고 말합니다.`,en:String.raw`Hence \([0,1] = [0,c] \subseteq U\).

But a separation requires \(V \ne \emptyset\), so some \(v \in V\) exists.

Then \(v \in [0,1] \subseteq U\) and \(v \in V\), giving \(U \cap V \ne \emptyset\) — contradicting disjointness.

Therefore no separation of \([0,1]\) exists, and \([0,1]\) is connected.

This is why every cut in the scene fails: a cut point \(t \in [0,1]\) can belong to neither open side, and this proof shows the same phenomenon defeats every open pair, not just interval cuts.`}}]},{id:`path-connected-implies-connected`,statement:{ko:String.raw`\(X\)가 path-연결집합이면 \(X\)가 연결집합임을 완전히 증명하세요.

path-연결이란 임의의 \(a, b \in X\)에 대해 연속함수 \(\gamma : [0,1] \to X\)이고 \(\gamma(0) = a\), \(\gamma(1) = b\)인 것이 존재한다는 뜻입니다.

문제 1 (\([0,1]\)의 연결성)을 사용해도 됩니다.`,en:String.raw`Prove completely that if \(X\) is path-connected then \(X\) is connected.

Path-connected means that for any \(a, b \in X\) there is a continuous \(\gamma : [0,1] \to X\) with \(\gamma(0) = a\) and \(\gamma(1) = b\).

You may use Problem 1 (connectedness of \([0,1]\)).`},display:[String.raw`\gamma : [0,1] \to X \text{ continuous},\quad A = \gamma^{-1}(U),\quad B = \gamma^{-1}(V)`,String.raw`[0,1] = A \cup B,\quad A \cap B = \emptyset,\quad A, B \text{ open in } [0,1]`],preset:{case:`two-pieces`,t:1.5},presetCaption:{ko:String.raw`\(X = [0,1] \cup [2,3]\), \(t = 1.5\): 분리가 성공하는 공간 — 조각 사이에는 path가 있을 수 없습니다. path가 있으면 그 역상이 \([0,1]\)을 분리해 버리기 때문입니다.`,en:String.raw`\(X = [0,1] \cup [2,3]\), \(t = 1.5\): a space where a separation succeeds — no path can cross between the pieces, for its preimage would separate \([0,1]\).`},proof:[{text:{ko:String.raw`\(X\)가 path-연결이고, 모순을 위해 \(X = U \cup V\)가 분리라고 가정합니다: \(U, V\)는 \(X\)에서 열려 있고, 서로소이며, 모두 비어 있지 않습니다.

\(a \in U\), \(b \in V\)를 잡습니다.

path-연결성에 의해 연속함수 \(\gamma : [0,1] \to X\)이고 \(\gamma(0) = a\), \(\gamma(1) = b\)인 것이 존재합니다.`,en:String.raw`Let \(X\) be path-connected, and suppose for a contradiction that \(X = U \cup V\) is a separation: \(U, V\) open in \(X\), disjoint, and both nonempty.

Pick \(a \in U\) and \(b \in V\).

By path-connectedness there is a continuous \(\gamma : [0,1] \to X\) with \(\gamma(0) = a\) and \(\gamma(1) = b\).`}},{text:{ko:String.raw`\(A = \gamma^{-1}(U)\), \(B = \gamma^{-1}(V)\)로 둡니다.

\(\gamma\)가 연속이고 \(U, V\)가 \(X\)에서 열려 있으므로, \(A\)와 \(B\)는 \([0,1]\)에서 열려 있습니다: \(t_0 \in A\)이면 \(\gamma(t_0) \in U\)이고, \(U\)가 열려 있어 어떤 \(\varepsilon > 0\)에 대해 \(U\)가 \(\gamma(t_0)\)의 \(\varepsilon\)-근방을 포함하며, 연속성에 의해 \(\gamma\)는 \(t_0\)의 어떤 \(\delta\)-근방 전체를 그 \(\varepsilon\)-근방 안으로 보내므로, 그 \(\delta\)-근방은 \(A\) 안에 들어갑니다. \(B\)도 마찬가지입니다.`,en:String.raw`Put \(A = \gamma^{-1}(U)\) and \(B = \gamma^{-1}(V)\).

Since \(\gamma\) is continuous and \(U, V\) are open in \(X\), both \(A\) and \(B\) are open in \([0,1]\): if \(t_0 \in A\) then \(\gamma(t_0) \in U\); openness of \(U\) gives \(\varepsilon > 0\) with \(U\) containing the \(\varepsilon\)-neighborhood of \(\gamma(t_0)\); continuity then sends a whole \(\delta\)-neighborhood of \(t_0\) into that \(\varepsilon\)-neighborhood, so the \(\delta\)-neighborhood lies in \(A\). The same argument works for \(B\).`}},{text:{ko:String.raw`네 가지 분리 조건을 \([0,1]\)에서 확인합니다.

덮음: 모든 \(t \in [0,1]\)에 대해 \(\gamma(t) \in X = U \cup V\)이므로 \(t \in A \cup B\), 즉 \([0,1] = A \cup B\)입니다.

서로소: \(t \in A \cap B\)이면 \(\gamma(t) \in U \cap V = \emptyset\)가 되어 불가능하므로 \(A \cap B = \emptyset\)입니다.

비어 있지 않음: \(0 \in A\) (\(\gamma(0) = a \in U\))이고 \(1 \in B\) (\(\gamma(1) = b \in V\))입니다.

즉 \([0,1] = A \cup B\)는 \([0,1]\)의 분리입니다.`,en:String.raw`Check the four separation conditions in \([0,1]\).

Cover: for every \(t \in [0,1]\), \(\gamma(t) \in X = U \cup V\), so \(t \in A \cup B\); that is, \([0,1] = A \cup B\).

Disjoint: if \(t \in A \cap B\) then \(\gamma(t) \in U \cap V = \emptyset\), impossible; so \(A \cap B = \emptyset\).

Nonempty: \(0 \in A\) (since \(\gamma(0) = a \in U\)) and \(1 \in B\) (since \(\gamma(1) = b \in V\)).

Thus \([0,1] = A \cup B\) is a separation of \([0,1]\).`}},{text:{ko:String.raw`이는 문제 1 — \([0,1]\)은 연결집합이라 분리가 존재하지 않는다 — 에 모순됩니다.

따라서 \(X\)의 분리 \(X = U \cup V\)는 존재할 수 없고, \(X\)는 연결집합입니다.

역은 성립하지 않습니다: 위상수학자의 사인 곡선의 폐포는 연결집합이지만 path-연결집합은 아닙니다.`,en:String.raw`This contradicts Problem 1 — \([0,1]\) is connected, so it admits no separation.

Hence no separation \(X = U \cup V\) of \(X\) can exist, and \(X\) is connected.

The converse is false: the closure of the topologist's sine curve is connected but not path-connected.`}}]},{id:`rationals-totally-disconnected`,statement:{ko:String.raw`두 점 이상을 가진 \(\mathbb{Q}\)의 모든 부분집합 \(A\)는 연결집합이 아님을 완전히 증명하세요.

결론적으로 \(\mathbb{Q}\)는 완전 비연결(totally disconnected)입니다: 연결인 부분집합은 한 점 집합과 \(\emptyset\)뿐입니다.`,en:String.raw`Prove completely that every subset \(A \subseteq \mathbb{Q}\) with at least two points is disconnected.

Conclude that \(\mathbb{Q}\) is totally disconnected: its only connected subsets are singletons and \(\emptyset\).`},display:[String.raw`\alpha = p + \frac{q - p}{\sqrt{2}}, \qquad \sqrt{2} = \frac{q - p}{\alpha - p} \notin \mathbb{Q}`,String.raw`A = \bigl(A \cap (-\infty, \alpha)\bigr) \cup \bigl(A \cap (\alpha, \infty)\bigr)`],preset:{case:`rationals`,t:.707},presetCaption:{ko:String.raw`절단 \(c = \sqrt{2}/2 \approx 0.7071\): 무리수라서 유리수 점과 겹치지 않으므로 \(\mathbb{Q} \cap [0,1]\)을 덮으면서 갈라놓습니다.`,en:String.raw`The cut \(c = \sqrt{2}/2 \approx 0.7071\): being irrational, it hits no rational point, so it covers and splits \(\mathbb{Q} \cap [0,1]\).`},proof:[{text:{ko:String.raw`\(A \subseteq \mathbb{Q}\)가 두 점 이상을 가진다고 하고, \(p, q \in A\)이며 \(p < q\)인 두 점을 잡습니다.

\(\alpha = p + \frac{q - p}{\sqrt{2}}\)로 둡니다.

\(0 < \frac{1}{\sqrt{2}} < 1\)이므로 (즉 \(1 < \sqrt{2} < 2\)이므로) \(\alpha\)는 \(p\)와 \(q\) 사이의 엄격한 볼록결합입니다:

\(p < \alpha < q\).`,en:String.raw`Let \(A \subseteq \mathbb{Q}\) have at least two points, and pick \(p, q \in A\) with \(p < q\).

Put \(\alpha = p + \frac{q - p}{\sqrt{2}}\).

Since \(0 < \frac{1}{\sqrt{2}} < 1\) (that is, \(1 < \sqrt{2} < 2\)), \(\alpha\) is a strict convex combination of \(p\) and \(q\):

\(p < \alpha < q\).`}},{text:{ko:String.raw`\(\alpha\)는 무리수입니다. \(\alpha \in \mathbb{Q}\)라 가정해 보세요.

그러면 \(\alpha - p \in \mathbb{Q}\)이고 \(\alpha - p = \frac{q - p}{\sqrt{2}} > 0\)라서 0이 아니며, 식을 정리하면 \(\sqrt{2} = \frac{q - p}{\alpha - p}\)가 됩니다.

\(q - p \in \mathbb{Q}\)이고 0이 아니므로 이 비율은 유리수입니다 — \(\sqrt{2} \notin \mathbb{Q}\)라는 사실에 모순됩니다.

따라서 \(\alpha \notin \mathbb{Q}\)이고, 특히 \(\alpha\)는 \(A\)의 어떤 원소와도 같지 않습니다.`,en:String.raw`The number \(\alpha\) is irrational. Suppose \(\alpha \in \mathbb{Q}\).

Then \(\alpha - p \in \mathbb{Q}\), and \(\alpha - p = \frac{q - p}{\sqrt{2}} > 0\), so it is nonzero; rearranging gives \(\sqrt{2} = \frac{q - p}{\alpha - p}\).

Since \(q - p \in \mathbb{Q}\) is nonzero, this ratio is rational — contradicting the irrationality of \(\sqrt{2}\).

Hence \(\alpha \notin \mathbb{Q}\); in particular, \(\alpha\) equals no element of \(A\).`}},{text:{ko:String.raw`\(U = A \cap (-\infty, \alpha)\), \(V = A \cap (\alpha, \infty)\)로 둡니다.

열림: \((-\infty, \alpha)\)와 \((\alpha, \infty)\)는 \(\mathbb{R}\)에서 열린 구간이므로, \(U\)와 \(V\)는 부분공간 \(A\)에서 열려 있습니다.

서로소: \(x < \alpha\)와 \(x > \alpha\)는 양립할 수 없으므로 \(U \cap V = \emptyset\)입니다.

덮음: \(a \in A\)이면 \(a \in \mathbb{Q}\)라서 \(a \ne \alpha\)이고, 따라서 \(a < \alpha\) (즉 \(a \in U\))이거나 \(a > \alpha\) (즉 \(a \in V\))입니다. 즉 \(A = U \cup V\)입니다.

비어 있지 않음: \(p \in U\) (\(p < \alpha\))이고 \(q \in V\) (\(\alpha < q\))입니다.`,en:String.raw`Put \(U = A \cap (-\infty, \alpha)\) and \(V = A \cap (\alpha, \infty)\).

Open: \((-\infty, \alpha)\) and \((\alpha, \infty)\) are open rays in \(\mathbb{R}\), so \(U\) and \(V\) are open in the subspace \(A\).

Disjoint: \(x < \alpha\) and \(x > \alpha\) are incompatible, so \(U \cap V = \emptyset\).

Cover: if \(a \in A\) then \(a \in \mathbb{Q}\), so \(a \ne \alpha\), and therefore \(a < \alpha\) (so \(a \in U\)) or \(a > \alpha\) (so \(a \in V\)). That is, \(A = U \cup V\).

Nonempty: \(p \in U\) (as \(p < \alpha\)) and \(q \in V\) (as \(\alpha < q\)).`}},{text:{ko:String.raw`즉 \(A = U \cup V\)는 \(A\)의 분리이므로 \(A\)는 연결집합이 아닙니다.

\(A\)는 두 점 이상을 가진 \(\mathbb{Q}\)의 임의의 부분집합이었으므로, \(\mathbb{Q}\)의 연결인 부분집합은 점이 최대 하나뿐입니다 — \(\mathbb{Q}\)는 완전 비연결입니다.

씬의 절단 \(\sqrt{2}/2\)가 바로 이 \(\alpha\)의 한 예입니다 (\(p = 0\), \(q = 1\)에서 \(\alpha = \frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2}\)). 유리수 사이에는 늘 무리수가 끼어들어 집합을 갈라놓습니다.`,en:String.raw`Thus \(A = U \cup V\) is a separation of \(A\), so \(A\) is disconnected.

Since \(A\) was an arbitrary subset of \(\mathbb{Q}\) with at least two points, every connected subset of \(\mathbb{Q}\) has at most one point — \(\mathbb{Q}\) is totally disconnected.

The scene's cut \(\sqrt{2}/2\) is exactly this \(\alpha\) for \(p = 0\), \(q = 1\): \(\alpha = \frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2}\). Between any two rationals an irrational slips in and splits the set.`}}]}],i=[{id:`total-removed-half`,statement:{ko:String.raw`\(n\)단계에서 남은 \(2^{n-1}\)개 닫힌구간 각각에서 가운데 열린구간을 절대 길이 \(4^{-n}\)만큼 제거하는 fat Cantor 집합을 생각하세요.

전체 단계에 걸쳐 제거된 총길이가 \(\tfrac12\)임을 기하급수로 증명하고, \(N\)단계 뒤 남은 길이가 \(\dfrac{1 + 2^{-N}}{2}\)임을 확인하세요.`,en:String.raw`Consider the fat Cantor set: at stage \(n\), from each of the \(2^{n-1}\) surviving closed intervals remove the middle open interval of absolute length \(4^{-n}\).

Prove the total removed length over all stages is \(\tfrac12\) via a geometric series, and check that the length remaining after \(N\) stages is \(\dfrac{1 + 2^{-N}}{2}\).`},display:[String.raw`\sum_{n=1}^{\infty} 2^{n-1} \cdot 4^{-n} = \sum_{n=1}^{\infty} 2^{-n-1} = \frac{1/4}{1 - 1/2} = \frac12`,String.raw`1 - \sum_{n=1}^{N} 2^{-n-1} = 1 - \tfrac12(1 - 2^{-N}) = \tfrac12(1 + 2^{-N}) \;\xrightarrow[N\to\infty]{}\; \tfrac12`],preset:{stage:4},presetCaption:{ko:String.raw`\(n = 4\)단계: 구간 16개, 남은 길이 \(\tfrac{17}{32} = 0.53125 \to \tfrac12\) — 표준 칸토어는 16개 구간에 \(\left(\tfrac23\right)^4 = \tfrac{16}{81} \approx 0.197531 \to 0\).`,en:String.raw`Stage \(n = 4\): 16 intervals, remaining length \(\tfrac{17}{32} = 0.53125 \to \tfrac12\) — the standard Cantor set has 16 intervals with \(\left(\tfrac23\right)^4 = \tfrac{16}{81} \approx 0.197531 \to 0\).`},proof:[{text:{ko:String.raw`실행 가능성 확인: \(n\)단계 구간의 공통 길이를 \(\ell_n\)이라 하면 \(\ell_0 = 1\)이고 점화식은 \(\ell_n = (\ell_{n-1} - 4^{-n})/2\)입니다.

귀납법으로 정확한 공식 \(\ell_n = \frac{2^{-n} + 4^{-n}}{2}\)를 얻습니다 (\(n = 0\): \(\frac{1 + 1}{2} = 1\); 단계는 직접 대입으로 확인됩니다).

따라서 \(\ell_{n-1} = \frac{2^{-(n-1)} + 4^{-(n-1)}}{2} > \frac{2^{-(n-1)}}{2} = 2^{-n} > 4^{-n}\) (\(n \ge 1\))이므로, 길이 \(4^{-n}\)인 가운데 구간은 실제로 들어갑니다 — 제거가 모든 단계에서 가능합니다.`,en:String.raw`Feasibility check: let \(\ell_n\) be the common length of the stage-\(n\) intervals; then \(\ell_0 = 1\) and \(\ell_n = (\ell_{n-1} - 4^{-n})/2\).

Induction gives the exact formula \(\ell_n = \frac{2^{-n} + 4^{-n}}{2}\) (\(n = 0\): \(\frac{1 + 1}{2} = 1\); the step is a direct substitution).

Hence \(\ell_{n-1} = \frac{2^{-(n-1)} + 4^{-(n-1)}}{2} > \frac{2^{-(n-1)}}{2} = 2^{-n} > 4^{-n}\) for \(n \ge 1\), so a middle interval of length \(4^{-n}\) genuinely fits — the removal is possible at every stage.`}},{text:{ko:String.raw`\(n\)단계에서는 \(n-1\)단계에서 살아남은 닫힌구간이 \(2^{n-1}\)개 있고, 각 구간에서 길이 \(4^{-n}\)인 가운데 열린구간을 정확히 하나씩 제거합니다.

서로 다른 단계·서로 다른 구간에서 제거된 열린구간들은 모두 서로소입니다 (닫힌구간 안쪽에서 파낸 것이고, 단계가 진행될수록 남은 집합이 중첩되므로).

따라서 \(N\)단계까지 제거된 총길이는 단계별 기여의 합입니다.`,en:String.raw`At stage \(n\) there are \(2^{n-1}\) surviving closed intervals from stage \(n-1\), and exactly one middle open interval of length \(4^{-n}\) is removed from each.

Removed open intervals from different stages and different parent intervals are all pairwise disjoint (each is carved out of the interior of a closed interval, and the surviving sets are nested).

So the total length removed through stage \(N\) is the sum of the per-stage contributions.`}},{text:{ko:String.raw`\(n\)단계의 기여는 \(2^{n-1} \cdot 4^{-n}\)입니다.

지수를 정리하면 \(\dfrac{2^{n-1}}{4^n} = \dfrac{2^{n-1}}{2^{2n}} = 2^{-n-1}\)이므로, 제거된 총길이는 공비 \(\tfrac12\)인 기하급수 \(\sum_{n=1}^{\infty} 2^{-n-1}\)입니다.

첫 항이 \(\tfrac14\)이므로 합은 \(\dfrac{1/4}{1 - 1/2} = \tfrac12\)입니다.`,en:String.raw`The stage-\(n\) contribution is \(2^{n-1} \cdot 4^{-n}\).

Simplifying the exponent, \(\dfrac{2^{n-1}}{4^n} = \dfrac{2^{n-1}}{2^{2n}} = 2^{-n-1}\), so the total removed length is the geometric series \(\sum_{n=1}^{\infty} 2^{-n-1}\) with ratio \(\tfrac12\).

Its first term is \(\tfrac14\), giving \(\dfrac{1/4}{1 - 1/2} = \tfrac12\).`}},{text:{ko:String.raw`유한 단계 버전: \(N\)단계까지 제거된 총길이는 부분합 \(\sum_{n=1}^{N} 2^{-n-1} = \tfrac14 \cdot \dfrac{1 - 2^{-N}}{1 - 1/2} = \tfrac12(1 - 2^{-N})\)입니다.

\([0,1]\)에서 시작했으므로 \(N\)단계 뒤 남은 길이는 \(1 - \tfrac12(1 - 2^{-N}) = \tfrac12(1 + 2^{-N})\)이고, \(N \to \infty\)에서 \(\tfrac12\)로 수렴합니다.

\(N = 1\)이면 \(1 - \tfrac14 = \tfrac34 = \tfrac12(1 + \tfrac12)\) — 구간 \([0, \tfrac38]\)과 \([\tfrac58, 1]\)이 남고 가운데 \((\tfrac38, \tfrac58)\)이 파인 것과 일치합니다.`,en:String.raw`The finite-stage version: through stage \(N\) the total removed is the partial sum \(\sum_{n=1}^{N} 2^{-n-1} = \tfrac14 \cdot \dfrac{1 - 2^{-N}}{1 - 1/2} = \tfrac12(1 - 2^{-N})\).

Starting from \([0,1]\), the length remaining after \(N\) stages is \(1 - \tfrac12(1 - 2^{-N}) = \tfrac12(1 + 2^{-N})\), tending to \(\tfrac12\) as \(N \to \infty\).

For \(N = 1\) this is \(1 - \tfrac14 = \tfrac34 = \tfrac12(1 + \tfrac12)\) — the surviving intervals \([\,0, \tfrac38\,]\) and \([\,\tfrac58, 1\,]\) with the middle \((\tfrac38, \tfrac58)\) carved out, exactly as the scene shows.`}},{text:{ko:String.raw`유한 부분합에서 무한 합으로의 이행은 Lebesgue 측도의 가산 가법성(아래로부터의 연속성)에 근거합니다: 서로소인 제거 구간들의 합집합 \(G\)에 대해 \(m(G) = \sum_{n=1}^{\infty} 2^{n-1} 4^{-n} = \lim_{N \to \infty} \sum_{n=1}^{N} 2^{-n-1} = \tfrac12\)입니다.

따라서 제거된 열린구간들의 서로소 합집합 \(G\)의 Lebesgue 측도는 \(m(G) = \tfrac12\)이고, \(C = [0,1] \setminus G\)이므로 \(m(C) = 1 - \tfrac12 = \tfrac12 > 0\)입니다.

표준 칸토어 집합(\(n\)단계에서 각 구간의 가운데 \(1/3\) 제거, 남은 길이 \((2/3)^n \to 0\))과의 차이가 여기서 갈립니다.`,en:String.raw`Passing from the finite partial sums to the infinite total uses countable additivity of Lebesgue measure (continuity from below): for the pairwise-disjoint union \(G\) of the removed intervals, \(m(G) = \sum_{n=1}^{\infty} 2^{n-1} 4^{-n} = \lim_{N \to \infty} \sum_{n=1}^{N} 2^{-n-1} = \tfrac12\).

Hence the pairwise-disjoint union \(G\) of the removed open intervals has Lebesgue measure \(m(G) = \tfrac12\), and since \(C = [0,1] \setminus G\), we get \(m(C) = 1 - \tfrac12 = \tfrac12 > 0\).

This is where the fat Cantor set parts company with the standard Cantor set (middle third removed each stage, remaining length \((2/3)^n \to 0\)).`}}]},{id:`nowhere-dense-perfect`,statement:{ko:String.raw`fat Cantor 집합 \(C\)를 \(F_0 = [0,1]\), \(F_n\)은 \(F_{n-1}\)의 각 닫힌구간에서 가운데 열린구간(길이 \(4^{-n}\))을 제거한 것, \(C = \bigcap_{n \ge 0} F_n\)으로 정의하세요.

\(C\)가 compact이고, nowhere dense이며, perfect함을 증명하세요 (내부는 비어 있지만, \(m(C) = \tfrac12\)임에 유의).`,en:String.raw`Let the fat Cantor set be \(C = \bigcap_{n \ge 0} F_n\), where \(F_0 = [0,1]\) and \(F_n\) removes the middle open interval (length \(4^{-n}\)) from each closed interval of \(F_{n-1}\).

Prove \(C\) is compact, nowhere dense, and perfect (noting that its interior is empty yet \(m(C) = \tfrac12\)).`},display:[String.raw`\ell_n = \frac{\ell_{n-1} - 4^{-n}}{2} < 2^{-n}`,String.raw`C = \bigcap_{n\ge 0} F_n\ \text{closed} \subset [0,1]\ \text{compact}`,String.raw`\operatorname{int}(C) = \varnothing\ \text{(every open interval meets a removed piece)}`,String.raw`x \in C \Rightarrow x = \lim z_n,\ z_n \in C \setminus \{x\}`],preset:{stage:4},presetCaption:{ko:String.raw`\(n = 4\)단계: 구간 16개에 남은 길이 \(0.53125\) — 16개의 얇은 조각이지만 위상적으로는 "속이 텅 빈" 집합입니다 (아래 증명: 모든 열린구간이 제거된 조각과 만납니다).`,en:String.raw`Stage \(n = 4\): 16 intervals with remaining length \(0.53125\) — sixteen thin slivers, yet topologically the set is "hollow inside" (proof below: every open interval meets a removed piece).`},proof:[{text:{ko:String.raw`Compact: 각 \(F_n\)은 닫힌구간들의 유한 합집합이므로 닫힌집합이고, \(C = \bigcap_n F_n\)은 닫힌집합들의 교집합이므로 닫혀 있습니다. \(C \subset [0,1]\)이 유계이므로 Heine–Borel 정리로 \(C\)는 compact합니다.`,en:String.raw`Compact: each \(F_n\) is a finite union of closed intervals, hence closed, and \(C = \bigcap_n F_n\) is an intersection of closed sets, hence closed. Since \(C \subset [0,1]\) is bounded, Heine–Borel makes \(C\) compact.`}},{text:{ko:String.raw`길이 보조정리: 대칭성으로 \(n\)단계의 모든 구간은 길이가 같습니다.

그 길이를 \(\ell_n\)이라 하면 \(\ell_0 = 1\), \(\ell_n = (\ell_{n-1} - 4^{-n})/2\)이므로 \(\ell_n < \ell_{n-1}/2\)입니다.

부등식 \(\ell_n < 2^{-n}\)은 \(n \ge 1\)에서만 성립합니다 (\(n = 0\)이면 \(1 < 1\)로 거짓입니다).

Base case는 \(n = 1\)입니다: 구성에서 직접 \(\ell_1 = (1 - 4^{-1})/2 = 3/8 < 1/2 = 2^{-1}\)입니다.

Inductive step: \(n \ge 2\)이고 \(\ell_{n-1} < 2^{-(n-1)}\)이면 \(\ell_n < \ell_{n-1}/2 < 2^{-(n-1)}/2 = 2^{-n}\)입니다.

따라서 모든 \(n \ge 1\)에 대해 \(\ell_n < 2^{-n}\)이며, 특히 \(\ell_n \to 0\)입니다.`,en:String.raw`Length lemma: by symmetry every stage-\(n\) interval has the same length.

Calling it \(\ell_n\), we have \(\ell_0 = 1\) and \(\ell_n = (\ell_{n-1} - 4^{-n})/2\), so \(\ell_n < \ell_{n-1}/2\).

The bound \(\ell_n < 2^{-n}\) is valid only for \(n \ge 1\) (at \(n = 0\) it would read \(1 < 1\), which is false).

The base case is \(n = 1\), verified directly from the construction: \(\ell_1 = (1 - 4^{-1})/2 = 3/8 < 1/2 = 2^{-1}\).

Inductive step: for \(n \ge 2\), if \(\ell_{n-1} < 2^{-(n-1)}\) then \(\ell_n < \ell_{n-1}/2 < 2^{-(n-1)}/2 = 2^{-n}\).

Hence \(\ell_n < 2^{-n}\) for every \(n \ge 1\), and in particular \(\ell_n \to 0\).`}},{text:{ko:String.raw`Nowhere dense: \(C\)가 닫혀 있으므로 \(\overline{C}\)의 내부가 비었음을 보이면 됩니다.

길이가 \(\delta > 0\)인 열린구간 \(I\)를 잡고, \((0,1)\) 안에 들어가도록 축소해도 됩니다 (그렇지 않으면 \(I \not\subset C\)가 자명).

\(2^{-n} < \delta\)인 \(n\)을 택하면 \(\ell_n < \delta\)입니다.

\(I\)가 어떤 제거된 열린구간과도 만나지 않는다고 가정하면, \(I \subset F_n\)이 됩니다.

\(F_n\)은 서로소인 닫힌구간들의 합집합이고 \(I\)는 연결집합이므로, \(I\)는 그 중 정확히 하나의 구간 \(J\) 안에 통째로 들어갑니다.

그런데 \(\delta = \lvert I \rvert \le \lvert J \rvert = \ell_n < \delta\) — 모순입니다.`,en:String.raw`Nowhere dense: since \(C\) is closed, it suffices to show its closure — itself — has empty interior.

Take a nonempty open interval \(I\) of length \(\delta > 0\), shrinking it into \((0,1)\) if needed (otherwise \(I \not\subset C\) trivially).

Choose \(n\) with \(2^{-n} < \delta\), so \(\ell_n < \delta\).

Suppose \(I\) meets no removed open interval; then \(I \subset F_n\).

But \(F_n\) is a union of pairwise-disjoint closed intervals and \(I\) is connected, so \(I\) lies entirely inside exactly one of them, say \(J\).

Then \(\delta = \lvert I \rvert \le \lvert J \rvert = \ell_n < \delta\) — contradiction.`}},{text:{ko:String.raw`따라서 \(I\)는 항상 제거된 열린구간과 만나고, 그 교집합은 \(I \setminus C\)의 비어 있지 않은 열린 부분집합입니다. 즉 어떤 비어 있지 않은 열린구간도 \(C\) 안에 들어가지 않으므로 \(\operatorname{int}(C) = \varnothing\) — \(C\)는 nowhere dense입니다.`,en:String.raw`Hence \(I\) always meets a removed open interval, and the intersection is a nonempty open subset of \(I \setminus C\). No nonempty open interval sits inside \(C\), so \(\operatorname{int}(C) = \varnothing\) — \(C\) is nowhere dense.`}},{text:{ko:String.raw`Perfect: \(x \in C\)라 하자.

각 단계 \(n\)에서 \(x\)는 어떤 \(n\)단계 구간 \(J_n\)에 속합니다.

\(n+1\)단계에서 \(J_n\)은 가운데 열린구간을 사이에 두고 두 개의 닫힌 자식구간 \(J', J''\)로 갈라지고, \(x\)는 그 중 하나(예컨대 \(J'\))에 속합니다.

형제 구간 \(J''\) 안의 점을 명시적으로 만듭니다: \(J''\)에서 시작해 각 단계마다 자식 중 하나(예컨대 왼쪽 자식)를 골라 중첩 사슬 \(J'' = K_{n+1} \supset K_{n+2} \supset \cdots\)를 만들면 \(\lvert K_j \rvert = \ell_j \to 0\)이므로, 중첩구간 원리로 교집합 \(\bigcap_j K_j\)는 한 점 \(z_n\)으로 이루어집니다.

각 \(K_j\)는 어떤 \(F_j\)의 닫힌구간이고 \(F_j\)들은 중첩되므로 \(z_n \in \bigcap_j F_j = C\)이며, 처음 선택 때문에 \(z_n \in J''\)입니다.

가운데 간격이 \(x\)와 \(z_n\)을 분리하므로 \(z_n \ne x\)이고, \(\lvert z_n - x \rvert \le \ell_n < 2^{-n} \to 0\)입니다 (\(n \ge 1\)).

따라서 \(x\)의 모든 근방은 \(C \setminus \{x\}\)의 점을 포함하므로 \(x\)는 \(C\)의 극한점입니다.

모든 \(x \in C\)에 대해 성립하므로 \(C\)는 perfect합니다.`,en:String.raw`Perfect: let \(x \in C\).

At each stage \(n\), \(x\) lies in some stage-\(n\) interval \(J_n\).

At stage \(n+1\), \(J_n\) splits into two closed children \(J', J''\) separated by the removed open middle, and \(x\) belongs to one of them, say \(J'\).

Build a point of the sibling \(J''\) explicitly: starting from \(J''\), choose one child at each stage (e.g. always the left child) to form a nested chain \(J'' = K_{n+1} \supset K_{n+2} \supset \cdots\); since \(\lvert K_j \rvert = \ell_j \to 0\), the nested-interval principle says \(\bigcap_j K_j\) is a single point \(z_n\).

Each \(K_j\) is a closed interval of some \(F_j\) and the \(F_j\) are nested, so \(z_n \in \bigcap_j F_j = C\), and by construction \(z_n \in J''\).

The middle gap separates \(x\) from \(z_n\), so \(z_n \ne x\), and \(\lvert z_n - x \rvert \le \ell_n < 2^{-n} \to 0\) (for \(n \ge 1\)).

Hence every neighborhood of \(x\) contains a point of \(C \setminus \{x\}\), so \(x\) is a limit point of \(C\).

This holds for every \(x \in C\), so \(C\) is perfect.`}}]},{id:`open-dense-complement`,statement:{ko:String.raw`\(U = [0,1] \setminus C\)를 fat Cantor 집합의 여집합이라 하세요.

\(U\)가 (상대위상으로) 열려 있고 \([0,1]\)에서 조밀하며 \(m(U) = \tfrac12\)임을 증명하세요.

그리고 다음 표를 완성하며 마무리하세요: "내부가 비었고 길이는 절반" — 측도와 위상적 크기는 독립적인 개념이다.`,en:String.raw`Let \(U = [0,1] \setminus C\) be the complement of the fat Cantor set.

Prove \(U\) is (relatively) open, dense in \([0,1]\), and has \(m(U) = \tfrac12\).

Then finish by completing this table: "empty interior, yet half the length" — measure and topological size are independent notions.`},display:[String.raw`U = \bigcup_{\text{stages}} \text{(removed open intervals)}`,String.raw`m(U) = \tfrac12,\quad m(C) = \tfrac12`,String.raw`\begin{array}{c|cc} & m = 0 & m > 0 \\ \hline \text{nowhere dense} & \text{standard Cantor} & \textbf{fat Cantor} \\ \text{dense} & \mathbb{Q} \cap [0,1] & \text{irrationals in } [0,1] \end{array}`],preset:{stage:4},presetCaption:{ko:String.raw`\(n = 4\)단계: 제거된 열린구간들의 길이 합은 \(\tfrac12(1 - 2^{-4}) = 0.46875\), 남은 길이는 \(0.53125\) — 여집합은 이미 절반에 육박하고, 극한에서는 정확히 \(\tfrac12\)가 됩니다.`,en:String.raw`Stage \(n = 4\): the removed open intervals total \(\tfrac12(1 - 2^{-4}) = 0.46875\) in length, leaving \(0.53125\) — the complement is already nearly half, and in the limit exactly \(\tfrac12\).`},proof:[{text:{ko:String.raw`\(U\)는 닫힌집합 \(C\)의 여집합이므로 \([0,1]\)의 상대위상에서 열려 있습니다. 구체적으로 \(U\)는 모든 단계에서 제거된 열린구간들의 합집합 — 서로소인 열린구간들의 가산 합집합 — 입니다.`,en:String.raw`\(U\) is the complement of the closed set \(C\), hence relatively open in \([0,1]\). Concretely, \(U\) is the union of the removed open intervals over all stages — a countable union of pairwise-disjoint open intervals.`}},{text:{ko:String.raw`Dense: 앞 문제에서 모든 비어 있지 않은 열린구간이 제거된 열린구간과 만난다는 것을 보였습니다.

상대위상까지 처리합니다: \([0,1]\)의 비어 있지 않은 상대적 열린집합은 열린구간이거나 끝점에 닿은 \([0, a)\) (\(a > 0\)), \((b, 1]\) (\(b < 1\)) 꼴을 포함합니다.

끝점 경우에도 \((0, a)\) 또는 \((b, 1)\)이라는 비어 있지 않은 열린구간을 포함하므로 앞의 논증이 그대로 적용됩니다.

즉 모든 상대적 열린집합은 \(U\)의 점을 포함하므로, \(U\)는 \([0,1]\)에서 조밀합니다.`,en:String.raw`Dense: the previous problem showed that every nonempty open interval meets a removed open interval.

Handle the relative topology as well: a nonempty relatively open subset of \([0,1]\) contains either an open interval or an endpoint-touching piece \([0, a)\) with \(a > 0\) or \((b, 1]\) with \(b < 1\).

In the endpoint cases it still contains a nonempty open interval, namely \((0, a)\) or \((b, 1)\), so the previous argument applies verbatim.

Hence every relatively open set contains a point of \(U\), so \(U\) is dense in \([0,1]\).`}},{text:{ko:String.raw`측도: 제거된 열린구간들은 서로소이므로 \(m(U) = \sum_{n=1}^{\infty} 2^{n-1} 4^{-n} = \tfrac12\)입니다 (첫 번째 문제의 기하급수). 따라서 \(m(C) = m([0,1]) - m(U) = 1 - \tfrac12 = \tfrac12\)입니다.`,en:String.raw`Measure: the removed open intervals are pairwise disjoint, so \(m(U) = \sum_{n=1}^{\infty} 2^{n-1} 4^{-n} = \tfrac12\) (the geometric series from the first problem). Hence \(m(C) = m([0,1]) - m(U) = 1 - \tfrac12 = \tfrac12\).`}},{text:{ko:String.raw`정리하면: \(C\)는 닫혀 있고, 내부가 비어 있고(nowhere dense), perfect하며, 길이는 \(\tfrac12\)입니다.

그 여집합 \(U\)는 열려 있고, 조밀하며, 길이는 \(\tfrac12\)입니다.

위의 표가 보여주듯 네 칸이 모두 찹니다 — 표준 칸토어 집합(nowhere dense, 측도 0), fat Cantor 집합(nowhere dense, 측도 \(\tfrac12\)), \([0,1]\)의 유리수들(조밀, 측도 0), 무리수들(조밀, 측도 1).

심지어 "열려 있고 조밀한데 측도가 임의로 작은" 집합도 있습니다 (유리수를 \(q_1, q_2, \dots\)로 나열하고 — 인덱스는 \(k \ge 1\)부터 — 각 \(q_k\)마다 반지름 \(\varepsilon/2^k\)인 열린구간을 잡은 합집합: 각 구간의 길이는 \(2\varepsilon/2^k\)이고 \(\sum_{k=1}^{\infty} 2\varepsilon/2^k = 2\varepsilon\)이므로 전체 측도 \(\le 2\varepsilon\)).

결론: "내부가 비었다"는 위상적 진술과 "길이가 얼마이다"는 측도적 진술은 서로에게 아무것도 강제하지 않습니다 — fat Cantor 집합은 그 독립성을 보여주는 가장 극적인 예입니다.`,en:String.raw`To summarize: \(C\) is closed, has empty interior (nowhere dense), is perfect, and has length \(\tfrac12\); its complement \(U\) is open, dense, and has length \(\tfrac12\).

The table above fills all four cells — the standard Cantor set (nowhere dense, measure 0), the fat Cantor set (nowhere dense, measure \(\tfrac12\)), the rationals in \([0,1]\) (dense, measure 0), the irrationals (dense, measure 1).

There are even sets that are open and dense with arbitrarily small measure (enumerate the rationals as \(q_1, q_2, \dots\) — the index starts at \(k \ge 1\) — and around each \(q_k\) take an open interval of radius \(\varepsilon/2^k\): each interval has length \(2\varepsilon/2^k\), and \(\sum_{k=1}^{\infty} 2\varepsilon/2^k = 2\varepsilon\), so the total measure is \(\le 2\varepsilon\)).

The punchline: the topological statement "has empty interior" and the measure-theoretic statement "has such-and-such length" impose nothing on each other — and the fat Cantor set is the most dramatic witness to their independence.`}}]}],a=[{id:`peano-uniform-limit`,statement:{ko:String.raw`차수 \(k\) 근사곡선 \(p_k: [0,1] \to [0,1]^2\) (9개의 부분정사각형을 뱀 모양으로 도는 꺾은선의 재귀적 세분)가 균등 코시 수열임을 보이고, 균등 극한 \(p\)가 연속임을 완전히 증명하세요.`,en:String.raw`Show that the order-\(k\) approximants \(p_k: [0,1] \to [0,1]^2\) (the recursive subdivision of the snake polyline through the 9 subsquares) are uniformly Cauchy, and prove completely that the uniform limit \(p\) is continuous.`},display:[String.raw`\|p_{k+1} - p_k\|_\infty \le \frac{\sqrt{2}}{3^k} \to 0`],preset:{order:1,t:.25,showGrid:!0},presetCaption:{ko:String.raw`차수 \(k = 1\): 9개의 선분이 9개의 부분정사각형 중심을 뱀 모양으로 잇습니다 — 이 패턴이 각 정사각형 안에서 재귀적으로 반복됩니다.`,en:String.raw`Order \(k = 1\): 9 segments snake through the 9 subsquare centers — this pattern repeats recursively inside each subsquare.`},proof:[{text:{ko:String.raw`각 \(p_k\)는 꺾은선이므로 연속입니다. 매개화는 다음과 같습니다: \(p_k\)는 각 구간 \([(j-1)/9^k,\, j/9^k]\)를 \(j\)번째 \(k\)단계 부분정사각형 \(Q_j^{(k)}\) (한 변 \(3^{-k}\)) 안에서 뱀 모양 순서대로 돕니다.`,en:String.raw`Each \(p_k\) is a polyline, hence continuous. The parametrization is: \(p_k\) traverses each interval \([(j-1)/9^k,\, j/9^k]\) inside the \(j\)-th level-\(k\) subsquare \(Q_j^{(k)}\) (side \(3^{-k}\)), in snake order.`}},{text:{ko:String.raw`\(p_{k+1}\)은 세분(refinement)입니다: 구간 \([(j-1)/9^k,\, j/9^k]\) 위에서 \(p_{k+1}\)은 같은 \(Q_j^{(k)}\) 안에 들어 있는 9개의 \((k+1)\)단계 부분정사각형을 돕니다 (재귀가 각 \(Q_j\) 안에서 같은 패턴을 적용하므로). 따라서 모든 \(t\)에 대해 \(p_k(t)\)와 \(p_{k+1}(t)\)는 같은 \(Q_j^{(k)}\) 안에 있고, \(|p_{k+1}(t) - p_k(t)| \le \mathrm{diam}\, Q_j^{(k)} = \sqrt{2}\, 3^{-k}\)입니다.

꼬리합을 취합니다: \(m > n\)이면 삼각부등식으로 \(|p_m(t) - p_n(t)| \le \sum_{j=n}^{m-1} |p_{j+1}(t) - p_j(t)| \le \sum_{j=n}^{m-1} \sqrt{2}\, 3^{-j} = \sqrt{2}\, 3^{-n}\, \frac{1 - 3^{-(m-n)}}{1 - 1/3} \le \frac{3\sqrt{2}}{2}\, 3^{-n}\)입니다. 우변은 \(t\)와 \(m\)에 무관하게 \(n \to \infty\)일 때 0으로 가므로 \((p_k)\)는 균등 코시 수열입니다. \(\mathbb{R}^2\)이 완비이므로 각 \(t\)에서 \(p_k(t)\)가 수렴하고, 균등 코시성은 그 수렴이 균등함을 보장합니다 — 극한을 \(p\)라 하세요.`,en:String.raw`\(p_{k+1}\) refines \(p_k\): on \([(j-1)/9^k,\, j/9^k]\) it traverses the 9 level-\((k+1)\) subsquares inside the same \(Q_j^{(k)}\) (the recursion applies the same pattern within each \(Q_j\)). Hence for every \(t\), \(p_k(t)\) and \(p_{k+1}(t)\) both lie in \(Q_j^{(k)}\), so \(|p_{k+1}(t) - p_k(t)| \le \mathrm{diam}\, Q_j^{(k)} = \sqrt{2}\, 3^{-k}\).

Sum the tail: for \(m > n\), the triangle inequality gives \(|p_m(t) - p_n(t)| \le \sum_{j=n}^{m-1} |p_{j+1}(t) - p_j(t)| \le \sum_{j=n}^{m-1} \sqrt{2}\, 3^{-j} = \sqrt{2}\, 3^{-n}\, \frac{1 - 3^{-(m-n)}}{1 - 1/3} \le \frac{3\sqrt{2}}{2}\, 3^{-n}\). The right side tends to 0 as \(n \to \infty\), independently of \(t\) and \(m\), so \((p_k)\) is uniformly Cauchy. Since \(\mathbb{R}^2\) is complete, \(p_k(t)\) converges for each \(t\), and uniform Cauchyness makes the convergence uniform — call the limit \(p\).`}},{text:{ko:String.raw`연속함수들의 균등 극한은 연속입니다: \(|p(s) - p(t)| \le |p(s) - p_k(s)| + |p_k(s) - p_k(t)| + |p_k(t) - p(t)|\)에서, 균등수렴으로 첫째·셋째 항을 작게 한 뒤 고정된 \(k\)에 대해 \(p_k\)의 연속성으로 가운데 항을 작게 하면 됩니다 (\(\varepsilon/3\) 논증). 따라서 \(p: [0,1] \to [0,1]^2\)는 연속인 극한 곡선입니다.`,en:String.raw`A uniform limit of continuous functions is continuous: from \(|p(s) - p(t)| \le |p(s) - p_k(s)| + |p_k(s) - p_k(t)| + |p_k(t) - p(t)|\), make the first and third terms small by uniform convergence, then the middle term small by continuity of the fixed \(p_k\) (the \(\varepsilon/3\) argument). Hence \(p: [0,1] \to [0,1]^2\) is a continuous limit curve.`}}]},{id:`peano-surjective`,statement:{ko:String.raw`위 문제의 극한 곡선 \(p: [0,1] \to [0,1]^2\)가 전사함수임을 완전히 증명하세요.`,en:String.raw`Prove completely that the limit curve \(p: [0,1] \to [0,1]^2\) from the problem above is surjective.`},display:[String.raw`p([0,1]) = [0,1]^2`],preset:{order:2,t:.5,showGrid:!0},presetCaption:{ko:String.raw`차수 \(k = 2\): 81개의 선분이 \(9 \times 9\) 격자의 모든 칸을 방문합니다 — 차수가 올라갈수록 정사각형이 채워집니다.`,en:String.raw`Order \(k = 2\): 81 segments visit every cell of the \(9 \times 9\) grid — the square fills up as the order grows.`},proof:[{text:{ko:String.raw`\(y \in [0,1]^2\)를 임의로 잡습니다. 각 단계 \(k\)에서 \(y\)는 어떤 \(k\)단계 부분정사각형 \(Q^{(k)}\) (한 변 \(3^{-k}\)) 안에 들어 있습니다.

\(p_k\)는 모든 \(k\)단계 부분정사각형을 방문하므로, \(p_k(t_k) \in Q^{(k)}\)인 \(t_k\)가 존재합니다.`,en:String.raw`Take any \(y \in [0,1]^2\). At each level \(k\), \(y\) lies in some level-\(k\) subsquare \(Q^{(k)}\) (side \(3^{-k}\)).

Since \(p_k\) visits every level-\(k\) subsquare, there is \(t_k\) with \(p_k(t_k) \in Q^{(k)}\).`}},{text:{ko:String.raw`\((t_k)\)는 \([0,1]\)의 수열이므로 컴팩트성에 의해 수렴하는 부분수열 \(t_{k_j} \to t\)가 존재합니다. 연속성에 의해 \(p(t_{k_j}) \to p(t)\)입니다.

그런데 \(|p(t_{k_j}) - y| \le |p(t_{k_j}) - p_{k_j}(t_{k_j})| + |p_{k_j}(t_{k_j}) - y|\)에서, 첫째 항은 peano-uniform-limit에서 증명한 균등 꼬리 추정 (\(m > n\)이면 \(|p_m - p_n| \le \frac{3\sqrt{2}}{2}\, 3^{-n}\); \(m \to \infty\)로 보냄)에 의해 \(\frac{3\sqrt{2}}{2}\, 3^{-k_j}\) 이하이고, 둘째 항은 두 점이 모두 지름 \(\sqrt{2}\, 3^{-k_j}\)인 같은 \(Q^{(k_j)}\) 안에 있으므로 \(\sqrt{2}\, 3^{-k_j}\) 이하입니다. 둘 다 \(0\)으로 가므로 \(p(t) = y\)입니다.`,en:String.raw`Since \((t_k)\) lies in \([0,1]\), compactness gives a convergent subsequence \(t_{k_j} \to t\). By continuity, \(p(t_{k_j}) \to p(t)\).

But \(|p(t_{k_j}) - y| \le |p(t_{k_j}) - p_{k_j}(t_{k_j})| + |p_{k_j}(t_{k_j}) - y|\): the first term is at most \(\frac{3\sqrt{2}}{2}\, 3^{-k_j}\) by the uniform tail estimate proved in peano-uniform-limit (\(|p_m - p_n| \le \frac{3\sqrt{2}}{2}\, 3^{-n}\) for \(m > n\); let \(m \to \infty\)), and the second is at most \(\sqrt{2}\, 3^{-k_j}\) because both points lie in the same \(Q^{(k_j)}\) of diameter \(\sqrt{2}\, 3^{-k_j}\). Both tend to \(0\), hence \(p(t) = y\).`}},{text:{ko:String.raw`\(y\)가 임의였으므로 \(p\)는 \([0,1]^2\)의 모든 점을 지나갑니다 — 연속인 전사함수 \(p: [0,1] \to [0,1]^2\)입니다. 1차원 구간이 2차원 정사각형을 "채울" 수 있다는 것이 페아노의 발견(1890)입니다.`,en:String.raw`Since \(y\) was arbitrary, \(p\) passes through every point of \([0,1]^2\) — a continuous surjection \(p: [0,1] \to [0,1]^2\). That a 1-dimensional interval can "fill" a 2-dimensional square was Peano's 1890 discovery.`}}]},{id:`peano-not-injective`,statement:{ko:String.raw`연속인 전단사함수 \([0,1] \to [0,1]^2\)는 존재하지 않음을 완전히 증명하세요 (Netto 정리). 따라서 위의 페아노 곡선은 단사함수일 수 없습니다.`,en:String.raw`Prove completely that no continuous bijection \([0,1] \to [0,1]^2\) exists (Netto's theorem). Hence the Peano curve above cannot be injective.`},display:[String.raw`\text{no continuous bijection } [0,1] \to [0,1]^2`],preset:{order:3,t:.75,showGrid:!1},presetCaption:{ko:String.raw`차수 \(k = 3\): 729개의 선분 — 곡선이 자기 자신을 수없이 가로지르므로 단사일 수 없음이 눈으로 보입니다.`,en:String.raw`Order \(k = 3\): 729 segments — the curve crosses itself countless times, visibly ruling out injectivity.`},proof:[{text:{ko:String.raw`두 보조정리부터 증명합니다. (A) 컴팩트 집합의 연속상은 컴팩트: \(K\) 컴팩트, \(f\) 연속이면 \(f(K)\)의 열린 덮개 \(\{U_i\}\)에 대해 \(\{f^{-1}(U_i)\}\)는 \(K\)의 열린 덮개이므로 유한 부분덮개가 있고, 그 상들이 \(f(K)\)를 덮습니다.

(B) Hausdorff 공간의 컴팩트 부분집합은 닫혀 있음: \(K \subseteq Y\) 컴팩트, \(y \notin K\)이면 각 \(x \in K\)에 대해 서로소인 근방 \(U_x \ni x\), \(V_x \ni y\)가 존재하고 (Hausdorff), 유한개의 \(U_{x_i}\)가 \(K\)를 덮으므로 \(\bigcap V_{x_i}\)는 \(K\)와 만나지 않는 \(y\)의 근방입니다.`,en:String.raw`Two lemmas first. (A) The continuous image of a compact set is compact: if \(K\) is compact and \(f\) continuous, an open cover \(\{U_i\}\) of \(f(K)\) pulls back to an open cover \(\{f^{-1}(U_i)\}\) of \(K\), which has a finite subcover whose images cover \(f(K)\).

(B) A compact subset of a Hausdorff space is closed: if \(K \subseteq Y\) is compact and \(y \notin K\), each \(x \in K\) has disjoint neighborhoods \(U_x \ni x\), \(V_x \ni y\) (Hausdorff); finitely many \(U_{x_i}\) cover \(K\), so \(\bigcap V_{x_i}\) is a neighborhood of \(y\) missing \(K\).`}},{text:{ko:String.raw`Netto 정리: 컴팩트 공간에서 Hausdorff 공간으로의 연속 전단사는 동형사상(homeomorphism)입니다. 실제로 \(F \subseteq K\)가 닫혀 있으면 \(F\)는 컴팩트합니다 — 컴팩트 집합의 닫힌 부분집합은 컴팩트합니다 (\(K = [0,1]\)인 경우 Heine–Borel 정리) — 따라서 \(f(F)\)는 (A)에 의해 컴팩트하므로 (B)에 의해 \(Y\)에서 닫혀 있습니다 — 즉 \(f\)는 닫힌 사상입니다.

닫힌 전단사는 동형사상입니다 (\((f^{-1})^{-1}(F) = f(F)\)가 닫혀 있으므로 \(f^{-1}\)이 연속).`,en:String.raw`Netto's theorem: a continuous bijection from a compact space to a Hausdorff space is a homeomorphism. Indeed, if \(F \subseteq K\) is closed then \(F\) is compact — a closed subset of a compact set is compact (for \(K = [0,1]\) this is Heine–Borel) — so \(f(F)\) is compact by (A) and closed in \(Y\) by (B) — i.e. \(f\) is a closed map.

A closed bijection is a homeomorphism (\((f^{-1})^{-1}(F) = f(F)\) is closed, so \(f^{-1}\) is continuous).`}},{text:{ko:String.raw`이제 \(f: [0,1] \to [0,1]^2\)가 연속 전단사라고 가정하면 동형사상이어야 합니다. 내부의 점 \(c \in (0,1)\)을 제거하면 \([0,1] \setminus \{c\} = [0,c) \cup (c,1]\)은 서로소인 비어 있지 않은 열린 집합으로 분리되므로 연결집합이 아닙니다.

반면 \([0,1]^2\)에서 대응점 \(r := f(c)\)를 제거한 공간이 경로연결임을 식으로 보입니다.`,en:String.raw`If \(f: [0,1] \to [0,1]^2\) were a continuous bijection, it would be a homeomorphism. Removing an interior point \(c \in (0,1)\) disconnects the interval: \([0,1] \setminus \{c\} = [0,c) \cup (c,1]\) is a separation into disjoint nonempty opens.

In contrast, \([0,1]^2\) minus the corresponding point \(r := f(c)\) is path-connected, shown here with explicit formulas.`}},{text:{ko:String.raw`\(p, q \ne r\)인 두 점을 잡습니다. \(p = q\)이면 상수 경로 \(\gamma(t) \equiv p\)입니다. \(p \ne q\)인 경우 직선 \(L(t) = (1-t)p + tq\) (\(t \in [0,1]\))를 봅니다. \(r \notin L([0,1])\)이면 \(\gamma = L\)이 원하는 경로입니다.

\(r \in L([0,1])\)이면 \(r = L(t_0)\)인 \(t_0 \in (0,1)\)이 유일하게 존재합니다 (\(r \ne p, q\)이므로). 중점 \(m = \frac{p+q}{2}\), 방향 \(d = q - p\), 단위 법선 \(n = \frac{(-d_2, d_1)}{|d|}\)를 두고, 우회점 \(s = m + \varepsilon n\) (\(\varepsilon \ne 0\), 아래에서 명시적으로 선택)을 잡습니다. 경로는 두 선분의 연결입니다: \(\gamma(t) = (1-2t)p + 2ts\) (\(0 \le t \le \frac12\)), \(\gamma(t) = (2-2t)s + (2t-1)q\) (\(\frac12 \le t \le 1\)).`,en:String.raw`Take two points \(p, q \ne r\). If \(p = q\), the constant path \(\gamma(t) \equiv p\) works. If \(p \ne q\), look at the line \(L(t) = (1-t)p + tq\) (\(t \in [0,1]\)). If \(r \notin L([0,1])\), then \(\gamma = L\) is the desired path.

If \(r \in L([0,1])\), there is a unique \(t_0 \in (0,1)\) with \(r = L(t_0)\) (since \(r \ne p, q\)). Set the midpoint \(m = \frac{p+q}{2}\), direction \(d = q - p\), unit normal \(n = \frac{(-d_2, d_1)}{|d|}\), and pick the detour point \(s = m + \varepsilon n\) (\(\varepsilon \ne 0\), chosen explicitly below). The path is two segments joined: \(\gamma(t) = (1-2t)p + 2ts\) (\(0 \le t \le \frac12\)), \(\gamma(t) = (2-2t)s + (2t-1)q\) (\(\frac12 \le t \le 1\)).`}},{text:{ko:String.raw`\(r\)을 피하는지 확인합니다. 직선 \(pq\) 위의 점 \(x\)는 \(n \cdot (x - m) = 0\)을 만족하고 (\(n \perp d\)), \(r\)도 그 위에 있으므로 \(n \cdot (r - m) = 0\)입니다. \([p,s]\) 위의 점 \((1-u)p + us = (1-\frac{u}{2})p + \frac{u}{2}q + u\varepsilon n\)에 대해 \(n \cdot (x - m) = u\varepsilon\)이므로, 이것이 \(r\)과 같아지려면 \(u\varepsilon = 0\), 즉 \(u = 0\) — 그 점은 \(p \ne r\)뿐입니다.

\([s,q]\) 위의 점 \((1-u)s + uq = \frac{1-u}{2}p + \frac{1+u}{2}q + (1-u)\varepsilon n\)에 대해서도 \(n \cdot (y - m) = (1-u)\varepsilon\)이므로 \((1-u)\varepsilon = 0\)에서 \(u = 1\) — 즉 점 \(q \ne r\)뿐입니다. 따라서 \(\gamma\)는 \(r\)을 지나지 않습니다.`,en:String.raw`Check that \(r\) is avoided. Points \(x\) on the line \(pq\) satisfy \(n \cdot (x - m) = 0\) (since \(n \perp d\)), and \(r\) lies on it, so \(n \cdot (r - m) = 0\). For a point \((1-u)p + us = (1-\frac{u}{2})p + \frac{u}{2}q + u\varepsilon n\) on \([p,s]\), \(n \cdot (x - m) = u\varepsilon\); equaling \(r\) forces \(u\varepsilon = 0\), i.e. \(u = 0\) — only the point \(p \ne r\).

For a point \((1-u)s + uq = \frac{1-u}{2}p + \frac{1+u}{2}q + (1-u)\varepsilon n\) on \([s,q]\), \(n \cdot (y - m) = (1-u)\varepsilon\), so \((1-u)\varepsilon = 0\) gives \(u = 1\) — only the point \(q \ne r\). Hence \(\gamma\) never passes through \(r\).`}},{text:{ko:String.raw`\(\varepsilon\)의 명시적 선택 (\(s \in [0,1]^2\) 보장): \(m\)은 꼭짓점이 될 수 없습니다 (\(m\)이 꼭짓점이면 \(p = q = m\)이 되어 \(p \ne q\)에 모순). \(\delta = \min(m_1, 1-m_1, m_2, 1-m_2) \ge 0\)이라 둡니다. \(\delta > 0\)이면 (\(m\)이 내부) \(\varepsilon = \delta/2\)로 둡니다: \(|s - m| = \delta/2 < \delta\)이므로 \(s\)는 내부에 있습니다.

\(\delta = 0\)이면 \(m\)은 변 위에 있고 꼭짓점은 아닙니다. 예를 들어 \(m = (m_1, 0)\), \(m_1 \in (0,1)\)인 경우 (나머지 세 변은 \((x,y) \mapsto (x,1-y)\) 등의 대칭으로 동일) \(\eta = \frac12\min(m_1, 1-m_1) > 0\)으로 두고, \(n_2 \ge 0\)이면 \(s = m + \eta n\), \(n_2 < 0\)이면 \(s = m - \eta n\)으로 둡니다. 그러면 \(s_2 = \eta|n_2| \in [0,\eta] \subset [0,1]\), \(|s_1 - m_1| \le \eta \le \frac12\min(m_1, 1-m_1)\)이므로 \(s_1 \in (0,1)\) — 즉 \(s \in [0,1]^2\)입니다. \(s \in [0,1]^2\)이면 볼록성에 의해 두 선분 \([p,s]\), \([s,q]\)도 \([0,1]^2\) 안에 있습니다.`,en:String.raw`Explicit choice of \(\varepsilon\) (forcing \(s \in [0,1]^2\)): \(m\) cannot be a corner (a corner \(m\) would give \(p = q = m\), contradicting \(p \ne q\)). Put \(\delta = \min(m_1, 1-m_1, m_2, 1-m_2) \ge 0\). If \(\delta > 0\) (\(m\) interior), take \(\varepsilon = \delta/2\): \(|s - m| = \delta/2 < \delta\), so \(s\) is interior.

If \(\delta = 0\), then \(m\) lies on an edge but is not a corner. For instance with \(m = (m_1, 0)\), \(m_1 \in (0,1)\) (the other three edges are identical via symmetries like \((x,y) \mapsto (x,1-y)\)), put \(\eta = \frac12\min(m_1, 1-m_1) > 0\) and take \(s = m + \eta n\) if \(n_2 \ge 0\), \(s = m - \eta n\) if \(n_2 < 0\). Then \(s_2 = \eta|n_2| \in [0,\eta] \subset [0,1]\) and \(|s_1 - m_1| \le \eta \le \frac12\min(m_1, 1-m_1)\), so \(s_1 \in (0,1)\) — i.e. \(s \in [0,1]^2\). With \(s \in [0,1]^2\), convexity keeps both segments \([p,s]\), \([s,q]\) inside \([0,1]^2\).`}},{text:{ko:String.raw`따라서 \([0,1]^2 \setminus \{r\}\)의 임의의 두 점은 \(r\)을 피하는 명시적 경로로 연결됩니다 — 경로연결이므로 연결집합입니다. 동형사상은 점을 제거한 공간으로 제한해도 동형사상이므로 모순입니다. 따라서 연속 전단사는 존재하지 않고, 페아노 전사함수는 단사일 수 없습니다.`,en:String.raw`Thus any two points of \([0,1]^2 \setminus \{r\}\) are joined by an explicit path avoiding \(r\) — path-connected, hence connected. A homeomorphism restricts to a homeomorphism of the punctured spaces — contradiction. So no continuous bijection exists, and the Peano surjection cannot be injective.`}}]}],o=[{id:`topologist-sine-connected`,statement:{ko:String.raw`\(S = \{(x, \sin(1/x)) : x > 0\} \subseteq \mathbb{R}^2\)이 연결집합임을 완전히 증명하세요.`,en:String.raw`Prove completely that \(S = \{(x, \sin(1/x)) : x > 0\} \subseteq \mathbb{R}^2\) is connected.`},display:[String.raw`S = f((0,\infty)), \qquad f(x) = (x,\, \sin(1/x))`],preset:{xMin:.05,showSegment:!0,showSeq:!0},presetCaption:{ko:String.raw`\(x_{\min} = 0.05\): 곡선 \(S\) 하나만 봐도 0 근처에서 무한히 진동하지만, 끊어지지 않은 하나의 연속 곡선입니다.`,en:String.raw`\(x_{\min} = 0.05\): the curve \(S\) alone oscillates infinitely near 0, yet it is one unbroken continuous curve.`},proof:[{text:{ko:String.raw`\((0,\infty)\)는 연결집합입니다 (구간이므로 — \(\mathbb{R}\)의 연결성 증명과 같은 \(\sup\) 논증이 그대로 적용됩니다). 사상 \(f(x) = (x, \sin(1/x))\)는 두 좌표함수가 모두 연속이므로 연속이고, 그 상이 정확히 \(S\)입니다.`,en:String.raw`\((0,\infty)\) is connected (it is an interval — the same \(\sup\) argument as for \(\mathbb{R}\) applies verbatim). The map \(f(x) = (x, \sin(1/x))\) is continuous since both coordinate functions are, and its image is exactly \(S\).`}},{text:{ko:String.raw`연속함수 아래에서 연결집합의 상은 연결집합입니다: \(f(X) = A \cup B\)가 서로소인 비어 있지 않은 (상대적으로) 열린 집합으로의 분해라면, \(X = f^{-1}(A) \cup f^{-1}(B)\)도 서로소인 비어 있지 않은 상대 열린 집합으로의 분해가 되어 \(X\)의 연결성에 모순되기 때문입니다 (\(A, B\)가 비어 있지 않으면 그 역상도 비어 있지 않습니다).`,en:String.raw`The continuous image of a connected set is connected: if \(f(X) = A \cup B\) were a separation into disjoint nonempty relatively open sets, then \(X = f^{-1}(A) \cup f^{-1}(B)\) would be a separation of \(X\) into disjoint nonempty relatively open sets (\(A, B\) nonempty implies their preimages are nonempty), contradicting the connectedness of \(X\).`}},{text:{ko:String.raw`따라서 \(S = f((0,\infty))\)는 연결집합입니다. 연결집합의 폐포도 연결집합이므로 \(T = \overline{S}\) 역시 연결집합입니다 — 아래 문제 2에서 이 폐포를 구합니다.`,en:String.raw`Hence \(S = f((0,\infty))\) is connected. The closure of a connected set is connected, so \(T = \overline{S}\) is connected as well — problem 2 below computes this closure.`}}]},{id:`topologist-sine-closure`,statement:{ko:String.raw`\(\overline{S} = S \cup \big(\{0\} \times [-1,1]\big)\)임을 완전히 증명하세요.

즉 \(S\)의 폐포는 \(S\)에 수직 선분 \(\{0\} \times [-1,1]\)을 더한 것과 같습니다.`,en:String.raw`Prove completely that \(\overline{S} = S \cup \big(\{0\} \times [-1,1]\big)\): the closure of \(S\) is \(S\) together with the vertical segment \(\{0\} \times [-1,1]\).`},display:[String.raw`\overline{S} = S \cup \big(\{0\} \times [-1,1]\big)`],preset:{xMin:.01,showSegment:!0,showSeq:!0},presetCaption:{ko:String.raw`\(x_{\min} = 0.01\): 0에 더 가까이 다가가면 점열 \((x_n, 1)\), \((x_n, -1)\)이 빨간 선분의 양 끝점으로 수렴하는 것이 보입니다.`,en:String.raw`\(x_{\min} = 0.01\): zooming closer to 0 shows the sequences \((x_n, 1)\), \((x_n, -1)\) converging onto the endpoints of the red segment.`},proof:[{text:{ko:String.raw`\(\supseteq\): \(S \subseteq \overline{S}\)는 자명합니다. \(|y| \le 1\)인 점 \((0,y)\)에 대해 \(x_n = \frac{1}{\arcsin y + 2\pi n}\) (\(n \ge 1\))이라 두면 \(x_n \to 0^+\)이고 \(\sin(1/x_n) = \sin(\arcsin y + 2\pi n) = y\)입니다.

따라서 \((x_n, y) \in S\)가 \((0,y)\)로 수렴하므로, \(\{0\} \times [-1,1]\)의 모든 점은 \(S\)의 극한점입니다.`,en:String.raw`\(\supseteq\): \(S \subseteq \overline{S}\) is trivial. For \((0,y)\) with \(|y| \le 1\), put \(x_n = \frac{1}{\arcsin y + 2\pi n}\) (\(n \ge 1\)); then \(x_n \to 0^+\) and \(\sin(1/x_n) = \sin(\arcsin y + 2\pi n) = y\).

Hence \((x_n, y) \in S\) converges to \((0,y)\), so every point of \(\{0\} \times [-1,1]\) is a limit point of \(S\).`}},{text:{ko:String.raw`\(\subseteq\): \(p \in \overline{S}\)라 하세요. \(p = (x,y)\)에서 \(x < 0\)이면 공 \(B(p, |x|/2)\)는 \(S\)의 점(첫 좌표가 모두 양수)을 전혀 포함하지 않으므로 불가능합니다. \(x > 0\)이고 \(p \notin S\)라 가정하면, \(K = f([x/2,\, 3x/2])\) (\(f\)는 위 문제의 사상)는 컴팩트 집합의 연속상이므로 컴팩트, 따라서 닫혀 있습니다.

임의의 \(r > 0\)를 잡습니다: 공 \(B(p, \min(r, x/2))\)와 만나는 \(S\)의 점은 첫 좌표가 \((x/2,\, 3x/2)\) 안에 있으므로 \(K\)에 속합니다. \(p \in \overline{S}\)이므로 이 공은 \(S\)와 만나고, 따라서 \(K\)와도 만나므로 \(\operatorname{dist}(p, K) < r\)입니다. \(r > 0\)이 임의였으므로 \(p \in \overline{K} = K \subseteq S\) — 모순입니다. 그러므로 \(x > 0\)이면 \(p \in S\)입니다.`,en:String.raw`\(\subseteq\): let \(p \in \overline{S}\). If \(p = (x,y)\) with \(x < 0\), the ball \(B(p, |x|/2)\) contains no point of \(S\) (whose first coordinates are all positive) — impossible. If \(x > 0\) and \(p \notin S\), then \(K = f([x/2,\, 3x/2])\) (\(f\) from the problem above) is compact as a continuous image of a compact set, hence closed.

Now let \(r > 0\) be arbitrary: points of \(S\) meeting \(B(p, \min(r, x/2))\) have first coordinate in \((x/2,\, 3x/2)\), so they lie in \(K\). Since \(p \in \overline{S}\), this ball meets \(S\), hence meets \(K\), so \(\operatorname{dist}(p, K) < r\). As \(r > 0\) was arbitrary, \(p \in \overline{K} = K \subseteq S\) — a contradiction. Thus \(x > 0\) implies \(p \in S\).`}},{text:{ko:String.raw`마지막으로 \(p = (0,y)\)인 경우: \((u,v) \in S\)에 대해 \(|p - (u,v)| \ge |y - v| \ge |y| - 1\)입니다 (\(|v| = |\sin| \le 1\)). \(|y| > 1\)이면 공 \(B(p, (|y|-1)/2)\)가 \(S\)와 만나지 않아 \(p \in \overline{S}\)에 모순됩니다.

따라서 \(|y| \le 1\), 즉 \(p \in \{0\} \times [-1,1]\)입니다. 세 경우를 합치면 \(\overline{S} = S \cup (\{0\} \times [-1,1])\)입니다.`,en:String.raw`Finally, if \(p = (0,y)\): for \((u,v) \in S\), \(|p - (u,v)| \ge |y - v| \ge |y| - 1\) (since \(|v| = |\sin| \le 1\)). If \(|y| > 1\), the ball \(B(p, (|y|-1)/2)\) misses \(S\), contradicting \(p \in \overline{S}\).

Hence \(|y| \le 1\), i.e. \(p \in \{0\} \times [-1,1]\). The three cases together give \(\overline{S} = S \cup (\{0\} \times [-1,1])\).`}}]},{id:`topologist-sine-no-path`,statement:{ko:String.raw`\(T = \overline{S}\)는 경로연결집합이 아님을 완전히 증명하세요: 선분 \(\{0\} \times [-1,1]\) 위의 점에서 \(S\)의 점으로 가는 \(T\) 안의 경로는 존재하지 않습니다.`,en:String.raw`Prove completely that \(T = \overline{S}\) is not path-connected: no path in \(T\) leads from a point of the segment \(\{0\} \times [-1,1]\) to a point of \(S\).`},display:[String.raw`\gamma(0) \in \{0\} \times [-1,1],\ \gamma(1) \in S \implies \text{no continuous } \gamma: [0,1] \to T`],preset:{xMin:.05,showSegment:!0,showSeq:!0},presetCaption:{ko:String.raw`빨간 선분에서 곡선으로 "걸어가" 보세요 — 0 근처의 무한 진동이 어떤 경로도 막아섭니다. 증명은 이 장애물을 수열로 포착합니다.`,en:String.raw`Try "walking" from the red segment into the curve — the infinite oscillation near 0 blocks every path. The proof captures this obstruction with sequences.`},proof:[{text:{ko:String.raw`\(\gamma: [0,1] \to T\)가 연속이고 \(\gamma(0) \in \{0\} \times [-1,1]\), \(\gamma(1) \in S\)라고 가정하고 모순을 이끌어냅니다. \(\gamma(t) = (x(t), y(t))\)라 쓰고, \(c = \sup\{t \in [0,1] : x(t) = 0\}\)이라 둡니다 (0을 포함하므로 비어 있지 않음). 연속성에 의해 \(x(c) = 0\)이고, \(x(1) > 0\)이므로 \(c < 1\)입니다.

또한 \(T \subseteq \{x \ge 0\}\)입니다 (\(T = \overline{S}\)의 정의에 의해: \(S\)의 점은 첫 좌표가 양수이고 극한점인 수직 선분은 첫 좌표가 \(0\)임), 따라서 모든 \(t\)에서 \(x(t) \ge 0\)입니다. \(t \in (c,1]\)에서는 \(x(t) \ne 0\)이므로 (그렇지 않으면 \(\sup\)이 더 커집니다) \(x(t) > 0\)입니다.`,en:String.raw`Assume a continuous \(\gamma: [0,1] \to T\) with \(\gamma(0) \in \{0\} \times [-1,1]\) and \(\gamma(1) \in S\), aiming for a contradiction. Write \(\gamma(t) = (x(t), y(t))\) and put \(c = \sup\{t \in [0,1] : x(t) = 0\}\) (nonempty, containing \(0\)). By continuity \(x(c) = 0\), and \(c < 1\) since \(x(1) > 0\).

Moreover \(T \subseteq \{x \ge 0\}\) by the definition of \(T = \overline{S}\) (points of \(S\) have positive first coordinate and the limit segment has first coordinate \(0\)), so \(x(t) \ge 0\) for all \(t\). For \(t \in (c,1]\) we also have \(x(t) \ne 0\) (otherwise the supremum would be larger), hence \(x(t) > 0\) on \((c,1]\).`}},{text:{ko:String.raw`\(t \in (c,1]\)에서 \(\gamma(t) \in T\)의 첫 좌표가 양수이므로 \(\gamma(t) \in S\), 즉 \(y(t) = \sin(1/x(t))\)입니다. \(v_n = \frac{1}{2\pi n + \pi/2} \to 0\)이므로 \(n\)이 크면 \(v_n < x(1)\)입니다. \([c,1]\)에서 \(x(c) = 0 < v_n < x(1)\)이므로 중간값 정리에 의해 \(x(t_n) = v_n\)인 \(t_n \in (c,1]\)이 존재합니다.

이때 \(y(t_n) = \sin(2\pi n + \pi/2) = 1\)입니다. \((t_n)\)의 모든 집적점 \(t^* \in [c,1]\)은 \(x(t^*) = \lim v_n = 0\)을 만족하므로 \((c,1]\)에서 \(x > 0\)인 데 의해 \(t^* = c\)입니다 — 따라서 \(t_n \to c\)이고, 연속성에 의해 \(y(c) = \lim y(t_n) = 1\)입니다.`,en:String.raw`For \(t \in (c,1]\), \(\gamma(t) \in T\) has positive first coordinate, so \(\gamma(t) \in S\) and \(y(t) = \sin(1/x(t))\). Since \(v_n = \frac{1}{2\pi n + \pi/2} \to 0\), we have \(v_n < x(1)\) for large \(n\). On \([c,1]\), \(x(c) = 0 < v_n < x(1)\), so the intermediate value theorem gives \(t_n \in (c,1]\) with \(x(t_n) = v_n\).

Then \(y(t_n) = \sin(2\pi n + \pi/2) = 1\). Every subsequential limit \(t^* \in [c,1]\) of \((t_n)\) satisfies \(x(t^*) = \lim v_n = 0\), forcing \(t^* = c\) (as \(x > 0\) on \((c,1]\)). Hence \(t_n \to c\), and by continuity \(y(c) = \lim y(t_n) = 1\).`}},{text:{ko:String.raw`마찬가지로 \(w_n = \frac{1}{2\pi n + 3\pi/2}\)에 대해 \(x(s_n) = w_n\)인 \(s_n \in (c,1]\)을 잡으면 \(y(s_n) = \sin(2\pi n + 3\pi/2) = -1\)이고 같은 논증으로 \(s_n \to c\)이므로 \(y(c) = -1\)입니다. \(y(c) = 1\)과 모순되므로, 가정한 경로는 존재하지 않습니다.

\(T\)는 연결집합이지만 경로연결집합이 아닙니다.`,en:String.raw`Likewise, with \(w_n = \frac{1}{2\pi n + 3\pi/2}\), pick \(s_n \in (c,1]\) with \(x(s_n) = w_n\); then \(y(s_n) = \sin(2\pi n + 3\pi/2) = -1\), and the same argument gives \(s_n \to c\), so \(y(c) = -1\). This contradicts \(y(c) = 1\), so the assumed path cannot exist.

\(T\) is connected but not path-connected.`}}]}],s=[{id:`cantor-function-basic`,statement:{ko:String.raw`칸토어 함수 \(f\)가 잘 정의되고(삼진 전개의 모호성이 값을 바꾸지 않음), 단조증가이며, \([0,1]\)에서 연속임을 증명하세요.

예: \(0.0222\ldots_3 = 0.1_3\)의 두 전개가 모두 \(f = 1/2\)를 주어야 합니다.`,en:String.raw`Prove that the Cantor function \(f\) is well-defined (the ambiguity of ternary expansions does not change its value), nondecreasing, and continuous on \([0,1]\).

For instance, the two expansions \(0.0222\ldots_3 = 0.1_3\) must both give \(f = 1/2\).`},display:[String.raw`0.0222\ldots_3:\ N = \infty,\ b = 0.0111\ldots_2 = \tfrac12 \qquad\text{vs}\qquad 0.1_3:\ N = 1,\ b_1 = 1 \Rightarrow f = \tfrac12`,String.raw`x < y,\ k = \text{first index with a digit } 1 \text{ or a difference} \Rightarrow f(x) \le S + 2^{-k} \le f(y)\ \text{or}\ f(x) = f(y) = S + 2^{-k}`,String.raw`|f - f_n| \le 2^{-n}\ \text{uniformly},\ f_n\ \text{piecewise linear} \Rightarrow f\ \text{continuous}`],preset:{stage:3},presetCaption:{ko:String.raw`단계 3: \(C_3\)은 구간 8개(=\(2^3\)), 전체 길이 \((2/3)^3 = 8/27 \approx 0.29630\)이다 — 계단은 이미 완성된 \(f\)이며, \((1/3,\,2/3)\) 위의 평평한 단이 \(f = 1/2\)에 보인다.`,en:String.raw`Stage 3: \(C_3\) has 8 intervals (=\(2^3\)) of total length \((2/3)^3 = 8/27 \approx 0.29630\) — the staircase is already the finished \(f\), with the flat step \(f = 1/2\) over \((1/3,\,2/3)\) visible.`},proof:[{text:{ko:String.raw`삼진 전개는 \(k/3^m\) 꼴의 점을 제외하면 유일하고, 그 점들은 정확히 두 개의 전개를 갖는다: 끝나는 전개 \(0.c_1\ldots c_{m-1}1\)과 \(2\)가 반복되는 전개 \(0.c_1\ldots c_{m-1}0222\ldots_3\).

\(k < m\)인 \(k\) 중 \(c_k = 1\)인 것이 있으면 두 전개 모두 첫 번째 \(1\)을 같은 자리에서 보므로 \(b\) 수열이 일치한다.

그런 \(k\)가 없으면, 끝나는 전개는 \(N = m\)에서 \(b_m = 1\)을 주고, \(2\)-반복 전개는 \(1\)이 전혀 없으므로 \(b_m = 0\), \(k > m\)에서 \(b_k = 1\)을 준다 — 그런데 \(\sum_{k>m} 2^{-k} = 2^{-m}\)이므로 합은 같다. 예: \(0.0222\ldots_3\)은 \(N = \infty\)이라 \(b = 0.0111\ldots_2 = 1/2\)이고, \(0.1_3\)은 \(N = 1\)이라 \(b_1 = 1\)로 \(f = 1/2\)이다.

따라서 \(f\)는 잘 정의된다.`,en:String.raw`Ternary expansions are unique except at points \(k/3^m\), which have exactly two: the terminating one \(0.c_1\ldots c_{m-1}1\) and the repeating-\(2\) one \(0.c_1\ldots c_{m-1}0222\ldots_3\).

If some \(c_k = 1\) with \(k < m\), both expansions see the first \(1\) at the same position, so the \(b\)-sequences agree.

Otherwise the terminating expansion has \(N = m\) with \(b_m = 1\), while the repeating-\(2\) expansion has no \(1\) at all, giving \(b_m = 0\) and \(b_k = 1\) for \(k > m\) — but \(\sum_{k>m} 2^{-k} = 2^{-m}\), so the totals agree.

Example: \(0.0222\ldots_3\) has \(N = \infty\), hence \(b = 0.0111\ldots_2 = 1/2\); \(0.1_3\) has \(N = 1\), hence \(b_1 = 1\) and \(f = 1/2\).

So \(f\) is well-defined.`}},{text:{ko:String.raw`\(f\)는 단조증가이다.

\(x < y\)라 하고 (선택한) 삼진 전개를 봅니다.

처음으로 어느 한쪽에 숫자 \(1\)이 나타나거나 두 전개가 달라지는 자리를 \(k\)라 두자 (\(x \ne y\)이므로 이런 자리는 존재합니다).

앞 \(k-1\)자리는 공통이고 \(1\)이 없으므로 \(\{0,2\}\)에서 오며, 그 공통 기여를 \(S = \sum_{i<k}(c_i/2)2^{-i}\)라 쓰자.

자리 \(k\)에서의 쌍 \((c_k(x),\, c_k(y))\)는 \((1,1)\), \((0,1)\), \((0,2)\), \((1,2)\) 중 하나입니다.

\((1,1)\)인 경우: 양쪽 모두 첫 \(1\)이 \(k\)에서 나오므로 \(f(x) = f(y) = S + 2^{-k}\)입니다 (예: \(x = 0.1000\ldots_3\), \(y = 0.1200\ldots_3\)이면 \(k = 1\)이고 \(f(x) = f(y) = 1/2\)).

\((0,1)\)인 경우: \(x\)는 \(b_k = 0\)이고 꼬리가 \(\sum_{i>k} 2^{-i} = 2^{-k}\) 이하이므로 \(f(x) \le S + 2^{-k}\)이고, \(y\)는 \(k\)에서 첫 \(1\)이 나오므로 \(f(y) = S + 2^{-k}\)입니다.

\((0,2)\)인 경우: \(f(x) \le S + 2^{-k}\)이고 \(y\)는 \(b_k = 1\), 꼬리 \(\ge 0\)이므로 \(f(y) \ge S + 2^{-k}\)입니다.

\((1,2)\)인 경우: \(f(x) = S + 2^{-k}\)이고 \(f(y) \ge S + 2^{-k}\)입니다.

모든 경우에 \(f(x) \le f(y)\)이고, 끝점의 모호성은 이미 잘 정의성에서 해소되었습니다.`,en:String.raw`The function \(f\) is nondecreasing.

Let \(x < y\) and look at the (chosen) ternary expansions.

Let \(k\) be the first index where either expansion has digit \(1\) or the two expansions differ (such an index exists since \(x \ne y\)).

The first \(k-1\) digits are shared and contain no \(1\), so they lie in \(\{0,2\}\); write \(S = \sum_{i<k}(c_i/2)2^{-i}\) for their shared contribution.

The pair \((c_k(x),\, c_k(y))\) at index \(k\) is one of \((1,1)\), \((0,1)\), \((0,2)\), \((1,2)\).

Case \((1,1)\): both see their first \(1\) at \(k\), so \(f(x) = f(y) = S + 2^{-k}\) (e.g. \(x = 0.1000\ldots_3\), \(y = 0.1200\ldots_3\) gives \(k = 1\) and \(f(x) = f(y) = 1/2\)).

Case \((0,1)\): \(x\) has \(b_k = 0\) and tail at most \(\sum_{i>k} 2^{-i} = 2^{-k}\), so \(f(x) \le S + 2^{-k}\); \(y\) sees its first \(1\) at \(k\), so \(f(y) = S + 2^{-k}\).

Case \((0,2)\): \(f(x) \le S + 2^{-k}\) while \(y\) has \(b_k = 1\) and tail \(\ge 0\), so \(f(y) \ge S + 2^{-k}\).

Case \((1,2)\): \(f(x) = S + 2^{-k}\) and \(f(y) \ge S + 2^{-k}\).

In every case \(f(x) \le f(y)\), and endpoint ambiguity was already settled by well-definedness.`}},{text:{ko:String.raw`\(f\)는 연속이다.

\(n\)단 삼진 구간의 각 닫힌 구간 \(I\) 위에서는 \(f\)의 변동이 \(2^{-n}\) 이하이다: \(n\)자리 안에 \(1\)이 있으면 꼬리가 0이라 \(f\)가 \(I\) 위에서 정확히 상수이고, 없으면 \(f = \sum_{k\le n}(c_k/2)2^{-k} + \text{꼬리}\) (꼬리는 \(0\)과 \(2^{-n}\) 사이)이다.

끝점 \(k/3^n\)에서 \(f\)를 선형 보간한 연속함수 \(f_n\)을 두면, \(n\)단 구간 \([l,r]\) 위의 모든 \(x\)에 대해 \(f(x)\)와 \(f_n(x)\)는 모두 \([f(l),\,f(r)]\) 안에 들고(단조성), 그 구간의 길이는 \(2^{-n}\) 이하이다.

따라서 \(f_n \to f\) 균등수렴하고, 연속함수의 균등극한은 연속이므로 \(f\)는 \([0,1]\)에서 연속이다.

참고로 \(f(0) = 0\), \(f(1) = 1\)이다 (\(1 = 0.222\ldots_3\)).`,en:String.raw`The function \(f\) is continuous.

On each closed rank-\(n\) ternary interval \(I\), \(f\) varies by at most \(2^{-n}\): if a \(1\) occurs among the \(n\) digits the tails vanish and \(f\) is exactly constant on \(I\); otherwise \(f = \sum_{k\le n}(c_k/2)2^{-k} + \text{tail}\) with the tail between \(0\) and \(2^{-n}\).

Let \(f_n\) be the continuous piecewise-linear interpolant of \(f\) at the endpoints \(k/3^n\).

For \(x\) in a rank-\(n\) interval \([l,r]\), both \(f(x)\) and \(f_n(x)\) lie in \([f(l),\,f(r)]\) (by monotonicity), an interval of length at most \(2^{-n}\).

Hence \(f_n \to f\) uniformly, and a uniform limit of continuous functions is continuous, so \(f\) is continuous on \([0,1]\).

Note \(f(0) = 0\) and \(f(1) = 1\) (reading \(1 = 0.222\ldots_3\)).`}}]},{id:`cantor-function-flat`,statement:{ko:String.raw`칸토어 집합의 여집합을 이루는 모든 열린 구간 위에서 \(f\)가 상수임을 증명하세요.

따라서 여집합의 모든 점에서 \(f' = 0\)이며, 여집합의 전체 길이는 \(1\)입니다.`,en:String.raw`Prove that \(f\) is constant on every open interval complementary to the Cantor set.

Conclude that \(f' = 0\) at every point of the complement, which has total length \(1\).`},display:[String.raw`(a,b)\ \text{removed at stage } m:\quad a = 0.c_1\ldots c_{m-1}1_3,\ b = 0.c_1\ldots c_{m-1}2_3`,String.raw`x \in (a,b) \Rightarrow c_m(x) = 1 \Rightarrow f(x) = \sum_{k<m}\tfrac{c_k}{2}2^{-k} + 2^{-m}\ \text{(constant)}`,String.raw`\sum_{m \ge 1} 2^{m-1} 3^{-m} = \tfrac13\sum_{m\ge 1}\left(\tfrac23\right)^{m-1} = 1`],preset:{stage:5},presetCaption:{ko:String.raw`단계 5: \(C_5\)는 구간 32개(=\(2^5\)), 전체 길이 \((2/3)^5 = 32/243 \approx 0.13169\)이다 — 막대가 가늘어져도 계단의 평평한 단들(예: \((1/3,\,2/3)\) 위 \(f = 1/2\))은 그대로이다.`,en:String.raw`Stage 5: \(C_5\) has 32 intervals (=\(2^5\)) of total length \((2/3)^5 = 32/243 \approx 0.13169\) — the bars thin out, but the flat steps of the staircase (e.g. \(f = 1/2\) over \((1/3,\,2/3)\)) stay put.`},proof:[{text:{ko:String.raw`칸토어 집합의 여집합은 제거된 열린 가운데 삼등분 구간들의 서로소 합집합이다.

단계 \(m\)에서 제거되는 각 구간은 \((a,b)\) 꼴이며, \(a = 0.c_1\ldots c_{m-1}1_3\) (끝나는 전개), \(b = 0.c_1\ldots c_{m-1}2_3\)이고 \(c_1,\ldots,c_{m-1}\) 중에는 \(1\)이 없다.

\(x \in (a,b)\)라 하자.

\(x > a\)이므로 \(m\)번째 삼진 자리수는 \(0\)일 수 없고 (\(0\)이면 \(x \le 0.c_1\ldots c_{m-1}0222\ldots_3 = a\)가 된다), \(x < b\)이므로 \(2\)일 수도 없다 (\(2\)이면 \(x \ge 0.c_1\ldots c_{m-1}2000\ldots_3 = b\)가 된다).

따라서 \(c_m(x) = 1\)이고, 그 앞에 \(1\)이 없으므로 \(N(x) = m\)이다.

즉 \(f(x) = \sum_{k<m}(c_k/2)2^{-k} + 2^{-m}\)으로 \(x\)와 무관한 상수이다 — \(f\)는 모든 여집합 구간 위에서 상수이다.

수치 예: \((1/9,\,2/9)\) 위에서는 \(f \equiv 1/4\), \((1/3,\,2/3)\) 위에서는 \(f \equiv 1/2\)이다.`,en:String.raw`The complement of the Cantor set is the disjoint union of the removed open middle thirds.

Each interval removed at stage \(m\) has the form \((a,b)\) with \(a = 0.c_1\ldots c_{m-1}1_3\) (terminating) and \(b = 0.c_1\ldots c_{m-1}2_3\), where \(c_1,\ldots,c_{m-1}\) contain no \(1\).

Let \(x \in (a,b)\).

Since \(x > a\), the \(m\)-th ternary digit cannot be \(0\) (that would give \(x \le 0.c_1\ldots c_{m-1}0222\ldots_3 = a\)); since \(x < b\), it cannot be \(2\) (that would give \(x \ge 0.c_1\ldots c_{m-1}2000\ldots_3 = b\)).

Hence \(c_m(x) = 1\), and with no \(1\) before it, \(N(x) = m\).

So \(f(x) = \sum_{k<m}(c_k/2)2^{-k} + 2^{-m}\), a constant independent of \(x\) — \(f\) is constant on every complementary interval.

Numerically: \(f \equiv 1/4\) on \((1/9,\,2/9)\) and \(f \equiv 1/2\) on \((1/3,\,2/3)\).`}},{text:{ko:String.raw`열린 구간 위에서 상수인 함수는 그 구간의 모든 점에서 도함수가 \(0\)이다 (차분몫이 항등적으로 \(0\)이므로). 따라서 여집합의 모든 점 \(x\)에서 \(f'(x) = 0\)이다 — 계단은 "거의 모든 곳에서" 평평하다.`,en:String.raw`A function constant on an open interval has derivative \(0\) at every point of it (the difference quotient is identically \(0\)). Hence \(f'(x) = 0\) at every point \(x\) of the complement — the staircase is flat "almost everywhere".`}},{text:{ko:String.raw`여집합의 전체 길이는 단계 \(m\)에서 제거되는 \(2^{m-1}\)개의 길이 \(3^{-m}\) 구간들을 합한 것으로, \(\sum_{m\ge 1} 2^{m-1}3^{-m} = \frac13\sum_{m\ge 1}(2/3)^{m-1} = \frac13\cdot\frac{1}{1-2/3} = 1\)이다. 즉 \(f' = 0\)인 점들의 집합은 길이가 \(1\)이다 — 계단은 길이가 \(0\)인 칸토어 집합 위에서만 오르면서 전체 \(1\)만큼 상승한다.`,en:String.raw`The total length of the complement sums the \(2^{m-1}\) intervals of length \(3^{-m}\) removed at stage \(m\): \(\sum_{m\ge 1} 2^{m-1}3^{-m} = \frac13\sum_{m\ge 1}(2/3)^{m-1} = \frac13\cdot\frac{1}{1-2/3} = 1\). So the set where \(f' = 0\) has length \(1\): the staircase climbs a total of \(1\) while moving only on the Cantor set, which has length \(0\).`}}]},{id:`cantor-function-not-ac`,statement:{ko:String.raw`\(f(1) - f(0) = 1\)이지만 \(\int_0^1 f' = 0\)임을 계산하고, 따라서 \(f\)가 절대연속이 아님을 증명하세요.

이것이 바로 미적분학 기본정리가 "거의 모든 곳에서 미분가능"보다 강한 가설을 필요로 하는 이유입니다.

(절대연속의 정의 자체는 아이디어 수준으로 서술해도 됩니다.)`,en:String.raw`Compute that \(f(1) - f(0) = 1\) yet \(\int_0^1 f' = 0\), and prove that \(f\) is therefore not absolutely continuous.

This is why the Fundamental Theorem of Calculus needs a stronger hypothesis than "differentiable almost everywhere".

(The definition of absolute continuity itself may be stated at idea level.)`},display:[String.raw`\text{AC:}\quad \forall\varepsilon > 0\ \exists\delta > 0:\ \sum (y_i - x_i) < \delta \Rightarrow \sum |f(y_i) - f(x_i)| < \varepsilon`,String.raw`f(1) - f(0) = 1,\qquad \int_0^1 f' = 0\ \ (\text{since } f' = 0\ \text{a.e.})`,String.raw`\sum_{C_n\text{ intervals}} (r_i - l_i) = \left(\tfrac23\right)^n,\qquad \sum (f(r_i) - f(l_i)) = 1 \not< \tfrac12`],preset:{stage:4},presetCaption:{ko:String.raw`단계 4: \(C_4\)는 구간 16개(=\(2^4\)), 전체 길이 \((2/3)^4 = 16/81 \approx 0.19753\)이다 — 이 가느다란 막대들 위에서만 \(f\)가 \(0\)에서 \(1\)까지 오른다.`,en:String.raw`Stage 4: \(C_4\) has 16 intervals (=\(2^4\)) of total length \((2/3)^4 = 16/81 \approx 0.19753\) — \(f\) climbs from \(0\) to \(1\) on these thin bars alone.`},proof:[{text:{ko:String.raw`문제 1에서 \(f\)는 \([0,1]\)에서 연속이고 \(f(0) = 0\), \(f(1) = 1\)이므로 \(f(1) - f(0) = 1\)이다.

한편 문제 2가 주는 것은 칸토어 집합의 여집합 위에서 \(f' = 0\)이라는 것뿐입니다.

그러나 여집합의 길이가 \(1\)이고 칸토어 집합 \(C\)의 측도는 \(0\)이므로, \(f' = 0\) a.e.입니다 (\(C\) 위에서의 값은 a.e. 진술에 영향을 주지 않습니다).

단조함수는 거의 모든 곳에서 미분가능하다는 르베그 정리와 합치면, (르베그) 적분 \(\int_0^1 f' = 0\)입니다.

절대연속인 함수는 \(f' = 0\) a.e.이면 상수여야 하므로, 이는 아래 모순의 핵심입니다.`,en:String.raw`By problem 1, \(f\) is continuous on \([0,1]\) with \(f(0) = 0\) and \(f(1) = 1\), so \(f(1) - f(0) = 1\).

On the other hand, problem 2 gives only that \(f' = 0\) on the complement of the Cantor set.

But that complement has length \(1\) and the Cantor set \(C\) has measure \(0\), so \(f' = 0\) a.e. (the values on \(C\) do not affect an a.e. statement).

Combined with Lebesgue's theorem that a monotone function is differentiable almost everywhere, the (Lebesgue) integral is \(\int_0^1 f' = 0\).

An absolutely continuous function with \(f' = 0\) a.e. must be constant, which is the heart of the contradiction below.`}},{text:{ko:String.raw`\(f\)가 절대연속이었다면 미적분학 기본정리에 의해 \(f(1) - f(0) = \int_0^1 f'\)이어야 한다.

그러나 \(1 \neq 0\)이므로 모순이다.

따라서 \(f\)는 절대연속이 아니다 — 연속이고 거의 모든 곳에서 미분가능해도 기본정리가 성립하지 않는다.

"거의 모든 곳에서 미분가능"은 적분으로 함수를 복원하기에 충분하지 않고, 절대연속성이 정확한 가설이다.`,en:String.raw`If \(f\) were absolutely continuous, the Fundamental Theorem of Calculus would give \(f(1) - f(0) = \int_0^1 f'\).

But \(1 \neq 0\) — a contradiction.

Hence \(f\) is not absolutely continuous: continuity plus differentiability almost everywhere does not imply the FTC.

"Differentiable almost everywhere" is not enough to recover a function by integration; absolute continuity is the sharp hypothesis.`}},{text:{ko:String.raw`직접 확인도 된다.

절대연속이란: 모든 \(\varepsilon > 0\)에 대해, 서로소인 유한 구간족의 길이 합이 \(\delta\)보다 작으면 \(|f|\)-증가분 합도 \(\varepsilon\)보다 작게 만드는 \(\delta > 0\)이 존재한다는 뜻이다.

\(\varepsilon = 1/2\)를 잡자.

\(C_n\)의 \(2^n\)개 구간은 길이 합이 \((2/3)^n \to 0\)이므로 \(n\)이 크면 어떤 \(\delta\)보다도 작아진다.

그러나 \(f\)는 그 사이의 틈에서는 상수이고 단조증가이므로 \(\sum_i (f(r_i) - f(l_i)) = f(1) - f(0) = 1 \ge \varepsilon\)이다 — 모든 \(\delta\)가 실패한다.

칸토어 집합은 길이는 \(0\)에 가까워도 \(f\)-값으로는 \([0,1]\) 전체를 덮는다 (\(f\)는 \(C\)를 \([0,1]\) 위로 올린다).`,en:String.raw`This can also be seen directly.

Absolute continuity means: for every \(\varepsilon > 0\) there is \(\delta > 0\) such that any finite family of disjoint intervals with total length below \(\delta\) has total \(|f|\)-increment below \(\varepsilon\).

Take \(\varepsilon = 1/2\).

The \(2^n\) intervals of \(C_n\) have total length \((2/3)^n \to 0\), eventually below any \(\delta\).

But \(f\) is constant on the gaps between them and nondecreasing, so \(\sum_i (f(r_i) - f(l_i)) = f(1) - f(0) = 1 \ge \varepsilon\) — every \(\delta\) fails.

The Cantor set is nearly \(0\) in length yet covers all of \([0,1]\) in \(f\)-value (\(f\) maps \(C\) onto \([0,1]\)).`}}]}],c=[{id:`stage-three`,statement:{ko:String.raw`3단계 \(C_3\)의 구간 개수와 전체 길이를 구하세요.`,en:String.raw`Count the intervals of stage \(C_3\) and compute its total length.`},display:[String.raw`2^3 = 8, \qquad \left(\tfrac{2}{3}\right)^3 = \tfrac{8}{27}`],preset:{stage:3},presetCaption:{ko:String.raw`3단계 — 8개의 조각, 전체 길이 \(8/27 \approx 0.296\).`,en:String.raw`Stage 3 — 8 pieces, total length \(8/27 \approx 0.296\).`},proof:[{text:{ko:String.raw`각 단계에서 모든 구간이 두 개로 쪼개지므로, \(n\)단계의 구간 수는 \(2^n\)개입니다. 따라서 \(C_3\)은 \(2^3 = 8\)개의 구간으로 이루어져 있습니다.`,en:String.raw`Every interval splits into two at each stage, so stage \(n\) has \(2^n\) intervals. Hence \(C_3\) consists of \(2^3 = 8\) intervals.`}},{text:{ko:String.raw`\(n\)단계의 각 구간 길이는 \(\left(\frac13\right)^n\)이므로, 전체 길이는 \(2^n \cdot \left(\frac13\right)^n = \left(\frac23\right)^n\)입니다.`,en:String.raw`Each interval at stage \(n\) has length \(\left(\frac13\right)^n\), so the total length is \(2^n \cdot \left(\frac13\right)^n = \left(\frac23\right)^n\).`}},{text:{ko:String.raw`\(n = 3\)일 때 전체 길이는 \(\left(\frac23\right)^3 = \frac{8}{27} \approx 0.296\)입니다.`,en:String.raw`At \(n = 3\) the total length is \(\left(\frac23\right)^3 = \frac{8}{27} \approx 0.296\).`}}]},{id:`quarter-in-cantor`,statement:{ko:String.raw`\(\frac14\)이 칸토어 집합에 속함을 삼진법 전개를 이용해 판정하세요.`,en:String.raw`Decide whether \(\frac14\) belongs to the Cantor set using its ternary expansion.`},display:[String.raw`\frac14 = 0.020202\ldots_3 \in C`],preset:{stage:4},presetCaption:{ko:String.raw`4단계 — \(\frac14\)는 매 단계 살아남는 구간 안에 있습니다.`,en:String.raw`Stage 4 — \(\frac14\) lies in a surviving interval at every stage.`},proof:[{text:{ko:String.raw`삼진법으로 \(0.020202\ldots_3 = \sum_{j=1}^{\infty} 2\cdot 3^{-2j}\)입니다. 등비급수 합 공식으로 \(\frac{2\cdot \frac19}{1-\frac19} = \frac{2/9}{8/9} = \frac14\)을 얻습니다.`,en:String.raw`In ternary, \(0.020202\ldots_3 = \sum_{j=1}^{\infty} 2\cdot 3^{-2j}\). The geometric series sums to \(\frac{2\cdot \frac19}{1-\frac19} = \frac{2/9}{8/9} = \frac14\).`}},{text:{ko:String.raw`먼저 삼진법 판정법을 단계에 대한 귀납법으로 증명합니다.

주장: \(x \in C_n\)인 것과, 처음 \(n\)개의 삼진 숫자가 모두 \(0\) 또는 \(2\)인 전개가 \(x\)에 존재하는 것은 동치입니다.

\(n = 0\)에서는 자명합니다 (\(C_0 = [0,1]\)).

귀납 단계: \(C_n\)의 각 구간은 \([s, s + 3^{-n}]\) (\(s = \sum_{k \le n} c_k 3^{-k}\), \(c_k \in \{0,2\}\)) 꼴이고, 이를 삼등분하면 왼쪽·오른쪽 닫힌 삼등분이 다음 숫자 \(0\), \(2\)에, 제거되는 열린 가운데 삼등분이 다음 숫자 \(1\)에 대응합니다.

따라서 \(C_{n+1}\)의 구간은 정확히 숫자를 \(0\) 또는 \(2\)로 연장한 것들이고, 숫자 \(1\)을 쓰는 점은 (그 숫자로 시작하는 가운데 구간 안에 들어가는) 그 단계에서 제거됩니다 — 단, 끝점은 \(1\)로 끝나는 전개의 대안 전개(\(\ldots 1000\ldots_3 = \ldots 0222\ldots_3\))를 가지므로, 판정은 전개가 "존재"한다는 것으로 진술해야 합니다.`,en:String.raw`First prove the ternary characterization by induction on stages.

Claim: \(x \in C_n\) iff \(x\) has a ternary expansion whose first \(n\) digits are all \(0\) or \(2\).

For \(n = 0\) this is trivial (\(C_0 = [0,1]\)).

Inductive step: each interval of \(C_n\) has the form \([s, s + 3^{-n}]\) with \(s = \sum_{k \le n} c_k 3^{-k}\), \(c_k \in \{0,2\}\); splitting it in thirds, the left and right closed thirds correspond to next digit \(0\) and \(2\), while the removed open middle third corresponds to next digit \(1\).

Hence the intervals of \(C_{n+1}\) are exactly those obtained by appending \(0\) or \(2\), and a point using digit \(1\) at this place (falling into the middle interval that digit opens) is removed at this stage — except that endpoints have the alternative expansion \(\ldots 1000\ldots_3 = \ldots 0222\ldots_3\), so the characterization must be stated with an expansion that "exists".`}},{text:{ko:String.raw`이 전개에는 숫자 \(1\)이 등장하지 않습니다. 방금 증명한 삼진법 판정법(전개에 \(1\)이 없는 수가 정확히 살아남는 수)에 의해, 모든 \(n\)에 대해 \(\frac14 \in C_n\)입니다: 처음 \(n\)개 숫자가 \(0, 2\)뿐이므로 \(\frac14\)는 어떤 단계에서도 지워지는 가운데 구간에 들어가지 않습니다.`,en:String.raw`This expansion contains no digit \(1\). By the ternary characterization just proved (numbers with an expansion avoiding \(1\) are exactly the survivors), \(\frac14 \in C_n\) for every \(n\): its first \(n\) digits are only \(0, 2\), so \(\frac14\) never falls into a deleted middle third at any stage.`}},{text:{ko:String.raw`따라서 \(\frac14\)는 모든 \(C_n\)에 속하고, \(C = \bigcap_n C_n\)에도 속합니다.`,en:String.raw`Hence \(\frac14\) belongs to every \(C_n\), and therefore to \(C = \bigcap_n C_n\).`}}]},{id:`measure-zero`,statement:{ko:String.raw`칸토어 집합 \(C\)의 '길이'(측도)가 \(0\)임을 덮개 논증으로 증명하세요.`,en:String.raw`Prove that the Cantor set \(C\) has measure zero, via a covering argument.`},display:[String.raw`\forall\, \varepsilon > 0\ \ \exists\, n:\ \left(\tfrac23\right)^n < \varepsilon`],preset:{stage:8},presetCaption:{ko:String.raw`8단계 — 전체 길이 \((2/3)^8 \approx 0.039\). \(n\)을 키우면 임의로 작아집니다.`,en:String.raw`Stage 8 — total length \((2/3)^8 \approx 0.039\), made arbitrarily small by taking \(n\) larger.`},proof:[{text:{ko:String.raw`\(C \subseteq C_n\) (모든 \(n\)에 대해)이고, \(C_n\)은 전체 길이가 \(\left(\frac23\right)^n\)인 \(2^n\)개의 구간으로 이루어져 있습니다.`,en:String.raw`\(C \subseteq C_n\) for every \(n\), and \(C_n\) consists of \(2^n\) intervals of total length \(\left(\frac23\right)^n\).`}},{text:{ko:String.raw`\(\varepsilon > 0\)이 주어지면 \(\left(\frac23\right)^n < \varepsilon\)인 \(n\)을 잡습니다 (\(\left(\frac23\right)^n \to 0\)이므로 가능합니다). 그러면 \(C\)는 전체 길이가 \(\varepsilon\)보다 작은 유한 개의 구간으로 덮입니다.`,en:String.raw`Given \(\varepsilon > 0\), choose \(n\) with \(\left(\frac23\right)^n < \varepsilon\) (possible since \(\left(\frac23\right)^n \to 0\)). Then \(C\) is covered by finitely many intervals of total length below \(\varepsilon\).`}},{text:{ko:String.raw`임의로 작은 전체 길이로 덮을 수 있는 집합의 측도는 \(0\)입니다(르벡 외측도의 정의). 참고로 \(C\)는 비가산집합이라는 사실도 알려져 있습니다 — 길이가 0인데 점은 셀 수 없이 많은 것입니다.`,en:String.raw`A set coverable by intervals of arbitrarily small total length has measure zero (this is the definition of Lebesgue outer measure zero). For the record, \(C\) is also uncountable — length zero, yet uncountably many points.`}}]}],l=[{id:`closure-open-interval`,statement:{ko:String.raw`\((0,1)\)의 폐포가 \([0,1]\)임을 증명하세요.`,en:String.raw`Prove the closure of \((0,1)\) is \([0,1]\).`},display:[String.raw`\overline{(0,1)} = [0,1]`],preset:{kind:`open`,m:1.5},presetCaption:{ko:String.raw`빨간 점 \(0, 1\) — 폐포가 추가한 극한점.`,en:String.raw`The red dots \(0, 1\) — limit points added by the closure.`},proof:[{text:{ko:String.raw`\((0,1)\)의 점은 자명히 폐포에 속한다.

\(x = 0\)이라 하자: 임의의 \(\varepsilon > 0\)에 대해 증인점 \(\min(\varepsilon/2, 1/2) \in (0,\varepsilon) \cap (0,1)\)이므로 (\(\varepsilon \ge 2\)이면 \(\varepsilon/2\)는 \((0,1)\)을 벗어날 수 있어 \(\min\)이 필요합니다), \(0\)의 모든 근방이 \((0,1)\)과 만난다.

즉 \(0 \in \overline{(0,1)}\)이다.`,en:String.raw`Points of \((0,1)\) are trivially in the closure. Let \(x = 0\): for every \(\varepsilon > 0\), the witness \(\min(\varepsilon/2, 1/2) \in (0,\varepsilon) \cap (0,1)\) (the \(\min\) is needed since \(\varepsilon/2\) can leave \((0,1)\) when \(\varepsilon \ge 2\)), so every neighborhood of \(0\) meets \((0,1)\); i.e. \(0 \in \overline{(0,1)}\).`}},{text:{ko:String.raw`마찬가지로 \(x = 1\)의 모든 \(\varepsilon\)-근방은 \(1 - \min(\varepsilon/2, 1/2) \in (0,1)\)을 포함하므로 \(1 \in \overline{(0,1)}\)이다.`,en:String.raw`Likewise every \(\varepsilon\)-ball at \(1\) contains \(1 - \min(\varepsilon/2, 1/2) \in (0,1)\), so \(1 \in \overline{(0,1)}\).`}},{text:{ko:String.raw`\(x < 0\)이면 반지름 \(-x/2\)인 공이 \((-\infty, 0)\) 안에 있어 \((0,1)\)과 만나지 않고, \(x > 1\)도 마찬가지다. 따라서 폐포는 정확히 \([0,1]\)이다.`,en:String.raw`If \(x < 0\), the ball of radius \(-x/2\) around \(x\) lies in \((-\infty, 0)\), disjoint from \((0,1)\); similarly for \(x > 1\). Hence the closure is exactly \([0,1]\).`}}]},{id:`open-not-closed`,statement:{ko:String.raw`\((0,1)\)이 닫힌집합이 아님을 폐포를 이용해 증명하세요.`,en:String.raw`Prove \((0,1)\) is not closed, using the closure.`},display:[String.raw`0 \in \overline{(0,1)} \setminus (0,1)`],preset:{kind:`open`,m:2},presetCaption:{ko:String.raw`\(M = 2\) — 담는 구간을 넓혀도 닫힘은 생기지 않는다.`,en:String.raw`\(M = 2\) — widening the bound does not make it closed.`},proof:[{text:{ko:String.raw`닫힌집합은 폐포와 같아야 한다: \(A\)가 닫힘 ⟺ \(\overline{A} = A\).`,en:String.raw`A closed set equals its closure: \(A\) is closed ⟺ \(\overline{A} = A\).`}},{text:{ko:String.raw`예제 1에서 \(\overline{(0,1)} = [0,1]\)이다. 그런데 \(0 \in [0,1]\)이지만 \(0 \notin (0,1)\)이므로, 폐포가 집합보다 크다.`,en:String.raw`By problem 1, \(\overline{(0,1)} = [0,1]\). But \(0 \in [0,1]\) while \(0 \notin (0,1)\), so the closure is strictly larger.`}},{text:{ko:String.raw`따라서 \((0,1) \neq \overline{(0,1)}\)이므로 \((0,1)\)은 닫힌집합이 아니다.`,en:String.raw`Hence \((0,1) \neq \overline{(0,1)}\), so \((0,1)\) is not closed.`}}]},{id:`reciprocal-closure`,statement:{ko:String.raw`\(A = \{1/n : n \geq 1\}\)이 유계임을 보이고, 그 폐포가 \(A \cup \{0\}\)임을 증명하세요.`,en:String.raw`Show \(A = \{1/n : n \geq 1\}\) is bounded and prove its closure is \(A \cup \{0\}\).`},display:[String.raw`\overline{\{1/n : n \geq 1\}} = \{1/n : n \geq 1\} \cup \{0\}`],preset:{kind:`reciprocal`,m:1.5},presetCaption:{ko:String.raw`빨간 점 \(0\) — 수열이 다가가지만 닿지 않는 극한점.`,en:String.raw`The red dot \(0\) — the limit point the sequence approaches but never touches.`},proof:[{text:{ko:String.raw`모든 \(n\)에 대해 \(0 < 1/n \leq 1\)이므로, \(M = 1\)에 대해 \(x \in A\)이면 \(\lvert x\rvert \leq M\) — \(A\)는 유계다.`,en:String.raw`For all \(n\), \(0 < 1/n \leq 1\), so with \(M = 1\) we have \(\lvert x\rvert \leq M\) for \(x \in A\) — \(A\) is bounded.`}},{text:{ko:String.raw`\(0\)의 임의의 \(\varepsilon\)-근방은 \(1/N < \varepsilon\)인 \(N\)에 대해 \(1/N \in A\)를 포함하므로, \(0\)은 \(A\)의 극한점이다. 즉 \(0 \in \overline{A}\)이다.`,en:String.raw`Every \(\varepsilon\)-ball at \(0\) contains \(1/N \in A\) for \(1/N < \varepsilon\), so \(0\) is a limit point of \(A\): \(0 \in \overline{A}\).`}},{text:{ko:String.raw`\(A \cup \{0\}\) 밖의 점은 \(A\)를 피한다: \(x < 0\)이면 반지름 \(\lvert x\rvert/2\)인 공이 \(A\)와 만나지 않고, \(x > 1\)도 마찬가지이며, \((0,1]\)에서 \(A\)에 속하지 않은 점은 이웃한 두 항 \(1/(n+1) < x < 1/n\) 사이에 있어 양쪽까지의 거리만큼의 공이 \(A\)를 피한다. 따라서 폐포는 정확히 \(A \cup \{0\}\)이다.`,en:String.raw`Points outside \(A \cup \{0\}\) miss \(A\): for \(x < 0\) the ball of radius \(\lvert x\rvert/2\) avoids \(A\), similarly for \(x > 1\); a point of \((0,1] \setminus A\) lies strictly between consecutive terms \(1/(n+1) < x < 1/n\), so a ball of the nearer gap radius avoids \(A\). Hence the closure is exactly \(A \cup \{0\}\).`}}]}],u=[{id:`compact-sequential-equivalence`,statement:{ko:String.raw`거리공간 \((X, d)\)와 \(K \subseteq X\)에 대해, \(K\)가 컴팩트인 것과 \(K\) 안의 모든 수열이 \(K\) 안의 점으로 수렴하는 부분수열을 갖는 것(순차 컴팩트)이 동치임을 증명하세요. 양방향을 모두 증명하세요.`,en:String.raw`For a metric space \((X, d)\) and \(K \subseteq X\), prove that \(K\) is compact if and only if every sequence in \(K\) has a subsequence converging to a point of \(K\) (sequentially compact). Prove both directions.`},display:[String.raw`K \text{ compact} \iff \forall\,(x_n) \subset K\ \exists\,(x_{n_k}) \to x \in K`,String.raw`(\Rightarrow)\ \text{finite subcover of } B(x, r_x); \qquad (\Leftarrow)\ \text{Lebesgue number } \delta + \text{ finite } \delta\text{-net}`],preset:{set:`closed`,step:6},presetCaption:{ko:String.raw`\(k = 6\): 처음 6개 열린구간의 합집합 \([-0.18, 1.18]\)이 \([0,1]\)을 덮습니다 — \((\Rightarrow)\) 방향에서 뽑는 유한 부분커버의 그림입니다.`,en:String.raw`\(k = 6\): the union \([-0.18, 1.18]\) of the first 6 open intervals covers \([0,1]\) — the finite subcover extracted in the \((\Rightarrow)\) direction.`},proof:[{text:{ko:String.raw`\((\Rightarrow)\) \(K\)가 컴팩트라고 하고, \((x_n)\)은 \(K\) 안의 수열인데 \(K\) 안의 점으로 수렴하는 부분수열이 없다고 가정하자. 그러면 모든 \(x \in K\)에 대해 \(r_x > 0\)가 존재하여 열린공 \(B(x, r_x)\)가 \(x_n\)을 유한 개만 포함한다: 만약 어떤 \(x\)에서는 모든 \(r > 0\)에 대해 \(B(x, r)\)가 \(x_n\)을 무한히 많이 포함한다면, \(n_k\)를 증가하게 골라 \(d(x_{n_k}, x) < 1/k\)로 만들 수 있어 \((x_{n_k})\)가 \(x\)로 수렴하기 때문이다.`,en:String.raw`\((\Rightarrow)\) Suppose \(K\) is compact, and \((x_n)\) is a sequence in \(K\) with no subsequence converging to a point of \(K\). Then for every \(x \in K\) there is \(r_x > 0\) such that the open ball \(B(x, r_x)\) contains \(x_n\) for only finitely many \(n\): if instead some \(x\) had \(B(x, r)\) containing \(x_n\) for infinitely many \(n\) for every \(r > 0\), we could choose \(n_k\) increasing with \(d(x_{n_k}, x) < 1/k\), and then \((x_{n_k})\) would converge to \(x\).`}},{text:{ko:String.raw`\((\Rightarrow)\) 공들 \(\{B(x, r_x)\}_{x \in K}\)는 \(K\)를 덮으므로, 컴팩트성에 의해 유한 부분커버 \(B(x_1, r_{x_1}), \dots, B(x_m, r_{x_m})\)가 존재한다. 각 공은 \(x_n\)을 유한 개만 포함하므로 그 유한 합집합도 첨수 \(n\)을 유한 개만 포함하는데, 이는 수열이 무한히 많은 첨수를 갖는다는 사실과 모순이다. 따라서 \(K\) 안의 모든 수열은 \(K\) 안의 점으로 수렴하는 부분수열을 갖는다.`,en:String.raw`\((\Rightarrow)\) The balls \(\{B(x, r_x)\}_{x \in K}\) cover \(K\), so compactness gives a finite subcover \(B(x_1, r_{x_1}), \dots, B(x_m, r_{x_m})\). Each ball contains \(x_n\) for only finitely many \(n\), so their finite union contains only finitely many indices \(n\) — a contradiction, since a sequence has infinitely many indices. Hence every sequence in \(K\) has a subsequence converging to a point of \(K\).`}},{text:{ko:String.raw`\((\Leftarrow)\) \(K\)가 순차 컴팩트라고 하자 (\(K\)가 빈집합이면 양쪽 모두 자명하므로 비어 있지 않다고 둔다). 1단계 (르베그 수): \(K\)의 모든 열린 커버 \(\mathcal{U}\)에 대해 \(\delta > 0\)가 존재하여, 모든 \(x \in K\)에 대해 \(B(x, \delta)\)가 \(\mathcal{U}\)의 어느 한 원소 안에 들어간다. 모순으로 증명한다: 그렇지 않다면 각 \(n\)마다 \(B(x_n, 1/n)\)이 \(\mathcal{U}\)의 어떤 원소 안에도 들어가지 않는 \(x_n \in K\)를 고를 수 있다. 순차 컴팩트성으로 부분수열 \((x_{n_k})\)가 \(x \in K\)로 수렴한다. \(x \in U_0\)인 \(U_0 \in \mathcal{U}\)가 있고, \(U_0\)가 열려 있어 \(B(x, \rho) \subseteq U_0\)인 \(\rho > 0\)가 있다. \(k\)가 충분히 크면 \(d(x_{n_k}, x) < \rho/2\)이고 \(1/n_k < \rho/2\)이므로, 아래 삼각부등식 사슬이 \(B(x_{n_k}, 1/n_k) \subseteq U_0\)를 주어 \(x_{n_k}\)의 선택과 모순이다.`,en:String.raw`\((\Leftarrow)\) Suppose \(K\) is sequentially compact (if \(K\) is empty both sides are trivial, so assume \(K\) is nonempty). Step 1 (Lebesgue number): for every open cover \(\mathcal{U}\) of \(K\) there is \(\delta > 0\) such that every ball \(B(x, \delta)\), \(x \in K\), lies inside some member of \(\mathcal{U}\). Prove it by contradiction: otherwise, for each \(n\) pick \(x_n \in K\) with \(B(x_n, 1/n)\) inside no member of \(\mathcal{U}\). By sequential compactness a subsequence \((x_{n_k})\) converges to \(x \in K\). There is \(U_0 \in \mathcal{U}\) with \(x \in U_0\), and \(U_0\) open gives \(\rho > 0\) with \(B(x, \rho) \subseteq U_0\). For all large \(k\), \(d(x_{n_k}, x) < \rho/2\) and \(1/n_k < \rho/2\), so the triangle inequality chain below gives \(B(x_{n_k}, 1/n_k) \subseteq U_0\) — contradicting the choice of \(x_{n_k}\).`},display:[String.raw`y \in B(x_{n_k}, 1/n_k) \Rightarrow d(y, x) \le d(y, x_{n_k}) + d(x_{n_k}, x) < \frac{1}{n_k} + \frac{\rho}{2} < \rho \Rightarrow B(x_{n_k}, 1/n_k) \subseteq B(x, \rho) \subseteq U_0`]},{text:{ko:String.raw`\((\Leftarrow)\) 2단계 (전유계성): \(\varepsilon > 0\)를 고정하자. 유한한 \(\varepsilon\)-그물이 존재하지 않는다고 가정하면, 귀납적으로 수열을 만들 수 있다: \(x_1 \in K\)를 고르고, \(x_{n+1} \in K\)를 모든 \(j \le n\)에 대해 \(d(x_{n+1}, x_j) \ge \varepsilon\)를 만족하게 고른다 — 유한 집합 \(\{x_1, \dots, x_n\}\)을 중심으로 한 \(\varepsilon\)-공들이 \(K\)를 덮지 못하므로 그 밖의 점을 고를 수 있기 때문이다. 이렇게 얻은 수열은 서로 다른 두 항 사이의 거리가 항상 \(\varepsilon\) 이상이라 코시 부분수열을 가질 수 없고, 따라서 수렴 부분수열도 가질 수 없어 순차 컴팩트성과 모순이다. 그러므로 유한히 많은 \(\varepsilon\)-공이 \(K\)를 덮는다.`,en:String.raw`\((\Leftarrow)\) Step 2 (total boundedness): fix \(\varepsilon > 0\). If no finite \(\varepsilon\)-net existed, we could pick a sequence inductively: pick \(x_1 \in K\), and pick \(x_{n+1} \in K\) with \(d(x_{n+1}, x_j) \ge \varepsilon\) for all \(j \le n\) — possible because the \(\varepsilon\)-balls around the finite set \(\{x_1, \dots, x_n\}\) do not cover \(K\), so a point outside them can be chosen. The resulting sequence has \(d(x_m, x_n) \ge \varepsilon\) for all \(m \ne n\), so it has no Cauchy subsequence, hence no convergent subsequence — contradicting sequential compactness. Therefore finitely many \(\varepsilon\)-balls cover \(K\).`}},{text:{ko:String.raw`\((\Leftarrow)\) 3단계: 열린 커버 \(\mathcal{U}\)가 주어지면 1단계의 르베그 수 \(\delta > 0\)를 잡고, 2단계를 \(\varepsilon = \delta\)로 적용해 \(K\)를 유한히 많은 \(\delta\)-공으로 덮는다. 각 \(\delta\)-공은 1단계에 의해 \(\mathcal{U}\)의 어느 한 원소 안에 들어가므로, 그 유한히 많은 원소들이 \(K\)를 덮는다. 따라서 \(\mathcal{U}\)는 유한 부분커버를 가지며, \(\mathcal{U}\)가 임의였으므로 \(K\)는 컴팩트이다.`,en:String.raw`\((\Leftarrow)\) Step 3: given an open cover \(\mathcal{U}\), take its Lebesgue number \(\delta > 0\) from Step 1, and cover \(K\) by finitely many \(\delta\)-balls using Step 2 with \(\varepsilon = \delta\). By Step 1 each \(\delta\)-ball lies inside some member of \(\mathcal{U}\), so those finitely many members cover \(K\). Hence \(\mathcal{U}\) has a finite subcover, and since \(\mathcal{U}\) was arbitrary, \(K\) is compact.`}}]},{id:`compact-halfopen-fails`,statement:{ko:String.raw`\((0,1]\)이 컴팩트가 아님을 보이세요: 수열 \(a_n = 1/n\)은 \((0,1]\) 안에 극한점을 갖는 수렴 부분수열을 하나도 갖지 않습니다.`,en:String.raw`Show that \((0,1]\) is not compact: the sequence \(a_n = 1/n\) has no subsequence converging to a point of \((0,1]\).`},display:[String.raw`a_n = \frac{1}{n} \to 0, \qquad 0 \notin (0,1]`,String.raw`\bigcup_{k=1}^{N} \left(\tfrac{1}{k}, 2\right) = \left(\tfrac{1}{N}, 2\right): \text{ the gap } \left(0, \tfrac{1}{N}\right] \text{ is never covered}`],preset:{set:`halfopen`,step:8},presetCaption:{ko:String.raw`\(k = 8\): 8개 구간을 모두 써도 \((0, 1/8]\)이 남습니다 — \(0\)이 빠져 있어 유한 부분커버가 없습니다.`,en:String.raw`\(k = 8\): even all 8 intervals leave \((0, 1/8]\) uncovered — with \(0\) missing, no finite subcover exists.`},proof:[{text:{ko:String.raw`\(a_n = 1/n\)이라 하자. 모든 \(n\)에 대해 \(a_n \in (0,1]\)이고, \(a_n \to 0\)이다.`,en:String.raw`Put \(a_n = 1/n\). Then \(a_n \in (0,1]\) for every \(n\), and \(a_n \to 0\).`}},{text:{ko:String.raw`수렴수열의 부분수열은 같은 극한으로 수렴하므로, \((a_n)\)의 임의의 부분수열 \((a_{n_k})\)도 \(0\)으로 수렴한다.`,en:String.raw`A subsequence of a convergent sequence converges to the same limit, so every subsequence \((a_{n_k})\) of \((a_n)\) also converges to \(0\).`}},{text:{ko:String.raw`그런데 \(0 \notin (0,1]\)이므로, 어떤 부분수열도 \((0,1]\) 안의 점으로 수렴하지 않는다. 따라서 \((0,1]\)은 순차 컴팩트가 아니며, 컴팩트도 아니다.`,en:String.raw`But \(0 \notin (0,1]\), so no subsequence converges to a point of \((0,1]\). Hence \((0,1]\) is not sequentially compact, and not compact.`}},{text:{ko:String.raw`열린 커버 그림도 같은 실패를 보여준다: 커버의 구간 \(U_k = \left(\frac{1}{k}, 2\right)\) (\(k = 1, \dots, 8\)) 중에서 처음 \(N\)개를 골라도 그 합집합은 \(\left(\frac{1}{N}, 2\right)\) 꼴이라 틈 \(\left(0, \frac{1}{N}\right]\)이 남는다 — \(k = 8\)에서는 \((0, 1/8]\)이다. 틈이 메워지려면 \(0\)이 있어야 하는데, \(0\)은 집합에 없다.`,en:String.raw`The open-cover picture shows the same failure: however many intervals we take from the cover — the first \(N\) of \(U_k = \left(\frac{1}{k}, 2\right)\) (\(k = 1, \dots, 8\)) — their union is always of the form \(\left(\frac{1}{N}, 2\right)\), leaving the gap \(\left(0, \frac{1}{N}\right]\) — at \(k = 8\) that gap is \((0, 1/8]\). Closing the gap would require the point \(0\), which is not in the set.`}}]},{id:`compact-continuous-image`,statement:{ko:String.raw`\(K\)가 컴팩트이고 \(f\)가 \(K\) 위에서 연속이면, 상 \(f(K)\)도 컴팩트임을 보이세요.`,en:String.raw`Prove that if \(K\) is compact and \(f\) is continuous on \(K\), then the image \(f(K)\) is compact.`},display:[String.raw`f^{-1}(V_i) \text{ open in } K,\quad K \subseteq \bigcup_{j=1}^{n} f^{-1}(V_{i_j}) \ \Longrightarrow\ f(K) \subseteq \bigcup_{j=1}^{n} V_{i_j}`,String.raw`K = [0,1] \text{ compact} \Rightarrow f(K) \text{ compact } \Rightarrow \max f, \min f \text{ exist (EVT)}`],preset:{set:`closed`,step:6},presetCaption:{ko:String.raw`최댓값 정리의 엔진: \([0,1]\)이 컴팩트이므로 연속상 \(f([0,1])\)도 컴팩트 — 최댓값·최솟값이 존재합니다.`,en:String.raw`The engine of the Extreme Value Theorem: \([0,1]\) is compact, so the continuous image \(f([0,1])\) is compact — max and min exist.`},proof:[{text:{ko:String.raw`열린 덮개 정의를 씁니다 — 이 논증은 \(K\)가 거리공간이라는 가정이 필요 없어 일반적인 컴팩트 \(K\)에서 성립합니다. \(\{V_i\}_{i \in I}\)를 \(f(K)\)의 임의의 열린 덮개라 하자.`,en:String.raw`Use the open-cover definition — this argument needs no assumption that \(K\) is metric, so it works for a general compact \(K\). Let \(\{V_i\}_{i \in I}\) be an arbitrary open cover of \(f(K)\).`}},{text:{ko:String.raw`각 \(i\)에 대해 \(U_i = f^{-1}(V_i)\)는 \(f\)의 연속성에 의해 \(K\)에서 열려 있습니다. 또 \(x \in K\)이면 \(f(x) \in f(K)\)이므로 \(f(x) \in V_i\)인 \(i\)가 있어 \(x \in U_i\)입니다 — 즉 \(\{U_i\}\)는 \(K\)의 열린 덮개입니다.`,en:String.raw`For each \(i\), \(U_i = f^{-1}(V_i)\) is open in \(K\) by continuity of \(f\). And if \(x \in K\) then \(f(x) \in f(K)\), so \(f(x) \in V_i\) for some \(i\), i.e. \(x \in U_i\) — hence \(\{U_i\}\) is an open cover of \(K\).`}},{text:{ko:String.raw`\(K\)가 컴팩트이므로 유한 부분덮개가 있습니다: \(K \subseteq U_{i_1} \cup \cdots \cup U_{i_n}\). 그러면 대응하는 \(V_{i_1}, \dots, V_{i_n}\)이 \(f(K)\)를 덮습니다 — \(y = f(x) \in f(K)\)이면 \(x \in U_{i_j}\)인 \(j\)가 있어 \(y = f(x) \in V_{i_j}\)이기 때문입니다.`,en:String.raw`Since \(K\) is compact, there is a finite subcover: \(K \subseteq U_{i_1} \cup \cdots \cup U_{i_n}\). Then the corresponding \(V_{i_1}, \dots, V_{i_n}\) cover \(f(K)\): if \(y = f(x) \in f(K)\), then \(x \in U_{i_j}\) for some \(j\), so \(y = f(x) \in V_{i_j}\).`}},{text:{ko:String.raw`따라서 \(f(K)\)의 모든 열린 덮개는 유한 부분덮개를 가지므로 \(f(K)\)는 컴팩트입니다. 이것이 최댓값 정리(evt 씬)의 엔진이다 — \([0,1]\) 위의 연속함수 \(f\)에 대해 \(f([0,1])\)이 컴팩트이므로 \(\mathbb{R}\)에서 닫혀 있고 유계이며, 상한·하한을 실제로 취한다.`,en:String.raw`Hence every open cover of \(f(K)\) has a finite subcover, so \(f(K)\) is compact. This is the engine of the Extreme Value Theorem (the evt scene) — for continuous \(f\) on \([0,1]\), the set \(f([0,1])\) is compact, hence closed and bounded in \(\mathbb{R}\), so its supremum and infimum are actually attained.`}}]}],d=[{id:`picard-cauchy`,statement:{ko:String.raw`수축사상 \(T\) (\(d(Tx,Ty) \le q\,d(x,y)\), \(0 \le q < 1\))의 피카르 반복 \(x_{n+1} = Tx_n\)에 대해 \(m>n\)일 때 \(d(x_n,x_m) \le \frac{q^n}{1-q}\,d(x_0,x_1)\)임을 보이고, \((x_n)\)이 코시수열임을 증명하세요.`,en:String.raw`For the Picard iterates \(x_{n+1} = Tx_n\) of a contraction \(T\) (\(d(Tx,Ty) \le q\,d(x,y)\), \(0 \le q < 1\)), show \(d(x_n,x_m) \le \frac{q^n}{1-q}\,d(x_0,x_1)\) for \(m>n\), and prove \((x_n)\) is Cauchy.`},display:[String.raw`d(x_{k+1},x_{k+2}) \le q\,d(x_k,x_{k+1}) \le q^{k+1}\,d(x_0,x_1)`,String.raw`d(x_n,x_m) \le \sum_{k=n}^{m-1} d(x_k,x_{k+1}) \le \frac{q^n}{1-q}\,d(x_0,x_1)`],preset:{map:`affine`,n:8,x0:1},presetCaption:{ko:String.raw`\(n=8\): 코시 꼬리 상한 \(2^{-8} \approx 0.0039\) — \(m>8\)인 모든 \(x_m\)이 이 안에 들어옵니다.`,en:String.raw`\(n=8\): the Cauchy tail bound \(2^{-8} \approx 0.0039\) — every \(x_m\) with \(m>8\) lands inside it.`},proof:[{text:{ko:String.raw`먼저 \(q \in [0, 1)\)이라 둡니다: 거리는 항상 \(\ge 0\)이므로 수축상수 \(q\)는 거리들의 비로서 \(q \ge 0\)으로 잡을 수 있습니다 (\(q < 0\)이면 \(d(Tx,Ty) \le q\,d(x,y) \le 0\)이라 모든 \(Tx\)가 같아져 자명해지고, 아래에서 \(q\)를 곱하는 귀납법과 기하급수 꼬리 공식이 부호 때문에 깨집니다). 한 걸음씩 조입니다: \(d(x_{k+1},x_{k+2}) = d(Tx_k,Tx_{k+1}) \le q\,d(x_k,x_{k+1})\)이므로, \(q \ge 0\)인 덕분에 부등식 방향이 유지되어 귀납법으로 모든 \(k\)에 대해 \(d(x_k,x_{k+1}) \le q^k\,d(x_0,x_1)\)입니다.`,en:String.raw`First take \(q \in [0, 1)\): distances are always \(\ge 0\), so the contraction constant \(q\) — a ratio of distances — may be taken with \(q \ge 0\) (if \(q < 0\) then \(d(Tx,Ty) \le q\,d(x,y) \le 0\) would force every \(Tx\) to coincide, and in any case the induction multiplying by \(q\) and the geometric tail formula below would break over the sign). Squeeze one step at a time: \(d(x_{k+1},x_{k+2}) = d(Tx_k,Tx_{k+1}) \le q\,d(x_k,x_{k+1})\), and since \(q \ge 0\) the inequality direction is preserved, so by induction \(d(x_k,x_{k+1}) \le q^k\,d(x_0,x_1)\) for every \(k\).`}},{text:{ko:String.raw`\(m>n\)이면 삼각부등식을 연달아 적용해 \(d(x_n,x_m) \le \sum_{k=n}^{m-1} d(x_k,x_{k+1}) \le \left(\sum_{k=n}^{m-1} q^k\right) d(x_0,x_1)\)입니다. 합을 \(\infty\)까지 늘리면 기하급수 꼬리 \(\sum_{k=n}^{\infty} q^k = \frac{q^n}{1-q}\)가 나오므로 \(d(x_n,x_m) \le \frac{q^n}{1-q}\,d(x_0,x_1)\)입니다.`,en:String.raw`For \(m>n\), chaining the triangle inequality gives \(d(x_n,x_m) \le \sum_{k=n}^{m-1} d(x_k,x_{k+1}) \le \left(\sum_{k=n}^{m-1} q^k\right) d(x_0,x_1)\). Extending the sum to \(\infty\) yields the geometric tail \(\sum_{k=n}^{\infty} q^k = \frac{q^n}{1-q}\), so \(d(x_n,x_m) \le \frac{q^n}{1-q}\,d(x_0,x_1)\).`}},{text:{ko:String.raw`우변은 \(m\)과 무관하게 \(n \to \infty\)일 때 \(0\)으로 가므로 \((x_n)\)은 코시수열입니다. \(q = 1/2\), \(x_0 = 1\)이면 \(d(x_1,x_0) = 1/2\)이므로 상한은 \(2^{-n}\)이 되고, \(n = 8\)에서 \(\frac{1}{256} \approx 0.0039\) — 캡션의 수치와 일치합니다.`,en:String.raw`The right side tends to \(0\) as \(n \to \infty\), independently of \(m\), so \((x_n)\) is Cauchy. With \(q = 1/2\) and \(x_0 = 1\), \(d(x_1,x_0) = 1/2\) makes the bound \(2^{-n}\); at \(n = 8\) it is \(\frac{1}{256} \approx 0.0039\) — matching the caption's figure.`}}]},{id:`half-no-fixed-point`,statement:{ko:String.raw`\(T(x) = x/2\)가 \((0,1]\) 위에서 \(q = 1/2\)인 수축사상이지만, \((0,1]\) 안에는 고정점이 없음을 보이세요.

완비성이 왜 필수적인지 설명합니다.`,en:String.raw`Show that \(T(x) = x/2\) is a contraction with \(q = 1/2\) on \((0,1]\), yet has no fixed point in \((0,1]\).

This is why completeness is essential.`},display:[String.raw`|T(x) - T(y)| = \tfrac12|x - y|, \qquad T\big((0,1]\big) \subset (0,1]`,String.raw`x_0 = 1 \Rightarrow x_n = 2^{-n} \to 0 \notin (0,1]`],preset:{map:`half`,n:8,x0:1},presetCaption:{ko:String.raw`\(n=8\): \(x_8 = 2^{-8} \approx 0.0039\) — 반복값이 빠져 있는 극한 \(0\)으로 빨려듭니다.`,en:String.raw`\(n=8\): \(x_8 = 2^{-8} \approx 0.0039\) — the iterates drain toward the missing limit \(0\).`},proof:[{text:{ko:String.raw`\(|T(x) - T(y)| = \left|\frac{x}{2} - \frac{y}{2}\right| = \frac12|x - y|\)이므로 \(T\)는 \(q = 1/2\)인 수축사상입니다. 또한 \(x \in (0,1]\)이면 \(T(x) = x/2 \in (0, 1/2] \subset (0,1]\)이므로 \(T\)는 \((0,1]\)을 자기 자신으로 보냅니다.`,en:String.raw`Since \(|T(x) - T(y)| = \left|\frac{x}{2} - \frac{y}{2}\right| = \frac12|x - y|\), \(T\) is a contraction with \(q = 1/2\). And \(x \in (0,1]\) gives \(T(x) = x/2 \in (0, 1/2] \subset (0,1]\), so \(T\) maps \((0,1]\) into itself.`}},{text:{ko:String.raw`고정점은 \(x = x/2\), 즉 \(x = 0\)을 만족해야 하지만 \(0 \notin (0,1]\)입니다. 따라서 \(T\)는 \((0,1]\) 안에 고정점을 하나도 갖지 않습니다.`,en:String.raw`A fixed point would satisfy \(x = x/2\), i.e. \(x = 0\), but \(0 \notin (0,1]\). Hence \(T\) has no fixed point in \((0,1]\).`}},{text:{ko:String.raw`\(x_0 = 1\)에서 시작하면 \(x_n = 2^{-n}\): \(1, \frac12, \frac14, \dots\)입니다.

이 수열은 첫 번째 문제의 기하 상한을 만족하므로 코시수열이지만, 그 극한 \(0\)은 공간 밖에 있습니다.

완비성이 빠지면 코시수열이 "도착할 곳"을 잃고 정리 전체가 무너집니다 — \(n = 8\)에서 \(x_8 = \frac{1}{256} \approx 0.0039\)로, 캡션의 수치와 일치합니다.`,en:String.raw`Starting from \(x_0 = 1\) gives \(x_n = 2^{-n}\): \(1, \frac12, \frac14, \dots\).

This sequence satisfies the geometric bound from the first problem, so it is Cauchy — but its limit \(0\) lies outside the space.

Without completeness a Cauchy sequence loses its "place to land" and the whole theorem collapses; at \(n = 8\), \(x_8 = \frac{1}{256} \approx 0.0039\), matching the caption's figure.`}}]},{id:`error-bound-uniqueness`,statement:{ko:String.raw`완비 거리공간에서 수축사상의 고정점 \(x^*\)에 대해 오차 상한 \(d(x_n,x^*) \le \frac{q^n}{1-q}\,d(x_1,x_0)\)을 유도하고, 고정점이 최대 하나임을 증명하세요.`,en:String.raw`On a complete metric space, derive the error bound \(d(x_n,x^*) \le \frac{q^n}{1-q}\,d(x_1,x_0)\) for the fixed point \(x^*\) of a contraction, and prove there is at most one fixed point.`},display:[String.raw`d(x_n,x^*) = \lim_{m \to \infty} d(x_n,x_m) \le \frac{q^n}{1-q}\,d(x_1,x_0)`,String.raw`d(x^*, y^*) = d(Tx^*, Ty^*) \le q\,d(x^*, y^*) \Rightarrow x^* = y^*`],preset:{map:`affine`,n:8,x0:1},presetCaption:{ko:String.raw`\(n=8\): \(|x_8 - 2| = 1/256 \approx 0.0039\) — 상한과 정확히 일치합니다.`,en:String.raw`\(n=8\): \(|x_8 - 2| = 1/256 \approx 0.0039\) — matches the bound exactly.`},proof:[{text:{ko:String.raw`완비성에 의해 코시수열 \((x_n)\)은 공간 안의 점 \(x^*\)로 수렴합니다. 수축사상은 \(d(Tx,Ty) \le q\,d(x,y)\)이므로 연속이고, 따라서 \(Tx^* = T(\lim x_n) = \lim Tx_n = \lim x_{n+1} = x^*\) — \(x^*\)는 고정점입니다.`,en:String.raw`Completeness makes the Cauchy sequence \((x_n)\) converge to a point \(x^*\) inside the space. A contraction is continuous since \(d(Tx,Ty) \le q\,d(x,y)\), so \(Tx^* = T(\lim x_n) = \lim Tx_n = \lim x_{n+1} = x^*\) — \(x^*\) is a fixed point.`}},{text:{ko:String.raw`극한을 취하는 근거: 거리함수는 연속입니다 — 역삼각부등식에 의해 \(\lvert d(x_n,x_m) - d(x_n,x^*)\rvert \le d(x_m, x^*) \to 0\) (\(m \to \infty\))이므로 \(d(x_n,x_m) \to d(x_n,x^*)\)입니다.

따라서 첫 번째 문제의 부등식에서 \(m \to \infty\)으로 보내면 (\(d(x_1,x_0) = d(x_0,x_1)\)이므로) 오차 상한 \(d(x_n,x^*) \le \frac{q^n}{1-q}\,d(x_1,x_0)\)을 얻습니다.

\(T(x) = x/2 + 1\), \(q = 1/2\), \(x_0 = 1\)이면 상한은 \(\frac{(1/2)^8}{1/2}\cdot\frac12 = \frac{1}{256} \approx 0.0039\)이고, 실제 반복값 \(x_8 = 2 - 2^{-8} = 1.99609375\)는 오차 \(|x_8 - 2| = \frac{1}{256}\)으로 상한과 정확히 일치합니다.`,en:String.raw`Justification for passing to the limit: the metric is continuous — by the reverse triangle inequality, \(\lvert d(x_n,x_m) - d(x_n,x^*)\rvert \le d(x_m, x^*) \to 0\) as \(m \to \infty\), so \(d(x_n,x_m) \to d(x_n,x^*)\).

Hence letting \(m \to \infty\) in the first problem's estimate (and \(d(x_1,x_0) = d(x_0,x_1)\)) gives the error bound \(d(x_n,x^*) \le \frac{q^n}{1-q}\,d(x_1,x_0)\).

For \(T(x) = x/2 + 1\) with \(q = 1/2\) and \(x_0 = 1\), the bound is \(\frac{(1/2)^8}{1/2}\cdot\frac12 = \frac{1}{256} \approx 0.0039\), and the actual iterate \(x_8 = 2 - 2^{-8} = 1.99609375\) has error \(|x_8 - 2| = \frac{1}{256}\), matching the bound exactly.`}},{text:{ko:String.raw`유일성: \(x^*\), \(y^*\)가 모두 고정점이라 가정하면 \(d(x^*, y^*) = d(Tx^*, Ty^*) \le q\,d(x^*, y^*)\)입니다. \(q < 1\)이므로 \(d(x^*, y^*) = 0\), 즉 \(x^* = y^*\)를 강제합니다.`,en:String.raw`Uniqueness: if \(x^*\) and \(y^*\) are both fixed points, \(d(x^*, y^*) = d(Tx^*, Ty^*) \le q\,d(x^*, y^*)\). Since \(q < 1\), this forces \(d(x^*, y^*) = 0\), i.e. \(x^* = y^*\).`}}]}],f=[{id:`discrete-axioms`,statement:{ko:String.raw`이산 거리 \(d(x,y)=0\) (\(x=y\)일 때), \(1\) (그 외)이 거리 공리를 만족함을 증명하세요.`,en:String.raw`Prove the discrete metric \(d(x,y)=0\) if \(x=y\), \(1\) otherwise, satisfies the metric axioms.`},display:[String.raw`d(x,y) \geq 0,\quad d(x,y)=0 \iff x=y`,String.raw`d(x,y)=d(y,x),\quad d(x,z) \leq d(x,y)+d(y,z)`],preset:{metric:`discrete`,r:.5},presetCaption:{ko:String.raw`이산 거리, \(r = 0.5\) — \(B(p_0, 0.5) = \{p_0\}\)`,en:String.raw`Discrete metric, \(r = 0.5\) — \(B(p_0, 0.5) = \{p_0\}\).`},proof:[{text:{ko:String.raw`\(d(x,y)\)의 값은 \(0\) 또는 \(1\)뿐이므로 \(d(x,y) \geq 0\)이다. 정의에 의해 \(x = y\)일 때 정확히 \(d(x,y) = 0\)이고, \(x \neq y\)일 때 \(d(x,y) = 1\)이므로 \(d(x,y) = 0 \iff x = y\)이다.`,en:String.raw`\(d(x,y)\) takes only the values \(0\) or \(1\), so \(d(x,y) \geq 0\). By definition \(d(x,y) = 0\) exactly when \(x = y\), and \(d(x,y) = 1\) when \(x \neq y\), so \(d(x,y) = 0 \iff x = y\).`}},{text:{ko:String.raw`대칭성: \(x = y\)이면 \(d(x,y) = 0 = d(y,x)\)이고, \(x \neq y\)이면 \(d(x,y) = 1 = d(y,x)\)이므로 \(d(x,y) = d(y,x)\)이다.`,en:String.raw`Symmetry: if \(x = y\) then \(d(x,y) = 0 = d(y,x)\), and if \(x \neq y\) then \(d(x,y) = 1 = d(y,x)\), so \(d(x,y) = d(y,x)\).`}},{text:{ko:String.raw`삼각 부등식을 경우로 나누어 보인다. \(x = z\)이면 좌변 \(d(x,z) = 0 \leq d(x,y) + d(y,z)\)이다.

\(x \neq z\)이면 좌변 \(d(x,z) = 1\)이다. 이때 임의의 \(y\)에 대해, \(y\)가 \(x\)와 같으면 우변은 \(0 + 1 = 1\), \(y\)가 \(z\)와 같으면 \(1 + 0 = 1\), \(y\)가 둘 다와 다르면 \(1 + 1 = 2\)이므로, 어느 경우에도 \(1 \leq d(x,y) + d(y,z)\)이다.`,en:String.raw`For the triangle inequality, argue by cases. If \(x = z\) then the left side is \(d(x,z) = 0 \leq d(x,y) + d(y,z)\).

If \(x \neq z\) then the left side is \(d(x,z) = 1\). For any \(y\): if \(y\) equals \(x\) the right side is \(0 + 1 = 1\); if \(y\) equals \(z\) it is \(1 + 0 = 1\); if \(y\) equals neither it is \(1 + 1 = 2\). In every case \(1 \leq d(x,y) + d(y,z)\).`}},{text:{ko:String.raw`따라서 \(d(x,z) \leq d(x,y) + d(y,z)\)가 모든 \(x, y, z\)에 대해 성립한다 — 이산 거리는 거리 공리를 모두 만족한다.`,en:String.raw`Hence \(d(x,z) \leq d(x,y) + d(y,z)\) holds for all \(x, y, z\) — the discrete metric satisfies all the metric axioms.`}}]},{id:`discrete-open`,statement:{ko:String.raw`이산 거리 공간에서는 모든 부분집합이 열린집합임을 증명하세요.`,en:String.raw`Prove every subset of a discrete metric space is open.`},display:[String.raw`B(x, 1/2) = \{x\}`],preset:{metric:`discrete`,r:.5},presetCaption:{ko:String.raw`\(r = 0.5 < 1\) — 모든 한 점 집합이 열린 공이다.`,en:String.raw`\(r = 0.5 < 1\) — every singleton is an open ball.`},proof:[{text:{ko:String.raw`\(A\)를 이산 거리 공간의 임의의 부분집합이라 하자. \(A = \emptyset\)이면 확인할 점이 없어 \(A\)는 자명하게 열린집합이다.

그 외의 경우 \(x \in A\)를 잡자.`,en:String.raw`Let \(A\) be any subset of a discrete metric space. If \(A = \emptyset\), then \(A\) is open vacuously — there is no point of \(A\) at which openness could fail.

Otherwise take \(x \in A\).`}},{text:{ko:String.raw`\(r = 1/2\)이라 두면 \(B(x, 1/2) = \{x\}\)이다: \(d(x,y) < 1/2\)이면 \(d(x,y)\)의 값이 \(0\) 또는 \(1\)뿐이므로 \(d(x,y) = 0\)이어야 하고, 이는 \(y = x\)를 뜻한다.`,en:String.raw`With \(r = 1/2\) we have \(B(x, 1/2) = \{x\}\): if \(d(x,y) < 1/2\) then, since \(d(x,y)\) is only \(0\) or \(1\), we must have \(d(x,y) = 0\), i.e. \(y = x\).`}},{text:{ko:String.raw`따라서 \(B(x, 1/2) = \{x\} \subseteq A\)이다. \(x\)가 임의였으므로 \(A\)의 모든 점은 내점 — \(A\)는 열린집합이다.`,en:String.raw`Hence \(B(x, 1/2) = \{x\} \subseteq A\). Since \(x\) was arbitrary, every point of \(A\) is an interior point — \(A\) is open.`}}]},{id:`discrete-convergent`,statement:{ko:String.raw`이산 거리 공간에서 수렴하는 수열은 결국 상수 수열임을 증명하세요.`,en:String.raw`Prove a convergent sequence in a discrete metric space is eventually constant.`},display:[String.raw`d(x_n, x) < 1/2 \implies x_n = x`],preset:{metric:`discrete`,r:1.5},presetCaption:{ko:String.raw`\(r = 1.5 > 1\) — 공이 전체 6점이 된다.`,en:String.raw`\(r = 1.5 > 1\) — the ball becomes all six points.`},proof:[{text:{ko:String.raw`\(x_n \to x\)라 하자. 수렴의 정의에서 \(\varepsilon = 1/2\)에 대해, \(n \geq N\)이면 \(d(x_n, x) < 1/2\)인 \(N\)이 존재한다.`,en:String.raw`Let \(x_n \to x\). By the definition of convergence, with \(\varepsilon = 1/2\) there is an \(N\) such that \(d(x_n, x) < 1/2\) for all \(n \geq N\).`}},{text:{ko:String.raw`이산 거리에서 \(d(x_n, x) < 1/2\)이면 \(d(x_n, x)\)의 가능한 값이 \(0\)뿐이므로 \(d(x_n, x) = 0\)이어야 하고, 이는 \(x_n = x\)를 뜻한다.`,en:String.raw`In the discrete metric, \(d(x_n, x) < 1/2\) forces \(d(x_n, x) = 0\) since \(0\) is the only attainable value, and that means \(x_n = x\).`}},{text:{ko:String.raw`따라서 \(n \geq N\)인 모든 \(n\)에 대해 \(x_n = x\) — 수열은 결국 상수 수열이다.`,en:String.raw`Thus \(x_n = x\) for all \(n \geq N\) — the sequence is eventually constant.`}}]}],p={opensets:[{id:`open-interval-open`,statement:{ko:String.raw`\((0,1)\)이 열린집합임을 정의로 직접 증명하세요.`,en:String.raw`Prove directly from the definition that \((0,1)\) is open.`},display:[String.raw`\varepsilon = \min(x, 1-x) > 0`],preset:{set:`open`,x:.5,eps:.2},presetCaption:{ko:String.raw`\(x = 0.5\), \(\varepsilon = 0.2\) — 공이 \((0,1)\) 안에 들어갑니다.`,en:String.raw`\(x = 0.5\), \(\varepsilon = 0.2\) — the ball stays inside \((0,1)\).`},proof:[{text:{ko:String.raw`\(x \in (0,1)\)이라 하자. \(x > 0\)이고 \(1 - x > 0\)이므로 \(\varepsilon = \min(x, 1-x) > 0\)이라 둘 수 있다.`,en:String.raw`Let \(x \in (0,1)\). Since \(x > 0\) and \(1 - x > 0\), we may put \(\varepsilon = \min(x, 1-x) > 0\).`}},{text:{ko:String.raw`\(y \in (x-\varepsilon, x+\varepsilon)\)이라 하자. \(\lvert y - x\rvert < \varepsilon \leq x\)이므로 \(y > x - \varepsilon \geq 0\)이고, \(\lvert y - x\rvert < \varepsilon \leq 1 - x\)이므로 \(y < x + \varepsilon \leq 1\)이다.`,en:String.raw`Let \(y \in (x-\varepsilon, x+\varepsilon)\). From \(\lvert y - x\rvert < \varepsilon \leq x\) we get \(y > x - \varepsilon \geq 0\), and from \(\lvert y - x\rvert < \varepsilon \leq 1 - x\) we get \(y < x + \varepsilon \leq 1\).`}},{text:{ko:String.raw`따라서 \((x-\varepsilon, x+\varepsilon) \subseteq (0,1)\)이다. \(x\)가 임의였으므로 \((0,1)\)은 열린집합이다.`,en:String.raw`Hence \((x-\varepsilon, x+\varepsilon) \subseteq (0,1)\). Since \(x\) was arbitrary, \((0,1)\) is open.`}}]},{id:`infinite-intersection`,statement:{ko:String.raw`\(\bigcap_{n=1}^{\infty} (-1/n, 1/n) = \{0\}\)임을 보이고, 이것이 열린집합이 아님을 증명하세요.`,en:String.raw`Show \(\bigcap_{n=1}^{\infty} (-1/n, 1/n) = \{0\}\), and prove it is not open.`},display:[String.raw`\bigcap_{n=1}^{\infty} \left(-\frac{1}{n}, \frac{1}{n}\right) = \{0\}`],preset:{set:`singleton`,x:0,eps:.1},presetCaption:{ko:String.raw`\(\{0\}\) — 어떤 \(\varepsilon\)-공도 한 점 안에 들어가지 않는다.`,en:String.raw`\(\{0\}\) — no \(\varepsilon\)-ball fits inside a single point.`},proof:[{text:{ko:String.raw`\(x \in \bigcap_{n} (-1/n, 1/n)\)이라 하자. 모든 \(n\)에 대해 \(\lvert x\rvert < 1/n\)이다. 만약 \(\lvert x\rvert > 0\)이면 아르키메데스 성질에 의해 \(1/n < \lvert x\rvert\)인 \(n\)이 존재해 \(\lvert x\rvert < 1/n\)에 모순이다.

따라서 \(\lvert x\rvert = 0\), 즉 \(x = 0\)이다.`,en:String.raw`Let \(x \in \bigcap_n (-1/n, 1/n)\). Then \(\lvert x\rvert < 1/n\) for every \(n\). If \(\lvert x\rvert > 0\), the Archimedean property gives an \(n\) with \(1/n < \lvert x\rvert\), contradicting \(\lvert x\rvert < 1/n\).

Hence \(\lvert x\rvert = 0\), i.e. \(x = 0\).`}},{text:{ko:String.raw`역으로 \(0\)은 모든 \((-1/n, 1/n)\)에 속하므로 교집합은 정확히 \(\{0\}\)이다.`,en:String.raw`Conversely \(0\) lies in every \((-1/n, 1/n)\), so the intersection is exactly \(\{0\}\).`}},{text:{ko:String.raw`\(\{0\}\)은 열린집합이 아니다: 점 \(0\)에서 어떤 \(\varepsilon > 0\)을 잡아도 \(\varepsilon/2 \in (-\varepsilon, \varepsilon)\)이지만 \(\varepsilon/2 \notin \{0\}\)이므로, \(\varepsilon\)-공이 \(\{0\}\) 안에 들어가지 않는다. — 열린집합들의 무한 교집합은 열려 있지 않을 수 있다.`,en:String.raw`\(\{0\}\) is not open: at \(0\), for any \(\varepsilon > 0\) we have \(\varepsilon/2 \in (-\varepsilon, \varepsilon)\) but \(\varepsilon/2 \notin \{0\}\), so no \(\varepsilon\)-ball fits inside \(\{0\}\). — infinite intersections of open sets need not be open.`}}]},{id:`closed-not-open`,statement:{ko:String.raw`\([0,1]\)이 열린집합이 아님을 증명하세요.`,en:String.raw`Prove \([0,1]\) is not open.`},display:[String.raw`-\frac{\varepsilon}{2} \in (-\varepsilon, \varepsilon), \quad -\frac{\varepsilon}{2} \notin [0,1]`],preset:{set:`closed`,x:0,eps:.2},presetCaption:{ko:String.raw`\(x = 0\) — 경계점에서는 어떤 \(\varepsilon\)-공도 밖으로 샌다.`,en:String.raw`\(x = 0\) — at a boundary point every \(\varepsilon\)-ball leaks out.`},proof:[{text:{ko:String.raw`\(0 \in [0,1]\)이다. \(\varepsilon > 0\)을 임의로 잡자.`,en:String.raw`\(0 \in [0,1]\). Let \(\varepsilon > 0\) be arbitrary.`}},{text:{ko:String.raw`\(-\varepsilon/2 \in (-\varepsilon, \varepsilon)\)이지만 \(-\varepsilon/2 < 0\)이므로 \(-\varepsilon/2 \notin [0,1]\)이다.`,en:String.raw`\(-\varepsilon/2 \in (-\varepsilon, \varepsilon)\) but \(-\varepsilon/2 < 0\), so \(-\varepsilon/2 \notin [0,1]\).`}},{text:{ko:String.raw`따라서 \(0\)의 어떤 \(\varepsilon\)-근방도 \([0,1]\) 안에 들어가지 않으므로, \([0,1]\)은 열린집합이 아니다.`,en:String.raw`Hence no \(\varepsilon\)-ball at \(0\) stays inside \([0,1]\); \([0,1]\) is not open.`}}]}],clopen:n,connected:r,closure:l,compact:u,"topologist-sine":o,"peano-curve":a,"metric-spaces":f,contraction:d,"baire-category":e,"baire-1":t,cantor:c,"fat-cantor":i,"cantor-function":s};export{p as problemsByScene};