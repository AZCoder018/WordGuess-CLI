//Letter constructor
var Letter = function (character, guessed) {
    this.character = character;
    this.guessed = guessed;

    this.guessReturn = function () {
        if (this.guessed === true) {
            return (this.character + " ");
    }   else {
        return ("_ ");
    }
};

//Compare actual letter with letter guessed by user; if letters match then = true
this.guessCheck = function(guessedLetter) {
    if (this.character === guessedLetter) {
        this.guessed - true;    
        }
    };
};

module.exports = Letter;
