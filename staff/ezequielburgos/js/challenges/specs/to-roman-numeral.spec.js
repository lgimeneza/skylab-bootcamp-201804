'use strict'

describe('toRomanNumeral', function () {
    it('toRomanNumeral(5) should return "V"', function () {
        expect(toRomanNumeral(5)).toBe("V");
    })

    it('toRomanNumeral(true) should throw an error', function () {
        expect(function () {
            toRomanNumeral(true);
        }).toThrow(Error('input should be a number!!'))
    })

    it('toRomanNumeral(13) should throw an error', function () {
        expect(function () {
            toRomanNumeral(13);
        }).toThrow(Error('The number introduced must be contained in between 1 and 10!'))
    })

    it('toRomanNumeral([]) should throw an error', function () {
        expect(function () {
            toRomanNumeral([]);
        }).toThrow(Error('input should be a number!!'))
    })

})