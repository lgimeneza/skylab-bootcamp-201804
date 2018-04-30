'use strict';

test (
    function(){
        return find(['john, mary, jack']), function (v) { return v.indexOf('a')}
    }, 
)

