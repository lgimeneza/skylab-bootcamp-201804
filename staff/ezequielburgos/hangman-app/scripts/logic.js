'use strict'

// TODO

class Hangman {
    constructor(word, attempts = 10) {
        if (typeof word !== 'string') {
            throw Error('invalid input word')
        }

        this.word = word;
        this.attempts = attempts;
        let arrWord = [];
        this.arrWord = arrWord;

        for (var i = 0; i < this.word.length; i++) {
            arrWord.push('_');
        }
    }
}

Hangman.prototype.try = function (letter) {

};

Hangman.prototype.guessed = function () {

    var thisword = this.word.split('');
    var letter = thisword.splice(0, 1);
    letter = letter[0];
    var baby = 'ueee'
    // console.log(letter)
    if (typeof letter !== 'string') throw Error('invalid input letter or word')

    if (typeof letter === 'string') {

        for (let i = 0; i < this.word.length; i++) {
            const element = this.word;

            if (element[i] === letter) {
                console.log(letter)
                this.arrWord[i] = letter;
                return console.log(this.arrWord);
            } else {
                return console.log(this.arrWord);
            }
        }
    }
};

Hangman.prototype.attempts = function () {
    var count = attempts;
    count--;
};

Hangman.prototype.status = function () {
    var result;
    if (result.toString() === word.toString() && count !== 0) {
        hangman.status = 'WIN';
    } else if (result.toString() !== word.toString() && count === 0) {
        hangman.status = 'LOSE';
    } else {
        hangman.status = 'CONTINUE';
    }
};


var hangman = new Hangman('hello', 10);


hangman.guessed()




// class Hangman {
//     constructor(word, attempts = 10) {
//         if (typeof word !== 'string') {
//             throw Error('invalid input word')
//         }

//         this._word = word.trim();

//         if(!this._word.length) throw Error('word cannot empty or blank');

//         this._attempts = attempts || 10;

//         if (typeof this._attempts !== 'number') throw Error('invalid attempts' + this._attempts);

//         if (this._attempts <= 0) throw Error('invalid number of attempts' + this._attempts);

//         this._guessed = new Array (this._word.length).fill('_');

//         this._status = hangman.CONTINUE;
//     }

// }

// hangman.CONTINUE = 0;
// hangman.WIN = 1;
// hangman.LOSE = 2;


