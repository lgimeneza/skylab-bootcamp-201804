'use strict';


var arr = [1,23,45,2,3,4];

console.log('recursive  version')

// second parameter equals handler
var secondParameter = function(arrIndex, index, arr) { 
count = 0;
check = true;
for (var i = 0; i < arr.length; i++) {
    if(arr[i]!==newArr[i]) {
        check = false;
    }
}
if (check === false) console.log('error has occured')

  return console.log(arrIndex, index, arr)
}

//forEach(arr, secondParameter);

console.log(newArr);


try {
    forEach([1,23,45,2,3,4], secondParameter);
    console.log('forEach([1,23,45,2,3,4]) should return 6', count === 6, count);
} catch(err) {
    console.log('error');
}