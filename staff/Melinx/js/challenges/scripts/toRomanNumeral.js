'use strict';

function toRomanNumeral(num){
    var dictionary = {1:"I", 2:"II", 3:"III", 4:"IV", 5:"V", 6:"VI", 7:"VII", 8: "VIII", 9:"IX", 10:"X"}
        for (var key in dictionary) {   
           if(key == num){
				return dictionary[key]
			}
        }

}


