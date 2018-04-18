'use strict';

var array = [1, 2, 3];

console.log("forEach: normal use");
array.forEach(function(elem,i,array){
    console.log(elem,i,array)   
});


console.log("forEach: function own");
foreach(array, function (elem, i, array) { console.log(elem, i, array) });

var error;

try {
    foreach();
} catch (err) {
    error = err;    
}finally{
    console.log('foreach() without arguments should thorw an error,', error !==undefined,error)
}


try {
    foreach(1, function(elem,i,array) {  console.log(elem, i, array) });
} catch (err) {
    error = err;    
}finally{
    console.log('foreach(1,  function(elem,i,array) {  console.log(elem, i, array) }) whit first argument as number should thorw an error,', error !==undefined,error)
}

try {
    foreach([]);
} catch (err) {
    error = err;    
}finally{
    console.log('foreach([]) without second argument(function) should thorw an error,', error !==undefined,error)
}

