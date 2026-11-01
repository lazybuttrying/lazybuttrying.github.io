---
title: "Doyeon Kim"
permalink: /
layout: splash
author_profile: false
comments: false
classes: wide
---
<style>
.dyk-home{ --dyk-violet:#7c3aed; --dyk-orange:#FF6C02; --dyk-ink:#070707; --dyk-paper:#ffffff; --dyk-card:#ffffff; }
.dyk-home *{margin:0;padding:0;box-sizing:border-box}
.dyk-home{scroll-behavior:smooth}
.dyk-home{font-family:-apple-system,BlinkMacSystemFont,"Apple SD Gothic Neo","Montserrat","Pretendard","Merriweather",sans-serif;background:var(--dyk-paper);color:var(--dyk-ink);overflow-x:hidden}
#dyk-progress{position:fixed;top:0;left:0;height:4px;background:var(--dyk-orange);width:0;z-index:50}
  /* hero */
.dyk-home .hero{min-height:92vh;display:flex;flex-direction:column;justify-content:center;padding:6rem 8vw 4rem;position:relative}
.dyk-home .blob{position:absolute;border-radius:50%;filter:blur(2px);opacity:.5;will-change:transform}
.dyk-home .b1{width:340px;height:340px;background:#ffe3d1;top:6%;right:8%}
.dyk-home .b2{width:180px;height:180px;background:#ffb98a;top:52%;right:22%}
.dyk-home .b3{width:120px;height:120px;background:var(--dyk-orange);top:20%;right:30%;opacity:.3}
.dyk-home .hero h1{font-family:-apple-system,BlinkMacSystemFont,"Apple SD Gothic Neo","Montserrat","BioRhyme","Pretendard",sans-serif;font-size:clamp(2.4rem,6vw,4.2rem);font-weight:800;line-height:1.12;position:relative}
.dyk-home .hero h1 em{color:var(--dyk-orange);font-style:normal}
.dyk-home .hero p{margin-top:1.2rem;font-size:clamp(1rem,2vw,1.25rem);max-width:34rem;line-height:1.6;position:relative}
.dyk-home .scrolldown{margin-top:3rem;font-size:.85rem;letter-spacing:.18em;text-transform:uppercase;opacity:.6;position:relative}
.dyk-home .scrolldown span{display:inline-block;animation:bob 1.6s ease-in-out infinite}
  @keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(6px)}}
  /* intro */
.dyk-home .intro{padding:4rem 8vw;max-width:60rem}
.dyk-home .intro h2, .dyk-home .proj h2{font-size:.85rem;letter-spacing:.18em;text-transform:uppercase;color:var(--dyk-violet);margin-bottom:1rem}
.dyk-home .intro p{font-size:1.12rem;line-height:1.75;margin-bottom:1.1rem}
  /* projects */
.dyk-home .proj{padding:5rem 8vw;max-width:72rem;margin:0 auto}
.dyk-home .card{background:var(--dyk-card);border:1px solid #e9e9e9;border-radius:20px;padding:2rem;box-shadow:0 12px 32px rgba(0,0,0,.06)}
.dyk-home .card h3{font-size:1.5rem;font-weight:800;margin-bottom:.5rem}
.dyk-home .card p{line-height:1.65;max-width:40rem}
.dyk-home .card a{color:var(--dyk-orange);font-weight:700;text-decoration:none}
.dyk-home .meta{margin-top:.9rem;font-size:.85rem;opacity:.65}
.dyk-home .reveal{opacity:0;transform:translateY(48px);transition:opacity .8s ease,transform .8s cubic-bezier(.2,.7,.2,1)}
.dyk-home .reveal.on{opacity:1;transform:translateY(0)}
.dyk-home .reveal.left{transform:translateX(-56px)}.reveal.right{transform:translateX(56px)}
.dyk-home .reveal.left.on, .dyk-home .reveal.right.on{transform:translateX(0)}
  /* bond chart */
.dyk-home .chart{margin-top:1.4rem;background:#fff6f0;border-radius:14px;padding:1rem}
.dyk-home .chart svg{width:100%;height:140px;display:block}
.dyk-home .chart path{stroke:var(--dyk-orange);stroke-width:3;fill:none;stroke-dasharray:900;stroke-dashoffset:900;transition:stroke-dashoffset 1.8s ease .2s}
.dyk-home .on .chart path{stroke-dashoffset:0}
.dyk-home .bars{display:flex;gap:6px;align-items:flex-end;height:56px;margin-top:.6rem}
.dyk-home .bars i{flex:1;background:#ffcfb0;border-radius:4px 4px 0 0;height:20%;transition:height 1s ease}
.dyk-home .on .bars i:nth-child(2n){height:65%}.on .bars i:nth-child(3n){height:88%}.on .bars i:nth-child(4n){height:45%}
  /* ferry loop */
.dyk-home .track{position:relative;height:8px;background:#f0f0f0;border-radius:99px;margin:2.2rem 0 1rem}
.dyk-home .track .dot{position:absolute;top:50%;left:0;width:22px;height:22px;border-radius:50%;background:var(--dyk-orange);transform:translate(-50%,-50%);box-shadow:0 4px 14px rgba(255,108,2,.45)}
.dyk-home .stops{display:flex;justify-content:space-between;font-size:.82rem;opacity:.75}
  /* lecture chips */
.dyk-home .chips{display:flex;flex-wrap:wrap;gap:.6rem;margin-top:1.2rem}
.dyk-home .chips span{background:#fff6f0;border:1px solid #ffd9bd;padding:.55rem 1rem;border-radius:99px;font-weight:600;transition:transform .5s ease}
.dyk-home .on .chips span:nth-child(1){transition-delay:.05s}.on .chips span:nth-child(2){transition-delay:.15s}
.dyk-home .on .chips span:nth-child(3){transition-delay:.25s}.on .chips span:nth-child(4){transition-delay:.35s}
.dyk-home .chips span:hover{transform:translateY(-4px)}
  /* tier grid */
.dyk-home .tiers{display:grid;grid-template-columns:repeat(5,1fr);gap:6px;margin-top:1.3rem;max-width:26rem}
.dyk-home .tiers i{aspect-ratio:1;border-radius:10px;background:#f0f0f0;transform:scale(.6);opacity:.3;transition:all .6s ease}
.dyk-home .on .tiers i{transform:scale(1);opacity:1}
.dyk-home .tiers i:nth-child(1){background:#ff8fa3}.tiers i:nth-child(2){background:#ffb26b}.tiers i:nth-child(3){background:#ffe066}
.dyk-home .tiers i:nth-child(4){background:#8ce99a}.tiers i:nth-child(5){background:#74c0fc}
.dyk-home .tiers i:nth-child(7){background:#b197fc}.tiers i:nth-child(9){background:#ffa8a8}
  /* footer */
.dyk-home footer{padding:4rem 8vw 6rem;text-align:center}
.dyk-home footer a{color:var(--dyk-orange);font-weight:700;text-decoration:none;margin:0 .8rem}
  @media (prefers-reduced-motion: reduce){*{animation:none!important;transition:none!important}.dyk-home .reveal{opacity:1;transform:none}}
</style>
<div class="dyk-home">
<div id="dyk-progress"></div>

<header class="hero">
  <div class="blob b1" data-speed="0.25"></div>
  <div class="blob b2" data-speed="0.5"></div>
  <div class="blob b3" data-speed="0.8"></div>
  <p style="font-weight:700;letter-spacing:.14em;text-transform:uppercase;font-size:.85rem;opacity:.65;position:relative">Doyeon Kim · Personal Projects</p>
  <h1 style="margin-top:1rem">Striving to write more efficient code to reduce manual effort—<em>it's all in the name of laziness</em></h1>
  <p>Who and when participate: finance, crypto, and accessibility.</p>
  <div class="scrolldown">Scroll <span>↓</span></div>
</header>

<section class="intro">
  <h2>About</h2>
  <p>I am Doyeon Kim. I study finance at Seoul National University, and I build things with data in my own time. Most of what is on this site started as a question I could not answer with the tools that already existed, so I built the tool first and the answer came after.</p>
  <p>Below are the personal projects that came out of that habit. A bond market monitor fed by real trades, scanners that watch the kimchi premium day and night, lecture sites I write and code on my own, and a few smaller experiments. Each one is live, and each one is still maintained.</p>
  <p class="more"><a href="/about/">More about me →</a></p>
</section>

<section class="proj"><div class="card reveal left">
  <h2>Project 01</h2>
  <h3>Bond Credit Monitor</h3>
  <p>Korean corporate bond trades, collected as they happen and turned into credit spreads. When one issuer in a group moves, the monitor shows whether the rest of the group follows.</p>
  <div class="chart"><svg viewBox="0 0 600 140" preserveAspectRatio="none"><path d="M0,110 C80,95 130,60 210,72 C290,84 340,40 420,48 C500,56 550,25 600,30"/></svg>
  <div class="bars"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div>
  <div class="meta">Live at <a href="https://sdykim.me/bond-credit-monitor/">sdykim.me/bond-credit-monitor</a>, updated daily</div>
</div></section>

<section class="proj"><div class="card reveal right" id="dykFerryCard">
  <h2>Project 02</h2>
  <h3>Kimchi Premium Scanners</h3>
  <p>Four scanners watch the paths money takes between Korean and offshore exchanges. When a path opens wider than its fees, the scanner says so. When it closes, it says that too. Research only, no live trading.</p>
  <div class="track"><div class="dot" id="dykFerryDot"></div></div>
  <div class="stops"><span>Buy, Coinone</span><span>Transfer</span><span>Swap, OKX</span><span>Return</span><span>Sell, Coinone</span></div>
  <div class="meta">Scans run every 30 minutes, alerts only above a 0.1% net edge</div>
</div></section>

<section class="proj"><div class="card reveal left">
  <h2>Project 03</h2>
  <h3>Lecture Sites</h3>
  <p>Interactive lecture sites I write, code, test, and deploy alone. Math and economics, drawn as scenes you can move, not pages you only read.</p>
  <div class="chips"><span>Real Analysis</span><span>Microeconomics</span><span>Macroeconomics</span><span>Finance</span></div>
  <div class="meta">Live at <a href="https://sdykim.me/lecture/">sdykim.me/lecture</a></div>
</div></section>

<section class="proj"><div class="card reveal right">
  <h2>Project 04</h2>
  <h3>villagertier.com</h3>
  <p>A dream team picker for Animal Crossing and Pokopia. Rate 407 villagers, get a team that balances personality and species, in Korean, English, and Japanese.</p>
  <div class="tiers"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
  <div class="meta">Live at <a href="https://villagertier.com">villagertier.com</a></div>
</div></section>



<script>
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('on');
  }), {threshold: 0.25});
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  const blobs = document.querySelectorAll('.blob');
  const dot = document.getElementById('ferryDot');
  const ferry = document.getElementById('ferryCard');
  function onScroll(){
    const y = window.scrollY;
    const h = document.documentElement.scrollHeight - innerHeight;
    document.getElementById('progress').style.width = (y/h*100) + '%';
    blobs.forEach(b => b.style.transform = 'translateY(' + (y * parseFloat(b.dataset.speed)) + 'px)');
    if (ferry && dot){
      const r = ferry.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (innerHeight*0.85 - r.top) / (r.height + innerHeight*0.4)));
      dot.style.left = (p*100) + '%';
    }
  }
  addEventListener('scroll', onScroll, {passive:true}); onScroll();
</script>
</div>
<script>
const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('on');
  }), {threshold: 0.25});
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  const blobs = document.querySelectorAll('.blob');
  const dot = document.getElementById('dykFerryDot');
  const ferry = document.getElementById('dykFerryCard');
  function onScroll(){
    const y = window.scrollY;
    const h = document.documentElement.scrollHeight - innerHeight;
    document.getElementById('dyk-progress').style.width = (y/h*100) + '%';
    blobs.forEach(b => b.style.transform = 'translateY(' + (y * parseFloat(b.dataset.speed)) + 'px)');
    if (ferry && dot){
      const r = ferry.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (innerHeight*0.85 - r.top) / (r.height + innerHeight*0.4)));
      dot.style.left = (p*100) + '%';
    }
  }
  addEventListener('scroll', onScroll, {passive:true}); onScroll();
</script>
