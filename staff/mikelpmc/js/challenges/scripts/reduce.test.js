'use strict';

var a = [
    { name: 'jeans', price: 10.5 },
    { name: 't-shirt', price: 5.99 },
    { name: 'socks', price: 19.99 }
];

function handler(accum, v) {
    if (v.price > 10) return accum + v.price;

    return accum;
}

var res = reduce(a, handler, 0);

console.log(
    `reduce([ { name: "jeans", price: 10.5 }, 
            { name: "t-shirt", price: 5.99 }, 
            { name: "socks", price: 19.99 }],
             handler(...), 
             0
        ) 
        should return 30.49`,
    res === 30.49,
    res
);

var err;
try {
    res = reduce('aaa', handler, 0);
} catch (error) {
    err = error;
} finally {
    console.log(
        `reduce('aaa', handler, 0) should throw an error`,
        err !== 'undefined',
        err
    );
}

var err;
try {
    res = reduce(a, 'aaa', 0);
} catch (error) {
    err = error;
} finally {
    console.log(
        `reduce(a, 'aaa', 0) should throw an error`,
        err !== 'undefined',
        err
    );
}

var err;
try {
    res = reduce(a, handler, 'aaa');
} catch (error) {
    err = error;
} finally {
    console.log(
        `reduce(a, handler, 'aaa') should throw an error`,
        err !== 'undefined',
        err
    );
}
