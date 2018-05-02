'use strict';

var Calculator = function Calculator() {
    this._status = "";
    /* this._numbers = []; */
}

Calculator.prototype.status = function () {
    return parseInt(this._status); 
}
Calculator.prototype.one = function () {
    /* this._status = parseInt(this._status); */
    this._status += 1 
}
Calculator.prototype.two = function () {
    
    this._status += 2 
}
Calculator.prototype.three = function () {
    
    this._status += 3 
}
Calculator.prototype.four = function () {
    
    this._status += 4 
}
Calculator.prototype.five = function () {
    
    this._status += 5
}
Calculator.prototype.six = function () {
    
    this._status += 6 
}
Calculator.prototype.seven = function () {
    
    this._status += 7 
}
Calculator.prototype.eight = function () {
    
    this._status += 8 
}
Calculator.prototype.nine = function () {
    
    this._status += 9
}
Calculator.prototype.zero = function () {
    
    this._status += 0
}
Calculator.prototype.sum = function () {
    var a='a'
    this._status += a
    
}

var calc = new Calculator();
