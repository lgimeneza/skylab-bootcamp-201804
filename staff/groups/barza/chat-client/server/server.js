const http = require('http');
const url = require('url');

const PORT = 3000;

let messages = 'Chat history\n';

const server = http.createServer((req, res) => {
    const urlObj = url.parse(req.url, true);
    const { from, message } = urlObj.query;

    if (from && message) {
        messages += `${from}: ${message}\n`;
        res.end(messages);
    }
});

server.listen(PORT, () => {
    console.log('server listening... ', PORT);
});
