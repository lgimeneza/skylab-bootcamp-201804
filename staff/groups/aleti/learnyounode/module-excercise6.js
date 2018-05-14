var path = require('path')

function myFun (files, extension) {
    
    files.filter(file => path.extname(file) ===  `.${extension}`).forEach(file => { console.log(file)})
}

module.exports = myFun