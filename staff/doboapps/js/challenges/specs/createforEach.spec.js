'use strict'

var input = [1, 2, 3];
var output=[];


describe( 'Create a forEach.2', function(){
    
    beforeEach(function() {
        forEach(input, function(value) {  output.push(value); })
    });

    it("Should forEach(input, function(elem, i, input) { output.push(value); }) return output with values from input",function(){
        expect(input).toEqual(output);
    });  

    afterEach(function() {
        output=[];
    });

    

    
    it("Should forEach()  return trhow Error('input arr is not an array')",function(){
        expect( function(){
                    forEach(); 
                }).toThrow(Error('input arr is not an array'));
    });  


    it("Should forEach(undefined,function(){console.log('hi!')})  return trhow Error('input arr is not an array')",function(){
        expect( function(){
                forEach(undefined,function(elem,i,input){ output.push(v);})
            }).toThrow(Error('input arr is not an array'));
    });  
    
    it("Should forEach(input)  return trhow Error('input handler is not a function')",function(){
        expect( function(){
                forEach(input,1)
            }).toThrow(Error('input handler is not a function'));
    });  


});


