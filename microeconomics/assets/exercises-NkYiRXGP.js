var e=[{id:`ic-binds`,difficulty:1,topics:[`moral-hazard`],statement:{ko:String.raw`\(p_1 = 0.8\), \(p_0 = 0.2\), \(\bar u = 20\), \(u(w) = w^{1/2}\), \(c = 10\)일 때 최적 계약 \((w_L, w_H) = (277.78, 1111.11)\)이 주어졌다.

대리인이 높은 노력을 할 때의 기대효용과 태업할 때의 보수를 각각 구하고, 유인양립성 제약이 등호로 성립함을 보여라.`,en:String.raw`With \(p_1 = 0.8\), \(p_0 = 0.2\), \(\bar u = 20\), \(u(w) = w^{1/2}\), \(c = 10\), the optimal contract \((w_L, w_H) = (277.78, 1111.11)\) is given.

Compute the agent's expected utility under high effort and the payoff from shirking, and show the incentive-compatibility constraint holds with equality.`},display:[String.raw`(u_L, u_H) = (16.667, 33.333)`],solution:[{text:{ko:String.raw`효용 단위로 환산하면 \((u_L, u_H) = (277.78^{1/2}, 1111.11^{1/2}) = (16.667, 33.333)\)이다. 높은 노력을 하면 기대효용은 \(0.8 \times 33.333 + 0.2 \times 16.667 - 10 = 20\)이다.`,en:String.raw`In utility units, \((u_L, u_H) = (277.78^{1/2}, 1111.11^{1/2}) = (16.667, 33.333)\). Working hard gives expected utility \(0.8 \times 33.333 + 0.2 \times 16.667 - 10 = 20\).`}},{text:{ko:String.raw`태업하면 성공확률이 \(0.2\)로 떨어지므로 보수는 \(0.2 \times 33.333 + 0.8 \times 16.667 = 6.667 + 13.333 = 20\)이다. 노력비용이 없으므로 이것이 순보수이다.`,en:String.raw`Shirking drops the success probability to \(0.2\), so the payoff is \(0.2 \times 33.333 + 0.8 \times 16.667 = 6.667 + 13.333 = 20\). With no effort cost, this is the net payoff.`}},{text:{ko:String.raw`둘 다 \(20 = \bar u\)이므로 대리인은 정확히 무차별하다 — IC가 등호로 성립한다. 최적 계약에서 IC가 느슨했다면 본인은 격차를 줄여 기대임금을 낮출 수 있었을 것이다.`,en:String.raw`Both equal \(20 = \bar u\), so the agent is exactly indifferent — IC holds with equality. Had IC been slack at the optimum, the principal could have narrowed the spread and lowered the expected wage.`}}],viz:{sceneId:`moral-hazard`,preset:{alpha:.5,c:10},presetCaption:{ko:String.raw`\(\alpha = 1/2\), \(c = 10\) — 계약점에서의 IC slack \(= 0\).`,en:String.raw`\(\alpha = 1/2\), \(c = 10\) — IC slack \(= 0\) at the contract.`}}},{id:`risk-premium-jensen`,difficulty:2,topics:[`moral-hazard`],statement:{ko:String.raw`위험프리미엄 \(C_1 - (\bar u + c)^{1/\alpha}\)가 항상 0 이상임을 젠센 부등식으로 증명하라.

등호가 성립하는 경우는 언제인가?

\(\alpha = 1/2\), \(c = 10\)인 수치 예로 확인하라.`,en:String.raw`Prove with Jensen's inequality that the risk premium \(C_1 - (\bar u + c)^{1/\alpha}\) is always nonnegative.

When does equality hold?

Check with the numerical example \(\alpha = 1/2\), \(c = 10\).`},display:[String.raw`C_1 = \mathbb{E}[\phi(u)], \qquad \phi(t) = t^{1/\alpha}`],solution:[{text:{ko:String.raw`계약을 효용 단위로 쓰면 \((u_L, u_H)\)는 확률 \((1-p_1, p_1)\)로 실현되는 복권이다. 기대임금은 \(C_1 = p_1 \phi(u_H) + (1-p_1)\phi(u_L) = \mathbb{E}[\phi(u)]\)이며, 여기서 \(\phi(t) = t^{1/\alpha}\)이다.`,en:String.raw`Write the contract in utility units: \((u_L, u_H)\) is a lottery realized with probabilities \((1-p_1, p_1)\). The expected wage is \(C_1 = p_1 \phi(u_H) + (1-p_1)\phi(u_L) = \mathbb{E}[\phi(u)]\) with \(\phi(t) = t^{1/\alpha}\).`}},{text:{ko:String.raw`IR이 구속되므로 \(\mathbb{E}[u] = \bar u + c\)이다.

\(\alpha \in (0, 1]\)에서 \(1/\alpha \ge 1\)이므로 \(\phi\)는 볼록하고, 젠센 부등식에서 \(\mathbb{E}[\phi(u)] \ge \phi(\mathbb{E}[u]) = (\bar u + c)^{1/\alpha}\)이다.

우변이 완전보험 비용이므로 프리미엄은 0 이상이다.`,en:String.raw`IR binds, so \(\mathbb{E}[u] = \bar u + c\).

For \(\alpha \in (0, 1]\), \(1/\alpha \ge 1\), so \(\phi\) is convex, and Jensen gives \(\mathbb{E}[\phi(u)] \ge \phi(\mathbb{E}[u]) = (\bar u + c)^{1/\alpha}\).

The right side is the full-insurance cost, so the premium is nonnegative.`}},{text:{ko:String.raw`등호는 \(\phi\)가 선형일 때, 즉 \(\alpha = 1\)일 때 성립한다. 수치 예: \(C_1 = 944.44 \ge 900 = 30^2\)이고 프리미엄은 \(44.44\)이다.`,en:String.raw`Equality holds when \(\phi\) is linear, i.e. \(\alpha = 1\). Numerically: \(C_1 = 944.44 \ge 900 = 30^2\), a premium of \(44.44\).`}}],viz:{sceneId:`moral-hazard`,preset:{alpha:.5,c:10},presetCaption:{ko:String.raw`\(\alpha = 1/2\), \(c = 10\) — 기대임금 \(944.44\) 대 완전보험 \(900\).`,en:String.raw`\(\alpha = 1/2\), \(c = 10\) — expected wage \(944.44\) vs full insurance \(900\).`}}},{id:`too-expensive-effort`,difficulty:2,topics:[`participation`],statement:{ko:String.raw`\(\alpha = 1/2\), \(p_1 = 0.8\), \(p_0 = 0.2\), \(x_H = 2000\), \(x_L = 0\), \(\bar u = 20\)이라 하자.

노력비용이 \(c = 25\)이면 본인은 높은 노력을 유인해야 하는가, 낮은 노력에 안주해야 하는가?

두 이윤을 직접 계산하여 답하라.`,en:String.raw`Let \(\alpha = 1/2\), \(p_1 = 0.8\), \(p_0 = 0.2\), \(x_H = 2000\), \(x_L = 0\), \(\bar u = 20\).

If the effort cost is \(c = 25\), should the principal implement high effort or settle for low effort?

Answer by computing both profits directly.`},display:[String.raw`\Pi_1(25) = 1600 - C_1(25), \qquad \Pi_0 = 400 - 400 = 0`],solution:[{text:{ko:String.raw`\(c = 25\)에서 효용 격차는 \((u_L, u_H) = (20 - 25/3,\ 20 + 100/3) = (11.667, 53.333)\)이다. 임금은 \(w_L = 11.667^2 \approx 136.11\), \(w_H = 53.333^2 \approx 2844.44\)이다.`,en:String.raw`At \(c = 25\) the utility spread is \((u_L, u_H) = (20 - 25/3,\ 20 + 100/3) = (11.667, 53.333)\). Wages are \(w_L = 11.667^2 \approx 136.11\) and \(w_H = 53.333^2 \approx 2844.44\).`}},{text:{ko:String.raw`기대임금은 \(C_1 = 0.8 \times 2844.44 + 0.2 \times 136.11 \approx 2302.78\)이므로 \(\Pi_1 = 1600 - 2302.78 = -702.78\)이다. 반면 \(\Pi_0 = 0\)이다.`,en:String.raw`The expected wage is \(C_1 = 0.8 \times 2844.44 + 0.2 \times 136.11 \approx 2302.78\), so \(\Pi_1 = 1600 - 2302.78 = -702.78\). Meanwhile \(\Pi_0 = 0\).`}},{text:{ko:String.raw`\(\Pi_1 < \Pi_0\)이므로 낮은 노력에 안주한다. 직관: 노력의 기대산출 증가분은 \(1200\)으로 고정인데, 유인에 필요한 임금 격차가 커지면서 위험프리미엄이 \(1200\)을 초과해 버렸다 — 유인을 사는 값이 비싸진 것이다.`,en:String.raw`Since \(\Pi_1 < \Pi_0\), settle for low effort. The intuition: the expected-output gain from effort is fixed at \(1200\), but the wage spread needed for incentives pushes the risk premium past \(1200\) — incentives have become too expensive to buy.`}}],viz:{sceneId:`participation`,preset:{c:25,alpha:.5},presetCaption:{ko:String.raw`\(c = 25\), \(\alpha = 1/2\) — \(c^* \approx 18.13\)의 오른쪽, "낮은 노력에 안주" 영역이다.`,en:String.raw`\(c = 25\), \(\alpha = 1/2\) — right of \(c^* \approx 18.13\), in the "settle for low effort" region.`}}},{id:`threshold-monotonicity`,difficulty:3,topics:[`participation`,`moral-hazard`],statement:{ko:String.raw`임계 노력비용 \(c^*\)가 위험회피도 \(\alpha\)에 대해 증가함을 증명하라.

즉 대리인이 위험을 덜 싫어할수록 본인은 더 비싼 노력까지 유인한다.

\(\alpha = 1\)일 때 \(c^* = 1200\)임을 직접 계산으로 확인하라.`,en:String.raw`Prove that the threshold effort cost \(c^*\) increases in the risk-aversion parameter \(\alpha\): the less the agent dislikes risk, the more expensive an effort the principal is willing to incentivize.

Verify by direct computation that \(c^* = 1200\) when \(\alpha = 1\).`},display:[String.raw`H(c; \alpha) = C_1(c; \alpha) - \bar u^{1/\alpha} = 1200 \quad \text{at } c = c^*`],solution:[{text:{ko:String.raw`\(\Pi_1 - \Pi_0 = 1200 - H(c; \alpha)\)라 쓰자. 여기서 \(H(c; \alpha) = C_1(c; \alpha) - \bar u^{1/\alpha}\)는 정액임금 대비 유인의 추가 임금비용이다. \(c^*\)는 \(H(c^*; \alpha) = 1200\)의 해이다.`,en:String.raw`Write \(\Pi_1 - \Pi_0 = 1200 - H(c; \alpha)\), where \(H(c; \alpha) = C_1(c; \alpha) - \bar u^{1/\alpha}\) is the extra wage cost of incentives over the flat wage. Then \(c^*\) solves \(H(c^*; \alpha) = 1200\).`}},{text:{ko:String.raw`효용 격차 \((u_L, u_H) = (\bar u - cp_0/(p_1-p_0),\ \bar u + c(1-p_0)/(p_1-p_0))\)는 \(\alpha\)와 무관하게 고정된다.

고정된 격차에 대해 \(C_1(c; \alpha) = p_1 u_H^{1/\alpha} + (1-p_1) u_L^{1/\alpha}\)는 \(\alpha\)가 오르면 감소한다 — \(t \mapsto t^{1/\alpha}\)의 볼록성이 약해져 같은 효용 격차를 임금으로 옮기는 비용이 줄어들기 때문이다.

따라서 \(H(c; \alpha)\)도 고정된 \(c\)에서 \(\alpha\)에 대해 감소한다.`,en:String.raw`The utility spread \((u_L, u_H) = (\bar u - cp_0/(p_1-p_0),\ \bar u + c(1-p_0)/(p_1-p_0))\) is fixed independently of \(\alpha\).

For a fixed spread, \(C_1(c; \alpha) = p_1 u_H^{1/\alpha} + (1-p_1) u_L^{1/\alpha}\) decreases as \(\alpha\) rises — the map \(t \mapsto t^{1/\alpha}\) becomes less convex, so translating a given utility spread into wages costs less.

Hence \(H(c; \alpha)\) also decreases in \(\alpha\) at fixed \(c\).`}},{text:{ko:String.raw`\(\alpha\)가 오르면 \(H(c^*; \alpha) < 1200\)이 되고, \(H\)는 \(c\)에 대해 엄격히 증가하므로 등식을 회복하려면 \(c^*\)가 올라야 한다.

즉 \(c^*\)는 \(\alpha\)의 증가함수이다.

수치로: \(c^*(1/2) \approx 18.13\)이다.`,en:String.raw`When \(\alpha\) rises, \(H(c^*; \alpha) < 1200\), and since \(H\) is strictly increasing in \(c\), \(c^*\) must rise to restore equality.

So \(c^*\) increases in \(\alpha\).

Numerically: \(c^*(1/2) \approx 18.13\).`}},{text:{ko:String.raw`\(\alpha = 1\)이면 \(C_1(c) = \bar u + c\)이므로 \(H(c; 1) = c\)이고, \(c^* = 1200\)이다. 위험중립 대리인에게는 유인이 공짜에 가까우므로(위험프리미엄 0), 본인은 노력의 기대산출 증가분 \(1200\)까지는 어떤 노력비용도 감당한다.`,en:String.raw`At \(\alpha = 1\), \(C_1(c) = \bar u + c\), so \(H(c; 1) = c\) and \(c^* = 1200\). With a risk-neutral agent incentives are nearly free (zero risk premium), so the principal tolerates any effort cost up to the expected-output gain of \(1200\).`}}],viz:{sceneId:`participation`,preset:{c:18,alpha:.5},presetCaption:{ko:String.raw`\(c = 18\), \(\alpha = 1/2\) — \(c^* \approx 18.13\) 근처에서의 교차.`,en:String.raw`\(c = 18\), \(\alpha = 1/2\) — the crossing near \(c^* \approx 18.13\).`}}}];export{e as exercises};