function toRandomCase(str) {
    if (typeof str !== "string") {
        throw Error('Input is not a string');
    }
    var newString = "";
    var randomnumber;

    for (var i = 0; i < str.length; i++) {
        randomNumber = Math.round(Math.random());
        if (randomnumber === 0) {

            newString += str[i].toLowerCase();

        } else {
            newString += str[i].toUpperCase();
        }
    }
    return newString;
};
    
