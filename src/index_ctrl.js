var app = angular.module('spellbook-index', []);

app.controller('IndexCtrl', function($location, $scope) {
	$scope.chosen_spell = null;
	$scope.spellbook_list = spellbook_list;
	$scope.go = function(spell) {
		window.location = '/card_demo?spell=' + spell.url;
	}
});