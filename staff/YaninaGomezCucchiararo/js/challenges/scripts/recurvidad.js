'use strict';

// pasar una numero 'n' que se multiplique por 'm'

function multiplicacion ( n, m){
    var result= 0;

    function iterar(index){
        result += n;
        
        if( ++index < m){
            iterar(index);
        }
    }
    iterar (0);

    return result;
}
multiplicacion(5,6);


// numeros 

function fibo (n){

    if( n === 1){
        return 1;
    }

    if ( n === 2){
        return 1;
    } else {
        return fibo(n -1) + fibo (n - 2);
    }

    for ( var i = 1; i < 7; i++){

        console.log(fibo(n));
    }
}