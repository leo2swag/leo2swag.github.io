window.graphCtrl = ['$scope', function($scope) {
  $scope.sampleData = [85, 82, 60, 20, 22];
  
  //$scope.sample = function() {
  //  for (var i=0, len=$scope.sampleData.length; i < len; i++) {
  //    $scope.sampleData[i] = (Math.random() * 90) + 5;
  //  }
  //};
  
  //$scope.sample();
  $scope.sampler = setInterval(function() {
    $scope.$apply($scope.sample);
  }, 2000);
}];


angular.module('myApp', []).

directive('graph', function() {
  return {


    restrict: 'A',
    link: function(scope, elm, attr) {
      //if ($(window).scrollTop() >= 1410) {
      var points = elm[0].querySelectorAll('[data-point]');
      
      // graph data provided by the "data" attribute.
      // NB: data is interpreted as percentages
      scope.$watch(attr.data, function(data) {
        angular.forEach(data, function(val, i) {
          var pt = points[i]
            , psty = pt && pt.style;
          
          if (psty) {
            var sect = pt.parentNode
              , sectWidth = sect.offsetWidth
              , sectHeight = sect.offsetHeight;
          
            //sect.title = Math.round(100 - val) + '%';
            if (val == 85) {
               sect.title = "1999年";
            } else if (val == 82) {
               sect.title = "2012年";
            } else if (val == 60) {
              sect.title = "15年";
            } else if (val == 20) { 
              sect.title = "16年";
            } else if (val == 22) {
              sect.title = "17年";
            }

            //sect.title = Math.round(val) + '%';

            var t = 0;
                test = 0;

            $(window).scroll(function(e) {
               test = $(this).scrollTop();
               //console.log('test value ' + test);
               if (test >= 1510) {

                  psty.top = (val * sectHeight / 100) + 'px';
                  var next = data[i + 1];
                  if (typeof next === 'number') {
                    var delta = (next - val) * sectHeight / 100;
                    console.log(delta)
                    if (delta == -8.34) {
                      psty.height = '140.307px';
                      psty.webkitTransform =
                      psty.msTransform =
                      psty.transform =
                        'rotate(-1.62647rad)';
                     } else if (delta == -61.16) {
                      psty.height = '90.7654px';
                    psty.webkitTransform =
                      psty.msTransform =
                      psty.transform =
                        'rotate(-2.4549rad)';
                     } else {

                     

                    psty.height = Math.sqrt(Math.pow(sectWidth, 2) + Math.pow(delta, 2) - 2) + 'px';
                    psty.webkitTransform =
                      psty.msTransform =
                      psty.transform =
                        'rotate('+((-Math.PI / 2 + Math.atan2(delta, sectWidth))) +'rad)';
                  }
                  }

          }

           setTimeout(function() {
               t = test;
            }, 0);
        });



          }
        });
      }, /* deep */ true);
        
    //}
    //setTimeout(function() {
               
      //      }, 0);

    }
  };
});

