function toRandomCase(text){

    if (typeof text !== 'string'){
        throw Error('input text is not a string');
    }

    var result = "";
    text = text.toLowerCase();
    var textArr = text.split("");

    for (var i = 0; i < textArr.length; i++){

        // Get a random boolean
        var random_boolean = Math.random() >= 0.5;

        if (random_boolean){
            result += textArr[i].toUpperCase();
        } else {
            result += textArr[i];
        }
        
    }

    return result;
}