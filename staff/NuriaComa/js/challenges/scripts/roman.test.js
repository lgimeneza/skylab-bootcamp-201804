"use strict"

console.log(">>ROMAN")

test(
    function(){
        return romanNum(2);
    },
    'to Roman Numbers(2) should return II',
    function(result){
        return result === "II";
    }
);

test(
    function(){
        return romanNum(4);
    },
    'to Roman Numbers(2) should return IV',
    function(result){
        return result === "IV";
    }
);
test(
    function(){
        return romanNum(6);
    },
    'to Roman Numbers(6) should return VI',
    function(result){
        return result === "VI";
    }
);

test(
    function(){
        return romanNum(9);
    },
    'to Roman Numbers(6) should return IX',
    function(result){
        return result === "IX";
    }
);

test(
    withErrorCapturing(function() {
        romanNum(true);
    }),
    'romanNum(true) should throw an error',
    function(result) {
        return result.message === "input is not a string";
    }
);

test(
    withErrorCapturing(function() {
        romanNum("1");
    }),
    'romanNum("1") should throw an error',
    function(result) {
        return result.message === "input is not a string";
    }
);
