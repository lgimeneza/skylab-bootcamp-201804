'use strict';
/*concat('hola').concat('mundo').concat('!').concat('!').toString(); --> 'hola mundo';

function concat (text){
    return {
        concat: function(text2) {
            return{
                toString: function(){
                    return text + ' ' + text2;
                }
            };
        } 
    };
}
*/
function concat(text) {
    var accum = text;

    return{
        concat: function(text){
            accum = accum + " " + text;

            return this;
        },
        toString: function(){
            return accum;
        }
    }
}

concat(1).concat(2).concat(3).toString().concat(4); 

