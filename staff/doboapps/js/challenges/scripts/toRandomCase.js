 'use strict';
 
 function toRandomNumeral(txt) {

    var myArrayOfWord=[];

    for (var i = 0; i < txt.length; i++){

          var letter = txt[i];          
            var random = Math.random() < 0.5;
            
            letter = random? letter.toUpperCase() : letter.toLowerCase();

          myArrayOfWord.push(letter); 

  }
return myArrayOfWord.join("");


}

