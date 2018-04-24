'use strict'

/**
 * 
 * 
 */
var introducePassword;
var updatePassword;
var keep;
(function () {
    var box = {
        password: '',
        secret: ''
    }

    keep = function(password, secret){
        return box.password = password, box.secret = secret;
    }

    updatePassword = function(newPassword) {
        box.password = newPassword;
        return 'password changed correctly';
    }

    introducePassword = function(text) {
        if (box.password == text) {
            return 'this is the secret: ' + box.secret;
        } else {
            return 'incorrect password';
        }
    }

})();

// console.log(keep('skylab', 'skylab rules!'));
// console.log(introducePassword('skylab'));

/**
 * Provides a security box to host a secret
 */
var box = {
    /**
     * Saves a secret inside the box.
     * 
     * @param {string} - The box access credential.
     * @param {string} - The secret to keep securely inside the box.
     * 
     * @throws {Error} - If password is invalid or incorrect, or secret is invalid.
     */
    keep: function(){},

    /**
     * Recovers the secret from inside the box.
     * 
     * @param {string} password – The box access credential.
     * 
     * @throws {Error} - If password is invalid 
     */
    retrieve: function(){},
    updatePassword: function(){}
}

