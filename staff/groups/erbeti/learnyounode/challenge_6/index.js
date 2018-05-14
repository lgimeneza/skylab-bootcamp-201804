var mymodule = require('./mymodule')

var fs = require('fs') 
var path= require('path')
let file = process.argv[2]
let ext= process.argv[3]

  
  let text=fs.readdir(file, function(error,list){
    
      if (error=== null){
          for (let i=0; i<list.length; i++ ){

              if(path.extname(list[i])===`.${ext}`){
                
                console.log(list[i])
            }
        }
         
      }
    
  })