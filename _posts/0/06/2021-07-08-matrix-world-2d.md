---
layout: butir
authors: [viridi]
title: matrix world 2d
pid: '0060'
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: true
category: code
tags: ["research", "abm", "matrix", "world"]
date: 2021-07-08 06:05:00 +0700
permalink: /0060
src: https://github.com/dudung/butir/commits/main/_posts/0/06/2021-07-08-matrix-world-2d.md
twitter_username: 6unpnp
nodes: ['0000', '0044']
---
World matrix $\bf W$ represents the discretized two-dimensional spatial space. It is adapted from previous work [[1](#r01)].


## concept
1. There is a world $\bf W$ in the form of $N_y \times N_x$ matrix, where $N_y$ and $N_x$ are number of rows and columns, respectively.
2. The world matrix $\bf W$ discretizes the continue two-dimensional spatial place with $L_x \times L_y$ grids through the relation $L_x = N_x \Delta x$ and $L_y = N_y \Delta y$, where it might be that $\Delta x = \Delta y$.
3. As a matrix it begins at the left upper right cornet for element $w_{11}$, then followed by element $w_{1N_x}$ at the upper right corner and element $w_{N_y1}$ at the lower left corner, and finished by element $w_{N_yN_x}$ at the lower right corner.
4. There is relation between matrix indices with real coordinates ($y$ &lfloor;_ $x$) in the form of $x = (i - \frac12) \Delta x$ and $y = (N_y - j + \frac12) \Delta y$, so that real coordinates $(x, y)$ can be represented by grid indices $(i, j)$.
5. Inverse of the previous relations are $i = \lceil x / \Delta x \rceil$ and $i = N_y - \lceil y / \Delta y \rceil + 1$.
6. Initially $w_{ij} = 0$ for $i = 1, \ .., N_x$ and $j = 1, \ .., N_y$.


## implementation
Previous concept can be implemented in `x` as follows.


## notes
1. <a name="r01"></a>S. Viridi, F. Haryanto, "Agent-based Model and its Potential in Simulating Some Physical Systems", IOP Conference Series: Materials Science and Engineering 559 (1), 012008 (2019), url <https://doi.org/10.1088/1757-899X/599/1/012008>.
