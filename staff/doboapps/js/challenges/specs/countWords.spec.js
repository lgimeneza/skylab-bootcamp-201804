'use strict'

describe('countWords test', function () {

    it("should countWords('hello my world') return 3", function () {
        expect(countWords("hello my world")).toBe(3);
    });

 
    it("should countWords(2) return trhow ", function () {
        expect(function () {
            countWords(2);
        }).toThrow(Error('input str is not a string'));
    });

    it("should countWords(true) return trhow ", function () {
        expect(function () {
            countWords(true);
        }).toThrow(Error('input str is not a string'));
    });

    it("should countWords([]]) return trhow ", function () {
        expect(function () {
            countWords([]);
        }).toThrow(Error('input str is not a string'));
    });

});