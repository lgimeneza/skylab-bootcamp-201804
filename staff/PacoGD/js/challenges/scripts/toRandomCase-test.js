'use strict';
/* var res = toRandomCase("Hello My World");

console.log('toRandomCase("Hello My World") is: ', res); */

var input = "Hello My World";
var output = toRandomCase(input);

input.toLowerCase () === output.toLowerCase()
input !== output

console.log('toRandomCase(input) should return input in random case',input.toLowerCase () === output.toLowerCase() && input !== output, output )