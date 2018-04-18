'use strict';
var res = cube(3);
console.log('cube(3) should return 27', res===27, res);

res= cube[1,2,3];


console.log('cube ([1,2,3]) shoul return [1,8,27]', res.toString === [1,2,3].toString, res);
console.log('cube ([1,2,3]) shoul return [1,8,27]', res.toString === [1,2,3].toString, res);

var error;

try {
    cube(true);
}catch (err){
    error =err;
}finally{
    console.log('cube(true) should throw an error', error !== undefined, error);
}

error=undefined;

try {
    cube('');
}catch (err){
    error =err;
}finally{
    console.log('cube("") should throw an error', error !== undefined, error);
}

function testThrowError(testCase,message){
    var error;
    try{
        testCase()
    }catch(err){

    }finally{
        console.log(message, error !== undefined);

    }
}