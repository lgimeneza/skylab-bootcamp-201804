function toCamelCase(str){
    //TODO

    return  // res -> "helloMyWorld"

    function tocamelCase(str) { 
        return str.toLowerCase().replace(/-(.)/g, function(match, group1) {
            return group1.toUpperCase();
        });
    }

    
}
