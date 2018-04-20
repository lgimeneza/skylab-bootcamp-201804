'use strict';

function toRomanNumeral(n) {
    if (typeof n==="number") {
        if (n>0 && n<11) {
            var basenumbers ={ 1:"I",2:"II",3:"III",4:"IV",5:"V",6:"VI",7:"VII",8:"VIII",9:"IX",10:"X"};
            return basenumbers[n];
        }
        else {
            throw Error("Only numbers in the range 1-10.");
        }
    }
    else {
        throw Error("Insert a number, not a string.")
    }
}