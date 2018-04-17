console.log("forEach: normal use")
foreach(array, function (v, i, array) { console.log(v, i, array) });

console.log("forEach: function own")
array.forEach(function(v,i,array){
    console.log(v,i,array)   
});