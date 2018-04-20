'use strict';

/**
 * Provides a security box to host a secret
 * 
 */

var box = {
    /**
     * Keeps a secret in the box.
     * 
     * @param {string} pw - the box access credential.
     * @param {string} secret - secret to keep safely in the box.
     * 
     * @throws {Error} - 
     */
    keep: function(pw, secret) {},

    /**
     * 
     * @param {String} 
     */
    retrieve: function() {},
    updatePw: function() {}
    
}