'use strict'

class RockPaperScissors {
    constructor(player1, player2) {

        this._player1 = player1
        this._player2 = player2

        // this._hand1 = hand1
        // this._hand2 = hand2

        // let state = {
        //     'player1': hand1,
        //     'player2': hand2
        // }
    }

    play(hand1, hand2) {

        let options = ['paper', 'scissors', 'rock']

        if (arguments.length === 0) { throw Error('invalid hands') }
        if (typeof hand1 === 'boolean' || typeof hand2 === 'boolean') { throw Error('invalid hands') }
        if (typeof hand1 === 'number' || typeof hand2 === 'number') { throw Error('invalid hands') }
        if (options.indexOf(hand1) === -1 || options.indexOf(hand2) === -1) { throw Error('invalid hands') }
        if (hand1 === undefined || hand2 === undefined) { throw Error('invalid hands') }
        if ((typeof hand1 === 'Array' || 'Object') || (typeof hand2 === 'Array' || 'Object')) { throw Error('invalid hands') }
    }

    static get CONTINUE() { return 0 }

    static get GAMEOVER() { return 1 }

    status() {

    }

    winner() {

        //when game is over
    }


}


// 'paper', 'rock'
// 'rock', 'scissors'
// 'scissors', 'paper'
// 'rock', 'paper'
// 'paper', 'scissors'
// 'scissors', 'rock'
// 'paper', 'paper'
// 'scissors', 'scissors'
// 'rock', 'rock'