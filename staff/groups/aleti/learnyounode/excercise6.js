var fs = require('fs')
var fi = require('./module-excercise6')


fs.readdir(process.argv[2], (err, files)=>{

    fi(files, process.argv[3])      
    
})

//TODO: process.argv[2] => dir name

//TODO: process.argv[3] => ext filter



