'use strict'



class Calculator {
    constructor() {
        this._history = []
    }

    one() { this._history.push(1) }
    two() { this._history.push(2) }
    three() { this._history.push(3) }
    four() { this._history.push(4) }
    five() { this._history.push(5) }
    six() { this._history.push(6) }
    seven() { this._history.push(7) }
    eight() { this._history.push(8) }
    nine() { this._history.push(9) }
    zero() { this._history.push(0) }

    sum() { return this._history.push('+') }

    subs() { return this._history.push('-') }

    mul() { return this._history.push('*') }

    div() { return this._history.push('/') }

    status() {

        let last = this._history[this._history.length - 1]
            if (typeof last === 'number') return last

            else {
                return this.result()
            }
        
       // return parseInt(this._history.join(''))

    }
    result() {
        
        console.log(this._history)
    
    }

}