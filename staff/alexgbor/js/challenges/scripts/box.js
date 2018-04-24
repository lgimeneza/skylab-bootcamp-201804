'use strict';

var box;

(function() { 
    box={keep:function keep(pass,sec) {
        password=pass;
        secret=sec;
    },
    retrieve: function retrieve(pass) {
        if (pass===password) {
            console.log(secret);
        }
        else {
          console.log("Esa no es tu contraseña");
        }
    },
    updatePassword: function updatePassword(oldpass,newpass) {
        if (oldpass===password) {
            password=newpass;
            console.log("Password updated");
        }
        else {
          console.log("Esa no es tu contraseña");
        }
    }

 };
    var password="";
    var secret="";
    
})();

box.keep("contraseña","me encanta skylab");
box.retrieve("contraseña");
box.updatePassword("contra");
box.updatePassword("contraseña","contraseño");
box.retrieve("contraseño");