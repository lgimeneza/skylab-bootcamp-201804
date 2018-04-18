'use strict';
function foreach(arr, handler) {

    if (Array.isArray(arr) == false &&  typeof handler !== 'function')
        throw Error('input is not valid');

    var iterate = function (index) {
        handler(arr[index], index, arr)
	if (++index < arr.length) iterate(index);
    }

    iterate(0)
}



