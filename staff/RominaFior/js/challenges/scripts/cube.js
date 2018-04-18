'use strict';


function calculateCube(num) {

    if (typeof num !== 'number')
        throw Error('input num is not a number');
        
    var num1 = typeof (num)

    if (num1 == 'number') {

        return Math.pow(num, 3)
    }
    else {

        return num.map(function (v) {
            return Math.pow(v, 3)
        })
    }
}
