// js goes here
var radioApp = angular.module('radioApp', []);
var myAPIkey = 'MDIxNjc3OTcwMDE0NTAxNjcwNzIyNGZiYw000';
var nprURL = 'http://api.npr.org/query?id=61&fields=relatedLink,title,byline,text,audio,image,pullQuote,all&output=JSON';

radioApp.controller('playerCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.playing = false;
	$scope.audio = document.createElement('audio');
	$scope.audio.src = 'http://pd.npr.org/npr-mp4/npr/sf/2013/07/20130726_sf_05.mp4?orgId=1&topicId=1032&ft=3&f=61';

	// $scope.play = function() {
	// 	$scope.audio.play();
	// 	$scope.playing = true;
	// }
	$scope.stop = function () {
		$scope.audio.pause();
		$scope.playing = false;
	}

	$scope.audio.addEventListener('ended', function() {
		$scope.$apply(function() {
			$scope.stop();
		});
	});

	$http({
		method: 'JSONP',
		url: nprURL + '&apiKey=' + myAPIkey + '&callback=JSON_CALLBACK'
	}).success(function(data, status) {
		$scope.programs = data.list.story;
	}).error(function(data, status) {

	});

	$scope.play = function(program) {
	  if ($scope.playing) $scope.audio.pause();
	  var url = program.audio[0].format.mp4.$text;
	  audio.src = url;
	  audio.play();
	  $scope.playing = true;
	}



}]);

// custom directive to prevent bloated system
radioApp.directive('nprLink', function() {
	return {
    restrict: 'EA',
    require: ['^ngModel'],
    replace: true,
    scope: {
      ngModel: '=',
      play: '&'
    },
    templateUrl: 'partials/nprListItem.html',
    link: function(scope, ele, attr) {
      scope.duration = scope.ngModel.audio[0].duration.$text;
    }
  }
});

radioApp.controller('relatedCtrl', function($scope) {

});