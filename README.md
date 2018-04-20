#### WordGuess-CLI

#### __WHAT DOES THIS APP DO?__

WordGuess-CLI is a command line node game app that is similar to hangman. This current configuration of WordGuess-CLI involves world capitals. The app randomly choses a world capital from a word bank of 20 world capitals and then displays on the command line the redacted world capital, with each letter of the world capital represented by a blank underscore. For example, if the app randomly chose 'Zurich' as a world capital, 'Zurich' will appear as '_ _ _ _ _ _' on the command line. The user must then guess each of the missing letters contained within the randomly chosen world capital. If the player guesses a correct letter, that letter will appear in place of the appropriate underscore on the command line. So, if the player correctly guesses 'Z', the letter 'Z' will appear as 'Z _ _ _ _' on the command line. If the player makes 10 incorrect guesses, the player loses the game. 

#### __HOW DO YOU GET STARTED?__

1. Make sure that you have node.js installed on your computer.

2. Clone or download the repository for WordGuess-CLI.

3. Open GitBash or Terminal, making sure that you are in the file location of WordGuess-CLI, and run command 'npm install', to complete installation (all necessary aps from npm.js will be downloaded and installed). 

#### __HOW DOES LIRI-NODE-APP WORK?__

* Use GitBash or Terminal to navigate to the file location of WordGuess-CLI. You can then enter on the command line 'node index.js'. 

  * node liri.js my-tweets
    - 20 last tweets from Twitter user __MissULucy550__ will be retured

  * node liri.js spotify-this-song < song title >
    - The following information from Spotify will be returned: 
        - Artist name
        - Song title
        - Preview link to song from Spotify
        - Name of the album that the song is from

    __Note that if no song title is provided, information regarding the song "The Sign", by the artist, Ace of Base, will be returned by default.__

  * node liri.js movie-this < movie name >
    - The following information from OMDB will be returned: 
        - Title of the movie
        - Year the movie came out
        - IMDB Rating of the movie
        - Rotten Tomatoes Rating of the movie
        - Country where the movie was produced
        - Language of the movie
        - Plot of the movie
        - Actors in the movie
    
    __Note that if no movie title is provided, informatio regarding the movie "Mr. Nobody" will be returned by default.__

  * node liri.js do-what-it-says
    - LIRI will take the text inside of the random.txt filed included in the root directory and then use it to call one of LIRI's commands.
        - It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
     
     __Note that users are free to change the text in the 'random.txt' document to test out the feature for other commands.__

#### __WHO MAINTAINS AND CONTRIBUTES TO THIS VERSION OF WordGuess-CLI?__

This version of WordGuess-CLI was created by me, Jason Heath Meadows, Esq., currently a student at the University of Arizona Coding Boot Camp, in Gilbert, Arizona. I will maintain and contribute to this app, as necessary, as part of my Portfolio.