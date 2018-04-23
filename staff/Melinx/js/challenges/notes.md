    
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

a.find(function(v) { return v.name.indexOf('h') > -1})
{name: "t-shirt", price: 10.99}

--- simplemente que te muestre los precios ------

a.map(function(v) { return v.price })
(2) [24.99, 10.99]

---- que te devuelva solo el nombre de la prenda ---

a.map(function(v) { return v.name } )
(2) ["jeans", "t-shirt"]

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

