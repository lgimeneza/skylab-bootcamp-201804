const net = require('net')
const date = () => {
    let d = new Date()
    return (d.getFullYear() + "-0" + (parseInt(d.getMonth()) + 1).toString() + "-" + d.getDate() + " "
        + d.getHours() + ":" + d.getMinutes()+"\n")
}
var server = net.createServer((socket)=>{
    socket.write(date())
    socket.end()
})

server.listen(process.argv[2])