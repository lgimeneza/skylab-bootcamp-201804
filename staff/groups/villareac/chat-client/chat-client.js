const http = require('http')

// Copy this code at the terminal:
// node chat-client.js 192.168.0.42 3000 username message

const [ip, port, from, message] = process.argv.slice(2)

url = `http://${ip}:${port}/?from=${from}&message=${message}`

http.get(url, res => {
    res.on('error', console.error)

    res.setEncoding('utf8')

    res.on('data', console.log(res))
})