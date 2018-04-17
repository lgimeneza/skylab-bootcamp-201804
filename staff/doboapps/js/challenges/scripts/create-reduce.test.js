


var myPriceA = a.reduce(function (total, element) {

    if (element.price > 10)
        total += element.price;

    return total;

}, 0);

console.log("reduce: normal use",myPriceA)


var myPriceB = reduce(a, function (total,element) {

    if (element.price > 10)
        total += element.price;

    return total;
})

console.log("reduce: function own",myPriceB);
