'use strict';
 
 function test(testCase, message, check) {
     try {
         var res = testCase();
 
         console.log(message, check(res), res);
     } catch (err) {
         console.error(message, 'FAILED', err);
     }
 }
 
 function runWithErrorHandling(func) {
     return function () {
         var error;
 
         try {
             func();
         } catch (err) {
             error = err;
         }
 
         return error;
     };
 }
 