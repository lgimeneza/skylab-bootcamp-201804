

```js
function forEach(arr, func) {
	for (var i = 0; i < arr.length; i++) func(arr[i])
}


function filter(arr, func) {
     var res = []

     for (var i = 0; i < arr.length; i++) {
         var val = arr[i]

         if (func(val)) res.push(val)
     }

    return res
}

function find(arr, func) {
	for (var i=0; i < arr.length; i++) {
        var val = arr[i]

		if (func(val)) return val
    }
}

function find(arr, func) {
    var res

	for (var i=0; i < arr.length; i++) {
        var val = arr[i]

		if (func(val)) {
            res = val
            
			break
        }
    }
 
    return res
}
```