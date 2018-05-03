'use strict';

test(
    function () {
        box.keep('123', 'my secret');

        return box.retrieve('123');
    },
    'box.keep() should save the secret correctly and box.retrive() obtain it',
    function (result) {
        return result == 'my secret';
    }
);

test(
    withErrorCapturing(
        function(){
            box.retrieve(4,5,6);
        }
    ),
    'box retrive should throw error if password is wrong',
    function(result){
        return result.message ==='wrong password'
    }
);

test(
    withErrorCapturing(
        function(){
            box.retrieve();
        }
    ),
    'box retrive should throw error if password is invalid',
    function(result){
        return result.message ==='invalid password'
    }
);

test(
    function(){
        box.updatePassword('123','456');

        return box.retrieve ('456');
    },
    'box.updatePassword() should replace password correctly with new one and retrive succed',
    function(result){
        return resutl === 'mysecret';
    }
)