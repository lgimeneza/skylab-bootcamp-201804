function toRandomCase(str) {

    if (typeof str !== 'string')
        throw Error('input str is not a string');

    var otherString = "";
    var randomnumber;

    for (var i = 0; i < str.length; i++) {
        randomnumber = Math.round(Math.random());
        if (randomnumber === 0) {

            otherString += str[i].toLowerCase();
        } else {
            otherString += str[i].toUpperCase();
        }
    }
    return otherString;
};

