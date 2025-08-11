const http = require('node:http');
const server = http.createServer((req, res) => {
    console.log(req)

    res.writeHead(200, {contentType: "text/plain"})
    res.end('Hello World')
});

server.listen(3000, () => console.log('Server is listening on port http://localhost:3000'));

