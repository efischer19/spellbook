//eventually this will be stored in a backend db, just hard-coding it here so I can get angular working.
var card_json = {
	title: 'Shield of Cats',
	level: 7,
	school: 'Conjuration',
	cast_time: '1 Action',
	ritual: false,
	duration: '10 hours',
	concentration: true,
	somatic: true,
	range: '60 Feet',
	m_cost: NaN,
	material: 'A willing brood of cats',
	description: 'All of the cats from you willing brood are enlarged to bodyguard size, and mess people up as cats tend to do.',
	classes: ['Cleric', 'Paladin']
};

var app = angular.module('spellbook-card', []);

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
}

var levelSchool = function(level, school) {
	if(level === 0) return school + ' Cantrip';
	return ordinal(level).concat(' ').concat(school);
}

app.controller('CardCtrl', function() {
  this.card = card_json;
  this.card.displayLevel = levelSchool(this.card.level, this.card.school);
});