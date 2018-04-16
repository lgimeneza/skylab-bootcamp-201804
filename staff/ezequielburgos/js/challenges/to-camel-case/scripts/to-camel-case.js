function toCamelCase(str) {
    var arr = [];
    arr = str.split(" ");

    var newArr = [];

    newArr.push(arr[0]);

    for (i = 1; i < arr.length; i++) {
        letterArr = arr[i].split("");
        letterArr[0] = letterArr[0].toUpperCase();
        newArr.push(letterArr.join(""));
    }

    return newArr.join("");

}


function toCamelCase2() {
    str = str.toLowerCase();
    var wordArray = str.split(" ");
    for (var i = 0; i < wordArray.length; i++) {
        wordArray[i] = wordArray[i].replace(wordArray[i][0], wordArray[i][0].toUpperCase());
    }
    return wordArray.join("");
}


function toCamelCase3() {
    for (i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            i++;
            str = str.replace(str.charAt(i), str.charAt(i).toUpperCase())
        }
    }
    return (str.split(" ").join(""));
}

// function toCamelCase4(str) {
//     if (typeof str === "string") {
//       var val = str.split(" ");

//       for (var i = 0; i < val.length; i++) {
//         val[i] = val[i].toLowerCase();

//         if(i > 0){
//           val[i] = val[i].replace(val[i][0], val[i][0].toUpperCase());
//         }

//       }
//       val = val.join("");
//       return val;
//     }

//     throw Error("input is not a string");
//   }