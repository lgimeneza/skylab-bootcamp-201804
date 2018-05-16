const http = require('http')

const urls = process.argv.slice(2)

let contents = urls.map(() => '')
let finishes = 0

// $ node juggling-async.js http://google.com http://google.es http://google.co.uk

for (let i = 0; i < contents.length; i++) {
    http.get(urls[i], res => {
        res.on('error', console.error)

        res.setEncoding('utf8')

        res.on('data', chunk => contents[i] += chunk)

        res.on('end', () => {
            finishes++

            if (finishes === contents.length) contents.forEach(content => console.log(content))
        })
    }).on('error', console.error)
}