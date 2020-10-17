var intervalo = 2000;

function slide1(){
	document.getElementById("banner").src = "images/carrossel1.jpg";
		setTimeout("slide2()",intervalo);
}

function slide2(){
	document.getElementById("banner").src = "images/carrossel2.jpg";
		setTimeout("slide3()",intervalo);

}

function slide3(){
	document.getElementById("banner").src = "images/carrossel3.jpg";
		setTimeout("slide4()",intervalo);

}

function slide4(){
	document.getElementById("banner").src = "images/carrossel4.jpg";
		setTimeout("slide5()",intervalo);

}

function slide5(){
	document.getElementById("banner").src = "images/carrossel5.jpg";
		setTimeout("slide6()",intervalo);

}

function slide6(){
	document.getElementById("banner").src = "images/carrossel6.jpg";
		setTimeout("slide7()",intervalo);

}

function slide7(){
	document.getElementById("banner").src = "images/carrossel7.jpg";
		setTimeout("slide1()",intervalo);

}

function slide8(){
	document.getElementById("banner").src = "images/play51.webp";
		setTimeout("slide9()",intervalo);
}
function slide9(){
	document.getElementById("banner").src = "images/play52.webp";
		setTimeout("slide10()",intervalo);
}
function slide10(){
	document.getElementById("banner").src = "images/play53.webp";
		setTimeout("slide11()",intervalo);
}
function slide11(){
	document.getElementById("banner").src = "images/play54.webp";
		setTimeout("slide8()",intervalo);
}