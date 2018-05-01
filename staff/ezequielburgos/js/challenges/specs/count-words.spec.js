'use strict'

describe('countWords', function(){
    it('countWords("Hello World") should return 11', function(){
        expect(countWords('Hello World')).toBe(2);
    })

    it('countWords(true) should throw an error', function(){
        expect(function(){
            countWords(true);
        }).toThrow(Error('input text is not a string'));
    })
    
    it('countWords([]) should throw an error', function(){
        expect(function(){
            countWords([]);
        }).toThrow(Error('input text is not a string'));
    })

})