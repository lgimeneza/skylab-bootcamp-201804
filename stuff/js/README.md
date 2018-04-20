# higher-order function

```js
function filter(arr, func) {
     var res = [];

     for (var i = 0; i < arr.length; i++) {
         var val = arr[i];

         if (func(val)) res.push(val);
     }

    return res;
}
```

# scope & context

```js
concat(1).concat(2).toString(); // -> "1 2"

function concat(text) {
	return {
	    concat: function(text2) {
			return {
                toString: function() {
                    return text + ' ' + text2;
                }                
            };
        }
    };
}

// what if requiring to concat a variable number of times in one statement?

concat(1).concat(2).toString(); // -> "1 2"
concat(1).concat(2).concat(3).toString(); // -> "1 2 3"
concat(1).concat(2).concat(3).concat(4).toString(); // -> "1 2 3 4"

function concat(text) {
	var accum = text;

	return {
		concat: function(text) {
			accum = accum + ' ' + text;

			return this;
        },

		toString: function() {
			return accum;
        }
    };
}

// what happens if...

concat(1).concat(2).concat(3).toString().concat(4); // -> "1 2 34" -> 3 and 4 are concatenated in a different manner! (no space in-between)

// why is this happening!? mmm... may doc about String.prototype.concat() help? ;)

```

[Understanding Scope and Context in JavaScript](http://ryanmorr.com/understanding-scope-and-context-in-javascript/)

[Everything you wanted to know about JavaScript scope](https://toddmotto.com/everything-you-wanted-to-know-about-javascript-scope/)


# chaining methods (aka method chaining or chainable or cascading)

```js
a().b().c().d().e();
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

funA('hola');
"hola!!!"
funB('hola');
"hola???"
```

# constructor function & prototype

![constructor function & prototype](images/Array.prototype.forEach_var-vs-val.jpg)

# [prototype inheritance](prototype-inheritance)

# other interesting things

[Colorful console.log](https://coderwall.com/p/fskzdw/colorful-console-log)