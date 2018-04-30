'use strict'



describe( 'Array prototype wrap.', function(){

    it("Should [1,2,3].wrap('[',']') return ['[1]','[2]','[3]']",function(){
        expect([1,2,3].wrap('[',']')).toEqual(['[1]','[2]','[3]']);
    });


});