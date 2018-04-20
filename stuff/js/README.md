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

# prototype inheritance

```js
function Person(name, surname) {
	this.name = name;
	this.surname = surname;
}

Person.prototype.salute = function() { return 'hello, i am ' + this.name };

function Woman(name, surname) {
	Person.call(this, name, surname);
}

Woman.prototype = new Person();
Woman.prototype.gender = 'female';

function Man(name, surname) {
	Person.call(this, name, surname);
}

Man.prototype = new Person();
Man.prototype.gender = 'male';

var persons = [
	new Man('john', 'doe'),
	new Woman('mary', 'wayne'),
	new Man('donpe', 'pito'),
	new Man('donjo', 'se'),
	new Woman('anna', 'o')
];

function paintWomen(persons) {
	var filtered = persons.filter(function(p) { return p.gender === 'female'; });

	filtered.forEach(console.log);
}

paintWomen(persons);
// -> output:
Woman {name: "mary", surname: "wayne"} 0 (2) [Woman, Woman]
Woman {name: "anna", surname: "o"} 1 (2) [Woman, Woman]

// another way to filter women

function paintWomen(persons) {
	var filtered = persons.filter(function(p) { return p instanceof Woman; });

	filtered.forEach(console.log);
}

paintWomen(persons);
// -> output:
Woman {name: "mary", surname: "wayne"} 0 (2) [Woman, Woman]
Woman {name: "anna", surname: "o"} 1 (2) [Woman, Woman]
```

```js
// iteration 2

function Being(alive) {
	this.alive = alive;
}

function Animal(name) {
	Being.call(this, true);
	this.name = name || 'anonymous';
}

Animal.prototype = new Being();

function Feline(name) {
	Animal.call(this, name);
}

Feline.prototype = new Animal();

function Cat(name) {
	Feline.call(this, name);
}

Cat.prototype = new Feline();

function Lion(name) {
	Feline.call(this, name);
}

Lion.prototype = new Feline();

function Lioness(name) {
	Lion.call(this, name);
}

Lioness.prototype = new Lion();
Lioness.prototype.hunt = function(animal) { 
	if (!(animal instanceof Animal)) throw Error('lioness need glasses');

	animal.alive = false;

	return animal; 
};
Lioness.prototype.procreate = function(lion) {
	if(!(lion instanceof Lionel)) throw Error('lioness mmm... confused');

	if (Math.random() > 0.5) {
		var num = Math.round(Math.random() * 10);

		if (num > 0) this.children = [];

		for (var i = 0; i < num; i++) {
			var child = Math.random() > 0.5? new Lioness() : new Lionel();

			this.children.push(child);
		}
	}
}

function Lionel(name) {
	Lion.call(this, name);
}

Lionel.prototype = new Lion();
Lionel.prototype.procreate = function(lioness) {
	if(!(lioness instanceof Lioness)) throw Error('lionel confused');

	lioness.procreate(this);
}

function Puma(name) {
	Feline.call(this, name);
}

Puma.prototype = new Feline();

function Person(name, surname) {
	Animal.call(this, name);
	this.surname = surname;
}

Person.prototype = new Animal();
Person.prototype.salute = function() { return 'hello, i am ' + this.name };

function Woman(name, surname) {
	Person.call(this, name, surname);
}

Woman.prototype = new Person();

function Man(name, surname) {
	Person.call(this, name, surname);
}

// Man.prototype = Woman.prototype; // WARN!!! fails on sub-type detection in instances of Woman vs Man.
Man.prototype = new Person();

var persons = [
	new Man('john', 'doe'),
	new Woman('mary', 'wayne'),
	new Man('donpe', 'pito'),
	new Man('donjo', 'se'),
	new Woman('anna', 'o')
];

// print women from array of persons

function paintWomen(persons) {
	var filtered = persons.filter(function(p) { return p instanceof Woman; });

	filtered.forEach(console.log);
}

paintWomen(persons);
// -> output:
Woman {name: "mary", surname: "wayne"} 0 (2) [Woman, Woman]
Woman {name: "anna", surname: "o"} 1 (2) [Woman, Woman]
```

# other interesting things

[Colorful console.log](https://coderwall.com/p/fskzdw/colorful-console-log)