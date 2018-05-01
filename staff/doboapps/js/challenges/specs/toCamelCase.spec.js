'use strict'


describe( 'toCamelCase.', function(){

    it("Should toCamelCase('hello MY world') return 'helloMyWorld'",function(){
        expect( toCamelCase('hello my world') ).toBe("helloMyWorld");
    });



    it("Should toCamelCase() throw Error('input str is not a string')",function(){
        expect(function(){
            toCamelCase();        
                }).toThrow(Error('input str is not a string'));            
    });

    it("Should toCamelCase() throw Error('input str is not a string')",function(){
        expect(function(){
            toCamelCase(true);        
                }).toThrow(Error('input str is not a string'));            
    });

    it("Should toCamelCase() throw Error('input str is not a string')",function(){
        expect(function(){
            toCamelCase(2);        
                }).toThrow(Error('input str is not a string'));            
    });



});