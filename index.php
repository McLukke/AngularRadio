<html ng-app="radioApp">
<?php include('partials/head.html'); ?>
<body>
<div ng-controller="playerCtrl">
	<button ng-click="play()" ng-show="!playing">Play</button>
	<button ng-click="stop()" ng-show="playing">Stop</button>

	Playing Audio: <br />

	<!-- {{programs}} -->

	
</div>
</body>
</html>
