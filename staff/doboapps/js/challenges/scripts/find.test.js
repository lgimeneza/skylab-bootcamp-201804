'use strict';

 var input = [1,2,3,4,5,6,7,8];
 var output = 5;


var value =find(input,function(element){    
    return  element>4;
});
console.log(value);



test(function(){
    return find(input,function(element){

                return  element>4;

    })},
    "find(input, function(element) { return element>3) }) the input should 5",
    function(result){
        return result === output;
    }
);


test(function(){
    return find(input,function(element){

                return  element>100;

    })},
    "find(input, function(element) { return element>100) }) the input should undefined",
    function(result){
        return result === undefined;
    }
);


test(withErrorCapturing(function(){
    find();
}),
"find() without arguments should throw an error",
function(result){
   return result.message === "input arr is not an array";
   
});



test(withErrorCapturing(function(){
    find(undefined,
        function(element){
            return  element>4;
});
}),
'find(undefined, function(element) { return  element>4; }) without first argument should throw an error',
function(result){
   return result.message === "input arr is not an array";
   
});


test(withErrorCapturing(function(){
    find(input);
}),
'find(input) without second argument should throw an error',
function(result){
    return result.message === 'input handler is not a function';
   
});