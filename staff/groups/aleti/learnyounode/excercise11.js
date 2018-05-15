const fs = require('fs')
const http = require('http')

const [port, file] = process.argv.splice(2)

var server = http.createServer(function (req, res) {
    // manejar cada petición aquí.

    res = fs.createReadStream(file)
    req.pipe(res)


}).listen(port)