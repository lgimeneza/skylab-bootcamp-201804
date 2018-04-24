'use strict';

// box.keep('password','secret')
// box.retrieve('password')--->devuelva el secreto
//box.updatepassword('password','new-password')--->cambiar pass
var box;

(function () {

    box = {

        keep: function (password, secret) {
            var userSecret = secret;
            var userPassword = password;
        },
        retrieve: function showSecret(userPassword) {
            return userSecret;
        },

        updatePassWord: function (password, newPassword) {
            newPassword = password;
        } 
    }
})();

