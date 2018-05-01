'use strict';

const Calculator = (function () {
    class Calculator {
        constructor() {
            this._status = 0;
            this.accum;
        }

        one() {
            this._status += '1'
            return 1;
        }
        two() {
            this._status += '2'
            return 2;
        }
        three() {
            this._status += '3'
            return 3;
        }
        four() {
            this._status += '4'
            return 4;
        }
        five() {
            this._status += '5'
            return 5;
        }
        six() {
            this._status += '6'
            return 6;
        }
        seven() {
            this._status += '7'
            return 7;
        }
        eight() {
            this._status += '8'
            return 8;
        }
        nine() {
            this._status += '9'
            return 9;
        }
        zero() {
            this._status += '0'
            return 0;
        }
        status() {
               return parseInt(this._status)
            }
        sum() {
            this._status;
            this.accum = parseInt(this.status);
            return parseInt(this.accum) + parseInt(this._status)
        }
    }
    return Calculator
})();
