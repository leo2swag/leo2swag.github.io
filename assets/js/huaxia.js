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

var pieData = [
          {
            value: 2,
            color: "#AE0000"
          },
          {
            value: 10,
            color: "#FF0000"
          },
          {
            value: 50,
            color: "#FFAF60" 
          },
          {
            value: 38,
            color: "#ADADAD"
          }
      ];

function testCheck() {
	 
	var sample = document.getElementsByClassName("testest")[0];
	//sample.setAttribute("color", "red");
	if (sample.attributes[0].value == "green") {
	sample.setAttribute("id","canvas");
	//sample.getAttributeNode("style").value="color:green";
	
	
	var myPie = new Chart(document.getElementById("canvas").getContext("2d")).Pie(pieData);
	}
}

function testCheck22() {
	 
	var sample = document.getElementsByClassName("testest")[0];
	sample.setAttribute("color", "red");
}

function checkreturn() {
	var sample = document.getElementsByClassName("testest")[0];
	//sample.setAttribute("color", "red");
	if (sample.attributes[0].value == "green") {
		return true;
	} else {
		return false;
	}
}

function setAngualr() {
	var angularTriggle = document.getElementsByClassName("remainMain")[0];
	//if (angularTriggle.attributes[1].value == "green") {
	angularTriggle.setAttribute("ng-app", "myApp");
//}
}

function setAngualr2() {
	 
	var angularTriggle = document.getElementsByClassName("remainMain")[0];
	angularTriggle.setAttribute("color", "red");
}

function angularAnimation() {
	 console.log('ssssssssssss');

}

$(document).ready(function() {
        var p = 0,
            t = 0;
        //var check11 = checkreturn();
        $(window).scroll(function(e) {
        	//lineChartShow();
            p = $(this).scrollTop();
            console.log('p value ' + p);
            if ( p >= 520 && p <= 815) {
            	testCheck();
            	testCheck22();
            } 

            if (p >= 1410 && p <= 1600) {
            }

            setTimeout(function() {
                t = p;
            }, 0);
        });
    });
