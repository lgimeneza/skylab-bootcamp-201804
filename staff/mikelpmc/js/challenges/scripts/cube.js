'use strict';

function cube(numbers) {
    return numbers
        .toString()
        .split(',')
        .map(n => parseInt(Math.pow(n, 3)))
        .join(', ');
}
