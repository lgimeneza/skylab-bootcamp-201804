'use strict'

describe('toCamelCase', function () {
    it('toCamelCase("hello my world") should return helloMyWorld', function () {
        expect(toCamelCase('hello my world')).toBe('helloMyWorld');
    });

    it('toCamelCase("hi    there") should return hiThere', function () {
        expect(toCamelCase('hi    there')).toBe('hiThere')
    });

    it('toCamelCase(true) should throw an error', function () {
        expect(function () {
            toCamelCase(true);
        }).toThrow(Error('input str is not a string!!'));
    });

    it('toCamelCase(1) should throw an error', function () {
        expect(function () {
            toCamelCase(1);
        }).toThrow(Error('input str is not a string!!'));
    });

    it('toCamelCase([]) should throw an error', function () {
        expect(function () {
            toCamelCase([]);
        }).toThrow(Error('input str is not a string!!'));
    });

});