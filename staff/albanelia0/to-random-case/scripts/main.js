'use strict';

randomCase('hello world');

try {
  randomCase('string')
} catch (error) {
  console.log('randomCase not at number'), error !== undefined, error;

}
