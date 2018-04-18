/*reduce
create a function that works as Array.prototype.reduce()

demos:

var a = [{ name: 'jeans', price: 10.5 }, { name: 't-shirt', price: 5.99 }, { name: 'socks', price: 19.99 }];

reduce(a, function(accum, v) {
if (v.price > 10)
return accum + v.price;

return accum;
}, 0); // -> 30.49*/

'use strict'



/*
function reduce (a, v){
     var accum= 0;
    for( var i = 0; i < a.length; i++){
        accum=accum+a[i];
        if( a[i] === v){
            break;
        } 
    }
    

}
*/
'use strict';


function reduce (arr, func){
    
    if(Array.isArray(arr) === false && typeof func !== "function"){
        throw Error ('Input is not valid');
    }
    
    var count = 0;

    for(var i = 0; i < arr.length; i++){
        
        count = func(count, arr[i]);   
    }
    return count;
}

































