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