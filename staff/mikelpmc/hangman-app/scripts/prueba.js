var word = 'hello';

// function tryLetter(str) {
//     return str.split('').map((letter, index, array) => {
//         if(array.includes(letter)) {
//             return
//         }
//     });
// }

// console.log(tryLetter('hello'));

var arrWord = ['_', '_', '_', '_', '_'];
var str = 'z';

word.split('').map((letter, index) => {
    if (letter === str) {
        arrWord[index] = str;
    }
});

console.log(arrWord);
