'use strict'

var myArr = [1,2,3];

var newArr1 =myArr.wrap("[","]").wrap("(",")");
var newArr2 =myArr.wrap("[","]").wrap("(",")").wrap("<",">");

console.log(newArr1);
console.log(newArr2);

var input =[1,2,3];

test(
    function(){
        return input.wrap("[","]"); //->
    },
    "input.wrap('[',']') should return a new array whit value -> ['[1]','[2]','[3]']",
    function(result){
        return result.toString() === ['[1]','[2]','[3]'].toString;
    }
)

