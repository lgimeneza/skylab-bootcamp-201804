'use strict';
/* Esto son apuntes
function toRomanNumerals(num) {
    var result = '';
    var decimal = [10, 5, 1];
    var roman = ["X", "V", "I"];
    for (var i = 0; i <= decimal.length; i++) {
        // looping over every element of our arrays
        while (num % decimal[i] < num) {
            // keep trying the same number until we need to move to a smaller one     
            result += roman[i];
            // add the matching roman number to our result string
            num -= decimal[i];
            // subtract the decimal value of the roman number from our number
        }
    }
    return result;
}
 */
function toRomanNumerals(num) {
    if (num > 10 || num < 0) {
        throw Error("The number introduced must be contained in between 1 and 10!");
    } else if (typeof num !== 'number')
        throw Error('input should be a number!!');
 
    switch (num) {
        case 0:
            num = "0 doesn't exist in roman numerical notation";
            break;
        case 1:
            num = "I";
            break;
        case 2:
            num = "II";
            break;
        case 3:
            num = "III";
            break;
        case 4:
            num = "IV";
            break;
        case 5:
            num = "V";
            break;
        case 6:
            num = "VI";
            break;
        case 7:
            num = "VII";
            break;
        case 8:
            num = "VIII";
            break;
        case 9:
            num = "IX";
            break;
        case 10:
            num = "X";
            break;
    }
 
    return num;
 
 }
 
 