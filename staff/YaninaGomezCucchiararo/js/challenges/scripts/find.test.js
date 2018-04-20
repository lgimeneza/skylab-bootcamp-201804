'use strict';

test (
    function(){
        return find (['john', 'mery','jack'], function(v){
            return v.indexOf('a')> -1});
    },
    "find (['john', 'mery','jack'], function(v){ return v.indexOf('a')> -1}) should return 'mary'",
    function(result) {
        return result === 'mary';
    }
);
