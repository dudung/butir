---
layout: code
author: viridi
title: hipotesis de broglie
pid: "0002"
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["hypothesis", "de broglie", "wavelength", "quantum", "quanta", "light"]
date: 2021-05-03 08:26:00 +07
permalink: /0002
src: https://github.com/dudung/code/commits/main/_posts/0/00/2021-05-02-de-broglie-hypothesis.md
twitter_username: 6unpnp
---
Louis de Broglie (1892-1987) mengusulkan dalam desertasi PhD-nya pada tahun 1924, bahwa elektron yang partikel juga memiliki sifat gelombang sebagaimana cahaya yang memiliki sifat gelombang dan partikel sekaligus [[1](#r1)].


## difraksi
Untuk celah tunggal posisi minimum pola difraksi diberikan oleh [[2](#r2)]

\begin{equation}\label{eqn:0002-0}
a \sin \theta = m \lambda
\end{equation}

dengan $a$ lebar celah, sedangkan untuk kisi posisi maksimum untuk pola difraksi diberikan oleh [[3](#r3)]

\begin{equation}\label{eqn:0002-1}
d \sin \theta = m \lambda
\end{equation}

dengan $d$ jarak antar dua lubang (celah) berdekatan pada kisi adalah

\begin{equation}\label{eqn:0002-2}
d = \frac{1}{N},
\end{equation}

di mana $N$ adalah jumlah garis (celah) per satuan panjang [[4](#r4)]. Baik Persamaan \eqref{eqn:0002-0} maupun Persaman \eqref{eqn:0002-1}, keduanya mengandung suku $\sin\theta$ yang bernilai maksimum $1$ atau $\sin\theta < 1$ sehingga dapat diperoleh batasan orde

\begin{equation}\label{eqn:0002-3}
m < \frac{a}{\lambda} < \frac{d}{\lambda},
\end{equation}

agar pola difraksi masih dapat teramati, dengan $a < d$, lebar celah lebih kecil dari jarak antar celah. Orde terkecil dari Persamaan \eqref{eqn:0002-3} diperoleh saat $m = 1$

\begin{equation}\label{eqn:0002-4}
\lambda \lessapprox a < d,
\end{equation}

yang akan merupakan syarat teramatinya efek difraksi. Atau bila $\lambda > > d > a$ maka akan diperoleh $m \approx 0$ atau efek difraksi tidak teramati.


## panjang gelombang
Panjang gelombang de Broglie umumnya dinyatakan dalam bentuk

\begin{equation}\label{eqn:0002-5}
\lambda = \frac{h}{p},
\end{equation}

dengan $h$ konstanta Planck dan momentum partikel

\begin{equation}\label{eqn:0002-6}
p = mv,
\end{equation}

dengan $m$ dan $v$ merupakan massa dan kecepatan partikel [[5](#r5)].


## tak teramati
Bila suatu partikel secara signifikan lebih besar dari panjang gelombang de Broglie-nya atau partikel berinteraksi dengan obyek lain yang ukurannya secara signifikan lebih besar dari panjang gelombang de Broglie partikel tersebut, sifat gelombang dari partikel tidak teramati [[6](#r6)]. Hal ini sejalan dengan yang telah diberikan oleh Persamaan \eqref{eqn:0002-4}.

Sebuah mobil bermassa $2500 \ \rm kg$ bergerak dengan kecepatan $40 \ \rm m/s$. Panjang gelombang de Broglie-nya adalah $6.626 \times 10^{-39} \ \rm m$ yang jauh lebih kecil beberapa orde dari ukuran inti atom, yang berkisar antara $(1.6 \ --- 15) \ \rm fm$ mulai dari hanya proton pada hidrogen ringan sampai atom berat seperti uranium [[7](#r7)]. Ukuran yang teramat kecil ini membuat sifat gelombang dari sebuah mobil tidak teramati.


## referensi
1. <a name="r1"></a>Wikipedia contributors, "De Broglie hypothesis", The Free Encyclopedia, 30 Apr 2021, 10:18 UTC, <https://en.wikipedia.org/w/index.php?oldid=1020661116#De_Broglie_hypothesis> [20210502].
2. <a name="r2"></a>Carl Rod Nave, "Fraunhofer Single Slit", HyperPhysics, Department of Physics and Astronomy, Georgia State University, 2016, url <http://hyperphysics.phy-astr.gsu.edu/hbase/phyopt/sinslit.html#c1> [20210502].
3. <a name="r3"></a>Carl Rod Nave, "Diffraction Grating", HyperPhysics, Department of Physics and Astronomy, Georgia State University, 2016, url <http://hyperphysics.phy-astr.gsu.edu/hbase/phyopt/gratcal.html> [20210502].
4. <a name="r4"></a>-, "Diffraction Gratings", Cyberphysics, url <https://www.cyberphysics.co.uk/topics/light/A_level/difraction.htm> [20210502].
5. <a name="r5"></a>-, "The de Broglie Wavelength", JoVE Core Chemistry, ch. 7.7, url <https://www.jove.com/science-education/11300/the-de-broglie-wavelength> [20210502].
6. <a name="r6"></a>-, "De Broglie wavelength", Quantum and Nuclear, Glossary Definition for 16-19 IOPGlossary, url <https://spark.iop.org/de-broglie-wavelength> [20210502].
7. <a name="r7"></a>Wikipedia contributors, "Atomic nucleus", Wikipedia, The Free Encyclopedia, 15 Jan 2021, 15:13 UTC, <https://simple.wikipedia.org/w/index.php?oldid=7270601> [20210503].


## code
<iframe src="https://trinket.io/embed/python/c52bcceccb" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Seorang pelari bermassa $60 \ \rm kg$ sedang bergerak dengan kecepatan $10 \ \rm m/s$, panjang gelombang de Broglienya adalah $1.104 \times 10^{-36} \ \rm m$.


## problem
+ <a name="p1">`p1`</a>Sebuah elektron dengan energi $10 \ \rm keV$ dihamburkan pada material dengan salah satu strukturnya memiliki jarak teratur $2.5 \ \rm \unicode{x212B}$. Orde maksimum gelap difraksi yang teramai adalah: (A) $1$, (B) $2$, (C) $3$, (D) $4$, (D) $5$.


{% comment %}
#:~:text=
{% endcomment %}
