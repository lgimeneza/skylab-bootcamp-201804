function toCamelCase(str) {

    if (typeof str !== 'string')
    throw Error('input str is not a string');


    var sentence = "";
    str = str.toLowerCase();
    
    var myArray = str.split(" ");

    myArray.map(word => {
        var capital = word[0].toUpperCase();
        word = capital + word.substr(1);
        sentence += word;
    })
    sentence = sentence[0].toLowerCase()+sentence.substr(1);
    
    return sentence;
}


