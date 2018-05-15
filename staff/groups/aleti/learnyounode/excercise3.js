const fs = require('fs')
const path = process.argv[2]

const buf = fs.readFileSync(path)

var str = buf.toString()
var strArr = str.split('\n')

console.log(strArr.length -1)