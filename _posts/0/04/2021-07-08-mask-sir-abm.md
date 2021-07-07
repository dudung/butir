---
layout: butir
authors: [viridi]
title: mask sir abm
pid: '0044'
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: true
category: code
tags: ["research", "mask", "sir", "abm", "js"]
date: 2021-07-08 04:30:00 +0700
permalink: /0044
src: https://github.com/dudung/butir/commits/main/_posts/0/04/2021-07-08-mask-sir-abm.md
twitter_username: 6unpnp
nodes: ['0000', '0002']
---
I have forgotten when it started, but it might be still in the 2021 after the WFH begins for a year.

+ `08-Jul-21` Start from scratch as the bad habit in optimizing previous concept [[2](#r02)].
+ `07-Jul-21` Contacted by Nuraini for a colab and sent a draft [[1](#r01)].


## concept
1. There must be a world $\bf W$ in the form of $N_y \times N_x$ matrix, where $N_y$ and $N_x$ are number of rows and columns, respectively.
2. The world matrix $\bf W$ discretizes the continue two-dimensional spatial place with size $L_x \times L_y$ with the relation $L_x = N_x \Delta x$ and $L_y = N_y \Delta y$, where it might be that $\Delta x = \Delta y$.
3. As a matrix it begins at the left upper right cornet for element $w_{11}$, then followed by element $w_{1N_x}$ at the upper right corner and element $w_{N_y1}$ at the lower left corner, and finished by element $w_{N_yN_x}$ at the lower right corner.
4. There is relation between matrix indices with real coordinates.


## notes
1. <a name="r01"></a>Nuning Nurani et al., "Pengaruh Perilaku Penggunaan Masker dengan Teori Permainan pada Model Epidemiologi SIR", draft, 7 Jul 2021. 
`Nuraini-draft-07-07-2021`
2. <a name="r02"></a> Armi Susandi, Intan Taufik, Pingkan Aditiawati, Sparisoma Viridi, "The relation between agent-based model and susceptible-infected-recovered model for spread of disease", in The 9th National Physics Seminar, (SNF)-2020, edited by Hadi Nasbey, Riser Fahdiran, Widyaningrum Indrasari, Esmar Budi, Fauzi Bakri, Teguh Budi Prayitno, Dewi Muliyati, AIP Conference Proceedings 2320, American Institute of Physics, Melville, NY, 2021, pp. 050032, url <https://doi.org/10.1063/5.0038221>.
