'use strict';

//como la función map crea una Array nueva debemos comparar el input con el output!.
var input = [1,2,3];

test(
    function(){
        return map(input, function(v){ return v**2});
    },
    'map ([1,2,3], function(v) { return v**2;}) should return [1,4,9]',
    function(result) {

        return input !== result && result.toString() === '1,4,9' &&input.toString() === '1,2,3';
    }
);
//testear sin enviar ningun argumento:
test(
    runWithErrorCapturing(
        function(){

        }
    ),
    'map() should throw an error if input array is undefined',
    function(result) {
        return result.message === 'input array is not valid'
    }  
);

//testear la funcion si enviamos un array pero no una funcion:
test(
    runWithErrorCapturing(
        function(){

        }
    ),
    'map([]) should throw an error if input handler is not valid',
    function(result) {
        return result.message === 'input handler is not valid'
    }  
);