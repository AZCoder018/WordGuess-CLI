#### WordGuess-CLI

#### __WHAT DOES THIS APP DO?__

WordGuess-CLI is a command line node game app that is similar to hangman. This current configuration of WordGuess-CLI involves world capitals. The app randomly choses a world capital from a word bank of 30 world capitals and then displays on the command line the redacted world capital, with each letter of the world capital represented by a blank underscore. For example, if the app randomly choses 'Zurich' as a world capital, 'Zurich' will appear as '_ _ _ _ _ _' on the command line. The user must then guess each of the missing letters contained within the randomly chosen world capital. If the player guesses a correct letter, that letter will appear in place of the appropriate underscore on the command line. If the randomly chosen capital is 'Zurich', and the user correctly guesses 'Z',  the letter 'Z' will appear as 'Z _ _ _ _' on the command line. If the player makes 12 incorrect guesses, the player loses the game. 

#### __HOW DO YOU GET STARTED?__

1. Make sure that you have node.js installed on your computer.

2. Clone or download the repository for WordGuess-CLI.

3. Open GitBash or Terminal, making sure that you are in the file location of WordGuess-CLI, and run command 'npm install', to complete installation (all necessary apis from npm.js will be downloaded and installed). 

#### __HOW DOES WordGuess-CLI WORK?__

* Use GitBash or Terminal to navigate to the file location of WordGuess-CLI. You can then enter on the command line 'node index.js'. 

* Directions for playing WordGuess-CLI:

  - The computer will randomly choose a world capital.
  - The user must guess all the letters contained in the name of that world capital, by inputting a letter on the command line, until the entire name had been revealed.
  - If the user can guess all the letters, the user wins.
  - If the user gives 12 incorrect guesses, the user loses.
  - The user is not penalized for multiple guesses using the same letter.
  - It is not necessary for the user to capitalize guesses.

* Regardless of whether the user wins or loses, the user will be asked is the user wants to play again. If the user answers Y, the game resets and a new random word is chosen by the computer. If the user answers N, the user will receive the message "BYE! BYE!".

#### __WHO MAINTAINS AND CONTRIBUTES TO THIS VERSION OF WordGuess-CLI?__

This version of WordGuess-CLI was created by me, Jason Heath Meadows, Esq., currently a student at the University of Arizona Coding Boot Camp, in Gilbert, Arizona. I will maintain and contribute to this app, as necessary, as part of my Portfolio.