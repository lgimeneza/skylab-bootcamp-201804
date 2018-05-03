'use strict'

// TODO


var Hangman = function (word, attempts) {
    if(typeof word !== 'string') throw Error('invalid input word');
    this.word = word;
    this.attempts = attempts
}

Hangman.prototype.try = function (str) {
    if (typeof str !== 'string') throw Error('invalid input letter or word')
    
}

Hangman.prototype.guessed = function () {

    var guessedArray = [];
    var currentLetter;
    index = H.try(letter);

    if (H.attemps = 5) {
        for (let i = 0; i < wordToGuess.length; i++) {
            const element = '_';
            guessedArray.push[element];
        }
    } else if (guessedArray[index] === currentLetter) {
        guessedArray[index] = currentLetter;
    }
}
H.prototype.attempts = function () {
    var count = 5;
    count--;

}
H.prototype.status = function () {

    var result;
    if (result.toString() === wordToGuess.toString() && count !== 0) {
        H.status = 'WIN';
    } else if (result.toString() !== wordToGuess.toString() && count === 0) {
        H.status = 'LOSE';
    } else {
        H.status = 'CONTINUE';
    }
}


