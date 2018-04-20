'use strict';
var error
var toCube= calculateCube(3)

console.log(toCube)

error = undefined;
try {
    toCube = calculateCube(' ')
} catch (err) {
    error=err;
}finally{
    console.log('calculateCube(" ") should throw an error',error !== undefined, error);
}

error = undefined;
try {
    toCube = calculateCube({})
} catch (err) {
    error=err;
}finally{
    console.log('calculateCube({}) should throw an error',error !== undefined, error);
}


error = undefined;
try {
    toCube = calculateCube(true)
} catch (err) {
    error=err;
}finally{
    console.log('calculateCube(true) should throw an error',error !== undefined, error);
}

error = undefined;
try {
    toCube = calculateCube(false)
} catch (err) {
    error=err;
}finally{
    console.log('calculateCube(false) should throw an error',error !== undefined, error);
}
