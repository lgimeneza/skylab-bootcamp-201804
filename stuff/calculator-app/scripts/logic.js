'use strict'

class Calculator {
    constructor() {
        this._history = []
    }

    zero() { this._history.push(0) }
    one() { this._history.push(1) }
    two() { this._history.push(2) }
    three() { this._history.push(3) }
    four() { this._history.push(4) }
    five() { this._history.push(5) }
    six() { this._history.push(6) }
    seven() { this._history.push(7) }
    eight() { this._history.push(8) }
    nine() { this._history.push(9) }

    sum() {
        this._history.push('+')

    }
    sub() {
        this._history.push('-')
    }
    mul() {
        this._history.push('*')
    }
    div() {
        this._history.push('/')
    }

    // [1, '+', 2, '+']

    status() {
        const last = this._history[this._history.length - 1]

        if (typeof last === 'number') return last
        else {
            return this.result()
        }
    }

    result() { 
        let accum = this._history[0]

            for (let i = 1; i < this._history.length - 1; i++) {
                const val = this._history[i]

                if (typeof val !== 'number') {
                    switch (val) {
                        case '+':
                            accum += this._history[i + 1]
                            break
                        case '-':
                            accum -= this._history[i + 1]
                            break
                        case '*':
                            accum *= this._history[i + 1]
                            break
                        case '/':
                            accum /= this._history[i + 1]
                            break
                    }
                } else {

                }
            }

            return accum
    }
}