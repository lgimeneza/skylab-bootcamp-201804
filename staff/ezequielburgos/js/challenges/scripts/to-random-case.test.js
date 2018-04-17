'use strict';

var count = toRandomCase('hi there I am putting a Long sentence');
console.log('The random case version is', count);

var error;

try{
    count = toRandomCase(true);
}catch(err){
    error = err;
}finally{
    console.log('toRandomCase(true) should throw an error', error != undefined, error)
}

error = undefined;

try{
    count = toRandomCase(1);
}catch(err){
    error = err;
}finally{
    console.log('toRandomCase(1) should throw an error', error != undefined, error)
}

error = undefined;

try{
    count = toRandomCase([]);
}catch(err){
    error = err;
}finally{
    console.log('toRandomCase([]) should throw an error', error != undefined, error)
}

error = undefined;

