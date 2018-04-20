
//Import files; import npm modules
var word = require("./Word.js");
var inquirer = require("inquirer");

//Variables
var badGuesses = 12;
var guessedLetters = [];
var game = "";

//Word bank
var wordBank = ["bujumbura", "santo domingo", "ulaanbaatar", "wellington", "brazzaville", "kingston", "reykjavik", "vilnius", "jakarta", "islamabad",
                "abu dhabi", "montevideo", "khartoum", "ottawa", "stockholm", "bratislava", "ljubljana", "bucharest", "pyongyang", "kuala lumpur",
                "copenhagen", "helsinki", "buenos aires", "caracas", "monrovia", "tashkent", "tegucigalpa", "nairobi", "canberra", "mogadishu"]; 
  
//Function to start game and randomly select a new word from wordBank
var gameStart = function() {
    guessedLetters = [];
    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    game = new word.word(randomWord);
    console.log(" ---- NEW RANDOM WORD ---- ");
    game.returnWord();
    turn();
};

/* Function that runs the game logic; prompts user for input; validate if input is a letter of alphabet, so user can use upper or lower case letters;
validates if letter has already been chosen; check if letter is in the word */ 
var turn = function() {
    inquirer.prompt({type: "input", message: "GUESS A LETTER!", name: "guess"}).then(function(response) {
    if (word.alphabet.indexOf(response.guess.toLowerCase()) === -1) {
        console.log("PLEASE CHOOSE A LETTER FROM THE ENGLISH ALPHABET.");
        turn();
    } else {
    if (guessedLetters.indexOf(response.guess.toLowerCase()) === -1) {
    if (game.letters.indexOf(response.guess.toLowerCase()) === -1) {
        badGuesses = badGuesses -1;
        guessedLetters.push(response.guess.toLowerCase());
        console.log("INCORRECT!");
        console.log("INCORRECT GUESSES REMAINING: " + badGuesses);

//Checks how many lives are available, if so next turn
    if (badGuesses > 0) {
        game.returnWord();
        turn();

//If not, game over
    } else {
        console.log("YOU LOSE! GO STUDY SOME GEOGRAPHY!");
        console.log("");
        restart();
        }

//If guess passed all validation and is in the word, a good guess is logged, updates the word.
    } else {
        guessedLetters.push(response.guess.toLowerCase());
        console.log("CORRECT!");
        game.guess(response.guess.toLowerCase());
        game.returnWord();

//If the full word has been guessed, game is won
    if (game.currentIteration.indexOf("_ ") === -1) {
        console.log("YOU WIN! YOU KNOW YOUR CAPITALS!");
        console.log();
        gameStart();
        
//If not keep playing
    } else {
        turn();
    }
}

//If player validation fails first if statement (if letter has already been played), let the player know, retry.
    } else {
        console.log("PAY ATTENTION! YOU USED THAT LETTER ALREADY!");
        game.returnWord();
        turn();
        }  
    }
    });
};

//This function restarts the game, via a prompt asking if the user wants to play again

var restart = function () {
    inquirer.prompt({type: "confirm", message: "WOULD YOU LIKE TO PLAY AGAIN?", name: "confirm", default: true}).then(function(response) {
        if (response.confirm === true) {
            badGuesses = 12;
            gameStart();
        } else {
            console.log("BYE! BYE!");
        }
    });
};

//Start screen and start game
console.log("\n---==== WORLD CAPITALS ====---\n", "\nThe computer will randomly choose a world capital.\n", "\nTry and guess all the letters contained in the name of that world capital,\n", 
"\nuntil the entire name has been revealed.\n", "\nIf you can guess all the letters, you win.\n", "\nIf you give 12 incorrect guesses, you lose.\n", "\nYou are not penalized for multiple guesses using the same letter.\n",
"\nIt is not necessary to capitalize your guesses\n");
gameStart();