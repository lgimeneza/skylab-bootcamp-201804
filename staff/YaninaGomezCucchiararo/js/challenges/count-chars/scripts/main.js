var count= countChars('Hello world');

console.log('countChars("hello world") should return 11', count === 11, count);

var count= countChars('123456789');

console.log('countChars("123456789") should return 11', count === 11, count);
/*---------------para explicar en consola el error de que no es un string--------------------*/

try{
    var count= countChars(true);

}catch(err) {
    console.log('countChars(true) shoul launch and error', err !== undefined, err);
}

console.log('countChars(true) should return 11', count === 11, count);

try{
    var count= countChars([]);

}catch(err) {
    console.log('countChars([]) shoul launch and error', err !== undefined, err);
}

count = countChars('abracadabra', function(c) {return c=== 'a';});

console.log()
