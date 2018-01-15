function showOther() {	
	document.getElementById("disappearbutton").className = "disno"
	document.getElementById("s1").className = "button yellow white show slow1"
	document.getElementById("s2").className = "button yellow white show slow2"
	document.getElementById("s3").className = "button yellow white show slow3" 

}

var det = 1;
function rotateIt() {

	if (det%2 == 1) {
		document.getElementById("rotate").className = "small-4 columns rotates2 rotatecss"
	} else {
		document.getElementById("rotate").className = "small-4 columns rotates1 rotatecss"
	}
	det++;
	setTimeout("rotateIt()", 200)
}

var det2 = 1;
function rotateIt2() {

	if (det2%2 == 1) {
		document.getElementById("rotate2").className = "small-4 columns rotates2 rotaterightcss"
	} else {
		document.getElementById("rotate2").className = "small-4 columns rotates1 rotaterightcss"
	}
	det2++;
	setTimeout("rotateIt2()", 200)
}

var i = 0;
var p = 240;
function clickcheck() {
	
	var red = document.getElementById("top");
	var grey = document.getElementById("gg");
	//function decrease() {
			//alert("hi");

	//var redLen = red.offsetWidth;
	//var greylen = grey.offsetWidth;
	//for (var i = 200; i > 0; i--) {
		if (i < 200) {
		i = i + 20;
		p = p - 20;
		grey.style.height = p + "px";
		red.style.height = i + "px";
		
		setTimeout("clickcheck()", 00)
	};
	//};
};

function check() {
	clickcheck();
};
