'use strict';


function Hangman(word, attempts) {

    if (typeof word !== 'string' || typeof word === undefined) throw Error('invalid word ' + word)

    this.word = word
    this._attempts = attempts || 10
    this.arrWord = new Array(this.word.length).fill('_')
    this.letterOrWord = ''
    this._status = Hangman.CONTINUE
}

Hangman.CONTINUE = 0;
Hangman.WIN = 1;
Hangman.LOSE = 2;

var hangman = new Hangman('hello')

Hangman.prototype.try = function (letterOrWord) {

    if (typeof letterOrWord !== 'string' || typeof letterOrWord === undefined) throw Error('invalid letter or word ' + letterOrWord)

    this.letterOrWord = letterOrWord

    if (this.letterOrWord.length === 1) {
        if (this.word.indexOf(letterOrWord) > -1) {
            return true
        } else {
            this._attempts--
            return false;
        }
    }
        if (this.letterOrWord.length > 1) {
            if (this.letterOrWord === this.word) {
                return true;

             } else {
                this._attempts = 0;
                return false;
             }
    }
}

    Hangman.prototype.guessed = function () {

        for (let i = 0; i < this.word.length; i++) {
            if (this.letterOrWord.length === this.word.length && this.letterOrWord === this.word) {
                this.arrWord[i] = this.letterOrWord.charAt(i);
            } else if (this.letterOrWord.length === 1 && this.letterOrWord === this.word.charAt(i)) {
                this.arrWord[i] = this.letterOrWord;
            }
        }
        return this.arrWord
    }

    Hangman.prototype.attempts = function () {

        return this._attempts
    }

    Hangman.prototype.status = function () {

        if (this.arrWord.indexOf('_') === -1) {
            this._status = Hangman.WIN
        }

        if (this._attempts === 0) {
            this._status = Hangman.LOSE
        }

        return this._status
    }