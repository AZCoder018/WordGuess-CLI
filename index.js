//Import files; import npm modules
var word = require("./Word.js");
var inquirer = require("inquirer");

//Variables
var lives = 10;
var guessedLetters = [];
var game = "";

//Word bank
var wordBank = ["bujumbura", "santo domingo", "ulaanbaatar", "wellington", "brazzaville", "kingston", "reykjavik", "vilnius", "jakarta", "islamabad",
                "abu dhabi", "montevideo", "khartoum", "ottawa", "stockholm", "bratislava", "ljubljana", "bucharest", "pyongyang", "kuala lumpur"];

//Function to start game and pick a new word
var gameStart = function() {
    guessedLetters = [];
    randomWord = wordBank[Math.floor(Math.random() = wordBank.length)];
    game = new word.word(randomWord);
    console.log(" ---- New Word ---- ");
    game.returnWord();
    turn();
};

/* Function that runs the game logic; prompts user for input; validate if input is a letter of alphabet
validates if letter has already been chosen; check if letter is in the word */
var turn = function() 

}

//Start screen and start game
console.log("\n---==== WORLD CAPITALS ====---\n");
gameStart();