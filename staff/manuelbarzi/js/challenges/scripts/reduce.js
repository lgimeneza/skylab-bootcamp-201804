'use strict';

function reduce(arr, handler, init) {
    if (typeof arr !== 'object' || !arr instanceof Array) throw Error('input array is not an array');

    if (typeof handler !== 'function') throw Error('input handler is not a function');

	var iterate = function(accum, index) {
		var res = handler(accum, arr[index]);

		if (++index < arr.length)
			return iterate(res, index)
		
		return res;
    }

	return iterate(init || 0, 0);
}