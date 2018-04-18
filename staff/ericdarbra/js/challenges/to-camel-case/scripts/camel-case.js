'use strict';

function toCamelCase(str){
    
    var lower = (str.toLowerCase()).split(" ");
    //var rep = lower.replace(/\s/g, '');
    for(var i = 1; i < lower.length; i++){
        lower[i] = lower[i][0].toUpperCase() + lower[i].slice(1);
        
    }
    return lower.join("");
}