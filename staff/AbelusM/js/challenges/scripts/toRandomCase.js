'use strict';

function toRandomCase(text) {
    if(typeof text !== 'string') throw Error ('input text is not a string')

    var newText = new String(text);
    var res = [];
    var temp;

    for (var i = 0; i < newText.length; i++) {
        var random = Math.random().toFixed();
        if (random == 0) {
            temp = newText[i].toLowerCase();
            res.push(temp)
        } else {
            temp = newText[i].toUpperCase();
            res.push(temp)
        }
    }
    return res;
}