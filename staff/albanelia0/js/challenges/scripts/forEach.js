//para hacer números aleatorio sin un for

function forEach(arr, handler) {
  if (typeof arr !== 'object' || !arr instanceof Array) throw Error('input array is not an array');
  if (typeof handler !== 'function') throw Error('input handler is not a function');
  
  var iterate = function (index) {
    handler(arr[index], index, arr)
	if (++index < arr.length) iterate(index);
  }

  iterate(0);
}



