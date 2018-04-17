// REDUCE RECURSIVE:

function reduce(arr, func, initial) {
    var accum = 0;

    var iterate = function (index) {
        accum = func(accum, arr[index]);

        if (++index != arr.length) {
            iterate(index);
        }
    }
    iterate(0);
    return accum;
}

var a = [{ name: 'jeans', price: 10.5 }, { name: 't-shirt', price: 5.99 }, { name: 'socks', price: 19.99 }];

reduce(a, function (accum, v) {
    return accum + v.price;
}, 0);

