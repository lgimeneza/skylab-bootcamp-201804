'use strict';

var Hangman = (function () {
    function Hangman(word, attempts) {
        if (typeof word !== 'string') throw Error('invalid word ' + word);

        this._word = word.trim();

        if (!this._word.length) throw Error('word cannot empty or blank');

        this._attempts = attempts || 10;

        if (typeof this._attempts !== 'number') throw Error('invalid attempts ' + this._attempts);

        if (this._attemps <= 0) throw Error('invalid number of attempts ' + this._attempts);

        this._guessed = new Array(this._word.length).fill('_');

        this._status = Hangman.CONTINUE;
    }

    Hangman.CONTINUE = 0;
    Hangman.WIN = 1;
    Hangman.LOSE = 2;

    Hangman.prototype.guessed = function () {
        return this._guessed;
    };

    Hangman.prototype.attempts = function () {
        return this._attempts;
    };

    Hangman.prototype.status = function () {
        return this._status;
    };

    Hangman.prototype.try = function (text) {
        if (typeof text !== 'string') throw Error('invalid letter or word ' + text);

        text = text.trim();

        if (!text.length) throw Error('text cannot empty or blank');

        if (this._status === Hangman.CONTINUE && this._attempts > 0)
            return text.length === 1 ? tryLetter(this, text) : tryWord(this, text);

        return false;
    };

    function tryLetter(target, letter) {
        var index = target._word.indexOf(letter);

        var match = false;

        if (index > -1) {
            for (var i = index; i < target._word.length; i++) {
                var char = target._word[i];

                if (char === letter) target._guessed[i] = char;
            }

            match = true;
        } else target._attempts--;

        update(target);

        return match;
    }

    function tryWord(target, word) {
        var match = false;

        if (word === target._word) {
            for (var i = 0; i < target._word.length; i++)
                target._guessed[i] = target._word[i];

            match = true;
        } else target._attempts = 0;

        update(target);

        return match;
    }

    function update(target) {
        if (!target._attempts)
            target._status = Hangman.LOSE;
        else if (target._guessed.indexOf('_') === -1)
            target._status = Hangman.WIN;
        else
            target._status = Hangman.CONTINUE;
    }

    return Hangman;
})();


