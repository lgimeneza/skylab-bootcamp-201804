function countChars(str){

    if(typeof str === "string"){
        return str.length;

        /*
    var val = 0;
    for(var i=0; i < str.length; i++){
        val++;
    }
    return val;*/
    }

    throw Error("input is not a string")


}