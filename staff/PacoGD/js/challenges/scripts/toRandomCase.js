'use strict';
function toRandomCase(str) {
    return str.toLowerCase().split('').map(function (c) {
        return Math.random() < .5 ? c : c.toUpperCase();
    }).join('');
}