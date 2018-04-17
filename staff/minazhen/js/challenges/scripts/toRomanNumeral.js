var firstNumb = 0;

function toRomanNumeral(n){
    var num = n;
    firstNumb = num;
    var bool = false;
    if (typeof num !== 'number') {
        throw Error(" input " + num + " is not a valid number");
    }
    if (!((num > 0)&&(num < 4000))){
        throw Error("Program detects from 1 to 3999.");
    }

    var bool = Number.isInteger(num);
    var conc = [];
    var nums = [[1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X","IX","V","IV","I"]];
    for (var i = 0; i < nums[0].length; i++) {
        var idNums = nums[0][i];
        while (num % idNums < num) { 
            conc.push(nums[1][i]);
            num -= idNums;
        }
    }
    if (!bool) conc.push(", roman people didn't use decimals.")
    return conc.join("");
}

"use strict"