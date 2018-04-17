function toCamelCase(str) {
    if (typeof str !== 'string') throw Error('input str is not a string');

    var res = str
        .toLowerCase()
        .split(' ')
        .map((r, i, arr) => r[0].toUpperCase() + r.substr(1))
        .join('');

    return res[0].toLowerCase() + res.substr(1);
}
