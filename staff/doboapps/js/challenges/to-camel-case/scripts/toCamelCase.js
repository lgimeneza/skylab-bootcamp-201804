function toCamelCase(str) {

    var myArray = [];
    var sentence = "";
    str =str.toLowerCase;
    
    myArray = str.split(" ");

    myArray.map(word => {
        var capital = word[0].toUpperCase();
        word = capital + word.substr(1);
        sentence += word;
    })
    sentence = sentence[0].toLowerCase()+sentence.substr(1);
    
    return sentence;
}


