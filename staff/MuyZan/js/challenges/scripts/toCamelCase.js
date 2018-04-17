
'use strict';

function toCamelCase(str) {
  if (typeof str === "string") {
    var val = str.split(" ");
    for (var i = 0; i < val.length; i++) {
      val[i] = val[i].toLowerCase();
      if(i > 0){
        val[i] = val[i].replace(val[i][0], val[i][0].toUpperCase());
      }   
    }
    val = val.join("");
    return val;
  }
  throw Error("input is not a string");
}
