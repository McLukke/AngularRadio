<html ng-app="radioApp">
<?php include('partials/head.html'); ?>
<body>
<div ng-controller="playerCtrl">
	<button ng-click="play()" ng-show="!playing">Play</button>
	<button ng-click="stop()" ng-show="playing">Stop</button>

	Playing Audio: <br />

	<!-- {{programs}} -->
	<hr />
	Directives<br />
	<!-- <ul id="programs_list" class="">
	  <li ng-repeat="program in programs" ng-click="play(program)">
	    <span class="large-12">{{ program.title.$text }}</span>
	  </li>
	</ul> -->

	<ul id="programs_list" class="">
	  <li ng-repeat="program in programs">
	    <span npr-link play='play(program)' ng-model="program"></span>
	  </li>
	</ul>
</div>
</body>
</html>
