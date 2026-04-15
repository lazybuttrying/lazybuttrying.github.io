---
title: "Research & Projects"
permalink: /research/
layout: single
comments: false
---

<style>
.page__content ul {
  margin-top: 0.2rem;
  margin-bottom: 0.45rem;
}
.page__content li {
  margin-bottom: 0.15rem;
  line-height: 1.35;
}
.page__content details > summary {
  cursor: pointer;
  list-style: none;
  display: inline;
}
.page__content details > summary::-webkit-details-marker { display: none; }
.page__content details > summary::before {
  content: "▸ ";
  color: #7c3aed;
  font-weight: 700;
}
.page__content details[open] > summary::before {
  content: "▾ ";
}
.page__content details > ul {
  margin-top: 0.2rem;
}
</style>

I care about ***how technologies land in real institutions***. The page below is split into two parts: ***Research*** lists the academic projects I have led or contributed to as a researcher (accessibility audit, governance and financial markets, ML interpretability for organizational decisions); ***Projects*** lists the engineering and applied ML work I have built — internships, undergraduate projects, and competitions — that supplied the systems-building foundation for the research.

A common ***sociotechnical*** thread runs through both: who gets to participate, who is measured, and who is left out.

---

## <span style="color:#7c3aed; font-weight:800;">Research</span>

`accessibility audit` `corporate governance` `DAO` `interpretability for high-stakes decisions`

### Improving Accessibility of an Academic Administration Portal for Students with Disabilities
*Junior Ombudsperson (Mar 2025 – Dec 2025)*

- <span style="color:#7c3aed; font-weight:700;">Affiliation:</span> Human Rights Center, Seoul National University (BK21-supported)
- <span style="color:#7c3aed; font-weight:700;">Achievement:</span> Recognized as an Outstanding Project with Institution-level Impact
- <span style="color:#7c3aed; font-weight:700;">Links:</span> [Korean Report](https://docs.google.com/document/d/1X-Gord5-XQbreKkBMoST_9sRL0rSg3XYmHYcBoA30JI/edit?usp=sharing)
- <details><summary><span style="color:#7c3aed; font-weight:700;">Summary</span></summary><ul><li><b>Data:</b> SNU academic-administration portal (mySNU) screens, WCAG conformance observations, and structured interviews with students with disabilities</li><li><b>Tools & techniques:</b> WCAG 2.1 conformance audit, stakeholder interviews, institutional reporting through the Human Rights Center</li><li>Led end-to-end accessibility improvement, including problem scoping, pain-point auditing, and stakeholder communication</li></ul></details>

### AXI for Korean Bond Market Data
*Main Researcher (Mar 2024 – Jan 2026)*

- <span style="color:#7c3aed; font-weight:700;">Affiliation:</span> Seoul National University
- <span style="color:#7c3aed; font-weight:700;">Advisors:</span> Professor Jongsub Lee
- <span style="color:#7c3aed; font-weight:700;">Achievement:</span> Built an alternative index using both issuance and secondary trading data
- <details><summary><span style="color:#7c3aed; font-weight:700;">Summary</span></summary><ul><li><b>Data:</b> Korean bond issuance records + secondary-market transaction data (real-time scraped), paired with banking-credit indicators</li><li><b>Tools & techniques:</b> Python scraping pipeline, time-series infrastructure, alternative-index construction, market-microstructure analysis</li><li>Constructed real-time scraping bond transaction and indicators of banking credit for Korean bond market analysis</li></ul></details>

### National Pension Fund Activism: Proxy Voting and Investment Strategies
*Main Researcher (Aug 2024 – Jan 2025)*

- <span style="color:#7c3aed; font-weight:700;">Affiliation:</span> Seoul National University
- <span style="color:#7c3aed; font-weight:700;">Advisors:</span> Professor Sungwook Joh
- <span style="color:#7c3aed; font-weight:700;">Achievement:</span> Published in <i>Review of Financial Information Studies</i>
- <span style="color:#7c3aed; font-weight:700;">Links:</span> [Paper](https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003177047), [Media coverage](https://www.hani.co.kr/arti/economy/marketing/1184441.html)
- <details><summary><span style="color:#7c3aed; font-weight:700;">Summary</span></summary><ul><li><b>Data:</b> National Pension Service proxy voting records matched with fund-level investment allocations (panel dataset)</li><li><b>Tools & techniques:</b> panel regression, empirical-finance analysis, Stata/R workflow</li><li>Examined links between NPS proxy voting behavior and investment strategy outcomes</li></ul></details>

### DAO Governance
*Research Assistant (Jul 2024 – Sep 2025)*

- <span style="color:#7c3aed; font-weight:700;">Data:</span> On-chain DAO governance records — proposals, votes, voter addresses, and treasury flows across multiple DAOs
- <span style="color:#7c3aed; font-weight:700;">Tools & techniques:</span> on-chain data extraction, participation and concentration measurement, literature synthesis for the ECGI working paper
- <span style="color:#7c3aed; font-weight:700;">Affiliation:</span> Seoul National University and Florida State University
- <span style="color:#7c3aed; font-weight:700;">Advisors:</span> Professor Jongsub Lee, Jungsuk Han, and Tao Li
- <details><summary><span style="color:#7c3aed; font-weight:700;">Summary</span></summary><ul><li>Analyzed decentralized governance participation patterns and decision consequences</li></ul></details>
- <span style="color:#7c3aed; font-weight:700;">Links:</span> [Paper](https://ecgi.global/working-paper/review-dao-governance-recent-literature-and-emerging-trends)

### Learning Production Process Heterogeneity Across Industries: Implications of Deep Learning for Corporate M&A Decisions
*Research Assistant (Jul 2025 – Dec 2025)*

- <span style="color:#7c3aed; font-weight:700;">Data:</span> Trained deep-learning weight matrices from industry-level production-function models used for M&A prediction
- <span style="color:#7c3aed; font-weight:700;">Tools & techniques:</span> weight-relationship visualization tooling, shared-representation diagnostics, pruning analysis (PyTorch)
- <span style="color:#7c3aed; font-weight:700;">Affiliation:</span> Seoul National University and Michigan State University
- <span style="color:#7c3aed; font-weight:700;">Advisors:</span> Professor Jongsub Lee and Hayong Yun
- <span style="color:#7c3aed; font-weight:700;">Achievement:</span> Built diagnostic visualizations for shared-representation analysis and pruning
- <details><summary><span style="color:#7c3aed; font-weight:700;">Summary</span></summary><ul><li>Developed weight-relationship visualization tools for deep learning model diagnosis</li></ul></details>
- <span style="color:#7c3aed; font-weight:700;">Links:</span> [Paper](https://ideas.repec.org/p/arx/papers/2301.08847.html)

---

## <span style="color:#7c3aed; font-weight:800;">Projects</span>

`accessible mobile development` `computer vision` `MLOps` `edge deployment` `full-stack`

### Music Coding Education iOS Application for Blind Children
*Undergraduate Intern (Dec 2019 – Feb 2020)*

- <span style="color:#7c3aed; font-weight:700;">Data:</span> UI prototypes and usability feedback from blind elementary-school students
- <span style="color:#7c3aed; font-weight:700;">Tools & techniques:</span> iOS VoiceOver APIs, accessible UI patterns, Swift
- <span style="color:#7c3aed; font-weight:700;">Affiliation:</span> Human Computer Interaction Lab., Ewha Womans University
- <span style="color:#7c3aed; font-weight:700;">Advisors:</span> Professor Uran Oh
- <details><summary><span style="color:#7c3aed; font-weight:700;">Summary</span></summary><ul><li>Supported voice-over interaction and implementation of coding education for blind elementary students</li></ul></details>
- <span style="color:#7c3aed; font-weight:700;">Links:</span> [Project page](https://github.com/lazybuttrying/musicCoding)

### Wanted Vehicle License Plate Detection
*Intern (Mar 2022 – Jun 2022)*

- <span style="color:#7c3aed; font-weight:700;">Data:</span> Korean vehicle license-plate imagery (deployed to Korea Expressway Corporation)
- <span style="color:#7c3aed; font-weight:700;">Tools & techniques:</span> LRPNet object detection, TensorFlow Lite on Android, OpenCV C++, NodeJS + Docker Compose FTP pipeline
- <span style="color:#7c3aed; font-weight:700;">Affiliation:</span> Department of Intelligence Automation Service, NEXTLab
- <span style="color:#7c3aed; font-weight:700;">Achievement:</span> Delivered an industrial prototype to Korea Expressway Corporation
- <details><summary><span style="color:#7c3aed; font-weight:700;">Summary</span></summary><ul><li>Developed the object detection model based on LRPNet</li><li>Deployed on android application with TensorflowLite and OpenCV C++</li><li>Implemented data transfer to an FTP server using event listeners and asynchronous socket communication by NodeJS and Docker Compose</li></ul></details>
- <span style="color:#7c3aed; font-weight:700;">Links:</span> [Media coverage 1](https://www.aitimes.kr/news/articleView.html?idxno=27165), [Media coverage 2](https://www.aitimes.kr/news/articleView.html?idxno=26398)

### Grape Rating by Three Steps Deep Learning using UAV
*MLOps & Fullstack Engineer (Jun 2020 – Feb 2021)*

- <span style="color:#7c3aed; font-weight:700;">Data:</span> UAV-captured grape-farm imagery across flight trajectories
- <span style="color:#7c3aed; font-weight:700;">Tools & techniques:</span> three-stage deep-learning pipeline, Ionic PWA + GraphQL, AWS services, PyQt autonomous-drive controller, multi-threaded recording
- <span style="color:#7c3aed; font-weight:700;">Affiliation:</span> Undergraduate Project
- <span style="color:#7c3aed; font-weight:700;">Achievement:</span>
  - Excellence Prize Issued by Korea Agency of Education, Promotion & Information Service in Food, Agriculture, Forestry & Fisheries (Nov 2020)
  - Presented as the Best Practice at the UIC Barcelona Universitat Internacional de Catalunya
- <details><summary><span style="color:#7c3aed; font-weight:700;">Summary</span></summary><ul><li>Constructed an autonomous system for grape farms to assess quality and suggest thinning</li><li>Developed progressive web app (PWA) with Ionic framework and GraphQL</li><li>Integrated AWS services, UAV path trajectory logic, and multi-threaded recording for model operations</li><li>Developed a desktop application with PyQT to control autonomous driving and recording the vineyard by multi-threading</li></ul></details>
- <span style="color:#7c3aed; font-weight:700;">Links:</span> [Project page](https://github.com/lazybuttrying/afarm_public), [Media coverage 1](https://www.mafra.go.kr/bbs/mafra/68/328591/artclView.do), [Media coverage 2](http://www.wonyesanup.co.kr/news/articleView.html?idxno=50555)

### AWS CIC Challenge: G-Farm
*Computer Vision Engineer (Apr 2021 – May 2022)*

- <span style="color:#7c3aed; font-weight:700;">Data:</span> Greenhouse perilla-leaf imagery collected from Geumsan farms
- <span style="color:#7c3aed; font-weight:700;">Tools & techniques:</span> Mask R-CNN instance segmentation, leaf-area estimation, AWS-based training workflow
- <span style="color:#7c3aed; font-weight:700;">Affiliation:</span> Agriculture Technology Lab., Sejong University
- <span style="color:#7c3aed; font-weight:700;">Advisors:</span> Professor Hyunkwon Suh
- <span style="color:#7c3aed; font-weight:700;">Achievement:</span> Provincial Government Project, Funded by Geumsan County and Applied to Local Farms in Geumsan, Korea
- <details><summary><span style="color:#7c3aed; font-weight:700;">Summary</span></summary><ul><li>Contributed to greenhouse-ready leaf segmentation and leaf-area estimation workflows</li><li>Calculated perilla leaf area by instance segmentation using MaskRCNN</li></ul></details>
- <span style="color:#7c3aed; font-weight:700;">Links:</span> [Media coverage](https://www.aboutamazon.com/news/aws/south-korean-farmers-grow-more-perilla-leaf-with-machine-learning)

### Counting Strawberry Achene: Deep Learning vs. OpenCV Image Processing
*Main Researcher (Jul 2022 – Jun 2023)*

- <span style="color:#7c3aed; font-weight:700;">Data:</span> Strawberry imagery with achene annotations
- <span style="color:#7c3aed; font-weight:700;">Tools & techniques:</span> deep-learning object detection vs. OpenCV rule-based processing, side-by-side benchmarking
- <span style="color:#7c3aed; font-weight:700;">Advisors:</span> Professor Hyeonkwon Suh
- <span style="color:#7c3aed; font-weight:700;">Achievement:</span> Presented at the Korea Software Congress
- <details><summary><span style="color:#7c3aed; font-weight:700;">Summary</span></summary><ul><li>Compared deep-learning detection with OpenCV processing for robust achene counting</li><li>Benchmarked model-driven and rule-based methods for practical measurement tasks</li></ul></details>
- <span style="color:#7c3aed; font-weight:700;">Links:</span> [Paper](https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11224140)

### Flower Detection with Detectron2 and YOLOv5 for Edge Computing in a Strawberry Greenhouse
*Research Assistant (Jul 2022 – Jun 2023)*

- <span style="color:#7c3aed; font-weight:700;">Data:</span> Strawberry-greenhouse flower imagery under edge-device constraints
- <span style="color:#7c3aed; font-weight:700;">Tools & techniques:</span> Detectron2, YOLOv5, edge-computing latency/accuracy benchmarking
- <span style="color:#7c3aed; font-weight:700;">Affiliation:</span> Agriculture Technology Lab., Sejong University
- <span style="color:#7c3aed; font-weight:700;">Advisors:</span> Professor Hyeonkwon Suh
- <span style="color:#7c3aed; font-weight:700;">Achievement:</span> Presented at the XX CIGR World Congress
- <details><summary><span style="color:#7c3aed; font-weight:700;">Summary</span></summary><ul><li>Evaluated Detectron2 vs YOLOv5 under greenhouse edge-computing constraints</li></ul></details>
- <span style="color:#7c3aed; font-weight:700;">Links:</span> [Paper](https://www.actahort.org/members/symposiaa?abstractforcoauthorlink=zKXtwXmtwXm-2012356-BEbkYfmbtwXm&action=abstractforcoauthor)
