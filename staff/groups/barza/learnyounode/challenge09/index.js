const http = require('http');
const rp = require('request-promise');

const [url1, url2, url3] = process.argv.slice(2);

(async function getData() {
    const p1 = await rp(url1).then(async data => data);
    const p2 = await rp(url2).then(async data => data);
    const p3 = await rp(url3).then(async data => data);

    console.log(p1);
    console.log(p2);
    console.log(p3);
})();
