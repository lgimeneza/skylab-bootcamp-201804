'use strict'

// Demos:

// var array = [82, 3, 2, 24, 9, 1, 56, 13]; 


// array.noNameFunc(); //→[“82”, “56”, “24”, “02”, “01”] 
//    		 	     →  [“13”, “09”, “03”]


if (typeof Array.prototype.noNameFunc !== 'function')
    Array.prototype.noNameFunc = function (){
      
        var array2 = this.sort(function (a, b) { return b - a })
        
        var stringArr = array2
        var evenArr = [];
        var oddArr = [];
        
        for (var i = 0; i < array2.length; i++) {
            var element = array2[i];
            if (element % 2 === 0) {
                if (element < 10) {
                    evenArr.push('0' + element.toString());
                } else {
                    evenArr.push(element.toString());
                }
            } else {
                if (element < 10) {
                    oddArr.push('0' + element.toString());
                } else {
                    oddArr.push(element.toString());
                }
            }
        }
        
        console.log(evenArr);
        console.log(oddArr);

    }

    var array = [82, 3, 2, 24, 9, 1, 56, 13];
    array.noNameFunc();


    
// Miss Alba’s “arrayMerger()” (designed by Mr Ezequiel… presumably):

// Write a function to merge two arrays, remove all duplicate elements and put into brackets the odd numbers:

// DEMO:

// var array1 = [1, 2, 3, 5];
// var array2 = [2, 30, 1, 4];

// console.log(arrayMerger(array1, array2));  / / return → [{3}, {5}, 30, 4];

function arrayMerger(array1, array2) {

    var mergedArr = array1.concat(array2);

    var uniqueMergedArr = mergedArr.filter(function (x, i, a) {
        return a.indexOf(x) == i;
    });

    var arr = [];

    for (let i = 0; i < uniqueMergedArr.length; i++) {
        var element = uniqueMergedArr[i];
        if (element % 2 == 1) {
            element = arr.push('{' + element + '}');
        } else {
            arr.push(element);
        }
    }

    return arr;
}


// SANDWICH by Núria Coma

// create a polyfill and its test, create something.sandwich() that return a string with the first and the last letter in uppercase and the other letters in lowercase

// demos:

// var a= "Eres La Mejor" should return "Eres la mejoR";

// var b= "Nosotras podemos" should return "Nosotras podemoS"

if (typeof String.prototype.firstLastCasedStr !== 'function')
    String.prototype.firstLastCasedStr = function () {

        var lowercasedString = this.toLowerCase();
        var arr = lowercasedString.split("");

        arr[0] = arr[0].toUpperCase();
        arr[arr.length - 1] = arr[arr.length - 1].toUpperCase();

        return arr.join("");

    }

var string = "Eres La Mejor";
string.firstLastCasedStr();

// - evenNumberSeparated (for Eric by Paco)

// Create a polyfill and its test, write a JavaScript polyfill which accept a number as input and insert something, for example a dash (-) between each two even numbers. 

// Demos: 

// var a = [025468, 45846]

// a.evenNumberSeparated(“-”) → the output should be [0-254-6-8,458-4-6]

if (typeof Array.prototype.evenNumberSeparated !== 'function')
    Array.prototype.evenNumberSeparated = function (strSeparator) {
        var count = 0;
        var arr = [];
        var aString = this.toString().split('');

        for (let i = 0; i < aString.length; i++) {
            var element = aString[i];
            if (element % 2 == 0) {
                count++;
                if (count > 1) {
                    element = strSeparator + element;
                }
            } else if (element == ",") {
                element = " ";
                count = 0;
            } else {
                count = 0;
            }
            arr.push(element);
        }

        return arr.join('').split(" ");

    }

a = [254688347, 458468948];
a.evenNumberSeparated("-")


