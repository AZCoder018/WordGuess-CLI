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
var turn = function() {
    inquirer.prompt({type: "input", message: "Guess a letter!", name: "guess"}).then(function(response) {
    if (word.alphabet.indexOf(response.guess.toLowerCase()) === -1) {
        console.log("Please chose a proper letter");
        turn();
    } else {
    if (guessLetters.indexOf(response.guess.toLowerCase()) === -1) {
    if (game.letters.indexOf(repsonse.guess.toLowerCase()) === -1) {
        lives = lives -1;
        guessedLetters.push(response.guess.toLowerCase());
        console.log("Sorry, that letter is not in the word");
        console.log("Current lives: " + lives);

//Checks how many lives are available, if so next turn
    if (lives > 0) {
        game.returnWord();
        turn();

//If not, game over
    } else {
        console.log("You lose!");
        console.log("");
        restart();



//Start screen and start game
console.log("\n---==== WORLD CAPITALS ====---\n");
gameStart();