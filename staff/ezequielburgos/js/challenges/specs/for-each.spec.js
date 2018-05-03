'use strict'

describe('forEach()', function () {

    it('should fulfill output with input values', function () {
        var input = [1, 2, 3];
        var output = [];

        forEach(input, function (v) { output.push(v) })

        expect(input.length).toBe(output.length);
        expect(input).toEqual(output);

    });

    // THIS EXAMPLE IS USING JASMINE SPIES!!
    it('should fulfill output with input values', function () {
        var input = [1, 2, 3];
        var output = [];

        spyOn(output, 'push').and.callThrough();

        forEach(input, function (v) { output.push(v) });
        expect(output.push).toHaveBeenCalled();
        expect(output.push.calls.count()).toEqual(3);

        expect(input.toString()).toEqual(output.toString());
    });

    it('It should throw error if no arguments', function(){
        expect(function(){
            forEach();
        }).toThrow(Error('input array is not an array'))
    });

    it('it should throw error when no first argument', function(){
        expect(function(){
            forEach();
        }).toThrow(Error('input array is not an array'))
    });

    // it('should throw error when no second argument', function(){
    //     expect(function(){
    //         forEach();
    //     }).toThrow(Error('input handler is not a function'))
    // });

});