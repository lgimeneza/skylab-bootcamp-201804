'use strict';

var count = numberRoman(2);
console.log('numberRoman(2) should return II', count === 'II', count);
try {
  count = numberRoman('string');
} catch (error) {
  console.log('numberRoman not at number'), error !== undefined, error;
}
