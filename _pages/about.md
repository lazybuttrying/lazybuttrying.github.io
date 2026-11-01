---
title: "Hi all! I'm DYK👋🏻"
permalink: /about/
layout: single
author_profile: true
comments: false
---

## <span style="color:#7c3aed; font-weight:800;">About me</span>

I build data pipelines and research systems for financial markets. I am an M.S. student in Finance at Seoul National University (3.73/4.3), with a B.S. in Computer Science and Engineering from Ewha Womans University (Magna Cum Laude, 3.87/4.3).

Peak memory cut from over 128GB to under 40GB · Bond trades collected every 15 minutes on weekdays · Thesis data across 4 exchanges, 2017 to 2026

I am looking for roles in data engineering, market research, and backend systems for finance.

## <span style="color:#7c3aed; font-weight:800;">Selected work</span>

- **Korean bond market data pipeline, AXI project, Mar 2024 to Jan 2026.** Main researcher. Bond issuance records and secondary market trades collected from the Korea Financial Investment Association, trades every 15 minutes on weekdays. Output is an alternative index and a live credit spread monitor. [Monitor](/bond-credit-monitor/) · [Code](https://github.com/lazybuttrying/bond-credit-monitor)
- **On-chain wallet labeling pipeline.** USDT and USDC transfer records on Ethereum and Tron, collected via Flipside, exchange wallets labeled through the Arkham API. The first version ran out of memory on a 128GB machine. Monthly Parquet partitioning, per thread DuckDB connections, and queueing only at injection cut peak memory from over 128GB to under 40GB, with no loss of speed. [Write-up](/engineering/wallet-labeling-memory/)
- **Master's thesis, Dollar Stablecoin and Arbitrage under Capital Control.** The kimchi premium split into a banking leg and a crypto leg. Data from Upbit, Bithumb, Binance, and Bybit, 2017 to 2026. The November 2025 Upbit withdrawal halt serves as a natural experiment.
- **DAO Governance, Research Assistant, Jul 2024 to Sep 2025.** Research by Han, Lee, and Li, published in Management Science. On-chain voting data and participation measurement.
- **National Pension Fund Activism.** Second author. Review of Financial Information Studies, 2025, 14(1), 127-152.
- **Lecture sites.** Real analysis, microeconomics, macroeconomics, and finance. Designed, built, tested, and deployed on my own, each with its own test suite and automated deployment. [Sites](/lecture/)
- **Accessibility audit, Junior Ombudsperson, SNU Human Rights Center, 2025.** End to end WCAG audit of the university administration portal for students with disabilities. Recognized as an Outstanding Project with institution-level impact.

## <span style="color:#7c3aed; font-weight:800;">Skills</span>

- **Data pipeline:** Python, SQL, DuckDB, Parquet, monthly partitioning, on-chain data collection
- **Storage and query:** PostgreSQL, DuckDB, Parquet, S3
- **Cloud and ops:** AWS, Cloudflare, Docker, GitHub Actions, cron pipelines
- **Language:** Python, TypeScript, SQL

## <span style="color:#7c3aed; font-weight:800;">Personal Interest</span>

I played in a women's soccer club through university, and taught coding for most of my twenties, to students from age four to twenty.

Full details are on the [Research and Projects](/research/) page and in my [CV](https://github.com/lazybuttrying/cv/blob/main/cv.pdf).
