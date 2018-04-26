'use strict'

    function createWord(wordToGuess){
            
        for (var i=0; i<wordToGuess.length; i++){
            
            hangman.push("_");
        }
    }

    function Hangman(wordToGuess,attemps){
        
        if(typeof wordToGuess !== "string"){
            throw Error('invalid input word');
        }
       
        
        this.wordToGuess = wordToGuess;

        this.acum=0;
        this.hangman=[];
        this.letter;
        this.attempts=10;

        Hangman.CONTINUE=0;
        Hangman.WIN=1;
        Hangman.LOSE=2;
    }

    Hangman.prototype.try=function(letter){

        if(typeof letter !=="string"){
            throw Error('invalid input letter or word');
        };

        letter=letter.trim();
    
        for (var i=0; i<this.wordToGuess.length; i++){

            if(this.wordToGuess.includes(letter)){
                
                return true;
                
            }else{
                return false;
                this.attempts --;
            }
        }
      
    }
    Hangman.prototype.guessed=function(letter){

        for (var i=0; i<this.wordToGuess.length; i++){
        var sust= this.wordToGuess.indexOf(letter);
        
        }
        this.hangman[sust] = letter;
    }
           
    Hangman.prototype.attempts=function(){

       return this.attempts
        

            
    }
   
    Hangman.prototype.status=function(){
        return this._status
 

    }
    
        

