"use strict";

var res = toRandomCase("Hello World");

console.log('toRandomCase("10" should return X', res === "X", res);

var res = toRandomCase("Morenita reshulona");

console.log('toRandomCase("1" should return I', res === "I", res);

var res = toRandomCase("Cacatuas con pistachos");

console.log('toRandomCase("5" should return V', res === "V", res);

var input = "Hello My World";
var output = toRandomCase(input);

console.log('toRandomCase(input) should return input in random case', input.toLowerCase () === output.toLowerCase() && input !== output)

var error;

try {
  count = toRandomCase(4);
} catch (err) {
    error = err;
}finally{
  console.log("toRandomCase(4) should launch and error", error !== undefined, error);
}

error = undefined;

try {
  count = toRandomCase(true);
} catch (err) {
    error = err;
}finally{
  console.log("toRandomCase(true) should launch and error", error !== undefined, error);
}
