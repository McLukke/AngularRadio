// js goes here
var radioApp = angular.module('radioApp', []);

radioApp.controller('playerCtrl', ['$scope', function($scope) {
	$scope.playing = false;
	$scope.audio = Document.createElement('audio');
	$scope.audio.src = 'http://mazwai.com/system/posts/videos/000/000/202/original/live-aloha.mp4?1446407106';

	$scope.play = function() {
		$scope.audio.play();
		$scope.playing = true;
	}
	$scope.stop = function () {
		$scope.audio.pause();
		$scope.playing = false;
	}
	$scope.

}]);

radioApp.controller('relatedCtrl', function($scope) {

});