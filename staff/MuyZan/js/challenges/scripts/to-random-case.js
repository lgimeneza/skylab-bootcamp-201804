"use strict";

function toRandomCase(str) {
  var res;
  if (typeof str !== "string") {
    throw Error("It is not a string!");
  }

  for (var i = 0; i < str.length; i++) {
    var oldLetter = str[i];
    var newLetter = toUpperLowerCase(oldLetter);
    res = str.replace(oldLetter, newLetter);
  }
  return res;
}

function toUpperLowerCase(n) {
  var randomNumber = Math.floor(Math.random() * 2);
  if (randomNumber == 0) {
    return (n = n.toUpperCase());
  } else {
    return (n = n.toLowerCase());
  }
}
