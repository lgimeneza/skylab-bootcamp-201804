'use strict';
function cube(numbers){
    if (numbers instanceof Array || typeof numbers === 'number'){
        if (numbers instanceof Array){
            for(var i=0;i<numbers.length;i++){
                numbers[i]= numbers[i]**3;
            }
            return numbers;
        }else{
            return numbers**3;
        }
    }


    throw Error('input is wrong type')
}