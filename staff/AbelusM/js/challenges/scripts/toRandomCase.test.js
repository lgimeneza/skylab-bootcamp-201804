'use strict';
var randomCase = toRandomCase('Hello My World');

console.log(randomCase);

try {
    randomCase = toRandomCase(true);
} catch (err) {
    console.log('toRandomCase(true) should launch an error', err !==undefined, err);
}