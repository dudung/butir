---
layout: butir
authors: [viridi]
title: sir abm grid 2d
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
date: 2021-07-08 05:25:00 +0700
permalink: /0044
src: https://github.com/dudung/butir/commits/main/_posts/0/04/2021-07-08-sir-abm-grid-2d.md
twitter_username: 6unpnp
nodes: ['0000', '0002']
---
I have forgotten when it started, but it might be still in the 2021 after the WFH begins for a year.

+ `08-Jul-21` Start from scratch as the bad habit in advancing previous concept [[2](#r02)] using similar matrix representation [[3](#r03)].
+ `07-Jul-21` Contacted by Nuraini for a colab and sent a draft [[1](#r01)].


## concepts
1. There must be a world $\bf W$ in the form of $N_y \times N_x$ matrix, where $N_y$ and $N_x$ are number of rows and columns, respectively.
2. The world matrix $\bf W$ discretizes the continue two-dimensional spatial place with $L_x \times L_y$ grids through the relation $L_x = N_x \Delta x$ and $L_y = N_y \Delta y$, where it might be that $\Delta x = \Delta y$.
3. As a matrix it begins at the left upper right cornet for element $w_{11}$, then followed by element $w_{1N_x}$ at the upper right corner and element $w_{N_y1}$ at the lower left corner, and finished by element $w_{N_yN_x}$ at the lower right corner.
4. There is relation between matrix indices with real coordinates ($y$ &lfloor;_ $x$) in the form of $x = (i - \frac12) \Delta x$ and $y = (N_y - j + \frac12) \Delta y$, so that real coordinates $(x, y)$ can be represented by grid indices $(i, j)$.
5. Inverse of the previous relations are $i = \lceil x / \Delta x \rceil$ and $i = N_y - \lceil y / \Delta y \rceil + 1$.


## notes
1. <a name="r01"></a>Nuning Nuraini et al., "Pengaruh Perilaku Penggunaan Masker dengan Teori Permainan pada Model Epidemiologi SIR", draft, 7 Jul 2021. 
`Nuraini-draft-07-07-2021`
2. <a name="r02"></a>Armi Susandi, Intan Taufik, Pingkan Aditiawati, Sparisoma Viridi, "The relation between agent-based model and susceptible-infected-recovered model for spread of disease", in The 9th National Physics Seminar, (SNF)-2020, edited by Hadi Nasbey, Riser Fahdiran, Widyaningrum Indrasari, Esmar Budi, Fauzi Bakri, Teguh Budi Prayitno, Dewi Muliyati, AIP Conference Proceedings 2320, American Institute of Physics, Melville, NY, 2021, pp. 050032, url <https://doi.org/10.1063/5.0038221>.
3. <a name="r03"></a>S. Viridi, F. Haryanto, "Agent-based Model and its Potential in Simulating Some Physical Systems", IOP Conference Series: Materials Science and Engineering 559 (1), 012008 (2019), url <https://doi.org/10.1088/1757-899X/599/1/012008>.
