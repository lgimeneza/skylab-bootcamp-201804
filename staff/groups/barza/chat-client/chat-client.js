const axios = require('axios');

const [URL, PORT, from, message] = process.argv.slice(2);

axios
    .get(`http://${URL}:${PORT}`, {
        params: {
            from,
            message
        }
    })
    .then(res => {
        const { data } = res;

        console.log(data);
    })
    .catch(console.log);
