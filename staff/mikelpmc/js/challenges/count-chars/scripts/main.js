let count = countChars('hello world');

console.log(
    'countChars("hello world") should return 11: ',
    count === 11,
    count
);

try {
    let count = countChars(true);
} catch (error) {
    console.log(
        'countChars(true) should throw an error',
        error !== undefined,
        error
    );
}

try {
    let count = countChars(1);
} catch (err) {
    console.log('countChars(1) should throw an error', err !== undefined, err);
}

try {
    let count = countChars([]);
} catch (err) {
    console.log('countChars([]) should throw an error', err !== undefined, err);
}

try {
    let count = countChars('abracadabra', '...');
    console.log(count);
} catch (err) {
    console.log(
        'countChars("abracadabra", "...") should throw an error',
        err !== undefined,
        err
    );
}

count = countChars(filterLetter('abracadabra', 'a'));
console.log('countChars("abracadabra") should return 5', count === 5, count);
