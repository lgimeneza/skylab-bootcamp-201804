function countWords(str){
    var val = 0;
    var res = str.split(" ");
    for(var i=0; i < res.length; i++){
        val++;
    }
    return val;
}