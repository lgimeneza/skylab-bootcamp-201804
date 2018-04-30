'use strict'; 
    function toCamelCase(str) {
        str = str.toLowerCase();
        var wordArray = str.split(" ");

        for (var i = 1; i < wordArray.length; i++) {
            wordArray[i] = wordArray[i].replace(wordArray[i][0], wordArray[i][0].toUpperCase());
        }
        return wordArray.join("");
     }

     