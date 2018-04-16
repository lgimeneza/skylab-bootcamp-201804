'use strict'

var myCamelCase = toCamelCase('hello MY world');

console.log("toCamelCase('hello MY world') should return helloMyWorld", myCamelCase ==="helloMyWorld", myCamelCase);


try {
    count =  toCamelCase(true);
} catch(err) {
    console.log(' toCamelCase(true) should throw an error', err !== undefined, err);
}


try {
    count =  toCamelCase(1);
} catch(err) {
    console.log(' toCamelCase(1) should throw an error', err !== undefined, err);
}


try {
    count =  toCamelCase([]);
} catch(err) {
    console.log(' toCamelCase([]) should throw an error', err !== undefined, err);
}

