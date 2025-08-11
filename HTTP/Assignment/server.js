const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const { method, url } = req;

    // Combine method and path for matching
    const route = `${method} ${url}`;

    switch (route) {
        case "GET /":
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("Hello World");
            break;

        case "GET /contact-us":
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({
                email: "workbiswajit0981@gmail.com",
                phone: "9810000000"
            }));
            break;

        case "POST /tweet":
            fs.appendFile("tweet.txt", `tweet: Hello, ${new Date().getTime()}\n`, (err) => {
                if (err) {
                    res.writeHead(500, { "Content-Type": "text/plain" });
                    return res.end("Error posting tweet");
                }

                fs.readFile("tweet.txt", "utf-8", (err, data) => {
                    if (err) {
                        res.writeHead(500, { "Content-Type": "text/plain" });
                        return res.end("Error reading tweet");
                    }
                    res.writeHead(200, { "Content-Type": "text/plain" });
                    res.end(data);
                });
            });
            break;

        case "GET /tweet":
            fs.readFile("tweet.txt", "utf-8", (err, data) => {
                if (err) {
                    res.writeHead(500, { "Content-Type": "text/plain" });
                    return res.end("Error reading tweet");
                }
                res.writeHead(200, { "Content-Type": "text/plain" });
                res.end(data);
            });
            break;

        default:
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("Not Found");
    }
});

const port = 3000;
server.listen(port, () => console.log(`Server is listening at http://localhost:${port}`));
