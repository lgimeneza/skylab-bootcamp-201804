a = [1, 2, 5, 6, 7]
var totalSum = 0;

console.log('Recursive version');

reduceRecursive(a, index, function (v) { return console.log(totalSum + v)});