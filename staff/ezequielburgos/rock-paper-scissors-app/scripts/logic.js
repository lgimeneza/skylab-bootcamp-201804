'use strict'


class RockPaperScissors {
    constructor(player1, player2) {
        this._player1 = player1;
        this._player2 = player2;

        // Here we store each turn results:
        this._state = [];
        this._winner;

        // This status can be either 1 (CONTINUE) or 0 (GAMEOVER):
        this._status = 1;

        this._scorePlayer1 = 0;
        this._scorePlayer2 = 0;

    }

    play(hand1, hand2) {

        if (typeof hand1 !== 'string' || typeof hand2 !== 'string') throw Error('invalid hands');

        hand1 = hand1.toLowerCase().trim();
        hand2 = hand2.toLowerCase().trim();

        if (hand1 !== 'rock' && hand1 !== 'scissors' && hand1 !== 'paper') throw Error('invalid hands');
        if (hand2 !== 'rock' && hand2 !== 'scissors' && hand2 !== 'paper') throw Error('invalid hands');

        this.status();

        if (this._status === 0) throw Error('GAME OVER!');

        return winOneRound(this, hand1, hand2);

    }

    status() {

        if (this._state.length === 2 && this._scorePlayer1 === 2) {
            return this._status = 0;
        } else if (this._state.length === 2 && this._scorePlayer2 === 2) {
            return this._status = 0;
        } else if (this._state.length === 3 && this._scorePlayer1 > this._scorePlayer2) {
            return this._status = 0;
        } else if (this._state.length === 3 && this._scorePlayer2 > this._scorePlayer1) {
            return this._status = 0;
        } else if (this._state.length > 3 && this._scorePlayer1 > this._scorePlayer2) {
            return this._status = 0;
        } else if (this._state.length > 3 && this._scorePlayer2 > this._scorePlayer1) {
            return this._status = 0;
        } else {
            return this._status = 1;
        }
    }

    /**
     * This function should return an array of objects [{}{}...]. Each object represents a turn.
     */
    state() {
        return this._state;
    }

    /**
     * this function should return a string or undefined;
     */
    winner() {

        if (this._state.length === 2 && this._scorePlayer1 === 2) {
            return this._winner = this._player1;
        } else if (this._state.length === 2 && this._scorePlayer2 === 2) {
            return this._winner = this._player2;
        } else if (this._state.length === 3 && this._scorePlayer1 > this._scorePlayer2) {
            return this._winner = this._player1;
        } else if (this._state.length === 3 && this._scorePlayer2 > this._scorePlayer1) {
            return this._winner = this._player2;
        } else if (this._state.length > 3 && this._scorePlayer1 > this._scorePlayer2) {
            return this._winner = this._player1;
        } else if (this._state.length > 3 && this._scorePlayer2 > this._scorePlayer1) {
            return this._winner = this._player2;
        }
    }


    static get CONTINUE() { return 1 };
    static get GAMEOVER() { return 0 };

}
// Alternative way to do the static method:
// RockPaperScissors.CONTINUE = 1;
// RockPaperScissors.GAMEOVER = 0;

function winOneRound(target, hand1, hand2) {

    if (hand1 === 'rock' && hand2 === 'scissors') {
        target._state.push({ player1: 'rock', player2: 'scissors' })
        target._scorePlayer1++;
    }
    if (hand1 === 'rock' && hand2 === 'rock') {
        target._state.push({ player1: 'rock', player2: 'rock' })
    }
    if (hand1 === 'paper' && hand2 === 'paper') {
        target._state.push({ player1: 'paper', player2: 'paper' })
    }
    if (hand1 === 'scissors' && hand2 === 'scissors') {
        target._state.push({ player1: 'scissors', player2: 'scissors' })
    }
    if (hand1 === 'rock' && hand2 === 'paper') {
        target._state.push({ player1: 'rock', player2: 'paper' })
        target._scorePlayer2++;
    }
    if (hand1 === 'paper' && hand2 === 'rock') {
        target._state.push({ player1: 'paper', player2: 'rock' })
        target._scorePlayer1++;
    }
    if (hand1 === 'paper' && hand2 === 'scissors') {
        target._state.push({ player1: 'paper', player2: 'scissors' })
        target._scorePlayer2++;
    }
    if (hand1 === 'scissors' && hand2 === 'rock') {
        target._state.push({ player1: 'scissors', player2: 'rock' })
        target._scorePlayer2++;
    }
    if (hand1 === 'scissors' && hand2 === 'paper') {
        target._state.push({ player1: 'scissors', player2: 'paper' })
        target._scorePlayer1++;
    }

    target.state();
    target.winner();

}

var game = new RockPaperScissors('romeo', 'juliette');

game.play('     sciSsOrs', 'RocK')
