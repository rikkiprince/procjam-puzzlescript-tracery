class Generator {
	constructor() {
		this.grammar = tracery.createGrammar(Generator.puzzlescript_tracery_rules);
	}

	generatePuzzleScript() {
		var s = this.grammar.flatten("#puzzlescript#");
		return s;
	}

	static get puzzlescript_tracery_rules() {
		return {
			"player": ["Player"],
			"objects": ["Crate","Badger"],
			"direction": ["UP","DOWN","LEFT","RIGHT",""],
			"rule": ["#ApplDir# \\[ #MoveDir# Player | #Object# \\] -> \\[ #ResDir# Player | #ResDir# #Object# \\]"],

			/* Rules */
			"pushRule": ["\\[ > Player | #Object# \\] -> \\[ > Player | > #Object# \\] (push)"],
			"bumpRule": ["\\[ > Player | #Object# \\] -> \\[ Player | > #Object# \\] (bump)"],
			"swapRule": ["\\[ > Player | #Object# \\] -> \\[ #Object# | Player \\] (swap)"],
			"blokRule": ["\\[ > Player | #Object# \\] -> \\[ Player | #Object# \\] (block)"],
			"oppoRule": ["\\[ < Player | #Object# \\] -> \\[ < Player | > #Object# \\] (opposite)"],
			"rules": [
				"#[Object:#Object#]pushRule#",
				"#[Object:#Object#]bumpRule#",
				"#[Object:#Object#]swapRule#",
				/*"#[Object:#Object#]blokRule#",*/
				"#[Object:#Object#]oppoRule#"
			],
			"ruleSection": ["#[Object:Crate2]rules#\n#[Object:Crate1]rules#"],

			/* Levels */
			"level": [
				"#toprowtiles#\n#bufferrow#\n#midrowtiles#\n#midrowtiles#\n#midrowtiles#\n#midrowtiles#\n#midrowtiles#\n#bufferrow#\n#toprowtiles#"
			],
			"toprowtiles": "*********",
			"bufferrow": "*.......*",
			"midrowtiles": "*#tile##tile##tile##tile##tile##tile##tile#*",
			"tile": [".",".",".",".",".",".",".","*","P","C","T"],

			/* Generate PuzzleScript */
			"puzzlescript": "title #title#\nauthor #author#\n\n"+
							"========\nOBJECTS\n========\n\n"+
							"Background .\n#backgroundcolour#\n\n"+
							"Wall *\n#wallcolour#\n\n"+
							"Player P\n#mediumcolour#\n00000\n00.00\n00000\n00...\n00...\n\n"+
							"Crate1 C\n#lightcolour#\n00000\n0....\n0....\n0....\n00000\n\n"+
							"Crate2 D\n#lightcolour#\n\n"+
							"Target T\n#mediumcolour#\n00000\n..0..\n..0..\n..0..\n..0..\n\n"+
							"=======\nLEGEND\n=======\n\n"+
							"=======\nSOUNDS\n=======\n\n"+
							"================\nCOLLISIONLAYERS\n================\n\n"+
							"Background\nTarget\nPlayer, Wall, Crate1, Crate2\n\n"+
							"======\nRULES\n======\n\n"+
							"#ruleSection#\n\n"+
							"==============\nWINCONDITIONS\n==============\n\n"+
							"All Crate1 on Target\n\n"+
							"=======\nLEVELS\n=======\n\n"+
							"#level#\n#level#\n#level#",

			/* Game Metadata */
			"title": "Rule Generation",

			"author": "#prenominal# #forename# #surname# #postnominal#",
			"prenominal": ["","","","","","","","","","","","","","Dr","Dr","Dr","Dr","Professor"],
			"forename": ["Gerald","Rosalind","Eleanor","Eva","Beatrice","Edith","Esther","Sylvia","Vivian","Victor","Dorothy","Mildred","Edna","Albert","Cecil","Edgar","Fred","Milton","Vernon","Wilbur","Doris","Wilma","Herbert","Alivn","Melvin"],
			"surname": ["Bigginsworth","Roboto","Asimov","Adams","Atwood","Ballard","Bradbury","Clarke","Cline","Dick","Doctorow","Gaiman","Heinlein","Le Guin","Mieville","Orwell","Pratchett","Stephenson","Verne","Vonnegut","Huxley","Hughes"],
			"postnominal": ["","","","","","","PhD","MBE","FREng"],

			/* Colours */
			"colour": ["#darkcolour#", "#mediumcolour#", "#lightcolour#"],
			"backgroundcolour": [
				"black",
				"darkgrey",
				"darkbrown"
			],
			"wallcolour": [
				"darkred",
				"darkgreen",
				"darkblue"
			],
			"mediumcolour": [
				"grey",
				"red",
				"brown",
				"orange",
				"yellow",
				"green",
				"blue",
				"purple",
				"pink"
			],
			"lightcolour": [
				"white",
				"lightgrey",
				"lightred",
				"lightbrown",
				"lightgreen",
				"lightblue"/*,
				"transparent"*/
			]
		};
	}
}