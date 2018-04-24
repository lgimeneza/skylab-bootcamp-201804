'use strict'

function toCamelCase(str) {
    var temp = str.toLowerCase().split(" ");
    var txt = "";

    for(var aux in temp){
      txt += temp[aux][0].toUpperCase() + temp[aux].substring(1);;  
    }
    txt = txt[0].toLowerCase() + txt.substring(1);
    return txt;
}