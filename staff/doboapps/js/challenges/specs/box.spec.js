'use strict'



describe( 'Box.', function(){

    
    it("Should box.keep(true,'my secret') throw Error('invalid password')",function(){
        expect(function(){
            box.keep(true)
                }).toThrow(Error('invalid password'));            
        });

    it("Should box.keep('123',true)  throw Error('invalid secret')",function(){
        expect(function(){
            box.keep('123',true)
                }).toThrow(Error('invalid secret'));            
        });



    beforeEach(function() {
        box.keep('123', 'my secret');    

    });

    it("Should box.retrieve('123') return 'my secret'",function(){
        expect(box.retrieve('123')).toBe("my secret");
    });


    it("Should box.retrieve('1234') throw Error('wrong password')",function(){
        expect(function(){
            box.retrieve('1234')
                }).toThrow(Error('wrong password'));            
        });


        it("Should box.retrieve(true) throw Error('invalid password')",function(){
            expect(function(){
                box.retrieve(true)
                    }).toThrow(Error('invalid password'));            
            });


        

});