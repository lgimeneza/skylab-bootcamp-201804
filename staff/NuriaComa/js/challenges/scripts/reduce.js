"use strict";



function toReduce(arr, handler, init) {
	 
	var result=0;
 
 	var iter = function(index) {
 		 result = handler(result, arr[index]);
 
 		if (++index < arr.length)
 			iter(index)
 		
	 }
	 iter(0);
	 console.log(result) 
     
    }