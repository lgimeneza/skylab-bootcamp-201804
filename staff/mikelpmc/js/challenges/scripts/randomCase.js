function toRandomCase(str) {
    if (typeof str !== 'string') throw Error('Input should be a string');

    return str
        .split('')
        .map(function(s) {
            return toggleLetterCase(s);
        })
        .join('');
}

function toggleLetterCase(letter) {
    return Math.round(Math.random())
        ? letter.toUpperCase()
        : letter.toLowerCase();
}
