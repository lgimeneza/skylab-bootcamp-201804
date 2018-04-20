'use strict';

function countWords(str){

    if (typeof str !== 'string')
        throw Error('input str is not a string');
        
        var result = str.split(' ').length;;
        return result;
        

        if (!condition) {
            return text.length;
        }
            // chk condition is valid, must be a function
            if (typeof condition !== 'function')
                throw Error('input condition is not a function');
    
            var count = 0;
    
            for (var i = 0; i < text.length; i++) {
                var val = text[i];
    
            if (condition(val)) count++;
        }
    
        return count;
    }
    


