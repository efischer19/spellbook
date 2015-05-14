var app = angular.module('spellbook-card', []).config(function($locationProvider) {
	$locationProvider.html5Mode({enabled: true, requireBase: false});
});

//intended to be called for spells level 1-9
var ordinal = function(digit) {
	var ordChars = '';
	switch (digit) {
		case 1: ordChars = 'st';
		case 2: ordChars = 'nd';
		case 3: ordChars = 'rd';
		default: ordChars = 'th';
	}
	return digit.toString().concat(ordChars).concat('-level');
};

var yesNo = function(boolIn) {
	return boolIn === true ? "Yes" : "No";
};

var levelSchool = function(level, school) {
	if(level === 0) return school + ' Cantrip';
	return ordinal(level).concat(' ').concat(school);
};

var tableData = function(card) {
	return [
		[['Casting Time', card.cast_time],
			['Ritual', yesNo(card.ritual)]],
		[['Duration', card.duration],
			['Verbal', 'Yes']],
		[['Concentration', yesNo(card.concentration)],
			['Somatic', yesNo(card.somatic)]],
		[['Range', card.range],
			[card.material === null ? 'Material' : 'Focus',
			card.material === null ? 'No' : yesNo(isNaN(card.m_cost))]]
	];
};

var lastRowHelper = function(table, card) {
	if(card.material === null) return 'hide';
	return table.length %2 == 0 ? 'odd' : 'even';
}

app.controller('CardCtrl', function($location) {
  this.card = spell_list_extern[$location.search()['spell']];
  this.displayLevel = levelSchool(this.card.level, this.card.school);
  this.table = tableData(this.card);
  this.lastRowClass = lastRowHelper(this.table, this.card);
  this.joinedClassList = this.card.classes.join(", ");
});