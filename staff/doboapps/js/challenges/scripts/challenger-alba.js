'use strict';

/**
 * 
 * Convert an amount to coins.
 * 
 * @example
 * 
 * var result = getCoins(48,[500,200,100,50,20,10,5,2,1])-->  [20,20,5,2,1]
 * 
 * @param {number} - The first input is the amount to convert
 * 
 * @param {Array} - The second input is Collection of bills/coins for possible use.

 * 
 * @throws - if first and second input is not valid
 * 
 * @returns {Array} - Array with a collection of bills/coins, that form the amount received as the first parameter.
 * 
 */

function getCoins(amount,coins){

    if((typeof amount)!="number") throw Error('input amount is not a number');

    if(!(coins instanceof Array)) throw Error('input coins is not a Array')

    var arrResult =[];

    for (var i = 0; i < coins.length; i++) {

        while( (amount -coins[i]) >= 0 ){

            arrResult.push(coins[i]);
            amount-=coins[i];
        }
    }  

    return arrResult;
};

