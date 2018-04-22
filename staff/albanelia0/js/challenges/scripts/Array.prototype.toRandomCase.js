/**
 * exemple: 
 * 
 * var array = ['albanelia'];
 * output --> AlBaNeLiA
 */


if (typeof Array.prototype.toRandomCase !== "function") {

  Array.prototype.toRandomCase = function() {
    if (typeof this !== 'array') throw Error('input is not a array!');
    var array = [];
    var letter = this.toString();
    var value = '';
    for (var i = 0; i < letter.length; i++) {

      if ((i % 2) === 1) {//->impar
        value += letter.charAt(i).toUpperCase();
      } else {
        value += letter.charAt(i).toLowerCase();
      }
    };
    return value;
  }
}



