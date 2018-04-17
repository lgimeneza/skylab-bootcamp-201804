var error = undefined;

try {
    var res = toRomanNumber("m");
} catch (err) {
    error = err;
} finally {
    console.log('countChars("m") debería lanzar un error', error !== undefined, error);
}

