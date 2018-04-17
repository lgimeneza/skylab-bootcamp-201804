function cube(num) {

    if (typeof num == "number") {
        return num * num * num;
    } else if (typeof num == "object") {
        var cubing = num.map(function (v) { return v * v * v });
        return cubing;
    }

}





