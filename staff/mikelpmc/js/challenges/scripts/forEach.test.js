'use strict';

var arr = [1, 2, 3];

forEach(arr, function(v, i, arr) {
    console.log(v, i, arr);
});

var err;
try {
    forEach('arr', function(v, i, arr) {
        console.log(v, i, arr);
    });
} catch (error) {
    err = error;
} finally {
    console.log(
        "forEach('arr', ...) should throw an error",
        err !== 'undefined',
        err
    );
}

var err;
try {
    forEach(arr, 34);
} catch (error) {
    err = error;
} finally {
    console.log(
        'forEach(arr, 34) should throw an error',
        err !== 'undefined',
        err
    );
}
