//Import Letter.js
var Letter = require("./Letter.js");

//Need array for alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
                "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Word constructor; Need to split current word into array; store blank word generated from letters; reconstruct word from letters
var Word = function(currentWord) {
    this.letters = currentWord.split("");
    this.newLettersArray = [];
    this.currentIteration = "";

/* Create original word and determine if the letter is alphabetical, pushing into Letters. All non-alphabetical letters will 
be displayed automatically (i.e., spaces and -), thus setting boolean guessed to true */
for (var i = 0; i < this.letters.length; i++) {
    var character = "";
    if (alpahabet.indexOf(this.letters[i].toLowerCase()) === -1) {
        character = new Letter(this.letters[i], true);
    } else {
        character = new Letter(this.Letters[i], false);
    }
    this.newLettersArray.push(character);
}

//Constructs the currentIteration so the word can be displayed on the console
this.returnWord = function() {
    var displayWord = "";
    for (var i = 0; i < this.newLetterArray.length; i++) {
        displayWord - displayWord + this.newLettersArray[i].guessReturn();
    }
    this.currentIteration = displayWord;
    console.log("");
    console.log(displayWord.toUpperCase());
};

//Function to run guessed letter in the letter constructor
this.guess = function(guessedLetter) {
    for (var i = 0; i < this.newLettersArray.length; i++) {
        this.newLettersArray[i].guessCheck(guessedLetter);
        }
    };
};

//Exports constructor and alphabet
module.exports = {word: Word, alphabet: alphabet};
