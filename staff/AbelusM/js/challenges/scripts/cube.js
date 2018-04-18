'use strict';

function cube(number) {
    var arr = [];
    var result;

    if (typeof number == 'object') {
        for (var i = 0; i < number.length; i++) {
            var temp = number[i];
            result = temp * temp * temp;
            arr.push(result);
        }
        return arr;
    } else {
        var res = number * number * number;
        return res;
    }
}