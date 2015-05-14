var app = angular.module('spellbook-index', []);

app.controller('IndexCtrl', function($window, $scope) {
	$scope.chosen_spell = null;
	$scope.spellbook_list = spellbook_list;
	$scope.go = function(spell) {
		$window.location = '/card.html?spell=' + spell.url;
	}
});