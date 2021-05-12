---
layout: item
authors: [viridi]
title: lr as intro to ml
pid: '0002'
mathjax: false
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: data
tags: ["machine learning", "linear regression"]
date: 2021-05-13 05:26:00 +07
permalink: /0002
src: https://github.com/dudung/item/commits/main/_posts/0/00/2021-05-13-ml-lr-intro.md
twitter_username: 6unpnp
nodes: ['0000']
---
Regresi merupakan salah satu permasalahan dalam machine learning (ML) dengan cara belajar supervised learning. Untuk satu variabel bebas $x$ dan satu variabel terikat $y$ suatu prediktor dalam bentuk

\begin{equation}\label{eqn:0265-0}
y = a + bx,
\end{equation}

nilai $a$ dan $b$ dapat diperoleh menggunakan regresi linier. Bila terdapat pasangan data $\\{(x_i, y_i) \ \| \ i = 1, 2, .., N \\}$ nilai $a$ dan $b$ dapat diperoleh menggunakan least square yang menghasilkan

\begin{equation}\label{eqn:0265-1}
a = \frac{\sum_{i = 1}^N y_i \sum_{i = 1}^N x_i^2 - \sum_{i = 1}^N x_i \sum_{i = 1}^N x_i y_i}{N \sum_{i = 1}^N x_i^2 - \left( \sum_{i = 1}^N x_i \right)^2}
\end{equation}

dan

\begin{equation}\label{eqn:0265-2}
b = \frac{N \sum_{i = 1}^N {x_i y_i} - \sum_{i = 1}^N x_i \sum_{i = 1}^N y_i}{N \sum_{i = 1}^N x_i^2 - \left( \sum_{i = 1}^N x_i \right)^2}.
\end{equation}

Kesalahan antara data dan prediktor diberikan oleh

\begin{equation}\label{eqn:0265-3}
\varepsilon = \sum_{i = 1}^N (a + b x_i - y_i)^2.
\end{equation}

Persamaan \ref{eqn:0265-1} dan \ref{eqn:0265-2} diperoleh dengan menggunakan Persamaan \eqref{eqn:0265-3} melalui

\begin{equation}\label{eqn:0265-4}
\frac{\partial \varepsilon}{\partial a} = 0, \ \ \ \ \frac{\partial \varepsilon}{\partial b} = 0.
\end{equation}

Untuk ML nilai $a$ dan $b$ diubah dengan gradient descent melalui

\begin{equation}\label{eqn:0265-5}
a^+ = a - \eta \frac{\partial \varepsilon}{\partial a}
\end{equation}

dan

\begin{equation}\label{eqn:0265-6}
b^+ = b - \eta \frac{\partial \varepsilon}{\partial b}
\end{equation}

dengan $\eta$ adalah laju belajar. Indeks atas $+$ menunjukkan nilai baru dari kedua parameter, yang diubah agar kesalahan $\varepsilon$ berkurang. Idealnya akan tercapai nilai $a$ dan $b$ seperti pada Persamaan \eqref{eqn:0265-1} dan \eqref{eqn:0265-2}, yang tak lain adalah $a^+$ dan $b^+$ pada Persamaan \eqref{eqn:0265-5} dan \eqref{eqn:0265-6} saat Persamaan \eqref{eqn:0265-4} terpenuhi. Selanjutnya, Persamaan \eqref{eqn:0265-1} dan \eqref{eqn:0265-2} dapat dihitung menggunakan kode Python berikut.

<iframe src="https://trinket.io/embed/python/d7335e9ae0" width="100%" height="460" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

x | 0 | 1 | 2 | 3 | 4 | 5
y | 0.5 | 2.5 | 4.5 | 6.5 | 8.5 | 10.5

Nilai $R^2$, $b$, dan $a$ untuk data di atas adalah

A | $2$, $0.5$, $1.0$.
B | $2$, $1.0$, $0.5$.
C | $0.5$, $1.0$, $2$.
D | $0.5$, $2$, $1.0$.
E | $1.0$, $2$, $0.5$.
