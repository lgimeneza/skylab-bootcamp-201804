'use strict';
  
describe('map', function() {
    var input = [1, 2, 3];

    it('map([1, 2, 3], function(v) { return v**2; }) should return a new array with values [1, 4, 9]', function(){
        var testcase = map(input, function(v) { return v**2; });   
        expect(testcase).toEqual([1, 4, 9]);
        expect(testcase).not.toBe([1, 2, 3]);
        expect(input).toEqual([1, 2, 3]);
    });
    it('map() should throw an error if input array is not valid', function() {
        expect(function() {
            map(); 
        }).toThrow(Error('input array is not valid'));
    });
    it('map([]) should throw an error if input handler is not valid', function() {
        expect(function() {
            map([])
        }).toThrow(Error('input handler is not valid'));
    });
});



