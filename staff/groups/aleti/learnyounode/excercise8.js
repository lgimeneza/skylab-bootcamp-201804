const http = require('http')

http.get(process.argv[2], (res) =>{

    let str = ''

    res.setEncoding('utf8')
    res.on("data", (data) => {str += data})
    res.on("end", (data) => {
        console.log(str.length)
        console.log(str)
    })

})