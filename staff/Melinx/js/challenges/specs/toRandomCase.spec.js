'use strict';
 
describe('toRandomCase', function () { 

    it('should return random cases diff in input and output',
    function () {
        var input = 'hello world';
        var output = toRandomCase(input);

        expect(input.toLowerCase()).toBe(output.toLowerCase());
        expect(input).not.toBe(output);
    });

   it('should throw an error on toRandomCase(333)', function () {
    expect(function () {
        toRandomCase(1);
    }).toThrowError('str should be a string');
 });

});