var fs = require('fs')

var buf = fs.readFileSync(process.argv[2])

var srt = buf.toString()

var strArr = srt.split('\n')

console.log(strArr.length -1)