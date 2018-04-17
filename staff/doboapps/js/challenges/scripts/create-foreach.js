var array = [1, 2, 3];


function foreach(arr, callback) {

    var iterate = function (i) {
        callback(arr[i], i, array);
        if (++i < arr.length)
            iterate(i);
    };    
    iterate(0);
}


