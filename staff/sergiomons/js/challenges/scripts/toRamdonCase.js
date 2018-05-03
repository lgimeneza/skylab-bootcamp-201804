  'use strict'
  function toRandomCase(text) {
        if(typeof text !== "string") throw Error('input text is not a string');
        
         var arrayOfLetters = text.split("");
        for (var i=0; i<arrayOfLetters.length;i++) {
          var randomNumber = Math.random() > 0.5;
            if (randomNumber === true) 
             arrayOfLetters[i]=arrayOfLetters[i].toLowerCase();        
             if (randomNumber === false) 
             arrayOfLetters[i]=arrayOfLetters[i].toUpperCase(); 
        }
        return arrayOfLetters.join("");
  }