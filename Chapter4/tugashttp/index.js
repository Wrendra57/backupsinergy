const http = require('http');
const path = require('path');
const fs = require('fs');
const PUBLIC_DIRECTORY = path.join(__dirname, 'public');

const getHTML = (fileName) => {
    const htmlFileIndex = path.join(PUBLIC_DIRECTORY, fileName);
    const htmlIndex = fs.readFileSync(htmlFileIndex, 'utf8');

    return htmlIndex
}

const onRequest = (req, res) => {
    switch (req.url) {
        case "/":
            const htmlIndex = getHTML('index.html');

            res.setHeader('Content-Type', 'text/html');
            res.writeHead(200);
            res.end(htmlIndex);

            return
        case "/about":
            const htmlAbout = getHTML('about.html');

            res.setHeader('Content-Type', 'text/html');
            res.writeHead(200);
            res.end(htmlAbout);

            return
        case "/login":
            const htmlLogin = getHTML('login.html');

            res.setHeader('Content-Type', 'text/html');
            res.writeHead(200);
            res.end(htmlLogin);

            return
    }
}

const server = http.createServer(onRequest)

server.listen(2000, '127.0.0.1', () => {
    console.log("Server sudah berjalan, silakan buka http://localhost:2000");
})