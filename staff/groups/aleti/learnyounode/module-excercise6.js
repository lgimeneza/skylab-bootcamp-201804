var fs = require('fs')
var path = require('path')

module.exports = function(_dir, _ext, callback){

    fs.readdir(_dir, (err, files) => {

        if (err) return callback(err)

        var data = files.filter(file => path.extname(file) ===  `.${_ext}`)

        callback(null, data)

    })
}