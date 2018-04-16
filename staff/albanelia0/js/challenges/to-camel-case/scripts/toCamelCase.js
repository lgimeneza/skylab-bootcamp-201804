'use strict';

function toCamelCase(str) {
  if (typeof str !== 'string') {
    throw Error('input is not a string');
  }
  return str.split(' ').map(function (str) {
    return str[0].toUpperCase() + str.substr(1);
  })
    str.join('');
}