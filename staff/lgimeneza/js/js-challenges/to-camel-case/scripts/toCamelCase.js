'use strict';

function toCamelCase(str){


    if (typeof str == 'string'){

        var ret;
        ret = str.split(' ');
    
        ret[0] = ret[0].toLowerCase();
    
        for (var i = 1; i < ret.length; i++){
            ret[i] = ret[i].charAt(0).toUpperCase() + ret[i].slice(1);
        }
    
        return ret.join("");

    }

    throw Error('input is not a string')

}