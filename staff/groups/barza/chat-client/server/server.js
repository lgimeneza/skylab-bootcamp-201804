const http = require('http');
const queryString = require('query-string');

const PORT = 3000;

let messages = 'Chat history\n';

const server = http.createServer((req, res) => {
    const index = req.url.indexOf('?') + 1;

    if (index > -1) {
        const parsedURL = req.url.substring(index);
        const parsedObj = queryString.parse(parsedURL);

        messages += `${parsedObj.from}: ${parsedObj.message}\n`;

        res.end(messages);
    }
});

server.listen(PORT, () => {
    console.log('server listening... ', PORT);
});
