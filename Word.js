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
}

//Function to run guessed letter in the letter constructor
this.guess = function(guessedLetter) {
    for (var i = 0; i < this.newLettersArray.length; i++) {
        this.newLettersArray[i].guessCheck(guessedLetter);
        }
    };
};

//Exports constructor and alphabet
module.exports = {word: Word, alphabet: alphabet};
};