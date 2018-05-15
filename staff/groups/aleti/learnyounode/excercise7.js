const http = require('http')

http.get(process.argv[2], (res) =>{

    res.on('error', res => console.error)

    res.setEncoding('utf8')
    res.on("data", (data) => {console.log(data)})

})