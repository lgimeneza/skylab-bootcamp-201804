'use strict';

try {
    var count = toCamelCase('hello this is           the world    wide web');
    console.log('The camel case version of ("bla bla bla") should be ("bla bla bla") -->', count);
} catch (err) {
    console.log('countChars(true) should throw an error', err !== undefined, err);
}