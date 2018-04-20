


var box;

(function() {
	box = function(text) { return secret(text); }

	function secret(text) { return text}
})();

box("este es el secreto")



function box(pass) {
    return{
        retrieve: function (password) {
            return secret
        }
    }
}
function box(){
    return{
        updatePassword: function (password) {
            return password
        }
    }
}