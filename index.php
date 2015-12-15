<html ng-app="radioApp">
<?php include('partials/head.html'); ?>
<body>
<div ng-controller="playerCtrl">
	<button ng-click="play()" ng-show="!Playing">Play</button>
	<button ng-click="stop()" ng-show="Playing">Stop</button>

	Playing Audio: <br />
</div>
</body>
</html>
