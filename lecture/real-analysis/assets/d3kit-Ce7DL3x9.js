import{g as e}from"./vendor-d3-B9vpkBuY.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t=[{id:`proofs`,title:{ko:`증명의 기초`,en:`Foundations of Proof`},summary:{ko:`해석학의 언어인 증명을 처음부터 — 명제와 양화사부터 직접증명·대우·귀류법, 강한 귀납법, 동치관계와 함수 증명까지, Hammack의 Book of Proof 흐름을 따라갑니다.`,en:`The language of analysis, from the ground up — propositions and quantifiers through direct proof, contrapositive, contradiction, strong induction, equivalence relations, and function proofs, following the arc of Hammack’s Book of Proof.`},sections:[{id:`logic-basics`,title:{ko:`명제와 양화사`,en:`Propositions and Quantifiers`},sceneIds:[`logic-propositions`,`quantifiers`]},{id:`proof-methods`,title:{ko:`증명 방법`,en:`Proof Methods`},sceneIds:[`direct-proof`,`contrapositive`,`contradiction`,`cases-existence`,`disproof-iff`]},{id:`induction-relations`,title:{ko:`귀납법과 관계`,en:`Induction and Relations`},sceneIds:[`strong-induction`,`relations-equivalence`,`function-proofs`]}],scenes:[{id:`logic-propositions`,title:{ko:`명제와 진리표`,en:`Propositions and Truth Tables`},order:1,summary:{ko:String.raw`연결사를 바꿀 때마다 진리표의 새 열이 채워집니다. 네 가지 경우를 나란히 비교해 봅니다.

핵심은 열이 같으면 뜻도 같다는 것입니다. 참인 행과 거짓인 행이 완전히 겹치면 두 문장은 같은 말입니다. 명제와 그 대우는 언제나 열이 같습니다. 뒤집은 역은 그렇지 않습니다.

예를 들면, '비가 오면 땅이 젖는다'와 '땅이 안 젖었으면 비가 안 온 것이다'는 같은 말입니다. 반대로 '땅이 젖었으면 비가 왔다'는 틀릴 수 있습니다. 호스로 물을 뿌려도 땅은 젖으니까요.`,en:String.raw`Switch the connective and a new truth-table column fills in. All four cases sit side by side for comparison.

Two statements with identical columns mean the same thing. If the true rows and false rows match completely, the statements are equivalent. A statement and its contrapositive always match. The converse does not.

For example, 'if it rains, the ground gets wet' and 'if the ground is not wet, it did not rain' say the same thing. But 'if the ground is wet, it rained' can be false. A hose wets the ground too.`},tex:[String.raw`(P \to Q) \equiv (\lnot Q \to \lnot P)`,String.raw`\lnot(P \land Q) \equiv (\lnot P) \lor (\lnot Q)`,String.raw`(P \to Q) \equiv (\lnot P \lor Q)`],controls:[{kind:`select`,key:`connective`,label:{ko:`연결사`,en:`Connective`},options:[`and`,`or`,`implies`,`iff`],init:`implies`},{kind:`toggle`,key:`contrapositive`,label:{ko:`대우 함께 보기`,en:`Show contrapositive`},init:!0}]},{id:`quantifiers`,title:{ko:`전칭·존재 양화사`,en:`Universal and Existential Quantifiers`},order:2,summary:{ko:String.raw`수직선 위 게임으로 양화사를 익힙니다. 순서를 바꾸면 같은 게임이 어떻게 무너지는지도 봅니다.

먼저 내는 쪽과 나중에 답하는 쪽이 정해져 있습니다. '모든'은 상대가 무엇을 내도 답할 수 있어야 합니다. '존재'는 딱 하나만 찾으면 됩니다. 순서가 바뀌면 명제 자체가 달라집니다. 이 패턴이 엡실론-델타 정의로 그대로 이어집니다.

예를 들면, 반 🧑 친구 누구에게 물어도 그보다 키 큰 사람을 한 명은 댈 수 있습니다. 반대로 모두보다 큰 한 사람은 존재하지 않습니다. 순서 하나에 뜻이 완전히 달라집니다.`,en:String.raw`A game on the number line teaches the quantifiers. Swap the order and watch the same game collapse.

One side moves first and the other side answers. 'For all' demands an answer to every challenge. 'There exists' needs just one good answer. Swapping the order changes the claim itself. This pattern becomes the epsilon-delta definition later.

For example, for every 🧑 classmate, someone taller exists. But one person taller than everybody does not exist. A single swap changes the whole meaning.`},tex:[String.raw`\forall x \,\exists y \,(y > x)`,String.raw`\lnot(\forall x \,\exists y) = \exists x \,\forall y`,String.raw`\forall \varepsilon > 0 \,\exists \delta > 0 \,\forall t \,(|t| < \delta \to |2t| < \varepsilon)`],prerequisites:[`logic-propositions`],controls:[{kind:`select`,key:`statement`,label:{ko:`명제`,en:`Statement`},options:[`forall-exists`,`exists-forall`,`eps-delta`],init:`forall-exists`},{kind:`slider`,key:`x`,label:{ko:`도전값 x`,en:`Challenge x`},min:-5,max:5,step:.5,init:2},{kind:`toggle`,key:`negated`,label:{ko:`부정 보기`,en:`Show negation`},init:!1}]},{id:`direct-proof`,title:{ko:`직접증명`,en:`Direct Proof`},order:3,summary:{ko:String.raw`두 유리수의 합을 수직선 위에 놓고 계산을 따라갑니다. 가정에서 결론까지 곧장 이어지는 증명입니다.

직접증명은 출발점에서 곧장 걸어가는 방식입니다. 주어진 것을 그대로 계산하면 결론이 나옵니다. 분수는 통분하면 하나의 분수가 됩니다. 그래서 유리수끼리 더해도 다시 유리수가 됩니다.

예를 들면, 🍰 케이크 4분의 3에서 6분의 5를 덜어 내는 상황입니다. 조각을 12등분으로 맞추면 9조각에서 10조각을 빼는 셈입니다. 돌아가는 길 없이 계산 하나로 끝납니다.`,en:String.raw`Place the sum of two rationals on the number line and follow the computation. It runs straight from hypothesis to conclusion.

A direct proof walks straight ahead. Compute with what you are given and the conclusion falls out. Fractions combine over a common denominator into one fraction. So a sum of rationals is rational again.

For example, take three quarters of a 🍰 cake and remove five sixths of one. Recut into twelfths: nine pieces minus ten pieces. One straight computation, no detours.`},tex:[String.raw`r_1 + r_2 = \frac{p_1 q_2 + p_2 q_1}{q_1 q_2}`,String.raw`\frac{3}{4} + \frac{-5}{6} = -\frac{1}{12}`],prerequisites:[`logic-propositions`],controls:[{kind:`slider`,key:`p1`,label:{ko:`분자 p₁`,en:`Numerator p1`},min:-9,max:9,step:1,init:3},{kind:`slider`,key:`q1`,label:{ko:`분모 q₁`,en:`Denominator q1`},min:1,max:9,step:1,init:4},{kind:`slider`,key:`p2`,label:{ko:`분자 p₂`,en:`Numerator p2`},min:-9,max:9,step:1,init:-5},{kind:`slider`,key:`q2`,label:{ko:`분모 q₂`,en:`Denominator q2`},min:1,max:9,step:1,init:6}]},{id:`contrapositive`,title:{ko:`대우법`,en:`Proof by Contrapositive`},order:4,summary:{ko:String.raw`짝수와 홀수 표를 놓고 명제와 대우를 나란히 봅니다. 직접 가는 길이 막힐 때의 우회로를 확인합니다.

정면으로 증명하기 어려운 명제가 있습니다. 그럴 때는 뒤집고 부정한 대우를 증명합니다. 대우는 원래 명제와 참·거짓이 항상 같습니다. 한쪽을 끝내면 다른 쪽도 자동으로 끝납니다.

예를 들면, 어떤 수의 제곱이 짝수이면 그 수도 짝수입니다. 제곱을 직접 보는 대신 홀수인 경우만 살펴봅니다. 홀수를 제곱하면 언제나 홀수가 됩니다. 그래서 제곱이 짝수라면 원래 수는 홀수일 수 없습니다.`,en:String.raw`Lay out an even-odd table and set a statement beside its contrapositive. This is the detour for when the direct road is blocked.

Some statements resist a frontal attack. Then flip and negate: prove the contrapositive instead. It always shares the original's truth value. Settle one side and the other comes free.

For example, if a square is even, the number itself is even. Instead of studying squares, look only at odd numbers. Squaring an odd number always gives an odd number. So an even square never came from an odd number.`},tex:[String.raw`n^2 \text{ even} \Rightarrow n \text{ even} \iff n \text{ odd} \Rightarrow n^2 \text{ odd}`,String.raw`(2k+1)^2 = 2(2k^2+2k)+1`],prerequisites:[`direct-proof`],controls:[{kind:`slider`,key:`n`,label:{ko:`n`,en:`n`},min:1,max:50,step:1,init:7},{kind:`select`,key:`view`,label:{ko:`보기`,en:`View`},options:[`statement`,`contrapositive`],init:`statement`}]},{id:`contradiction`,title:{ko:`귀류법`,en:`Proof by Contradiction`},order:5,summary:{ko:String.raw`소수가 유한하다고 가정하고 모순을 끌어냅니다. 목록 밖에 새 소수가 튀어나오는 순간을 봅니다.

귀류법은 반대쪽을 가정하는 증명입니다. 거짓인 쪽을 끝까지 밀고 가면 앞뒤가 안 맞는 지점이 나옵니다. 그러면 원래 명제가 참일 수밖에 없습니다. 소수를 전부 곱하고 1을 더한 수가 그 충돌을 만듭니다.

예를 들면, 세상에서 제일 큰 수가 있다고 해 봅니다. 거기에 1을 더하면 더 큰 수가 나옵니다. 가정이 스스로를 무너뜨리는 순간입니다. 유클리드의 소수 증명이 딱 이 수법입니다.`,en:String.raw`Assume there are only finitely many primes and derive a contradiction. Watch a new prime slip outside the list.

Proof by contradiction assumes the opposite side. Push the false side until it clashes with itself. Then the original claim must be true. Multiplying all the primes and adding one builds that clash.

For example, suppose a biggest number exists. Add one and a bigger number appears. The assumption destroys itself. Euclid's prime proof uses exactly this move.`},tex:[String.raw`N = p_1 p_2 \cdots p_k + 1 \equiv 1 \pmod{p_i}`,String.raw`\lnot P \;\Rightarrow\; \bot \;\vdash\; P`,String.raw`30031 = 59 \times 509`],prerequisites:[`contrapositive`],controls:[{kind:`slider`,key:`k`,label:{ko:`소수 개수 k`,en:`Number of primes k`},min:1,max:8,step:1,init:4}]},{id:`cases-existence`,title:{ko:`경우 나누기와 존재 증명`,en:`Proof by Cases and Existence Proofs`},order:6,summary:{ko:String.raw`평면을 네 구역으로 나눠 경우를 하나씩 처리합니다. 어느 쪽인지 모른 채 존재만 보이는 증명도 만납니다.

경우 나누기는 빠짐없이 나누는 것이 핵심입니다. 구역마다 계산은 쉽습니다. 하지만 하나라도 빠지면 증명 전체가 무너집니다. 존재 증명은 다릅니다. 실제로 찾아내지 않고도 '있다'고 보일 수 있습니다.

예를 들면, 🧑 친구가 집의 동쪽에 있을 수도, 서쪽에 있을 수도 있습니다. 어느 쪽이든 집까지의 거리는 부호와 상관없이 같습니다. 양쪽을 다 확인하는 것이 경우 나누기입니다.`,en:String.raw`Split the plane into four regions and handle one case at a time. Then meet a proof that shows existence without revealing which side holds.

A case split must leave no gap. Each region's computation is easy. Miss one region and the whole proof collapses. Existence proofs are different: 'it exists' can be shown without producing it.

For example, a 🧑 friend may stand east or west of your house. Either way, the distance home ignores the sign. Checking both directions is exactly a proof by cases.`},tex:[String.raw`|xy| = |x|\cdot|y|`,String.raw`c = \sqrt{2}^{\sqrt{2}} \approx 1.6325`,String.raw`\big(\sqrt{2}^{\sqrt{2}}\big)^{\sqrt{2}} = \sqrt{2}^{2} = 2`],prerequisites:[`contradiction`],controls:[{kind:`select`,key:`part`,label:{ko:`부분`,en:`Part`},options:[`cases`,`existence`],init:`cases`},{kind:`slider`,key:`x`,label:{ko:`x`,en:`x`},min:-5,max:5,step:.5,init:-2},{kind:`slider`,key:`y`,label:{ko:`y`,en:`y`},min:-5,max:5,step:.5,init:3}]},{id:`disproof-iff`,title:{ko:`반례와 필요충분조건`,en:`Counterexamples and If and Only If`},order:7,summary:{ko:String.raw`거짓인 주장을 반례 하나로 무너뜨리는 장면입니다. 그럴듯한 주장 네 가지를 차례로 시험합니다.

'모두 그렇다'는 주장에는 반례 하나면 충분합니다. 안 되는 예 하나가 전체를 거짓으로 만듭니다. 필요충분조건은 그 반대의 일입니다. 가는 방향과 오는 방향을 각각 증명해야 합니다.

예를 들면, '우리 반 🧑 친구는 전부 안경을 썼다'는 말이 있습니다. 안경을 안 쓴 친구 한 명이면 이 말은 끝납니다. 한 사람이면 충분합니다.`,en:String.raw`Demolish false claims with a single counterexample. Four plausible claims go on trial, one by one.

A 'for all' claim falls to one counterexample. A single failing case makes the whole claim false. An if-and-only-if claim is the opposite job. Each direction needs its own separate proof.

For example, take 'every 🧑 classmate wears glasses'. One classmate without glasses ends the claim. One person is enough.`},tex:[String.raw`\lnot(\forall x\, P(x)) = \exists x\, \lnot P(x)`,String.raw`4 \mid n^2 \Rightarrow 4 \mid n`,String.raw`|x| = |y| \Rightarrow x = y`],prerequisites:[`quantifiers`,`contrapositive`],controls:[{kind:`select`,key:`claim`,label:{ko:`주장`,en:`Claim`},options:[`primes-odd`,`div4`,`irrational-sum`,`abs-equal`],init:`primes-odd`},{kind:`slider`,key:`n`,label:{ko:`테스트 값 n`,en:`Test value n`},min:2,max:60,step:1,init:16}]},{id:`strong-induction`,title:{ko:`강한 귀납법`,en:`Strong Induction`},order:8,summary:{ko:String.raw`수를 소인수들로 쪼개는 나무를 그려 봅니다. 왜 앞의 것 전부를 가정해야 하는지 드러납니다.

보통 귀납법은 바로 앞 단계 하나만 씁니다. 그런데 쪼개진 조각은 바로 아래가 아니라 훨씬 아래에 떨어집니다. 그래서 강한 귀납법은 앞의 모든 단계를 한꺼번에 가정합니다. 조각마다 이미 성립한다고 믿고 올라가는 것입니다.

예를 들면, 🪜 계단을 오를 때 어떤 칸은 두세 칸 아래를 딛고 올라갑니다. 바로 아래 칸만 믿어서는 닿지 않는 칸이 있습니다. 아래 칸 전부를 믿어야 다음 칸에 설 수 있습니다.`,en:String.raw`Draw the tree that splits a number into prime factors. It shows why the proof must assume everything before it.

Ordinary induction uses only the step right before. But split-off pieces land far below, not one step down. Strong induction assumes every earlier step at once. Each piece counts as already settled on the way up.

For example, climbing 🪜 stairs, some steps push off two or three steps below. Trusting only the step right beneath you is not always enough. Trust them all, and the next step holds.`},tex:[String.raw`P(2), \dots, P(n-1) \Rightarrow P(n)`,String.raw`30 = 2 \times 3 \times 5`],prerequisites:[`direct-proof`],controls:[{kind:`slider`,key:`n`,label:{ko:`n`,en:`n`},min:2,max:60,step:1,init:30}]},{id:`relations-equivalence`,title:{ko:`동치관계`,en:`Equivalence Relations`},order:9,summary:{ko:String.raw`나머지가 같은 수끼리 한 묶음으로 나눠 봅니다. 세 가지 약속을 전부 검사해 동치인지 확인합니다.

동치관계는 '같은 편'이라는 뜻의 관계입니다. 누구나 자기 자신과 같은 편입니다. 같은 편인지는 양쪽이 똑같이 느껴야 합니다. 편이 이어지면 끝까지 같은 편입니다. 이 셋이 성립하면 전체가 겹치지 않는 묶음으로 갈립니다.

예를 들면, 🧑 친구 12명을 4명씩 세 모둠으로 나누는 것과 같습니다. 누구도 두 모둠에 겹쳐 들어가지 않습니다. 모둠 안에서는 전원이 같은 편입니다. 나머지가 같은 수들의 묶음이 딱 이 모습입니다.`,en:String.raw`Group numbers by equal remainders. Then test three promises on everything to certify an equivalence relation.

An equivalence relation means 'on the same team'. Everyone is on their own team. Teaming is mutual, and it chains through teammates. When all three hold, the whole set splits into non-overlapping teams.

For example, split twelve 🧑 classmates into three teams of four. Nobody belongs to two teams at once. Inside a team, everyone matches everyone. Remainder classes look exactly like this.`},tex:[String.raw`a \sim b \iff n \mid (a - b)`,String.raw`[r] = \{r, r + n, r + 2n\}`,String.raw`z \in [x] \cap [y] \implies [x] = [y]`],prerequisites:[`logic-propositions`],controls:[{kind:`slider`,key:`n`,label:{ko:`법 n`,en:`Modulus n`},min:2,max:8,step:1,init:4}]},{id:`function-proofs`,title:{ko:`함수 합성 증명`,en:`Proofs about Composite Functions`},order:10,summary:{ko:String.raw`두 함수를 이어 붙인 합성을 표와 화살표로 봅니다. 합성의 성질이 각 함수에 무엇을 강제하는지 확인합니다.

합성이 단사이면 앞에 오는 함수도 단사입니다. 합성이 전사이면 뒤에 오는 함수가 전사입니다. 하지만 그 반대는 성립하지 않습니다. 합성을 되돌릴 때 순서가 뒤집히는 것도 계산으로 확인합니다.

예를 들면, 📦 상자에 물건을 넣고 뚜껑을 닫은 뒤 끈으로 묶어 봅니다. 다시 열 때는 끈부터 풀어야 합니다. 나중에 한 일을 먼저 되돌리는 것입니다. 합성의 역함수가 순서를 뒤집는 이유가 이것입니다.`,en:String.raw`Glue two functions together and inspect the composite with tables and arrows. See what the composite's properties force onto each part.

If the composite is injective, the first function is injective too. If the composite is surjective, the second function is surjective. The converses fail, and the diagrams show why. Undoing a composite also reverses the order.

For example, pack a 📦 box, close the lid, then tie it with string. To open it, the string comes off first. The last step done is the first step undone. That is why inverses of composites reverse the order.`},tex:[String.raw`f(a_1) = f(a_2) \implies g(f(a_1)) = g(f(a_2))`,String.raw`(g \circ f)^{-1} = f^{-1} \circ g^{-1}`],prerequisites:[`direct-proof`,`relations-equivalence`],controls:[{kind:`select`,key:`example`,label:{ko:`예제`,en:`Example`},options:[`injective-chain`,`surjective-chain`,`bijective`],init:`injective-chain`}]}]},{id:`numbers`,title:{ko:`수의 체계`,en:`Number Systems`},summary:{ko:`자연수에서 실수까지 — 수 체계를 공리부터 쌓아 올리고, 셀 수 있는 무한과 셀 수 없는 무한을 구분합니다.`,en:`From naturals to reals — building the number systems from axioms, and telling countable infinities from uncountable ones.`},sections:[{id:`number-systems`,title:{ko:`수 체계의 출발`,en:`Building the Number Systems`},sceneIds:[`natural-numbers`,`binomial`,`integers-rationals`,`absolute-value`,`complex-numbers`]},{id:`irrational-density`,title:{ko:`무리수와 조밀성`,en:`Irrationality and Density`},sceneIds:[`sqrt2-irrational`,`density-of-rationals`]},{id:`sets-choice`,title:{ko:`집합과 선택 공리`,en:`Sets and the Axiom of Choice`},sceneIds:[`sets`,`axiom-of-choice`,`zorn-lemma`]},{id:`completeness`,title:{ko:`완비성`,en:`Completeness`},sceneIds:[`supremum`,`archimedean`,`nth-root`]},{id:`countability`,title:{ko:`가산과 비가산`,en:`Countable and Uncountable`},sceneIds:[`countable`,`cantor-theorem`]},{id:`algebraic-structures`,title:{ko:`대수 구조`,en:`Algebraic Structures`},sceneIds:[`groups-fields`,`ordered-fields`,`vector-spaces`,`dimension-rank`]}],scenes:[{id:`natural-numbers`,title:{ko:`자연수와 귀납법`,en:`Natural Numbers and Induction`},order:1,summary:{ko:String.raw`자연수가 공리에서 어떻게 태어나는지 봅니다. 도미노를 세워 귀납법의 출발을 확인합니다.

귀납법은 무한한 명제를 한 번에 증명하는 원리입니다. 첫 번째 경우가 성립하는지 확인합니다. 어떤 경우가 성립하면 그다음도 성립함을 보입니다. 그러면 사슬이 끝없이 이어져 전부 성립합니다.

예를 들면, 🪜 계단 첫 칸에 올라선 뒤에는 한 칸씩 오를 수 있습니다. 첫 칸과 '다음 칸으로 가는 법'만 알면 꼭대기까지 닿습니다. 도미노가 전부 넘어지는 것과 같은 이치입니다.`,en:String.raw`Watch the natural numbers being born from axioms. Line up dominoes to see induction start.

Induction proves infinitely many statements at once. Check the first case. Then show each case hands truth to the next. The chain never ends, so everything holds.

For example, stand on the first 🪜 stair and know how to climb one more. The first step plus the climbing rule reaches the top. Dominoes fall the same way.`},tex:[String.raw`P(1) \land (P(k) \Rightarrow P(k+1)) \Rightarrow \forall n \in \mathbb{N},\; P(n)`,String.raw`\sum_{k=1}^{n} k = \frac{n(n+1)}{2}`,String.raw`(1+x)^n \geq 1 + nx \quad (x > -1)`],controls:[{kind:`slider`,key:`n`,label:{ko:`도미노 개수`,en:`Domino count`},min:1,max:10,step:1,init:6}]},{id:`binomial`,title:{ko:`이항정리`,en:`The Binomial Theorem`},order:2,summary:{ko:String.raw`거듭제곱을 펼친 계수들이 만드는 삼각형을 봅니다. 행 하나가 통째로 계산되는 과정을 따라갑니다.

이항 계수는 '몇 개 중 몇 개를 고르는 경우의 수'입니다. 삼각형의 각 수는 바로 위 두 수의 합입니다. 이 덧셈 규칙이 귀납 단계의 심장입니다. 행을 모두 더하면 2의 거듭제곱이 됩니다.

예를 들면, 동전 2개를 던지면 앞면 수는 0개, 1개, 2개가 될 수 있습니다. 경우의 수는 차례로 1가지, 2가지, 1가지입니다. 삼각형의 둘째 행이 그대로 나타납니다.`,en:String.raw`See the triangle made by the coefficients of expanded powers. Follow one whole row being computed.

A binomial coefficient counts ways to choose. Each entry in the triangle is the sum of the two above it. That addition rule is the heart of the induction step. A whole row adds up to a power of two.

For example, toss two coins and count the heads: zero, one, or two. The counts go one way, two ways, one way. That is the triangle's second row, exactly.`},tex:[String.raw`(x+y)^n = \sum_{k=0}^{n}\binom{n}{k}x^{n-k}y^k`,String.raw`\binom{n}{k}+\binom{n}{k-1}=\binom{n+1}{k}`,String.raw`\sum_{k=0}^{n}\binom{n}{k} = 2^n`],prerequisites:[`natural-numbers`],controls:[{kind:`slider`,key:`n`,label:{ko:`선택된 행`,en:`Selected row`},min:0,max:8,step:1,init:4}]},{id:`integers-rationals`,title:{ko:`정수와 유리수`,en:`Integers and Rationals`},order:3,summary:{ko:String.raw`쌍을 묶는 방식으로 음수와 분수를 새로 만듭니다. 같은 수를 가리키는 쌍끼리 한 묶음이 됩니다.

정수는 자연수 쌍의 묶음으로 정의됩니다. 분수도 정수 쌍의 묶음입니다. 서로 다른 쌍이 같은 수를 나타낼 수 있기 때문입니다. 이 '묶어서 새 수를 만드는' 기술은 실수를 만들 때 다시 쓰입니다.

예를 들면, 💰 돈과 빚으로 순자산을 나타내는 것과 같습니다. 가진 돈 5만 원에 빚 3만 원이면 순자산은 2만 원입니다. 가진 돈 7만 원에 빚 5만 원이어도 똑같이 2만 원입니다. 쌍은 달라도 값은 같습니다.`,en:String.raw`Build negative numbers and fractions by bundling pairs. Pairs naming the same number form one bundle.

Integers are bundles of pairs of naturals. Fractions are bundles of pairs of integers. Different pairs can name the same number. This bundle trick returns when the reals are built.

For example, think of 💰 money and debt. Five coins in hand and three owed is a net of two. Seven in hand and five owed is also two. Different pairs, same value.`},tex:[String.raw`(a,b)\sim(c,d)\iff a+d=b+c`,String.raw`(a,b)\sim(c,d)\iff ad=bc`,String.raw`p<q \implies p<\frac{p+q}{2}<q`],prerequisites:[`natural-numbers`],controls:[{kind:`select`,key:`set`,label:{ko:`수 집합`,en:`Number set`},options:[`naturals`,`integers`,`rationals`],init:`rationals`},{kind:`slider`,key:`denom`,label:{ko:`최대 분모`,en:`Max denominator`},min:1,max:8,step:1,init:4}]},{id:`absolute-value`,title:{ko:`절댓값: 0으로부터의 거리`,en:`Absolute Value: Distance from 0`},order:4,summary:{ko:String.raw`수의 크기를 부호 없이 재는 법을 봅니다. 그것이 절댓값입니다.

수직선에서 절댓값은 0으로부터의 거리입니다. 양수는 그대로, 음수는 부호를 벗깁니다. 거리의 규칙이 그대로 성립합니다. 길이는 음수가 아니고, 두 점을 잇는 길이는 각 길이의 합을 넘지 않습니다. 이것이 삼각부등식입니다.

예를 들면, 🌡 영하 3도와 영상 3도는 0도에서 같은 거리만큼 떨어져 있습니다. 부호는 방향이고, 절댓값은 거리입니다.`,en:String.raw`How do we measure the size of a number without its sign? That measure is the absolute value.

On the number line it is the distance from 0. Positive numbers stay as they are; negative numbers shed their sign. The rules of distance come with it. A length is never negative, and a combined walk never exceeds the sum of its parts. That is the triangle inequality.

For example, 🌡 −3 degrees and +3 degrees are the same distance from 0 degrees. The sign is the direction; the absolute value is the distance.`},tex:[String.raw`|x| = \begin{cases} x & x \ge 0 \\ -x & x < 0 \end{cases}`,String.raw`|x + y| \le |x| + |y|`,String.raw`|xy| = |x| \, |y|`],prerequisites:[`integers-rationals`],controls:[{kind:`slider`,key:`x`,label:{ko:`x`,en:`x`},min:-3,max:3,step:.1,init:1.5},{kind:`slider`,key:`y`,label:{ko:`y`,en:`y`},min:-3,max:3,step:.1,init:-.5}]},{id:`complex-numbers`,title:{ko:`복소수`,en:`Complex Numbers`},order:5,summary:{ko:String.raw`복소수를 평면 위의 점으로 봅니다. 실수 부분은 가로축, 허수 부분은 세로축입니다.

절댓값은 원점에서 그 점까지의 거리입니다. 두 복소수를 더하면 평행사변형의 대각선이 됩니다. 그 대각선은 두 변의 길이 합보다 길어지지 않습니다. 이것이 삼각부등식입니다.

예를 들면, 🧭 동쪽으로 3보, 북동쪽으로 꺾어 4보를 더 걸어도 직선거리는 꺾인 길보다 짧습니다. 절댓값이 재는 것이 바로 그 직선거리입니다.`,en:String.raw`See a complex number as a point in the plane. The real part runs sideways, the imaginary part runs up.

The modulus is the distance from the origin to that point. Adding two complex numbers draws the diagonal of a parallelogram. That diagonal is never longer than the two sides added together. This is the triangle inequality.

For example, walk 3 steps east with a 🧭 compass, then turn and walk 4 more. The straight-line distance back is shorter than the bent path. The modulus measures exactly that straight line.`},tex:[String.raw`|z| = \sqrt{a^2 + b^2} \quad (z = a + bi)`,String.raw`|z + w| \le |z| + |w|`],prerequisites:[`integers-rationals`],controls:[{kind:`slider`,key:`zre`,label:{ko:`z 실수 부분`,en:`z real part`},min:-2,max:2,step:.1,init:1.2},{kind:`slider`,key:`zim`,label:{ko:`z 허수 부분`,en:`z imaginary part`},min:-2,max:2,step:.1,init:.8},{kind:`slider`,key:`wre`,label:{ko:`w 실수 부분`,en:`w real part`},min:-2,max:2,step:.1,init:-.6},{kind:`slider`,key:`wim`,label:{ko:`w 허수 부분`,en:`w imaginary part`},min:-2,max:2,step:.1,init:1.1}]},{id:`sqrt2-irrational`,title:{ko:`√2는 무리수`,en:`√2 is Irrational`},order:6,summary:{ko:String.raw`분수를 촘촘히 찍어도 끝내 메워지지 않는 구멍을 봅니다. 그 자리가 바로 루트 2입니다.

유리수만으로는 수직선이 완성되지 않습니다. 어떤 분수도 제곱하면 정확히 2가 되지 않습니다. 분모를 아무리 키워도 그 자리는 빕니다. 그래서 유리수 너머의 수가 필요합니다.

예를 들면, 📏 자로 길이를 재는 것과 같습니다. 눈금을 아무리 잘게 나눠도 딱 맞지 않는 길이가 있습니다. 정사각형의 대각선이 그런 길이입니다. 분수 눈금으로는 영원히 잡지 못합니다.`,en:String.raw`Plot fractions ever more densely and watch one hole never fill. That spot is the square root of two.

Rationals alone do not complete the number line. No fraction squares to exactly two. However fine the denominators, that spot stays empty. Numbers beyond the rationals are needed.

For example, measure a length with a 📏 ruler. However fine the marks, some lengths never match one. A square's diagonal is such a length. Fraction marks never catch it.`},tex:[String.raw`\left(\frac{p}{q}\right)^2 \ne 2 \quad \forall\, \frac{p}{q} \in \mathbb{Q}`,String.raw`\left|\frac{17}{12} - \sqrt{2}\right| \approx 0.00245 > 0`],prerequisites:[`integers-rationals`],controls:[{kind:`slider`,key:`denom`,label:{ko:`최대 분모`,en:`Max denominator`},min:1,max:12,step:1,init:6}]},{id:`density-of-rationals`,title:{ko:`유리수의 조밀성`,en:`Density of the Rationals`},order:7,summary:{ko:String.raw`아무리 좁은 구간에도 유리수가 숨어 있음을 봅니다. 분모를 키울수록 눈금이 촘촘해집니다.

두 수 사이에는 언제나 분수가 하나 들어갑니다. 구간이 좁으면 분모가 큰 분수가 필요합니다. 눈금을 충분히 잘게 나누면 어떤 틈에도 한 칸은 들어갑니다. 무리수 사이에서도 마찬가지입니다.

예를 들면, 🍰 케이크를 반으로 또 반으로 자르는 것과 같습니다. 조각은 끝없이 작아집니다. 아무리 얇은 틈을 골라도 그보다 얇은 조각을 만들 수 있습니다. 그 조각이 틈 안에 들어가는 분수입니다.`,en:String.raw`See that every interval, however narrow, hides a rational. Bigger denominators make the ticks denser.

Between any two numbers sits a fraction. Narrower gaps need bigger denominators. Chop the scale finely enough and some tick lands in every gap. The same trick works around irrationals.

For example, keep cutting a 🍰 cake in half, again and again. The pieces shrink without end. Pick any thin gap, and a thinner piece exists. That piece is the fraction landing inside.`},tex:[String.raw`n = \left\lfloor\frac{1}{y-x}\right\rfloor + 1,\quad m = \lfloor nx \rfloor + 1`,String.raw`x < \frac{m}{n} < y`,String.raw`z = r + (s-r)\frac{\sqrt{2}}{2}\ \text{is irrational}`],prerequisites:[`integers-rationals`],controls:[{kind:`select`,key:`preset`,label:{ko:`구간`,en:`Interval`},options:[`a`,`b`,`c`],init:`a`},{kind:`slider`,key:`denom`,label:{ko:`최대 분모`,en:`Max denominator`},min:1,max:200,step:1,init:24}]},{id:`sets`,title:{ko:`집합과 함수`,en:`Sets and Functions`},order:8,summary:{ko:String.raw`집합의 합집합과 교집합을 그림으로 겹쳐 봅니다. 함수가 단사인지 전사인지도 눈으로 가립니다.

합집합은 둘 중 하나라도 속하면 들어갑니다. 교집합은 둘 다 속해야 들어갑니다. 여집합은 바깥 전체입니다. 화살표가 겹치는지, 빠지는 곳이 없는지가 단사와 전사를 가릅니다.

예를 들면, 📚 책을 좋아하는 🧑 친구와 ⚽ 공놀이를 좋아하는 친구가 있습니다. 둘 다 좋아하는 친구는 겹친 부분에 섭니다. 어느 한쪽이라도 좋아하면 합집합에 들어갑니다.`,en:String.raw`Overlap sets in pictures to see unions and intersections. Judge by eye whether a map is injective or surjective.

A union takes anything in at least one set. An intersection needs both. A complement is everything outside. Colliding or missing arrows decide injective versus surjective.

For example, some 🧑 classmates love 📚 books, while others love ⚽ soccer. Friends loving both stand in the overlap. Loving at least one puts you in the union.`},tex:[String.raw`(A \cup B)^c = A^c \cap B^c`,String.raw`f \text{ bijective} \iff \exists g: g \circ f = \mathrm{id}`],controls:[{kind:`select`,key:`op`,label:{ko:`집합 연산`,en:`Set operation`},options:[`union`,`intersection`,`complement`,`difference`,`symdiff`],init:`union`},{kind:`select`,key:`fnmode`,label:{ko:`함수 모양`,en:`Map shape`},options:[`injective`,`surjective`,`bijective`,`neither`],init:`bijective`}]},{id:`axiom-of-choice`,title:{ko:`선택 공리`,en:`The Axiom of Choice`},order:9,summary:{ko:String.raw`줄마다 점이 하나씩 들어 있는 표에서 하나씩 골라 봅니다. 유한할 때와 무한할 때가 왜 다른지 봅니다.

고르는 행위를 함수로 만들 수 있는지가 문제입니다. 집합이 유한하면 하나씩 직접 고르면 됩니다. 무한히 많으면 고르는 규칙 자체를 보장해야 합니다. 그 보장이 바로 선택 공리입니다.

예를 들면, 📦 상자마다 🍬 사탕이 들어 있습니다. 상자가 세 개면 손으로 하나씩 꺼내면 됩니다. 상자가 끝없이 많으면 '각 상자에서 하나'라는 규칙이 필요합니다. 눈으로 다 확인할 수 없기 때문입니다.`,en:String.raw`Pick one dot from each row of a table. See why finite collections and infinite ones differ.

The question is whether picking can be made into a function. Finitely many sets: just pick, one by one. Infinitely many: the picking rule itself needs a guarantee. That guarantee is the axiom of choice.

For example, every 📦 box holds some 🍬 candies. With three boxes, just reach in and pick. With endless boxes, you need the rule 'one from each box'. Nobody can check them all by eye.`},tex:[String.raw`\forall i \in I\;(X_i \ne \varnothing) \Rightarrow \prod_{i \in I} X_i \ne \varnothing`,String.raw`c: \{X_i\}_{i \in I} \to \bigcup_i X_i,\quad c(X_i) \in X_i`],prerequisites:[`sets`],controls:[{kind:`slider`,key:`m`,label:{ko:`집합 개수`,en:`Number of sets`},min:2,max:5,step:1,init:3},{kind:`slider`,key:`seed`,label:{ko:`배치`,en:`Arrangement`},min:1,max:5,step:1,init:1}]},{id:`zorn-lemma`,title:{ko:`초른 보조정리`,en:`Zorn's Lemma`},order:10,summary:{ko:String.raw`약수들을 나누어떨어지는 순서로 세워 봅니다. 사슬을 따라 올라가면 끝에 무엇이 남는지 봅니다.

사슬은 서로 비교할 수 있는 원소들의 줄입니다. 모든 사슬이 위쪽 끝을 가지면 더 위가 없는 원소가 존재합니다. 그 원소를 직접 찾지 않아도 존재가 보장됩니다. 이 보장은 선택 공리와 동치입니다.

예를 들면, 🪜 계단 꼭대기에는 더 오를 칸이 없습니다. 어떤 줄로 올라가도 그 줄의 끝은 있습니다. 끝이 있다는 보장만으로 꼭대기의 존재를 압니다.`,en:String.raw`Stand the divisors of twelve in divisibility order. Climb a chain and see what sits at the top.

A chain is a line of mutually comparable elements. If every chain has an upper bound, a maximal element exists. You never construct it; existence is guaranteed. The guarantee matches the axiom of choice.

For example, the top of a 🪜 staircase has no next step. Every way up ends somewhere. Knowing every climb ends proves a top exists.`},tex:[String.raw`\text{every chain has an upper bound} \Rightarrow \exists\, \text{maximal } m`,String.raw`1 \mid 2 \mid 4 \mid 12,\quad 1 \mid 3 \mid 6 \mid 12`],prerequisites:[`axiom-of-choice`],controls:[{kind:`slider`,key:`chain`,label:{ko:`사슬 선택`,en:`Choose chain`},min:0,max:2,step:1,init:0}]},{id:`supremum`,title:{ko:`상한과 완비성`,en:`The Supremum Axiom`},order:11,summary:{ko:String.raw`위로 막힌 집합에서 가장 작은 천장을 찾습니다. 유리수에 없는 그 천장이 실수를 완성합니다.

상한은 집합의 모든 원소보다 크거나 같은 수 중 가장 작은 수입니다. 천장은 많지만 가장 낮은 천장은 하나뿐입니다. 유리수만으로는 그 천장이 없을 때가 있습니다. 실수는 그 빈자리를 메운 세계입니다.

예를 들면, 반 🧑 친구들의 키를 재는 것과 같습니다. 전원보다 크면서 가장 작은 기준선이 상한입니다. 제일 큰 키에 딱 닿는 선이 그 예입니다. 그 선 아래로 모두 들어갑니다.`,en:String.raw`Find the smallest ceiling over a bounded set. That ceiling, missing in the rationals, completes the reals.

The supremum is the least of all upper bounds. Ceilings are many, but the lowest one is unique. Rationals sometimes lack that lowest ceiling. The reals are the world where it always exists.

For example, measure every 🧑 classmate's height. The smallest line above them all is the supremum. It touches the tallest height exactly. Everyone fits underneath.`},tex:[String.raw`\sup\left\{1-\frac{1}{n}\right\} = 1`,String.raw`S \ne \varnothing \text{ bounded above } \Rightarrow \sup S \text{ exists}`],controls:[{kind:`select`,key:`set`,label:{ko:`집합`,en:`Set`},options:[`one-minus`,`sqrt2`],init:`one-minus`},{kind:`slider`,key:`bound`,label:{ko:`상한 후보`,en:`Upper-bound candidate`},min:.5,max:2,step:.01,init:1.4}]},{id:`archimedean`,title:{ko:`아르키메데스 성질`,en:`The Archimedean Property`},order:12,summary:{ko:String.raw`아무리 작은 걸음이라도 반복하면 어떤 목표든 넘어섬을 봅니다. 그것이 아르키메데스 성질입니다.

실수에는 무한히 작은 수가 없습니다. 아무리 작은 양수라도 충분히 여러 번 더하면 어떤 큰 수보다 커집니다. 이 사실이 없으면 \(\varepsilon\)-\(N\) 논법에서 "충분히 큰 \(N\)"을 잡을 수 없습니다. 증명은 상한 공리를 씁니다.

예를 들면, 🐜 개미의 한 걸음은 아주 작습니다. 하지만 개미가 걸음을 멈추지 않으면 축구장도 건너고, 지구 한 바퀴도 돕니다. 걸음의 크기가 아니라 횟수가 이깁니다.`,en:String.raw`However small a step, repeating it eventually passes any target. That is the Archimedean property.

The reals contain no infinitely small numbers. However tiny a positive number, adding it to itself enough times outgrows any given large number. Without this fact, \(\varepsilon\)-\(N\) arguments could never pick a "large enough \(N\)". The proof uses the least-upper-bound axiom.

For example, one step of an 🐜 ant is tiny. But an ant that never stops crosses a soccer field, and eventually circles the Earth. It is the count of steps, not their size, that wins.`},tex:[String.raw`\forall a > 0, \ \forall b \in \mathbb{R}, \ \exists n \in \mathbb{N}: \ na > b`,String.raw`\forall \varepsilon > 0, \ \exists n \in \mathbb{N}: \ \frac{1}{n} < \varepsilon`],prerequisites:[`supremum`],controls:[{kind:`slider`,key:`a`,label:{ko:`한 걸음 a`,en:`Step a`},min:.1,max:2,step:.1,init:.5},{kind:`slider`,key:`b`,label:{ko:`목표 b`,en:`Target b`},min:0,max:10,step:.5,init:5}]},{id:`nth-root`,title:{ko:`n제곱근의 존재`,en:`Existence of n-th Roots`},order:13,summary:{ko:String.raw`제곱해서 원하는 수가 되는 점을 상한으로 찾아냅니다. 빈틈을 메우는 공리가 근을 만들어내는 순간입니다.

제곱하면 목표보다 작아지는 수들을 전부 모읍니다. 그 집합의 상한이 바로 찾는 근입니다. 상한보다 작으면 제곱이 모자라고, 크면 넘어갑니다. 그래서 상한의 제곱은 정확히 목표와 같아야 합니다.

예를 들면, 넓이가 2인 정사각형의 한 변을 찾는 것과 같습니다. 변이 1이면 넓이가 모자라고 2이면 넘칩니다. 경계에 딱 맞는 길이가 존재합니다. 그 길이가 루트 2입니다.`,en:String.raw`Locate the point whose power hits the target, using a supremum. Watch the gap-filling axiom manufacture a root.

Collect every number whose power stays below the target. The supremum of that set is the root. Below it, powers fall short; above it, they overshoot. So the supremum's power equals the target exactly.

For example, find the side of a square with area two. Side one gives too little area; side two gives too much. One borderline length fits exactly. That length is the square root of two.`},tex:[String.raw`s = \sup\{x \ge 0 : x^n < a\} \Rightarrow s^n = a`,String.raw`\sqrt[n]{a}\ \text{exists and is unique}`],prerequisites:[`supremum`],controls:[{kind:`slider`,key:`a`,label:{ko:`a 값`,en:`Value a`},min:.5,max:8,step:.5,init:2},{kind:`slider`,key:`n`,label:{ko:`제곱근 차수 n`,en:`Root index n`},min:2,max:5,step:1,init:2}]},{id:`countable`,title:{ko:`가산과 비가산`,en:`Countable vs Uncountable`},order:14,summary:{ko:String.raw`유리수는 한 줄로 번호를 매길 수 있음을 봅니다. 실수는 그 시도가 무너지는 것도 봅니다.

가산이란 자연수와 번호를 짝지을 수 있다는 뜻입니다. 분수는 격자로 늘어놓고 지그재그로 세면 전부 번호를 받습니다. 실수는 다릅니다. 어떤 목록을 만들어도 목록에 없는 실수가 남습니다. 대각선을 따라 숫자를 바꾸는 방법이 그 증거입니다.

예를 들면, 🧑 친구 전원에게 번호표를 나눠 주는 것과 같습니다. 줄이 길어도 한 명씩 번호를 받으면 가산입니다. 그런데 어떤 명단을 만들어도 빠진 사람이 꼭 생긴다면 그 무리는 셀 수 없습니다.`,en:String.raw`See the rationals numbered in a single list. Then see the same attempt fail for the reals.

Countable means pairing off with the natural numbers. Fractions tile a grid, and a zigzag count numbers them all. Reals refuse. Every proposed list misses some real. Changing digits along the diagonal proves it.

For example, hand number tickets to every 🧑 classmate. However long the line, one ticket each means countable. If every roster still misses someone, the crowd cannot be counted.`},tex:[String.raw`\mathbb{Q} = \{q_1, q_2, \dots\}`,String.raw`(0,1) \text{ is uncountable}`],controls:[{kind:`select`,key:`panel`,label:{ko:`장면`,en:`Panel`},options:[`rationals`,`diagonal`],init:`rationals`},{kind:`slider`,key:`n`,label:{ko:`나열 개수`,en:`Listed count`},min:1,max:64,step:1,init:20}]},{id:`cantor-theorem`,title:{ko:`칸토어 정리`,en:`Cantor's Theorem`},order:15,summary:{ko:String.raw`어떤 집합도 그 부분집합 전체의 모임보다는 작음을 봅니다. 목록의 대각선을 뒤집어 새 원소를 만듭니다.

멱집합은 부분집합을 전부 모은 집합입니다. 원소가 하나 늘면 부분집합은 두 배로 늘어납니다. 그래서 짝짓기를 시도하면 언제나 남는 쪽이 생깁니다. 대각선을 뒤집은 집합이 바로 그 남는 쪽입니다.

예를 들면, 🧑 친구 3명의 부분집합은 8가지입니다. 세 명보다 부분집합이 훨씬 많습니다. 인원이 늘수록 차이는 벌어지기만 합니다. 무한에서도 이 차이는 사라지지 않습니다.`,en:String.raw`See that any set is smaller than the collection of all its subsets. Flip a list's diagonal to build a new element.

The power set collects all subsets. One extra element doubles the subsets. So any attempted pairing leaves leftovers. The diagonal-flipped set is exactly such a leftover.

For example, three 🧑 classmates have eight subsets. Subsets already outnumber the friends. More people only widens the gap. Even infinity keeps the gap.`},tex:[String.raw`|X| < |\mathcal{P}(X)|`,String.raw`D = \{x \in X : x \notin f(x)\} \ne f(y)\ \forall y`],prerequisites:[`countable`],controls:[{kind:`slider`,key:`n`,label:{ko:`집합 크기 n`,en:`Set size n`},min:3,max:8,step:1,init:5}]},{id:`groups-fields`,title:{ko:`군과 체`,en:`Groups vs Fields`},order:16,summary:{ko:String.raw`되돌릴 수 있는 움직임들의 규칙을 표로 확인합니다. 사칙연산이 전부 되는 세계와 비교합니다.

군은 세 가지 약속으로 이루어집니다. 어떻게 묶어도 결과가 같아야 합니다. 아무 일도 안 하는 원소가 있어야 합니다. 모든 움직임에는 되돌리는 움직임이 있어야 합니다. 체는 여기에 나눗셈까지 허용한 세계입니다.

예를 들면, 자전거 페달을 앞으로 돌리는 동작은 뒤로 돌려 되돌릴 수 있습니다. 가만히 있는 것도 하나의 상태입니다. 동작을 이어 붙이면 또 동작이 됩니다. 이 규칙들의 모임이 군입니다.`,en:String.raw`Check the rules of reversible moves in a table. Compare with a world where all four operations work.

A group rests on three promises. Grouping must not change results. A do-nothing element must exist. Every move needs an undoing move. A field adds division on top of that.

For example, pedaling a bicycle forward can be undone by pedaling back. Staying still counts as a move too. Chaining moves gives another move. A set of moves obeying these rules is a group.`},tex:[String.raw`(a+b)+c = a+(b+c),\ \ \exists\,0,\ \ \forall a\,\exists(-a)`,String.raw`a(b+c) = ab+ac,\qquad 2\mathbb{Z} \le \mathbb{Z},\ \ \mathbb{Q} \le \mathbb{R}`],controls:[{kind:`select`,key:`table`,label:{ko:`곱셈표`,en:`Table`},options:[`z6`,`z5`],init:`z6`}]},{id:`ordered-fields`,title:{ko:`순서체`,en:`Ordered Fields`},order:17,summary:{ko:String.raw`순서를 넣을 수 있는 체와 넣을 수 없는 체를 가릅니다. 양의 원뿔 하나로 부등식의 규칙이 전부 나옵니다.

순서체는 체에 양수들의 모임, 양의 원뿔을 얹은 것입니다. 양수끼리 더해도 양수, 곱해도 양수여야 하고, 모든 수는 양수거나 0이거나 그 음수가 양수입니다. 유리수와 실수는 이 규칙을 만족하지만, 시계처럼 순환하는 세계는 만족할 수 없습니다.

예를 들면, 🕐 시계에서 1시간씩 일곱 번 가면 제자리로 돌아옵니다. 양의 걸음만으로 0에 닿는 세계에서는 크다, 작다를 정할 수 없습니다. 길이는 다릅니다. 양의 길이들을 어떻게 더해도 0이 되지 않습니다.`,en:String.raw`Sort the fields that admit an order from those that cannot. One positive cone yields every inequality rule.

An ordered field is a field plus a set of positives, the positive cone. Positives must stay positive under addition and multiplication, and every element is positive, zero, or its negative is positive. The rationals and reals obey this; a cyclic clock-like world cannot.

For example, on a 🕐 clock, seven steps of one hour return to the start. In a world where positive steps reach 0, larger and smaller cannot be defined. Lengths differ: no sum of positive lengths is ever 0.`},tex:[String.raw`P + P \subseteq P, \quad P \cdot P \subseteq P, \quad \forall a: \ a \in P \ \lor \ a = 0 \ \lor \ -a \in P`,String.raw`a < b \iff b - a \in P, \qquad a \ne 0 \ \Longrightarrow \ a^2 > 0`],prerequisites:[`groups-fields`],controls:[{kind:`select`,key:`mode`,label:{ko:`체`,en:`Field`},options:[`q`,`z7`],init:`q`},{kind:`slider`,key:`p`,label:{ko:`양수 p`,en:`Positive p`},min:.25,max:2.5,step:.25,init:1.25},{kind:`slider`,key:`q`,label:{ko:`양수 q`,en:`Positive q`},min:.25,max:2.5,step:.25,init:.75}]},{id:`vector-spaces`,title:{ko:`벡터공간과 동형`,en:`Vector Spaces and Isomorphism`},order:18,summary:{ko:String.raw`계수를 움직이면 직선과 점이 함께 움직이는 모습을 봅니다. 겉모습이 다른 공간들이 같은 구조임을 확인합니다.

벡터공간은 더하기와 늘리기·줄이기가 되는 세계입니다. 수의 쌍도, 다항식도, 함수도 같은 규칙을 따릅니다. 규칙이 같으면 두 세계는 사실상 같습니다. 한쪽의 계산을 다른 쪽으로 옮길 수 있기 때문입니다.

예를 들면, 요리 레시피를 카드에 적는 것과 같습니다. 카드의 숫자만 알면 요리를 그대로 재현할 수 있습니다. 직선도 기울기와 절편, 숫자 두 개로 적힙니다. 적은 쪽과 실제 쪽이 한 몸처럼 움직입니다.`,en:String.raw`Move the coefficients and watch a line and a point move together. Spaces with different looks share one structure.

A vector space supports adding and scaling. Pairs of numbers, polynomials, and functions all obey the same rules. Same rules means essentially the same world. Calculations transfer from one side to the other.

For example, write a recipe on a card. The card's numbers rebuild the dish exactly. A line, too, is captured by two numbers: slope and intercept. Card and line move as one.`},tex:[String.raw`(V,+) \text{ abelian over } F,\qquad c(v+w) = cv + cw`,String.raw`\Phi: P_2 \to \mathbb{R}^3,\quad a+bx+cx^2 \mapsto (a,b,c)`],prerequisites:[`groups-fields`],controls:[{kind:`slider`,key:`a`,label:{ko:`계수 a`,en:`Coefficient a`},min:-2,max:2,step:.1,init:1},{kind:`slider`,key:`b`,label:{ko:`계수 b`,en:`Coefficient b`},min:-2,max:2,step:.1,init:.5}]},{id:`dimension-rank`,title:{ko:`차원과 랭크`,en:`Dimension and Rank`},order:19,summary:{ko:String.raw`격자가 행렬에 눌려 펴지는 모습을 봅니다. 사라지는 차원과 남는 차원을 셉니다.

차원은 독립적인 방향의 개수입니다. 행렬을 곱하면 방향들이 겹쳐 눌릴 수 있습니다. 완전히 눌려 사라지는 방향이 핵의 차원입니다. 살아남아 펼치는 범위가 랭크입니다. 둘을 더하면 원래 차원이 됩니다.

예를 들면, 햇빛 아래 그림자는 입체를 평면으로 눌러 보여 줍니다. 높이 방향은 그림자에서 사라집니다. 남는 건 평면 위 방향뿐입니다. 사라진 것과 남은 것을 더하면 원래 차원과 같습니다.`,en:String.raw`Watch a grid get squeezed flat by a matrix. Count the dimensions that vanish and those that survive.

Dimension counts independent directions. A matrix can squash directions together. Directions crushed to nothing form the kernel's dimension. Directions still spanning room form the rank. The two add up to the original dimension.

For example, sunlight presses a solid object into a flat shadow. The height direction vanishes in the shadow. Only the flat directions survive. Lost plus surviving equals the original dimension.`},tex:[String.raw`\dim\ker T + \mathrm{rank}\,T = \dim V`,String.raw`\mathrm{rank}\,A = \dim(\text{column space of } A)`],prerequisites:[`vector-spaces`],controls:[{kind:`select`,key:`preset`,label:{ko:`행렬`,en:`Matrix`},options:[`identity`,`rank1`,`projection`,`zero`],init:`identity`}]}]},{id:`sequences`,title:{ko:`수열`,en:`Sequences`},summary:{ko:`ε-N 논법으로 수열의 수렴을 다루고, 단조·코시 수열과 limsup/liminf의 기술을 익힙니다.`,en:`Convergence of sequences via ε-N arguments: monotone and Cauchy sequences, limsup and liminf.`},sections:[{id:`limit-basics`,title:{ko:`극한의 기본`,en:`Limits, the Basics`},sceneIds:[`epsilon-n`,`squeeze`,`standard-limits`]},{id:`norms-inner-products`,title:{ko:`노름과 내적`,en:`Norms and Inner Products`},sceneIds:[`norm`,`inner-product`,`sequence-spaces`,`cauchy-schwarz`,`holder`,`parallelogram-law`]},{id:`constructing-reals`,title:{ko:`실수의 구성`,en:`Constructing the Reals`},sceneIds:[`holes`,`construction`]},{id:`convergence-tests`,title:{ko:`수렴의 판정`,en:`Deciding Convergence`},sceneIds:[`bounded`,`subsequence`,`bolzano-weierstrass`,`monotone-cauchy`,`limsup-liminf`]},{id:`special-limits`,title:{ko:`특수한 극한`,en:`Special Limits`},sceneIds:[`stolz-cesaro`,`double-sequences`]}],scenes:[{id:`epsilon-n`,title:{ko:`ε-N 극한`,en:`The ε–N Definition`},order:1,summary:{ko:String.raw`ε 띠를 아무리 좁혀도 어느 순간부터 꼬리가 전부 그 안에 들어갑니다. 그 순간을 확인하는 장면입니다.

수렴한다는 것은 목표값에 한없이 가까워진다는 뜻입니다. 띠를 좁히면 꼬리가 들어가는 시점은 늦어집니다. 그래도 그런 시점이 항상 존재하면 수렴입니다. 정확한 약속은 아래 식과 같습니다.

예를 들면, ⚽ 공을 굴리면 목표 선에 점점 가까이 다가가 멈춥니다. 10cm 안쪽, 1cm 안쪽에 들어오라고 해도 어느 순간부터는 계속 그 안에 머뭅니다.`,en:String.raw`Narrow the ε-band as much as you like: from some moment on, the whole tail sits inside it. This scene watches that moment arrive.

Converging means closing in on the target value without end. A narrower band only delays the moment the tail fits inside. As long as that moment always comes, the sequence converges. The exact promise is the formula below.

For example, a ⚽ ball rolled toward a line stops closer and closer to it. Demand it land within 10 cm, then within 1 cm — from some roll on, it always stays inside.`},tex:[String.raw`\forall\varepsilon>0\ \exists N\ \text{s.t.}\ n>N\Rightarrow|a_n-L|<\varepsilon`],controls:[{kind:`select`,key:`seq`,label:{ko:`수열`,en:`Sequence`},options:[`1/n`,`1/n²`,`(−1)^n / n`,`n / (n+1)`],init:`1/n`},{kind:`slider`,key:`epsilon`,label:{ko:`ε`,en:`ε`},min:.01,max:.5,step:.01,init:.1}]},{id:`squeeze`,title:{ko:`조임 정리`,en:`The Squeeze Theorem`},order:2,summary:{ko:String.raw`두 수열 사이에 낀 수열을 봅니다. 양쪽이 같은 값으로 가면 가운데도 따라갑니다.

가운데 수열은 직접 잴 필요가 없습니다. 양쪽 경비가 같은 문으로 들어가면, 그 사이에 있는 것은 같이 들어갈 수밖에 없습니다. 진동하는 수열도 이 방법으로 잡습니다. \(|\sin n| \le 1\)이라 \(\frac{\sin n}{n}\)은 \(\pm\frac{1}{n}\) 사이에 갇히고, 양쪽이 0으로 가니 가운데도 0으로 갑니다.

예를 들면, 🧍 복도를 걷는 사람이 있습니다. 양쪽 벽이 점점 좁아져 한 점으로 모이면, 그 사람은 벽을 뚫지 않는 한 같은 점으로 갈 수밖에 없습니다.`,en:String.raw`A sequence trapped between two others takes the stage. When both sides head to the same value, the middle follows.

The middle sequence never needs measuring directly. If both guards walk through the same door, whatever stands between them goes through it as well. Oscillating sequences are caught this way too: \(|\sin n| \le 1\) traps \(\frac{\sin n}{n}\) between \(\pm\frac{1}{n}\), and since both sides tend to 0, so does the middle.

For example, picture a 🧍 person walking down a corridor. If both walls narrow in to a single point, the person, unable to pass through walls, must end up at that same point.`},tex:[String.raw`a_n \le b_n \le c_n \quad \forall n`,String.raw`a_n \to L, \ c_n \to L \ \Longrightarrow \ b_n \to L`],prerequisites:[`epsilon-n`],controls:[{kind:`slider`,key:`n`,label:{ko:`항의 개수 n`,en:`Terms n`},min:5,max:60,step:1,init:30}]},{id:`standard-limits`,title:{ko:String.raw`표준 극한: \(x^n\)과 \(x^{1/n}\)`,en:String.raw`Standard Limits: \(x^n\) and \(x^{1/n}\)`},order:3,summary:{ko:String.raw`절댓값이 1보다 작은 수의 거듭제곱과 양수의 거듭제곱근을 봅니다. 각각 어디로 모이는지 확인하는 장면입니다.

1보다 작은 수를 계속 곱하면 점점 작아져 0으로 가라앉습니다. 반대로 양수는 거듭제곱근을 거듭하면 1로 모입니다. −1에서는 부호가 번갈아 진동합니다. 절댓값이 1보다 크면 거듭제곱은 끝없이 커집니다. 이 모든 경우를 Bernoulli 부등식 하나로 다룹니다.

예를 들면, 🍰 케이크를 매일 남은 것의 절반만 먹습니다. 남는 양은 절반, 4분의 1, 8분의 1로 줄어서 거의 사라집니다.`,en:String.raw`Powers of a number below 1 in absolute value, and roots of a positive number, take the stage. The scene checks where each of them gathers.

Keep multiplying a number below 1 and it sinks toward 0. Take roots of a positive number again and again and it gathers at 1. At −1 the sign just flips back and forth. Beyond 1 in size, powers grow without end. Bernoulli's inequality handles every case.

For example, eat half of the remaining 🍰 cake each day. What is left goes one half, one quarter, one eighth — nearly vanishing.`},tex:[String.raw`|x|<1 \Rightarrow x^n \to 0`,String.raw`x>1 \Rightarrow x^{1/n} \to 1`,String.raw`n^{1/n} \to 1`],prerequisites:[`epsilon-n`],controls:[{kind:`select`,key:`kind`,label:{ko:`수열`,en:`Sequence`},options:[`power`,`root`],init:`power`},{kind:`slider`,key:`x`,label:{ko:`x`,en:`x`},min:-2,max:2,step:.05,init:.5},{kind:`slider`,key:`n`,label:{ko:`항의 개수 n`,en:`Terms n`},min:1,max:60,step:1,init:20}]},{id:`norm`,title:{ko:`노름: 길이를 재는 규칙`,en:`Norm: The Rule for Measuring Length`},order:4,summary:{ko:String.raw`벡터의 길이를 어떻게 재는지 봅니다. 길이를 재는 규칙이 노름입니다.

규칙은 세 가지입니다. 길이는 음수가 아니고, 길이가 0인 벡터는 0뿐입니다. 벡터를 몇 배 하면 길이도 그만큼 배가 됩니다. 두 벡터를 합친 길이는 각 길이의 합을 넘지 않습니다. 이 마지막 규칙이 삼각부등식입니다. 자를 바꾸면 길이도 바뀝니다. 블록을 세는 자, 직선으로 재는 자, 왕의 움직임으로 재는 자가 다릅니다.

예를 들면, 🏙 바둑판 도시에서 한 블록 동쪽, 한 블록 북쪽으로 가면 직선으로는 대각선 한 번이지만 블록으로는 두 번 걸어야 합니다. 체스 왕은 대각선으로 한 번에 갑니다. 같은 이동인데 재는 자에 따라 길이가 2, 약 1.41, 1로 달라집니다.`,en:String.raw`How do we measure the length of a vector? The measuring rule is the norm.

The rule has three parts. A length is never negative, and only the zero vector has length 0. Scaling a vector scales its length by the same factor. And the length of a sum never exceeds the sum of the lengths. That last rule is the triangle inequality. Change the ruler and the length changes: the block-counting ruler, the straight-line ruler, and the king-move ruler all differ.

For example, in a 🏙 grid city, go one block east and one block north. The straight line is one diagonal, but on blocks you must walk twice. A chess king goes diagonally in one move. The same move measures 2, about 1.41, and 1 under the three rulers.`},tex:[String.raw`\|x\| \ge 0, \quad \|x\| = 0 \iff x = 0`,String.raw`\|a x\| = |a| \, \|x\|`,String.raw`\|x + y\| \le \|x\| + \|y\|`,String.raw`\|x\|_1 = |x_1| + |x_2|, \quad \|x\|_2 = \sqrt{x_1^2 + x_2^2}, \quad \|x\|_\infty = \max(|x_1|, |x_2|)`],prerequisites:[`metric-spaces`],controls:[{kind:`slider`,key:`x1`,label:{ko:`x의 첫째 성분`,en:`x first component`},min:-2,max:2,step:.1,init:1.2},{kind:`slider`,key:`x2`,label:{ko:`x의 둘째 성분`,en:`x second component`},min:-2,max:2,step:.1,init:.8},{kind:`slider`,key:`y1`,label:{ko:`y의 첫째 성분`,en:`y first component`},min:-2,max:2,step:.1,init:-.6},{kind:`slider`,key:`y2`,label:{ko:`y의 둘째 성분`,en:`y second component`},min:-2,max:2,step:.1,init:1.4},{kind:`select`,key:`p`,label:{ko:`노름 p`,en:`Norm p`},options:[`1`,`2`,`inf`],init:`2`}]},{id:`inner-product`,title:{ko:`내적: 얼마나 겹치는가`,en:`Inner Product: How Much Overlap`},order:5,summary:{ko:String.raw`두 벡터가 얼마나 같은 방향을 향하는지 봅니다. 그 겹침을 재는 규칙이 내적입니다.

내적은 세 가지 약속을 지킵니다. 자리를 바꿔도 같습니다. 합과 상수배는 그대로 풀립니다. 자기 자신과의 내적은 길이의 제곱입니다. 그래서 내적이 있으면 노름이 따라옵니다. 내적이 0이면 두 벡터는 수직입니다.

예를 들면, 📦 상자를 두 사람이 밉니다. 같은 방향으로 밀면 힘이 온전히 합쳐집니다. 수직으로 밀면 앞으로 가는 데는 아무 도움이 안 됩니다. 내적은 그 합쳐지는 몫을 재는 셈입니다.`,en:String.raw`How much do two vectors point the same way? The inner product is the rule that measures the overlap.

It keeps three promises. Swapping the two sides changes nothing. Sums and scalings pull straight through. And the inner product of a vector with itself is the square of its length. So an inner product brings a norm with it. An inner product of 0 means the vectors are perpendicular.

For example, two people push a 📦 box. Pushing in the same direction, their forces add up in full. Pushing at a right angle, the sideways force does nothing for forward motion. The inner product measures exactly the part that adds up.`},tex:[String.raw`\langle x, y \rangle = x_1 y_1 + x_2 y_2`,String.raw`\langle x, x \rangle = \|x\|^2`,String.raw`\langle x, y \rangle = \|x\| \, \|y\| \cos\theta`],prerequisites:[`norm`],controls:[{kind:`slider`,key:`x1`,label:{ko:`x의 첫째 성분`,en:`x first component`},min:-3,max:3,step:.1,init:1.5},{kind:`slider`,key:`x2`,label:{ko:`x의 둘째 성분`,en:`x second component`},min:-3,max:3,step:.1,init:.5},{kind:`slider`,key:`y1`,label:{ko:`y의 첫째 성분`,en:`y first component`},min:-3,max:3,step:.1,init:.5},{kind:`slider`,key:`y2`,label:{ko:`y의 둘째 성분`,en:`y second component`},min:-3,max:3,step:.1,init:1.5}]},{id:`sequence-spaces`,title:{ko:`수열공간과 함수공간`,en:`Sequence and Function Spaces`},order:6,summary:{ko:String.raw`수열들을 한곳에 모아 놓은 공간을 봅니다. 수열 하나하나가 이 공간에서는 점이 됩니다.

수열끼리 더하고 곱할 수 있어서 벡터공간입니다. 두 수열 사이의 거리도 잴 수 있습니다. 재는 방법에 따라 들어갈 수 있는 공간이 달라집니다. 절댓값의 합이 유한하면 가장 작은 공간에 들어갑니다. 제곱해서 더한 합이 유한하면 중간 공간입니다. 그냥 유계이면 가장 큰 공간에 들어갑니다. 그래서 작은 공간이 큰 공간 안에 쏙 들어갑니다. 거리를 주는 노름이 두 세계를 잇는 다리입니다. 이 공간들이 완비라는 사실은 알려진 정리로만 언급합니다.

예를 들면, 📦 상자 세 개가 겹쳐 놓여 있습니다. 작은 상자에 든 물건은 중간 상자에도, 큰 상자에도 들어갑니다. 수열 공간도 이렇게 작은 것이 큰 것 안에 포함됩니다.`,en:String.raw`Whole sequences get collected into a single space here. Each sequence becomes one point of the space.

Sequences can be added and scaled, so the space is a vector space. The distance between two sequences can also be measured. The measuring rule decides which space a sequence fits into. A finite sum of absolute values fits the smallest space. A finite sum of squares fits the middle one. Merely being bounded fits the largest one. So each smaller space sits inside the bigger ones. The norm behind the distance bridges the two worlds. That these spaces are complete is stated as a known theorem only.

For example, picture three nested 📦 boxes. Anything inside the small box also lies in the middle and the large one. Sequence spaces nest in exactly the same way.`},tex:[String.raw`\ell^1 = \{x : \sum |x_n| < \infty\}, \quad \ell^2 = \{x : \sum |x_n|^2 < \infty\}, \quad \ell^\infty = \{x : \sup |x_n| < \infty\}`,String.raw`\|x\|_1 = \sum |x_n|, \quad \|x\|_2 = \left(\sum |x_n|^2\right)^{1/2}, \quad \|x\|_\infty = \sup_n |x_n|`,String.raw`\ell^1 \subset \ell^2 \subset \ell^\infty, \qquad d(x, y) = \|x - y\|`],prerequisites:[`metric-spaces`,`norm`],controls:[{kind:`select`,key:`view`,label:{ko:`보기`,en:`View`},options:[`balls`,`sequence`],init:`balls`},{kind:`select`,key:`p`,label:{ko:`노름 p`,en:`Norm p`},options:[`1`,`2`,`inf`],init:`2`},{kind:`slider`,key:`alpha`,label:{ko:`지수 α`,en:`Exponent α`},min:.2,max:2,step:.05,init:1}]},{id:`cauchy-schwarz`,title:{ko:`코시-슈바르츠 부등식`,en:`Cauchy–Schwarz Inequality`},order:7,summary:{ko:String.raw`두 벡터의 내적이 얼마나 커질 수 있는지 봅니다. 내적은 두 노름의 곱을 절대 넘지 못합니다.

내적은 한 벡터가 다른 벡터 방향으로 얼마나 겹치는지 잽니다. 두 벡터가 나란할 때 겹침이 가장 큽니다. 어긋날수록 겹침은 노름의 곱보다 작아집니다. 증명은 길이가 음수가 될 수 없다는 사실에서 출발합니다. 그 식을 판별식으로 읽으면 부등식이 떨어집니다. 등호는 두 벡터가 평행할 때만 성립합니다.

예를 들면, ✏️ 연필에 빛을 비추면 그림자는 연필보다 길어지지 않습니다. 연필이 빛 방향과 나란할 때만 그림자가 연필만큼 길어집니다.`,en:String.raw`How large can the inner product of two vectors become? It can never exceed the product of the two norms.

The inner product measures how much one vector overlaps the other's direction. The overlap is largest when the two vectors point the same way. Tilt them apart and the overlap falls below the product of the norms. The proof starts from one fact: a length is never negative. Reading that fact as a discriminant drops the inequality out. Equality holds only when the two vectors are parallel.

For example, shine a light on a ✏️ pencil and its shadow is never longer than the pencil. Only when the pencil lines up with the light does the shadow match its full length.`},tex:[String.raw`|\langle x,y\rangle| \le \|x\|\,\|y\|`,String.raw`\|x+y\| \le \|x\|+\|y\|`],prerequisites:[`sequence-spaces`,`inner-product`],controls:[{kind:`slider`,key:`angle`,label:{ko:`각도 θ`,en:`Angle θ`},min:0,max:Math.PI*2,step:Math.PI/180,init:0},{kind:`toggle`,key:`showProjection`,label:{ko:`정사영 표시`,en:`Show projection`},init:!0}]},{id:`holder`,title:{ko:`횔더 부등식`,en:`Hölder’s Inequality`},order:8,summary:{ko:String.raw`코시-슈바르츠를 일반 지수로 넓힌 부등식을 봅니다. 두 지수가 서로 짝을 이루는 것이 핵심입니다.

두 수열을 항끼리 곱해 더한 값에도 천장이 있습니다. 그 천장은 각 수열의 노름을 곱한 값입니다. 지수가 둘 다 2이면 코시-슈바르츠와 똑같아집니다. 증명의 열쇠는 곱을 합의 지분으로 바꾸는 영 부등식입니다. 자세한 식은 아래에 있습니다.

예를 들면, 🏪 가게에서 물건마다 가격과 개수를 곱해 모두 더하면 총액이 됩니다. 이 총액은 가격 목록과 개수 목록의 크기를 곱한 값을 넘지 않습니다.`,en:String.raw`This scene widens Cauchy–Schwarz to general exponents. The key is that the two exponents come as a matched pair.

Multiply two sequences term by term and add them up: even that total has a ceiling. The ceiling is the product of the two sequences' norms. With both exponents equal to 2, it is exactly Cauchy–Schwarz. The key step is Young's inequality, which trades a product for shares of a sum. The precise formulas are below.

For example, at a 🏪 shop you multiply each item's price by its quantity and add everything up. That total never exceeds the product of the price list's size and the quantity list's size.`},tex:[String.raw`\sum_{k=1}^{n} |a_k b_k| \le \left(\sum_{k=1}^{n} |a_k|^p\right)^{1/p} \left(\sum_{k=1}^{n} |b_k|^q\right)^{1/q}`,String.raw`ab \le \frac{a^p}{p} + \frac{b^q}{q} \quad \text{(Young)}`],prerequisites:[`cauchy-schwarz`],controls:[{kind:`slider`,key:`p`,label:{ko:`지수 p`,en:`Exponent p`},min:1.1,max:8,step:.1,init:2},{kind:`slider`,key:`n`,label:{ko:`항의 수 n`,en:`Terms n`},min:2,max:30,step:1,init:8}]},{id:`parallelogram-law`,title:{ko:`평행사변형 법칙`,en:`The Parallelogram Law`},order:9,summary:{ko:String.raw`평행사변형의 두 대각선과 두 변 사이에 숨어 있는 등식을 봅니다. 지수 \(p\)를 움직이며 그 등식이 언제 살아남는지 확인하는 장면입니다.

내적에서 온 노름은 항상 이 등식을 만족합니다. \(e_1\)과 \(e_2\)로 계산하면 왼쪽은 \(2 \cdot 2^{2/p}\), 오른쪽은 \(4\)가 됩니다. 둘이 같아지는 경우는 \(p = 2\)뿐입니다. 그래서 \(p\)가 2가 아닌 \(\ell^p\) 노름은 어떤 내적에서도 나올 수 없습니다.

예를 들면, 📐 자로 그린 평행사변형은 그대로인데 재는 자만 바꿉니다. 자를 바꿨을 뿐인데 대각선에 대한 등식이 깨진다면, 그 자는 내적이라는 설계도에서 나온 것이 아닙니다.`,en:String.raw`An identity hides between the two diagonals and the two sides of a parallelogram. This scene slides the exponent \(p\) and checks when that identity survives.

Every norm that comes from an inner product satisfies the identity. Computing with \(e_1\) and \(e_2\) makes the left side \(2 \cdot 2^{2/p}\) and the right side \(4\). The two agree only at \(p = 2\). So an \(\ell^p\) norm with \(p\) different from 2 cannot come from any inner product.

For example, a 📐 parallelogram drawn with a ruler stays exactly the same, but the measuring ruler is swapped. If swapping the ruler alone breaks the diagonal identity, that ruler never came from an inner-product blueprint.`},tex:[String.raw`\|x+y\|^2 + \|x-y\|^2 = 2\|x\|^2 + 2\|y\|^2`,String.raw`\langle x, y \rangle = \frac{\|x+y\|^2 - \|x-y\|^2}{4}`],prerequisites:[`cauchy-schwarz`],controls:[{kind:`slider`,key:`p`,label:{ko:`지수 p`,en:`Exponent p`},min:1.1,max:8,step:.1,init:2},{kind:`toggle`,key:`showCircle`,label:{ko:`단위구 표시`,en:`Show unit sphere`},init:!0}]},{id:`holes`,title:{ko:`유리수의 구멍`,en:`Why ℝ Has No Holes`},order:10,summary:{ko:String.raw`유리수만으로 만든 수열이 유리수가 아닌 곳으로 다가갑니다. 유리수 세계에 구멍이 있다는 것을 보여 주는 장면입니다.

반복 식은 추측값의 오차를 매번 반으로 접어 고칩니다. 항은 전부 유리수입니다. 그런데 다가가는 목적지는 유리수가 아닙니다. 그래서 유리수만으로는 그 자리를 채울 수 없습니다. 무리수라는 엄밀한 증명은 건너뛰고 아이디어만 봅니다.

예를 들면, 📏 자로 정사각형의 대각선 길이를 재어 봅니다. 1.4, 1.41, 1.414처럼 자릿수를 늘려도 분수로는 딱 맞지 않습니다. 그 자리가 바로 유리수의 구멍입니다.`,en:String.raw`A sequence built only from rationals creeps toward a place that is not rational. The scene shows the hole in the rational world.

The iteration halves the error of each guess. Every term stays rational. Yet the destination is not a rational number. So rationals alone cannot fill that spot. The full irrationality proof is skipped; only the idea is shown.

For example, measure the diagonal of a square with a 📏 ruler. Try 1.4, then 1.41, then 1.414 — no fraction ever fits it exactly. That spot is the hole in the rationals.`},tex:[String.raw`x_{n+1}=\frac{x_n+2/x_n}{2}\to\sqrt{2}`,String.raw`\sqrt{2}\notin\mathbb{Q}`],controls:[{kind:`slider`,key:`n`,label:{ko:`반복 횟수 n`,en:`Iterations n`},min:0,max:8,step:1,init:4}]},{id:`construction`,title:{ko:`실수의 구성`,en:`Construction of the Real Numbers`},order:11,summary:{ko:String.raw`유리수의 구멍을 메워 실수를 실제로 만드는 장면입니다. 실수 하나를 유리수 수열들의 묶음으로 정의합니다.

소수점 자릿수를 늘려 가면 유리수 항들이 구멍으로 모여듭니다. 서로의 차이가 사라지는 수열들은 같은 수로 취급합니다. 그 묶음 자체가 하나의 실수입니다. 이렇게 만들면 구멍이 없는 수직선이 완성됩니다. 완비성은 바로 이 구성에서 얻어집니다.

예를 들면, 🪜 계단을 한 칸씩 오르면 꼭대기에 가까워집니다. 1, 1.4, 1.41, 1.414는 꼭대기를 향한 발자국들입니다. 발자국의 행렬 전체가 곧 목적지인 실수입니다.`,en:String.raw`The hole in the rationals gets filled and a real number is actually built. One real number is defined as a bundle of rational sequences.

Lengthen the decimal expansion and the rational terms march into the hole. Sequences whose difference vanishes count as the same number. That bundle itself is one real number. Built this way, the number line ends up with no holes. Completeness is exactly what this construction buys.

For example, climb a 🪜 staircase one step at a time toward the top. The numbers 1, 1.4, 1.41, 1.414 are footprints heading upward. The whole parade of footprints is the destination itself: the real number.`},tex:[String.raw`(x_n) \sim (y_n) \iff x_n - y_n \to 0`,String.raw`\sqrt{2} = [(1, 1.4, 1.41, 1.414, \dots)]`],prerequisites:[`holes`],controls:[{kind:`select`,key:`seq`,label:{ko:`수열`,en:`Sequence`},options:[`decimal`,`newton`],init:`decimal`},{kind:`slider`,key:`n`,label:{ko:`항의 개수 n`,en:`Terms n`},min:1,max:6,step:1,init:4}]},{id:`bounded`,title:{ko:`유계: 울타리 안에 갇힌 수열`,en:`Bounded: A Sequence Inside a Fence`},order:12,summary:{ko:String.raw`수열의 모든 항을 한 번에 가두는 울타리가 있는지 봅니다. 울타리가 있으면 유계입니다.

울타리는 항마다 바뀌면 안 됩니다. 하나의 수 \(M\)이 모든 항에 대해 \(|a_n| \le M\)을 만족해야 합니다. 수렴하는 수열은 항상 유계입니다. 하지만 유계라고 다 수렴하지는 않습니다. \((-1)^n\)은 울타리 안에서 왔다 갔다만 합니다.

예를 들면, 🐑 양이 울타리 안에서 이리저리 돌아다닙니다. 아무리 돌아다녀도 울타리 밖으로는 나가지 않습니다. 수열의 유계도 그 그림입니다.`,en:String.raw`Is there a fence that pens in every term of the sequence at once? If yes, the sequence is bounded.

The fence may not move from term to term. A single number \(M\) must satisfy \(|a_n| \le M\) for every term. Every convergent sequence is bounded. But bounded does not imply convergent: \((-1)^n\) just bounces back and forth inside its fence.

For example, a 🐑 sheep wanders around inside its fence. However far it roams, it never leaves the fence. A bounded sequence is the same picture.`},tex:[String.raw`\exists M > 0, \ \forall n: \ |a_n| \le M`],prerequisites:[`supremum`],controls:[{kind:`select`,key:`kind`,label:{ko:`수열`,en:`Sequence`},options:[`ratio`,`alt`,`linear`],init:`ratio`},{kind:`slider`,key:`n`,label:{ko:`항의 개수 n`,en:`Terms n`},min:5,max:40,step:1,init:20}]},{id:`subsequence`,title:{ko:`부분수열: 순서를 지켜 뽑기`,en:`Subsequences: Picking in Order`},order:13,summary:{ko:String.raw`수열에서 순서를 지키며 항을 뽑아낸 새 수열을 봅니다. 그것이 부분수열입니다.

번호가 엄격히 커지기만 하면 됩니다. 항을 건너뛰어도 순서는 바꿀 수 없습니다. 원래 수열이 수렴하면 모든 부분수열도 같은 값으로 수렴합니다. 거꾸로 두 부분수열이 서로 다른 값으로 가면 원래 수열은 발산합니다.

예를 들면, 🚃 급행열차는 모든 역에 서지 않습니다. 서는 역만 순서대로 이으면 완행 노선의 부분수열 같은 그림이 됩니다.`,en:String.raw`Pick terms out of a sequence while keeping their order, and a new sequence appears. That is a subsequence.

The indices only need to grow strictly. Terms may be skipped, but the order may never change. If the original sequence converges, every subsequence converges to the same value. Conversely, if two subsequences head to different values, the original diverges.

For example, an 🚃 express train does not stop at every station. Line up only the stations where it stops, in order, and you get a subsequence of the local line.`},tex:[String.raw`n_1 < n_2 < n_3 < \cdots, \qquad (a_{n_k})_{k=1}^{\infty}`,String.raw`a_n \to L \ \Longrightarrow \ a_{n_k} \to L`],prerequisites:[`bounded`],controls:[{kind:`select`,key:`part`,label:{ko:`뽑을 부분`,en:`Part to pick`},options:[`all`,`even`,`odd`],init:`all`},{kind:`slider`,key:`n`,label:{ko:`항의 개수 n`,en:`Terms n`},min:6,max:48,step:1,init:24}]},{id:`bolzano-weierstrass`,title:{ko:`볼차노–바이어슈트라스`,en:`A Convergent Subsequence Always Hides Inside`},order:14,summary:{ko:String.raw`유계수열 속에는 항상 수렴하는 부분수열이 숨어 있습니다. 구간을 반으로 접어 그 부분수열을 찾아내는 장면입니다.

비법은 구간을 계속 반으로 접는 것입니다. 점이 무한히 많이 모이는 쪽을 따라갑니다. 접을수록 구간은 좁아집니다. 그 안에 갇힌 점들은 하나의 값으로 모여듭니다. 그 점들을 이으면 수렴하는 부분수열이 됩니다.

예를 들면, 🧑 친구 서른 명이 운동장에 흩어져 있습니다. 운동장을 반으로 나누면 어느 한쪽에 친구가 몰려 있습니다. 그쪽만 계속 반으로 나누면 결국 한 지점으로 좁혀집니다.`,en:String.raw`Every bounded sequence hides a convergent subsequence inside it. This scene finds that subsequence by halving the interval.

The trick is to keep halving the interval. Always follow the half that holds infinitely many terms. Each halving makes the interval narrower. The points trapped inside pile onto a single value. Stringing those points together gives a convergent subsequence.

For example, thirty 🧑 classmates scatter across a playground. Split the playground in half and one side still holds a crowd of them. Keep halving that side and you corner a single spot.`},tex:[String.raw`(a_n)\ \text{bounded}\Rightarrow\exists\ (a_{n_k})\ \text{convergent}`],prerequisites:[`subsequence`],controls:[{kind:`slider`,key:`steps`,label:{ko:`이분 단계`,en:`Bisection steps`},min:1,max:8,step:1,init:4},{kind:`select`,key:`seed`,label:{ko:`난수 시드`,en:`Random seed`},options:[`7`,`21`,`99`],init:`7`}]},{id:`monotone-cauchy`,title:{ko:`단조수열과 코시수열`,en:`Monotone and Cauchy Sequences`},order:15,summary:{ko:String.raw`증가하면서 위로 막힌 수열이 꼭대기에 닿는 장면입니다. 꼬리가 한 점으로 조여드는 모습도 함께 봅니다.

위로 막혀 있으면 갈 곳은 가장 높은 자리뿐입니다. 그 자리가 상한이고 수열은 상한에 수렴합니다. 꼬리만 잘라 보면 남은 항들의 퍼짐이 점점 줄어듭니다. 퍼짐이 0으로 사라지는 수열이 코시수열입니다. 수렴하는 수열은 전부 코시수열입니다.

예를 들면, 🐷 저금통에 목표액의 절반, 남은 절반의 절반을 계속 넣습니다. 쌓인 돈은 목표에 점점 가까워지지만 한 번에 닿지는 않습니다. 뒤에 넣은 동전들끼리의 차이도 점점 작아집니다.`,en:String.raw`An increasing sequence blocked from above climbs to the very top. The scene also watches the tail squeeze into a single point.

Bounded above, the sequence has nowhere to go but its highest allowed spot. That spot is the supremum, and the sequence converges to it. Cut to the tail and the remaining terms spread less and less. A sequence whose spread dies to 0 is a Cauchy sequence. Every convergent sequence is Cauchy.

For example, drop coins into a 🐷 piggy bank: half the goal, then half of what remains, and so on. The total creeps toward the goal without ever jumping to it. The coins added later also differ from each other less and less.`},tex:[String.raw`a_n = 1 - 2^{-n} \uparrow 1`,String.raw`\max_{m,k \geq N} \lvert a_m - a_k\rvert \to 0`],prerequisites:[`bolzano-weierstrass`],controls:[{kind:`slider`,key:`n`,label:{ko:`보이는 항 개수`,en:`Terms shown`},min:1,max:12,step:1,init:8},{kind:`slider`,key:`tailN`,label:{ko:`꼬리 시작 N`,en:`Tail start N`},min:1,max:10,step:1,init:4}]},{id:`limsup-liminf`,title:{ko:`상극한과 하극한`,en:`Lim sup and Lim inf`},order:16,summary:{ko:String.raw`수열의 꼬리만 보고 가장 높은 값과 가장 낮은 값을 살핍니다. 둘이 어디에 안착하는지 확인하는 장면입니다.

꼬리의 상한은 점점 내려오고 하한은 점점 올라옵니다. 위쪽 안착점이 상극한, 아래쪽이 하극한입니다. 두 값이 만나면 극한이 존재합니다. 진동하는 수열에서는 둘이 영원히 떨어져 있습니다. 정확한 정의는 아래 식과 같습니다.

예를 들면, 🌡️ 온도계로 매일 최고 온도와 최저 온도를 적습니다. 날이 갈수록 최고값은 한 값 근처로, 최저값은 다른 값 근처로 모입니다. 두 값이 같아지면 날씨가 한 온도로 정해진 셈입니다.`,en:String.raw`Watch only the tails of a sequence and track their highest and lowest values. The scene checks where the two of them settle.

The supremum of the tails keeps stepping down, and the infimum keeps stepping up. The upper settling point is the lim sup, the lower one the lim inf. If the two meet, the limit exists. An oscillating sequence keeps them apart forever. The precise definitions are the formulas below.

For example, record each day's high and low temperature with a 🌡️ thermometer. As days pass, the highs gather near one value and the lows near another. If the two values coincide, the weather has settled on a single temperature.`},tex:[String.raw`\limsup a_n = \lim_{N\to\infty}\sup_{n\ge N} a_n`,String.raw`\liminf a_n = \lim_{N\to\infty}\inf_{n\ge N} a_n`,String.raw`\limsup a_n = \liminf a_n \iff \lim a_n \text{ exists}`],prerequisites:[`monotone-cauchy`],controls:[{kind:`slider`,key:`n`,label:{ko:`항 개수`,en:`Terms shown`},min:2,max:60,step:1,init:24}]},{id:`stolz-cesaro`,title:{ko:`체자로 정리`,en:`Stolz–Cesàro Theorem`},order:17,summary:{ko:String.raw`전체 비율이 버거울 때 차분의 비율로 우회하는 장면입니다. 수열 버전의 로피탈 정리입니다.

한 걸음의 증가량끼리 비교하면 그 비율이 먼저 자리를 잡습니다. 전체 비율은 그 뒤를 천천히 따라갑니다. 분모 수열은 엄격히 증가하며 끝없이 커져야 합니다. 두 비율의 목적지는 같습니다. 대표 예의 극한은 아래 두 번째 식과 같습니다.

예를 들면, 🚗 자동차 여행에서 마지막 1분의 속도가 시속 60km로 안정됩니다. 그러면 전체 구간의 평균 속도도 결국 시속 60km 쪽으로 끌려갑니다.`,en:String.raw`When the full ratio is stubborn, this scene detours through the ratio of differences. It is the sequence version of l'Hôpital's rule.

Compare the growth of single steps, and that ratio settles first. The full ratio follows slowly from behind. The denominator must increase strictly and grow without bound. Both ratios share the same destination. The headline example's limit is the second formula below.

For example, on a 🚗 car trip the speed over the last minute settles at 60 km/h. Then the average speed over the whole trip gets dragged toward 60 km/h as well.`},tex:[String.raw`\lim \frac{a_{n+1}-a_n}{b_{n+1}-b_n} = L \implies \lim \frac{a_n}{b_n} = L`,String.raw`\lim_{n\to\infty}\frac{1^2+\cdots+n^2}{n^3} = \frac{1}{3}`],prerequisites:[`limsup-liminf`,`monotone-cauchy`],controls:[{kind:`slider`,key:`n`,label:{ko:`항 개수`,en:`Terms shown`},min:10,max:300,step:1,init:60}]},{id:`double-sequences`,title:{ko:`이중수열과 반복극한`,en:`Double Sequences and Iterated Limits`},order:18,summary:{ko:String.raw`이중수열을 보는 씬입니다. 격자에 찍힌 값 \(a_{m,n}\)을 보며, 행 방향 극한과 열 방향 극한이 어떻게 갈리는지 확인합니다.

이중극한은 두 인덱스가 함께 커질 때의 극한입니다. 반복극한은 한쪽을 먼저 보내고 나머지를 보냅니다. 순서를 바꾸면 답이 달라질 수 있습니다. 두 반복극한이 같아도 이중극한이 없을 수 있습니다.

예를 들면, 📋 표를 가로줄부터 읽는 것과 세로줄부터 읽는 것은 다릅니다. 읽는 순서를 바꾸면, 전혀 다른 결론에 닿을 수 있습니다.`,en:String.raw`This scene is about double sequences. Watch the values \(a_{m,n}\) on a grid, and see how the row-wise and column-wise limits split apart.

The double limit lets both indices grow together. An iterated limit sends one index first, then the other. Swapping the order can change the answer. And even when both iterated limits agree, the double limit may not exist.

For example, reading a 📋 table row by row is not the same as reading it column by column. Change the reading order, and you can land on a completely different conclusion.`},tex:[String.raw`a_{m,n} \to L \iff \forall \varepsilon > 0\ \exists N : m, n > N \implies |a_{m,n} - L| < \varepsilon`,String.raw`\lim_m \lim_n a_{m,n} \quad \text{vs} \quad \lim_n \lim_m a_{m,n}`],prerequisites:[`limsup-liminf`],controls:[{kind:`select`,key:`example`,label:{ko:`예제`,en:`Example`},options:[`ratio`,`difference`,`product`,`vanishing`],init:`ratio`},{kind:`slider`,key:`k`,label:{ko:`격자 크기 K`,en:`Grid size K`},min:4,max:24,step:1,init:12}]}]},{id:`continuity`,title:{ko:`연속함수`,en:`Continuity`},summary:{ko:`ε-δ로 연속성을 정의하고, 균등연속·중간값 정리·최대최소 정리까지 연속함수의 성질을 탐구합니다.`,en:`Continuity via ε-δ, uniform continuity, and the great theorems: the intermediate and extreme value theorems.`},sections:[{id:`continuity-basics`,title:{ko:`연속의 얼굴들`,en:`The Faces of Continuity`},sceneIds:[`epsdelta`,`continuity`,`thomae`,`continuity-equivalences`,`monotone-discontinuities`]},{id:`continuity-theorems`,title:{ko:`연속함수의 큰 정리`,en:`The Big Theorems of Continuous Functions`},sceneIds:[`uniform-continuity`,`ivt`,`evt`,`additive-functions`,`uniform`]}],scenes:[{id:`epsdelta`,title:{ko:`ε-δ 정의`,en:`The ε–δ Definition`},order:1,summary:{ko:String.raw`극한의 엄밀한 정의를 눈으로 확인하는 씬입니다. ε 띠와 δ 띠를 겹쳐 놓고, 약속이 정말 지켜지는지 격자로 검사합니다.

핵심은 순서입니다. 먼저 상대가 오차 범위를 정합니다. 그다음 그에 맞는 입력 범위를 찾아야 합니다. 입력이 그 범위 안에 있으면, 출력은 오차 범위 안에 머뭅니다. 아래 식이 그 약속입니다. 여기 직선에서는 입력 범위를 오차 범위의 절반으로 잡으면 됩니다.

예를 들면, ⚽ 공을 📦 상자에 던져 넣는 놀이를 해보세요. 친구가 상자를 점점 작은 것으로 바꿔도 됩니다. 충분히 가까이 서면 매번 넣을 수 있습니다. 상자가 작을수록, 서는 자리는 더 가까워야 합니다.`,en:String.raw`This scene makes the limit definition visible. It stacks an ε-band over a δ-band and grid-checks that the promise really holds.

The order is the point. First, someone else picks the allowed error. Then you must find a matching input window. If the input stays in that window, the output stays in the error band. The formula below states the promise. For the line here, a window of half the error is enough.

For example, play at throwing a ⚽ ball into a 📦 box. Your friend may swap in a smaller and smaller box. Standing close enough, you can still make every throw. The smaller the box, the closer you must stand.`},tex:[String.raw`\forall\varepsilon > 0\ \exists\delta > 0:\ 0 < \lvert x - a\rvert < \delta \Rightarrow \lvert f(x) - L\rvert < \varepsilon`,String.raw`\lvert 2x - 2\rvert = 2\lvert x - 1\rvert`],prerequisites:[`epsilon-n`],controls:[{kind:`slider`,key:`epsilon`,label:{ko:`ε`,en:`ε`},min:.05,max:1,step:.05,init:.4}]},{id:`continuity`,title:{ko:`연속의 정의`,en:`The Definition of Continuity`},order:2,summary:{ko:String.raw`연속이란 무엇인지 확인하는 씬입니다. 점 a를 움직여 보고, 한 점의 값만 들어 올려 연속이 깨지는 모습도 봅니다.

연속의 조건은 단 하나입니다. 옆에서 다가간 높이와 그 점의 높이가 같아야 합니다. 한 점의 값만 바꿔도 이 일치는 깨집니다. 그래서 그래프가 그 점에서 끊깁니다.

예를 들면, ✏️ 연필을 종이에서 떼지 않고 그래프를 그어 보세요. 한 번에 그려지면 연속입니다. 한 점만 위로 튀어 있으면, 거기서 연필을 들어 옮겨야 합니다.`,en:String.raw`This scene shows what continuity means at a point. Move the point a, then lift one value and watch continuity break.

There is one condition. The height you approach must equal the height at the point. Changing a single value breaks that agreement. The graph then tears at that point.

For example, draw the graph with a ✏️ pencil without lifting it. If one stroke suffices, the function is continuous. If one point floats above the rest, you must lift the pencil there.`},tex:[String.raw`f \text{ continuous at } a \iff \lim_{x \to a} f(x) = f(a)`,String.raw`g(a) = a^2 + 1 \neq a^2 = \lim_{x \to a} g(x)`],prerequisites:[`epsdelta`],controls:[{kind:`slider`,key:`a`,label:{ko:`점 a`,en:`Point a`},min:-2,max:2,step:.1,init:1},{kind:`toggle`,key:`broken`,label:{ko:`한 점 깨뜨리기`,en:`Break one point`},init:!1}]},{id:`thomae`,title:{ko:`토매 함수`,en:`Thomae's Function`},order:3,summary:{ko:String.raw`팝콘처럼 점이 튀는 토매 함수를 보는 씬입니다. 유리수에서는 점이 솟고, 무리수에서는 바닥에 붙습니다.

높이 솟는 점은 드뭅니다. 어떤 높이를 정해도, 그 높이에 닿는 점은 유한 개뿐입니다. 그래서 무리수 근처에서는 높은 점을 피해 좁은 구간을 잡을 수 있습니다. 무리수에서는 연속이고 유리수에서는 불연속인 이유입니다.

예를 들면, 🍬 사탕 자루를 떠올려 보세요. 큰 사탕은 몇 개뿐이라 금방 셀 수 있습니다. 작은 사탕만 모인 구석은 거의 평평합니다. 무리수 근처가 그렇습니다. 큰 점프가 없어서 함수가 조용히 붙어 있습니다.`,en:String.raw`This scene shows Thomae's function, a popcorn of dots. Dots jump up at rationals and stick to the floor at irrationals.

Tall dots are rare. Fix any height: only finitely many dots reach it. So near an irrational you can choose a window avoiding tall dots. That is why it is continuous at irrationals only.

For example, picture a jar of 🍬 candies. Only a few are big, and you can count them. A corner with only tiny candies is nearly flat. Neighborhoods of irrationals look like that: no big jumps, so the function stays quiet.`},tex:[String.raw`f(x) = \begin{cases} 1/q & x = p/q \text{ in lowest terms} \\ 0 & x \notin \mathbb{Q} \end{cases}`,String.raw`\{x : f(x) \ge \varepsilon\} = \{p/q : q \le 1/\varepsilon\} \text{ finite}`],prerequisites:[`continuity`],controls:[{kind:`slider`,key:`Q`,label:{ko:`최대 분모 Q`,en:`Max denominator Q`},min:1,max:30,step:1,init:12},{kind:`slider`,key:`eps`,label:{ko:`ε`,en:`ε`},min:.02,max:.5,step:.01,init:.2},{kind:`slider`,key:`center`,label:{ko:`중심 x₀`,en:`Center x₀`},min:0,max:1,step:.01,init:.5},{kind:`slider`,key:`zoom`,label:{ko:`확대 폭`,en:`Zoom width`},min:.02,max:.5,step:.01,init:.2}]},{id:`continuity-equivalences`,title:{ko:`연속성의 세 가지 얼굴`,en:`Three Faces of Continuity`},order:4,summary:{ko:String.raw`연속성을 세 가지 방법으로 확인하는 씬입니다. ε-δ 논법, 수열 판정, 열린집합의 역상을 나란히 비교합니다.

세 얼굴은 같은 말을 합니다. 띠로 재든, 수열로 따라가든, 열린집합을 당겨 보든 판정은 같습니다. 매끄러운 곡선은 셋 다 통과합니다. 점프 함수는 셋 다 같은 자리에서 걸립니다.

예를 들면, 🪞 거울 속 모습을 세 방향에서 본다고 해보세요. 앞에서 봐도, 옆에서 봐도 같은 물체입니다. 연속성도 같습니다. 확인하는 방법이 달라도, 묻는 것은 하나입니다.`,en:String.raw`This scene checks continuity in three different ways. The ε–δ argument, the sequential test, and preimages of open sets stand side by side.

The three faces say the same thing. Bands, sequences, or pulled-back open sets all give the same verdict. A smooth curve passes all three. A jump function fails all three at the same spot.

For example, look at one object in a 🪞 mirror from three sides. Front or side, it is the same object. Continuity is like that: many checks, one question.`},tex:[String.raw`\forall\varepsilon>0\ \exists\delta>0:\ \lvert x-x_0\rvert<\delta \Rightarrow \lvert f(x)-f(x_0)\rvert<\varepsilon`,String.raw`x_n \to x_0 \Rightarrow f(x_n) \to f(x_0)`,String.raw`f \text{ continuous} \iff f^{-1}(V) \text{ open for every open } V`],prerequisites:[`continuity`],controls:[{kind:`select`,key:`fn`,label:{ko:`함수`,en:`Function`},options:[`square`,`jump`],init:`square`},{kind:`select`,key:`view`,label:{ko:`관점`,en:`View`},options:[`epsdelta`,`sequential`,`preimage`],init:`epsdelta`},{kind:`slider`,key:`eps`,label:{ko:`ε`,en:`ε`},min:.05,max:1,step:.05,init:.3}]},{id:`monotone-discontinuities`,title:{ko:`단조함수의 불연속점`,en:`Discontinuities of Monotone Functions`},order:5,summary:{ko:String.raw`단조함수의 불연속점을 보는 씬입니다. 한 방향으로만 오르는 함수라, 끊기는 곳은 전부 점프뿐입니다.

큰 점프는 몇 개 없습니다. 전체 오름폭이 정해져 있기 때문입니다. 점프 크기에 문턱을 걸면, 문턱을 넘는 점은 유한 개뿐입니다. 문턱을 계속 낮춰 세어 가면, 불연속점은 셀 수 있는 개수만 나옵니다.

예를 들면, 🪜 계단 전체 높이가 3m라고 해보세요. 30cm가 넘는 단은 아홉 개를 넘지 않습니다. 3cm짜리 단까지 세도 사정은 같습니다. 단은 많아도 하나씩 셀 수 있습니다.`,en:String.raw`This scene inspects the discontinuities of a monotone function. It only ever climbs, so every break is a jump.

Big jumps are few. The total climb is fixed, and that bounds them. Set a threshold: only finitely many jumps exceed it. Lowering the threshold step by step counts all discontinuities.

For example, take a 🪜 staircase three meters tall in total. Steps higher than 30 cm number at most nine. Counting steps down to 3 cm changes nothing: many steps, still countable one by one.`},tex:[String.raw`f(x-) = \sup_{t<x} f(t), \qquad f(x+) = \inf_{t>x} f(t)`,String.raw`\#\{x : f(x+) - f(x-) > 1/n\} \le n\,(f(b) - f(a))`],prerequisites:[`continuity`],controls:[{kind:`slider`,key:`terms`,label:{ko:`유리수 점프 수`,en:`Rational jumps`},min:1,max:60,step:1,init:24},{kind:`slider`,key:`n`,label:{ko:`임계값 분모 n (1/n)`,en:`Threshold denominator n (1/n)`},min:1,max:32,step:1,init:4}]},{id:`uniform-continuity`,title:{ko:`균등연속`,en:`Uniform Continuity`},order:6,summary:{ko:String.raw`균등연속을 확인하는 씬입니다. 점 x를 옮기며, 필요한 δ가 점마다 어떻게 달라지는지 봅니다.

일반 연속에서는 δ가 점마다 달라도 됩니다. 균등연속에서는 δ 하나가 모든 점에서 통해야 합니다. 곡선이 가팔라지는 곳에서는 δ가 자꾸 작아집니다. 끝없이 가팔라지면, 전체를 감당할 δ는 없습니다.

예를 들면, 반 친구 전원이 하나의 📏 자를 나눠 쓴다고 해보세요. 누구 차례든 그 자로 재야 합니다. 한 명에게라도 자가 너무 짧으면, 그 차례에서 측정이 틀어집니다.`,en:String.raw`This scene tests uniform continuity. Slide the point x and watch how the δ it needs changes from point to point.

Ordinary continuity lets δ depend on the point. Uniform continuity demands one δ working everywhere. Where the curve steepens, the needed δ keeps shrinking. If it steepens forever, no single δ can cover everything.

For example, imagine a whole class sharing one 📏 ruler. Everyone must measure with that same ruler. If it is too short for even one person's turn, the measurement fails there.`},tex:[String.raw`\forall\varepsilon > 0\ \exists\delta > 0:\ \lvert x - y\rvert < \delta \Rightarrow \lvert f(x) - f(y)\rvert < \varepsilon`,String.raw`\delta = \sqrt{x^2+\varepsilon} - \lvert x\rvert`,String.raw`\delta = \varepsilon / 2`],prerequisites:[`continuity`],controls:[{kind:`select`,key:`fn`,label:{ko:`함수`,en:`Function`},options:[`square`,`linear`],init:`square`},{kind:`slider`,key:`x`,label:{ko:`점 x`,en:`Point x`},min:0,max:4,step:.1,init:2},{kind:`slider`,key:`eps`,label:{ko:`ε`,en:`ε`},min:.1,max:2,step:.1,init:.5}]},{id:`ivt`,title:{ko:`중간값 정리`,en:`You Can't Climb Without Crossing Every Height`},order:7,summary:{ko:String.raw`중간값 정리를 확인하는 씬입니다. 목표 높이를 움직이며, 그래프가 그 높이를 건너는 점을 찾습니다.

끊기지 않은 길은 중간을 건너뛸 수 없습니다. 낮은 곳에서 높은 곳으로 가면, 사이 높이를 어딘가에서 반드시 지납니다. 그래프가 끊기면 이 약속은 깨집니다.

예를 들면, 🌡️ 온도계 수은주를 보세요. 아침 10도에서 낮 20도로 오르는 동안, 15도를 반드시 지납니다. 수은주는 순간이동을 하지 않으니까요.`,en:String.raw`This scene checks the intermediate value theorem. Move the target height and find where the graph crosses it.

An unbroken path cannot skip the middle. Going from low to high, it must pass every height between. If the graph breaks, the promise fails.

For example, watch the column of a 🌡️ thermometer. Rising from 10° in the morning to 20° at noon, it must pass 15°. The column never teleports.`},tex:[String.raw`f(a)<c<f(b)\Rightarrow\exists\,\xi\in(a,b):f(\xi)=c`],controls:[{kind:`select`,key:`fn`,label:{ko:`함수`,en:`Function`},options:[`cubic`,`sine`],init:`cubic`},{kind:`slider`,key:`t`,label:{ko:`목표 높이 (0–100%)`,en:`Target level (0–100%)`},min:0,max:100,step:1,init:50}]},{id:`evt`,title:{ko:`최댓값 정리`,en:`The Extreme Value Theorem`},order:8,summary:{ko:String.raw`최댓값 정리를 확인하는 씬입니다. 닫힌 구간에서는 최댓값에 닿고, 열린 구간과 불연속인 경우에는 왜 못 닿는지도 봅니다.

조건은 두 가지입니다. 구간이 닫혀 있어야 하고, 그래프가 끊기지 않아야 합니다. 하나라도 빠지면 가장 높은 점에 다가만 가고 닿지 못할 수 있습니다. 그래서 두 조건이 모두 필요합니다.

예를 들면, 🧑 등산객이 산길을 따라 정상으로 간다고 해보세요. 길이 끝까지 이어져 있으면, 가장 높은 곳에 발을 딛는 순간이 옵니다. 정상 직전에서 길이 끊기면, 아무리 가까워도 닿지 못합니다.`,en:String.raw`This scene checks the extreme value theorem. On a closed interval the maximum is attained; open intervals and breaks show why it can fail.

Two conditions are needed. The interval must be closed, and the graph must be unbroken. Drop either one, and the highest point may only be approached, never reached. That is why both hypotheses matter.

For example, picture a 🧑 hiker walking a trail to the summit. If the trail runs all the way, some step lands on the highest point. If the trail breaks just before it, the hiker gets close but never arrives.`},tex:[String.raw`f \text{ continuous on } [a,b] \Rightarrow \exists\, x_{\max}, x_{\min}`,String.raw`f(x) = x^3 - 3x,\quad f(-1) = f(2) = 2,\ f(-2) = f(1) = -2`],prerequisites:[`ivt`],controls:[{kind:`select`,key:`mode`,label:{ko:`모드`,en:`Mode`},options:[`closed`,`open-interval`,`discontinuous`],init:`closed`}]},{id:`additive-functions`,title:{ko:`덧셈 함수와 하멜 기저`,en:`Additive Functions and the Hamel Basis`},order:9,summary:{ko:String.raw`합을 그대로 두는 함수가 어디까지 자유로운지 봅니다. 유리수에서는 완전히 고정되고, 무리수에서는 값이 풀려납니다.

덧셈 함수는 \(f(x + y) = f(x) + f(y)\)를 만족합니다. 유리수에서는 \(f(q) = qf(1)\)이라 자유가 없습니다. 하지만 실수를 유리수 위의 벡터공간으로 보면 \(1\)과 \(\sqrt{2}\)는 독립이라, \(f(\sqrt{2})\)는 아무 값으로나 정할 수 있습니다. 그 자유가 하멜 기저입니다.

예를 들면, 📐 정사각형의 한 변이 1이면 대각선은 \(\sqrt{2}\)입니다. 변의 길이만 알아서는 대각선에 매길 값을 정할 수 없습니다. 대각선은 변과 독립인 새 방향이기 때문입니다. 연속이라는 조건을 거는 순간 이 자유는 사라지고 직선만 남습니다.`,en:String.raw`See how free a function that preserves addition can be. On the rationals it is completely pinned; at irrationals its values come loose.

An additive function obeys \(f(x + y) = f(x) + f(y)\). On the rationals \(f(q) = qf(1)\) leaves no freedom. But viewing the reals as a vector space over the rationals, \(1\) and \(\sqrt{2}\) are independent, so \(f(\sqrt{2})\) may be chosen as anything. That freedom is the Hamel basis.

For example, a 📐 square with side 1 has diagonal \(\sqrt{2}\). Knowing only the side pins nothing about the value assigned to the diagonal, because the diagonal is a new, independent direction. Impose continuity and the freedom vanishes, leaving only a straight line.`},tex:[String.raw`f(x + y) = f(x) + f(y), \qquad f(q) = qf(1) \ \ (q \in \mathbb{Q})`,String.raw`f(a + b\sqrt{2}) = a + bt, \qquad t = f(\sqrt{2}) \text{ is free}`],prerequisites:[`continuity`],controls:[{kind:`slider`,key:`t`,label:{ko:`f(√2) = t`,en:`f(√2) = t`},min:-2.5,max:2.5,step:.01,init:1.41}]},{id:`uniform`,title:{ko:`균등수렴 vs 점별수렴`,en:`When the Limit Breaks`},order:10,summary:{ko:String.raw`점별수렴과 균등수렴의 차이를 보는 씬입니다. 거듭제곱 곡선들이 극한에서 어떻게 끊기는지 확인합니다.

점별수렴은 점마다 따로 기다리는 것입니다. 균등수렴은 전 구간이 한꺼번에 다가가는 것입니다. 한 점이라도 끝까지 버티면 균등수렴이 아닙니다. 그래서 연속인 곡선들의 극한이 끊길 수 있습니다.

예를 들면, 🧑 친구들이 한 줄로 서서 동시에 앉는다고 해보세요. 전원이 앉아야 끝난 것입니다. 한 명만 끝까지 서 있으면, 줄 전체는 아직 다 앉지 않은 셈입니다.`,en:String.raw`This scene separates pointwise from uniform convergence. Watch the power curves break in the limit.

Pointwise convergence waits at each point separately. Uniform convergence moves the whole interval at once. If even one point holds out forever, convergence is not uniform. That is how a limit of continuous curves can break.

For example, picture 🧑 classmates in a row sitting down together. It counts as done only when everyone is seated. If one classmate stays standing, the row as a whole is not finished.`},tex:[String.raw`f_n(x)=x^n\to f(x)=\begin{cases}0&x<1\\1&x=1\end{cases}`,String.raw`\sup_{[0,1]}|f_n-f|=1\not\to 0`],controls:[{kind:`slider`,key:`n`,label:{ko:`n`,en:`n`},min:1,max:60,step:1,init:8},{kind:`slider`,key:`eps`,label:{ko:`ε`,en:`ε`},min:.05,max:.5,step:.01,init:.2}]}]},{id:`topology`,title:{ko:`위상`,en:`Topology`},summary:{ko:`열린집합·콤팩트·완비성 — 실직선의 위상적 구조와 베어 범주 정리, 칸토어 집합을 다룹니다.`,en:`Open sets, compactness, completeness — the topology of the real line, the Baire category theorem, Cantor sets.`},sections:[{id:`open-connected`,title:{ko:`열린집합과 연결성`,en:`Open Sets and Connectedness`},sceneIds:[`opensets`,`clopen`,`connected`,`closure`]},{id:`compact-metric`,title:{ko:`컴팩트와 거리공간`,en:`Compactness and Metric Spaces`},sceneIds:[`compact`,`topologist-sine`,`peano-curve`,`metric-spaces`,`contraction`]},{id:`baire-cantor`,title:{ko:`베어와 칸토어`,en:`Baire and Cantor`},sceneIds:[`baire-category`,`baire-1`,`cantor`,`fat-cantor`,`cantor-function`]}],scenes:[{id:`opensets`,title:{ko:`열린집합과 닫힌집합`,en:`Open and Closed Sets`},order:1,summary:{ko:String.raw`열린집합이 무엇인지 확인하는 씬입니다. 점과 반지름을 움직이며, 작은 공이 집합 안에 쏙 들어가는지 봅니다.

열려 있다는 것은 경계에 붙은 점이 없다는 뜻입니다. 어느 점을 골라도, 그 점 둘레에 집합 안에 들어가는 작은 구간이 있습니다. 경계에 붙은 점에서는 아무리 작은 구간도 밖으로 삐져나갑니다.

예를 들면, 마당 한가운데서 ⚽ 공을 차 보세요. 조금 세게 차도 공은 아직 마당 안입니다. 담장 바로 앞에서 차면, 한 번에 밖으로 나갑니다. 가운데 점과 경계 점의 차이가 그렇습니다.`,en:String.raw`This scene shows what an open set is. Move the point and the radius, and check whether the small ball fits inside.

Open means no point clings to the boundary. Around every point there is a small interval lying inside the set. At a boundary point, every interval, however small, pokes outside.

For example, kick a ⚽ ball in the middle of a yard. A gentle kick keeps it inside. Kick from right at the fence, and it flies out at once. That is the difference between an interior point and a boundary point.`},tex:[String.raw`U \text{ open } \iff \forall x \in U\ \exists \varepsilon > 0 : (x - \varepsilon, x + \varepsilon) \subseteq U`,String.raw`F \text{ closed } \iff F^c \text{ open}`],prerequisites:[`continuity`],controls:[{kind:`select`,key:`set`,label:{ko:`집합 S`,en:`Set S`},options:[`open`,`closed`,`half`,`singleton`],init:`open`},{kind:`slider`,key:`x`,label:{ko:`점 x`,en:`Point x`},min:-.3,max:1.3,step:.05,init:.5},{kind:`slider`,key:`eps`,label:{ko:`반지름 ε`,en:`Radius ε`},min:.05,max:.6,step:.05,init:.2}]},{id:`clopen`,title:{ko:`Clopen 집합`,en:`Clopen Sets`},order:2,summary:{ko:String.raw`열려 있으면서 닫혀 있는 집합, clopen을 보는 씬입니다. 같은 집합도 어떤 공간 안에 있느냐에 따라 운명이 달라집니다.

실수 전체에서는 빈 집합과 전체뿐입니다. 어딘가에 경계가 생기기 때문입니다. 그런데 공간이 두 조각으로 갈라져 있으면, 한 조각은 경계에 닿지 않습니다. 그 조각은 열려 있으면서 닫혀 있습니다.

예를 들면, 멀리 떨어진 🏠 집 두 채 중 한 채만 보세요. 그 집만으로 이루어진 세상에서는, 그 집이 독립된 구역이 됩니다. 열려 있기도 하고 닫혀 있기도 한 것입니다.`,en:String.raw`This scene is about sets both open and closed: clopen sets. The same set changes its fate with the space it lives in.

On the whole real line, only the empty set and the line itself qualify. A boundary always appears somewhere. But if the space splits into two separate pieces, one piece touches no boundary. That piece is both open and closed.

For example, take one of two far-apart 🏠 houses. In a world made of that house alone, it forms its own separate region. It is open, and it is closed.`},tex:[String.raw`A \text{ clopen in } X \iff A \text{ open in } X \text{ and closed in } X`,String.raw`[0,1] = \bigl([0,1]\cup[2,3]\bigr) \cap (-0.5, 1.5) = \bigl([0,1]\cup[2,3]\bigr) \cap [-0.5, 1.5]`],prerequisites:[`opensets`],controls:[{kind:`select`,key:`case`,label:{ko:`경우`,en:`Case`},options:[`open-interval`,`closed-interval`,`clopen-pieces`,`clopen-gap`],init:`clopen-pieces`},{kind:`slider`,key:`x`,label:{ko:`탐침 x`,en:`Probe x`},min:-.6,max:3.6,step:.01,init:.5},{kind:`slider`,key:`eps`,label:{ko:`반지름 ε`,en:`Radius ε`},min:.01,max:2,step:.01,init:.2}]},{id:`connected`,title:{ko:`연결집합`,en:`Connected Sets`},order:3,summary:{ko:String.raw`연결집합을 보는 씬입니다. 집합을 서로 닿지 않는 두 열린 조각으로 가를 수 있는지, 절단점을 움직이며 확인합니다.

갈라지지 않는 집합이 연결집합입니다. 구간은 어디를 잘라도 잘린 점이 어느 쪽에도 붙지 않아 갈라지지 않습니다. 멀리 떨어진 두 조각이나, 유리수처럼 틈이 촘촘한 집합은 그 틈에 절단을 넣으면 깔끔하게 갈라집니다.

예를 들면, 🧩 퍼즐 한 판을 보세요. 조각들이 서로 맞물려 있으면 한 판 그대로입니다. 두 무더기로 완전히 떨어져 있으면, 이미 갈라진 것입니다.`,en:String.raw`This scene is about connected sets. Move the cut point and check whether the set splits into two open pieces that never touch.

A set that cannot be split is connected. An interval never splits: wherever you cut, the cut point itself belongs to neither side. Two far-apart pieces, or the rationals with their dense gaps, split cleanly when the cut lands in a gap.

For example, look at one 🧩 jigsaw puzzle. While the pieces interlock, it is a single board. Lying in two completely separate piles, it is already split apart.`},tex:[String.raw`X = U \cup V,\ U \cap V = \emptyset,\ U, V \text{ open in } X,\ U, V \neq \emptyset \implies X \text{ disconnected}`,String.raw`\mathbb{Q} \cap [0,1] = \{q \in \mathbb{Q} : q < \sqrt{2}/2\} \cup \{q \in \mathbb{Q} : q > \sqrt{2}/2\}`],prerequisites:[`clopen`],controls:[{kind:`select`,key:`case`,label:{ko:`경우`,en:`Case`},options:[`interval`,`two-pieces`,`rationals`],init:`interval`},{kind:`slider`,key:`t`,label:{ko:`절단점 t`,en:`Cut point t`},min:-.2,max:3.2,step:.01,init:1.5}]},{id:`closure`,title:{ko:`폐포와 유계`,en:`Closure and Boundedness`},order:4,summary:{ko:String.raw`집합의 폐포를 보는 씬입니다. 빠져나간 극한점을 모두 붙이면 어떻게 닫히는지 확인합니다.

폐포는 집합이 닿으려던 점까지 품은 것입니다. 아무리 가까이 가도 닿지 않던 점이 있으면, 그 점을 붙여야 닫힙니다. 이미 모든 극한점을 품은 집합은 자기 폐포와 같습니다. 여기에 유계까지 더해지면 컴팩트와 이어집니다.

예를 들면, 📦 상자에 물건을 넣고 뚜껑을 닫아 보세요. 뚜껑까지 닫아야 상자가 완성됩니다. 폐포는 집합에 그 뚜껑에 해당하는 경계점을 붙이는 일입니다.`,en:String.raw`This scene builds the closure of a set. Watch what happens when every escaped limit point is pulled back in.

The closure contains every point the set was reaching for. If some point is approached but never touched, closing means adding it. A set already holding all its limit points equals its closure. Add boundedness, and compactness is near.

For example, fill a 📦 box and put the lid on. Only with the lid is the box complete. Closure is like that lid: it adds the boundary points to the set.`},tex:[String.raw`x \in \overline{A} \iff \forall \varepsilon > 0 : (x - \varepsilon, x + \varepsilon) \cap A \neq \varnothing`,String.raw`A \text{ closed } \iff \overline{A} = A, \qquad A \text{ bounded } \iff \exists M : \lvert x\rvert \leq M\ \forall x \in A`],prerequisites:[`opensets`],controls:[{kind:`select`,key:`kind`,label:{ko:`집합 A`,en:`Set A`},options:[`open`,`halfclosed`,`reciprocal`],init:`open`},{kind:`slider`,key:`m`,label:{ko:`경계 M`,en:`Bound M`},min:.5,max:2.5,step:.1,init:1.5}]},{id:`compact`,title:{ko:`컴팩트 집합`,en:`Compact Sets`},order:5,summary:{ko:String.raw`컴팩트 집합을 열린 커버로 확인하는 씬입니다. 구간을 덮는 조각들 중 유한 개만으로 충분한지 봅니다.

컴팩트는 닫힘과 유계의 짝입니다. 끝이 열려 있으면 그 틈 근처에서 조각이 끝없이 필요합니다. 끝없이 뻗어 있어도 마찬가지입니다. 두 조건이 갖춰지면, 어떤 덮개든 유한 개로 줄일 수 있습니다.

예를 들면, 📚 책으로 책상 위를 빈틈없이 덮어 보세요. 책상이 유한한 크기라 책 몇 권이면 충분합니다. 끝없이 긴 책상이라면, 책이 아무리 많아도 모자랍니다.`,en:String.raw`This scene tests compactness with open covers. See whether finitely many covering pieces always suffice.

Compact means closed and bounded together. An open end needs endless pieces near the gap. An endless stretch fails the same way. With both conditions, any cover shrinks to finitely many pieces.

For example, cover a desk completely with 📚 books. A finite desk needs only a few books. An endless desk would defeat any pile, however large.`},tex:[String.raw`K \text{ compact } \iff K \text{ closed and bounded}`,String.raw`\forall\, \mathcal{U} \text{ open cover of } K\; \exists\, U_1,\dots,U_n \in \mathcal{U} : K \subseteq \bigcup_{k=1}^{n} U_k`,String.raw`(a_n) \subset K \Rightarrow \exists\, (a_{n_k}) \to x \in K`],prerequisites:[`closure`],controls:[{kind:`select`,key:`set`,label:{ko:`집합 K`,en:`Set K`},options:[`closed`,`halfopen`,`unbounded`],init:`closed`},{kind:`slider`,key:`step`,label:{ko:`유한 부분커버: 앞 k개`,en:`Finite subcover: first k`},min:0,max:8,step:1,init:6}]},{id:`topologist-sine`,title:{ko:`위상수학자의 사인 곡선`,en:`Topologist's Sine Curve`},order:6,summary:{ko:String.raw`위상수학자의 사인 곡선을 보는 씬입니다. 0 근처에서 끝없이 진동하는 곡선과, 거기에 붙는 극한 선분을 확인합니다.

곡선은 0에 다가갈수록 더 빠르게 흔들립니다. 그래서 반대쪽 축 위의 선분 전체가 곡선에 붙습니다. 붙은 도형은 하나로 이어져 있습니다. 하지만 선분에서 곡선으로 걸어가는 길은 없습니다. 이어져 있는 것과 길이 있는 것은 다릅니다.

예를 들면, 🧵 줄 한쪽 끝을 점점 빠르게 흔들어 보세요. 흔들리는 끝은 흐릿한 띠처럼 보입니다. 띠는 눈에 보여도, 띠의 한 점에서 줄의 특정 부분으로 걸어갈 수는 없습니다.`,en:String.raw`This scene draws the topologist's sine curve. Watch it oscillate endlessly near zero, and the limit segment it sticks to.

The closer to zero, the faster the curve wiggles. So a whole segment on the axis sticks to the curve. The combined figure is in one piece. Yet no path walks from the segment into the curve. Being in one piece and having a path are different things.

For example, shake one end of a 🧵 string faster and faster. The shaking end blurs into a band. The band is visible, but you cannot walk from one point of it onto a chosen part of the string.`},tex:[String.raw`S = \{(x, \sin(1/x)) : x > 0\}, \quad \overline{S} = S \cup \bigl(\{0\} \times [-1,1]\bigr)`,String.raw`\overline{S} \text{ connected},\quad \overline{S} \text{ not path-connected}`],prerequisites:[`compact`,`closure`],controls:[{kind:`slider`,key:`xMin`,label:{ko:`왼쪽 끝 x`,en:`Left end x`},min:.005,max:1,step:.005,init:.05},{kind:`toggle`,key:`showSegment`,label:{ko:`극한 선분 표시`,en:`Show limit segment`},init:!0},{kind:`toggle`,key:`showSeq`,label:{ko:`수열 표시`,en:`Show sequences`},init:!0}]},{id:`peano-curve`,title:{ko:`페아노 곡선`,en:`Peano Curve`},order:7,summary:{ko:String.raw`선 하나로 정사각형을 채우는 페아노 곡선을 보는 씬입니다. 근사 곡선이 단계마다 더 촘촘해지는 모습을 확인합니다.

곡선은 뱀처럼 접히며 빈틈을 메웁니다. 접는 횟수가 늘수록 곡선이 닿는 곳이 늘어납니다. 극한에서는 정사각형의 모든 점을 지납니다. 다만 같은 점을 두 번 지날 수밖에 없습니다. 그래서 단사인 채움은 불가능합니다.

예를 들면, ✏️ 연필을 떼지 않고 도화지 전체를 칠해 보세요. 지그재그로 촘촘히 오가면, 결국 모든 점에 연필이 닿습니다. 선 하나로 면 전체를 채우는 셈입니다.`,en:String.raw`This scene builds the Peano curve, one line filling a square. Watch the approximations grow denser at every stage.

The curve folds like a snake, filling the gaps. More folds mean more points touched. In the limit it passes through every point of the square. But it must visit some points twice. So no injective filling exists.

For example, color a whole sheet with a ✏️ pencil, never lifting it. Zigzag densely back and forth, and eventually every point is touched. One line fills an entire surface.`},tex:[String.raw`\gamma_n \to \gamma \text{ uniformly},\quad \gamma : [0,1] \to [0,1]^2 \text{ continuous and onto}`,String.raw`\text{No continuous bijection } [0,1] \to [0,1]^2 \text{ exists}`],prerequisites:[`topologist-sine`,`uniform`],controls:[{kind:`slider`,key:`order`,label:{ko:`차수 n`,en:`Order n`},min:1,max:4,step:1,init:2},{kind:`slider`,key:`t`,label:{ko:`매개변수 t`,en:`Parameter t`},min:0,max:1,step:.001,init:.5},{kind:`toggle`,key:`showGrid`,label:{ko:`격자 표시`,en:`Show grid`},init:!0}]},{id:`metric-spaces`,title:{ko:`거리공간`,en:`Metric Spaces`},order:8,summary:{ko:String.raw`거리공간의 씬입니다. 거리를 공리로 세우면 공의 모양이 거리에 따라 어떻게 달라지는지 비교합니다.

거리는 세 가지 규칙만 지키면 됩니다. 거리는 음수가 되지 않습니다. 양방향 거리는 같습니다. 돌아가는 길은 지름길보다 짧지 않습니다. 규칙은 같아도 재는 법이 다르면, 같은 반지름의 공도 모양이 달라집니다.

예를 들면, 📏 자로 두 점 사이를 재는 법을 바꿔 보세요. 곧바로 재면 원이 됩니다. 가로세로로만 재면 마름모가 됩니다. 반지름이 같아도 닿는 범위의 모양은 달라집니다.`,en:String.raw`This scene axiomatizes distance. Compare how the shape of a ball changes when the metric changes.

A metric obeys only three rules. Distances are never negative. The distance is the same both ways. A detour is never shorter than the direct way. Same rules, different measurement: balls of equal radius take different shapes.

For example, change how a 📏 ruler measures between two points. Measure straight, and you get a disk. Measure along grid lines only, and you get a diamond. Same radius, different reach.`},tex:[String.raw`d(x,y) \geq 0, \quad d(x,y) = 0 \iff x = y`,String.raw`d(x,y) = d(y,x), \quad d(x,z) \leq d(x,y) + d(y,z)`,String.raw`B(c, r) = \{x : d(x, c) < r\}`],prerequisites:[`closure`],controls:[{kind:`select`,key:`metric`,label:{ko:`거리`,en:`Metric`},options:[`euclid`,`discrete`,`maxnorm`],init:`euclid`},{kind:`slider`,key:`r`,label:{ko:`반지름 r`,en:`Radius r`},min:.2,max:2,step:.1,init:1}]},{id:`contraction`,title:{ko:`축소사상 원리`,en:`Contraction Mapping Principle`},order:9,summary:{ko:String.raw`축소사상 원리를 확인하는 씬입니다. 반복할수록 점들이 하나의 고정점으로 조여드는 모습을 봅니다.

축소사상은 모든 거리를 일정 비율로 줄입니다. 반복하면 점들이 서로에게 끌려갑니다. 시작점이 어디든 도착지는 하나입니다. 그런데 공간에 구멍이 있으면, 도착지가 그 구멍으로 빠질 수 있습니다.

예를 들면, 🗺️ 지도를 반으로 접고, 또 반으로 접어 보세요. 접을 때마다 종이는 작아지고 모든 점은 한 점으로 모입니다. 그 점이 고정점입니다. 종이 한가운데가 찢겨 있으면, 모여야 할 점이 사라집니다.`,en:String.raw`This scene runs the contraction mapping principle. Iterate and watch the points tighten onto one fixed point.

A contraction shrinks every distance by one fixed ratio. Iterating pulls all points toward each other. Every start leads to the same destination. But if the space has a hole, the destination can fall into it.

For example, fold a 🗺️ map in half, then in half again. Each fold shrinks the paper, and all points gather toward one. That point is the fixed point. Tear a hole in the middle, and the gathering point is gone.`},tex:[String.raw`d(Tx,Ty) \le q\,d(x,y), \quad 0 \le q < 1`,String.raw`d(x_n,x_m) \le \frac{q^n}{1-q}\,d(x_0,x_1), \qquad d(x_n,x^*) \le \frac{q^n}{1-q}\,d(x_1,x_0)`,String.raw`T(x) = x/2 \text{ on } (0,1]: \text{ contraction, no fixed point}`],prerequisites:[`metric-spaces`,`monotone-cauchy`],controls:[{kind:`select`,key:`map`,label:{ko:`사상 T`,en:`Map T`},options:[`affine`,`half`],init:`affine`},{kind:`slider`,key:`n`,label:{ko:`반복 횟수 n`,en:`Iterations n`},min:0,max:12,step:1,init:5},{kind:`slider`,key:`x0`,label:{ko:`시작점 x₀`,en:`Start x₀`},min:.1,max:3,step:.1,init:1}]},{id:`baire-category`,title:{ko:`베어 카테고리 정리`,en:`Baire Category Theorem`},order:10,summary:{ko:String.raw`베어 범주 정리를 중첩 구간으로 따라가는 씬입니다. 유리수를 하나씩 피해 가면서도 남는 점이 있음을 확인합니다.

구멍 많은 집합은 전체를 덮지 못합니다. 닫힌 구간을 점점 작게 골라도, 피할 점을 피해 갈 수 있습니다. 구간이 한 점으로 조여들면, 그 점은 어떤 구멍 집합에도 속하지 않습니다. 완비한 공간에는 늘 그런 점이 남습니다.

예를 들면, 📦 상자 안에 작은 상자를 넣고, 그 안에 더 작은 상자를 넣어 보세요. 아무리 작아져도 맨 안쪽에는 공간이 남습니다. 유리수를 피해 가며 상자를 골라도, 끝까지 남는 점이 있습니다.`,en:String.raw`This scene follows the Baire category theorem through nested intervals. Dodge the rationals one by one, and a point still remains.

Sets full of holes cannot cover everything. Choose smaller and smaller closed intervals, each dodging the next bad point. The intervals tighten onto one point belonging to no hole set. A complete space always keeps such a point.

For example, put a 📦 box inside a box, then a smaller one inside that. However small it gets, room remains at the center. Choosing the boxes to dodge rationals still leaves one point standing.`},tex:[String.raw`X = \bigcup_{n=1}^{\infty} E_n,\ \operatorname{int}(\overline{E_n}) = \varnothing \ \text{impossible if } X \text{ complete}`,String.raw`\overline{B}(x_{k+1}, r_{k+1}) \subseteq B(x_k, r_k) \setminus \overline{E_{k+1}},\ r_{k+1} < r_k/2 \ \Longrightarrow\ x \in \bigcap_k \overline{B}(x_k, r_k),\ x \notin E_k\ \forall k`],prerequisites:[`metric-spaces`,`contraction`],controls:[{kind:`slider`,key:`stage`,label:{ko:`단계`,en:`Stage`},min:1,max:14,step:1,init:6}]},{id:`baire-1`,title:{ko:`베어 1급 함수`,en:`Baire Class 1 Functions`},order:11,summary:{ko:String.raw`베어 1급 함수를 보는 씬입니다. 연속함수들의 점별 극한으로 토매 함수를 쌓아 올립니다.

연속함수만 쌓아도 끊기는 함수가 나올 수 있습니다. 그래도 아무 데서나 끊기지는 않습니다. 연속인 점이 반드시 촘촘히 있습니다. 극한으로 만든 함수도 나름의 규칙을 지키는 셈입니다.

예를 들면, 🧵 줄을 구부려 점점 뾰족한 산 모양을 만들어 보세요. 매 단계의 줄은 끊기지 않았습니다. 그런데 다 구부린 끝에는, 가시처럼 뾰족한 점들이 줄줄이 남습니다.`,en:String.raw`This scene builds a Baire class 1 function. Thomae's function rises as a pointwise limit of continuous tent sums.

Stacking only continuous functions can still produce breaks. But the breaks cannot be everywhere. Points of continuity are always dense. Even a limit-made function keeps this much order.

For example, bend a 🧵 string into ever sharper mountain shapes. At every stage the string is unbroken. In the end, a row of thorn-like spikes remains.`},tex:[String.raw`f_n(x) = \sum_{\substack{1 \le q \le n \\ \gcd(p,q)=1}} \frac{1}{q}\,\mathrm{tri}\!\left(n^3\left(x - \tfrac{p}{q}\right)\right) \to T(x)`,String.raw`\text{Baire-1 } f \ \Longrightarrow\ \text{continuity points} \supseteq \text{dense } G_\delta`],prerequisites:[`baire-category`,`continuity`],controls:[{kind:`slider`,key:`N`,label:{ko:`근사 단계 N`,en:`Approximation stage N`},min:2,max:12,step:1,init:5}]},{id:`cantor`,title:{ko:`칸토어 집합`,en:`Length Zero, Points Uncountable`},order:12,summary:{ko:String.raw`칸토어 집합을 만드는 씬입니다. 가운데 3분의 1을 계속 지우면, 길이는 0이 되지만 점은 셀 수 없이 많이 남습니다.

지울 때마다 전체 길이는 3분의 2로 줄어듭니다. 끝없이 지우면 길이는 0이 됩니다. 그런데 한 번도 잘리지 않는 점이 있습니다. 그런 점이 실수만큼이나 많습니다.

예를 들면, 🍰 케이크의 가운데 3분의 1을 덜어 내 보세요. 남은 조각마다 또 가운데를 덜어 냅니다. 케이크는 거의 사라집니다. 그래도 한 번도 잘리지 않은 자리는 셀 수 없이 많이 남습니다.`,en:String.raw`This scene builds the Cantor set. Keep deleting middle thirds: the length dies to zero, yet uncountably many points survive.

Each deletion shrinks the total length to two-thirds. After infinitely many rounds, the length is zero. But some points are never cut away. There are as many of them as there are real numbers.

For example, cut the middle third out of a 🍰 cake. Then cut the middle of each remaining piece, again and again. The cake almost vanishes. Still, uncountably many spots were never touched by the knife.`},tex:[String.raw`|C_n|=\left(\frac{2}{3}\right)^n\to 0`,String.raw`|C|=|\mathbb{R}|`],controls:[{kind:`slider`,key:`stage`,label:{ko:`단계 n`,en:`Stage n`},min:0,max:8,step:1,init:4}]},{id:`fat-cantor`,title:{ko:`팻 칸토어 집합`,en:`The Fat Cantor Set`},order:13,summary:{ko:String.raw`팻 칸토어 집합을 보는 씬입니다. 가운데를 조금씩만 파내면, 길이가 절반이나 남는 집합이 됩니다.

파내는 양을 줄이면 사정은 달라집니다. 남는 집합은 여전히 구멍이 촘촘하고 내부가 비어 있습니다. 그런데 길이는 절반으로 수렴합니다. 길이라는 크기와 위상적인 크기는 서로 독립입니다.

예를 들면, 🍰 케이크를 파내되 이번에는 조금씩만 파 보세요. 구멍은 곳곳에 나지만, 먹을 부분은 절반이나 남습니다. 텅 빈 듯 보여도 양은 남아 있는 셈입니다.`,en:String.raw`This scene builds the fat Cantor set. Dig out only a little at each stage, and half the length survives.

Digging less changes the outcome. The remaining set is still full of holes, with empty interior. Yet its length converges to one half. Size by length and size by topology are independent.

For example, scoop a 🍰 cake again, but take only small bites. Holes appear everywhere, yet half the cake remains to eat. It looks empty, but the amount is real.`},tex:[String.raw`\sum_{n\ge 1} 2^{n-1} 4^{-n} = \frac12`,String.raw`m(C) = \frac12,\quad \mathrm{int}\,C = \varnothing`],prerequisites:[`cantor`],controls:[{kind:`slider`,key:`stage`,label:{ko:`단계 n`,en:`Stage n`},min:0,max:7,step:1,init:4}]},{id:`cantor-function`,title:{ko:`칸토어 함수`,en:`The Cantor Function`},order:14,summary:{ko:String.raw`칸토어 함수, 악마의 계단을 보는 씬입니다. 연속이고 계속 오르는데, 거의 모든 구간에서 평평합니다.

이 함수는 칸토어 집합의 틈마다 멈춰 섭니다. 그래서 거의 모든 점에서 기울기가 0입니다. 그런데도 전체로는 0에서 1까지 오릅니다. 오른 양과 기울기의 합이 어긋나는, 이상한 함수입니다.

예를 들면, 🪜 계단을 오르는데 평평한 계단참이 끝없이 긴 계단입니다. 거의 모든 시간을 쉬면서 가지만, 그래도 꼭대기에는 닿습니다. 칸토어 함수가 딱 그렇습니다.`,en:String.raw`This scene climbs the Cantor function, the Devil's staircase. It is continuous and always rising, yet flat on almost every interval.

The function pauses on every gap of the Cantor set. So its slope is zero at almost every point. And still it climbs from 0 to 1 overall. The total climb disagrees with the sum of slopes.

For example, climb a 🪜 staircase whose landings are endlessly long. You rest almost the whole way, yet you still reach the top. The Cantor function does exactly that.`},tex:[String.raw`f(x) = \sum b_k 2^{-k},\quad b_k \in \{0,1\}\ \text{from the ternary expansion}`,String.raw`f(1) - f(0) = 1 \neq 0 = \int_0^1 f'`],prerequisites:[`cantor`],controls:[{kind:`slider`,key:`stage`,label:{ko:`칸토어 집합 단계 n`,en:`Cantor set stage n`},min:0,max:7,step:1,init:4}]}]},{id:`approximation`,title:{ko:`근사`,en:`Approximation`},summary:{ko:`연속함수를 다항식으로, 함수족을 균등수렴으로 — 근사 이론의 핵심 정리들입니다.`,en:`Approximating continuous functions by polynomials and taming families of functions — the core approximation theorems.`},scenes:[{id:`arzela-ascoli`,title:{ko:`아르첼라-아스콜리 정리`,en:`Arzelà–Ascoli Theorem`},order:1,summary:{ko:String.raw`연속함수 무리에서 균등수렴하는 부분수열을 뽑을 수 있는지를 봅니다.

조건은 두 가지입니다. 첫째, 모든 함수가 하나의 📦 상자 안에 갇혀야 합니다. 둘째, 모든 함수가 비슷하게 완만히 흔들려야 합니다. 유리점에서 하나씩 뽑는 대각선 논증을 씁니다. 그러면 전체 구간에서 한꺼번에 가까워지는 부분수열이 나옵니다. 거듭제곱 함수열은 1 근처에서 갑자기 가팔라져 둘째 조건이 깨집니다.

예를 들면, 🧑 친구 30명이 운동장을 걷는 모습을 떠올려 보세요. 전원이 울타리 안에 머물러야 해요. 아무도 갑자기 뛰어서도 안 돼요. 그러면 걸음걸이가 점점 닮아가는 그룹을 뽑을 수 있어요. 한 명이 끝에서 갑자기 질주하면 그 그룹은 만들 수 없습니다.`,en:String.raw`When can we pull a uniformly convergent subsequence out of a family of continuous functions?

Two conditions do the job. First, every function stays inside one 📦 box. Second, all of them wiggle with similar gentleness. A diagonal argument over the rationals then builds a subsequence. It closes in everywhere at once. The power functions fail the second condition: they turn steep suddenly near 1.

For example, picture 30 🧑 friends walking across a playground. Everyone must stay inside the fence. Nobody may suddenly sprint. Then you can pick a group whose walks grow alike. One friend sprinting at the end ruins the group.`},tex:[String.raw`F \subset C(K)\ \text{relatively compact}`,String.raw`\iff \text{uniformly bounded} + \text{equicontinuous}`,String.raw`\|f_{a_k} - f^*\|_\infty = \frac{1}{k+2} \to 0`],prerequisites:[`uniform`,`bolzano-weierstrass`],controls:[{kind:`slider`,key:`members`,label:{ko:`부분수열 항의 수`,en:`Subsequence members`},min:2,max:12,step:1,init:6}]},{id:`weierstrass-approx`,title:{ko:`바이어슈트라스 근사정리`,en:`Weierstrass Approximation Theorem`},order:2,summary:{ko:String.raw`구간의 모든 연속함수를 다항식만으로 흉내 낼 수 있는지를 봅니다.

번스타인 다항식은 각 점 근처에서 함숫값들을 평균한 것입니다. 차수를 키우면 평균의 무게가 그 점 가까이에 몰립니다. 그래서 울퉁불퉁한 구석까지 다항식이 따라갑니다. 증명의 세부 추정은 아이디어만 봅니다.

예를 들면, 비탈길을 🪜 계단으로 바꾸는 것과 비슷해요. 계단 칸을 잘게 쪼갤수록 어느 지점에서 재도 비탈과 차이가 거의 없어요. 다항식도 차수를 올릴수록 함수 전체에 한꺼번에 붙습니다.`,en:String.raw`Can polynomials alone imitate every continuous function on an interval?

A Bernstein polynomial averages the function's values near each point. As the degree grows, the average concentrates near that point. So the polynomial follows even the bumpy corners. The proof's fine estimates are only sketched.

For example, think of replacing a slope with a 🪜 staircase. The finer the steps, the smaller the gap anywhere you measure. Raising the degree presses the polynomial onto the whole function at once.`},tex:[String.raw`B_n(f)(x) = \sum_{k=0}^{n} f\!\left(\frac{k}{n}\right) \binom{n}{k} x^k (1-x)^{n-k}`,String.raw`f \in C[0,1] \implies \|B_n(f) - f\|_\infty \to 0`],prerequisites:[`uniform`],controls:[{kind:`select`,key:`fn`,label:{ko:`함수 f`,en:`Function f`},options:[`one`,`id`,`abs`,`square`,`sin`],init:`abs`},{kind:`slider`,key:`n`,label:{ko:`차수 n`,en:`Degree n`},min:1,max:60,step:1,init:10}]},{id:`stone-weierstrass`,title:{ko:`스톤-바이어슈트라스 정리`,en:`Stone–Weierstrass Theorem`},order:3,summary:{ko:String.raw`다항식이 아닌 재료로도 모든 연속함수를 근사할 수 있는지를 봅니다.

재료 집합에 필요한 것은 세 가지입니다. 덧셈과 곱셈에 닫혀 있을 것. 서로 다른 두 점을 구별할 수 있을 것. 상수를 품을 것. 이 조건만 갖추면 어떤 연속함수든 원하는 만큼 따라갑니다.

예를 들면, 둥근 파도들을 겹치고 겹치면 뾰족한 🏠 지붕 모양도 만들 수 있어요. 이 장면에서는 원 위에서 삼각함수 파도들이 삼각파에 붙는 모습을 확인합니다.`,en:String.raw`Can materials other than polynomials approximate every continuous function?

The ingredient set needs three things. Closure under addition and multiplication. The power to tell two different points apart. And the constant functions. With only these, it tracks any continuous function as closely as you like.

For example, layering round waves can build even a pointy 🏠 roof shape. In this scene, waves of sines and cosines close in on the triangle wave on a circle.`},tex:[String.raw`S_n(x) = \frac{\pi}{2} - \frac{4}{\pi}\sum_{\text{odd } k \le n} \frac{\cos(kx)}{k^2} \xrightarrow{\|\cdot\|_\infty} |x|`,String.raw`a_k = \frac{2}{\pi}\int_0^{\pi} x\cos(kx)\,dx = \frac{2}{\pi}\frac{(-1)^k - 1}{k^2}`,String.raw`\|S_8 - f\|_\infty \approx 0.0792,\quad \|S_{25} - f\|_\infty \approx 0.0245,\quad \|S_{40} - f\|_\infty \approx 0.0159`],prerequisites:[`weierstrass-approx`],controls:[{kind:`slider`,key:`degree`,label:{ko:`차수 n`,en:`Degree n`},min:1,max:40,step:1,init:8}]},{id:`muntz-szasz`,title:{ko:`뮌츠-서스 정리`,en:`Müntz–Szász Theorem`},order:4,summary:{ko:String.raw`거듭제곱 재료 몇 개를 빼먹어도 근사가 여전히 되는지를 봅니다.

기준은 지수들의 역수 합입니다. 그 합이 끝없이 커지면 재료가 충분히 촘촘합니다. 합이 유한하면 영원히 닿지 못하는 함수가 남습니다. 장면에서는 제곱근 함수를 최소제곱으로 맞추며 두 재료의 오차를 견줍니다.

예를 들면, 📏 자로 길이를 재는 것과 같아요. 눈금이 촘촘히 끝없이 이어지면 어떤 길이든 가깝게 잴 수 있어요. 눈금이 1, 4, 9처럼 듬성하면 영원히 못 재는 길이가 남습니다.`,en:String.raw`Can we skip some powers and still approximate everything?

The test is the sum of the reciprocals of the exponents. If that sum grows forever, the ingredients are dense enough. If it stays finite, some function remains forever out of reach. The scene fits the square-root function by least squares and compares a dense set with a sparse one.

For example, think of measuring with a 📏 ruler. Marks packed endlessly close let you measure any length well. Marks that thin out like 1, 4, 9 leave some lengths unmeasurable forever.`},tex:[String.raw`\operatorname{span}\{1, x^{\lambda_1}, x^{\lambda_2}, \ldots\} \text{ dense in } C[0,1] \iff \sum_{n} \frac{1}{\lambda_n} = \infty`,String.raw`N = 4, 6, 8: \|p_{\mathrm{dense}} - \sqrt{\cdot}\,\|_\infty = 0.1003 \to 0.0708 \to 0.0544`],prerequisites:[`stone-weierstrass`,`weierstrass-approx`],controls:[{kind:`slider`,key:`N`,label:{ko:`차수 N`,en:`Degree N`},min:2,max:8,step:1,init:6}]}]},{id:`series`,title:{ko:`급수`,en:`Series`},summary:{ko:`무한급수의 수렴과 발산을 부분합의 움직임으로 확인하고, 수렴 판정 도구들을 익힙니다.`,en:`Watch infinite series converge or diverge through their partial sums, and master the convergence tests.`},sections:[{id:`famous-series`,title:{ko:`유명한 급수들`,en:`Famous Series`},sceneIds:[`harmonic`,`euler-mascheroni`,`basel`,`euler-product`,`leibniz`]},{id:`tests-1`,title:{ko:`판정법 1부`,en:`Convergence Tests, Part 1`},sceneIds:[`tests`,`integral-test`,`raabe-test`,`kummer-test`,`condensation`]},{id:`computing-series`,title:{ko:`급수의 계산`,en:`Computing Series`},sceneIds:[`telescoping`,`geometric`,`wallis`,`stirling`,`grandi`]},{id:`tests-2`,title:{ko:`판정법 2부와 이중급수`,en:`Convergence Tests, Part 2, and Double Series`},sceneIds:[`dirichlet-test`,`abel-test`,`double-series`]}],scenes:[{id:`harmonic`,title:{ko:`조화급수의 발산`,en:`The Harmonic Series Diverges`},order:1,summary:{ko:String.raw`항이 0으로 줄어드는데도 부분합이 끝없이 커지는 장면입니다. 다만 커지는 속도는 아주 느립니다.

항 하나하나는 작아져도 쌓이는 양은 계속 늘어납니다. 부분합은 로그 곡선을 따라 위로 올라갑니다. 항이 0으로 간다고 급수가 수렴하는 것은 아닙니다. 이 급수가 바로 그 반례의 대표입니다.

예를 들면, 🍬 사탕을 한 개, 반 개, 3분의 1개씩 계속 쌓습니다. 조각은 점점 작아지는데 쌓인 높이는 어떤 천장을 주어도 결국 넘어섭니다.`,en:String.raw`The terms shrink to 0, yet the partial sums grow without end. The growth is just extremely slow.

Each single term is tiny, but the pile keeps rising. The partial sums climb upward along a logarithm curve. Terms tending to 0 do not guarantee that a series converges. This series is the classic counterexample.

For example, stack 🍬 candy pieces of one, a half, a third of a piece, and so on. The pieces keep shrinking, yet the pile eventually rises past any ceiling you name.`},tex:[String.raw`S_n=\sum_{k=1}^{n}\frac{1}{k}`,String.raw`S_n=\ln n+\gamma+o(1)`],controls:[{kind:`slider`,key:`n`,label:{ko:`항의 수 n`,en:`Number of terms n`},min:1,max:1e5,step:1,init:1e3},{kind:`toggle`,key:`logX`,label:{ko:`x축 로그 눈금`,en:`Logarithmic x-axis`},init:!0}]},{id:`euler-mascheroni`,title:{ko:`오일러-마스케로니 상수`,en:`The Euler–Mascheroni Constant`},order:2,summary:{ko:String.raw`둘 다 발산하는 두 양의 차이가 한 값으로 안착하는 장면입니다. 그 차이가 오일러-마스케로니 상수입니다.

조화수와 로그는 둘 다 끝없이 커집니다. 그런데 둘 사이의 간격은 점점 좁혀져 한 값에 멈춥니다. 간격이 멈추는 이유는 간격의 증가분이 수렴하는 급수를 이루기 때문입니다. 그 비밀은 아래 두 번째 식에 있습니다.

예를 들면, 🧑 두 친구가 나란히 달립니다. 둘 다 끝없이 멀어지지만 둘 사이의 거리는 5미터쯤에서 더 벌어지지 않습니다. 멈춰 선 그 거리가 바로 이 상수와 같은 존재입니다.`,en:String.raw`Two quantities both diverge, yet the gap between them settles at one value. That gap is the Euler–Mascheroni constant.

The harmonic numbers and the logarithm both grow without end. Still, the space between them narrows and comes to a stop. The gap stops because its increments form a convergent series. That secret is the second formula below.

For example, two 🧑 friends run side by side. Both run endlessly far, but the distance between them stops growing at about 5 meters. That settled distance plays the role of this constant.`},tex:[String.raw`\gamma = \lim_{n\to\infty}(H_n - \ln n) \approx 0.5772`,String.raw`\gamma = \sum_{n\ge1}\left(\frac1n - \ln\!\left(1+\frac1n\right)\right)`],prerequisites:[`harmonic`],controls:[{kind:`slider`,key:`n`,label:{ko:`항의 수 n`,en:`Number of terms n`},min:1,max:200,step:1,init:50}]},{id:`basel`,title:{ko:`바젤 문제`,en:`The Basel Problem`},order:3,summary:{ko:String.raw`제곱의 역수를 쌓은 계단이 어떤 평면에 한없이 다가가는 장면입니다. 그 평면의 높이가 바로 유명한 답입니다.

부분합의 계단은 올라갈수록 한 걸음이 작아집니다. 그래서 어떤 높이를 향해 모여듭니다. 그 높이에 원주율이 숨어 있다는 것이 놀라운 점입니다. 왜 원주율이 나타나는지는 아이디어 수준에서만 짚습니다.

예를 들면, 📦 상자를 벽에 그은 선 아래로 차곡차곡 쌓습니다. 상자가 점점 작아져서 선에 닿지는 않아도 눈으로 구분이 안 될 만큼 바짝 다가갑니다.`,en:String.raw`A staircase of reciprocal squares climbs toward one flat plane. The height of that plane is the famous answer.

Each new step of the partial sums is smaller than the one before. So the staircase piles up toward a definite height. The surprise is that π hides inside that height. Why π appears at all is only sketched at the idea level.

For example, stack 📦 boxes under a line drawn on a wall. The boxes shrink until the stack creeps so close to the line that your eye cannot see the gap.`},tex:[String.raw`\sum_{n=1}^{\infty}\frac{1}{n^2}=\frac{\pi^2}{6}`],controls:[{kind:`slider`,key:`n`,label:{ko:`항의 수 n`,en:`Number of terms n`},min:1,max:40,step:1,init:14}]},{id:`euler-product`,title:{ko:`오일러 곱 공식`,en:`The Euler Product`},order:4,summary:{ko:String.raw`급수를 체로 걸러 소수만 남기는 장면입니다. 합으로 쓴 식이 소수 전체에 대한 곱과 같아집니다.

짝수 항을 지우는 인자를 곱하면 짝수가 사라집니다. 3의 배수를 지우는 인자를 곱하면 그것도 사라집니다. 소수마다 한 번씩 걸러내면 소수에 대한 정보만 남습니다. 처음 몇 개 소수의 곱만으로도 답에 바짝 다가갑니다.

예를 들면, 🍬 사탕에 1부터 번호를 붙여 늘어놓습니다. 짝수 번호를 치우고 3의 배수를 치우면 소수 번호만 남습니다. 체로 거르는 이 과정이 곱 공식을 만듭니다.`,en:String.raw`A series gets sieved until only the primes remain. The sum turns out to equal a product over all primes.

Multiply by the factor that erases the even terms, and the evens vanish. Multiply by the factor for multiples of 3, and those vanish too. Sieve once for each prime and only prime information survives. Even the product over the first few primes already lands close to the answer.

For example, line up 🍬 candies numbered from 1 onward. Remove the even numbers, then the multiples of 3, and only prime numbers stay. This sieving is what builds the product formula.`},tex:[String.raw`\zeta(s) = \sum_{n=1}^{\infty}\frac{1}{n^s} = \prod_{p\ \mathrm{prime}}\frac{1}{1-p^{-s}} \qquad (s > 1)`,String.raw`\prod_p\frac{1}{1-p^{-2}} = \frac{\pi^2}{6}`],prerequisites:[`basel`],controls:[{kind:`slider`,key:`k`,label:{ko:`소수 개수 k`,en:`Prime count k`},min:1,max:15,step:1,init:6}]},{id:`leibniz`,title:{ko:`라이프니츠 급수`,en:`Leibniz Series`},order:5,summary:{ko:String.raw`부분합이 목표값을 번갈아 넘고 밑돌며 조여드는 장면입니다. 양쪽에서 좁혀 오는 샌드위치와 같습니다.

한 항을 더하면 목표를 지나치고 다음 항에서 되돌아옵니다. 왔다 갔다 하는 폭은 점점 줄어듭니다. 그래서 목표는 이웃한 두 부분합 사이에 항상 끼어 있습니다. 그 간격이 곧 오차의 상한입니다.

예를 들면, ⚽ 공이 선을 넘어갔다가 돌아오기를 반복합니다. 넘치는 거리는 매번 짧아집니다. 공은 결국 선 위에 멈출 수밖에 없습니다.`,en:String.raw`The partial sums overshoot the target, then undershoot it, closing in from both sides. It is a sandwich that keeps tightening.

Add one term and you jump past the target; the next term pulls you back. The back-and-forth swing shrinks every time. So the target always sits between two neighboring partial sums. That gap is exactly the error bound.

For example, a ⚽ ball rolls past a line, comes back, and crosses it again. Each crossing overshoots by less than the one before. The ball has no choice but to settle on the line.`},tex:[String.raw`\frac{\pi}{4}=1-\frac{1}{3}+\frac{1}{5}-\frac{1}{7}+\cdots`,String.raw`\left|S_N-\frac{\pi}{4}\right|\le\frac{1}{2N+1}`],controls:[{kind:`slider`,key:`n`,label:{ko:`항의 수 n`,en:`Number of terms n`},min:1,max:60,step:1,init:12}]},{id:`tests`,title:{ko:`수렴 판정법 도구상자`,en:`Convergence Tests Toolbox`},order:6,summary:{ko:String.raw`급수가 수렴하는지 가리는 도구상자를 여는 장면입니다. 대표적인 도구 두 개를 직접 써 봅니다.

첫째는 이웃한 항의 비율을 보는 판정법입니다. 비율이 1보다 작은 값에 안착하면 항이 빠르게 줄어 수렴합니다. 둘째는 옆 급수와 견주는 비교 판정법입니다. 수렴하는 큰 급수 아래에 깔리면 같이 수렴합니다. 두 도구의 식은 아래에 있습니다.

예를 들면, 🍬 사탕을 매일 전날의 절반씩 나눠 줍니다. 주는 양이 일정한 비율로 줄면 나눠 준 전체 양은 유한합니다. 비율이 줄지 않으면 나눠 주기가 끝나지 않습니다.`,en:String.raw`This scene opens the toolbox for deciding whether a series converges. Two representative tools get used directly.

The first tool watches the ratio of neighboring terms. If the ratio settles below 1, the terms shrink fast enough to converge. The second tool compares against a neighboring series. Anything tucked under a convergent series converges along with it. Both tools' formulas are below.

For example, hand out 🍬 candies each day, always half of yesterday's amount. When the amounts shrink by a fixed ratio, the total handed out stays finite. If the ratio refuses to shrink, the handing out never ends.`},tex:[String.raw`r_k=\frac{a_{k+1}}{a_k}\to L<1\ \Rightarrow\ \sum a_k\ \text{converges}`,String.raw`\frac{1}{k^2+1}<\frac{1}{k^2},\quad\sum_{k=1}^{\infty}\frac{1}{k^2}=\frac{\pi^2}{6}`],prerequisites:[`leibniz`],controls:[{kind:`select`,key:`series`,label:{ko:`급수`,en:`Series`},options:[`factorial`,`n-over-2n`,`inv-square-plus`],init:`factorial`},{kind:`slider`,key:`n`,label:{ko:`항의 수 n`,en:`Number of terms n`},min:1,max:30,step:1,init:12}]},{id:`integral-test`,title:{ko:`적분 판정법`,en:`The Integral Test`},order:7,summary:{ko:String.raw`급수를 적분과 포개어 운명을 함께 묶는 장면입니다. 막대들이 곡선을 위아래로 감쌉니다.

감소하는 곡선 아래에 막대를 세우면 합이 적분을 앞뒤로 감쌉니다. 그래서 급수와 적분은 수렴과 발산을 함께합니다. 지수가 1을 넘으면 수렴하고 그렇지 않으면 발산합니다. 이 갈림길이 모든 p-급수의 운명을 결정합니다.

예를 들면, 📚 책을 경사면에 계단처럼 쌓습니다. 계단은 곡선 아래로 들어가기도 하고 위로 나오기도 합니다. 그래도 계단의 넓이와 곡선 아래 넓이는 함께 유한하거나 함께 끝없이 큽니다.`,en:String.raw`A series and an integral get stacked together and share one fate. The bars wrap the curve from above and below.

Stand bars under a decreasing curve, and the sum traps the integral from both sides. So the series and the integral converge or diverge together. An exponent above 1 gives convergence; anything else diverges. That fork decides the fate of every p-series.

For example, stack 📚 books like steps against a ramp. The steps dip below the ramp's curve and poke above it. Still, the steps' area and the area under the curve are finite together or endless together.`},tex:[String.raw`\int_1^{N+1} f \le \sum_{n=1}^{N} f(n) \le f(1) + \int_1^{N+1} f`,String.raw`\sum \frac{1}{n^p} \text{ converges} \iff p > 1`],prerequisites:[`tests`],controls:[{kind:`slider`,key:`p`,label:{ko:`지수 p`,en:`Exponent p`},min:1,max:3,step:.1,init:2},{kind:`slider`,key:`N`,label:{ko:`항 수 N`,en:`Terms N`},min:5,max:40,step:1,init:12}]},{id:`raabe-test`,title:{ko:`라베 판정법`,en:`Raabe's Test`},order:8,summary:{ko:String.raw`비율 판정법이 항복하는 자리에서 한 단계 더 깊이 파는 장면입니다. 비율이 1로 붙어 버릴 때 쓰는 도구입니다.

비율이 1에 가까워지는 속도까지 재면 판정이 살아납니다. 그 속도를 재는 양이 아래 첫 번째 식입니다. 이 양이 1보다 위에 안착하면 수렴입니다. 1보다 아래에 안착하면 발산입니다.

예를 들면, 📏 자의 눈금이 굵어서 두 길이를 가리지 못하는 때가 있습니다. 눈금이 촘촘한 자로 바꾸면 비로소 길이가 갈립니다. 라베 판정법이 바로 그 촘촘한 자입니다.`,en:String.raw`Where the ratio test surrenders, this scene digs one level deeper. It is the tool for ratios that stick to 1.

Measure how fast the ratio approaches 1, and the verdict revives. The quantity doing the measuring is the first formula below. If it settles above 1, the series converges. If it settles below 1, the series diverges.

For example, a coarse 📏 ruler sometimes cannot separate two lengths. Switch to a ruler with finer marks, and the lengths finally split apart. Raabe's test is that finer ruler.`},tex:[String.raw`L=\lim_{n\to\infty}n\left(\frac{a_n}{a_{n+1}}-1\right)`,String.raw`L>1\Rightarrow\sum a_n\ \text{converges},\quad L<1\Rightarrow\ \text{diverges}`],prerequisites:[`tests`],controls:[{kind:`select`,key:`example`,label:{ko:`예제`,en:`Example`},options:[`central`,`log`],init:`central`},{kind:`slider`,key:`n`,label:{ko:`항의 수 n`,en:`Terms n`},min:10,max:500,step:10,init:100}]},{id:`kummer-test`,title:{ko:`쿰머 판정법`,en:`Kummer's Test`},order:9,summary:{ko:String.raw`여러 판정법을 하나로 묶는 큰 틀을 보는 장면입니다. 보조수열 하나가 판정법의 종류를 바꿉니다.

비율에 가중치를 실어 새로운 양을 만듭니다. 그 양의 부호가 수렴과 발산을 가릅니다. 가중치를 전부 1로 두면 비율 판정법이 됩니다. 가중치를 항 번호로 두면 라베 판정법이 됩니다. 자세한 식은 아래에 있습니다.

예를 들면, ⚙️ 기계의 다이얼을 돌리면 검사 강도가 달라집니다. 한쪽 위치에서는 약한 검사, 다른 위치에서는 강한 검사가 됩니다. 보조수열이 바로 그 다이얼입니다.`,en:String.raw`One big frame unifies several convergence tests in this scene. A single auxiliary sequence switches which test you get.

Weight the ratio to build a new quantity. The sign of that quantity decides convergence or divergence. Set every weight to 1 and you get the ratio test. Set the weights to the term index and you get Raabe's test. The precise formulas are below.

For example, turn a dial on a ⚙️ machine and the inspection strength changes. One position gives a weak check, another position a strong one. The auxiliary sequence is that dial.`},tex:[String.raw`K_n := p_n\frac{a_n}{a_{n+1}} - p_{n+1} \ge c > 0 \ \Rightarrow\ \sum a_n\ \text{converges}`,String.raw`K_n \le 0,\ \sum\frac{1}{p_n} = \infty \ \Rightarrow\ \sum a_n\ \text{diverges}`],prerequisites:[`raabe-test`,`tests`],controls:[{kind:`select`,key:`pKind`,label:{ko:`p_n`,en:`p_n`},options:[`p1`,`pn`,`pnlogn`],init:`pn`},{kind:`select`,key:`aSel`,label:{ko:`매개변수 a`,en:`Parameter a`},options:[`a2`,`ahalf`],init:`a2`},{kind:`slider`,key:`n`,label:{ko:`항의 수 n`,en:`Terms n`},min:10,max:500,step:10,init:100}]},{id:`condensation`,title:{ko:`코시 응축 판정법`,en:`Cauchy Condensation Test`},order:10,summary:{ko:String.raw`항들을 두 배씩 커지는 블록으로 묶어 보는 장면입니다. 묶은 급수와 원래 급수가 운명을 같이합니다.

감소하는 수열에서는 한 블록 안의 항들이 서로 비슷합니다. 그래서 블록 합은 대표 항 하나로 위아래를 묶을 수 있습니다. 블록을 대표 항으로 압축해도 수렴 여부는 그대로입니다. 판정이 훨씬 쉬운 급수로 바뀌는 셈입니다.

예를 들면, 🍬 사탕을 상자에 1개, 2개, 4개씩 두 배로 담습니다. 상자마다 대표 사탕 하나로 크기를 가늠해도 전체가 유한한지는 바뀌지 않습니다.`,en:String.raw`Terms get grouped into blocks that double in size here. The grouped series and the original share their fate.

For a decreasing sequence, the terms inside one block all look alike. So each block sum is trapped between multiples of one representative term. Compressing each block into its representative leaves convergence unchanged. The test becomes far easier to run.

For example, pack 🍬 candies into boxes of 1, 2, 4, doubling each time. Judging each box by one representative candy does not change whether the total is finite.`},tex:[String.raw`2^n a_{2^{n+1}} \le \sum_{k=2^n}^{2^{n+1}-1} a_k \le 2^n a_{2^n}`,String.raw`\sum_{n\ge 1}\frac{1}{n^p}\ \text{converges} \iff p>1`],prerequisites:[`tests`],controls:[{kind:`select`,key:`series`,label:{ko:`수열`,en:`Sequence`},options:[`inv-n`,`inv-n2`,`inv-n-logn`],init:`inv-n`},{kind:`slider`,key:`block`,label:{ko:`블록 번호 n`,en:`Block index n`},min:0,max:6,step:1,init:2}]},{id:`telescoping`,title:{ko:`망원급수`,en:`Telescoping Series`},order:11,summary:{ko:String.raw`항을 쪼개면 이웃끼리 서로 지워지는 장면입니다. 남는 것은 맨 처음과 사라져 가는 꼬리뿐입니다.

각 항은 두 분수의 차이로 갈라집니다. 앞 항의 뒤쪽과 뒤 항의 앞쪽이 똑같아서 사라집니다. 지워지고 나면 처음의 1만 남습니다. 꼬리는 점점 작아져 끝내 사라집니다. 그래서 전체 합은 정확히 1입니다.

예를 들면, 🪜 계단을 한 칸 오르고 한 칸 내려오면 제자리입니다. 오르내림이 줄줄이 이어지면 처음 위치와 마지막 위치만 남습니다.`,en:String.raw`Split each term and the neighbors erase each other in this scene. Only the very first piece and a vanishing tail survive.

Each term breaks into a difference of two fractions. The back half of one term matches the front half of the next, so they cancel. After the erasing, only the opening 1 remains. The tail shrinks away to nothing. So the total is exactly 1.

For example, climb one step of a 🪜 staircase and step back down: you are where you started. Chain these ups and downs together and only the starting and ending positions count.`},tex:[String.raw`\sum_{n=1}^{\infty}\frac{1}{n(n+1)}=1`,String.raw`\frac{1}{n(n+1)}=\frac{1}{n}-\frac{1}{n+1}`],controls:[{kind:`slider`,key:`n`,label:{ko:`항의 수 n`,en:`Number of terms n`},min:1,max:24,step:1,init:10}]},{id:`geometric`,title:{ko:`기하급수: 정사각형 채우기`,en:`Geometric Series: Filling the Square`},order:12,summary:{ko:String.raw`단위 정사각형을 남은 부분의 절반씩 채워 나가는 장면입니다. 빈틈이 매 단계 절반으로 줄어 합이 1이 됩니다.

절반을 칠하고 남은 것의 절반을 또 칠합니다. 칠한 넓이는 점점 1에 가까워집니다. 빈틈이 아무리 작아져도 완전한 1까지 한 걸음이 남습니다. 부분합으로 보면 그 한 걸음이 계속 절반으로 줄 뿐입니다. 무한히 더하면 정확히 1이 됩니다.

예를 들면, 🍰 케이크의 절반을 먹고 남은 것의 절반을 또 먹습니다. 먹는 양은 2분의 1, 4분의 1, 8분의 1로 줄지만 다 합치면 케이크 한 개에 가까워집니다.`,en:String.raw`A unit square gets filled by always taking half of what remains. The gap halves at every step and the total becomes 1.

Paint half, then paint half of the rest. The painted area creeps closer and closer to 1. However small the gap gets, one step always remains. In partial sums, that leftover step just keeps halving. Added forever, the pieces make exactly 1.

For example, eat half of a 🍰 cake, then half of what is left. The bites go one half, one quarter, one eighth, yet together they approach the whole cake.`},tex:[String.raw`\frac{1}{2}+\frac{1}{4}+\frac{1}{8}+\cdots=1`],controls:[{kind:`slider`,key:`n`,label:{ko:`분할 단계 n`,en:`Subdivision steps n`},min:1,max:12,step:1,init:6}]},{id:`wallis`,title:{ko:`월리스 곱`,en:`Wallis Product`},order:13,summary:{ko:String.raw`유리수 인자를 하나씩 곱해 나가는 장면입니다. 실행 곱이 한 값 위아래로 흔들리며 조여듭니다.

실행 곱은 목표를 번갈아 넘고 밑돕니다. 흔들리는 폭은 인자가 쌓일수록 줄어듭니다. 그래서 곱은 하나의 값으로 모여듭니다. 그 값이 원주율을 2로 나눈 것이라는 점이 이 식의 놀라움입니다.

예를 들면, 🚗 자동차가 차선 한가운데로 들어갈 때 핸들을 좌우로 조금씩 고칩니다. 고치는 폭이 점점 줄어들며 차는 가운데로 안정됩니다.`,en:String.raw`Rational factors get multiplied in one at a time here. The running product swings around one value, tightening as it goes.

The running product alternates above and below its target. The swings shrink as more factors pile in. So the product settles onto a single value. The surprise is that this value is π divided by 2.

For example, a 🚗 car eases into the center of its lane with small steering corrections to the left and right. Each correction is smaller than the last, and the car steadies in the middle.`},tex:[String.raw`\frac{\pi}{2}=\prod_{n=1}^{\infty}\frac{(2n)^2}{(2n-1)(2n+1)}`],controls:[{kind:`slider`,key:`n`,label:{ko:`인수 쌍의 수 n`,en:`Factor pairs n`},min:1,max:40,step:1,init:12}]},{id:`stirling`,title:{ko:`스털링 근사`,en:`Stirling's Approximation`},order:14,summary:{ko:String.raw`엄청나게 커지는 팩토리얼을 간단한 식으로 짐작하는 장면입니다. 로그 눈금에서는 두 곡선이 거의 겹칩니다.

팩토리얼은 직접 계산하기엔 너무 빨리 커집니다. 근사식은 그 성장 속도를 거의 그대로 따라갑니다. 상대오차는 항이 커질수록 작아집니다. 대략 항 수의 열두 배로 나눈 만큼씩 줄어듭니다. 원주율이 들어오는 경로는 아이디어 수준에서만 짚습니다.

예를 들면, 🏢 건물의 높이를 걸음 수로 짐작해 봅니다. 건물이 클수록 한 걸음의 어긋남이 전체에서 차지하는 비중은 작아집니다. 근사가 큰 수에서 정확해지는 이유입니다.`,en:String.raw`A fast-growing factorial gets guessed by one simple formula here. On a log scale, the two curves nearly coincide.

Factorials grow too fast to keep computing head-on. The approximation tracks that growth almost exactly. Its relative error shrinks as the terms grow. Roughly, it falls like 1 over 12 times the index. Where π enters is only sketched at the idea level.

For example, guess a tall 🏢 building's height by counting steps. The taller the building, the smaller the share of one step's error in the whole. That is why the approximation sharpens for large numbers.`},tex:[String.raw`n!\approx\sqrt{2\pi n}\left(\frac{n}{e}\right)^n`],controls:[{kind:`slider`,key:`n`,label:{ko:`n`,en:`n`},min:1,max:60,step:1,init:20}]},{id:`grandi`,title:{ko:`그란디 급수`,en:`Grandi Series`},order:15,summary:{ko:String.raw`부분합이 1과 0을 영원히 오가는 장면입니다. 그래서 이 급수에는 합이 없습니다.

항을 하나 더하면 합이 1에서 0으로, 다시 1로 뒤집힙니다. 어느 한 값에 안착하지 않으니 수렴이 아닙니다. 사람들이 말하는 2분의 1은 부분합들의 평균일 뿐입니다. 평균이 있다고 해서 합이 있는 것은 아닙니다.

예를 들면, 🍬 사탕 한 개를 손에 쥐었다 내려놓기를 끝없이 반복합니다. 쥔 상태와 내려놓은 상태가 번갈아 와서 사탕이 있다고도 없다고도 정할 수 없습니다.`,en:String.raw`The partial sums bounce between 1 and 0 forever in this scene. So this series has no sum.

Add one term and the total flips from 1 to 0, then back to 1. It never settles on one value, so it does not converge. The famous one half is only the average of the partial sums. Having an average is not the same as having a sum.

For example, pick up one 🍬 candy and put it down, over and over without end. Holding and not holding alternate forever, so you cannot say the candy is simply there.`},tex:[String.raw`1-1+1-1+\cdots\quad\text{diverges}`],controls:[{kind:`slider`,key:`n`,label:{ko:`항의 수 n`,en:`Number of terms n`},min:1,max:40,step:1,init:16}]},{id:`dirichlet-test`,title:{ko:`디리클레 판정법`,en:`Dirichlet's Test`},order:16,summary:{ko:String.raw`흔들리는 급수를 가라앉는 가중치로 길들이는 장면입니다. 두 재료가 만나 수렴을 만듭니다.

사인 항들의 부분합은 이리저리 흔들리지만 일정한 울타리 안에 갇혀 있습니다. 거기에 0으로 가라앉는 가중치를 곱합니다. 흔들림의 폭이 점점 눌리면서 급수가 수렴합니다. 판정법의 정확한 조건은 아래 식과 같습니다.

예를 들면, ⚽ 공이 울타리 안에서만 이리저리 튑니다. 밀어 주는 힘이 점점 약해지면 공의 움직임도 잦아들어 한곳에 모입니다.`,en:String.raw`A wobbling series gets tamed by a sinking weight in this scene. Two ingredients meet and produce convergence.

The partial sums of the sine terms wobble around but stay trapped inside a fixed fence. Multiply them by weights that sink to 0. The wobble gets pressed flatter and flatter until the series converges. The test's exact conditions are in the formulas below.

For example, a ⚽ ball bounces around inside a fence and never escapes. Push it more and more gently, and its wandering dies down until it settles.`},tex:[String.raw`\sum_{k=1}^{N}\sin(kx) = \frac{\sin\frac{Nx}{2}\,\sin\frac{(N+1)x}{2}}{\sin\frac{x}{2}},\quad \left|\sum_{k=1}^{N}\sin(kx)\right| \le \frac{1}{|\sin(x/2)|}`,String.raw`\sum_{n=1}^{\infty}\frac{\sin(nx)}{n} = \frac{\pi-x}{2},\quad x \in (0, 2\pi)`],prerequisites:[`tests`],controls:[{kind:`slider`,key:`terms`,label:{ko:`부분합 항 수`,en:`Partial sum terms`},min:1,max:80,step:1,init:30},{kind:`slider`,key:`x`,label:{ko:`x 값`,en:`x value`},min:.2,max:3,step:.01,init:1}]},{id:`abel-test`,title:{ko:`아벨 판정법`,en:`Abel's Test`},order:17,summary:{ko:String.raw`수렴하는 급수에 단조로운 가중치를 곱해도 수렴이 유지되는 장면입니다. 디리클레 판정법의 짝꿍입니다.

가중치 수열은 한 방향으로만 움직이고 유계이면 됩니다. 0으로 가지 않아도 된다는 점이 디리클레 판정법과 다릅니다. 비결은 곱의 합을 부분합과 가중치의 차이로 바꿔 쓰는 것입니다. 가중치의 작은 걸음들이 통제 아래 쌓입니다.

예를 들면, 🏪 가게가 물건값을 매일 조금씩 한 방향으로만 올립니다. 팔린 양의 누적합이 이미 안정돼 있으면 매출의 누적합도 함께 안정됩니다.`,en:String.raw`A convergent series stays convergent when multiplied by a monotone weight here. This test is the companion of Dirichlet's test.

The weight sequence only needs to move in one direction and stay bounded. Unlike in Dirichlet's test, it does not have to tend to 0. The secret is rewriting the product sum using partial sums and weight differences. The weight's small steps then pile up under control.

For example, a 🏪 shop nudges its prices in one direction only, a little each day. If the running total of items sold has already settled, the running revenue settles along with it.`},tex:[String.raw`\sum a_n\ \text{converges},\ (b_n)\ \text{monotone bounded}\ \Rightarrow\ \sum a_n b_n\ \text{converges}`,String.raw`\sum_{k=m}^{n}a_k b_k = A_n b_{n+1} - A_{m-1}b_m + \sum_{k=m}^{n}A_k(b_k-b_{k+1})`],prerequisites:[`dirichlet-test`],controls:[{kind:`select`,key:`example`,label:{ko:`예제`,en:`Example`},options:[`shifted`,`scaled`],init:`shifted`},{kind:`slider`,key:`n`,label:{ko:`부분합 항 수`,en:`Partial sum terms`},min:10,max:500,step:10,init:120}]},{id:`double-series`,title:{ko:`이중급수와 푸비니`,en:`Double Series and Fubini`},order:18,summary:{ko:String.raw`격자의 수들을 행으로 더하든 열로 더하든 해 보는 장면입니다. 절댓값이 수렴하면 두 답이 같습니다.

가로줄부터 합산해도 세로줄부터 합산해도 결과는 하나입니다. 순서를 바꿔도 답이 같은 이유는 절댓값의 합이 유한하기 때문입니다. 조건부로만 수렴하면 순서를 바꾸는 순간 답도 바뀝니다. 대표 예의 값은 아래 두 번째 식과 같습니다.

예를 들면, 📦 상자를 격자로 쌓고 각 상자에 든 물건의 수를 셉니다. 가로줄씩 세어 더하나 세로줄씩 세어 더하나 전체 개수는 똑같습니다.`,en:String.raw`Numbers on a grid get summed by rows first, then by columns, in this scene. With absolute convergence, the two answers agree.

Add along the rows or down the columns: the result is one and the same. The order cannot change it because the absolute values sum to a finite total. With only conditional convergence, swapping the order changes the answer itself. The headline value is the second formula below.

For example, stack 📦 boxes in a grid and count the items inside each box. Count row by row or column by column — the total count comes out identical.`},tex:[String.raw`\sum_{m}\sum_{n} a_{m,n} = \sum_{n}\sum_{m} a_{m,n} = \sup_{\text{finite } F} \sum_{F} a_{m,n}`,String.raw`\sum_{m,n \ge 1} \frac{1}{m^2n^2} = \frac{\pi^4}{36} \approx 2.7058`],prerequisites:[`tests`],controls:[{kind:`slider`,key:`N`,label:{ko:`격자 크기 N`,en:`Grid size N`},min:2,max:8,step:1,init:5},{kind:`select`,key:`series`,label:{ko:`급수`,en:`Series`},options:[`1/(m^2 n^2)`,`(-1)^(m+n)/(m^2 n^2)`],init:`1/(m^2 n^2)`}]}]},{id:`power-series`,title:{ko:`거듭제곱급수`,en:`Power Series`},summary:{ko:`수렴반경 안의 세계 — 아벨 정리와 타우버 정리, 급수의 재배열과 코시 곱을 다룹니다.`,en:`Inside the radius of convergence — Abel and Tauber theorems, rearrangements, Cauchy products.`},sections:[{id:`power-basics`,title:{ko:`멱급수의 기본`,en:`Power Series Basics`},sceneIds:[`power-series`,`hadamard-gap`,`abel-theorem`,`tauber`]},{id:`constants`,title:{ko:`상수로 가는 급수`,en:`Series for Constants`},sceneIds:[`eseries`,`zeta4`]},{id:`rearrangement-products`,title:{ko:`재배열과 곱`,en:`Rearrangements and Products`},sceneIds:[`rearrangement`,`absolute`,`riemann-rearrangement`,`cauchy-product`]}],scenes:[{id:`power-series`,title:{ko:`멱급수와 수렴반경`,en:`Power Series and Radius of Convergence`},order:1,summary:{ko:String.raw`멱급수가 어느 범위 안에서 수렴하고 밖에서 무너지는지를 봅니다.

중심에서 반경 안쪽은 안전지대입니다. 안에서는 절댓값을 씌워도 수렴합니다. 바깥에서는 항 자체가 0으로 가지 못합니다. 경계선 위의 점들은 저마다 운명이 다릅니다.

예를 들면, 🏠 집의 와이파이와 비슷해요. 집 안에서는 잘 터지고, 멀어지면 끊겨요. 현관 앞에서는 될 때도 있고 안 될 때도 있어서 직접 확인해야 해요.`,en:String.raw`Where does a power series converge, and where does it fall apart?

Inside the radius lies a safe zone. There the series converges even with absolute values. Outside, the terms themselves fail to shrink to zero. Points on the boundary each have their own fate.

For example, think of Wi-Fi in a 🏠 house. It works well inside and drops as you walk away. Right at the door it may or may not connect, so you check case by case.`},tex:[String.raw`\frac{1}{R}=\limsup_{n\to\infty}\lvert a_n\rvert^{1/n}`,String.raw`\sum_{n=0}^{\infty}\frac{x^n}{n!}\ \text{has}\ R=\infty,\quad \sum_{n=0}^{\infty}n!\,x^n\ \text{has}\ R=0,\quad \sum_{n=0}^{\infty}x^n\ \text{has}\ R=1`],prerequisites:[`tests`],controls:[{kind:`select`,key:`series`,label:{ko:`급수`,en:`Series`},options:[`exp`,`factorial`,`geom`],init:`exp`},{kind:`slider`,key:`x`,label:{ko:`x`,en:`x`},min:-3,max:3,step:.1,init:1},{kind:`slider`,key:`n`,label:{ko:`항의 개수 N`,en:`Terms N`},min:1,max:30,step:1,init:15}]},{id:`hadamard-gap`,title:{ko:`Hadamard 간극 정리`,en:`Hadamard Gap Theorem`},order:2,summary:{ko:String.raw`항 사이 간격이 점점 벌어지는 급수의 경계 행동을 봅니다.

지수가 1, 2, 4, 8처럼 두 배씩 뛰면 빈칸이 커집니다. 그 빈칸 때문에 수렴원 위의 어느 점으로도 이어질 수 없습니다. 원 안에서는 멀쩡히 수렴하는데도 그렇습니다. 간격 없는 비교 급수는 얌전히 행동합니다.

예를 들면, 🪜 계단 칸이 1, 2, 4, 8칸씩 벌어지는 계단과 같아요. 처음에는 잘 오르지만, 나중에는 한 칸이 너무 멀어 벽 끝까지 닿을 수 없어요.`,en:String.raw`What happens at the boundary when a series has growing gaps?

Exponents doubling like 1, 2, 4, 8 leave bigger and bigger holes. The holes block continuation to every point of the circle. This happens even though the series converges nicely inside. The gap-free comparison series stays calm.

For example, imagine a 🪜 staircase whose steps spread by 1, 2, 4, 8. The first steps are easy. Soon one step is too far, and the wall's end is out of reach.`},tex:[String.raw`\frac{n_{k+1}}{n_k} = \frac{2^{k+1}}{2^k} = 2 > 1, \qquad \frac{1}{R} = \limsup_{n\to\infty} |a_n|^{1/n} = 1`,String.raw`\max_\theta |S_{12}(0.99\,e^{i\theta})| \approx 6.3139`],prerequisites:[`power-series`],controls:[{kind:`slider`,key:`N`,label:{ko:`부분합 차수 N`,en:`Partial-sum degree N`},min:1,max:12,step:1,init:6}]},{id:`abel-theorem`,title:{ko:`아벨 정리`,en:`Abel's Theorem`},order:3,summary:{ko:String.raw`급수의 합과 멱급수의 극한이 1에서 이어지는지를 봅니다.

원래 급수가 수렴하면, 1에 다가가는 멱급수도 같은 값을 향합니다. 아래 식이 그 내용입니다. 발산하는 그란디 급수도 이 극한에서는 2분의 1을 가리킵니다. 하지만 그것은 합이 아니라 아벨 합이라는 별도 약속입니다.

예를 들면, 🧑 친구가 1과 0을 번갈아 외치는 게임과 비슷해요. 뒤로 갈수록 목소리를 조금씩 줄이면, 전체 평균이 2분의 1 근처에서 잔잔해져요.`,en:String.raw`Does the sum of a series match the limit of its power series at 1?

If the series converges, the power series heads to the same value as x nears 1, as in the formula below. Even the divergent Grandi series points to one half in this limit. But that value is an Abel sum, a separate convention, not the sum.

For example, imagine a 🧑 friend shouting 1 and 0 in turns. If each shout is a bit quieter than the last, the running average settles near one half.`},tex:[String.raw`\sum a_n \to S \ \Rightarrow\ \lim_{x\to 1^{-}}\sum a_n x^n = S`,String.raw`\sum_{n=0}^{\infty}(-1)^n x^n = \frac{1}{1+x} \xrightarrow[x\to 1^{-}]{} \frac{1}{2}`],prerequisites:[`power-series`,`grandi`],controls:[{kind:`select`,key:`series`,label:{ko:`급수`,en:`Series`},options:[`grandi`,`alt-harmonic`],init:`grandi`},{kind:`slider`,key:`x`,label:{ko:`x (1의 왼쪽에서 접근)`,en:`x (approaching 1 from below)`},min:0,max:.99,step:.01,init:.8},{kind:`slider`,key:`n`,label:{ko:`부분합 항 수 N`,en:`Partial sum terms N`},min:1,max:200,step:1,init:40}]},{id:`tauber`,title:{ko:`타우버 정리`,en:`Tauber's Theorem`},order:4,summary:{ko:String.raw`아벨 합이 있으면 진짜 합도 있는지 거꾸로 묻는 장면입니다.

답은 조건이 붙을 때만 그렇습니다. 항들이 1 나누기 n보다 빠르게 작아져야 합니다. 그란디 급수는 항이 줄지 않아 이 조건이 깨집니다. 조건을 만족하는 급수에서는 아벨 합의 곡선이 보통 합에 닿습니다.

예를 들면, 🏠 집 현관까지 걸어가는 것과 같아요. 발걸음이 점점 작아져야 현관에 딱 멈출 수 있어요. 발걸음이 줄지 않으면 앞뒤로 계속 지나치기만 합니다.`,en:String.raw`If an Abel sum exists, must the ordinary sum exist too?

Only under an extra condition. The terms must shrink faster than one over n. Grandi's series breaks it, since its terms never shrink. When the condition holds, the Abel-sum curve reaches the ordinary sum.

For example, think of walking to the door of a 🏠 house. Your steps must keep shrinking to stop right at the door. Steps that never shrink just carry you past it, back and forth.`},tex:[String.raw`A(r) = \sum a_n r^n \xrightarrow[r\to 1^{-}]{} L,\ a_n = o(1/n)\ \Rightarrow\ \sum a_n = L`,String.raw`\sum_{n=0}^{\infty}(-1)^n r^n = \frac{1}{1+r} \xrightarrow[r\to 1^{-}]{} \frac{1}{2}`],prerequisites:[`abel-theorem`,`grandi`],controls:[{kind:`slider`,key:`R`,label:{ko:`r × 100 (R)`,en:`r × 100 (R)`},min:50,max:99,step:1,init:90}]},{id:`eseries`,title:{ko:`e로 가는 두 길`,en:`Two Roads to e`},order:5,summary:{ko:String.raw`e에 다가가는 두 길의 속도를 견주는 장면입니다.

복리 길은 횟수를 늘려도 한 걸음씩 느리게 다가갑니다. 팩토리얼 급수는 항이 순식간에 작아집니다. 몇 항만 더해도 자릿수가 금방 맞아떨어집니다.

예를 들면, 🐷 저금통의 💰 돈에 이자가 붙고 그 이자에 또 이자가 붙는 복리와 같아요. 횟수를 늘릴수록 e에 가까워지지만, 급수 쪽이 훨씬 먼저 도착해요.`,en:String.raw`Two roads lead to e — which one gets there faster?

The compound-growth road creeps forward step by step. The factorial series has terms that shrink almost instantly. A handful of terms already pins down many digits.

For example, think of 💰 money in a 🐷 piggy bank earning interest on its interest. More rounds push it toward e, but the series arrives far sooner.`},tex:[String.raw`e=\sum_{k=0}^{\infty}\frac{1}{k!}`,String.raw`e=\lim_{n\to\infty}\left(1+\frac{1}{n}\right)^n`],controls:[{kind:`slider`,key:`n`,label:{ko:`단계 수 n`,en:`Steps n`},min:1,max:30,step:1,init:10}]},{id:`zeta4`,title:{ko:`ζ(4)와 짝수 거듭제곱`,en:`ζ(4) and Even Powers`},order:6,summary:{ko:String.raw`네제곱 역수들을 모두 더하면 무엇이 나오는지를 봅니다.

부분합은 몇 항만으로 답에 바짝 붙습니다. 항이 네제곱으로 작아져 꼬리가 아주 짧기 때문입니다. 짝수 거듭제곱에서는 늘 원주율의 거듭제곱으로 닫힌 답이 나옵니다.

예를 들면, 🍰 케이크를 빠르게 줄어드는 조각으로 나눠 쌓는 것과 같아요. 조각이 금방 작아져서 전체 높이가 몇 조각만으로 정해져요.`,en:String.raw`What do the reciprocals of fourth powers add up to?

The partial sums hug the answer after only a few terms. Fourth powers shrink the tail to almost nothing. At every even power, the closed answer is a power of pi times a fraction.

For example, picture stacking 🍰 cake slices that shrink fast. Each slice is soon tiny, so a few slices fix the total height.`},tex:[String.raw`\sum_{n=1}^{\infty}\frac{1}{n^4}=\frac{\pi^4}{90}`,String.raw`\zeta(2)=\frac{\pi^2}{6},\quad \zeta(6)=\frac{\pi^6}{945}`],controls:[{kind:`slider`,key:`n`,label:{ko:`항의 수 n`,en:`Number of terms n`},min:1,max:20,step:1,init:8}]},{id:`rearrangement`,title:{ko:`재배열 정리`,en:`Rearranging Changes the Sum`},order:7,summary:{ko:String.raw`조건수렴 급수의 항 순서를 바꾸면 합이 어떻게 되는지를 봅니다.

양의 항도 음의 항도 끝없이 쌓여 있습니다. 그래서 어느 쪽을 먼저 꺼내느냐로 합을 밀고 당길 수 있습니다. 절댓값까지 수렴하는 급수에서는 이런 일이 없습니다.

예를 들면, 🐷 저금통에 💰 동전을 넣었다 뺐다 하는 순서를 바꾸는 것과 같아요. 넣을 동전과 뺄 동전이 끝없이 많으면, 순서만으로 잔액을 바꿀 수 있어요.`,en:String.raw`What happens to the sum when we reorder a conditionally convergent series?

Positive terms and negative terms both pile up without end. So choosing which side to draw from first pushes the sum around. Nothing like this happens when the absolute series converges.

For example, think of putting 💰 coins into a 🐷 piggy bank and taking them out. If both piles of coins are endless, the order alone changes the balance.`},tex:[String.raw`\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n} = \ln 2 \xrightarrow{(+,+,-)} \frac{3}{2}\ln 2`],prerequisites:[`leibniz`],controls:[{kind:`slider`,key:`n`,label:{ko:`항 개수`,en:`Terms`},min:6,max:300,step:1,init:60}]},{id:`absolute`,title:{ko:`절대수렴 정리`,en:`Absolute Convergence`},order:8,summary:{ko:String.raw`절댓값 급수가 수렴하면 원래 급수도 따라 수렴하는지를 봅니다.

절댓값을 씌운 합이 유한하면 이야기가 끝납니다. 부호 있는 부분합은 그 안에서 출렁이다 한 점에 안착합니다. 반대로 절댓값은 발산해도 부호가 번갈면 상쇄가 도와 수렴하기도 합니다.

예를 들면, 🧑 사람이 앞으로 한 걸음, 뒤로 조금 걷는 것과 같아요. 걸음 폭을 전부 더해도 유한하면, 결국 어느 한 지점에 멈추게 돼요.`,en:String.raw`If the absolute-value series converges, must the original follow?

A finite absolute total settles everything. The signed partial sums wobble inside it and land on one point. In reverse, alternating signs can rescue a series whose absolute total diverges.

For example, picture a 🧑 person stepping forward, then a little back. If all the step lengths add to a finite total, the walker ends up standing somewhere definite.`},tex:[String.raw`\sum|a_k|\ \text{converges}\ \Rightarrow\ \sum a_k\ \text{converges}`,String.raw`\sum_{k=1}^{\infty}\frac{(-1)^k}{k^2}=-\frac{\pi^2}{12},\quad\sum_{k=1}^{\infty}\frac{(-1)^k}{k}=-\ln 2`],prerequisites:[`rearrangement`],controls:[{kind:`select`,key:`series`,label:{ko:`급수`,en:`Series`},options:[`abs`,`cond`],init:`abs`},{kind:`slider`,key:`n`,label:{ko:`항의 수 n`,en:`Number of terms n`},min:1,max:200,step:1,init:60}]},{id:`riemann-rearrangement`,title:{ko:`리만 재배열 정리`,en:`Riemann's Rearrangement Theorem`},order:9,summary:{ko:String.raw`재배열만으로 원하는 합을 직접 만들어 보는 장면입니다.

탐욕 규칙은 간단합니다. 목표보다 작으면 양의 항을, 크면 음의 항을 꺼냅니다. 항이 점점 작아져서 지나치는 폭도 함께 줄어듭니다. 그래서 어떤 실수를 골라도 그 합에 정확히 붙습니다.

예를 들면, 🚗 자동차 핸들을 돌리는 것과 비슷해요. 지나치면 반대로, 모자라면 더 돌리는 식으로 조금씩 몰면 원하는 지점에 딱 멈출 수 있어요.`,en:String.raw`Can rearranging alone manufacture any sum we want?

The greedy rule is simple. Below the target, take a positive term; above it, take a negative one. The terms shrink, so each overshoot shrinks too. That is why any real target can be hit exactly.

For example, think of steering a 🚗 car. Turn more when short of the spot, back when past it. Small corrections land you exactly where you aim.`},tex:[String.raw`\sum a_n\ \text{converges conditionally}\ \Longrightarrow\ \forall\, s\in\mathbb{R}\ \ \exists\ \text{rearrangement with sum } s`],prerequisites:[`rearrangement`,`absolute`],controls:[{kind:`slider`,key:`target`,label:{ko:`목표 합 s`,en:`Target sum s`},min:-2,max:3,step:.1,init:1},{kind:`slider`,key:`terms`,label:{ko:`항의 개수`,en:`Number of terms`},min:20,max:400,step:20,init:120}]},{id:`cauchy-product`,title:{ko:`코시 곱`,en:`The Cauchy Product`},order:10,summary:{ko:String.raw`두 급수를 곱하면 항들이 어떻게 짝지어지는지를 봅니다.

곱의 각 항은 격자의 대각선을 따라 짝을 모아 만든 것입니다. 아래 식이 그 규칙입니다. 한쪽이 절대수렴하면 곱은 두 합의 곱으로 안착합니다. 둘 다 조건수렴이면 대각선의 합 자체가 무너질 수 있습니다.

예를 들면, 📦 상자들을 바둑판처럼 놓고 대각선으로 하나씩 주워 담는 것과 같아요. 주울 것들이 충분히 빨리 작아지면 바구니 속 총합이 정해져요.`,en:String.raw`How do the terms pair up when two series are multiplied?

Each product term gathers pairs along a diagonal of the lattice, as in the formula below. If one side converges absolutely, the product lands on the product of the sums. If both converge only conditionally, the diagonal sums can collapse.

For example, picture 📦 boxes in a grid, picked up one diagonal at a time. If the boxes shrink fast enough, the basket's total settles down.`},tex:[String.raw`c_n = \sum_{k=0}^{n} a_k b_{n-k}`,String.raw`\sum |a_n| < \infty,\ \sum b_n = B\ \Rightarrow\ \sum c_n = AB`],prerequisites:[`absolute`,`rearrangement`],controls:[{kind:`slider`,key:`n`,label:{ko:`항의 수 n`,en:`Number of terms n`},min:1,max:30,step:1,init:10},{kind:`select`,key:`pair`,label:{ko:`급수 쌍`,en:`Series pair`},options:[`exp`,`alternating`],init:`exp`}]}]},{id:`function-series`,title:{ko:`함수급수와 푸리에`,en:`Series of Functions & Fourier`},summary:{ko:`함수들의 급수가 언제 균등수렴하는지, 그리고 푸리에급수와 깁스 현상을 다룹니다.`,en:`When series of functions converge uniformly — plus Fourier series and the Gibbs phenomenon.`},sections:[{id:`uniform-tests`,title:{ko:`균등수렴 판정`,en:`Uniform Convergence Tests`},sceneIds:[`m-test`,`dini`]},{id:`fourier`,title:{ko:`푸리에 급수와 함수공간`,en:`Fourier Series and Function Spaces`},sceneIds:[`fourier`,`riemann-lebesgue`,`fejer-theorem`,`parseval`,`gibbs-phenomenon`,`function-spaces`,`fourier-epicycles`]}],scenes:[{id:`m-test`,title:{ko:`M-판정법`,en:`The Weierstrass M-Test`},order:1,summary:{ko:String.raw`함수급수가 균등수렴하는지 한 번에 판정하는 법을 봅니다.

각 항을 모든 점에서 누르는 상한이 핵심입니다. 그 상한들의 합이 수렴하면 꼬리가 전체 구간에서 동시에 작아집니다. 그래서 오차 띠가 한꺼번에 좁아집니다.

예를 들면, 물건들을 덮는 📦 상자 뚜껑과 같아요. 뚜껑 크기의 합이 유한하게 잡히면 어느 물건도 삐져나올 수 없어요.`,en:String.raw`One test that settles uniform convergence of a series of functions all at once.

The key is a cap that dominates each term at every point. If the caps themselves sum finitely, the tail shrinks across the whole interval together. So the error band tightens everywhere at once.

For example, think of 📦 box lids covering every item. If the lid sizes add up finitely, nothing can poke out anywhere.`},tex:[String.raw`|f_n(x)| \le M_n\ \forall x,\quad \sum M_n<\infty\ \Rightarrow\ \sum f_n\ \text{converges uniformly}`,String.raw`\sup_x|S(x)-S_N(x)| \le \sum_{k>N}\frac{1}{k^2},\quad N=8:\ \approx 0.1175`],prerequisites:[`tests`],controls:[{kind:`slider`,key:`terms`,label:{ko:`부분합 항 수`,en:`Partial sum terms`},min:1,max:40,step:1,init:8}]},{id:`dini`,title:{ko:`디니 정리`,en:`Dini's Theorem`},order:2,summary:{ko:String.raw`단조로운 함수열은 점별수렴만으로 균등수렴이 되는지를 봅니다.

닫힌 구간에서는 가능합니다. 한 번 따라잡으면 뒤처지지 않는 단조성 덕분입니다. 각 점에서 필요한 기다림을 모아도 유한한 상한으로 묶입니다. 그래서 전체가 한꺼번에 가까워집니다.

예를 들면, 🪜 계단을 오르는 것과 비슷해요. 뒤로 물러서지 않고 한 칸씩 오르면, 마지막 칸에 닿는 순간 전원이 다 올라온 셈이에요.`,en:String.raw`When does pointwise convergence of a monotone family upgrade to uniform?

On a closed interval, it does. Monotonicity means no function falls behind once it catches up. The waiting times at all points tie into one finite bound. So the whole family closes in together.

For example, think of climbing a 🪜 staircase. If nobody steps back, reaching the last step means the whole group has arrived.`},tex:[String.raw`f_n \uparrow f\ \text{continuous on compact } K \Rightarrow f_n \to f\ \text{uniformly}`,String.raw`\max_{[0,1]}\left|x - \frac{nx}{n+1}\right| = \frac{1}{n+1}`],prerequisites:[`m-test`],controls:[{kind:`slider`,key:`n`,label:{ko:`항 번호 n`,en:`Index n`},min:1,max:60,step:1,init:8},{kind:`select`,key:`domain`,label:{ko:`정의역`,en:`Domain`},options:[`compact`,`noncompact`],init:`compact`}]},{id:`fourier`,title:{ko:`푸리에 정사각파`,en:`The Ringing That Never Dies`},order:3,summary:{ko:String.raw`둥근 사인파들을 겹쳐 각진 정사각파를 만드는 장면입니다.

항을 더할수록 평평한 부분은 정사각파에 붙습니다. 하지만 점프 지점 옆의 울림은 줄지 않습니다. 항의 수를 아무리 늘려도 그 혹이 남아 있습니다.

예를 들면, 📷 사진 속 🏢 건물을 확대해 보는 것과 비슷해요. 픽셀이 작아질수록 모양은 선명해져요. 그래도 경계 옆 자글자글한 자국은 끝까지 남아요.`,en:String.raw`Round sine waves are layered to build a sharp square wave.

More terms press the flat parts onto the wave. But the ringing beside each jump does not shrink. No number of terms removes that bump.

For example, zoom into a 🏢 building in a 📷 photo. Smaller pixels sharpen the shape. Yet the jagged marks along the edges stay to the end.`},tex:[String.raw`S_N(x) = \frac{4}{\pi}\sum_{k=1}^{N} \frac{\sin((2k-1)x)}{2k-1}`],controls:[{kind:`slider`,key:`N`,label:{ko:`항의 수 N`,en:`Terms N`},min:1,max:50,step:1,init:8}]},{id:`riemann-lebesgue`,title:{ko:`리만-르벡 보조정리`,en:`Riemann–Lebesgue Lemma`},order:4,summary:{ko:String.raw`진동이 빨라지면 푸리에 계수가 어떻게 되는지를 봅니다.

빠르게 출렁이는 파동은 함수의 울퉁불퉁함을 평균 내어 지웁니다. 한 파장 안에서는 함수가 거의 상수처럼 보이기 때문입니다. 그래서 진동수가 커질수록 계수는 0으로 사라집니다.

예를 들면, 🧵 줄을 아주 빠르게 흔드는 것과 같아요. 출렁임이 번져 흐릿한 띠로 보이고, 위아래가 서로 지워져 가운데만 남아요.`,en:String.raw`What happens to Fourier coefficients as oscillation speeds up?

A rapidly wiggling wave averages away the function's bumps. Within one wavelength the function looks nearly constant. So as the frequency grows, every coefficient dies to zero.

For example, shake a 🧵 string very fast. The wiggle blurs into a faint band, the ups and downs cancelling to leave only the middle.`},tex:[String.raw`a_n = \frac1\pi\int_{-\pi}^{\pi} f(x)\cos(nx)\,dx \to 0`,String.raw`b_n = \frac1\pi\int_{-\pi}^{\pi} f(x)\sin(nx)\,dx \to 0`],prerequisites:[`fourier`],controls:[{kind:`select`,key:`mode`,label:{ko:`함수`,en:`Function`},options:[`step`,`tent`,`smooth`],init:`step`},{kind:`slider`,key:`n`,label:{ko:`진동수 n`,en:`Frequency n`},min:1,max:40,step:1,init:12},{kind:`select`,key:`kind`,label:{ko:`계수`,en:`Coefficient`},options:[`a`,`b`],init:`b`}]},{id:`fejer-theorem`,title:{ko:`Fejér 정리`,en:`Fejér's Theorem`},order:5,summary:{ko:String.raw`울림 많은 푸리에 부분합들을 평균 내면 어떻게 되는지를 봅니다.

부분합들을 평균하면 혹들이 서로 상쇄됩니다. 평균의 핵은 양수이고 가운데에 뾰족하게 몰려 있습니다. 그래서 평균은 원래 함수에 전체 구간에서 한꺼번에 붙습니다.

예를 들면, 흔들린 📷 사진 여러 장을 겹치는 것과 같아요. 한 장 한 장의 출렁임이 겹침 속에서 서로 지워져 또렷해져요.`,en:String.raw`What happens when the ringing Fourier partial sums are averaged?

Averaging the partial sums cancels their bumps against each other. The averaging kernel is positive and piled sharply at the center. So the averages settle onto the function across the whole interval at once.

For example, overlay several shaky 📷 photos. Each photo's wobble cancels in the stack, and the picture turns clear.`},tex:[String.raw`\sigma_N = \frac{S_0+\cdots+S_{N-1}}{N} \xrightarrow{\|\cdot\|_\infty} f`,String.raw`K_N(t) = \frac1N\left(\frac{\sin(Nt/2)}{\sin(t/2)}\right)^2 \ge 0`],prerequisites:[`fourier`],controls:[{kind:`slider`,key:`N`,label:{ko:`항의 수 N`,en:`Terms N`},min:1,max:40,step:1,init:8}]},{id:`parseval`,title:{ko:`파르세발 항등식`,en:`Parseval's Identity`},order:6,summary:{ko:String.raw`함수의 에너지가 계수 쪽에서도 똑같이 잡히는지를 봅니다.

원래 함수의 제곱 합과 계수들의 제곱합은 정확히 같습니다. 아래 식이 그 내용입니다. 항을 더할수록 잡아내는 에너지 비율이 1에 가까워집니다.

예를 들면, 🐷 저금통 속 💰 동전을 단위별로 세어 다시 합치는 것과 같아요. 세는 방식을 바꿔도 전체 금액은 그대로예요.`,en:String.raw`Is a function's energy captured exactly on the coefficient side?

The function's total square equals the coefficients' total square, as in the formula below. Adding modes pushes the captured share of energy toward all of it. Nothing is lost and nothing is invented.

For example, count the 💰 coins in a 🐷 piggy bank by denomination and add them up. Changing how you count never changes the total.`},tex:[String.raw`\frac1\pi\int_{-\pi}^{\pi} |f|^2 = \frac{a_0^2}{2} + \sum_{n=1}^{\infty}(a_n^2 + b_n^2)`],prerequisites:[`fejer-theorem`],controls:[{kind:`select`,key:`mode`,label:{ko:`함수`,en:`Function`},options:[`square`,`sawtooth`,`parabola`],init:`square`},{kind:`slider`,key:`n`,label:{ko:`항의 수 N`,en:`Terms N`},min:1,max:40,step:1,init:12}]},{id:`gibbs-phenomenon`,title:{ko:`Gibbs 현상`,en:`The Gibbs Phenomenon`},order:7,summary:{ko:String.raw`점프 옆의 혹이 왜 사라지지 않는지를 파고드는 장면입니다.

혹 근처를 확대하면 개수가 달라도 같은 곡선으로 겹쳐집니다. 첫 봉우리의 높이는 약 1.179로 정해져 있습니다. 항을 늘리면 혹이 좁아질 뿐 낮아지지는 않습니다.

예를 들면, 📷 사진을 확대해 모서리를 들여다보는 것과 같아요. 확대할수록 자글거림은 좁아지지만 튀어나온 정도는 그대로예요.`,en:String.raw`Why does the bump beside a jump refuse to die?

Zooming into the bump collapses every case onto one curve. Its first peak is fixed near 1.179. More terms narrow the bump but never lower it.

For example, zoom into the corner of a 📷 photo. The jagged part gets narrower as you zoom, but how far it sticks out stays the same.`},tex:[String.raw`S_N'(x) = \frac{2}{\pi}\frac{\sin(2Nx)}{\sin x}`,String.raw`\text{peak} \to \frac{2}{\pi}\mathrm{Si}(\pi) \approx 1.17898`],prerequisites:[`fourier`],controls:[{kind:`slider`,key:`N`,label:{ko:`항의 수 N`,en:`Terms N`},min:2,max:60,step:1,init:12}]},{id:`function-spaces`,title:{ko:String.raw`함수공간: \(C_c\), \(C_0\), \(C_b\)`,en:String.raw`Function Spaces: \(C_c\), \(C_0\), \(C_b\)`},order:8,summary:{ko:String.raw`함수공간을 보는 씬입니다. 연속함수들의 세 집합 \(C_c\), \(C_0\), \(C_b\)가 어떻게 겹치고 갈리는지 확인합니다.

유계인 연속함수 전체가 \(C_b\)입니다. 멀리 가면 0으로 사라지는 함수가 \(C_0\), 유한 구간 밖에서는 완전히 0인 함수가 \(C_c\)입니다. \(C_c \subset C_0 \subset C_b\)이고, 두 포함 모두 진짜입니다.

예를 들면, ⛺ 텐트는 유한한 땅에만 서 있습니다. 안개는 멀어질수록 옅어지지만 어디에나 깔려 있습니다. 끝없이 펼쳐진 평야는 사라지지 않습니다.`,en:String.raw`This scene is about function spaces. See how the three families of continuous functions \(C_c\), \(C_0\), and \(C_b\) nest and split.

\(C_b\) is all bounded continuous functions. \(C_0\) holds the ones that fade to \(0\) far away, and \(C_c\) the ones that are exactly \(0\) outside a finite interval. Both inclusions \(C_c \subset C_0 \subset C_b\) are strict.

For example, a ⛺ tent stands on a finite patch of ground. Fog thins out with distance but lies everywhere. An endless plain never fades away at all.`},tex:[String.raw`C_c(\mathbb{R}) \subsetneq C_0(\mathbb{R}) \subsetneq C_b(\mathbb{R}), \qquad \|f\|_\infty = \sup_{x \in \mathbb{R}} |f(x)|`,String.raw`\overline{C_c(\mathbb{R})} = C_0(\mathbb{R}), \qquad C_0(\mathbb{R}) \text{ closed in } C_b(\mathbb{R}), \qquad C_c(\mathbb{R}) \text{ not complete}`],prerequisites:[`m-test`,`dini`],controls:[{kind:`select`,key:`mode`,label:{ko:`보기`,en:`View`},options:[`spaces`,`cutoff`],init:`spaces`},{kind:`slider`,key:`k`,label:{ko:`절단 위치 k`,en:`Cutoff k`},min:.5,max:3,step:.25,init:1}]},{id:`fourier-epicycles`,title:{ko:`에피사이클 사다리`,en:`The Epicycle Ladder`},order:9,summary:{ko:String.raw`회전하는 팔을 사슬처럼 이으면 끝점이 곡선을 그립니다.

팔 하나는 원 하나를 그립니다. 팔 두 개면 꽃 모양이 나옵니다. 팔 세 개면 별 모양 패턴이 나옵니다. 팔이 곧 복소지수 항 하나씩입니다.

예를 들면, 🎡 관람차 끝에 작은 관람차를 매단 것과 같아요. 큰 바퀴가 돌고, 그 끝에서 작은 바퀴가 더 빠르게 돕니다. 맨 끝 자리가 그리는 자취가 곡선입니다.`,en:String.raw`Chain rotating arms tip to tip and the endpoint draws a curve.

One arm draws one circle. Two arms already draw a flower. Three arms draw star patterns. Each arm is exactly one complex exponential term.

For example, hang a small 🎡 Ferris wheel at the rim of a big one. The big wheel turns, the small one spins faster at its tip, and the last seat traces the curve.`},tex:[String.raw`P(t) = \sum_k L_k e^{i f_k t}, \qquad f_k \in \mathbb{Z} \Rightarrow P(t + 2\pi) = P(t)`,String.raw`P(t) = 1.4\,e^{-it} + 1.0\,e^{7it}, \qquad |P(t)| \le \sum_k L_k`],prerequisites:[`fourier`],controls:[{kind:`select`,key:`preset`,label:{ko:`프리셋`,en:`Preset`},options:[`pair`,`trio`,`wave`],init:`pair`},{kind:`slider`,key:`arms`,label:{ko:`팔 수`,en:`Arms`},min:1,max:5,step:1,init:2},{kind:`slider`,key:`phase`,label:{ko:`위상 t`,en:`Phase t`},min:0,max:6.28,step:.02,init:.8}]}]},{id:`differentiation`,title:{ko:`미분`,en:`Differentiation`},summary:{ko:`미분의 정의에서 평균값 정리·로피탈 정리·테일러 전개까지, 미분학의 핵심을 다룹니다.`,en:`From the definition of the derivative through the mean value theorem, l'Hôpital, and Taylor expansions.`},sections:[{id:`derivative-properties`,title:{ko:`도함수의 성질`,en:`Properties of the Derivative`},sceneIds:[`diffcont`,`discontinuous-derivative`,`mvt`,`derivative-monotonicity`]},{id:`mvt-extensions`,title:{ko:`평균값 정리의 확장`,en:`Beyond the Mean Value Theorem`},sceneIds:[`inverse-function-theorem`,`cauchy-mvt`,`lhopital`,`darboux`]},{id:`taylor-applications`,title:{ko:`테일러 근사와 응용`,en:`Taylor Approximation and Applications`},sceneIds:[`weierstrass-function`,`taylor`,`taylor-thm`,`convex`,`newton`,`banach`]}],scenes:[{id:`diffcont`,title:{ko:`미분가능 ⇒ 연속`,en:`Differentiable Implies Continuous`},order:1,summary:{ko:String.raw`미분가능하면 연속이지만, 그 반대는 참이 아닙니다. 뾰족한 모서리를 확대해 그 이유를 봅니다.

연속은 그래프가 끊기지 않는다는 뜻입니다. 미분가능은 한 걸음 더 나아갑니다. 접선의 기울기가 하나의 값으로 정해져야 합니다. 꺾인 모서리에서는 기울기가 둘로 갈립니다.

예를 들면, 🚗 자동차가 완만한 언덕을 오르면 어느 순간에도 속도를 잴 수 있어요. 그런데 길이 톱니처럼 뾰족하게 꺾이면, 꺾인 점에서는 속도가 하나로 정해지지 않아요.`,en:String.raw`Differentiable implies continuous, but not the other way around. This scene zooms into the corner that shows why.

Continuous only means the graph has no breaks. Differentiable asks for more. The tangent slope must settle to a single value. At a sharp corner the slope splits into two.

For example, a 🚗 car climbing a smooth hill has a speed at every moment. But on a path with a sharp zigzag corner, the speed at the corner is not one single value.`},tex:[String.raw`f'(a) = \lim_{h \to 0}\frac{f(a+h)-f(a)}{h}`,String.raw`\lim_{h \to 0} f(a+h) = f(a)`],controls:[{kind:`slider`,key:`zoom`,label:{ko:`확대`,en:`Zoom`},min:1,max:8,step:1,init:1}]},{id:`discontinuous-derivative`,title:{ko:`불연속인 도함수`,en:`A Discontinuous Derivative`},order:2,summary:{ko:String.raw`모든 점에서 미분가능한데 도함수만 불연속인 함수입니다. 원점 근처를 확대해 도함수의 진동을 봅니다.

함수 자체는 원점에서 매끄럽게 가라앉습니다. 그런데 기울기는 진동이 멈추지 않습니다. 미분가능해도 도함수가 연속일 필요는 없습니다. 그래도 도함수는 중간값을 건너뛰지 않습니다.

예를 들면, ⚽ 공이 바닥에 닿을 때마다 점점 작게, 점점 빠르게 튀는 모습과 같아요. 공의 높이는 차분히 0으로 가라앉아요. 하지만 튀는 속도는 마지막까지 이리저리 흔들려요.`,en:String.raw`A function differentiable everywhere whose derivative alone is discontinuous. Zoom near the origin to watch the derivative oscillate.

The function itself settles smoothly at the origin. Its slope, though, never stops oscillating. Differentiable does not force the derivative to be continuous. Still, the derivative never skips an intermediate value.

For example, picture a ⚽ ball bouncing lower and faster each time it hits the floor. Its height calmly sinks to zero. Its bounce speed, though, keeps flickering to the very end.`},tex:[String.raw`f'(0) = \lim_{h \to 0} h\sin(1/h) = 0`,String.raw`f'(x) = 2x\sin(1/x) - \cos(1/x) \quad (x \neq 0), \qquad f'\!\left(\tfrac{1}{2\pi n}\right) = -1`],prerequisites:[`diffcont`],controls:[{kind:`slider`,key:`logR`,label:{ko:`관찰 범위 (log₁₀)`,en:`View range (log₁₀)`},min:-3,max:0,step:.1,init:-1},{kind:`slider`,key:`logH`,label:{ko:`h (log₁₀)`,en:`h (log₁₀)`},min:-4,max:1,step:.1,init:-1}]},{id:`mvt`,title:{ko:`평균값 정리`,en:`The Secant Meets Its Parallel Tangent`},order:3,summary:{ko:String.raw`곡선 위에는 할선과 평행한 접선이 반드시 있습니다. 그 접점을 직접 찾아보는 씬입니다.

양 끝을 잇는 직선의 기울기가 평균 기울기입니다. 어느 중간 지점에서는 순간 기울기가 그 평균과 같아집니다. 평균값 정리가 보장하는 사실입니다.

예를 들면, 🚗 자동차로 100km를 한 시간에 달렸다면 평균 속도는 시속 100km예요. 그 한 시간 중 어느 한 순간, 속도계는 정확히 100을 가리켰을 거예요.`,en:String.raw`Somewhere on the curve sits a tangent parallel to the secant. This scene lets you hunt for that point.

The secant's slope is the average rate of change. At some interior point the instantaneous slope matches it exactly. That is what the mean value theorem guarantees.

For example, a 🚗 car covering 100 km in one hour averages 100 km/h. At some moment in that hour, the speedometer read exactly 100.`},tex:[String.raw`f'(\xi) = \frac{f(b)-f(a)}{b-a}`],controls:[{kind:`select`,key:`fn`,label:{ko:`함수`,en:`Function`},options:[`x^3`,`x^2`,`x^3-3x`,`const`],init:`x^3`},{kind:`slider`,key:`xi`,label:{ko:`ξ 위치`,en:`ξ position`},min:0,max:100,step:1,init:40}]},{id:`derivative-monotonicity`,title:{ko:`도함수 부호와 단조성`,en:`Derivative Sign and Monotonicity`},order:4,summary:{ko:String.raw`도함수의 부호가 곡선의 오르내림을 결정합니다. 점을 드래그해 접선 색이 부호를 따라가는 것을 봅니다.

기울기가 양수인 곳에서는 곡선이 올라갑니다. 음수인 곳에서는 내려갑니다. 그래서 부호만 읽으면 단조 구간을 알 수 있습니다. 평균값 정리가 이 연결을 증명합니다.

예를 들면, 🪜 계단을 오르는 동안에는 높이가 계속 늘어요. 내려가는 동안에는 높이가 계속 줄어요. 기울어진 방향만 봐도 오를지 내릴지 알 수 있어요.`,en:String.raw`The sign of the derivative decides where the curve rises and falls. Drag the point and watch the tangent's color track the sign.

Where the slope is positive, the curve climbs. Where it is negative, the curve drops. Reading the sign alone reveals the monotone stretches. The mean value theorem proves this link.

For example, while you climb a 🪜 staircase your height keeps growing. While you go down, it keeps shrinking. The tilt alone tells you whether you rise or fall.`},tex:[String.raw`f' \ge 0 \Rightarrow f \text{ increasing}`,String.raw`f'(x_0) = \lim_{h\to 0}\frac{f(x_0+h)-f(x_0)}{h}`],prerequisites:[`mvt`],controls:[{kind:`select`,key:`fn`,label:{ko:`함수`,en:`Function`},options:[`cubic`,`sine`,`exp`],init:`cubic`},{kind:`slider`,key:`x`,label:{ko:`x 위치`,en:`x position`},min:0,max:100,step:1,init:0}]},{id:`inverse-function-theorem`,title:{ko:`역함수 정리`,en:`The Inverse Function Theorem`},order:5,summary:{ko:String.raw`기울기가 0이 아닌 점 근처에서는 함수를 뒤집을 수 있습니다. 뒤집힌 함수의 기울기는 원래 기울기의 역수입니다.

뒤집기는 가로와 세로를 맞바꾸는 일입니다. 그래서 오름폭과 나아감의 비율이 뒤집힙니다. 두 접선의 기울기를 곱하면 정확히 1이 됩니다.

예를 들면, 🏪 가게에서 🍬 사탕 1개가 💰 돈 4개와 같다면, 거꾸로 돈 1개는 사탕 4분의 1개예요. 비율을 뒤집으면 기울기도 역수가 돼요.`,en:String.raw`Near a point with nonzero slope, a function can be flipped. The flipped function's slope is the reciprocal of the original.

Flipping swaps horizontal and vertical. So the ratio of rise to run turns upside down. Multiply the two tangent slopes and you get exactly 1.

For example, imagine 💰 money and 🍬 candies traded at a 🏪 shop: 4 money for 1 candy. Traded back, 1 money buys a quarter of a candy — the rate flips into its reciprocal.`},tex:[String.raw`(f^{-1})'(f(a)) = \frac{1}{f'(a)}`,String.raw`f(x) = x^3+x,\ f'(1) = 4,\ (f^{-1})'(2) = \frac{1}{4}`],prerequisites:[`mvt`],controls:[{kind:`select`,key:`fn`,label:{ko:`함수`,en:`Function`},options:[`x^3+x`,`e^x`],init:`x^3+x`},{kind:`slider`,key:`a`,label:{ko:`점 a`,en:`Point a`},min:-1,max:2,step:.1,init:1}]},{id:`cauchy-mvt`,title:{ko:`코시 평균값 정리`,en:`Cauchy's Mean Value Theorem`},order:6,summary:{ko:String.raw`두 함수가 함께 움직이는 매개곡선에도 평균값 정리가 있습니다. 할선과 평행한 접점이 곡선 위에 존재합니다.

한 양의 변화와 다른 양의 변화를 함께 봅니다. 전체 구간의 변화 비율과 같은 비율이 되는 순간이 있습니다. 로피탈 정리를 증명하는 다리입니다.

예를 들면, 🚗 자동차로 산길을 오르면 거리도 늘고 높이도 늘어요. 전체 구간에서 늘어난 높이와 거리의 비율과 똑같은 비율로 오르는 순간이 반드시 있어요.`,en:String.raw`The mean value theorem survives on parametric curves, where two functions move together. A tangent parallel to the chord always exists.

Track the change of one quantity against another. Somewhere, the instantaneous ratio equals the whole interval's ratio. This is the bridge that proves l'Hôpital's rule.

For example, a 🚗 car climbing a mountain road gains distance and height together. At some moment it climbs at exactly the trip's overall height-to-distance ratio.`},tex:[String.raw`\frac{f'(\xi)}{g'(\xi)} = \frac{f(b)-f(a)}{g(b)-g(a)}`,String.raw`\xi = \frac{14}{9} \approx 1.556`],prerequisites:[`mvt`],controls:[{kind:`slider`,key:`xi`,label:{ko:`ξ 위치`,en:`ξ position`},min:1,max:2,step:.01,init:1.56}]},{id:`lhopital`,title:{ko:`로피탈 정리`,en:`L'Hôpital's Rule`},order:7,summary:{ko:String.raw`0 나누기 0처럼 답이 안 보이는 극한을 다루는 씬입니다. 분자와 분모를 각각 미분하면 극한이 드러납니다.

둘 다 0에 가까워지면 비율은 양으로 정해지지 않습니다. 누가 더 빨리 줄어드는지가 비율을 정합니다. 그래서 속도끼리 비교하면 답이 나옵니다.

예를 들면, 💧 물 두 웅덩이가 둘 다 말라가면 남은 양의 비율은 처음 양이 정하지 않아요. 누가 더 빨리 마르는지, 그 속도의 비율이 정해요.`,en:String.raw`This scene tackles limits that look like 0 divided by 0. Differentiate top and bottom separately and the limit appears.

When both sides shrink to zero, amounts stop deciding the ratio. What matters is which one shrinks faster. Comparing the two speeds gives the answer.

For example, when two puddles of 💧 water both dry up, their remaining ratio is not set by the starting amounts. It is set by the ratio of their drying speeds.`},tex:[String.raw`\lim_{x \to a}\frac{f(x)}{g(x)} = \lim_{x \to a}\frac{f'(x)}{g'(x)}`,String.raw`\lim_{x \to 0}\frac{\sin x}{x} = \lim_{x \to 0}\cos x = 1, \qquad \lim_{x \to \infty}\frac{\ln x}{x} = \lim_{x \to \infty}\frac{1}{x} = 0`],prerequisites:[`cauchy-mvt`],controls:[{kind:`select`,key:`pair`,label:{ko:`함수 쌍`,en:`Function pair`},options:[`sin x / x`,`ln x / x`],init:`sin x / x`},{kind:`slider`,key:`pos`,label:{ko:`x 위치 (오른쪽 → 한계점)`,en:`x position (right → limit point)`},min:0,max:100,step:1,init:55}]},{id:`darboux`,title:{ko:`다르부 정리`,en:`Darboux's Theorem`},order:8,summary:{ko:String.raw`도함수는 불연속이어도 중간값 성질을 지킵니다. 격렬히 진동하는 도함수가 모든 높이를 밟는 것을 봅니다.

도함수는 값을 건너뛰며 점프할 수 없습니다. 한 값에서 다른 값으로 가려면 중간을 전부 거쳐야 합니다. 불연속인 도함수에게도 이 규칙은 지켜집니다.

예를 들면, 🌡️ 온도계 눈금이 영하 1도에서 영상 1도로 바뀔 때 중간 온도를 전부 거치는 것과 같아요. 도함수도 중간 값을 건너뛰는 점프는 없어요.`,en:String.raw`A derivative keeps the intermediate value property even when discontinuous. Watch a wildly oscillating derivative step on every level.

A derivative cannot jump across values. To get from one value to another it must pass through everything between. Even a discontinuous derivative obeys this rule.

For example, a 🌡️ thermometer sliding from −1° to 1° passes through every temperature between. A derivative likewise never jumps over an intermediate value.`},tex:[String.raw`f'(x) = 2x\sin(1/x) - \cos(1/x),\ f'(0) = 0`,String.raw`f'(a) < c < f'(b) \Rightarrow \exists\, \xi \in (a,b):\ f'(\xi) = c`],prerequisites:[`mvt`,`lhopital`],controls:[{kind:`slider`,key:`zoom`,label:{ko:`0 근처 확대`,en:`Zoom at 0`},min:0,max:100,step:1,init:40},{kind:`slider`,key:`level`,label:{ko:`테스트 높이 y = c`,en:`Test level y = c`},min:-1.2,max:1.2,step:.05,init:.4},{kind:`toggle`,key:`showF`,label:{ko:`f(x) 표시`,en:`Show f(x)`},init:!0}]},{id:`weierstrass-function`,title:{ko:`바이어슈트라스 함수`,en:`The Weierstrass Function`},order:9,summary:{ko:String.raw`모든 점에서 연속이지만 어느 점에서도 미분 불가능한 함수입니다. 부분합을 늘릴수록 그래프가 가시처럼 뾰족해집니다.

확대하면 매끄러워지는 보통 곡선과 다릅니다. 아무리 확대해도 새로운 톱니가 나타납니다. 그래서 어느 점에서도 접선이 정해지지 않습니다. 연속성의 증명은 균등수렴이 맡습니다.

예를 들면, 🌳 나무 가지를 확대하면 작은 가지가 보이고, 또 확대하면 더 작은 가지가 끝없이 나오는 것과 같아요. 어느 배율로 봐도 뾰족함이 사라지지 않아요.`,en:String.raw`A function continuous everywhere yet differentiable nowhere. Add partial sums and the graph grows thornier.

Ordinary curves flatten when you zoom in. This one grows fresh teeth at every magnification. So no point ever earns a tangent line. Uniform convergence powers the continuity half.

For example, zoom into a 🌳 tree branch and smaller twigs appear, then smaller still, forever. At no magnification does the jaggedness smooth away.`},tex:[String.raw`W(x) = \sum_{n=0}^{\infty} a^n\cos(b^n\pi x),\quad 0 < a < 1 < b,\ ab > 1 + \frac{3\pi}{2}`,String.raw`|a^n\cos(b^n\pi x)| \le a^n,\quad \sum a^n < \infty\ \Rightarrow\ W \text{ continuous}`],prerequisites:[`darboux`],controls:[{kind:`slider`,key:`n`,label:{ko:`부분합 항 수 N`,en:`Partial-sum terms N`},min:0,max:8,step:1,init:4}]},{id:`taylor`,title:{ko:`테일러 근사`,en:`Polynomials Hugging the Curve`},order:10,summary:{ko:String.raw`곡선 위에 다항식을 겹쳐 보는 씬입니다. 차수를 올리면 다항식이 곡선에 달라붙습니다.

한 점에서 값과 기울기와 굽은 정도를 맞춥니다. 맞추는 정보가 많을수록 흉내가 정확해집니다. 멀리 가면 흉내는 결국 틀어집니다.

예를 들면, 🚗 자동차가 지금 어디 있고 얼마나 빠른지, 가속하는지까지 알면 조금 뒤 위치를 꽤 정확히 맞힐 수 있어요. 아는 정보가 많을수록 더 먼 위치까지 맞혀요.`,en:String.raw`This scene lays a polynomial over a curve. Raise the degree and it hugs the curve.

Match the value, the slope, and the bending at one point. The more you match, the better the imitation nearby. Far away, the imitation eventually breaks.

For example, knowing where a 🚗 car is, how fast it goes, and how it accelerates lets you predict its position a little later. More information predicts farther ahead.`},tex:[String.raw`T_n(x) = \sum_{k=0}^{n} \frac{f^{(k)}(a)}{k!}(x-a)^k`],controls:[{kind:`select`,key:`fn`,label:{ko:`함수`,en:`Function`},options:[`sin`,`exp`],init:`sin`},{kind:`slider`,key:`degree`,label:{ko:`차수 n`,en:`Degree n`},min:1,max:9,step:2,init:3}]},{id:`taylor-thm`,title:{ko:`테일러 정리: 나머지 상한`,en:`Taylor's Theorem: The Remainder Envelope`},order:11,summary:{ko:String.raw`테일러 근사의 오차가 갇히는 띠를 보는 씬입니다. 차수를 키우면 띠가 0으로 쪼그라듭니다.

나머지 항에는 위쪽 한계가 있습니다. 그래서 오차가 최대 얼마인지 미리 보장할 수 있습니다. 띠 안에 진짜 곡선이 항상 들어 있습니다.

예를 들면, 📏 자로 길이를 재면 오차가 최대 1mm라고 보장할 수 있어요. 테일러 나머지도 마찬가지예요. 차수를 올리면 보장되는 오차 범위가 좁아져요.`,en:String.raw`This scene shows the band that traps the Taylor error. Raise the degree and the band shrinks to zero.

The remainder has a ceiling. So you can promise in advance how large the error can get. The true curve always stays inside the band.

For example, measuring with a 📏 ruler promises an error of at most a millimeter. The Taylor remainder makes the same kind of promise. Higher degree narrows the promised range.`},tex:[String.raw`f(x) = T_n(x) + R_n(x), \quad |R_n(x)| \le \frac{|x|^{n+1}}{(n+1)!}`],prerequisites:[`taylor`],controls:[{kind:`slider`,key:`degree`,label:{ko:`차수 n`,en:`Degree n`},min:0,max:9,step:1,init:5}]},{id:`convex`,title:{ko:`볼록함수`,en:`Convex Functions`},order:12,summary:{ko:String.raw`두 점을 잇는 현이 그래프 위에 뜨는 함수를 봅니다. 볼록함과 도함수의 증가가 같은 말임을 확인합니다.

그릇처럼 아래로 볼록한 모양이 핵심입니다. 기울기가 계속 커지는 곡선이 바로 볼록합니다. 가운데 지점의 높이는 양 끝 높이의 평균을 넘지 않습니다.

예를 들면, 그릇 모양 곡선 위 두 점에 🧵 줄을 팽팽히 걸면 줄은 항상 곡선보다 위에 떠 있어요. 줄의 가운데가 곡선의 가운데보다 높은 거예요.`,en:String.raw`This scene studies functions whose chords float above the graph. Convexity turns out to be the derivative increasing.

Picture a bowl shape opening upward. A curve whose slope keeps growing is convex. The middle height never exceeds the average of the end heights.

For example, stretch a 🧵 string taut between two points on a bowl-shaped curve and it always floats above the curve. The string's middle sits higher than the curve's middle.`},tex:[String.raw`f(tx+(1-t)y) \le tf(x)+(1-t)f(y)`,String.raw`f \text{ convex } \iff f' \text{ increasing}, \quad f'' \ge 0 \implies \text{convex}`],prerequisites:[`taylor-thm`],controls:[{kind:`select`,key:`fn`,label:{ko:`함수 f`,en:`Function f`},options:[`square`,`exp`,`abs`],init:`square`},{kind:`slider`,key:`a`,label:{ko:`a`,en:`a`},min:-2,max:2,step:.1,init:-1},{kind:`slider`,key:`b`,label:{ko:`b`,en:`b`},min:-2,max:2,step:.1,init:1}]},{id:`newton`,title:{ko:`뉴턴법`,en:`Riding Tangents to the Root`},order:13,summary:{ko:String.raw`접선을 타고 내려가 방정식의 근을 찾는 씬입니다. 반복할수록 맞는 자릿수가 두 배로 늘어납니다.

곡선에서 접선을 긋고 그 직선의 근을 다음 추측으로 삼습니다. 직선으로 곡선을 대신하는 단순한 아이디어입니다. 좋은 시작점에서는 놀랍게 빠르게 수렴합니다.

예를 들면, 🧑 친구가 숨긴 숫자를 맞힐 때 힌트로 다음 추측을 정하면, 맞는 자릿수가 매번 두 배씩 늘어요. 처음엔 어림없던 답이 몇 번 만에 정확해져요.`,en:String.raw`Ride tangent lines down to a root. Each iteration doubles the number of correct digits.

Draw the tangent and take its root as the next guess. A straight line stands in for the curve. From a good start, the guesses converge astonishingly fast.

For example, guessing a number a 🧑 friend hid, each hint doubles the correct digits of your next guess. A wild first guess turns exact within a few rounds.`},tex:[String.raw`x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}`],controls:[{kind:`select`,key:`fn`,label:{ko:`함수`,en:`Function`},options:[`x^2-2`,`x^3-2x+2`],init:`x^2-2`},{kind:`slider`,key:`x0`,label:{ko:`시작점 x₀`,en:`Start x₀`},min:0,max:3,step:.5,init:1.5},{kind:`slider`,key:`n`,label:{ko:`반복 횟수 n`,en:`Iterations n`},min:1,max:8,step:1,init:4}]},{id:`banach`,title:{ko:`바나흐 고정점`,en:`The Contraction Cobweb`},order:14,summary:{ko:String.raw`거미줄 그림이 한 점으로 빨려드는 씬입니다. 그 점이 바로 고정점입니다.

거리를 일정 비율로 줄이는 함수를 반복 적용합니다. 점들은 서로에게 점점 가까워집니다. 결국 갈 곳은 단 하나의 점뿐입니다.

예를 들면, 📦 상자 안에 더 작은 상자를 넣고 그 안에 또 작은 상자를 넣다 보면, 결국 한 점에 모이는 것과 같아요. 반복할수록 남는 자리가 좁아져요.`,en:String.raw`A cobweb spirals into a single point. That point is the fixed point.

Repeatedly apply a map that shrinks distances by a fixed ratio. The points crowd closer and closer together. In the end only one point can remain.

For example, nest a smaller 📦 box inside a box, then a smaller one inside that, and the boxes close in on a single point. Each step leaves less room than the last.`},tex:[String.raw`d(f(x),f(y)) \le q\,d(x,y),\; q<1 \;\Rightarrow\; x_{n+1} = f(x_n) \to x^*`],controls:[{kind:`select`,key:`fn`,label:{ko:`함수`,en:`Function`},options:[`x/2+1`,`cos`],init:`x/2+1`},{kind:`slider`,key:`x0`,label:{ko:`시작점 x₀`,en:`Start x₀`},min:0,max:1,step:.1,init:.5},{kind:`slider`,key:`n`,label:{ko:`반복 횟수 n`,en:`Iterations n`},min:1,max:24,step:1,init:6}]}]},{id:`integration`,title:{ko:`적분`,en:`Integration`},summary:{ko:`리만 적분에서 르베그 적분까지 — 적분의 개념이 어떻게 확장되는지 따라갑니다.`,en:`From the Riemann integral to the Lebesgue integral — how the idea of integration expands.`},sections:[{id:`special-improper`,title:{ko:`특수함수와 이상적분`,en:`Special Functions and Improper Integrals`},sceneIds:[`gamma`,`beta-function`,`bohr-mollerup`,`improper`,`gabriel-horn`]},{id:`riemann`,title:{ko:`리만 적분`,en:`The Riemann Integral`},sceneIds:[`riemann`,`dirichlet-function`,`volterra-function`,`ftc`,`integration-by-parts`,`change-of-variables`]},{id:`variation-stieltjes`,title:{ko:`유계변동과 스틸체스 적분`,en:`Bounded Variation and the Stieltjes Integral`},sceneIds:[`bounded-variation`,`arc-length`,`riemann-stieltjes`,`jordan-decomposition`]},{id:`lebesgue-basics`,title:{ko:`측도와 르베그 적분`,en:`Measure and the Lebesgue Integral`},sceneIds:[`measure`,`vitali`,`borel-cantelli`,`lebesgue`]},{id:`lebesgue-convergence`,title:{ko:`르베그 수렴 정리와 응용`,en:`Lebesgue Convergence Theorems and Applications`},sceneIds:[`lebesgue-convergence`,`fubini-tonelli`,`convolution`,`egorov`,`absolute-continuity`,`differentiation-under-integral`,`minkowski`]}],scenes:[{id:`gamma`,title:{ko:`감마함수`,en:`The Gamma Function`},order:1,summary:{ko:String.raw`팩토리얼을 실수까지 늘인 함수를 봅니다. 정수에서는 계단처럼 뛰던 값이 매끄러운 곡선이 됩니다.

핵심 규칙은 한 칸 밀면 그 칸의 수가 곱해진다는 것입니다. 이 규칙이 정수 사이 값을 채웁니다. 넓이로 정의되는 적분이 그 곡선을 만듭니다.

예를 들면, 🪜 계단이 1, 2, 6, 24처럼 점프하는 사이에 미끄럼틀 같은 곡선을 끼워 넣은 거예요. 이제 계단 사이의 높이도 잴 수 있어요.`,en:String.raw`The factorial stretched to real arguments. Values that jumped like stairs become one smooth curve.

The key rule: shifting by one multiplies by the shift amount. That rule fills in the values between integers. An integral, an area, draws the whole curve.

For example, picture a 🪜 staircase jumping 1, 2, 6, 24, with a smooth slide fitted between its steps. Now the heights between steps can be measured too.`},tex:[String.raw`\Gamma(x) = \int_0^\infty t^{x-1} e^{-t}\,dt \quad (x > 0)`,String.raw`\Gamma(x+1) = x\,\Gamma(x)`],prerequisites:[`stirling`],controls:[{kind:`slider`,key:`x`,label:{ko:`x`,en:`x`},min:.1,max:4,step:.05,init:2}]},{id:`beta-function`,title:{ko:`베타 함수`,en:`The Beta Function`},order:2,summary:{ko:String.raw`두 지수 p와 q가 만드는 곡선 아래 넓이가 베타 함수입니다. 슬라이더로 곡선 모양이 바뀌는 것을 봅니다.

곡선은 양 끝에서 서로 다른 힘으로 당겨집니다. 그래서 봉우리의 위치와 높이가 달라집니다. 이 넓이는 감마함수들의 비율과 정확히 같습니다.

예를 들면, 🧵 줄의 양쪽 끝을 서로 다른 힘으로 당기면 가운데 볼록한 모양이 달라져요. 양 끝 힘을 조절하는 것이 p와 q의 역할이에요.`,en:String.raw`The area under a curve shaped by two exponents, p and q, is the beta function. Sliders morph the curve's shape.

The two ends of the curve are pulled with different strengths. So the hump shifts and changes height. This area equals an exact ratio of gamma functions.

For example, pull the two ends of a 🧵 string with different strengths and the bulge in the middle changes shape. Adjusting the end pulls is what p and q do.`},tex:[String.raw`B(p,q)=\int_0^1 t^{p-1}(1-t)^{q-1}\,dt\quad(p,q>0)`,String.raw`B(p,q)=\frac{\Gamma(p)\Gamma(q)}{\Gamma(p+q)}`],prerequisites:[`gamma`],controls:[{kind:`slider`,key:`p`,label:{ko:`p`,en:`p`},min:.2,max:5,step:.1,init:2},{kind:`slider`,key:`q`,label:{ko:`q`,en:`q`},min:.2,max:5,step:.1,init:3}]},{id:`bohr-mollerup`,title:{ko:`보어-몰레루프 정리`,en:`Bohr–Mollerup Theorem`},order:3,summary:{ko:String.raw`두 가지 규칙만으로는 팩토리얼의 확장 함수가 하나로 정해지지 않습니다. 정수마다 감마함수와 똑같은 가짜 함수가 살아남습니다.

가짜를 걸러내는 추가 조건이 로그볼록성입니다. 로그를 씌운 그래프가 볼록해야 진짜입니다. 현 테스트가 그 지문을 드러냅니다.

예를 들면, 🧑 친구의 키와 몸무게만으로는 그 친구인지 확정할 수 없어요. 지문까지 같아야 확실해요. 로그볼록성이 감마함수의 지문이에요.`,en:String.raw`Two rules alone do not pin down the factorial's extension. An impostor matching the gamma function at every integer survives.

One extra condition filters the impostor out: log-convexity. The graph of the logarithm must be convex. The secant test exposes this fingerprint.

For example, height and weight alone cannot confirm a 🧑 friend's identity. A matching fingerprint settles it. Log-convexity is the gamma function's fingerprint.`},tex:[String.raw`f(1) = 1`,String.raw`f(x+1) = x\,f(x) \quad (x > 0)`,String.raw`\ln f \text{ is convex on } (0,\infty)`,String.raw`f = \Gamma`],prerequisites:[`gamma`],controls:[{kind:`slider`,key:`amp`,label:{ko:`진폭 a`,en:`Amplitude a`},min:0,max:.5,step:.05,init:.3},{kind:`slider`,key:`probe`,label:{ko:`현 테스트 위치 x₀`,en:`Secant probe x₀`},min:.2,max:1.8,step:.1,init:.6}]},{id:`improper`,title:{ko:`이상적분`,en:`Improper Integrals`},order:4,summary:{ko:String.raw`끝이 무한히 뻗거나 높이가 폭발하는 구간의 적분을 봅니다. 지수 p가 수렴과 발산을 가릅니다.

무한히 이어져도 넓이가 유한할 수 있습니다. 꼬리가 충분히 빨리 가늘어지면 됩니다. 너무 두꺼우면 넓이는 끝없이 쌓입니다.

예를 들면, 💧 물이 새는 양이 빠르게 줄어들면 영원히 새어도 전체 양은 한 바가지로 정해져요. 줄어드는 속도가 느리면 바가지는 결국 넘쳐요.`,en:String.raw`Integrals over intervals that run forever or blow up. The exponent p decides convergence against divergence.

An endless region can still have finite area. Its tail just has to thin out fast enough. Too thick a tail piles area up forever.

For example, a 💧 water leak that slows down quickly spills only one bucketful, even leaking forever. A leak that slows too little overflows the bucket in the end.`},tex:[String.raw`\int_1^{\infty}\frac{dx}{x^p} = \frac{1}{p-1}\ \ (p>1)`,String.raw`\int_0^1\frac{dx}{\sqrt{x}} = 2`],prerequisites:[`harmonic`],controls:[{kind:`select`,key:`kind`,label:{ko:`적분 종류`,en:`Integral kind`},options:[`tail`,`singular`],init:`tail`},{kind:`slider`,key:`p`,label:{ko:`지수 p`,en:`Exponent p`},min:.5,max:2,step:.01,init:1},{kind:`slider`,key:`R`,label:{ko:`위끝 R`,en:`Upper limit R`},min:2,max:50,step:1,init:10},{kind:`slider`,key:`eps`,label:{ko:`아래끝 ε`,en:`Lower limit ε`},min:.001,max:.5,step:.001,init:.01}]},{id:`gabriel-horn`,title:{ko:`가브리엘의 나팔`,en:`Gabriel's Horn`},order:5,summary:{ko:String.raw`곡선을 회전시켜 만든 나팔의 역설을 봅니다. 부피는 유한한데 겉넓이는 무한대입니다.

안에 채우는 양과 겉을 칠하는 양이 다르게 행동합니다. 얇아지는 속도가 두 계산에서 갈립니다. 그래서 한쪽은 멈추고 한쪽은 계속 자랍니다.

예를 들면, 🧵 줄을 말아 넣으면 작은 📦 상자에 다 들어가요. 하지만 그 줄을 전부 펴서 바닥에 깔면 끝없이 넓은 방이 필요해요.`,en:String.raw`Spin a curve into a horn and meet a paradox. The volume is finite but the surface area is infinite.

Filling the inside and painting the outside behave differently. The thinning rate splits the two computations. One total stops growing while the other never does.

For example, a coiled 🧵 string fits inside a small 📦 box. Spread that same string flat across the floor and it would need an endless room.`},tex:[String.raw`V = \pi\int_1^{\infty} \frac{dx}{x^2} = \pi`,String.raw`A \ge 2\pi\int_1^R \frac{dx}{x} = 2\pi\ln R \to \infty`],prerequisites:[`improper`],controls:[{kind:`slider`,key:`r`,label:{ko:`절단 R`,en:`Truncation R`},min:1,max:50,step:.5,init:5}]},{id:`riemann`,title:{ko:`리만합 스퀴즈`,en:`Upper and Lower Sums Close In`},order:6,summary:{ko:String.raw`곡선 아래에 직사각형을 채워 넓이를 재는 씬입니다. 아래합과 위합이 진짜 넓이를 양쪽에서 조여옵니다.

낮게 채운 값과 높게 채운 값 사이에 답이 있습니다. 분할을 잘게 할수록 두 값의 틈이 좁혀집니다. 틈이 사라지면 그 값이 적분입니다.

예를 들면, 🍰 케이크의 곡선 모양을 네모난 조각들로 채우는 것과 같아요. 조각을 잘게 자를수록 빈틈이 줄고 모양에 딱 맞아요.`,en:String.raw`Rectangles pack the region under a curve to measure its area. Lower and upper sums squeeze the true area from both sides.

The answer sits between the underfilled and overfilled totals. Finer partitions narrow the gap between them. When the gap vanishes, that value is the integral.

For example, fit square pieces into the curved shape of a 🍰 cake. The smaller you cut the pieces, the fewer gaps remain and the better they match.`},tex:[String.raw`L(f,P) \le \int_a^b f \le U(f,P)`],controls:[{kind:`slider`,key:`n`,label:{ko:`분할 수 n`,en:`Subdivisions n`},min:1,max:48,step:1,init:12}]},{id:`dirichlet-function`,title:{ko:`디리클레 함수`,en:`The Dirichlet Function`},order:7,summary:{ko:String.raw`유리수에서만 1이고 무리수에서는 0인 함수입니다. 리만 적분이 실패하는 대표 반례입니다.

어느 작은 구간에도 유리수와 무리수가 함께 들어 있습니다. 그래서 위합은 항상 1에 머뭅니다. 아래합은 항상 0에 머물러 틈이 닫히지 않습니다.

예를 들면, 검은 ⚽ 공과 흰 공이 아무리 잘게 섞여 있어도, 어떤 무더기를 떠도 두 색이 다 들어 있는 것과 같아요. 그래서 높이를 하나로 정할 수 없어요.`,en:String.raw`A function that is 1 on the rationals and 0 on the irrationals. It is the canonical failure of the Riemann integral.

Every tiny interval holds rationals and irrationals together. So the upper sum stays pinned at 1. The lower sum stays at 0 and the gap never closes.

For example, mix black and white ⚽ balls as finely as you like, and every scoop still holds both colors. No single height can be assigned.`},tex:[String.raw`U(f,P) = 1,\ L(f,P) = 0\ \forall P`,String.raw`f = \mathbf{1}_{\mathbb{Q}}`],prerequisites:[`riemann`],controls:[{kind:`slider`,key:`n`,label:{ko:`분할 수 n`,en:`Subdivisions n`},min:1,max:32,step:1,init:8}]},{id:`volterra-function`,title:{ko:`Volterra 함수`,en:`Volterra's Function`},order:8,summary:{ko:String.raw`어디서나 미분가능하고 도함수도 유계인데, 그 도함수는 리만 적분이 안 되는 반례입니다. 팻 칸토어 집합 위에 혹들을 올립니다.

함수 자체는 매끄럽게 이어집니다. 문제는 도함수가 두꺼운 집합 위에서 심하게 출렁인다는 것입니다. 리만합은 그 출렁임을 잡아내지 못합니다.

예를 들면, 매끄러운 길 위를 📏 자로 기울기를 재는데, 자가 닿는 곳마다 값이 튀어 기록할 수 없는 것과 같아요. 길은 멀쩡한데 측정이 실패하는 거예요.`,en:String.raw`Differentiable everywhere with a bounded derivative, yet that derivative is not Riemann integrable. Bumps rise over a fat Cantor set.

The function itself joins up smoothly. The trouble is its derivative, oscillating hard on a thick set. Riemann sums cannot capture that oscillation.

For example, measure the slope of a smooth road with a 📏 ruler, but the reading jumps wherever the ruler touches. The road is fine; the measurement fails.`},tex:[String.raw`\varphi(x) = (x-a)^2(b-x)^2\sin\frac{1}{x-a}`,String.raw`f'\ \text{bounded},\quad f' \notin \mathcal{R}[0,1]`],prerequisites:[`riemann`],controls:[{kind:`slider`,key:`stage`,label:{ko:`단계`,en:`Stage`},min:1,max:7,step:1,init:4},{kind:`slider`,key:`interval`,label:{ko:`확대 구간`,en:`Zoom interval`},min:0,max:126,step:1,init:0}]},{id:`ftc`,title:{ko:`미적분 기본정리`,en:`The Area Function's Derivative Is the Function`},order:9,summary:{ko:String.raw`넓이를 쌓는 함수의 기울기를 재는 씬입니다. 그 기울기가 원래 함수와 일치합니다.

넓이가 쌓이는 속도는 그 지점의 높이와 같습니다. 오른쪽 끝을 조금 밀면 그만큼의 띠가 붙습니다. 띠의 넓이는 높이 곱하기 이동 거리입니다.

예를 들면, 💧 물을 탱크에 채울 때 물이 차오르는 속도는 지금 나오는 물의 양과 같아요. 쌓인 양을 미분하면 나오는 양이 되는 거예요.`,en:String.raw`Measure the slope of the accumulated-area function. It matches the original function exactly.

Area grows at a rate equal to the height at that point. Nudge the right edge and a thin strip attaches. The strip's area is height times the nudge.

For example, filling a tank with 💧 water, the level rises at the rate the water pours in. Differentiate what has accumulated and you recover what is pouring.`},tex:[String.raw`A(x) = \int_a^x f(t)\,dt \;\Rightarrow\; A'(x) = f(x)`],controls:[{kind:`select`,key:`fn`,label:{ko:`함수`,en:`Function`},options:[`x^2`,`sin`],init:`x^2`},{kind:`slider`,key:`x`,label:{ko:`x`,en:`x`},min:0,max:100,step:1,init:60}]},{id:`integration-by-parts`,title:{ko:`부분적분`,en:`Integration by Parts`},order:10,summary:{ko:String.raw`곱의 미분법칙을 거꾸로 돌려 적분을 바꾸는 씬입니다. 면적을 두 조각으로 나누어 각각 계산합니다.

어려운 적분을 경계값과 쉬운 적분으로 바꿉니다. 넓이 그림에서는 큰 직사각형을 두 조각으로 나눈 것입니다. 양쪽 계산이 소수점 끝까지 일치합니다.

예를 들면, 🍰 케이크의 넓이를 잴 때 전체 네모에서 한 조각을 빼는 방식으로 바꾸면 계산이 쉬워지는 것과 같아요. 나눠서 재면 어려운 모양도 잴 수 있어요.`,en:String.raw`Run the product rule backwards to trade one integral for another. The area splits into two pieces, each computed separately.

A hard integral becomes a boundary term plus an easier integral. In the area picture, one big rectangle splits into two pieces. Both computations agree to the last decimal.

For example, measuring a 🍰 cake's area gets easier when you swap to a full rectangle minus one piece. Split the measuring and even awkward shapes become manageable.`},tex:[String.raw`\int_a^b u\,dv = [uv]_a^b - \int_a^b v\,du`,String.raw`\int x e^x\,dx = (x-1)e^x + C`],prerequisites:[`ftc`],controls:[{kind:`select`,key:`pair`,label:{ko:`함수 쌍`,en:`Function pair`},options:[`x·e^x`,`x·sin x`],init:`x·e^x`},{kind:`slider`,key:`b`,label:{ko:`상한 b`,en:`Upper limit b`},min:.5,max:3,step:.1,init:2}]},{id:`change-of-variables`,title:{ko:`치환적분`,en:`Change of Variables`},order:11,summary:{ko:String.raw`축을 늘이고 줄여 적분 구간을 바꾸는 씬입니다. 서로 다른 두 치환이 같은 적분값으로 모입니다.

눈금을 바꾸면 구간의 끝점도 함께 바뀝니다. 늘어난 비율만큼 넓이를 보정해야 합니다. 보정이 끝나면 어려운 적분이 쉬운 적분이 됩니다.

예를 들면, 눈금이 2배로 늘어난 📏 자로 길이를 재면 잰 값도 2배가 돼요. 그래서 반으로 나눠 보정해야 진짜 길이가 나와요.`,en:String.raw`Stretch and squeeze the axis to rewrite an integral. Two different substitutions land on the same value.

Change the scale and the endpoints move along. Areas need correcting by the stretch factor. After the correction, a hard integral turns easy.

For example, measure with a 📏 ruler whose marks are stretched twofold and every reading doubles. Halving the reading corrects it back to the true length.`},tex:[String.raw`\int_a^b f(\varphi(x))\varphi'(x)\,dx = \int_{\varphi(a)}^{\varphi(b)} f(u)\,du`,String.raw`\int_0^1 2x e^{x^2}\,dx = \int_0^1 e^u\,du = e - 1`],prerequisites:[`integration-by-parts`],controls:[{kind:`select`,key:`sub`,label:{ko:`치환`,en:`Substitution`},options:[`u=x^2`,`u=sin x`],init:`u=x^2`},{kind:`slider`,key:`N`,label:{ko:`구간 수`,en:`Panels`},min:4,max:200,step:4,init:50}]},{id:`bounded-variation`,title:{ko:`유계변동 함수`,en:`Functions of Bounded Variation`},order:12,summary:{ko:String.raw`함수가 출렁인 총 거리를 재는 씬입니다. 그 합이 유한한 상한 안에 머물면 유계변동입니다.

출발점과 도착점만으로는 부족합니다. 중간에 오르내린 양을 전부 더해야 합니다. 단조함수는 출렁임이 한 방향뿐이라 통과합니다. 끝없이 떨리는 함수는 합이 폭발해 탈락합니다.

예를 들면, 🚗 자동차가 오르락내리락 달려도 주행 거리 총합이 정해져 있으면 유계변동이에요. 한자리에서 끝없이 떨면 거리가 무한히 쌓여요.`,en:String.raw`This scene measures the total distance a function wiggles. If that sum stays under a finite ceiling, the function has bounded variation.

Start and finish alone are not enough. Every up and down in between must be added. Monotone functions pass since they wiggle one way only. Endless trembling makes the sum explode.

For example, a 🚗 car driving up and down has bounded variation while its total mileage stays definite. Trembling in place forever would pile the distance up without end.`},tex:[String.raw`V_a^b(f) = \sup_P \sum_{i=1}^{n} \lvert f(x_i) - f(x_{i-1})\rvert < \infty`,String.raw`f = g - h, \quad g, h\ \text{increasing (Jordan)}`],prerequisites:[`riemann`],controls:[{kind:`select`,key:`fn`,label:{ko:`함수`,en:`Function`},options:[`sine`,`wild`],init:`sine`},{kind:`slider`,key:`n`,label:{ko:`분할 점 수 n`,en:`Partition points n`},min:2,max:200,step:1,init:40}]},{id:`arc-length`,title:{ko:`곡선의 길이`,en:`Arc Length`},order:13,summary:{ko:String.raw`곡선을 곧은 조각들로 나눠 길이를 재는 씬입니다. 조각 길이들의 합이 꺾은선 길이입니다.

분할을 잘게 할수록 그 합은 커지기만 하고 진짜 길이에 아래에서 다가갑니다. 모든 분할에 대한 상한이 곡선의 길이입니다. 그 상한이 무한해지면 길이를 잴 수 없습니다.

예를 들면, 🧵 실을 굽은 길에 따라 깔고 조각조각 곧게 펴서 재는 것과 같아요. 잘게 나눌수록 실의 진짜 길이에 가까워져요.`,en:String.raw`This scene measures a curve by cutting it into straight pieces. The sum of the piece lengths is the polygonal length.

Finer partitions only make that sum grow, approaching the true length from below. The supremum over all partitions is the length of the curve. If that supremum is infinite, the curve cannot be measured.

For example, lay a 🧵 string along a winding path and measure it piece by piece, straightening each bit. The finer the pieces, the closer you get to the string's true length.`},tex:[String.raw`L = \sup_P \sum_{i=1}^{n} |\gamma(t_i) - \gamma(t_{i-1})|`,String.raw`L = \int_a^b |\gamma'(t)|\,dt`],prerequisites:[`riemann`,`bounded-variation`],controls:[{kind:`select`,key:`curve`,label:{ko:`곡선`,en:`Curve`},options:[`circle`,`parabola`],init:`circle`},{kind:`slider`,key:`n`,label:{ko:`분할 수 n`,en:`Partition count n`},min:1,max:64,step:1,init:8}]},{id:`riemann-stieltjes`,title:{ko:`리만-스틸체스 적분`,en:`The Riemann–Stieltjes Integral`},order:14,summary:{ko:String.raw`구간의 길이가 아니라 적분자의 증가분으로 무게를 재는 적분입니다. 적분자를 바꾸면 같은 구간도 다르게 셉니다.

구간마다 무게가 다를 수 있습니다. 계단형 적분자는 한 점에 무게를 몰아넣습니다. 그 경우 적분은 그 점의 값 하나로 정해집니다.

예를 들면, 📦 상자마다 무게가 다른 짐을 합칠 때 개수가 아니라 무게로 합치는 것과 같아요. 한 상자에 무게가 몰리면 전체 합은 그 상자가 정해요.`,en:String.raw`An integral that weighs intervals by the integrator's growth, not their length. Change the integrator and the same intervals count differently.

Each interval can carry a different weight. A step integrator dumps all its weight on one point. Then the integral is decided by that point alone.

For example, total cargo by weight, not by count, when each 📦 box weighs differently. If one box holds all the weight, it alone decides the total.`},tex:[String.raw`U(f,P,\alpha) = \sum M_i\,\Delta\alpha_i`,String.raw`\int_a^b f\,d\alpha`],prerequisites:[`bounded-variation`],controls:[{kind:`select`,key:`alpha`,label:{ko:`적분자 α`,en:`Integrator α`},options:[`identity`,`square`,`step`],init:`identity`},{kind:`slider`,key:`n`,label:{ko:`분할 수 n`,en:`Subdivisions n`},min:1,max:24,step:1,init:6}]},{id:`jordan-decomposition`,title:{ko:`조르당 분해`,en:`Jordan Decomposition`},order:15,summary:{ko:String.raw`유계변동 함수를 두 증가함수의 차이로 나누는 씬입니다. 점을 움직이며 분해가 지점마다 성립하는 것을 확인합니다.

오른 양과 내린 양을 따로 기록합니다. 지금까지 오른 총합에서 내린 총합을 빼면 현재 높이가 됩니다. 변동함수가 오른 총합의 기록입니다.

예를 들면, 🐷 저금통에 넣은 💰 돈의 총합에서 꺼낸 돈의 총합을 빼면 지금 남은 돈이 되는 것과 같아요. 넣기와 빼기를 따로 세는 거예요.`,en:String.raw`Every bounded-variation function splits into a difference of two increasing functions. Drag the probe and watch the identity hold pointwise.

Record the total rise and the total fall separately. Subtract falls from rises to get the current height. The variation function is the running record of rises.

For example, money now in a 🐷 piggy bank is the total 💰 money put in minus the total taken out. Rises and falls are counted on separate tallies.`},tex:[String.raw`f = g - h, \quad g(x) = V_a^x(f), \; h = g - f`,String.raw`f(x) = x^2\sin\frac{1}{x}\ (x > 0), \; f(0) = 0`],prerequisites:[`bounded-variation`],controls:[{kind:`slider`,key:`X0`,label:{ko:`관찰점 X₀`,en:`Probe point X₀`},min:0,max:1,step:.001,init:.7}]},{id:`measure`,title:{ko:`르베그 측도`,en:`Lebesgue Measure`},order:16,summary:{ko:String.raw`집합의 크기를 재는 가장 싼 덮개 값을 봅니다. 한 점은 물론 유리수 전체도 비용이 0으로 떨어집니다.

길이를 재는 규칙을 점이나 유리수 같은 집합까지 넓힙니다. 덮개들의 총 길이가 가장 작은 값을 찾습니다. 그 값이 집합의 크기 후보가 됩니다.

예를 들면, 🧵 줄 조각으로 어떤 집합을 덮을 때, 줄의 총 길이가 가장 짧은 덮개가 그 집합의 크기예요. 점 하나는 줄이 거의 없어도 덮여요.`,en:String.raw`The cheapest interval cover prices a set's size. A single point, and even all the rationals, cost nothing.

Length measurement extends to sets like points and rationals. Among all covers, take the smallest total length. That smallest total is the set's size.

For example, cover a set with pieces of 🧵 string; the shortest total string length is the set's size. A single point needs almost no string, so its size is zero.`},tex:[String.raw`m^*(A) = \inf \sum \ell(I_n)`,String.raw`m^*(\mathbb{Q}\cap[0,1]) = 0`],prerequisites:[`riemann`],controls:[{kind:`select`,key:`target`,label:{ko:`대상 집합`,en:`Target set`},options:[`singleton`,`rationals`,`interval`],init:`rationals`},{kind:`slider`,key:`eps`,label:{ko:`ε`,en:`ε`},min:.01,max:.5,step:.01,init:.1},{kind:`slider`,key:`K`,label:{ko:`유리수 개수 K`,en:`Rationals K`},min:1,max:64,step:1,init:16}]},{id:`vitali`,title:{ko:`비탈리 집합`,en:`The Vitali Set`},order:17,summary:{ko:String.raw`선택공리로 각 무리에서 대표 하나씩을 뽑아 만든 집합입니다. 그 결과, 크기를 잴 수 없는 집합이 탄생합니다.

이 집합을 유리수만큼 밀어낸 복사본들이 구간을 덮습니다. 크기가 0이면 복사본의 합도 0이어야 합니다. 양수이면 합이 무한대가 됩니다. 둘 다 모순이라 크기를 정할 수 없습니다.

예를 들면, 📦 상자 하나를 복사해 늘어놓으면 방을 채우는데, 상자 크기가 0이면 합도 0이어야 하고 조금이라도 있으면 합이 끝없이 커지는 것과 같아요. 그래서 크기를 정할 수 없어요.`,en:String.raw`Pick one representative from each equivalence class using the axiom of choice. The result is a set whose size cannot be measured.

Shifted copies of this set cover a whole interval. If its size were zero, the copies would total zero. If positive, the copies would total infinity. Both contradict, so no size exists.

For example, copies of one 📦 box can fill a room, yet if the box's size were zero the total should be zero, and if it were anything more the total would explode. So the size cannot be assigned.`},tex:[String.raw`[0,1] \subseteq \bigsqcup_{q \in \mathbb{Q}\cap[-1,1]} (V + q) \subseteq [-1,2]`,String.raw`m(V) > 0 \Rightarrow \sum m(V) = \infty > 3,\qquad m(V) = 0 \Rightarrow \sum m(V) = 0 < 1`],prerequisites:[`measure`],controls:[{kind:`slider`,key:`d`,label:{ko:`분모 상한 d`,en:`Denominator cap d`},min:1,max:6,step:1,init:3}]},{id:`borel-cantelli`,title:{ko:`보렐-칸텔리 보조정리`,en:`Borel–Cantelli Lemmas`},order:18,summary:{ko:String.raw`길이의 총합이 유한하면, 무한히 자주 일어나는 일은 거의 일어나지 않습니다. 그 경계를 수치로 확인하는 씬입니다.

사건들이 겹치는 지점들을 모아 봅니다. 총 길이가 유한하면 겹침은 점점 희귀해집니다. 독립인 사건에서는 거꾸로도 성립합니다.

예를 들면, 💧 물방울이 점점 작아지는 비가 내려도, 방울 전체 양이 정해져 있으면 한 지점이 끝없이 맞는 일은 거의 없는 것과 같아요.`,en:String.raw`If total length is finite, points hit infinitely often form a null set. This scene checks that boundary numerically.

Collect the points where the events keep overlapping. Finite total length makes the overlaps rarer and rarer. With independence, the converse also holds.

For example, in rain whose 💧 water drops keep shrinking, a finite total volume means one spot is almost never hit endlessly.`},tex:[String.raw`m(\limsup_{n\to\infty} E_n) = 0 \quad \left(\sum_{n=1}^{\infty} m(E_n) < \infty\right)`,String.raw`\sum m(E_n) = \infty,\ E_n \text{ independent } \Rightarrow m(\limsup E_n) = 1`],prerequisites:[`measure`],controls:[{kind:`select`,key:`mode`,label:{ko:`모드`,en:`Mode`},options:[`summable`,`nonsummable`],init:`summable`},{kind:`slider`,key:`n`,label:{ko:`집합 개수 n`,en:`Number of sets n`},min:1,max:60,step:1,init:20}]},{id:`lebesgue`,title:{ko:`디리클레 vs 르벡`,en:`Covering the Rationals with Nothing`},order:19,summary:{ko:String.raw`유리수를 하나씩 덮개로 덮으면 총 길이가 얼마든지 작아집니다. 리만 적분이 꼼짝 못하는 장면입니다.

유리수는 셀 수 있게 많습니다. 그래서 번호를 매겨 점점 작은 덮개를 씌울 수 있습니다. 덮개 크기의 합은 원하는 만큼 작아집니다.

예를 들면, 바닥에 흩어진 🍬 사탕을 하나씩 점점 작은 컵으로 덮으면, 컵 크기의 합을 얼마든지 작게 만들 수 있는 것과 같아요.`,en:String.raw`Cover the rationals one by one and the total length drops below any bound. The Riemann integral cannot move here.

The rationals are countably many. So they can be numbered and given shrinking covers. The covers' total can be made as small as you wish.

For example, cover 🍬 candies scattered on the floor, one by one, with smaller and smaller cups, and the cups' total size shrinks as low as you like.`},tex:[String.raw`m(\mathbb{Q}\cap[0,1]) = 0`],controls:[{kind:`slider`,key:`epsilon`,label:{ko:`ε`,en:`ε`},min:.01,max:.5,step:.01,init:.1},{kind:`slider`,key:`K`,label:{ko:`유리수 개수 K`,en:`Rationals K`},min:1,max:64,step:1,init:16}]},{id:`lebesgue-convergence`,title:{ko:`르벡 수렴 정리`,en:`Lebesgue Convergence Theorems`},order:20,summary:{ko:String.raw`극한과 적분의 순서를 바꾸는 세 가지 정리를 봅니다. 질량이 도망가는 예에서 각 조건이 왜 필요한지 확인합니다.

순서를 바꾸려면 질량이 새지 않아야 합니다. 위로 받쳐주는 함수가 있으면 안전합니다. 조건이 없으면 넓이가 극한에서 사라질 수 있습니다.

예를 들면, 💧 물을 컵에서 컵으로 옮길 때 새는 물이 없으면 전체 양이 그대로예요. 한 방울이 옆으로 튀면 옮긴 뒤의 양은 줄어들어요.`,en:String.raw`Three theorems license swapping limits and integrals. Examples with escaping mass show why each hypothesis is needed.

Swapping the order requires that no mass leaks away. A dominating function overhead keeps things safe. Without conditions, area can vanish in the limit.

For example, pour 💧 water from cup to cup with no spill and the total stays the same. One drop escaping sideways shrinks the total that arrives.`},tex:[String.raw`f_n \uparrow f \Rightarrow \int f_n \uparrow \int f`,String.raw`\int \liminf f_n \le \liminf \int f_n`,String.raw`|f_n| \le g,\ f_n \to f \text{ a.e. } \Rightarrow \int f_n \to \int f`],prerequisites:[`lebesgue`],controls:[{kind:`select`,key:`example`,label:{ko:`예제`,en:`Example`},options:[`escape`,`spike`,`monotone`],init:`escape`},{kind:`slider`,key:`n`,label:{ko:`n`,en:`n`},min:1,max:40,step:1,init:10}]},{id:`fubini-tonelli`,title:{ko:`푸비니-토넬리 정리`,en:`Fubini–Tonelli Theorem`},order:21,summary:{ko:String.raw`이중적분에서 적분 순서를 바꿔도 같은 값이 나옵니다. 행부터 더하나 열부터 더하나 같습니다.

음이 아닌 함수에서는 항상 안전합니다. 적분 가능한 함수에서도 안전합니다. 적분 가능성이 없으면 두 순서가 갈라질 수 있습니다.

예를 들면, 📦 상자에 격자로 담긴 🍎 사과를 셀 때 가로줄로 세나 세로줄로 세나 개수는 똑같은 것과 같아요.`,en:String.raw`Iterated integrals agree in either order. Sum the rows first or the columns first, the total is the same.

For nonnegative functions this is always safe. For integrable functions it is safe too. Without integrability, the two orders can split apart.

For example, count 🍎 apples packed in a grid inside a 📦 box: counting by rows or by columns gives the same total.`},tex:[String.raw`\iint f = \int\!\!\left(\int f\,dx\right)\!dy = \int\!\!\left(\int f\,dy\right)\!dx`],prerequisites:[`lebesgue-convergence`],controls:[{kind:`select`,key:`mode`,label:{ko:`함수 모드`,en:`Function mode`},options:[`separable`,`tent`],init:`separable`},{kind:`slider`,key:`n`,label:{ko:`격자 N`,en:`Grid N`},min:8,max:64,step:8,init:32}]},{id:`convolution`,title:{ko:`합성곱`,en:`Convolution`},order:22,summary:{ko:String.raw`한 함수를 뒤집어 밀면서 다른 함수와 겹치는 양을 재는 연산입니다. 지시함수 두 개를 겹치면 겹침의 길이가 텐트 모양 곡선이 됩니다.

매끄러운 핵과 합성곱하면 계단처럼 각진 함수도 부드러워집니다. 핵이 좁아질수록 부드러워진 함수는 원래 함수에 가까워집니다.

예를 들면, 📷 사진의 한 픽셀을 주변 픽셀들의 가중 평균으로 바꾸는 흐림 효과와 같아요. 가운데 픽셀에 가장 큰 가중치를 주는 거예요.`,en:String.raw`Flip one function, slide it, and measure how it overlaps the other. Overlapping two indicator blocks gives an overlap length that traces a tent curve.

Convolving with a smooth kernel softens even a sharp step function. The narrower the kernel, the closer the softened function sits to the original.

For example, it is the blur effect in a 📷 photo, replacing each pixel by a weighted average of its neighbors. The center pixel gets the largest weight.`},tex:[String.raw`(f * g)(x) = \int_{-\infty}^{\infty} f(t)\, g(x - t)\, dt`,String.raw`(f * \varphi_{\varepsilon})(x) \to f(x) \text{ as } \varepsilon \to 0^+ \text{ at continuity points } x`],prerequisites:[`fubini-tonelli`,`lebesgue`],controls:[{kind:`select`,key:`mode`,label:{ko:`모드`,en:`Mode`},options:[`tent`,`smooth`],init:`tent`},{kind:`slider`,key:`x`,label:{ko:`x`,en:`x`},min:-.5,max:2.5,step:.01,init:.7},{kind:`slider`,key:`eps`,label:{ko:`ε`,en:`ε`},min:.05,max:1,step:.05,init:.3}]},{id:`egorov`,title:{ko:`에고로프 정리`,en:`Egorov's Theorem`},order:23,summary:{ko:String.raw`유한한 구간에서 점별 수렴은 거의 균등수렴입니다. 나쁜 집합을 작게 누르면 나머지는 고르게 수렴합니다.

수렴이 느린 지점은 작은 집합에 몰려 있습니다. 그 집합을 떼어내면 나머지는 한 속도로 수렴합니다. 전체 구간이 유한해야 이 정리가 성립합니다.

예를 들면, 🧑 친구 30명이 결승선에 거의 다 왔는데 한두 명이 느려도, 그 친구들을 빼면 나머지는 비슷한 속도로 들어오는 것과 같아요.`,en:String.raw`On a finite-measure set, pointwise convergence is almost uniform. Squeeze the bad set small and the rest converges uniformly.

The slow points hide inside one small set. Remove that set and the rest converges at one pace. The whole space must have finite measure.

For example, of 30 🧑 friends racing to a finish line, one or two may lag; set them aside and the rest arrive at nearly the same pace.`},tex:[String.raw`m(E \setminus F) < \varepsilon \Rightarrow f_n \to f \text{ uniformly on } F`],prerequisites:[`lebesgue-convergence`],controls:[{kind:`slider`,key:`delta`,label:{ko:`δ (나쁜 집합 기준)`,en:`δ (bad-set threshold)`},min:.1,max:1,step:.05,init:.5},{kind:`slider`,key:`n`,label:{ko:`단계 n`,en:`Stage n`},min:1,max:40,step:1,init:6}]},{id:`absolute-continuity`,title:{ko:`절대연속성`,en:`Absolute Continuity`},order:24,summary:{ko:String.raw`구간들의 총 길이가 0으로 가면 함수값 변화의 합도 0으로 가는 성질입니다. 칸토어 함수는 이 성질이 없는 연속함수입니다.

작은 입력 변화가 큰 출력을 만들 수 없어야 합니다. 이런 함수는 정확히 적분으로 만들어지는 함수입니다. 칸토어 함수는 평평한데도 0에서 1로 올라가 규칙을 깹니다.

예를 들면, 수도꼭지를 조금만 열면 💧 물도 조금만 나오는 것과 같아요. 칸토어 함수는 꼭지를 거의 안 열었는데 물이 한 바가지 나오는 이상한 수도예요.`,en:String.raw`Shrink the total length of intervals to zero and the total change shrinks too. The Cantor function is a continuous function failing this.

Tiny input changes must not create large outputs. Such functions are exactly the ones built as integrals. The Cantor function stays flat yet climbs from 0 to 1, breaking the rule.

For example, open a tap a little and only a little 💧 water comes out. The Cantor function is a strange tap that pours a bucketful while barely opened.`},tex:[String.raw`F \text{ absolutely continuous } \iff \forall \varepsilon > 0\, \exists \delta > 0: \sum (b_i - a_i) < \delta \Rightarrow \sum |F(b_i) - F(a_i)| < \varepsilon`,String.raw`F(x) = F(a) + \int_a^x f\,dx\quad (f \in L^1) \iff F \text{ absolutely continuous}`],prerequisites:[`lebesgue`,`ftc`],controls:[{kind:`select`,key:`func`,label:{ko:`함수`,en:`Function`},options:[`square`,`cantor`],init:`square`},{kind:`slider`,key:`scale`,label:{ko:`δ / 단계 n`,en:`δ / stage n`},min:1,max:10,step:1,init:4}]},{id:`differentiation-under-integral`,title:{ko:`적분기호 아래에서의 미분`,en:`Differentiation Under the Integral Sign`},order:25,summary:{ko:String.raw`적분기호 안에서 미분한 값이 곡선의 접선 기울기와 일치하는지 수치로 확인합니다. 곡선 위의 점과 접선을 직접 움직여 봅니다.

전체를 미분하나 안에서 미분하나 결과는 같습니다. 각 지점의 변화가 전체의 변화로 쌓이기 때문입니다. 지배 조건이 이 교환을 안전하게 만듭니다.

예를 들면, 🌡️ 온도계로 방의 평균 온도가 오르는 속도를 잴 때, 각 지점이 데워지는 속도를 평균 내도 같은 답이 나오는 것과 같아요.`,en:String.raw`Numerics confirm that differentiating inside the integral matches the tangent slope. Drag the point and its tangent along the curve.

Differentiating the whole or the inside gives the same answer. Each point's change accumulates into the total change. A domination condition makes the swap safe.

For example, measure how fast a room's average 🌡️ thermometer reading rises: averaging how fast each spot warms up gives the same answer.`},tex:[String.raw`\frac{d}{dx}\int_0^1 t^x\,dt = \int_0^1 t^x \ln t\,dt = -\frac{1}{(x+1)^2}`],prerequisites:[`improper`],controls:[{kind:`slider`,key:`x`,label:{ko:`x (지수)`,en:`x (exponent)`},min:.2,max:4,step:.05,init:1},{kind:`slider`,key:`n`,label:{ko:`n (심슨 구간 수)`,en:`n (Simpson panels)`},min:8,max:2e3,step:2,init:200}]},{id:`minkowski`,title:{ko:`민코프스키 부등식`,en:`Minkowski's Inequality`},order:26,summary:{ko:String.raw`두 함수의 합의 크기가 각 크기의 합을 넘지 않는다는 부등식입니다. 지수 p를 움직이면 두 막대 사이 틈새가 벌어졌다 좁아집니다.

이것은 삼각부등식을 함수로 옮긴 것입니다. 곧장 가는 길이 두 구간을 이어 가는 길보다 길 수 없습니다. p가 1이면 틈새가 완전히 닫힙니다.

예를 들면, 🚗 자동차가 두 번 꺾어 달린 거리는 한 번에 직선으로 잰 거리보다 짧을 수 없어요. 합친 움직임의 크기는 각 움직임 크기의 합을 넘지 않아요.`,en:String.raw`The size of a sum of two functions never exceeds the sum of their sizes. Slide the exponent p and the gap between the bars opens and closes.

This is the triangle inequality moved to functions. A straight route is never longer than two joined legs. At exponent 1 the gap closes completely.

For example, a 🚗 car that drives two legs in an L shape travels at least the straight-line distance, never more than the two legs added together.`},tex:[String.raw`\|f+g\|_p \le \|f\|_p + \|g\|_p \quad (1 \le p < \infty)`,String.raw`\|f\|_p = \left(\int_0^1 |f|^p\right)^{1/p}`],prerequisites:[`improper`],controls:[{kind:`slider`,key:`p`,label:{ko:`지수 p`,en:`Exponent p`},min:1,max:4,step:.05,init:2},{kind:`slider`,key:`a`,label:{ko:`지수 a (f(t) = t^a)`,en:`Exponent a`},min:0,max:3,step:.1,init:1},{kind:`slider`,key:`b`,label:{ko:`지수 b (g(t) = (1-t)^b)`,en:`Exponent b`},min:0,max:3,step:.1,init:1}]}]}],n=[`ko`,`en`];function r(e,t){return e[t]}var i=/\\\(([\s\S]*?)\\\)/g;function a(e){let t=[],n=0;for(let r of e.matchAll(i))r.index>n&&t.push({kind:`text`,text:e.slice(n,r.index)}),t.push({kind:`math`,tex:r[1]??``}),n=r.index+r[0].length;return n<e.length&&t.push({kind:`text`,text:e.slice(n)}),t}function o(e){return a(e).map(e=>e.kind===`math`?e.tex:e.text).join(``)}function s(e){return e}function c(e){return e!==void 0&&n.includes(e)}var l=(e,t)=>`${e}${t}/`,u=(e,t,n)=>`${e}${t}/${n}/`,d=(e,t,n,r)=>`${e}${t}/${n}/${r}/`,f=(e,t)=>`${e}${t}/glossary/`,p=(e,t)=>`${e}${t}/paths/`,m=(e,t)=>`${e}${t}/errata/`,h=(e,t,n)=>`${e}${t}/${n}/exercises/`,g=(e,t,n)=>`${e}${t}/paths/${n}/`;function _(e,t,n){return t.chapterId===void 0?l(e,n):t.chapterId===`glossary`?f(e,n):t.chapterId===`errata`?m(e,n):t.chapterId===`paths`?t.sceneId?g(e,n,t.sceneId):p(e,n):t.sceneId===void 0?u(e,n,t.chapterId):d(e,n,t.chapterId,t.sceneId)}function v(e,t){let[n,r,i]=(t.startsWith(e)?t.slice(e.length):t.replace(/^\//,``)).split(`/`).filter(Boolean);return c(n)?{lang:n,chapterId:r,sceneId:i}:{lang:void 0,chapterId:n,sceneId:r}}function ee(e){return e!=null&&c(e)?e:`ko`}function y(e,t={},...n){let r=document.createElement(e);for(let[e,n]of Object.entries(t))r.setAttribute(e,n);return r.append(...n),r}var b={name:{ko:`Real Analysis`,en:`Real Analysis`},base:`/lecture/real-analysis/`,reloadFlag:`real-analysis:chunk-reload`,homeIntro:{ko:`해석학의 개념을 직접 움직여 보며 익히는 인터랙티브 시각화 모음입니다.`,en:`Interactive visualizations for learning the ideas of real analysis by moving them yourself.`},mapIntro:{ko:`102개 씬을 선수 관계로 엮은 지도. 노드를 드래그하고 확대해 보세요. 노드를 클릭하면 해당 씬으로 이동합니다.`,en:`All 102 scenes linked by prerequisite relations. Drag nodes, zoom in, and click a node to open its scene.`},appMapIntro:{ko:`기초 씬 다음에 만나는 응용 씬들의 지도. 마름모는 아직 준비 중인 응용 씬이다. 마름모를 클릭하면 그 응용이 쌓는 기초 씬 목록이 열린다.`,en:`A map of the application scenes that follow the basic scenes. Diamonds are application scenes still in planning. Click a diamond to list the basic scenes it builds on.`}},te={chapterMissing:{ko:`챕터 또는 #app 을 찾을 수 없습니다`,en:`Could not find the chapter or the #app element`},tocLabel:{ko:`목차`,en:`Contents`},loaderMissing:{ko:`씬의 로더가 등록되어 있지 않습니다`,en:`No loader is registered for this scene`},sceneNotFound:{ko:`씬을 찾을 수 없습니다`,en:`Scene not found`},sceneDisplayError:{ko:`이 씬을 표시하는 중 오류가 발생했습니다.`,en:`Something went wrong while displaying this scene.`},sceneLoadFailed:{ko:`씬을 불러오지 못했습니다. 새 버전이 배포되었을 수 있습니다.`,en:`The scene failed to load. A new version may have been deployed.`},reload:{ko:`새로고침`,en:`Reload`},homeIntro:b.homeIntro,problemsHeading:{ko:`예제`,en:`Examples & Exercises`},showProof:{ko:`증명 보기`,en:`Show proof`},showHint:{ko:`힌트 보기`,en:`Show hint`},showSolution:{ko:`풀이 보기`,en:`Show solution`},kindCompute:{ko:`계산형`,en:`Compute`},kindCounterexample:{ko:`반례형`,en:`Counterexample`},kindConcept:{ko:`개념 확인`,en:`Concept check`},answerLabel:{ko:`정답`,en:`Answer`},verdictLabel:{ko:`판정`,en:`Verdict`},constructionLabel:{ko:`반례 구성과 검증`,en:`Counterexample and verification`},chooseOne:{ko:`하나를 고르세요`,en:`Choose one`},correctFeedback:{ko:`정답입니다`,en:`Correct`},wrongFeedback:{ko:`오답입니다`,en:`Not quite`},showExplanation:{ko:`해설 보기`,en:`Show explanation`},exercises:{ko:`연습문제`,en:`Exercises`},exercisesIntro:{ko:`이 장의 내용을 확인하는 연습문제이다. 풀이는 접어서 두었으니 먼저 스스로 풀어 보자.`,en:`Problems to check your understanding of this chapter. The solutions are folded away — try them yourself first.`},exercisesLinkLabel:{ko:`연습문제 풀어보기`,en:`Work the exercises`},exercisesLoadFailed:{ko:`연습문제를 불러오지 못했습니다. 새 버전이 배포되었을 수 있습니다.`,en:`The exercises failed to load. A new version may have been deployed.`},difficultyEasy:{ko:`쉬움`,en:`Easy`},difficultyMedium:{ko:`보통`,en:`Medium`},difficultyHard:{ko:`어려움`,en:`Hard`},searchExerciseKind:{ko:`연습문제`,en:`Exercise`},prevScene:{ko:`이전`,en:`Previous`},nextScene:{ko:`다음`,en:`Next`},searchPlaceholder:{ko:`검색`,en:`Search`},searchLabel:{ko:`사이트 검색`,en:`Search the site`},searchNoResults:{ko:`검색 결과가 없습니다`,en:`No results`},searchSemanticPending:{ko:`의미로 관련 주제를 찾는 중…`,en:`Finding related topics by meaning…`},chartShedNotice:{ko:`부하가 높아 차트를 쉬고 있어요. 글과 수치, 표는 그대로 볼 수 있어요`,en:`Charts are paused to keep this page light. Text, values, and tables still work.`},searchMathTermLabel:{ko:`수학 용어를 붙여서 다시 찾아볼까요?`,en:`Add a math term and search again?`},searchOffTopic:{ko:`해석학과는 무관한 질문 같아요. 이런 질문은 찾아드릴 수 있어요`,en:`That looks unrelated to real analysis. Questions like these work`},searchClarifyLabel:{ko:`어느 쪽에 가까워?`,en:`Which is closer?`},searchSimilarity:{ko:`유사도`,en:`similarity`},searchSceneKind:{ko:`씬`,en:`Scene`},searchTermKind:{ko:`용어`,en:`Term`},glossary:{ko:`용어 사전`,en:`Glossary`},glossaryIntro:{ko:`씬에서 등장한 핵심 용어를 챕터별로 모았다. 각 용어는 처음 소개된 씬으로 연결된다.`,en:`Key terms from the scenes, grouped by chapter. Each term links to the scene where it is introduced.`},glossaryFilterPlaceholder:{ko:`용어 검색…`,en:`Filter terms…`},errata:{ko:`정오표`,en:`Errata`},errataIntro:{ko:`내용과 표기에서 발견된 오류와 그 수정 내역이다. 고친 날짜 순으로 쌓인다.`,en:`Errors found in the content and notation, and what was fixed. Listed newest first.`},errataAsOf:{ko:`현재 판 기준일`,en:`Current edition as of`},errataEmpty:{ko:`아직 등록된 정오가 없다.`,en:`No corrections recorded yet.`},errataSiteWide:{ko:`사이트 전체`,en:`Site-wide`},errataReport:{ko:`오류를 찾으면 GitHub 이슈로 알려 달라. 씬 주소와 잘못된 내용을 적어 주면 확인해서 이 표에 올린다.`,en:`Found an error? Report it as a GitHub issue with the scene URL and what looks wrong, and it will be checked and added to this list.`},errataReportLink:{ko:`오류 신고하기`,en:`Report an error`},paths:{ko:`학습 경로`,en:`Learning Paths`},pathsIntro:{ko:`주제별로 엮은 씬들의 guided tour. 순서대로 따라가면 개념이 자연스럽게 쌓인다.`,en:`Guided tours through the scenes, grouped by theme. Follow them in order and the ideas build up naturally.`},pathsSceneCount:{ko:`개의 씬`,en:` scenes`},partOfPaths:{ko:`이 씬이 포함된 학습 경로`,en:`Part of these learning paths`},pathNotFound:{ko:`학습 경로를 찾을 수 없습니다`,en:`Learning path not found`},map:{ko:`개념 지도`,en:`Concept Map`},mapIntro:b.mapIntro,appMap:{ko:`응용 지도`,en:`Application Map`},appMapIntro:b.appMapIntro,appMapPlanned:{ko:`준비 중인 응용 씬`,en:`Planned application scene`},appMapApplies:{ko:`응용으로 이어짐`,en:`Leads into the application`},appMapBasics:{ko:`이 응용이 쌓는 기초 씬`,en:`Basic scenes this application builds on`},appMapHub:{ko:`메커니즘 묶음`,en:`Mechanism bundle`},appMapBuildsOn:{ko:`먼저 읽는 응용`,en:`Builds on an earlier application`},appMapOverview:{ko:`응용 지도 개요`,en:`Application map overview`},appMapOverviewHint:{ko:`메커니즘 묶음을 누르면 그 안의 응용과 기초 씬이 펼쳐집니다. 개별 응용은 바로 선택할 수 있습니다.`,en:`Select a mechanism bundle to expand its applications and basic scenes. Standalone applications can be selected directly.`},mapPrereq:{ko:`선수 관계`,en:`Prerequisite`},mapPathOrder:{ko:`학습 경로 순서`,en:`Learning-path order`},mapResetView:{ko:`보기 초기화`,en:`Reset view`},playbackLabel:{ko:`자동 재생`,en:`Autoplay`},playbackPlay:{ko:`▶ 재생`,en:`▶ Play`},playbackPause:{ko:`⏸ 정지`,en:`⏸ Pause`},playbackInterval:{ko:`간격`,en:`Interval`},playbackLoop:{ko:`반복`,en:`Loop`},playbackTarget:{ko:`대상`,en:`Target`}};function x(e,t){return r(te[t],e)}var S=`lang`;function ne(){try{return localStorage.getItem(S)}catch{return null}}function re(e){try{localStorage.setItem(S,e)}catch{}}function C(e,t){let n=(n,r)=>n===e?y(`span`,{"aria-current":`true`},r):y(`a`,{href:t(n),hrefLang:n},r);return y(`span`,{class:`lang-switch`,role:`group`,"aria-label":`Language`},n(`ko`,`KO`),` | `,n(`en`,`EN`))}function ie(e){let t=atob(e.data),n=new Int8Array(t.length);for(let e=0;e<t.length;e++)n[e]=t.charCodeAt(e)<<24>>24;let{dim:r,scales:i}=e,a=e.sceneCount+e.termCount,o=[];for(let e=0;e<a;e++){let t=new Float32Array(r),a=i[e]??1,s=0;for(let i=0;i<r;i++){let o=(n[e*r+i]??0)*a;t[i]=o,s+=o*o}s=Math.sqrt(s)||1;for(let e=0;e<r;e++)t[e]=(t[e]??0)/s;o.push(t)}return o}function w(e,t,n,r){let i=[];for(let r=0;r<e.length;r++){let a=e[r];if(!a||a.length!==t.length)continue;let o=0;for(let e=0;e<a.length;e++)o+=(a[e]??0)*(t[e]??0);o>=n&&i.push({index:r,score:o})}return i.sort((e,t)=>t.score-e.score),i.slice(0,r)}var ae={ko:[`수열`,`함수`,`집합`,`극한`,`곡선`,`구간`,`급수`,`벡터`],en:[`sequence`,`function`,`set`,`limit`,`curve`,`interval`,`series`,`vector`]},T={ko:[`급수가 수렴하는지 판정하는 방법`,`가장 작은 상계`,`울타리처럼 가두는 수열`],en:[`how to test whether a series converges`,`the smallest upper bound`,`a sequence fenced in on both sides`]};function oe(e){return e.effectiveType===`slow-2g`||e.longTasksInWindow>=6?2:e.saveData||e.effectiveType===`2g`||e.deviceMemory>0&&e.deviceMemory<=2||e.hardwareConcurrency>0&&e.hardwareConcurrency<=2||e.longTasksInWindow>=3?1:0}function se(){try{let e=new URLSearchParams(window.location.search).get(`shed`);if(e===`0`||e===`1`||e===`2`)return Number(e)}catch{}return null}function ce(e){let t=navigator;return{saveData:t.connection?.saveData===!0,effectiveType:t.connection?.effectiveType??``,deviceMemory:t.deviceMemory??0,hardwareConcurrency:navigator.hardwareConcurrency??0,longTasksInWindow:e}}var le=1e4,ue=5e3,E=0,D=!1,O=[],de=new Set;function k(){let e=se(),t=Date.now();for(;O.length>0&&t-(O[0]??0)>le;)O.shift();let n=e??oe(ce(O.length));n!==E&&(E=n,de.forEach(e=>e(n)))}function fe(){if(!D){D=!0,k();try{new PerformanceObserver(e=>{for(let t of e.getEntries())t.duration>250&&O.push(Math.round(t.startTime+performance.timeOrigin))}).observe({entryTypes:[`longtask`]})}catch{}window.setInterval(k,ue)}}function pe(){return E>=1}function A(){return E>=1}function j(){return E>=2}function M(){return E>=2}var N=`modulepreload`,P=function(e){return`/lecture/real-analysis/`+e},F={},I=function(e){return e.pathname.endsWith(`.css`)},L=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},R=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=P(t,n);let r=s(t),i=I(r);return L(F,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:N,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{t.addEventListener(`load`,e),t.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${r}`)))})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},z=`https://esm.run/@xenova/transformers@2.17.2`,B=`Xenova/multilingual-e5-small`,V=null,H=new Map;function U(){return V||=(async()=>{let e=await R(()=>import(z),[]);return e.env.allowLocalModels=!1,e.pipeline(`feature-extraction`,B,{quantized:!0})})(),V}function W(e,t){let n=H.get(t);return n||(n=(async()=>{try{let n=await fetch(`${e}search-vectors.${t}.json`);if(!n.ok)throw Error(`search vectors: ${n.status}`);return ie(await n.json())}catch(e){return console.error(e),null}})(),H.set(t,n)),n}function me(e,t){pe()||(W(e,t),U().catch(()=>void 0))}async function G(e){if(j())return null;try{let t=(await(await U())([`query: ${e}`],{pooling:`mean`,normalize:!0})).tolist()[0];return t?Float32Array.from(t):null}catch(e){return console.error(e),null}}var K=`/lecture/real-analysis/`,q=8,he=.8,ge=.85;function _e(e){let t=e.slice(0,3);if(t.length<2)return!1;let n=t[0],r=t[t.length-1];return!n||!r||n.score===void 0||r.score===void 0||n.score-r.score>.03?!1:new Set(t.map(e=>e.chapterId??e.context)).size>=2}function ve(e,t=3){let n=[],r=new Set;for(let i of e){if(n.length>=t)break;let e=i.chapterId??i.context;r.has(e)||(r.add(e),n.push(i))}for(let r of e){if(n.length>=t)break;n.includes(r)||n.push(r)}return n}function J(e,t,n,r,i){let a=w(t,n,he,q),o=[];for(let{index:t,score:n}of a)if(t<e.scenes.length){let a=e.scenes[t];if(!a)continue;o.push({kind:`scene`,label:a.title,context:a.chapterTitle,url:d(r,i,a.chapterId,a.sceneId),score:n,chapterId:a.chapterId})}else{let a=e.terms[t-e.scenes.length];if(!a)continue;o.push({kind:`term`,label:a.term,context:a.sceneTitle,url:`${f(r,i)}#term-${a.id}`,score:n,chapterId:a.chapterId})}return o}function Y(e,t,n=q){let r=new Set,i=[],a=e=>{i.length>=n||r.has(e.url)||(r.add(e.url),i.push(e))};return e.slice(0,3).forEach(a),t.forEach(a),e.slice(3).forEach(a),i}function ye(e,t,n,r){let i=t.trim().toLowerCase();if(i.length===0)return[];let a=[],o=(e,t,n)=>{let r=e.toLowerCase().includes(i);(r||t.toLowerCase().includes(i))&&a.push({hit:n(),score:r?2:1})};for(let t of e.scenes)o(t.title,t.summary,()=>({kind:`scene`,label:t.title,context:t.chapterTitle,url:d(n,r,t.chapterId,t.sceneId),chapterId:t.chapterId}));for(let t of e.terms)o(t.term,t.definition,()=>({kind:`term`,label:t.term,context:t.sceneTitle,url:`${f(n,r)}#term-${t.id}`,chapterId:t.chapterId}));for(let t of e.exercises){let e=`${x(r,`searchExerciseKind`)} ${t.number}`;o(e,t.statement,()=>({kind:`exercise`,label:e,context:t.chapterTitle,url:`${h(n,r,t.chapterId)}#exercise-${t.exerciseId}`,chapterId:t.chapterId}))}return a.sort((e,t)=>t.score-e.score||e.hit.label.localeCompare(t.hit.label)),a.slice(0,q).map(e=>e.hit)}function be(e){let t=y(`span`,{class:`header-search`}),n=y(`header`,{class:`home-header`},y(`a`,{href:l(K,e),class:`site-title`},b.name.en),t,C(e,e=>_(K,v(K,location.pathname),e)));return X(t,e),n}function X(e,t){let n=null,r=!1,i=-1,a=y(`div`,{class:`site-search`}),o=y(`input`,{type:`search`,role:`combobox`,"aria-expanded":`false`,"aria-controls":`site-search-results`,"aria-autocomplete":`list`,autocomplete:`off`,placeholder:x(t,`searchPlaceholder`),"aria-label":x(t,`searchLabel`)}),s=y(`ul`,{id:`site-search-results`,class:`search-results`,role:`listbox`,hidden:``});a.append(o,s),e.append(a);let c=async()=>{if(n)return n;if(r)return null;try{let e=await fetch(`${K}search-index.${t}.json`);if(!e.ok)throw Error(`search index: ${e.status}`);return n=await e.json(),n}catch(e){return console.error(e),r=!0,null}},l=()=>{s.hidden=!0,s.replaceChildren(),o.setAttribute(`aria-expanded`,`false`),i=-1},u=(e,n,r)=>{if(s.replaceChildren(),i=-1,e.length===0)s.append(y(`li`,{class:`search-empty`,role:`option`,"aria-selected":`false`},x(t,`searchNoResults`)));else{if(n&&n.length>0&&r){let e=y(`li`,{class:`search-clarify`},y(`span`,{class:`search-clarify-label`},x(t,`searchClarifyLabel`)));for(let t of n){let n=y(`button`,{type:`button`,class:`search-chip`},t.label);n.addEventListener(`click`,()=>r(t)),e.append(n)}s.append(e)}for(let n of e){let e=x(t,n.kind===`scene`?`searchSceneKind`:n.kind===`term`?`searchTermKind`:`searchExerciseKind`),r=n.score===void 0?n.context:`${n.context} · ${x(t,`searchSimilarity`)} ${Math.round(n.score*100)}%`,i=y(`li`,{role:`option`,"aria-selected":`false`},y(`a`,{href:n.url},y(`span`,{class:`search-kind`},e),y(`span`,{class:`search-label`},n.label),y(`span`,{class:`search-context`},r)));s.append(i)}}s.hidden=!1,o.setAttribute(`aria-expanded`,`true`)},d=()=>{s.replaceChildren(),i=-1,s.append(y(`li`,{class:`search-empty`,role:`option`,"aria-selected":`false`},x(t,`searchSemanticPending`))),s.hidden=!1,o.setAttribute(`aria-expanded`,`true`)},f=e=>{s.replaceChildren(),i=-1;let n=e=>{o.value=e,o.dispatchEvent(new Event(`input`,{bubbles:!0})),o.focus()},r=y(`div`,{class:`search-offtopic`},y(`span`,{class:`search-clarify-label`},x(t,`searchMathTermLabel`)));for(let i of ae[t]){let t=y(`button`,{type:`button`,class:`search-example`},i);t.addEventListener(`mousedown`,e=>e.preventDefault()),t.addEventListener(`click`,()=>n(`${e.trim()} ${i}`)),r.append(t)}s.append(r);let a=y(`div`,{class:`search-offtopic`},y(`span`,{class:`search-clarify-label`},x(t,`searchOffTopic`)));for(let e of T[t]){let t=y(`button`,{type:`button`,class:`search-example`},e);t.addEventListener(`mousedown`,e=>e.preventDefault()),t.addEventListener(`click`,()=>n(e)),a.append(t)}s.append(a),s.hidden=!1,o.setAttribute(`aria-expanded`,`true`)},p=e=>{let t=[...s.querySelectorAll(`li[role="option"]`)];i=t.length===0?-1:(e+t.length)%t.length,t.forEach((e,t)=>e.setAttribute(`aria-selected`,t===i?`true`:`false`))},m=e=>{let t=s.querySelectorAll(`li[role="option"] a`)[e];t&&location.assign(t.href)};o.addEventListener(`focus`,()=>me(K,t),{once:!0});let h=0;o.addEventListener(`input`,()=>{let e=o.value,n=++h;e.trim().length===0?l():c().then(r=>{if(n!==h||!r)return;let i=ye(r,e,K,t);u(i),!(e.trim().length<2)&&(i.length===0&&d(),(async()=>{let a=await W(K,t);if(n!==h)return;if(!a){u(i);return}let o=await G(e.trim());if(n!==h)return;if(!o){u(i);return}let s=J(r,a,o,K,t);if(s.length===0){i.length===0?f(e):u(i);return}if(i.length===0&&(s[0]?.score??0)<ge){f(e);return}let c=Y(i,s),l=e.trim().toLowerCase();r.scenes.some(e=>e.title.toLowerCase().includes(l))||r.terms.some(e=>e.term.toLowerCase().includes(l))||!_e(s)?u(c):u(c,ve(s),o=>{(async()=>{let s=await G(`${e.trim()} ${o.label}`);if(n!==h||!s)return;let c=J(r,a,s,K,t),l=Y(i,c).filter(e=>e.url!==o.url);u([o,...l].slice(0,q))})()})})())})}),o.addEventListener(`keydown`,e=>{if(e.key===`Escape`)l(),o.blur();else if(e.key===`ArrowDown`)e.preventDefault(),p(i+1);else if(e.key===`ArrowUp`)e.preventDefault(),p(i-1);else if(e.key===`Enter`){let t=s.querySelectorAll(`li[role="option"] a`);!s.hidden&&t.length>0&&(e.preventDefault(),m(i>=0?i:0))}}),o.addEventListener(`blur`,()=>{window.setTimeout(()=>{a.contains(document.activeElement)||l()},150)}),document.addEventListener(`pointerdown`,e=>{a.contains(e.target)||l()})}function xe(e,t=6){return Number.isFinite(e)?e!==0&&(Math.abs(e)>=1e7||Math.abs(e)<1e-4)?e.toExponential(3):String(Number(e.toFixed(t))):String(e)}function Se(e,t=3){return e===0?`0`:e.toExponential(t)}var Z={top:16,right:16,bottom:36,left:52},Q=null,$=null;function Ce(e,t){Q=e,$=t}function we(t,n=Z){if(Q?.()){let r=document.createElement(`div`);r.className=`chart-shed-notice`,r.textContent=$?.()??``,t.append(r);let i=document.createElement(`div`),a=e(i).append(`svg`),o={svg:a,g:a.append(`g`),width:0,height:0,setSize(e,t){o.width=Math.max(0,e-n.left-n.right),o.height=Math.max(0,t-n.top-n.bottom)},destroy(){r.remove()}};return o.setSize(t.clientWidth||640,t.clientHeight||360),o}let r=e(t).append(`svg`).attr(`role`,`img`).style(`display`,`block`).style(`width`,`100%`).style(`height`,`100%`),i={svg:r,g:r.append(`g`).attr(`transform`,`translate(${n.left},${n.top})`),width:0,height:0,setSize(e,t){i.width=Math.max(0,e-n.left-n.right),i.height=Math.max(0,t-n.top-n.bottom),r.attr(`viewBox`,`0 0 ${e} ${t}`)},destroy(){r.remove()}};return i.setSize(t.clientWidth||640,t.clientHeight||360),i}function Te(e){e.style.display=`flex`,e.style.flexDirection=`column`,e.style.height=`auto`;let t=document.createElement(`div`);t.style.cssText=`flex: none; height: min(60vh, 480px); position: relative;`;let n=document.createElement(`div`);return n.style.cssText=`padding: 6px 12px 8px; font-size: 13px; flex: none;`,e.append(t,n),{chartWrap:t,strips:n,dispose(){e.replaceChildren(),e.style.display=``,e.style.flexDirection=``,e.style.height=``}}}export{s as A,f as C,p as D,g as E,a as M,o as N,d as O,t as P,ee as S,v as T,b as _,Ce as a,m as b,R as c,fe as d,T as f,x as g,ne as h,Se as i,r as j,_ as k,A as l,re as m,Te as n,X as o,C as p,xe as r,be as s,we as t,M as u,y as v,l as w,h as x,u as y};