'use strict';

var count = toRandomCase('hello pepito carlos baute er morenico _');

console.log('The random case version is', count);



try{
    console.log('The random case version is', count);
}catch(err){
    console.log('the random case version of (whatever you introduced) should throw an error', err != undefined, err)
}
var count = toRandomCase();
console.log('The random case version is', count);

// 'use strict';

// try {
//     var count = toRandomCase('hello this is');
//     console.log('The camel case version of ("bla bla bla") should be ("bla bla bla") -->', count);
// } catch (err) {
//     console.log('countChars(true) should throw an error', err !== undefined, err);
// }