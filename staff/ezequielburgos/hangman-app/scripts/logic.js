'use strict'

// TODO

const Hangman = (function () {

    class Hangman {
        constructor(word, attempts = 10) {
            if (typeof word !== 'string') {
                throw Error('invalid word ' + word)
            }

            this._word = word.trim();

            if (!this._word.length) throw Error('word cannot empty or blank')

            this._attempts = attempts || 10

            if (typeof this._attempts !== 'number') throw Error('invalid attempts ' + this._attempts)

            if (this._attempts <= 0) throw Error('invalid number of attempts' + this._attempts)

            this._guessed = new Array(this._word.length).fill('_')

            this._status = Hangman.CONTINUE

        }

        guessed(){
            return this._guessed
        }
        
        attempts(){
            return this._attempts
        }

        status(){
            return this._status
        }

        try(text){

        }

        static get CONTINUE(){return 0}
        static get WIN(){return 1}
        static get LOSE(){return 2}

    }

    function tryLetter(target, letter){

    }

    function tryWord(target, word){

    }

    function update(target){

    }


    return Hangman

})();







