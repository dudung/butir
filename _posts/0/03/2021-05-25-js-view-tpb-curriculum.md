---
layout: butir
authors: [viridi]
title: js view tpb curriculum
pid: '0030'
mathjax: false
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: true
category: code
tags: ["js", "html", "calc", "tpb", "ip"]
date: 2021-05-27 05:27:00 +0700
permalink: /0030
src: https://github.com/dudung/butir/commits/main/_posts/0/03/2021-05-25-js-view-tpb-curriculum.md
twitter_username: 6unpnp
nodes: ['0000']
---
Penampil sederhana untuk menyajikan matakuliah TPB ITB dalam kurikulum 2019 [[1](#r01)], yang dapat dibuat menggunakan JS.

<script src="assets/js/app/js-view-tpb-curriculum.js"></script>

<script>
</script>

Kode, nama, dan jumlah SKS tiap matakuliah dapat diperoleh dengan mengubah pilihan F/S.


## codes
Terdapat beberapa kelas yang digunakan untuk membuat tampilan di atas, yaitu kelas Course

```javascript
class Course {
	constructor(code, name, credit) {
		this.code = code;
		this.name = name;
		this.credit = credit;
	}
};
```

kelas Semester

```javascript
class Semester {
	constructor(term, courses) {
		this.term = term;
		this.courses = [];
		if(arguments.length > 1) {
			this.courses = courses.split(" ");
		}
		this.credit = 0;
	}
	
	addCourse(course) {
		this.courses.push(course);
	}
	
	getCredit() {
		var N = this.courses.length;
		var cre = 0;
		for(var i = 0; i < N; i++) {
			var c = getCourse(this.courses[i]).from(courses).credit;
			cre += c;
		}
		this.credit = cre;
		return this.credit;
	}
};
```

dan kelas Curriculum

```javascript
class Curriculum {
	constructor(name) {
		this.name = name;
		this.semesters = [];
	}
	
	addSemester(term, courses) {
		var s = new Semester(term, courses);
		this.semesters.push(s);
	}
};
```

serta beberapa fungsi

```javascript
function createCourse(info) {
	var s = info.split("\t");
	if(info.length > 0 && s.length > 1) {
		var c = new Course(s[0], s[1], parseInt(s[2]));
		courses.push(c);
	}
}

function getCourse(code) {
	var o = {
		from(courses) {
			var N = courses.length;
			var c;
			for(var i = 0; i < N; i++) {
				if(code == courses[i].code) {
					c = courses[i];
					break;
				}	
			}
			return c;
		}
	}
	return o;
}

function getSemester(term) {
	var o = {
		from(semesters) {
			var s;
			N = semesters.length;
			for(var i = 0; i < N; i++) {
				if(term == semesters[i].term) {
					s = semesters[i];
					break;
				}
			}
			return s;
		}
	}
	return o;
}

function getCurriculum(name) {
	var o = {
		from(faculties) {
			var f;
			N = faculties.length;
			for(var i = 0; i < N; i++) {
				if(name == faculties[i].name) {
					f = faculties[i];
					break;
				}
			}
			return f;
		}
	}
	return o;
}

function strCurriculum0(curriculum) {
	var sem = curriculum.semesters;
	var str = "";
	str += curriculum.name + "\n";
	for(var i = 0; i < sem.length; i++) {
		str += "Semester " + sem[i].term + "\n";
		var cou = sem[i].courses;
		for(var j = 0; j < cou.length; j++) {
			var c = getCourse(cou[j]).from(courses);
			str += c.code + "\t";
			str += c.name + "\t";
			str += c.credit + "\n";
		}
	}
	return str;
}
```

untuk menggakan kelas-kelas di sebelumnya. Beberapa fungsi dapat dintegrasikan ke dalam kelas terkait, yang mungkin akan dilakukan dalam versi berikutnya. Penggunaan larik global, e.g. `courses`, `curriculums` juga akan ditinjau ulang.

Kode lengkap dapat diperoleh [[2](#r02)] dan dapat dimodifikasi. Digunakan dengan cara meletakkan baris berikut

```html
<script src="js-view-tpb-curriculum.js"></script>
```

dalam suatu berkas HTML setelah berkas JS `js-view-tpb-curriculum.js` tersebut disimpan pada link tertentu agar dapat dipanggil seperti potongan kode di atas.


## notes
1. <a name="r01"></a>-, "Sistem Informasi Akademik", Institut Teknologi Bandung, url <https://akademik.itb.ac.id/> [20210527].
2. <a name="r01"></a>Sparisoma Viridi, "js-view-tpb-curriculum.js", butir, url <https://dudung.github.io/butir/assets/js/app/js-view-tpb-curriculum.js> [20210527].