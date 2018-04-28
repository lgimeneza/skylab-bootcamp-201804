'use strict'

// TODO

class RockPaperScissors {
    constructor(player1, player2) {
        this._player1 = player1;
        this._player2 = player2;
        // winner = 1 || 2 // --> if [1,1] || [2,2] // --> wins
        this._stateWinnerArr = [];
        // state.length = nº partidas;
        this._state = [];
        // if turns <= 3 // --> if player (one || two) score 2 || 1 --> wins 
        // if turns > 3 // --> player wins++ --> wins 
        this._turns = 0;
        this.scorePlayer1 = 0;
        this.scorePlayer2 = 0;

    }


    play(hand1, hand2) {
        if (hand1 !== 'rock' && hand1 !== 'scissors' && hand1 !== 'paper') throw Error('invalid hands')
        if (hand2 !== 'rock' && hand2 !== 'scissors' && hand2 !== 'paper') throw Error('invalid hands')

        // if ()

    }

    // RockPaperScissors.
    // RockPaperScissors.

    status() { }

    state() {

        // array[{}{}{}]
        return (this._stateWinnerArr)

    }

    winner() { }

}

function winningCondition(target, hand1, hand2) {
    if (target.hand1 === 'rock' && target.hand2 === 'rock') {
        return this._stateWinnerArr.push(0)
    }
    if (target.hand1 === 'rock' && target.hand2 === 'scissors') {
        return this._stateWinnerArr.push(1)
    }
    if (target.hand1 === 'rock' && target.hand2 === 'paper') {
        return this._stateWinnerArr.push(2)
    }
    if (target.hand1 === 'paper' && target.hand2 === 'rock') {
        return this._stateWinnerArr.push(1)
    }
    if (target.hand1 === 'paper' && target.hand2 === 'scissors') {
        return this._stateWinnerArr.push(2)
    }
    if (target.hand1 === 'paper' && target.hand2 === 'paper') {
        return this._stateWinnerArr.push(0)
    }
    if (target.hand1 === 'scissors' && target.hand2 === 'rock') {
        return this._stateWinnerArr.push(2)
    }
    if (target.hand1 === 'scissors' && target.hand2 === 'scissors') {
        return this._stateWinnerArr.push(0)
    }
    if (target.hand1 === 'scissors' && target.hand2 === 'paper') {
        return this._stateWinnerArr.push(1)
    }
}

var game = new RockPaperScissors('undefined', 'mary')


if (this._state.length === 2 && this._scorePlayer1 === 2){
    this._winner = player1;
    this._status = RockPaperScissors.GAMEOVER;
}else if (this._state.length === 2 && this._scorePlayer2 === 2){
    this._winner = player2;
    this._status = RockPaperScissors.GAMEOVER;
}else if(this._state.length === 3 && this._scorePlayer1 > this._scorePlayer2){
    this._winner = player1;
    this._status = RockPaperScissors.GAMEOVER;
}else if(this._state.length === 3 && this._scorePlayer2 > this._scorePlayer1){
    this._winner = player2;
    this._status = RockPaperScissors.GAMEOVER;
}else if(this._state.length > 3 && this._scorePlayer1 > this._scorePlayer2){
    this._winner = player1;
    this._status = RockPaperScissors.GAMEOVER;
}else if(this._state.length > 3 && this._scorePlayer2 > this._scorePlayer1){
    this._winner = player2;
    this._status = RockPaperScissors.GAMEOVER;
}

RockPaperScissors.GAMEOVER;
RockPaperScissors.CONTINUE;
