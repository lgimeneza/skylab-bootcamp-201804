'use strict';
var error;
    
var a = [1, 2, 3]
var result = foreach(a, console.log);

error = undefined;
try {
    result = foreach(' ')
} catch (err) {
    error=err;
}finally{
    console.log('foreach(" ") should throw an error',error !== undefined, error);
}

error = undefined;
try {
    result = foreach({ })
} catch (err) {
    error=err;
}finally{
    console.log('foreach({ }) should throw an error',error !== undefined, error);
}

error = undefined;
try {
    result = foreach(1)
} catch (err) {
    error=err;
}finally{
    console.log('foreach(1) should throw an error',error !== undefined, error);
}

error = undefined;
try {
    result = foreach(1, " ")
} catch (err) {
    error=err;
}finally{
    console.log('foreach(1, " ") should throw an error',error !== undefined, error);
}
