'use strict';

test(function() {
    return [1,2,3].wrap("[","]");
},
'[1,2,3].wrap("[","]") should return [[1],[2],[3]]',
function (result) {
   return result.toString() ===["[1]","[2]","[3]"].toString();
}
);

test(function() {
    return [1,2,3].wrap("[","]").wrap("{","}");
},
'[1,2,3].wrap("[","]").wrap("{","}" should return [{[1]},{[2]},{[3]}]',
function (result) {
    return result.toString() ===["{[1]}","{[2]}","{[3]}"].toString();
}
);