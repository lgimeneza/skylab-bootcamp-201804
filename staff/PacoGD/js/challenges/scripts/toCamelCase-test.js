'use strict';

test(function(){
    return toCamelCase("Hello My World");
}, 

'toCamelCase("Hello My World") should return "helloMyWorld"',
function (result){

    return result === 'helloMyWorld';
});



