var puzzlescript_tracery_rules = {
	"player": ["Player"],
	"objects": ["Crate","Badger"],
	"direction": ["UP","DOWN","LEFT","RIGHT",""],
	"rule": ["#ApplDir# \\[ #MoveDir# Player | #Object# \\] -> \\[ #ResDir# Player | #ResDir# #Object# \\]"],

	"pushRule": ["\\[ > Player | #Object# \\] -> \\[ > Player | > #Object# \\] (push)"],
	"bumpRule": ["\\[ > Player | #Object# \\] -> \\[ Player | > #Object# \\] (bump)"],
	"swapRule": ["\\[ > Player | #Object# \\] -> \\[ #Object# | Player \\] (swap)"],
	"blokRule": ["\\[ > Player | #Object# \\] -> \\[ Player | #Object# \\] (block)"],
	"oppoRule": ["\\[ < Player | #Object# \\] -> \\[ < Player | > #Object# \\] (opposite)"],
	"rules": [
		"#[Object:#Object#]pushRule#",
		"#[Object:#Object#]bumpRule#",
		"#[Object:#Object#]swapRule#",
		"#[Object:#Object#]blokRule#",
		"#[Object:#Object#]oppoRule#"
	],
	
	"ruleSection": ["#[Object:Crate2]rules#\n#[Object:Crate1]rules#"],

	"level": [
		"#toprowtiles#\n#midrowtiles#\n#midrowtiles#\n#midrowtiles#\n#midrowtiles#\n#midrowtiles#\n#toprowtiles#"
	],
	"toprowtiles": "*********",
	"midrowtiles": "*#tile##tile##tile##tile##tile##tile##tile#*",
	"tile": [".",".",".",".",".",".",".","*","P","C","T"],

	"puzzlescript": "title #title#\nauthor #author#\n\n"+
					"========\nOBJECTS\n========\n\n"+
					"Background .\n#colour#\n\n"+
					"Wall *\n#colour#\n\n"+
					"Player P\n#colour#\n00000\n00.00\n00000\n00...\n00...\n\n"+
					"Crate1 C\n#colour#\n\n"+
					"Crate2 D\n#colour#\n\n"+
					"Target T\n#colour#\n\n"+
					"=======\nLEGEND\n=======\n\n"+
					"=======\nSOUNDS\n=======\n\n"+
					"================\nCOLLISIONLAYERS\n================\n\n"+
					"Background\nTarget\nPlayer, Wall, Crate1, Crate2\n\n"+
					"======\nRULES\n======\n\n"+
					"#ruleSection#\n\n"+
					"==============\nWINCONDITIONS\n==============\n\n"+
					"All Target on Crate1\n\n"+
					"=======\nLEVELS\n=======\n\n"+
					"#level#",

	/* metadata */
	"title": "Rule Generation",

	"author": "#prenominal# #forename# #surname# #postnominal#",
	"prenominal": ["","","","","","Dr","Dr","Professor","Sir"],
	"forename": ["Gerald","Rosalind"],
	"surname": ["Bigginsworth","Gallagher","Roboto","Asimov"],
	"postnominal": ["","","","","","","PhD","MBE","FREng"],

	"colour": ["black","white","lightgrey","grey","darkgrey","red","darkred","lightred","brown","darkbrown","lightbrown","orange","yellow","green","darkgreen","lightgreen","blue","lightblue","darkblue","purple","pink","transparent"]
};

class Generator {
	constructor() {
		this.grammar = tracery.createGrammar(puzzlescript_tracery_rules);
	}

	generatePuzzleScript() {
		var s = this.grammar.flatten("#puzzlescript#");
		return s;
	}
}