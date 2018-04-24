'use strict';

// toRandomCase("Hello My World"); // -> "HElLo mY woRLd"
// toRandomCase("Hello My World"); // -> "hELlo MY WOrld"
// toRandomCase("Hello My World"); // -> "heLLO my wOrld"



function toRandomCase(str){
    if(typeof str !== string){
        throw Error ('str should be a string inside " "');
    }

     // create an array of words
     var arr = [];
     arr = str.split(" ");
 
     var newArr = [];
     // toUpperCase() all first letters
     for (i = 0; i < arr.length; i++) {
         letterArr = arr[i].split("");
         for (var j = 0; j < letterArr.length; j++) {
             letterArr[j] = Math.random() > 0.5 ? (letterArr[j].toUpperCase()) : (letterArr[j].toLowerCase());
         }
         newArr.push(letterArr.join(""));
     }
     return newArr.join(" ");
     
    myArr = Math.floor(Math.random()*2);


}