"use strict";

let Calculator = (function() {
    class Calculator{
        constructor() {
            this.__input = [];
            this.__status = 0;
            this.__resBool = false;
        }

        //Buttons
        one()  { buttonManager(this, 1) }
        two()  { buttonManager(this, 2) }
        three(){ buttonManager(this, 3) }
        four() { buttonManager(this, 4) }
        five() { buttonManager(this, 5) }
        six()  { buttonManager(this, 6) }
        seven(){ buttonManager(this, 7) }
        eight(){ buttonManager(this, 8) }
        nine() { buttonManager(this, 9) }
        zero() { buttonManager(this, 0) }

        sum() { buttonManager(this, "+") }
        sub() { buttonManager(this, "-") }
        mul() { buttonManager(this, "*") }
        div() { buttonManager(this, "/") }
        negate() { buttonManager(this, "±") }
        comma() { buttonManager(this, ",") }

        equal() {
            this.__resBool = true;
            this.result();
            return this.__status;
        }

        clear(){ //checkit
            this.__input.pop();
            return this.__status = 0;
        }

        clearAll(){
            this.__input.length = 0;
            return this.__status = 0;
        }

        //Not buttons
        status() {
            return this.__status;
        }

        result() {
            let accum = this.__input[0]
    
            for (let i = 2; i < this.__input.length; i++) {
                const val = this.__input[i - 1]
    
                if (typeof val !== 'number') {
                    switch (val) {
                        case '+':
                            accum += this.__input[i]
                            break
                        case '-':
                            accum -= this.__input[i]
                            break
                        case '*':
                            accum *= this.__input[i]
                            break
                        case '/':
                            accum /= this.__input[i]
                            break
                    }
                }
            }
            
            this.__status = accum;
            return accum
        }

    };

    function buttonManager(target, button){
        const patt = /([+\-*,±√²³%ʸ/])/g;
        const input = target.__input;

        if (button.toString().search(patt) !== -1) {
            if ((input.length === 0)&&(button !== ",")) return; 
            if (target.__resBool) {
                const last = target.__status;
                input.length = 0;
                input.push(last);
                target.__resBool = false;
                addSymbol(target, button);

            } else addSymbol(target, button);
        } else if (typeof button === "number"){
            if (target.__resBool) {
                input.length = 0;
                target.__resBool = false;
                addNumber(target, button);
            } else {
                addNumber(target, button);
            }
        } else {
            throw Error("is not a valid button");
        }

        updateStatus(target);
    }

    function addSymbol(target, symbol) {
        const input = target.__input;
        const i = input.length;
        const last = input[i-1];

        switch(symbol) {
            case '±':
                if (typeof last === "number"){
                    if ((i>2) && (input[i-2] === ",")&&(typeof input[i-3]) === "number"){
                        input[i-3] = -input[i-3];
                    } else input[i-1] = -last;
                } else if (last === ","){
                    
                }
                
                break;
            case ",":
                if (typeof last !== "number"){
                    input.push(0);
                    input.push(symbol);
                } else {
                    if ((last.toString().indexOf(".") === -1)&&(input[i-2] !== ",")) input.push(symbol);
                } 
                break; 
            default:
                if (typeof last === "number"){
                    if ((i>2) && (input[i-2] === ",")&&(typeof input[i-3]) === "number"){
                        const temp = parseFloat(input[i-3].toString() + "." + input[i-1].toString());
                        input.splice(-3, 3);
                        input.push(temp);
                    } else input.push(symbol);  
                } else {
                    input.pop();
                    input.push(symbol); 
                }

                
        }

    }

    function addNumber(target, num) {
        const input = target.__input;
        const last = input[input.length - 1]

            if (typeof last === "number")
                input[input.length - 1] = parseFloat(last.toString() + num.toString())
            else
                input.push(num)
    }

    function updateStatus(target) {
        const input = target.__input;
        const i = input.length;

        if (typeof input[i-1] === "number") {
            
            if (input[i-2] === ","){

                if(typeof input[i-3] === "number") {
                    target.__status = parseFloat(input[i-3].toString() + "." + input[i-1].toString())
                } else target.__status = parseFloat("0." + input[i-1].toString());

            } else  target.__status = input[i-1];

        } else if(input[i-1] === ","){

            if(i > 1){
                if(typeof input[i-2] === "number") target.__status = input[i-2] + ".";
            } else target.__status = "0.";

        } else {
            target.__status = target.result();
        }

    }



    return Calculator;
})();

var c = new Calculator();


