'use strict'

describe('randomCase', function () {

    var input = 'Hello My World';
    var output = toRandomCase(input);

    it('toRandomCase(Hello My World).toLowerCase should return random hello my world', function() {

        expect(toRandomCase(input).toLowerCase()).toBe(output.toLowerCase());
        expect(input).not.toBe(output)
    });

    it('toRandomCase(true) should throw an error', function() {
        expect(function() {
            toRandomCase(true);
        }).toThrow(Error('input text is not a string'));
    });
    it('toRandomCase(1) should throw an error', function() {
        expect(function() {
            toRandomCase(1);
        }).toThrow(Error('input text is not a string'));
    });
    it('toRandomCase([]) should throw an error', function() {
        expect(function() {
            toRandomCase([]);
        }).toThrow(Error('input text is not a string'));
    });
});

    
  
    