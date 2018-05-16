const net = require('net');

const PORT = process.argv[2];

const server = net.createServer(socket => {
    let date = new Date();
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();

    let hours = date.getHours();
    let mins = date.getMinutes();

    dd = dd < 10 ? `0${dd}` : dd;
    mm = mm < 10 ? `0${mm}` : mm;

    hours = hours < 10 ? `0${hours}` : hours;
    mins = mins < 10 ? `0${mins}` : mins;

    const dateNow = `${yyyy}-${mm}-${dd} ${hours}:${mins}`;

    socket.end(dateNow + '\n');
});

server.listen(PORT);
