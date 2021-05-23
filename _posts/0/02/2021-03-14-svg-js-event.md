---
layout: butir
authors: [viridi]
title: svg js event
pid: '0020'
mathjax: false
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: code
tags: ["svg", "html", "js", "event"]
date: 2021-03-14 10:52:00 +0700
permalink: /0020
src: https://github.com/dudung/butir/commits/main/_posts/0/02/2021-03-14-svg-js-event.md
twitter_username: 6unpnp
nodes: ['0000', '0021', '0022']
---
Dengan memanfaatkan JS element SVG dalam suatu berkas HTML dapat dibuat agar berinteraksi dengan event tertentu, misalnya button click.

<div id="container"></div>

<script>
var btn = document.createElement("button");
btn.innerHTML = "Move";
var con = document.getElementById("container");

var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
var circ = document.createElementNS("http://www.w3.org/2000/svg", "circle");
var txt =  document.createElementNS("http://www.w3.org/2000/svg", "text");

svg.setAttribute("width", "200");
svg.setAttribute("height", "100");
svg.style.background = "#cfc";

txt.setAttribute("x", "23");
txt.setAttribute("y", "55");
txt.innerHTML = "(50, 50)";
txt.setAttribute("fill", "#fff");

circ.setAttribute("cx", "50");
circ.setAttribute("cy", "50");
circ.setAttribute("r", "40");
circ.setAttribute("stroke", "#f89");
circ.setAttribute("stroke-width", "2");
circ.setAttribute("fill", "#a00");

con.appendChild(btn);
con.appendChild(svg);
	svg.appendChild(circ);
	svg.appendChild(txt);
btn.addEventListener("click", click);

function click() {
	var dx = 10;
	var x = parseInt(circ.getAttribute("cx"));
	var y = parseInt(circ.getAttribute("cy"));
	x += dx;
	circ.setAttribute("cx", x);
	txt.setAttribute("x", x-27);
	var content = "(" + x + ", " + y + ")";
	txt.innerHTML = content;
}
</script>

Gambar di atas dapat diperoleh dengan menggunakan code snippet berikut

```javascript
<script>
var btn = document.createElement("button");
btn.innerHTML = "Move";
var con = document.getElementById("container");

var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
var circ = document.createElementNS("http://www.w3.org/2000/svg", "circle");
var txt =  document.createElementNS("http://www.w3.org/2000/svg", "text");

svg.setAttribute("width", "200");
svg.setAttribute("height", "100");
svg.style.background = "#cfc";

txt.setAttribute("x", "23");
txt.setAttribute("y", "55");
txt.innerHTML = "(50, 50)";
txt.setAttribute("fill", "#fff");

circ.setAttribute("cx", "50");
circ.setAttribute("cy", "50");
circ.setAttribute("r", "40");
circ.setAttribute("stroke", "#f89");
circ.setAttribute("stroke-width", "2");
circ.setAttribute("fill", "#a00");

con.appendChild(btn);
con.appendChild(svg);
	svg.appendChild(circ);
	svg.appendChild(txt);
btn.addEventListener("click", click);

function click() {
	var dx = 10;
	var x = parseInt(circ.getAttribute("cx"));
	var y = parseInt(circ.getAttribute("cy"));
	x += dx;
	circ.setAttribute("cx", x);
	txt.setAttribute("x", x-27);
	var content = "(" + x + ", " + y + ")";
	txt.innerHTML = content;
}
</script>
```

yang diletakkan setelah suatu elemen HTML `<div>` dengan `id="container"` didefinisikan. Terdapat elemen HTML dan SVG yang diperlukan (dibuat atau diakses) untuk membuat contoh dalam gambar di atas.

{% comment %}
Elemen-elemen tersebut adalah

<ol type="A">
<li><tt>&lt;button&gt;</tt>, <tt>&lt;text&gt;</tt>, <tt>&lt;circle&gt;</tt>,  dan <tt>&lt;svg&gt;</tt>.
<li><tt>&lt;div&gt;</tt>, <tt>&lt;button&gt;</tt>, <tt>&lt;text&gt;</tt>, <tt>&lt;circle&gt;</tt>,  dan <tt>&lt;svg&gt;</tt>.
<li><tt>&lt;div&gt;</tt> dan <tt>&lt;button&gt;</tt>.
<li><tt>&lt;text&gt;</tt>, <tt>&lt;circle&gt;</tt>,  dan <tt>&lt;svg&gt;</tt>.
<li><tt>click()</tt> dan <tt>addEventListener()</tt>.
{% endcomment %}


## &nbsp;
[svg js spring mass sys](0021)
