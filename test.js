const words = require('./words.js');
const findWord = require('./findWord.js');

for ( let word in words ) {

	const lettersGreen = new Array(5).fill( null );
	const lettersYellow = [ 
		[],
		[],
		[],
		[],
		[]
	];
	const lettersGray = [];
	
	let wordsStep = [];

	for ( let step=0; step<6; step++ ) {
		
		const wordNew = findWord( words, lettersGreen, lettersYellow, lettersGray );
		wordsStep.push( wordNew );

		if( wordNew == word )
			break;

		for ( let i=0; i<5; i++ ) 
			if ( word[i] == wordNew[i] )
				lettersGreen[i] = wordNew[i];

		for ( let i=0; i<5; i++ ) 
			if( word.indexOf( wordNew[i] ) == -1 && lettersGray.indexOf( wordNew[i] ) == -1 )
				lettersGray.push( wordNew[i] );

		for ( let i=0; i<5; i++ )
			if( word.indexOf( wordNew[i] ) != -1 &&  
			    word[i] != wordNew[i] && 
				lettersYellow[i].indexOf( wordNew[i] ) == -1 )
				lettersYellow[i].push( wordNew[i] );
	}
	
	if( wordsStep[wordsStep.length-1] != word )
		console.log( word, wordsStep );
	// else 
	// 	console.log( word, wordsStep );	
}

/*
28 - 2315
staff [ 'slate', 'start', 'stash', 'stand', 'stack', 'stamp' ]
hatch [ 'slate', 'taint', 'catch', 'batch', 'patch', 'match' ]
jaunt [ 'slate', 'taint', 'gaunt', 'daunt', 'haunt', 'vaunt' ]
watch [ 'slate', 'taint', 'catch', 'batch', 'patch', 'match' ]
homer [ 'slate', 'gooey', 'corer', 'boxer', 'power', 'mover' ]
stomp [ 'slate', 'stony', 'stout', 'stork', 'stood', 'stoic' ]
howdy [ 'slate', 'crony', 'foggy', 'bobby', 'poppy', 'dowdy' ]
grave [ 'slate', 'crane', 'brake', 'frame', 'grade', 'grape' ]
river [ 'slate', 'gooey', 'crier', 'finer', 'piper', 'rider' ]
rover [ 'slate', 'gooey', 'corer', 'boxer', 'power', 'mover' ]
jolly [ 'slate', 'wooly', 'folly', 'golly', 'dolly', 'holly' ]
joker [ 'slate', 'gooey', 'corer', 'boxer', 'power', 'mover' ]
diver [ 'slate', 'gooey', 'crier', 'finer', 'piper', 'rider' ]
graze [ 'slate', 'crane', 'brake', 'frame', 'grade', 'grape' ]
wider [ 'slate', 'gooey', 'crier', 'finer', 'piper', 'rider' ]
hover [ 'slate', 'gooey', 'corer', 'boxer', 'power', 'mover' ]
haste [ 'slate', 'caste', 'baste', 'taste', 'paste', 'waste' ]
refer [ 'slate', 'gooey', 'crier', 'purer', 'fever', 'defer' ]
hilly [ 'slate', 'wooly', 'curly', 'billy', 'filly', 'dilly' ]
jazzy [ 'slate', 'fairy', 'canny', 'gaudy', 'mammy', 'happy' ]
viper [ 'slate', 'gooey', 'crier', 'finer', 'piper', 'riper' ]
wound [ 'slate', 'crony', 'bound', 'pound', 'found', 'mound' ]
gleam [ 'slate', 'alley', 'clear', 'bleak', 'plead', 'glean' ]
dully [ 'slate', 'wooly', 'curly', 'bully', 'fully', 'gully' ]
ratty [ 'slate', 'catty', 'batty', 'tatty', 'patty', 'fatty' ]
hound [ 'slate', 'crony', 'bound', 'pound', 'found', 'mound' ]
rower [ 'slate', 'gooey', 'corer', 'boxer', 'power', 'mower' ]
shave [ 'slate', 'share', 'shade', 'shame', 'shake', 'shape' ]
*/