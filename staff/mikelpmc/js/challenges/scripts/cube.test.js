'use strict';

var res = cube(2);

console.log('cube(2) should return 8', cube(2) == 8, res);

res = cube([2, 3, 4]);

console.log(
    'cube([2, 3, 4]) should return 8, 27, 64',
    cube([2, 3, 4]) == '8, 27, 64',
    res
);
