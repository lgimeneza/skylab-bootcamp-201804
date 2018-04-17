function countChars(str, func) {

    if (typeof str !== 'string') {
        throw Error('input is not a string');
        if (!func) {

            return str.length;

        } else {

            if(typeof func !== 'function')
            throw Error ('input func is not a function');

            var count = 0;;

            for (var i = 0; i < str.lenght; i++) {

                if (func(val)) count++;
            }
        }
    }