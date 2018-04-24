'use strict';

var input = 'Hello World';

var output =toRandomCase(input);

console.log('toRandomCase("Hello World") should return input in randomcase', output);


var error;
/*
try{
    toRandomCase(1);
} catch(err) {
    error = err;
} finally {
    console.log('toRandomCase(1) should return,', error !== undefined , error);
}
*/
/*test ( function (){
    return toRandomCase('Hello World');
},
    'toRandomCase(1) should return throw Error ',
    function(result) {
        return result === ';
    }
);
*/