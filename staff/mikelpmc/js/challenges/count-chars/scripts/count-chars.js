// Funcion para contar los caracteres

const countChars = str => {
    if (typeof str !== 'string') throw Error('input str is not a string');

    return str.length;
};

const filterLetter = (str, letter) => {
    if (typeof str !== 'string') throw Error('input str is not a string');

    return str
        .split('')
        .filter(s => s === letter)
        .join('');
};
