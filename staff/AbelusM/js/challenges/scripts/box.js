'use strict';
/**
 * box is a tool where you can set a password and a secret and this could protect that from anybody to see, only when the password is input you can see it.
 * 
 * @param {String} password - The input of the secret code: password.
 * @param {String} secret - The input is for the secret.
 * @param {*} newpassword- The input is for assign a new password.
 * @param {*} checknewpassword- The input is for check the new password.
 * 
 * 
 * @returns {*} - The secret you want to be keeped.
 */
var box = {
    password: (function (input) {
        if (password === undefined || input === password) {
            input = password;
        } else {
            throw Error('input is not the correct password');
        }    
        secret: function(text){
            var keepsecret = text
            return keepsecret
        }
    })()
}

