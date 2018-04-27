'use strict'


function Calculator() {
    this._status = "";
    this._oldStatus = [25];
    this._newStatus = [6];
    this._sumStatus = false;
}

Calculator.prototype.status = function () {
    return parseInt(this._status);
}

Calculator.prototype.one = function () {
    this._status += 1;
    console.log(this._status)
}
Calculator.prototype.two = function () { 
    this._status += 2;
    console.log(this._status)
}
Calculator.prototype.three = function () {
    this._status += 3;
    console.log(this._status)
 }
Calculator.prototype.four = function () {
    this._status += 4;
    console.log(this._status)
 }
Calculator.prototype.five = function () {
    this._status += 5;
    console.log(this._status)
 }
Calculator.prototype.six = function () {
    this._status += 6;
    console.log(this._status)
 }
Calculator.prototype.seven = function () {
    this._status += 7;
    console.log(this._status)
 }
Calculator.prototype.eight = function () {
    this._status += 8;
    console.log(this._status)
 }
Calculator.prototype.nine = function () {
    this._status += 9;
    console.log(this._status)
 }
Calculator.prototype.zero = function () {
    this._status += 0;
    console.log(this._status)
 }


Calculator.prototype.sum = function () {
    this._sumStatus = true;
    if (this._sumStatus === true && this._newStatus > 0){
    
    };
}

Calculator.prototype.subs = function () {
    this._subs;
}

Calculator.prototype.mul = function () {
    this._mul;
}

Calculator.prototype.div = function () {
    this._div;
}

Calculator.prototype.negate = function () {
    this._negate;
}

Calculator.prototype.result = function () {
    // this._numbers.push(parseInt(this._status))
    // this._status = "";
    if (true){}
}



var calc = new Calculator();

// calc.status();

// calc.two();
// calc.two();
// calc.sum()
// calc.three()
// calc.one()
// calc.result()
