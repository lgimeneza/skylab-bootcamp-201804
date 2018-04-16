// function countChars(str){
//     if (typeof str === 'string')
//         return str.length

//     throw Error('input is not a string');
// }

function countChars(str, func) {
    if (typeof str !== 'string')
        throw Error('input str is not a string');

    if (!func) {
            return str.length;
    } else {
        if (typeof func !== 'function')
            throw Error(alert('input func is not a function'))

        var count = 0;
        
        for (var i = 0; i < str.length; i++) {
            var val = str[i];

            if (func(val)) count++;
        }

        return count;
    }
}