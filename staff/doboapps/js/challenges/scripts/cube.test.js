'use strict';
 
 var cubeNumber = cube(3); 
 console.log('3) should return 27 ', cubeNumber === 27),cubeNumber;
 

 var cubeArray = cube([1,2,3]); 
 console.log('[1,2,3]) should return [1,8,27] ', cubeArray.toString() === [1,8,27].toString(),cubeArray);

var error;

try {
    cube(true)
} catch (err) {
    error = err;
}finally{
    console.log("cube(true) should throw an error", error !== undefined,error)
}

error = undefined;

try {
    cube('')
} catch (err) {
    error = err;
}finally{
    console.log("cube('') should throw an error", error !== undefined,error)
}



function testThrowError(testCase,message){

    var error;

    try {
       testCase(); 
    } catch (err) {
        error = err;
    }finally{
        console.log(message, error !== undefined,error);
    }

}