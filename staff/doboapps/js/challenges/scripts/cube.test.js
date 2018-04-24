'use strict';
 

test(function(){
    return cube(2);
 },
  "cube(2) should return 8",
  function(result){
      return result === 8;
  });

test(function(){
   return cube([1,2,3]);
},
 "cube([1,2,3]) should return [1,8,27]",
 function(result){
     return result.toString() ===  [1,8,27].toString();
 });


test(withErrorCapturing(function(){
    cube(true);
}),
 "cube('') should throw an error",
 function(result){
     return result.message === 'input value is not a number, neither an array';
 });


test(withErrorCapturing(function(){
        cube('');
    }),
     "cube('') should throw an error",
     function(result){
       return  result.message === 'input value is not a number, neither an array';
     });