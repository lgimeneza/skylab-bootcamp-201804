'use strict'


function Calculator() {

    this._status = [];

}

Calculator.prototype.status = function (target) {
        return this._status[this._status.length - 1]
}


Calculator.prototype.number = function (number) {
    if (typeof number !== 'number') throw Error('invalid number');

    this._status.push(number);

    console.log(this._status);
    return this._number
}

Calculator.prototype.sum = function () {
    return this._sum;
}

Calculator.prototype.subs = function () {
    return this._subs;
}

Calculator.prototype.mul = function () {
    return this._mul;
}

Calculator.prototype.div = function () {
    return this._div;
}

Calculator.prototype.negate = function () {
    return this._negate;
}

Calculator.prototype.result = function () {
    return this._result;
}



var calc = new Calculator();
calc.number(1)


