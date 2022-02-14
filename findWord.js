/*
 * function returns the word with the maximum weight for known letters
 * 
 * @param {Object} list of words of Wordle
 * @param {String[]} list of green letters
 * @param {String[][]} list of yellow letters
 * @param {String[]} list of gray letters
 * 
 * @return {String} word
 * 
 */ 

module.exports = function ( words, lettersGreen, lettersYellow, lettersGray ) {

	// letters that are present in search word, but it is not know at what position
	const lettersFree = [].concat( ...lettersYellow );

	// find word with maximal weight
	let max = 0;
	let wordMax = '';

	for ( let word in words ) {

		// does the word match the condition?
		let our = true;

		// if the word contains a gray letter, than skip the word
		for ( let letter of lettersGray )
			// but if the letter present in yellow list, than word can be accepted
			if ( lettersFree.indexOf ( letter ) == -1 && word.indexOf ( letter ) != -1 )
				our = false;

		// if the word contains a yellow letter that should not be in that position, than skip the word
		for ( let i=0; i<5; i++ )
			for ( let letter of lettersYellow[i] )
				if ( letter == word[i] )
					our = false;
					
		// if the green letter is not present in the given position
		for ( let i=0; i<5; i++ )
			if ( lettersGreen[i] && lettersGreen[i] != word[i] )
				our = false;

		// if yellow letter is missing
		for ( let letter of lettersFree )
			if ( word.indexOf ( letter ) == -1 )
				our = false;

		// find word with maximal weught
		if( our && max < words[word] ) {
			max = words[word];
			wordMax = word;
		}
	}

	return wordMax;
}
