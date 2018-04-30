'use strict'

class RockPaperScissors {

    constructor(player1, player2) {

        this.player1 = player1;
        this.player2 = player2;
        this._score = { p1: 0, p2: 0 }
        this._status = 0;
        this.stateArr = [];
        this.rounds = 0;
        this._winner = undefined;
    }


    play(hand1, hand2) {

        if (hand1 !== "rock" && hand1 !== "paper" && hand1 !== "scissors") throw Error("invalid hands")
        if (hand2 !== "rock" && hand2 !== "paper" && hand2 !== "scissors") throw Error("invalid hands")

        let obj = { player1: hand1, player2: hand2 }
        this.stateArr.push(obj);

        this.rounds++;

        rule(hand1, hand2, this);

    }

    status() {
        update(this);
        return this._status;
    }


    state() {
        update(this);
        return this.stateArr;
    }

    winner() {


        return this._winner;
    }



}

function update(obj) {

    if (obj._score.p1 === 2) {
        obj._status = 1;
        obj._winner = obj.player1
    }

    if (obj._score.p2 === 2) {
        obj._status = 1;
        obj._winner = obj.player2
    }


}

function rule(hand1, hand2, obj) {

    if (hand1 === "paper" && hand2 === "rock"|| hand1 === "scissors" && hand2 === "paper" || hand1 === "rock" && hand2 === "scissors"){
        obj._score.p1++
    } else if (hand2 === "paper" && hand1 === "rock"|| hand2 === "scissors" && hand1 === "paper" || hand2 === "rock" && hand1 === "scissors"){
        obj._score.p2++
    } else {
        //si los scores son iguales (empate) y el numero de ronda es mayor a 3, quien gane gana
        // si los scores no son iguales y el numero de ronda es mayor a 3, gana el de score mas grande
    }
    

    console.log(obj._score)

}

RockPaperScissors.CONTINUE = 0;
RockPaperScissors.GAMEOVER = 1;
