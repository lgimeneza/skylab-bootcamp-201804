var fs = require('fs')
var path = require('path');
var mymodule = require('./mymodule.js') 

// let folder = process.argv[2]
// let ext = '.' + process.argv[3]

// let buf = fs.readdir(folder, (error, list) => {
//     result = list.filter(file => path.extname(file) === ext)
//     result.forEach(result => console.log(result))
// })

function bar (callback) {  
    foo(function (err, data) {  
      if (err)  
        return callback(err) // devolver el error  
    
      // ... no hay error, continuar con los cálculos.  
    
      // si todo termina bien, llamar el callback con `null` como parámetro de error  
    
      callback(null, data)  
    })  
  } 

