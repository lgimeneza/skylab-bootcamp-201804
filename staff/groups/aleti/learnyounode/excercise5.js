var fs = require('fs')
var path = require('path')

//console.log(process.argv[3])

fs.readdir(process.argv[2], (err, files)=>{

    files.filter(file => path.extname(file) ===  `.${process.argv[3]}`).forEach(file => { console.log(file)})        
    
})