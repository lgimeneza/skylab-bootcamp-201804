'use strict';

function randomCase(text) {

  var random = (Math.random() * 20).toFixed;
  var textRandom;

  for (var i = 0; i < text.length; i++) {
    textRandom = text[random].toUpperCase()
    
  }
  return textRandom;
}