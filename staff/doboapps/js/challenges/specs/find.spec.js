'use strict'



describe( 'Find.', function(){

    it("Should find([1,2,3,4],function(v){return v>2}) return 3",function(){
        expect(find([1,2,3,4],function(v){return v>2})).toEqual(3);
    });


    it("Should find([1,2,3,4],function(v){return v>5}) return undefined",function(){
        expect(find([1,2,3,4],function(v){return v>5})).toEqual(undefined);
    });


    it("Should find() throw Error(input arr is not an array)",function(){
        expect(function(){
            find();        
                }).toThrow(Error('input arr is not an array'));            
    });


    it("Should find(undefined,function(v){return v>2}) throw Error(input arr is not an array)",function(){
        expect(function(){
            find(undefined,function(v){return v>2})        
                }).toThrow(Error('input arr is not an array'));            
    });


    it("Should find([1,2,3,4]) throw Error(input arr is not an array)",function(){
        expect(function(){
            find([1,2,3,4]);        
                }).toThrow(Error('input handler is not a function'));            
    });




});