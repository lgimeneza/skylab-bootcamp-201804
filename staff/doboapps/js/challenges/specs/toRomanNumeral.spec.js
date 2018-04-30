'use strict'


describe( 'toRomanNumeral.', function(){

    it("Should toRomanNumeral(9) return 'IX'",function(){
        expect( toRomanNumeral(9) ).toBe("IX");
    });



    it("Should toRomanNumeral() throw Error('input num is not a number')",function(){
        expect(function(){
            toRomanNumeral();        
                }).toThrow(Error('input num is not a number'));            
    });

    it("Should toRomanNumeral() throw Error('input num is not a number')",function(){
        expect(function(){
            toRomanNumeral(true);        
                }).toThrow(Error('input num is not a number'));            
    });

    it("Should toRomanNumeral() throw Error('input num is not a number')",function(){
        expect(function(){
            toRomanNumeral([]);        
                }).toThrow(Error('input num is not a number'));            
    });



});