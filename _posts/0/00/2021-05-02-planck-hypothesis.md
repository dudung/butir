---
layout: code
author: viridi
title: hipotesis planck
pid: "0001"
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["hypothesis", "planck", "constant", "quantum", "quanta", "light"]
date: 2021-05-02 16:40:00 +07
permalink: /0001
src: https://github.com/dudung/code/commits/main/_posts/0/00/2021-05-02-planck-hypothesis.md
twitter_username: 6unpnp
---
Pada tahun 1900 Max Planck (1858-1947) mengusulkan hipotesisnya, yang dikenal sebagai hipotesis kuantum, yang mempostulatkan bahwa energi cahaya hanya dapat diemisikan dan diserap dalam paket-paket diskrit yang disebut sebagai kuanta, di mana ide ini muncul saat ia mencoba menjelaskan radiasi benda hitam, suatu karya yang memberikan dasar bagi kuatum teorinya [[1](#r1)].


## energi foton
Planck mengusulkan suatu hipotesis ad hoc, suatu asumsi sebagai respons dari fakta yang inkonsisten dengan suatu teori untuk mencegah teori tersebut disalahkan [[2](#r2)], bahwa energi kuanta tersebut sebanding dengan frekuensinya $\nu$ dalam bentuk [[3](#r3)]

\begin{equation}\label{eqn:0001-0}
E = h\nu,
\end{equation}

dengan $h$ adalah konstanta Planck [[4](#r4)]

\begin{equation}\label{eqn:0001-1}
h = 6.62607015 \times 10^{-34} \ \rm kg\cdot m^2/s,
\end{equation}

yang telah dikoreksi dari berbagai pengukuran sebelumnya [[5](#r5)].


## laju cahaya
Untuk gelombang elektromagnetik (EM) hubungan

\begin{equation}\label{eqn:0001-2}
c = \lambda f = \frac{\lambda}{T},
\end{equation}

dengan $c$ laju cahaya ($\rm m/s)$, $\lambda$ panjang gelombang ($\rm m$), $f$ frekuensi ($\rm Hz$), dan $T$ periode ($\rm s$). Perhatikan bahwa terdapat penggunaan dua simbol berbeda untuk besaran fisis yang sama, yaitu frekuensi, seperti $\nu$ pada Persamaan \eqref{eqn:0001-0} dan $f$ pada Persamaan \eqref{eqn:0001-2}. Selanjutnya, laju cahaya dalam vakum diberikan oleh

\begin{equation}\label{eqn:0001-3}
c = 2.99792458 \times 10^8 \ \rm m/s,
\end{equation}

mengikuti Conference Generale des Poids et Mesures pada tahun 1938 [[6](#r6)]. Hubungan dalam Persamaan \eqref{eqn:0001-2} dapat membuat Persamaan \eqref{eqn:0001-0} dituliskan kembali menjadi

\begin{equation}\label{eqn:0001-4}
E = h \frac{c}{\lambda}.
\end{equation}

Dengan demikian energi foton suatu gelombang elektromagnetik dapat diperoleh dari frekuensinya $\nu$ (atau $f$) dengan Persamaan \eqref{eqn:0001-0} atau dari panjang gelombangnya dengan Persamaan \eqref{eqn:0001-4}.


## electronvolt
Muatan sebuah elektron [[7](#r7)]

\begin{equation}\label{eqn:0001-5}
e = 1.602176634 \times 10^{−19} \ \rm C,
\end{equation}

yang akan digunakan untuk memperoleh satuan energi $\rm eV$ selain $\rm J.$ Dengan menggunakan Persamaan \eqref{eqn:0001-5} dan makna dari $1 \ \rm eV$ [[8](#r8)] dapat diperoleh bahwa

\begin{equation}\label{eqn:0001-6}
1 \ {\rm eV} = 1.602176634 \times 10^{−19} \ \rm J
\end{equation}

dan

\begin{equation}\label{eqn:0001-7}
1 \ {\rm J} = 6.241509074 \times 10^{18} \ \rm eV
\end{equation}

Telah terdapat suatu kalkulator bernama `electronvolt` untuk membantu melakukan konversi nilai besaran fisis [[9](#r9)].


## referensi
1. <a name="r1"></a>-, "Physics: The Quantum Hypothesis", Scientific Thought: In Context, Encyclopedia.com, 15 Apr 2021, url <https://www.encyclopedia.com/science/science-magazines/physics-quantum-hypothesis> [2021-05-02].
2. <a name="r2"></a>Robert Todd Carroll, "ad hoc hypothesis", 26 Dec 2011, url <http://59ways.blogspot.com/2011/12/ad-hoc-hypothesis_26.html> [20210502].
3. <a name="r3"></a>Carl Rod Nave, "The Planck Hypothesis", HyperPhysics, Department of Physics and Astronomy, Georgia State University, 2016, url <http://hyperphysics.phy-astr.gsu.edu/hbase/mod2.html#c3> [20210502].
4. <a name="r4"></a>-, "Kilogram: Mass and Planck's Constant", National Institute of Standards and Technology, U.S. Department of Commerce, 26 Apr 2021, url <https://www.nist.gov/si-redefinition/kilogram-mass-and-plancks-constant> [20210502].
5. <a name="r5"></a>D B Newell, F Cabiati, J Fischer, K Fujii, S G Karshenboim, H S Margolis, E de Mirandés, P J Mohr, F Nez, K Pachucki, T J Quinn, B N Taylor, M Wang, B M Wood, Z Zhang, "The CODATA 2017 values of h, e, k, and NA for the revision of the SI", Metrologia [Metrologia], vol. 55, no. 1, p. L13, Feb 2018, url <https://doi.org/10.1088/1681-7575/aa950a>.
6. <a name="r6"></a>Philip Gibbs, Steve Carlip, "Is The Speed of Light Constant?", The Physics and Relativity FAQ, 1997, url <https://www.desy.de/user/projects/Physics/Relativity/SpeedOfLight/speed_of_light.html> [20210502].
7. <a name="r7"></a>Wikipedia contributors, "Elementary charge", Wikipedia, The Free Encyclopedia, 11 April 2021, 16:12 UTC, <https://en.wikipedia.org/w/index.php?oldid=1017228993> [20210502].
8. <a name="r8"></a>Vijay Murthy, gen-Z ready to perish, "Answer to 'How much is 1 electron-volt (eV)?'", Physics Stack Exchange, 21 Feb 2018, 09:24Z, url <https://physics.stackexchange.com/a/23296/260719> [20210502].
9. <a name="r9"></a>lw7jz@virginia.edu, "electronvolt", v1.3.3, 28 Apr 2021, url <https://pypi.org/project/electronvolt/> [20210502].

## code
<iframe src="https://trinket.io/embed/python/83aa3fbb7b" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Energi foton cahaya pertama dengan panjang gelombang $\lambda_1 = 550 \ \rm nm$ dan cahaya kedua dengan frekuensi $f_2 = 500 \ \rm THz$ adalah $E_1 = 3.612 \times 10^{-19} \ {\rm J} = 2.254 \ {\rm eV}$ dan $E_2 = 3.313 \times 10^{-19} \ {\rm J} = 2.068 \ {\rm eV}$.


## problem
+ <a name="p1">`p1`</a>Suatu gelombang EM memiliki panjang gelombang $600 \ \rm nm$. Energi foton dari gelombang EM tersebut dalam $\rm eV$ adalah: (A) $2.254$, (B) $2.066$, (C) $1.907$, (D) $1.837$, (E) $1.771$.
+ <a name="p2">`p2`</a>Rentang energi foton cahaya tampak ($399.7 \ \rm THz$ sampai $749.5 \ \rm THz$) dalam $\rm J$ adalah: (A) $(1.653 \ -- 3.100) \times 10^{-19}$, (B) $(2.648 \ -- 4.966) \times 10^{-19}$, (C) $(1.653 \ -- 4.966) \times 10^{-19}$, (D) $(3.100 \ -- 4.966) \times 10^{-19}$, (E) $(2.648 \ -- 3.100) \times 10^{-19}$.
+ <a name="p3">`p3`</a>Cahaya tampak memiliki rentang panjang gelombang dari $400 \ \rm nm$ sampai $750 \ \rm nm$ Rentang energi foton cahaya tampak dalam $\rm eV$ adalah: (A) $1.653 \ -- 3.100$, (B) $2.649 \ -- 4.966$, (C) $1.653 \ -- 4.966$, (D) $3.100 \ -- 4.966$, (E) $2.649 \ -- 3.100$.
+ <a name="p4">`p4`</a>Faktor konversi dari $\rm eV$ ke $\rm J$, dan juga sebaliknya, yang tepat adalah: (A) $1.602\times^{-19} \ \rm eV/J$, (B) $6.242\times 10^{18} \ \rm J/eV$, (C) $1.602\times^{-19} \ \rm J/eV$, (D) $6.242\times 10^{18} \ \rm eV/J$, (E) tidak ada di antara semua pilihan yang diberikan.
+ <a name="p5">`p5`</a>Selama suatu peluruhan radioaktif berkas sinar gamma dengan energi $320 \ \rm keV$ dipancarkan. Pernyataan yang tidak tepat adalah: (A) $E_\gamma = 5.127\times 10^{-14} \ \rm J$, (B) $\lambda_\gamma = 3.875 \ \rm pm$, (C) $f_\gamma = 7.738 \times 10^{19} \ \rm Hz$, (D) untuk difraksi gelap $m = 5$ ukuran celah $d \approx 19 \ \rm pm$, (E) pola difraksi dapat terlihat signifikan saat berkas gamma dilewatkan pada sebuah bukaan seperti pintu.


{% comment %}
#:~:text=BBA(CD)E
{% endcomment %}
