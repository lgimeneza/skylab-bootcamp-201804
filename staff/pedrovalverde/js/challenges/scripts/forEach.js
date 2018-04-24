'use strict'
function forEach(a, func) {

    function iterate(index) {
        func(a[index]);
        if (index < a.length) {
            index++;
            iterate(index)
        }
    }
    iterate(0);
}