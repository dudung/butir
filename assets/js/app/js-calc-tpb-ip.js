/*
	js-calc-tpb-ip.js
	Simple calculator for IP TPB ITB with 2019 curriculum
	
	Sparisoma Viridi | https://github.com/dudung
	
	20210525
	2028 Start this app.
	2053 Create class of Course and test it for FMIPA.
	2057 Check length and split results with \t separator.
	2113 Create all TPB courses and add to courses array.
*/

class Course {
	constructor(code, name, credit) {
		this.code = code;
		this.name = name;
		this.credit = credit;
	}
};

var courses = []

function createCourse(info) {
	var s = info.split("\t");
	if(info.length > 0 && s.length > 1) {
		var c = new Course(s[0], s[1], parseInt(s[2]));
		courses.push(c);
	}
}

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

createCourse("")

