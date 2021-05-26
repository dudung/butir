/*
	js-calc-tpb-ip.js
	Simple calculator for IP TPB ITB with 2019 curriculum
	
	Sparisoma Viridi | https://github.com/dudung
	
	20210525
	2028 Start this app.
	2053 Create class of Course and test it for FMIPA.
	2057 Check length and split results with \t separator.
	2113 Create all TPB courses and add to courses array.
	20210526
	0352 Continue with class of Semester.
	0414 Find problem with class of Faculty while adding Semester.
	0428 Finish Semester and Faculty JS classes.
	0437 Add FMIPA and SITH-S to faculties.
	0606 Finish all faculties and create getFaculty().from() function.
	0623 Finish getCourse().from() and strFaculty0() functions.
	0628 Create getSemester().from() and have not yet test it. Ok.
	0639 Rename getCourse().from() to getCourseInfo().from(), cancel.
	1158 Change Faculty to Curriculum, more appropriate.
	1231 Create getCredit for Semester.
	1253 Create div0, divL, divR for visual layout.
	1610 Face error while creating visual layout with div.
	
	Notes
	1. It could be two functions of getCourse().from(), first from
	   list of courses and second from courses in a semester of a
		 faculty [20210526.0646].
*/


// Define classes and function
class Course {
	constructor(code, name, credit) {
		this.code = code;
		this.name = name;
		this.credit = credit;
	}
};

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


// Create courses
var courses = []

createCourse("MA1101	Matematika IA	4");
createCourse("MA1102	Matematika IB	3")
createCourse("MA1103	Matematika Bisnis I	3")

createCourse("MA1201	Matematika IIA	4");
createCourse("MA1202	Matematika IIB	3")
createCourse("MA1204	Matematika IIC	4")
createCourse("MA1203	Matematika Bisnis II	3")

createCourse("FI1101	Fisika Dasar IA	4");
createCourse("FI1102	Fisika Dasar IB	3")

createCourse("FI1201	Fisika Dasar IIA	4");
createCourse("FI1202	Fisika Dasar IIB	3")

createCourse("KI1101	Kimia Dasar IA	3");
createCourse("KI1201	Kimia Dasar IIA	3");
createCourse("KI1002	Kimia Dasar B	4")

createCourse("KU1011	Tata Tulis Karya Ilmiah	2");
createCourse("KU1001	Olah Raga	2");
createCourse("KU1202	Pengantar Rekayasa dan Desain	3");
createCourse("KU1102	Pengenalan Komputasi	3");
createCourse("KU1024	Bahasa Inggris	2");

createCourse("KU1160	Pengantar Keilmuan MIPA	2");
createCourse("BI1101	Biologi Dasar	4")
createCourse("BI1201	Pengantar Sains dan Teknologi Hayati	2")
createCourse("FA1101	Pengantar Farmasi & Kesehatan	2")
createCourse("FA1102	Biologi Sel Farmasi	2")
createCourse("FA1241	Anatomi dan Fisiologi Manusia I	2")
createCourse("KU1164	Pengantar Sumberdaya Mineral dan Energi	2")
createCourse("KU1163	Pengantar Ilmu dan Teknologi Kebumian	2")
createCourse("KU1267	Menggambar Teknik	2")
createCourse("IF1210	Dasar Pemrograman	2")
createCourse("EL1200	Pengantar Analisis Rangkaian	2")
createCourse("MS1100	Pengenalan Teknik Mesin, Material, dan Dirgantara	1")
createCourse("MS1200	Gambar Teknik	2")
createCourse("MS1210	Statika Struktur	3")
createCourse("KU1166	Menggambar Teknik	2")
createCourse("AR1101	Dasar Perencanaan dan Perancangan	3")
createCourse("PL1202	Teknik Komunikasi dan Presentasi	3")
createCourse("SR1101	Dasar Seni Rupa dan Desain	2")
createCourse("SR1102	Gambar I	4")
createCourse("SR1103	Rupa Dasar Dua Dimensi I	3")
createCourse("SR1104	Rupa Dasar Tiga Dimensi I	3")
createCourse("SR1201	Kreativita dan Humanita	2")
createCourse("SR1202	Gambar II	4")
createCourse("SR1203	Rupa Dasar Dua Dimensi II	3")
createCourse("SR1204	Rupa Dasar Tiga Dimensi II	3")

createCourse("MB1101	Pengantar Bisnis	4")
createCourse("MB1102	Seni Pentas dan Penampilan	4")
createCourse("MB1201	Statistika Bisnis	3")
createCourse("MB1212	Kajian Tatanan Masyarakat	4")
createCourse("MB1203	Kepemimpinan dan Praktek Manajemen	3")


// Create curriculums
var curriculums = [];

var c = new Curriculum("FMIPA");
c.addSemester(1, "MA1101 FI1101 KI1101 KU1011 KU1160 KU1102");
c.addSemester(2, "MA1201 FI1201 KI1201 KU1001 KU1202 KU1024");
curriculums.push(c);

var c = new Curriculum("SITH-S");
c.addSemester(1, "MA1102 FI1102 KI1101 KU1011 BI1101 KU1102");
c.addSemester(2, "MA1202 FI1202 KI1201 KU1001 BI1201 KU1202 KU1024");
curriculums.push(c);

var c = new Curriculum("SITH-R");
c.addSemester(1, "MA1101 FI1101 KI1101 KU1001 KU1102 KU1024");
c.addSemester(2, "MA1201 FI1201 KI1201 KU1011 BI1201 KU1202");
curriculums.push(c);

var c = new Curriculum("SF");
c.addSemester(1, "MA1102 FI1102 KI1101 KU1011 FA1101 FA1102 KU1102");
c.addSemester(2, "MA1202 FI1202 KI1201 KU1001 FA1241 KU1202 KU1024");
curriculums.push(c);

var c = new Curriculum("FTTM");
c.addSemester(1, "MA1101 FI1101 KI1101 KU1164 KU1102 KU1024");
c.addSemester(2, "MA1201 FI1201 KI1201 KU1011 KU1001 KU1202");
curriculums.push(c);

var c = new Curriculum("FITB");
c.addSemester(1, "MA1101 FI1101 KI1101 KU1011 KU1102 KU1163");
c.addSemester(2, "MA1201 FI1201 KI1201 KU1001 KU1202 KU1024");
curriculums.push(c);

var c = new Curriculum("FTI");
c.addSemester(1, "MA1101 FI1101 KI1101 KU1011 KU1001 KU1102");
c.addSemester(2, "MA1201 FI1201 KI1201 KU1202 KU1267 KU1024");
curriculums.push(c);

var c = new Curriculum("FTI");
c.addSemester(1, "MA1101 FI1101 KI1101 KU1011 KU1001 KU1102");
c.addSemester(2, "MA1201 FI1201 KI1201 KU1202 KU1267 KU1024");
curriculums.push(c);

var c = new Curriculum("STEI");
c.addSemester(1, "MA1101 FI1101 KU1001 KU1102 KU1011 KU1024");
c.addSemester(2, "MA1201 FI1201 IF1210 KU1202 KI1002 EL1200");
curriculums.push(c);

var c = new Curriculum("FTMD");
c.addSemester(1, "MA1101 FI1102 KI1002 KU1001 KU1102 MS1100");
c.addSemester(2, "FI1202 KU1202 MS1200 MS1210 MA1204 KU1024 KU1011");
curriculums.push(c);

var c = new Curriculum("FTSL");
c.addSemester(1, "MA1101 FI1101 KI1101 KU1102 KU1024 KU1166");
c.addSemester(2, "MA1201 FI1201 KI1201 KU1001 KU1011 KU1202");
curriculums.push(c);

var c = new Curriculum("FTSL");
c.addSemester(1, "MA1101 FI1102 KI1002 AR1101 KU1102");
c.addSemester(2, "MA1201 FI1202 KU1001 PL1202 KU1202 KU1024 KU1011");
curriculums.push(c);

var c = new Curriculum("FSRD");
c.addSemester(1, "SR1101 SR1102 SR1103 SR1104 KU1001 KU1102 KU1024");
c.addSemester(2, "SR1201 SR1202 SR1203 SR1204 KU1011 KU1202");
curriculums.push(c);

var c = new Curriculum("SBM");
c.addSemester(1, "MA1103 KU1001 KU1102 KU1024 MB1101 MB1102");
c.addSemester(2, "MA1203 KU1202 KU1011 MB1201 MB1212 MB1203");
curriculums.push(c);

var c = getCurriculum("SBM").from(curriculums);
var cs = strCurriculum0(c)


// Create layout
var div = document.createElement("div");
with(div.style) {
	padding = "2px";
	border = "1px #000 solid";
	background = "#eee";
	height = "200px";
	padding = "6px";
}

var divT = document.createElement("div");
with(divT.style) {
	border = "1px #0f0 solid";
	background = "#efe";
	height = "25px";
}

var divL = document.createElement("div");
with(divL.style) {
	border = "1px #f00 solid";
	background = "#fee";
	width = "49%";
	height = "156px";
	float = "left";
}

var divR = document.createElement("div");
with(divR.style) {
	border = "1px #00f solid";
	background = "#eef";
	width = "49%";
	height = "156px";
	float = "right";
}

divT.innerHTML = c.name;
divL.innerHTML = "Semester " + c.semesters[0].term;
divR.innerHTML = "Semester " + c.semesters[1].term;

for(var i = 0; i < c.semesters.length; i++) {
	for(var j = 0; j < c.semesters[i].courses.length; j++) {
		var code = c.semesters[i].courses[j];
		var dv = document.createElement("div");
		dv.innerHTML = code;
		dvc = (i == 0) ? divL : divR;
		dvc.append(dv);
	}
}

document.body.append(div);
div.append(divT);
div.append(divL);
div.append(divR);

