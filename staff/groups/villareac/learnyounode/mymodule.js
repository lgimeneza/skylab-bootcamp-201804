var fs = require('fs')
var path = require('path');

let folder = process.argv[2]
let ext = '.' + process.argv[3]

myModule(path, ext, (error, data) => {

    

})

module.exports = myModule()



