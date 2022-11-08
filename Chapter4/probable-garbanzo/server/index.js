const http = require('http');
const path = require("path");
const fs = require("fs");
const PUBLIC_DIRECTORY = path.join(__dirname, '../public')
// const DATA_DIRECTORY = path.join(__dirname, 'data')

const getHTML = (fileName) => {
    const htmlFileIndex = path.join(PUBLIC_DIRECTORY, fileName);
    const htmlIndex = fs.readFileSync(htmlFileIndex, 'utf8');

    return htmlIndex
}
const getImage = (imageName) => {
    const imgCar = path.join(PUBLIC_DIRECTORY + "/images", imageName);
    const imgContent = fs.readFileSync(imgCar);
    return imgContent
}

const onRequest = (req, res) => {
    switch (req.url) {
        case "/":
            const htmlIndex = getHTML('index.html');
            res.setHeader('Content-Type', 'text/html');
            res.writeHead(200);
            res.end(htmlIndex);

            return
        case "/mulaisewa":
            const htmlIndex1 = getHTML('mulaisewa.html');
            res.setHeader('Content-Type', 'text/html');
            res.writeHead(200);
            res.end(htmlIndex1);

            return
        case "/main.css":
            res.setHeader("Content-Type", "text/css");
            res.writeHead(200)
            res.end(getHTML("main.css"))
            return;
        case "/js/binar":
            res.setHeader("Content-Type", "text/js");
            res.writeHead(200)
            res.end(getHTML("scripts/binar.js"))
            return;
        case "/js/app":
            res.setHeader("Content-Type", "text/js");
            res.writeHead(200)
            res.end(getHTML("scripts/app.example.js"))
            return;
        case "/js/car":
            res.setHeader("Content-Type", "text/js");
            res.writeHead(200)
            res.end(getHTML("scripts/car.example.js"))
            return;
        case "/js/main":
            res.setHeader("Content-Type", "text/js");
            res.writeHead(200)
            res.end(getHTML("scripts/main.example.js"))
            return;
        case "/img_car.png":
            const imgDir = path.join(PUBLIC_DIRECTORY + "/assets", "img_car.png");
            const imgContent = fs.readFileSync(imgDir);

            res.setHeader('Content-Type', 'image/png');
            res.writeHead(200);
            res.end(imgContent);

            return
        case "/img_photo1.png":
            const imgDir1 = path.join(PUBLIC_DIRECTORY + "/assets", "img_photo1.png");
            const imgContent1 = fs.readFileSync(imgDir1);

            res.setHeader('Content-Type', 'image/png');
            res.writeHead(200);
            res.end(imgContent1);

            return
        case "/img_photo2.png":
            const imgDir2 = path.join(PUBLIC_DIRECTORY + "/assets", "img_photo2.png");
            const imgContent2 = fs.readFileSync(imgDir2);

            res.setHeader('Content-Type', 'image/png');
            res.writeHead(200);
            res.end(imgContent2);
            return
        case "/img_service.png":
            const imgDir3 = path.join(PUBLIC_DIRECTORY + "/assets", "img_service.png");
            const imgContent3 = fs.readFileSync(imgDir3);

            res.setHeader('Content-Type', 'image/png');
            res.writeHead(200);
            res.end(imgContent3);
            return
        case "/kotakbiru.png":
            const imgDir4 = path.join(PUBLIC_DIRECTORY + "/assets", "kotakbiru.png");
            const imgContent4 = fs.readFileSync(imgDir4);

            res.setHeader('Content-Type', 'image/png');
            res.writeHead(200);
            res.end(imgContent4);
            return
        case "/sosmed-facebook.png":
            const imgDir5 = path.join(PUBLIC_DIRECTORY + "/assets", "sosmed-facebook.png");
            const imgContent5 = fs.readFileSync(imgDir5);
            res.setHeader('Content-Type', 'image/png');
            res.writeHead(200);
            res.end(imgContent5);
            return
        case "/sosmed-instagram.png":
            const imgDir6 = path.join(PUBLIC_DIRECTORY + "/assets", "sosmed-instagram.png");
            const imgContent6 = fs.readFileSync(imgDir6);
            res.setHeader('Content-Type', 'image/png');
            res.writeHead(200);
            res.end(imgContent6);
            return
        case "/sosmed-twitter.png":
            const imgDir7 = path.join(PUBLIC_DIRECTORY + "/assets", "sosmed-twitter.png");
            const imgContent7 = fs.readFileSync(imgDir7);
            res.setHeader('Content-Type', 'image/png');
            res.writeHead(200);
            res.end(imgContent7);
            return
        case "/sosmed-whatsapp.png":
            const imgDir8 = path.join(PUBLIC_DIRECTORY + "/assets", "sosmed-whatsapp.png");
            const imgContent8 = fs.readFileSync(imgDir8);
            res.setHeader('Content-Type', 'image/png');
            res.writeHead(200);
            res.end(imgContent8);
            return

        // gambar mobil
        case "/car01.min.jpg":
            res.setHeader('Content-Type', 'image/jpg');
            res.writeHead(200);
            res.end(getImage('car01.min.jpg'));

            return
        case "/car02.min.jpg":
            res.setHeader('Content-Type', 'image/jpg');
            res.writeHead(200);
            res.end(getImage('car02.min.jpg'));

            return
        case "/car03.min.jpg":
            res.setHeader('Content-Type', 'image/jpg');
            res.writeHead(200);
            res.end(getImage('car03.min.jpg'));

            return
        case "/car04.min.jpg":
            res.setHeader('Content-Type', 'image/jpg');
            res.writeHead(200);
            res.end(getImage('car04.min.jpg'));

            return
        case "/car05.min.jpg":
            res.setHeader('Content-Type', 'image/jpg');
            res.writeHead(200);
            res.end(getImage('car05.min.jpg'));
            return
        case "/car06.min.jpg":
            res.setHeader('Content-Type', 'image/jpg');
            res.writeHead(200);
            res.end(getImage('car06.min.jpg'));
            return
        case "/car07.min.jpg":
            res.setHeader('Content-Type', 'image/jpg');
            res.writeHead(200);
            res.end(getImage('car07.min.jpg'));
            return
        case "/car08.min.jpg":
            res.setHeader('Content-Type', 'image/jpg');
            res.writeHead(200);
            res.end(getImage('car08.min.jpg'));
            return
        case "/car09.min.jpg":
            res.setHeader('Content-Type', 'image/jpg');
            res.writeHead(200);
            res.end(getImage('car09.min.jpg'));
            return
        case "/car10.min.jpg":
            res.setHeader('Content-Type', 'image/jpg');
            res.writeHead(200);
            res.end(getImage('car10.min.jpg'));
            return
        case "/car11.min.jpg":
            res.setHeader('Content-Type', 'image/jpg');
            res.writeHead(200);
            res.end(getImage('car11.min.jpg'));
            return
        case "/car12.min.jpg":
            res.setHeader('Content-Type', 'image/jpg');
            res.writeHead(200);
            res.end(getImage('car12.min.jpg'));
            return
        case "/car13.min.jpg":
            res.setHeader('Content-Type', 'image/jpg');
            res.writeHead(200);
            res.end(getImage('car13.min.jpg'));
            return
        case "/car14.min.jpg":
            res.setHeader('Content-Type', 'image/jpg');
            res.writeHead(200);
            res.end(getImage('car14.min.jpg'));
            return
        case "/car15.min.jpg":
            res.setHeader('Content-Type', 'image/jpg');
            res.writeHead(200);
            res.end(getImage('car15.min.jpg'));
            return
        case "/car16.min.jpg":
            res.setHeader('Content-Type', 'image/jpg');
            res.writeHead(200);
            res.end(getImage('car16.min.jpg'));
            return
        case "/car17.min.jpg":
            res.setHeader('Content-Type', 'image/jpg');
            res.writeHead(200);
            res.end(getImage('car17.min.jpg'));
            return
        case "/car18.min.jpg":
            res.setHeader('Content-Type', 'image/jpg');
            res.writeHead(200);
            res.end(getImage('car18.min.jpg'));
            return
        case "/car19.min.jpg":
            res.setHeader('Content-Type', 'image/jpg');
            res.writeHead(200);
            res.end(getImage('car19.min.jpg'));
            return
        case "/car20.min.jpg":
            res.setHeader('Content-Type', 'image/jpg');
            res.writeHead(200);
            res.end(getImage('car20.min.jpg'));
            return
        case "/car21.min.jpg":
            res.setHeader('Content-Type', 'image/jpg');
            res.writeHead(200);
            res.end(getImage('car21.min.jpg'));
            return
        case "/car22.min.jpg":
            res.setHeader('Content-Type', 'image/jpg');
            res.writeHead(200);
            res.end(getImage('car22.min.jpg'));
            return
        case "/car23.min.jpg":
            res.setHeader('Content-Type', 'image/jpg');
            res.writeHead(200);
            res.end(getImage('car23.min.jpg'));
            return
        case "/car24.min.jpg":
            res.setHeader('Content-Type', 'image/jpg');
            res.writeHead(200);
            res.end(getImage('car24.min.jpg'));
            return
        case "/car25.min.jpg":
            res.setHeader('Content-Type', 'image/jpg');
            res.writeHead(200);
            res.end(getImage('car25.min.jpg'));
            return
        case "/car04.min.jpg":
            res.setHeader('Content-Type', 'image/jpg');
            res.writeHead(200);
            res.end(getImage('car04.min.jpg'));
            return
    }
}

const server = http.createServer(onRequest)

server.listen(2000, '127.0.0.1', () => {
    console.log("Server sudah berjalan, silakan buka http://localhost:2000");
})