'use strict';

var convert= toCamelCase('estamos Programando en Java script')

console.log(convert)

try {
    convert = toCamelCase(1)
} catch (err) {
    console.log('toCamelCase(true should throw an error)', err !== undefined, err);
}

try {
    convert = toCamelCase(false)
} catch (err) {
    console.log('toCamelCase(true should throw an error)', err !== undefined, err);
}

try {
    convert = toCamelCase({})
} catch (err) {
    console.log('toCamelCase(true should throw an error)', err !== undefined, err);
}
try {
    convert = toCamelCase([])
} catch (err) {
    console.log('toCamelCase(true should throw an error)', err !== undefined, err);
}