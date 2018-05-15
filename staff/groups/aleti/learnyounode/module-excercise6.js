const fs = require('fs')
const path = require('path')

module.exports = (_dir, _ext, callback) => {

    fs.readdir(_dir, (err, files) => {

        if (err) return callback(err)

        const data = files.filter(file => path.extname(file) ===  `.${_ext}`)

        setTimeout(callback(null, data),0)

    })
}