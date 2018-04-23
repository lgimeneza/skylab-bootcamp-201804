'use strict'


var numberOfCoins;


/**
 * This function allows you to introduce the number of coins that will later determine the number of turns you have.
 * 
 * @throws {Error} - 
 * 
 * @returns {string} - The number of coins you introduced in the prompt
 */
function coinInsert() {
    numberOfCoins = prompt('Introduce a money quantity. You will have as many turns as coins you introduce');
    numberOfCoins ? alert('thanks') : alert('insert coin');
    return numberOfCoins;
}

/**
 * This function will generate a random array of fruits 
 * 
 * @throws {Error} - 
 * 
 * @returns {string} - The number of coins you introduced in the prompt
 */
function randomFruitArray(theTurns) {

    if (typeof theTurns !== 'number') throw Error('input parameter should be a number');

    var arr = []
    var fruitArr = ['Beetroot', 'Potato', 'Apple', 'Orange', 'Plum'];
    while (arr.length < theTurns * 3) {
        var randomNumber = Math.floor(Math.random() * 5);
        var randomFruit = fruitArr[randomNumber];
        arr[arr.length] = randomFruit;
    }
    return arr;
}

function fruitArraySlicer() {
    var turns = Math.floor(coinInsert() / 2);
    var fruitArray = randomFruitArray(turns);
    var slice = 0;
    var earnedMoney = 0;
    var index = turns - 1;
    while (slice < fruitArray.length) {
        var fruitArraySlice = fruitArray.slice(slice, slice + 3)
        alert("This is the fruit combination! " + fruitArraySlice);
        earnedMoney = earnedMoney + oneTurnValue(fruitArraySlice);

        if (oneTurnValue(fruitArraySlice) == 0) {
            var plumCounter = 0;
            for (let i = 0; i < fruitArraySlice.length; i++) {
                var element = fruitArraySlice[i];
                if (element === "Plum") {
                    plumCounter++;
                    if (plumCounter > 1 && plumCounter < 3) {
                        fruitArray = fruitArray.concat(randomFruitArray(1));
                        alert("You earned an extra turn!");
                        index++;
                    }
                }
            }
        }

        alert("This is your earned money: " + earnedMoney + "€\nNumber of turns resting: " + index);
        slice = slice + 3;
        index--;
    }

    var benefit = earnedMoney - (turns * 2);

    var score = alert("Introduced coins => " + (turns * 2) + "€\nMoney earned playing => " + earnedMoney + "€\nBenefit => " + benefit + "€\nThanks for playing!");

    return score;
}


function oneTurnValue(arr) {

    var beetrootCounter = 0;
    var potatoCounter = 0;
    var appleCounter = 0;
    var orangeCounter = 0;
    var plumCounter = 0;
    var result = 0;

    if (arr.toString() === "Beetroot,Beetroot,Beetroot") {
        result = 20;
    } else if (arr.toString() === "Potato,Potato,Potato") {
        result = 15;
    } else if (arr.toString() === "Apple,Apple,Apple") {
        result = 10;
    } else if (arr.toString() === "Orange,Orange,Orange") {
        result = 8;
    } else if (arr.toString() === "Plum,Plum,Plum") {
        result = 5;
    } else {
        for (let i = 0; i < arr.length; i++) {
            var element = arr[i];
            if (element === "Beetroot") {
                beetrootCounter++;
                if (beetrootCounter === 2) {
                    result = 12;
                }
            }
            if (element === "Potato") {
                potatoCounter++;
                if (potatoCounter === 2) {
                    result = 8;
                }
            }
            if (element === "Apple") {
                appleCounter++;
                if (appleCounter === 2) {
                    result = 6;
                }
            }
            if (element === "Orange") {
                orangeCounter++;
                if (orangeCounter === 2) {
                    result = 4;
                }
            }
            if (element === "Plum") {
                plumCounter++;
                if (plumCounter === 2) {
                    result = 0;

                }
            }
        }
    }

    return result;
}

function slotMachine() {
    return fruitArraySlicer();
}

// slotMachine()



// SlotMachine (Alex G. to Ezequiel)
//  SlotMachine(coins) should take an amount of money as input (coins=turns) and return the benefit after all the turns. Make a slot machine with 3 slots and 5 different fruits. 

// Table of values:

// Beetroots: 3x=40€      2x=10€
// Potato:   3x=30€      2x=8€
// Apple:	  3x=20€      2x=4€
// Orange:  3x=10€      2x=2€
// Plum: 	  3x=5€       2x= 1 extra coin

// 3 different fruits +0€.

// demos:

// SlotMachine(20);
// output: Your benefit is 5€.


/*

prob3x(premio3x - precioJugada) + prob2x(premio2x - precioJugada) + prob0€(premio0€ - precioJugada) = 0 (para juego equilibrado)    

var premio3xBetroots = 20;
var premio3xPotato = 15;
var premio3xApple = 10;
var premio3xOrange = 8;
var premio3xPlum = 5;

var premio2xBetroots = 4;
var premio2xPotato = 3;
var premio2xApple = 2;
var premio2xOrange = 2;
var premio2xPlum = 2;

var precioJugada = 2€;

var total = 1/125*(premio3xBetroots - precioJugada) + 15/125*(premio2xBetroots - precioJugada) + 1/125*(premio3xPotato - precioJugada) + 15/125*(premio2xPotato - precioJugada) + 1/125*(premio3xApple - precioJugada) + 15/125*(premio2xApple - precioJugada) + 1/125*(premio3xOrange - precioJugada) + 15/125*(premio2xOrange - precioJugada) + 1/125*(premio3xPlum - precioJugada) + 15/125*(premio2xPlum - precioJugada) + 9/25*(0 - precioJugada);

console.log(total);


*/