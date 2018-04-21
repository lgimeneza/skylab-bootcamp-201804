'use strict';

describe('countChars', function () {
    it('should return 11 on countChars("hello world")', function () {
        expect(countChars("hello world")).toBe(11);
    })

    it('should return 10 on countChars("0123456789"])', function () {
        expect(countChars("0123456789")).toEqual(10)
    });

    it('should throw an error on countChars(true)', function () {
        expect(function () {
            countChars(true);
        }).toThrow(Error('input text is not a string'));
    })

    it('should throw an error on countChars(1)', function () {
        expect(function () {
            countChars(1);
        }).toThrow(Error('input text is not a string'));
    })
    it('should return 5 on countChars("abracadabra", function(c) { return c === "a"; }', function () {
        expect(function () {
            countChars('abracadabra', '...');
        }).toThrow(Error('input condition is not a function'));
    });
});