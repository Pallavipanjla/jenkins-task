const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.end('Hello from Jenkins Pipeline with Docker and index.js!');
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});