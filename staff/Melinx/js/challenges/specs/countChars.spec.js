'use strict';

describe('countChars', function () {
    it('should countChars("hello world") should return 11', function () {
        expect(countChars("hello world")).toBe(11);
    })

    it('should countChars("0123456789"]) return 10', function () {
        expect(countChars("0123456789")).toEqual(10)
    });

    it('should countChars(true) throw an error', function () {
        expect(function () {
            countChars(true);
        }).toThrow(Error('input text is not a string'));
    })

    it('should countChars(1) should throw an error', function () {
        expect(function () {
            countChars(1);
        }).toThrow(Error('input text is not a string'));
    })
});


it('should countChars("abracadabra", function(c) { return c === "a"; }', function () {
    expect(function () {
        countChars('abracadabra', '...');
    }).toThrow(Error('input condition is not a function'));
});

