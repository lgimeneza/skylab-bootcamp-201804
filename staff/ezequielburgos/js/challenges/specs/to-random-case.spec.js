'use strict'

describe('toRandomCase', function(){

    // it('should return text in random case', function(){
    //     var input = 'Hello World';


    // })

    it('toRandomCase(true) shoud throw an error', function(){
        expect(function(){
            toRandomCase(true);
        }).toThrow(Error('input str is not a string!!'));
    });

    it('toRandomCase(1) shoud throw an error', function(){
        expect(function(){
            toRandomCase(1);
        }).toThrow(Error('input str is not a string!!'));
    });

    it('toRandomCase([]) shoud throw an error', function(){
        expect(function(){
            toRandomCase([]);
        }).toThrow(Error('input str is not a string!!'));
    });
});