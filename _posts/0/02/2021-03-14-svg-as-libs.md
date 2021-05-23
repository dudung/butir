---
layout: butir
authors: [viridi]
title: svg as libs
pid: '0020'
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: true
category: code
tags: ["svg", "html", "js", "button", "click"]
date: 2021-03-14 20:24:00 +0700
permalink: /0020
src: https://github.com/dudung/butir/commits/main/_posts/0/02/2021-03-14-svg-as-lib.md
twitter_username: 6unpnp
nodes: ['0000', '0021', '0022']
---
Beberapa bentuk dalam gambar di bawah ini

<svg width="520" height="300">
	<style type="text/css">
		//svg { border: 1px black dashed; }
		//foreignObject { border: 1px black dashed; }
	</style>
	<g>
		<use xlink:href="#sphere-3-circles" transform="scale(0.5)" />
		<foreignObject x="10" y="60" width="130" height="25">
		$x^2 + y^2 + z^2 = R^2$
		</foreignObject>
	</g>
	<use xlink:href="#xyz-axis" x="170" y="75" class="black" />
	<g transform="translate(240, 25)">
		<use xlink:href="#h-spring" x="10" y="18" class="black-outline"/>
		<use xlink:href="#block" x="130" y="10" class="white" id="moving-block" />
		<use xlink:href="#floor" x="10" y="50" />
		<use xlink:href="#left-wall" />
		<use xlink:href="#arr50px" transform="translate(150,30) rotate(90)" stroke="green" fill="green" />
		<use xlink:href="#arr50px" transform="translate(160,100) rotate(-90)" stroke="red" fill="red" />
		<foreignObject x="130" y="80" width="15" height="25">
		$\vec{w}$
		</foreignObject>
		<foreignObject x="165" y="70" width="15" height="25">
		$\vec{N}$
		</foreignObject>
		<foreignObject x="145" y="-15" width="15" height="25">
		$m$
		</foreignObject>
		<foreignObject x="70" y="-5" width="15" height="25">
		$k$
		</foreignObject>
	</g>
	<g transform="translate(20, 90)">
		<use xlink:href="#xyz-axis" x="10" y="190" class="black" />
		<path d="M60,130 q150,-200 300,50" class="red-curve" />
		<use xlink:href="#point" x="60" y="130" class="black" />
		<use xlink:href="#point" x="360" y="180" class="black" />
		<use xlink:href="#point" x="195" y="42" class="black" />
		<foreignObject x="35" y="135" width="55" height="25">
		$(x_0, y_0)$
		</foreignObject>
		<foreignObject x="170" y="12" width="55" height="25">
		$(x_1, y_1)$
		</foreignObject>
		<foreignObject x="300" y="170" width="55" height="25">
		$(x_2, y_2)$
		</foreignObject>
		<foreignObject x="130" y="90" width="120" height="25">
		$y = ax^2 + bx + c$
		</foreignObject>
	</g>
	<g transform="translate(400, 270)">
		<use xlink:href="#arr50px" transform="translate(0,0) rotate(0)" stroke="blue" fill="blue" />
		<use xlink:href="#arr50px" transform="translate(50,0) rotate(-45)" stroke="green" fill="green" />
		<use xlink:href="#arr50px" transform="translate(85,-35) rotate(-90)" stroke="red" fill="red" />
		<use xlink:href="#arr50px" transform="translate(85,-85) rotate(-135)" stroke="yellow" fill="yellow" />
		<use xlink:href="#arr50px" transform="translate(50,-120) rotate(-180)" stroke="magenta" fill="magenta" />
		<use xlink:href="#arr50px" transform="translate(0,-120) rotate(-225)" stroke="cyan" fill="cyan" />
		<use xlink:href="#arr50px" transform="translate(0,0) scale(1.85) rotate(-115)" stroke="black" fill="black" stroke-width="3px" />
		<foreignObject width="15" height="25" transform="translate(15, -25)">
		$\vec{r_0}$
		</foreignObject>
		<foreignObject width="15" height="25" transform="translate(50, -40)">
		$\vec{r_1}$
		</foreignObject>
		<foreignObject width="15" height="25" transform="translate(65, -70)">
		$\vec{r_2}$
		</foreignObject>
		<foreignObject width="15" height="25" transform="translate(50, -105)">
		$\vec{r_3}$
		</foreignObject>
		<foreignObject width="15" height="25" transform="translate(15, -120)">
		$\vec{r_4}$
		</foreignObject>
		<foreignObject width="15" height="25" transform="translate(-20, -105)">
		$\vec{r_5}$
		</foreignObject>
		<foreignObject width="50" height="40" transform="translate(-15, -65)">
		$\displaystyle \sum_i \vec{r}_i$
		</foreignObject>
	</g>
</svg>

dapat ditampilkan dengan hanya menggunakan code snippet berikut

```html
<svg width="520" height="300">
	<g>
		<use xlink:href="#sphere-3-circles" transform="scale(0.5)" />
		<foreignObject x="10" y="60" width="130" height="25">
		$x^2 + y^2 + z^2 = R^2$
		</foreignObject>
	</g>
	<use xlink:href="#xyz-axis" x="170" y="75" class="black" />
	<g transform="translate(240, 25)">
		<use xlink:href="#h-spring" x="10" y="18" class="black-outline"/>
		<use xlink:href="#block" x="130" y="10" class="white" id="moving-block" />
		<use xlink:href="#floor" x="10" y="50" />
		<use xlink:href="#left-wall" />
		<use xlink:href="#arr50px" transform="translate(150,30) rotate(90)" stroke="green" fill="green" />
		<use xlink:href="#arr50px" transform="translate(160,100) rotate(-90)" stroke="red" fill="red" />
		<foreignObject x="130" y="80" width="15" height="25">
		$\vec{w}$
		</foreignObject>
		<foreignObject x="165" y="70" width="15" height="25">
		$\vec{N}$
		</foreignObject>
		<foreignObject x="145" y="-15" width="15" height="25">
		$m$
		</foreignObject>
		<foreignObject x="70" y="-5" width="15" height="25">
		$k$
		</foreignObject>
	</g>
	<g transform="translate(20, 90)">
		<use xlink:href="#xyz-axis" x="10" y="190" class="black" />
		<path d="M60,130 q150,-200 300,50" class="red-curve" />
		<use xlink:href="#point" x="60" y="130" class="black" />
		<use xlink:href="#point" x="360" y="180" class="black" />
		<use xlink:href="#point" x="195" y="42" class="black" />
		<foreignObject x="35" y="135" width="55" height="25">
		$(x_0, y_0)$
		</foreignObject>
		<foreignObject x="170" y="12" width="55" height="25">
		$(x_1, y_1)$
		</foreignObject>
		<foreignObject x="300" y="170" width="55" height="25">
		$(x_2, y_2)$
		</foreignObject>
		<foreignObject x="130" y="90" width="120" height="25">
		$y = ax^2 + bx + c$
		</foreignObject>
	</g>
	<g transform="translate(400, 270)">
		<use xlink:href="#arr50px" transform="translate(0,0) rotate(0)" stroke="blue" fill="blue" />
		<use xlink:href="#arr50px" transform="translate(50,0) rotate(-45)" stroke="green" fill="green" />
		<use xlink:href="#arr50px" transform="translate(85,-35) rotate(-90)" stroke="red" fill="red" />
		<use xlink:href="#arr50px" transform="translate(85,-85) rotate(-135)" stroke="yellow" fill="yellow" />
		<use xlink:href="#arr50px" transform="translate(50,-120) rotate(-180)" stroke="magenta" fill="magenta" />
		<use xlink:href="#arr50px" transform="translate(0,-120) rotate(-225)" stroke="cyan" fill="cyan" />
		<use xlink:href="#arr50px" transform="translate(0,0) scale(1.85) rotate(-115)" stroke="black" fill="black" stroke-width="3px" />
		<foreignObject width="15" height="25" transform="translate(15, -25)">
		$\vec{r_0}$
		</foreignObject>
		<foreignObject width="15" height="25" transform="translate(50, -40)">
		$\vec{r_1}$
		</foreignObject>
		<foreignObject width="15" height="25" transform="translate(65, -70)">
		$\vec{r_2}$
		</foreignObject>
		<foreignObject width="15" height="25" transform="translate(50, -105)">
		$\vec{r_3}$
		</foreignObject>
		<foreignObject width="15" height="25" transform="translate(15, -120)">
		$\vec{r_4}$
		</foreignObject>
		<foreignObject width="15" height="25" transform="translate(-20, -105)">
		$\vec{r_5}$
		</foreignObject>
		<foreignObject width="50" height="40" transform="translate(-15, -65)">
		$\displaystyle \sum_i \vec{r}_i$
		</foreignObject>
	</g>
</svg>
```

yang menunjukkan bahwa beberapa bentuk tersebut telah didefinisikan menggunakan elemen SVG `<defs>` dan kemudian dipanggil dengan elemen SVG `<use>`.

{% comment %}
Yang bukan merupakan bentuk yang telah didefinisikan dengan elemen SVG `<defs>` adalah

<ol type="A">
<li><tt>arr50px</tt>.
<li><tt>point</tt>.
<li><tt>moving-block</tt>.
<li><tt>h-spring</tt>.
<li><tt>sphere-3-circles</tt>.
{% endcomment %}


## &nbsp;
[svg js event](0020) &bull;
[svg js spring mass sys](0022)
