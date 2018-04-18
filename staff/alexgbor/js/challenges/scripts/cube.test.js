'use strict';

var res=cube(5);

console.log("cube(5) should return 125",res===125,res);

res=cube([2,3,4]);

console.log("cube([2,3,4]) should return [8,27,64]",res===[8,27,64],res);


error=undefined;
try {
    res=cube("hello");
} catch(err) {
    error=err;
} finally {
    console.log("cube('hello') should throw error",error!==undefined,error);

}