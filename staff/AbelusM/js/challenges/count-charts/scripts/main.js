var count = countChars('Hello world');

console.log('countChars("Hello world") should return 11', count === 11, count);

try {
    count=countChars(true);
} catch(err) {
    console.log('countChars(true) should launch an error', err !==undefined, err);
}