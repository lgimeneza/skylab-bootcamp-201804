"use strict";
var count= cube(3);
console.log("countWords(count) should return 27 ", count===27, count);

count= cube([1,2,3]);
console.log("countWords(count) should return [1,8,27] ", count.toString()===[1,8,27].toString(), count);

var error;

try {
    count= cube([1,2,'f']);
} catch (err) {
    error=err;
    
}finally{
    console.log("countWords(count) should launch an error", error!== undefined, error)
}