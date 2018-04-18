
function reduce(arr, func) {
  if (typeof arr !== 'object' || !arr instanceof Array) throw Error('input array is not an array');
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    count = func(count, arr[i]);
  }
  return count;
}


