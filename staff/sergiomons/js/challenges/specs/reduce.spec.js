'use strict'

describe('reduce', function () {

 var a = [{ name: 'jeans', price: 10.5 }, { name: 't-shirt', price: 5.99 }, { name: 'socks', price: 19.99 }];

    it('toReduce(a, function(accum, v) { return accum + v; }, 0) should return 30,49', function() {
        var reduceOper= toReduce(a, function(accum, valueCurrent) {
                          if (valueCurrent.price > 10){
                              return accum + valueCurrent.price;
                           }  
                          return accum;
                        }, 0); 
        expect(reduceOper).toBe(30.49);
    });

    it('toReduce() without arguments should throw an error', function() {
        expect(function() {
            toReduce();
        }).toThrow(Error('input array is not an array'));
    });
    it('toReduce(undefined, handler) without first argument should throw an error', function() {
        expect(function() {
            toReduce(undefined, function(accum, valueCurrent) {
                 if (valueCurrent.price > 10){
                  return accum + valueCurrent.price;
                 }  
               return accum;
            }, 0);
        }).toThrow(Error('input array is not an array'));
    });
    it('toReduce(array) without second argument should throw an error', function() {
        expect(function() {
            toReduce(a);
        }).toThrow(Error('input handler is not a function'));
    });
});



