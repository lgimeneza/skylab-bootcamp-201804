'use strict';
function toRandomCase(str) {
    return str.toLowerCase().split('').map(function (c) {
        return Math.random() < .5 ? c : c.toUpperCase();
    }).join('');
}

/* Esto son apuntes */
/* function(c){
    return Math.random() < .5? c : c.toUpperCase();
} 

function toRandomCase(str) {

if (typeof str !== 'string')
    throw Error('input str is not a string!!');
    
    // create an array of words
    var arr = [];
    arr = str.split(" ");

    // creamos random entre 1 y 0
    var randomNumber = Math.random();

    var newArr = [];

    // toUpperCase() all first letters
    for (i = 0; i < arr.length; i++) {
        letterArr = arr[i].split("");
        for (var j = 0; j < letterArr.length; j++) {
            if (Math.random() > 0.5) {
                letterArr[j] = letterArr[j].toUpperCase();
            } else {
                letterArr[j] = letterArr[j].toLowerCase();
            }

        }
        newArr.push(letterArr.join(""));
    }

    return newArr.join(" ");









*/