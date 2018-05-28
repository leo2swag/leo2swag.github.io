
function showOther() {	
	document.getElementById("disappearbutton").className = "disno"
	document.getElementById("s1").className = "button yellow white show slow1"
	document.getElementById("s2").className = "button yellow white show slow2"
	document.getElementById("s3").className = "button yellow white show slow3" 

}

var fdet = 1;
function rotatefinal1() {

	var list = document.getElementsByClassName("rotates2");
	var listlen = list.length;
	//console.log("list is " + list)
	//var i;
	if (fdet == 1) {
		for (var i = 0; i < listlen; i++) {
			//console.log('aa');
			list[i].style.backgroundImage = "url('assets/img/face1.png')";
			//list[i].className = "small-4 columns rotates1 rotatecss";
			//$('.rotates2').get(i).className='small-4 columns rotates1 rotatecss';
			//list[i].setAttribute("data", "small-4 columns rotates1 rotatecss");
		}
		fdet = 0
	} else {
		//console.log('hi');
		for (var i = 0; i < listlen; i++) {
			list[i].style.backgroundImage = "url('assets/img/face2.png')";
			//list[i].setAttribute("class", "small-4 columns rotates2 rotatecss");
		}
		fdet = 1
	}
	
	setTimeout("rotatefinal1()", 300)
}

var iconthis = true;
function rotatefinal2() {

	var flist = document.getElementsByClassName("secondrotates");
	var flistlen = flist.length;
	//console.log("list is " + flist)
	//var fi;
	if (iconthis) {
		for (var fi = 0; fi < flistlen; fi++) {
			//console.log('aa ' + fi);
			//var flist = document.getElementsByClassName("secondrotates");
			flist[fi].style.backgroundImage = "url('assets/img/face5.png')";
			//list[i].className = "small-4 columns rotates1 rotatecss";
			//$('.rotates2').get(i).className='small-4 columns rotates1 rotatecss';
			//list[i].setAttribute("data", "small-4 columns rotates1 rotatecss");
			
		}
		iconthis = false;
	} else {

		for (var fi = 0; fi < flistlen; fi++) {
			//console.log('hi ' + fi);
			//var flist = document.getElementsByClassName("secondrotates");
			flist[fi].style.backgroundImage = "url('assets/img/face6.png')";
			//list[i].setAttribute("class", "small-4 columns rotates2 rotatecss");
		}
		iconthis = true;
	}
	
	setTimeout("rotatefinal2()", 300)
}


var fffdet = 1;
function rotatefinal3() {

	var fflist = document.getElementsByClassName("rotates222");
	var fflistlen = fflist.length;
	//console.log("list is " + list)
	//var ffi;
	if (fffdet == 1) {
		for (var ffi = 0; ffi < fflistlen; ffi++) {
			//console.log('aa');
			fflist[ffi].style.backgroundImage = "url('assets/img/face4.png')";
			//list[i].className = "small-4 columns rotates1 rotatecss";
			//$('.rotates2').get(i).className='small-4 columns rotates1 rotatecss';
			//list[i].setAttribute("data", "small-4 columns rotates1 rotatecss");
		}
		fffdet = 0;
	} else {
		//console.log('hi');
		for (var ffi = 0; ffi < fflistlen; ffi++) {
			fflist[ffi].style.backgroundImage = "url('assets/img/face3.png')";
			//list[i].setAttribute("class", "small-4 columns rotates2 rotatecss");
		}
		fffdet = 1;
	}
	//fffdet++;
	setTimeout("rotatefinal3()", 300)
}

/*
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
*/
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
            value: 1,
            color: "#ADADAD"
          },
          {
            value: 2.28,
            color: "#FFAF60" 
          },
          {
            value: 3.36,
           	color: "#AE0000"
          },
          {
            value: 56.91,
            color: "#EA0000"
          },
          {
            value: 37.12,
            color: "#000079"
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

function mapshows() {
	//var map = document.getElementById("tianjinmap");
	//map.addClass("fadeinmap");
	$("#tianjinmap").addClass("mapshows");
}

loop = true
function chartt() {
  var chart = Highcharts.chart('container', {
              chart: {
                  type: 'line'
              },
              title: {
                 
              },
              subtitle: {
                 
              },
              xAxis: {
                  categories: ['1999年', '2001年', '2003年', '2005年', '2007年', '2009年', '2011年', '2013年', '2014年', '2015年', '2016年', '2017年']
              },
              yAxis: {
                  title: {
                      
                  }
              },
              plotOptions: {
                  line: {
                      dataLabels: {
                          enabled: true          // 开启数据标签
                      },
                      enableMouseTracking: true // 关闭鼠标跟踪，对应的提示框、点击事件会失效
                  }
              },
              series: [{
                  name: '天津机器增数',
                  data: [1, 32, 2, 6, 7, 20, 66, 217, 281, 301, 482, 435]
              }]
          });
  loop = false;
}

pieloop = true
function piechartshow() {
	if (pieloop) {
			Highcharts.chart('barcontainer', {
		    chart: {
		        type: 'variablepie'
		    },
		    title: {
		       
		    },
		    subtitle: {
		         
		    },
		    tooltip: {
		        headerFormat: '',
		        
		        pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>'
		      
		    },
		    series: [{
		        minPointSize: 10,
		        innerSize: '20%',
		        zMin: 0,
		        name: 'numbers',
		        data: [{
		            name: '活跃个人客户数',
		            y: 751500,
		            z: 118.7
		        }, {
		            name: '有效的个人客户数',
		            y: 112685,
		            z: 124.6
		        }, {
		            name: '核心个人客户数',
		            y: 58867,
		            z: 137.5
		        }, {
		            name: '非活跃的个人客户数',
		            y: 401340,
		            z: 201.8
		        }, {
		            name: '贵宾个人客户数',
		            y: 31277,
		            z: 214.5
		        }]
		    }]
		});
		pieloop = false;
	}
}

bubbleloop = true
function bubbleshow() {
	if (bubbleloop) {
		$('#demo-3').waterbubble1({txt: '18%',});
	    $('#demo-2').waterbubble2({txt: '31%',});
	    $('#demo-1').waterbubble3({txt: '51%',});
	    bubbleloop = false;
	}
}

chartloop = true
function raidashow() {
if (chartloop) {
	  $('#chart').radarChart({
	    size: [500, 500],
	    step: 1,
	    //title: "我的技能",
	    values: {
	      "发卡机(4.5万)": 0.5,
	      "查询机(58万)": 1.6,
	      "柜台(2093万）": 4.5,
	      "ATM（441万）": 3,
	      "CDS（713万）": 3.4,
	      
	    },
	    showAxisLabels: true
	  });
	  chartloop = false;
	}
}


(function ($) {
            if (!document.defaultView || !document.defaultView.getComputedStyle) {
                var oldCurCSS = jQuery.curCSS;
                jQuery.curCSS = function (elem, name, force) {
                    if (name === 'background-position') {
                        name = 'backgroundPosition';
                    }
                    if (name !== 'backgroundPosition' || !elem.currentStyle || elem.currentStyle[name]) {
                        return oldCurCSS.apply(this, arguments);
                    }
                    var style = elem.style;
                    if (!force && style && style[name]) {
                        return style[name];
                    }
                    return oldCurCSS(elem, 'backgroundPositionX', force) + ' ' + oldCurCSS(elem, 'backgroundPositionY', force);
                };
            }

            var oldAnim = $.fn.animate;
            $.fn.animate = function (prop) {
                if ('background-position' in prop) {
                    prop.backgroundPosition = prop['background-position'];
                    delete prop['background-position'];
                }
                if ('backgroundPosition' in prop) {
                    prop.backgroundPosition = '(' + prop.backgroundPosition + ')';
                }
                return oldAnim.apply(this, arguments);
            };

            function toArray(strg) {
                strg = strg.replace(/left|top/g, '0px');
                strg = strg.replace(/right|bottom/g, '100%');
                strg = strg.replace(/([0-9\.]+)(\s|\)|$)/g, "$1px$2");
                var res = strg.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);
                return [parseFloat(res[1], 10), res[2], parseFloat(res[3], 10), res[4]];
            }

            $.fx.step.backgroundPosition = function (fx) {
                if (!fx.bgPosReady) {
                    var start = $.curCSS(fx.elem, 'backgroundPosition');

                    if (!start) {//FF2 no inline-style fallback
                        start = '0px 0px';
                    }

                    start = toArray(start);

                    fx.start = [start[0], start[2]];

                    var end = toArray(fx.end);
                    fx.end = [end[0], end[2]];

                    fx.unit = [end[1], end[3]];
                    fx.bgPosReady = true;
                }

                var nowPosX = [];
                nowPosX[0] = ((fx.end[0] - fx.start[0]) * fx.pos) + fx.start[0] + fx.unit[0];
                nowPosX[1] = ((fx.end[1] - fx.start[1]) * fx.pos) + fx.start[1] + fx.unit[1];
                fx.elem.style.backgroundPosition = nowPosX[0] + ' ' + nowPosX[1];
            };
        })(jQuery);



     
        function getdata() {
            //var num = $("#cur_num").val();
            //$.ajax({
            //    url: 'data.html',
            //    type: 'POST',
            //    dataType: "json",
            //    data: { 'total': num },
            //    cache: false,
            //    timeout: 10000,
            //    error: function () { },
            //    success: function (data) {
            //        show_num(data.count);
            //    }
            //});
            // var t = 0;
              //  test = 0;

            //$(window).scroll(function(e) {
              // test = $(this).scrollTop();
               //console.log('test value ' + test);
               //if (test <= 1510) {


            show_num("434596");
     //     }});
        }

        function show_num(n) {
            var it = $(".t_num i");
            var len = String(n).length;
            for (var i = 0; i < len; i++) {
                if (it.length <= i) {
                    $(".t_num").append("<i></i>");
                }
                var num = String(n).charAt(i);
                var y = -parseInt(num) * 30;
                var obj = $(".t_num i").eq(i);
                obj.animate({
                    backgroundPosition: '(0 ' + String(y) + 'px)'
                }, 'slow', 'swing', function () { }
                );
            }
            //$("#cur_num").val(n);
        }

       //   $(function () {
       //     getdata();
       //     setInterval('getdata()', 1000);
       // });


function demofaceshow() {
	 (function( $ ){  


  var svgData = { 
    "demo" :
    { 
      "strokepath" :
      [ 
        {   "path": "M7.603,5.5 c0,0,10.298,24.07,33.517,24.07c23.221,0,33.519-24.07,33.519-24.07s9.142,24.07,33.513,24.07c24.372,0,33.515-24.07,33.515-24.07 s10.858,24.07,33.518,24.07S208.703,5.5,208.703,5.5s9.717,24.07,33.521,24.07c23.801,0,33.518-24.07,33.518-24.07 s13.828,24.07,33.524,24.07c19.698,0,33.524-24.07,33.524-24.07",
          "duration": 1500,
          "strokeColor": '#c07775',
          "strokeWidth": 8 
          },
        {   "path": "M120,139.129 c0,0-8.708-34.233-42.483-34.236c-28.724-0.001-42.493,34.23-42.493,34.23",
          "duration":300
          },
        {   "path": "M313.5,137.138 c0,0-12.209-32.137-39.746-32.138C246.216,104.999,234,137.132,234,137.132",
          "duration":300
          },
        {   "path": "M80.246,193.604 c0,0,21.399,74.387,93.074,74.387c76.026,0,93.095-74.387,93.095-74.387",
          "duration":500
          }
      ],  
      "dimensions" : { "width": 349, "height":277 }
    }
  }




  $(document).ready(function(){

    // Setup your Lazy Line element.
    // see README file for more settings
    $('#demo').lazylinepainter({
        'svgData' : svgData,
        'strokeWidth':7,  
        'strokeColor':'#dc908e',
        'onComplete' : function(){
          $(this).animate({'marginTop':60},500);
          } 
      }
    ) 

    // Paint your Lazy Line, that easy!
    $('#demo').lazylinepainter('paint');
  })


})( jQuery );
}

$(document).ready(function() {
        var p = 0,
            t = 0;
           //console.log("sssssssss");
        //var check11 = checkreturn();
        $(window).scroll(function(e) {
        	//lineChartShow();
            p = $(this).scrollTop();
            console.info('p value ' + p);
            if (p >= 250) {
            	//show(0);

            	//mapshows();
            }
            if (loop && p >= 1710) {
            	chartt();

            	//showww();
            }

            if (p >= 4450) {
            //testCheck();
            //	testCheck22();
            	bubbleshow();
            } 

             if (p >= 6000) {
            	raidashow()
            } 
            if (p >= 2530) {
            	getdata();
            }

            if (p >= 3500) {
            	//piechartshow();
            }

            if (p >= 5800) {
            	//demofaceshow()
            }

            setTimeout(function() {
                t = p;
            }, 0);
        });
    });
