'use strict';

// TODO: Ocultar la palabra Hangman.word -> No deberia mostrar la palabra

class Hangman {
    constructor(word, attempts = 10) {
        if (word === undefined) throw Error('invalid word ' + word);

        this.word = word;
        this._attempts = attempts;

        this.wordArray = [];
        for (var i = 0; i < this.word.length; i++) {
            this.wordArray.push('_');
        }
    }

    try(str) {
        if (str === undefined) throw Error('invalid letter or word ' + str);

        if (typeof str === 'string') {
            if (str.length === 1) {
                let found = false;

                this.word.split('').map((letter, index) => {
                    if (letter === str) {
                        this.wordArray[index] = str;
                        found = true;
                    }
                });

                if (!found) {
                    this._attempts--;
                }

                return found;
            } else {
                if (str === this.word) {
                    this.wordArray = this.word.split('');
                    return true;
                } else {
                    this._attempts = 0;
                    return false;
                }
            }
        } else {
            throw Error('invalid input letter or word');
        }
    }

    guessed() {
        return this.wordArray;
    }

    attempts() {
        return this._attempts;
    }

    status() {
        // HA GANADO
        if (!this.wordArray.includes('_')) {
            return Hangman.WIN;
        } else {
            // NO HA GANADO
            if (this._attempts > 0) {
                return Hangman.CONTINUE;
            } else if (this._attempts === 0) {
                return Hangman.LOSE;
            }
        }
    }
}

Hangman.CONTINUE = 'CONTINUE';
Hangman.LOSE = 'LOSE';
Hangman.WIN = 'WIN';
