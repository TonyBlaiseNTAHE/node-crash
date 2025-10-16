import http from 'http';

const PORT = 8000;
const server = http.createServer((req, res) => {
    res.write('Hi, Tony');
    res.end();
});

server.listen(PORT, () => {
    console.log(`server is running to port ${PORT}`);
});

