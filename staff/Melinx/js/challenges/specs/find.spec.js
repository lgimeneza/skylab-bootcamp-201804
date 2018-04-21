'use strict';

describe('find', function () {

    it("should return 'jack' on find(['john', 'mary', 'jack'], function(v) { return v.indexOf('c') > -1; })",
        function () {
            expect(find(['john', 'mary', 'jack'], function(v) { return v.indexOf('c') > -1; }))).toBe('jack')
        });

    it('should return 10 on find("0123456789"])', function () {
        expect(find("0123456789")).toEqual(10)
    });

    it('should throw an error on find(true)', function () {
        expect(function () {
            find(true);
        }).toThrow(Error('input text is not a string'));
    })

    it('should throw an error on find(1)', function () {
        expect(function () {
            find(1);
        }).toThrow(Error('input text is not a string'));
    });

    describe('find with condition parameter', function () {

        it('should return 5 on find("abracadabra", function(c) { return c === "a"; }', function () {
            expect(function () {
                find('abracadabra', '...');
            }).toThrow(Error('input condition is not a function'));
        });
    });