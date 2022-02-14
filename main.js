// green letter
const lettersGreen = [null, 'r', 'o', null, null];

// yellow letter
const lettersYellow = [ 
	[],
	['a'],
	['a'],
	['r','a'],
	[]
];

// gray letter
// the letter may be present in gray array and yellow array at the same time if her amount in word greater then 1
const lettersGray = ['s','l','t','e','f','i','y','c','k'];

// words of Wordle
const words = require('./words.js');

// word search algorithm 
const findWord = require('./findWord.js');
console.log( findWord( words, lettersGreen, lettersYellow, lettersGray ) );