var firstNumb = 0;

function toRomanNumeral(num){
    firstNumb = num;
    if (typeof num !== 'number') {
        throw Error(" input " + num + " is not a valid number");
    }
    var conc = [];
    var nums = [[10, 9, 5, 4, 1],["X","IX","V","IV","I"]];
    for (var i = 0; i < nums[0].length; i++) {
        var idNums = nums[0][i];
        while (num % idNums < num) { 
            conc.push(nums[1][i]);
            num -= idNums;
        }
    }
    return conc.join("");
}

"use strict"