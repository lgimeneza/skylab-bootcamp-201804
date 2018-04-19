# higher-order function

```js
function filter(arr, func) {
     var res = []

     for (var i = 0; i < arr.length; i++) {
         var val = arr[i]

         if (func(val)) res.push(val)
     }

    return res
}
```

# scope & context

```js
function concat(text) {
	var accum = text;

	return {
		concat: function(text) {
			accum = accum + text;

			return this;
        },

		toString: function() {
			return accum;
        }
    }
}
```

# self-invoking function

```js
var funA;
(function() {
	funA = function(text) { return wtf(text); }

	function wtf(text) { return text + '!!!'; }
})();


var funB;
(function() {
	funB = function(text) { return wtf(text); }

	function wtf(text) { return text + '???'; }
})();

// NOTE: as wtf() is defined each one in its own scope, they do not collide 👍

funA('hola')
"hola!!!"
funB('hola')
"hola???"
```