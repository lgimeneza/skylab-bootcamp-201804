'use strict';

var _password = 'admin';
/**
 * Provides a security box to host a secret.
 * 
 */
var box = {
    /**
     * Saves a secret inside the box.
     * 
     * @param {string} password - The box acces credential.
     * @param {string} secreet - The secret to keep securely inside the box.
     * 
     * @throws {Error} - If password is invalid or incorrect, or secret is invalid.
     */
    keep:function(password,secret){
        if(typeof password !== 'string') throw Error ('invalid password');
        if(typeof secret !== 'string')throw Error ('invalid secret');
        if (_password !== password) throw Error('wrong password');
    },
    /**
     * Recovers the secret from inside the box
     * 
     * @param {string} password - The box avves credential.
     * 
     * @throws {Error} - If password is invalid or incorrect, or secret is invalid.
     * 
     * @returns {string} - The secret, if password is correct
     */
    retrieve:function(){},
    /**
     * Replaces the preious password with a new one.
     * 
     * @param {string} password - The current password.
     * @param {string} newPassword - The new password is invalid.
     * 
     * @throws {Error} - If password is invalid or incorrect, or new password is invalid.
     */
    updatePassword: function(){}
};

var retrieve;
var updatePassword;
var keep;

(function () {
    var box = {
        password: "",
        secret: ""
    }

    keep = function (password, secret){
        return box.password = password, box.secret = secret;
    }

    retrieve = function(text) {
        if (box.password == text) {
            return 'El secreto es: ' + box.secret;
        } else {return "Your password is incorrect"}
    }

    updatePassword = function(text){
        return box.password = text;
    }
})();
