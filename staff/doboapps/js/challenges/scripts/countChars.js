 'use strict';
 
 function countChars(txt, func) {
     if (typeof txt !== 'string')
         throw Error('input txt is not a string');
 
     if (!func) {
             return txt.length;
     } else {
         if (typeof func !== 'function')
             throw Error('input func is not a function');
 
         var count = 0;
         
         for (var i = 0; i < txt.length; i++  ) {
             var val = txt[i];
 
             if (func(val)) count++  ;
         }
 
         return count;
     }
}