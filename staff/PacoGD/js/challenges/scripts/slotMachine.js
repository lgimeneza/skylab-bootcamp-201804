'use strict'


var numberOfCoins;


/**
 * 
 */
function coinInsert() {
    numberOfCoins = prompt('Introduce a money quantity. You will have as many turns as coins you introduce');
    numberOfCoins ? alert('thanks') : alert('insert coin');
    return numberOfCoins;
}

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