'use strict'


describe( 'toRandomNumeral.', function(){



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