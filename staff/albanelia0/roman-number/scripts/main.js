'use strict';

numberRoman(2);

try {
  numberRoman('string')
} catch (error) {
  console.log('numberRoman not at number'), error !== undefined, error;

}
