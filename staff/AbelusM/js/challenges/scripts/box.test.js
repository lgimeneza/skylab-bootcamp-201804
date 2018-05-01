
var input = box.password.secret(123);

box.password('hola');

test(
    function(){
        return box(input, text)
    },
    'box(helloworld)should tell us the secret',
    function(result){
        return input !== box.password;
    }

)
test(
    withErrorCapturing(
        function () {
            return map();
        }
    ),
    'map() should throw an error if input array is not valid',
    function (result) {
        return result.message === 'input array is not valid'
    }
);