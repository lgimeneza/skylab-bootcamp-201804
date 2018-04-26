'use strict'

class Hangman {
    constructor (wordToGuess, attempts = 10) {
        this.att = attempts;  
        this.word(wordToGuess);
        this.w = wordToGuess;
        this.w_split = wordToGuess.split("").map (v => '_');
        this.stat = Hangman.CONTINUE;
    }

    word(wordToGuess) {
        if (typeof wordToGuess !== "string") throw Error('invalid word ' + wordToGuess);
        return wordToGuess.split("");
    }

    try(str){
        if (typeof str !== "string") throw Error ('invalid letter or word ' + str);
        
        if (str.length > 1){
            if (str === this.w) {
                this.w_split = this.w.split("");
                this.stat = Hangman.WIN;
            } else {
                this.att = 0;
                this.stat = Hangman.FAIL;
                return false;
            }


        } 
        
        if  (this.w.indexOf(str) === -1) {
            this.att--;
            return false;
        }
        let word = this.w.split("");
        for(let i = 0; i < word.length; i++){
            if (word[i] === str) {
                console.log(i + " " + word[i]);
                this.w_split[i] = str;
            }
        }
        if (this.w_split.indexOf('_') === -1) this.stat = Hangman.WIN;
        if (this.att === 0) this.stat = Hangman.WIN;
        return true;
    }

    guessed() {
        return this.w_split;
    }

    status() { return this.stat;}

    attempts() { return this.att}
    
}

let hangman = new Hangman("hello");



            // start(wordToGuess) {
            //     let guess = "";
            //     if (guessed() !== undefined) {
            //         this.guessed() = "surprise";
            //     } else {
            //         console.log(wordToGuess.length)
            //         if (wordToGuess.length > 1) {
            //             console.log()
            //             guess = wordToGuess.split("").map (v => "'_'");
            //             this.guessed() = guess;
            //         }
            //     }
            // }