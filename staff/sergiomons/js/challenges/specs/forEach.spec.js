'use strict';
  
describe('forEach', function() {
    var input = [1, 2, 3];
    var output = [];
    it('forEach(input, function(v) { output.push(v) }) should fulfill output with values from input', function(){
        forEach(input, function(v) {output.push(v)})
        expect(input).toEqual(output) 
    });
    it('forEach() without arguments should throw an error', function() {
        expect(function() {
            forEach(); 
        }).toThrow(Error('input array is not an array'));
    });
    it('forEach(undefined, function(v) { output.push(v) }) without first argument should throw an error', function() {
        expect(function() {
            forEach(undefined, function(v) { output.push(v) });
        }).toThrow(Error('input array is not an array'));
    });
    it('forEach(input) without second argument should throw and error', function() {
        expect(function() {
            forEach(input); 
        }).toThrow(Error('input handler is not a function'));
    });
});




