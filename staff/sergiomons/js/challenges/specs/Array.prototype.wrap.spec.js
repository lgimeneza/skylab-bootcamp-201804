'use strict';

describe('Array.prototype.wrap', function() {

    var input = [1, 2, 3];

    it("input.wrap('[', ']'); should return a new array with values ['[1]', '[2]', '[3]']", function(){
        var wrapOper1 = input.wrap('[', ']');
        expect(wrapOper1).toEqual(['[1]', '[2]', '[3]']); 
        expect(input).toEqual([1, 2, 3]); 
    });
    it("input.wrap('[', ']').wrap('{', '}'); should return a new array with values ['{[1]}', '{[2]}', '{[3]}']", function(){
        var wrapOper2 = input.wrap('[', ']').wrap('{', '}');
        expect(wrapOper2).toEqual(['{[1]}', '{[2]}', '{[3]}']); 
        expect(input).toEqual([1, 2, 3]); 
    });
    it("input.wrap('[', ']').wrap('{', '}').wrap('<', '>'); should return a new array with values ['<{[1]}>', '<{[2]}>', '<{[3]}>']", function(){
        var wrapOper3 = input.wrap('[', ']').wrap('{', '}').wrap('<', '>');
        expect(wrapOper3).toEqual(['<{[1]}>', '<{[2]}>', '<{[3]}>']); 
        expect(input).toEqual([1, 2, 3]); 
    });
    it('input.wrap(); - without first argument - should throw an error', function() {
        expect(function() {
            input.wrap();
        }).toThrow(Error('input left is not valid'));
    });
    it('input.wrap(""); - without second argument - should throw an error', function() {
        expect(function() {
            input.wrap(''); 
        }).toThrow(Error('input right is not valid'));
    });
});

