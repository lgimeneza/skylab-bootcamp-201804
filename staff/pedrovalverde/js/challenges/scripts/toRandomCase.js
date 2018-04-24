'use strict'

function toRandomCase(str) {
    var txt = ""
    for (var index = 0; index < str.length; index++) {
        var aux = Math.floor((Math.random() * 2));
        txt += (aux==1)?str[index].toLowerCase():str[index].toUpperCase();
    }
    return txt;
}