
// Write a function to merge two arrays, remove all duplicate elements and put into brackets the odd numbers:

// DEMO:

// var array1 = [1, 2, 3, 5];
// var array2 = [2, 30, 1, 4];

// console.log(arrayMerger(array1, array2)); / / return →[{ 3}, { 5}, 30, 4];

var array1 = [1, 2, 3, 5];
var array2 = [2, 30, 1, 4];


function arrayMerger(array1, array2) {
  var arrayB = array2;
  var arrayA = array1;
  var result = [];
  var c = ['{ ', '}'];
  
    for (var i = 0; i < arrayB.length; i++) {
      var e = arrayA[i];
      if (arrayB.indexOf(e) === -1) {
        result.push(c[0] + e + c[1]);
      }   
    }
    for (var i = 0; i < arrayB.length; i++) {
      var e = arrayB[i];
      if (arrayA.indexOf(e) === -1) {
        result.push(e);
      }
    }

  return result;
}

