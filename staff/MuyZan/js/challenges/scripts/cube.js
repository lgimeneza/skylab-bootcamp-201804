"use strict";

function numbersToCube(val) {
  if (typeof val !== "number" && typeof val !== "object") {
    throw Error("It is not a number or array!");
  }

  if (typeof val === "number") {
    var number = val;
    number = cube(number);
    return number;
  }
  if (typeof val === "object") {
    var newVal = [];
    for (var i = 0; i < val.length; i++) {
        
      if (typeof val[i] !== "number") {
        throw Error("It is not a number");
      }

      var number = val[i];
      number = cube(number);
      newVal.push(number);
    }
    return newVal;
  }
}

function cube(n) {
  var res;
  res = n * n * n;
  return res;
}
