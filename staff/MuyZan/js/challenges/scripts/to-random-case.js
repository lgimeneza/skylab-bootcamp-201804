'use strict';

function toRandomCase(str) {

  if(typeof str !== "string"){
    throw Error("It is not a string!");
  }

  if (typeof str === "string") {
    for (var i=0; i < str.length; i++){
    var newLetter = toUpperLowerCase(str[i]);
    str = str.replace(str[i], newLetter);
    }
    return str;
  }
  
}

function toUpperLowerCase(n){

  var randomNumber = Math.floor(Math.random() * 10) + 1;  
  if (randomNumber % 2 == 0){
    return n = n.toUpperCase();
  } else {
    return n = n.toLowerCase();
  }
}


