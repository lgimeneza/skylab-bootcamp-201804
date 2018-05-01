'use strict'



describe( 'Convert an amount to coins.', function(){

    it("Should getCoins(1048,[500,200,100,50,20,10,5,2,1]) return [500, 500, 20, 20, 5, 2, 1]",function(){
        expect(getCoins(1048,[500,200,100,50,20,10,5,2,1])).toEqual([500, 500, 20, 20, 5, 2, 1]);
    });

    it("Should getCoins(1048,[]) return []",function(){
        expect(getCoins(1048,[])).toEqual([]);
    });

    it("Should getCoins('twenty',[20,10,5,2,1]) return trhow Error('input amount is not a number')",function(){
        expect(function(){
            getCoins('twenty',[20,10,5,2,1]);        
                }).toThrow(Error('input amount is not a number'));            
        });


    it("Should getCoins(1048,true) return trhow Error('input coins is not a Array')",function(){
        expect(function(){
            getCoins(1048,true);        
                }).toThrow(Error('input coins is not a Array'));            
        });

});