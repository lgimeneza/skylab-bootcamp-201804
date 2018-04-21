
function coinInsert() {
    var numberOfCoins = prompt('Introduce a money quantity. You will have as many turns as coins you introduce');
    numberOfCoins ? alert('thanks') : alert('insert coin');
    return numberOfCoins;
}

var coins = coinInsert();

function randomFruitArray(money) {
    var arr = []
    var fruitArr = ['Beetroot', 'Potato', 'Apple', 'Orange', 'Plum'];
    while (arr.length < money * 3) {
        var randomNumber = Math.floor(Math.random() * 5);
        var randomFruit = fruitArr[randomNumber];
        arr[arr.length] = randomFruit;
    }
    return arr;
}

var fruitArray = randomFruitArray(coins);

function fruitArraySlicer() {
    var slice = 0;
    var earnedMoney = 0;
    var index = coins - 1;
    while (slice < fruitArray.length) {
        var fruitArraySlice = fruitArray.slice(slice, slice + 3)
        alert("This is the fruit combination! " + fruitArraySlice);
        earnedMoney = earnedMoney + oneTurnValue(fruitArraySlice);

        if (oneTurnValue(fruitArraySlice) == 0){
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

    var benefit = earnedMoney - coins;

    var score = alert("Introduced coins => " + coins + "€\nMoney earned playing => " + earnedMoney + "€\nBenefit => " + benefit + "€\nThanks for playing!");

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
        result = 40;
    } else if (arr.toString() === "Potato,Potato,Potato") {
        result = 30;
    } else if (arr.toString() === "Apple,Apple,Apple") {
        result = 20;
    } else if (arr.toString() === "Orange,Orange,Orange") {
        result = 10;
    } else if (arr.toString() === "Plum,Plum,Plum") {
        result = 5;
    } else {
        for (let i = 0; i < arr.length; i++) {
            var element = arr[i];
            if (element === "Beetroot") {
                beetrootCounter++;
                if (beetrootCounter === 2) {
                    result = 10;
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
                    result = 4;
                }
            }
            if (element === "Orange") {
                orangeCounter++;
                if (orangeCounter === 2) {
                    result = 2;
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

fruitArraySlicer()

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