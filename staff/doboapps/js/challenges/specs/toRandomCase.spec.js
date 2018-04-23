'use strict'


describe( 'toRandomNumeral.', function(){

    it("Should return text in random case')",function(){
  
            
            var input = "hello World";
            var output = toRandomNumeral(input);

            expect(input.toLowerCase()).toBe(output.toLowerCase());
            expect(input).not.toBe(output);
                      
    });


    it("Should toRandomNumeral() throw Error('It is not a String!')",function(){
        expect(function(){
            toRandomNumeral();        
                }).toThrow(Error('It is not a String!'));            
    });

    it("Should toRandomNumeral() throw Error('It is not a String!')",function(){
        expect(function(){
            toRandomNumeral(true);        
                }).toThrow(Error('It is not a String!'));            
    });

    it("Should toRandomNumeral() throw Error('It is not a String!')",function(){
        expect(function(){
            toRandomNumeral(2);        
                }).toThrow(Error('It is not a String!'));            
    });



});