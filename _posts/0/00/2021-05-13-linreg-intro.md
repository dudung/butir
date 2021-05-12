---
layout: item
authors: [viridi]
title: linear regression intro
pid: '0002'
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: data
tags: ["machine learning", "linear regression", "introduction"]
date: 2021-05-13 05:38:00 +07
permalink: /0002
src: https://github.com/dudung/item/commits/main/_posts/0/00/2021-05-13-linreg-intro.md
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

Persamaan \eqref{eqn:0265-1} dan \eqref{eqn:0265-2} diperoleh dengan menggunakan Persamaan \eqref{eqn:0265-3} melalui

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

dengan $\eta$ adalah laju belajar. Indeks atas $+$ menunjukkan nilai baru dari kedua parameter, yang diubah agar kesalahan $\varepsilon$ berkurang. Idealnya akan tercapai nilai $a$ dan $b$ seperti pada Persamaan \eqref{eqn:0265-1} dan \eqref{eqn:0265-2}, yang tak lain adalah $a^+$ dan $b^+$ pada Persamaan \eqref{eqn:0265-5} dan \eqref{eqn:0265-6} saat Persamaan \eqref{eqn:0265-4} terpenuhi. 

Selanjutnya, Persamaan \eqref{eqn:0265-1} dan \eqref{eqn:0265-2} dapat dihitung menggunakan kode Python berikut

```python
x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
y = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
N = min(len(x), len(y))
Sx = 0
Sy = 0
Sx2 = 0
Sxy = 0
for i in range(0, N):
  Sx += x[i]
  Sy += y[i]
  Sx2 += x[i] * x[i]
  Sxy += x[i] * y[i]
xavg = Sx / N
yavg = Sy / N
SSxx = 0
SSyy = 0
SSxy = 0
for i in range(0, N):
  SSxx += (x[i] - xavg) * (x[i] - xavg)
  SSxy += (x[i] - xavg) * (y[i] - yavg)
  SSyy += (y[i] - yavg) * (y[i] - xavg)
a = (Sy * Sx2 - Sx * Sxy) / (N * Sx2 - Sx * Sx)
b = (N * Sxy - Sx * Sy) / (N * Sx2 - Sx * Sx)
R2 = (SSxy * SSxy) / (SSxx * SSyy)
print(a, b, R2)
```

yang dapat dijalankan secara langsung dengan [Trinket/d7335e9ae0](https://trinket.io/embed/python/d7335e9ae0).


## refs

https://www.toptal.com/machine-learning/machine-learning-theory-an-introductory-primer