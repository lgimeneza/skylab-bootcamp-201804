"use strict";

var num = numbersToCube(2);

console.log('numberToCube("2") should return 8', num === 8, num);

var num = numbersToCube(3);

console.log('numberToCube("3") should return 27', num === 27, num);

var num = numbersToCube([1, 2, 3]);
var result = [1, 8, 27];
result = result.toString();
console.log(result);

console.log(
  "numberToCube([1, 2, 3]) should return [1, 8, 27]",
  num.toString() === result,
  num
);

try {
  count = numbersToCube("casa");
} catch (err) {
  console.log(
    "numbersToCube('casa') should launch and error",
    err !== undefined,
    err
  );
}

try {
  count = numbersToCube([1, 5, "casa", 8]);
} catch (err) {
  console.log(
    "numbersToCube([1,5,'casa',8]) should launch and error",
    err !== undefined,
    err
  );
}
