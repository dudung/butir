---
layout: butir
authors: [viridi]
title: svg js spring mass sys
pid: '0022'
mathjax: false
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: code
tags: ["svg", "html", "js", "button", "click"]
date: 2021-03-14 18:42:00 +0700
permalink: /0022
src: https://github.com/dudung/butir/commits/main/_posts/0/02/2021-03-14-svg-js-spring-mass-sys.md
twitter_username: 6unpnp
nodes: ['0000', '0020', '0021']
---
Suatu bentuk didefinisikan dengan elemen SVG `<defs>` sebagaimana diberikan oleh code snippet berikut.

```html
<svg>
	<defs>
		<g id="h-spring">
			<desc>w = 120, h = 24</desc>
			<path d="M0,12 h16 l8,-12 l8,24, l8,-24 l8,24, l8,-24 l8,24, l8,-24 l8,24, l8,-24 l8,24, l8,-12 h16" />
		</g>
		<g id="block">
			<desc>w = 40, h = 40</desc>
			<path d="M0,0 v40 h40 v-40 z" />
		</g>
		<g id="floor">
			<desc>w = 240, h = 10</desc>
			<rect x1="0" y1="0" width="240" height="10" stroke="none" fill="#ddd"	/>
			<line x1="0" y1="0" x2="240" y2="0" stroke="black" />
		</g>
		<g id="left-wall">
			<desc>w = 10, h = 50</desc>
			<rect x1="0" y1="0" width="10" height="50" stroke="none" fill="#ddd"	/>
			<line x1="10" y1="0" x2="10" y2="50" stroke="black" />
		</g>
	</defs>
</svg>
```

yang kemudian dipanggil dengan

```html
<svg width="250" height="60">
	<use xlink:href="#h-spring" y="18" class="black-outline" id="spring" transform="translate(10)"/>
	<use xlink:href="#block" x="130" y="10" class="white" id="moving-block" />
	<use xlink:href="#floor" x="10" y="50" />
	<use xlink:href="#left-wall" />
</svg>
```

dan digerakkan dengan

```javascript
<script>
var proc, t;

function toggle() {
	var cap = event.target.innerHTML;
	console.log(cap);
	if(cap == "Start") {
		event.target.innerHTML = "Stop";
		t = 0;
		proc = setInterval(visualize, 100);
	} else {
		event.target.innerHTML = "Start";
		clearInterval(proc);
	}
}

function visualize() {
	var A = 40;
	var x0 = 130.0;
	var T = 2;
	var dt = 0.1;
	var omega = 2 * Math.PI / T;
	var x = A * Math.sin(omega * t) + x0;
	
	var mb = document.getElementById("moving-block");
	var sp = document.getElementById("spring");
	mb.setAttribute("x", x);
	
	var ratio = x / x0;
	var scale = "scale(" + ratio + ", 1)";
	sp.setAttribute("transform", "translate(10) " + scale);
	
	t += dt;
}
</script>
```

sehingga menghasilkan visualisasi berikut

<svg style="display: none;">
	<style type="text/css">
	.black-outline { stroke: black; fill: none; stroke-width: 1.5px; }
	.white { stroke: black; fill: #fff; stroke-width: 2px; }
	</style>
	<defs>
		<g id="h-spring">
			<desc>w = 120, h = 24</desc>
			<path d="M0,12 h16 l8,-12 l8,24, l8,-24 l8,24, l8,-24 l8,24, l8,-24 l8,24, l8,-24 l8,24, l8,-12 h16" vector-effect="non-scaling-stroke" stroke-linejoin="bevel" />
		</g>
		<g id="block">
			<desc>w = 40, h = 40</desc>
			<path d="M0,0 v40 h40 v-40 z" />
		</g>
		<g id="floor">
			<desc>w = 240, h = 10</desc>
			<rect x1="0" y1="0" width="240" height="10" stroke="none" fill="#ddd"	/>
			<line x1="0" y1="0" x2="240" y2="0" stroke="black" />
		</g>
		<g id="left-wall">
			<desc>w = 10, h = 50</desc>
			<rect x1="0" y1="0" width="10" height="50" stroke="none" fill="#ddd"	/>
			<line x1="10" y1="0" x2="10" y2="50" stroke="black" />
		</g>
	</defs>
</svg>

<svg width="250" height="60">
	<style type="text/css">
	//svg { border: 1px black dashed; }
	//foreignObject { border: 1px black solid; }
	</style>
	<use xlink:href="#h-spring" y="18" class="black-outline" id="spring" transform="translate(10)"/>
	<use xlink:href="#block" x="130" y="10" class="white" id="moving-block" />
	<use xlink:href="#floor" x="10" y="50" />
	<use xlink:href="#left-wall" />
</svg>

<button onclick="toggle()">Start</button>

<script>
var proc, t;

function toggle() {
	var cap = event.target.innerHTML;
	console.log(cap);
	if(cap == "Start") {
		event.target.innerHTML = "Stop";
		t = 0;
		proc = setInterval(visualize, 100);
	} else {
		event.target.innerHTML = "Start";
		clearInterval(proc);
	}
}

function visualize() {
	var A = 40;
	var x0 = 130.0;
	var T = 2;
	var dt = 0.1;
	var omega = 2 * Math.PI / T;
	var x = A * Math.sin(omega * t) + x0;
	
	var mb = document.getElementById("moving-block");
	var sp = document.getElementById("spring");
	mb.setAttribute("x", x);
	
	var ratio = x / x0;
	var scale = "scale(" + ratio + ", 1)";
	sp.setAttribute("transform", "translate(10) " + scale);
	//console.log(omega, x, scale);
	
	t += dt;
}
</script>

yang memerlukan elemen HTML `<button>` dengan event `onclick` memanggil fungsi `toggle()`. Teks awal dari elemen ini adalah "Start" yang dapat berubah menjadi "Stop" dan kembali. Di sini telah diberikan contoh penggunaan elemen `<defs>` dan `<use>` pada SVG yang kemudian diubah melalui JS menggunakan elemen DOM HTML `<button>`.

{% comment %}
Penulisan elemen `<button>` yang tepat untuk contoh yang diberikan pada saat awal adalah

<ol type="A">
<li><tt>&lt;button onclick="toggle()" value="Start"&gt;&lt;/button&gt;</tt>.
<li><tt>&lt;button onclick="toggle()" value="Start" /&gt;</tt>.
<li><tt>&lt;button onclick="toggle()"&gt;Stop&lt;/button&gt;</tt>.
<li><tt>&lt;button click="toggle()"&gt;Start&lt;/button&gt;</tt>.
<li><tt>&lt;button onclick="toggle()"&gt;Start&lt;/button&gt;</tt>.
{% endcomment %}

{% comment %}
<!-- 20210314.1357 It fails and not understandable -->
<svg>
	<defs>
		<!-- url https://stackoverflow.com/a/46802047 -->
		<pattern id="dlines1" height="10" width="10" patternUnits="userSpaceOnUse">
			<!--line x1="0" y1="4" x2="5" y2="4" stroke-width="2" stroke="black"/-->
			<line x1="0" y1="10" x2="10" y2="0" stroke-width="1" stroke="#888" />
		</pattern>
		<!-- url https://developer.mozilla.org/en-US/docs/Web/SVG/Element/pattern -->
		<pattern id="dlines2" viewBox="0,0,10,10" width="10%" height="10%">
			<!--polygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2" /-->
			<path d="M0,10 l10,-10" stroke="#888" stroke-width="1px" />
		</pattern>
		<g id="floor">
			<rect x="0" y="0" width="40" height="40" fill="url(#dlines2)" />
		</g>
	</defs>
	<use xlink:href="#floor" x="0" y="0" transform="scale(2, 0.5)"/>
</svg>

<!--use xlink:href="#h-spring" x="10" y="28" class="black-outline" transform="translate(10) scale(0.5, 1) translate(-10)" /-->
{% endcomment %}


## &nbsp;
[svg as lib](0020) &bull;
[svg js event](0021)
