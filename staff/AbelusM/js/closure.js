// // concat('hola').concat('mundo').toString(); // -> 'hola mundo'

// function concat(text){
//     return { 
// 		concat: function(text2){
//             return (text + ' ' + text2).toString();}}}
            
// concat('hola').concat('mundo')



concat(1).concat(2).concat(3).concat(4).toString();

function concat(text) {
    var accum = text;

    return {
        concat: function(text){
            accum = accum + ' ' + text;

            return this; 
        },
        toString: function() {
            return accum;
        }
    }
}
