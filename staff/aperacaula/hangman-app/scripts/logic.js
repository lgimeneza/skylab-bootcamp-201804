"use strict";

//Version JS5

// function Hangman(word) {
//   if (typeof word !== "string") throw Error("invalid input word");

//   this.wordToGuess = word;
//   this.numAttempts = 10;
//   this.listLetters = [];
//   for (var i = 0; i < this.wordToGuess.length; i++) {
//     this.listLetters.push("_");
//   }

//   this.status = "Keep playing ;)";

//   Hangman.WIN = "YOU WON";
//   Hangman.LOSE = "YOU LOST";
//   Hangman.CONTINUE = "Keep playing ;)";
// }

// Hangman.prototype.try = function(letter) {
//   if (typeof letter !== "string") throw Error("invalid input letter or word");

//   if (this.wordToGuess.indexOf(letter) === -1) {
//     this.numAttempts--;
//     if (this.numAttempts === 0) this.status = Hangman.LOSE;
//     return false;
//   }

//   for (var i = 0; i < this.listLetters.length; i++) {
//     if (this.wordToGuess[i] === letter) {
//       this.listLetters[i] = letter;
//     }
//   }

//   if (
//     letter === this.wordToGuess ||
//     this.listLetters.join("") === this.wordToGuess
//   ) {
//     this.status = Hangman.WIN;
//   }
//   return this.wordToGuess.includes(letter);
// };

// Hangman.prototype.guessed = function() {
//   return this.listLetters;
// };

// Hangman.prototype.attempts = function() {
//   return this.numAttempts;
// };

// Hangman.prototype.statuss = function() {
//   return this.status;
// };

// Version JS6

class Hangman {

  constructor(word, opportunities=10) {
    if (typeof word !== "string") throw Error("invalid input word");
    this.wordToGuess = word
    this.numAttempts = opportunities
    this.listLetters = []
    for (var i = 0; i < this.wordToGuess.length; i++) {
      this.listLetters.push("_")
    }
    Hangman.WIN= 'YOU WON'
    Hangman.LOSE= 'YOU LOSE'
    Hangman.CONTINUE= 'Keep playing ;)'
    this.state= Hangman.CONTINUE

  }

  try(letter) {
    if (typeof letter !== "string") throw Error("invalid input letter or word")

    if (this.wordToGuess.indexOf(letter) === -1) {
      this.numAttempts--
      if (this.numAttempts ===0) this.state= Hangman.LOSE
      return false
    }

    for (var i = 0; i < this.listLetters.length; i++) {
      if (this.wordToGuess[i] === letter) {
        this.listLetters[i] = letter
      }
    }
    if (letter === this.wordToGuess || this.listLetters.join('') === this.wordToGuess){

        this.state= Hangman.WIN
    }
    return this.wordToGuess.includes(letter)
  }

  attempts (){
    return this.numAttempts
  }

  guessed (){
    return this.listLetters
  }

  statuss (){
    return this.state
  }

//   static get WIN(){
//       return 'YOU WON'
//   }

//   static get LOSE(){
//       return 'YOU LOST'
//   }

//   static get CONTINUE(){
//       return 'Keep playing ;)'
//   }
}
