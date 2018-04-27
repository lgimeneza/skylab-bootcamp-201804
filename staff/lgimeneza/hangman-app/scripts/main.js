'use strict'

var hangman = new Hangman("hola");


let word = document.getElementById('wordguessed');
word.text = hangman.guessed;

let btnTry = document.getElementById('btntry');
btnTry.addEventListener('click', function(e){
    e.preventDefault();
    let txbHangWord = document.getElementById('txbHangManWord');
    let res = hangman.try(txbHangWord.value);
    txbHangWord.value ='';
    if(!res) drawHangman(10 -hangman._attempts);

})

function drawHangman(attempts){
    if(attempts < 9) document.getElementById('imghangman').className = "hangman-" + attempts;
}





