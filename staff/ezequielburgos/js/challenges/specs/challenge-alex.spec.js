'use strict'

describe("slotMachine", function () {

    describe('coinInsert()', function () {
        it('should coinIsert() be defined', function () {
            expect(coinInsert()).toBeDefined()
        });
    })

    describe('randomFruitArray(5)', function () {
        it('should randomFruitArray(5) be defined', function () {
            expect(randomFruitArray(5)).toBeDefined();
        });

        it('should randomFruitArray(true) should throw an error', function () {
            expect(function () {
                randomFruitArray(true);
            }).toThrow(Error('input parameter should be a number'));
        });

        it('should randomFruitArray("hello") should throw an error', function () {
            expect(function () {
                randomFruitArray("hello");
            }).toThrow(Error('input parameter should be a number'));
        });

        it('should randomFruitArray([1,2,3]) should throw an error', function () {
            expect(function () {
                randomFruitArray([1,2,3]);
            }).toThrow(Error('input parameter should be a number'));
        });

        it('should randomFruitArray(function (c){return c === "a"}) should throw an error', function () {
            expect(function () {
                randomFruitArray(function (c){return c === "a"});
            }).toThrow(Error('input parameter should be a number'));
        });
    })

    describe('fruitArraySlicer()', function () {
        it('should spy on fruit arra')
    })

    describe('oneTurnValue(arr)', function () {

    })


});

