'use strict'

describe('countChars test', function () {

    it("should countChars('hello world') return 11", function () {
        expect(countChars("hello world")).toBe(11);
    });

 
    it("should countChars(true) return trhow ", function () {
        expect(function () {
            countChars(true);
        }).toThrow(Error('input txt is not a string'));
    });

    it("should countChars([]) return trhow ", function () {
        expect(function () {
            countChars([]);
        }).toThrow(Error('input txt is not a string'));
    });

    it("should countChars('abracadabra') return 5", function () {
        expect(countChars('abracadabra', function (c) { return c === 'a'; })).toBe(5);
    });

    it("should countChars(('abracadabra', function (c) { return c === 'a') return trhow ", function () {
        expect(function () {
            countChars('abracadabra', "...");
        }).toThrow(Error('input func is not a function'));
    });


});