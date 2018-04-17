var res= toRomanNumber("m");

console.log("El numero romano es: " + res);

try {
    var res = toRomanNumber("m");

} catch (err) {
    console.log('countChars(true) shoul launch and error', err !== undefined, err);
}