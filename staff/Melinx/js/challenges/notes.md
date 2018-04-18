    
```sh
a = [{ name: 'jeans', price: 24.99}, {name: "t-shirt", price: 10.99}];
a.reduce(function(accum, v) {return accum + v.price}, 0)

35.98

```

 --> inicializamos el v a 0 porque le estamos dieciendo que sume sobre valores de una propiedad de un arrayinicializamos el v a 0 porque le estamos dieciendo que sume sobre valores de una propiedad de un array

------
```sh
 a.filter(function(v) { return v.price > 11 })
// {name: "jeans", price: 24.99}
```
------ que me saque la prenda que contiene cierta letra en su nombre:
```sh
a.find(function(v) { return v.name.indexOf('h') > -1})
{name: "t-shirt", price: 10.99}
```
--- simplemente que te muestre los precios ------
```sh
a.map(function(v) { return v.price })
(2) [24.99, 10.99]
```
---- que te devuelva solo el nombre de la prenda ---
```sh
a.map(function(v) { return v.name } )
(2) ["jeans", "t-shirt"]
```
-------  Un reduce que ACUMULA los que tienen precio mayor a 10 -----


```sh
a.reduce(function(accum, v) { 
if (v.price > 10)
 	return accum + v.price;
return accum;
}, 0);
35.98
```

```sh
function countDown(num){
	console.log(num);

if(--num > -1) countDown(num);
}
```

AS OPPOSED TO -- after argument, which will give us -1 in the count down

```sh
function countDown(num){
	console.log(num);
if num-- > -1) countDown(num);
}
```

```sh
a = [1,2,3]
a.toString()

-- lo utilizamos para poder comparar los resultados de arrays en objetos

Object notes form console:

```sh
o = {}
{}
o.name = 'john''
VM161:1 Uncaught SyntaxError: Invalid or unexpected token
    at cube (<anonymous>:2:5)
    at <anonymous>:1:1
cube @ VM133:2
(anonymous) @ VM137:1
o.toString()
"[object Object]"
o.toString = function() {return o}
ƒ () {return o}
o.to
undefined
o.toString
ƒ () {return o}
o.toString()
{toString: ƒ}toString: ƒ ()__proto__: Object
o =  {}
{}
o = new Object()
{}
o.name = 'john'
"john"
o.salute = (function() {return 'hello buddy!';})
            
ƒ () {return 'hello buddy!';}
o.titles=['full stak developer', 'bar tender'];
(2) ["full stak developer", "bar tender"]
o.consoleLog('hola mundo')
VM204:1 Uncaught TypeError: o.consoleLog is not a function
    at eval (eval at cube (Primitive:2), <anonymous>:1:3)
    at cube (<anonymous>:2:5)
    at <anonymous>:1:1
(anonymous) @ VM204:1
cube @ VM133:2
(anonymous) @ VM137:1
o.consoleLog = function(text) {console.log(text)};
ƒ (text) {console.log(text)}
```