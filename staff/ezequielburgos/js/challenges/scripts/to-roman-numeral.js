'use strict';

function toRomanNumeral(num) {
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

