function cube(value) {

    var arrayCube = [];

    if (typeof (value) == 'number') {
        //console.log(Math.pow(value, 3))
        return Math.pow(value, 3);

    } else if (typeof (value) == 'object') {

        for (var i = 0; i < value.length; i++) {

            arrayCube.push(Math.pow(value[i], 3));
        }
        //console.log(arrayCube);
        return arrayCube;
    }
}