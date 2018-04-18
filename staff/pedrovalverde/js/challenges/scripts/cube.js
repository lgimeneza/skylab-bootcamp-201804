'case strict'

/** */

function cube(value) {
    if (typeof (value) == 'number') {
        return value * value * value;
    } else if (typeof (value) == 'object') {
        var res = [];
        for (var aux in value) {
            var temp = value[aux]
            res.push(temp ** 3);
        }
        return res;
    }
}
