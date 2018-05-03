'use strict'



describe( 'Map.', function(){

    it("Should map([1,2,3,4],function(v){return v>2}) return [3,4]",function(){
        expect(map([1,2,3,4],function(v){return v>2})).toEqual([3,4]);
    });


    it("Should map([1,2,3,4],function(v){return v>5}) return []",function(){
        expect(map([1,2,3,4],function(v){return v>10})).toEqual([]);
    });


    it("Should map() throw Error(input arr is not an array)",function(){
        expect(function(){
            map(undefined,function(v){return v>2})       
                }).toThrow(Error('input arr is not an array'));            
    });


    it("Should map(undefined,function(v){return v>2}) throw Error(input arr is not an array)",function(){
        expect(function(){
            map();        
                }).toThrow(Error('input arr is not an array'));            
    });


    it("Should map([1,2,3,4]) throw Error(input arr is not an array)",function(){
        expect(function(){
            map([1,2,3,4]);        
                }).toThrow(Error('input handler is not a function'));            
    });




});