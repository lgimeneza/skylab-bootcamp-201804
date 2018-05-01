'use strict';

describe('romanNumber', function() {
    it('toRomanNumbers(2) should return II', function(){
        expect(toRomanNumbers(2)).toBe('II') 
    });
    it('toRomanNumbers(true) should throw an error', function() {
        expect(function() {
            toRomanNumbers(true); 
        }).toThrow(Error('input num is not a number'));
    });
    it('toRomanNumbers("string") should throw an error', function() {
        expect(function() {
            toRomanNumbers("string"); 
        }).toThrow(Error('input num is not a number'));
    });
    it('toRomanNumbers([]) should throw an error', function() {
        expect(function() {
            toRomanNumbers([]); 
        }).toThrow(Error('input num is not a number'));
    });
});


