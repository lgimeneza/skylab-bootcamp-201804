'use strict'




describe( 'Create a forEach', function(){
        
    var input = [1, 2, 3];
    var output=[];  
    

    it("Should forEach(input, function(elem, i, input) { output.push(value); }) return output with values from input",function(){
        forEach(input, function(value) {  output.push(value); })
        expect(input).toEqual(output);
    });  

    
    it("Should forEach() trhow Error('input arr is not an array')",function(){
        expect( function(){
                    forEach(); 
                }).toThrow(Error('input arr is not an array'));
    });  


    it("Should forEach(undefined,function(){)}) trhow Error('input arr is not an array')",function(){
        expect( function(){
                forEach(undefined,function(){})
            }).toThrow(Error('input arr is not an array'));
    });  
    
    it("Should forEach(input) trhow Error('input handler is not a function')",function(){
        expect( function(){
                forEach(input,1)
            }).toThrow(Error('input handler is not a function'));
    });  


});


