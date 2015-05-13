//eventually this will be stored in a backend db, just hard-coding it here so I can get angular working.
var spellbook_list = [{
		url: 'shield_of_cats',
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
		description: 'All of the cats from your willing brood are enlarged to bodyguard size, and mess people up as cats tend to do.',
		classes: ['Cleric', 'Paladin']
	} , {
		url: 'fluffball',
		title: 'Fluffball',
		level: 3,
		school: 'Evocation',
		cast_time: '1 Action',
		ritual: false,
		duration: 'Instantaneous',
		concentration: false,
		somatic: true,
		range: '60 Feet',
		m_cost: 10,
		material: 'Something fluffy, at least 10gp worth',
		description: 'A creature of your choice within range is just inundated with fluffs, and they are blinded for 1 round. Add an additional round for each level above 3.',
		classes: ['Sorceror', 'Wizard']
	} , {
		url: 'hail_of_cats',
		title: 'Hail of Cats',
		level: 5,
		school: 'Conjuration',
		cast_time: '1 minute',
		ritual: true,
		duration: '10 minutes',
		concentration: true,
		somatic: false,
		range: '10 Feet',
		m_cost: NaN,
		material: 'The collar of your favorite cat',
		description: '5 minature copies of your cat fall from the sky at a point you designate within range. Your DM has a stat block for them. If casting as a ritual, concentration is not required after the cats are summoned',
		classes: ['Druid', 'Ranger', 'Wizard']
	}
];