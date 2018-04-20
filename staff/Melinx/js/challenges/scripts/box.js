'use strict';

box.keep('pw', 'secret')

box.retrieve('pw')

box.update('pw', 'new pw')

box.secret
box.pw

/**
 * box ASSIGNMENT JOB:
create an object that satisfies the following behaviour:

box.keep('password', '....') // -> keeps the secret under secure conditions (nobody can see it)

box.retrieve('password') //-> returns the secret

box.updatePassword('password', 'new-password')

box.secret // -> show secret? NO!!!! it should never expose the secret as a property of the box
box.password // --> show password? NO!!! it should never expose the password as a property of the box


 * function name: box. A function that will give us a message, as a text string, which will only be able to get retrieved if variable password is correct.
 * 
 * 
 * 
 * @param {Num} pw - the input number which needs to match the previously given pw to unlock the secret box.
 * 
 * @param {Arr} - function should be called as an object.
 * 
 * 
 var pw;
 var secret;
 
 object methods -> 

 *  K - I - S - S
 */


var getPw;

(function() {
    var box = {
        pw: '123',
        secret: 'you rock'
    }
    getPw = function(text){
        if(box.pw === text){
            return 'this is the secret: ' + box.secret;
      
        } 
    }
})();

// ->getPw('123') | "this is the secret: you rock"