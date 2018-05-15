const http = require('http')
const url = process.argv[2]

http.get(url, (res) =>{

    res.on('error', res => console.error)

    let str = ''

    res.setEncoding('utf8')

    res.on("data", (data) => {str += data})
    res.on("end", (data) => {
        console.log(str.length)
        console.log(str)
    })

})