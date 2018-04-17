var a = [{ name: 'jeans', price: 10.5 }, { name: 't-shirt', price: 5.99 }, { name: 'socks', price: 19.99 }];


function reduce(arr, callback) {
    var total=0;
    var iterate = function (i) {
        total=callback(total,arr[i]);
        if (++i < arr.length)
        iterate(i)

        return total;
    }    

    return iterate(0);

}


