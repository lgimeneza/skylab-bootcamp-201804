

function reduce(arr, callback) {

    if (typeof arr !== 'object' || !arr instanceof Array) throw Error('input array is not an array');

    var total=0;
    var iterate = function (i) {
        total=callback(total,arr[i]);
        if (++i < arr.length)
        iterate(i)

        return total;
    }    

    return iterate(0);

}


