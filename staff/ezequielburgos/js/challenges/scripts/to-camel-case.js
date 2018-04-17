function toCamelCase(str) {
    if (typeof str !== 'string')
        throw Error('input str is not a string!!');

    // replace multiple white spaces for one
    str = str.replace(/  +/g, ' ');

    // create an array of words
    var arr = [];
    arr = str.split(" ");

    var newArr = [];
    newArr.push(arr[0]);
    // toUpperCase() all first letters
    for (i = 1; i < arr.length; i++) {
        letterArr = arr[i].split("");
        letterArr[0] = letterArr[0].toUpperCase();
        newArr.push(letterArr.join(""));
    }

    return newArr.join("");

}

// here's another way to do it:

// function toCamelCase2(str) {

//     str = str.toLowerCase();
//     var wordArray = str.split(" ");
//     for (var i = 1; i < wordArray.length; i++) {
//         wordArray[i] = wordArray[i].replace(wordArray[i][0], wordArray[i][0].toUpperCase());
//     }
//     return wordArray.join("");


// }
