'use strict'

class RockPaperScissors {
    constructor(player1, player2) {

        this.player1 = player1
        this.player2 = player2
        this._status = RockPaperScissors.CONTINUE
        this.rounds = 0
        this.state = []
        this.count1 = 0
        this.count2 = 0
    }

    play(hand1, hand2) {
        let handFirst = hand1
        let handSec = hand2
        if (typeof hand1 !== 'string' || typeof hand2 !== 'string') throw Error('invalid hands')

        if (handFirst !== 'rock' && handFirst !== 'scissors' && handFirst !== 'paper') throw Error('invalid hands')

        if (handSec !== 'rock' && handSec !== 'scissors' && handSec !== 'paper') throw Error('invalid hands')

        this.rounds += 1

        this.state.push({'player1': hand1, 'player2': hand2}) // pairs are first player, odds second player


        if (hand1 === 'rock' && hand2 === 'scissors' || hand1 === 'paper' && hand2 === 'rock' || hand1 === 'scissors' && hand2 === 'paper') {
            this.count1 += 1
        } else {
            this.count2 += 1
        }
    }

    status() {
        if (this._status < 2)
            return this._status;
        if (this.count1 === 2)
            this._status = RockPaperScissors.GAMEOVER
        return this.player1
        if (this.count2 === 2)
            this._status = RockPaperScissors.GAMEOVER
        return this.player2
    }


    winner() {
        if (this._status === RockPaperScissors.CONTINUE) {
            return undefined
        }
        if (this.count1 === 2)
            this._status = RockPaperScissors.GAMEOVER
        return this.player1
        if (this.count2 === 2)
            this._status = RockPaperScissors.GAMEOVER
        return this.player2
    }



    state() {

    }

    static get CONTINUE() { return 0 }

    static get GAMEOVER() { return 1 }
}




