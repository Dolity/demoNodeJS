// import Rabbit from './rabbit.js';
// import { menu1, specialMenu } from './ingredients.js'

// const rabbit1 = new Rabbit('Mimi', 'Holland Lop');
// console.log(rabbit1);

// console.log(menu1);
// specialMenu();

//process.argv
// const minimist = require('minimist');

// function get_triangle_area(width, height) {
//     return 1 / 2 * width * height;
// }

// function get_rectangle_area(width, height) {
//     return width * height;
// }

// const args = process.argv.slice(2);
// const cleanArgs = minimist(args);
// const { s, w, h } = cleanArgs;

// let area = 0;
// if (s === 'tri') {
//     area = get_triangle_area(Number(w), Number(h));
// }
// else if (s === 'rect') {
//     area = get_rectangle_area(Number(w), Number(h));
// }

// console.log(area);

//process.env
// import dotenv from 'dotenv';
// dotenv.config();

// const { MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_HOSTNAME, MYSQL_PORT, MYSQL_DB } = process.env;
// const dbString = `mysql://${MYSQL_USERNAME}:${MYSQL_PASSWORD}@${MYSQL_HOSTNAME}:${MYSQL_PORT}/${MYSQL_DB}`;
// console.log(dbString);

//HTTP Server
// require('dotenv').config();
// const http = require('http');
// const mysql = require('mysql2/promise');

// const { APP_POST, MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_HOSTNAME, MYSQL_PORT, MYSQL_DB } = process.env;

// const dbConnectionString = `mysql://${MYSQL_USERNAME}:${MYSQL_PASSWORD}@${MYSQL_HOSTNAME}:${MYSQL_PORT}/${MYSQL_DB}`

// async function startApp() {
//     const db = await mysql.createConnection(dbConnectionString)

//     const server = http.createServer(async (req, res) => {
//         const { method, url } = req;

//         if (method === 'GET' && url === '/') {
//             const results = await db.query('SELECT * FROM todo');
//             const resultsString = results[0].map(item => `<p>${item.title}</p>`).toString();
//             res.setHeader('Content-Type', 'text/html; charset=UTF-8');
//             res.statusCode = 200;
//             res.end('<h1>Homepage /ทับ</h1>' + resultsString)
//         }
//         else if (method === 'GET' && url === '/about') {
//             res.setHeader('Content-Type', 'text/html; charset=UTF-8');
//             res.statusCode = 200;
//             res.end('<h1>Homepage /aboutเกี่ยวกับ</h1>')
//         }
//     });

//     server.listen(APP_POST, () => {
//         console.log('Server is running at port ' + APP_POST + '...');
//     });
// }

// startApp();

//Read File
// const http = require('http');
// const fs = require('fs');
// const path = require('path');
// const marked = require('marked');

// const server = http.createServer((req, res) => {
//     const { method, url } = req;

//     let content = '';
//     if (method === 'GET' && url === '/') {
//         try {
//             // content = fs.readFileSync('home.txt', 'utf-8');
//             content = fs.readFileSync(path.resolve('files', 'home.md'), 'utf-8');
//             content = marked(content);
//         } catch (error) {
//             console.log(error);
//         }

//         res.setHeader('Content-Type', 'text/html; charset=UTF-8');
//         res.statusCode = 200;
//         res.end(content)
//     }
// });

// server.listen(8888, () => {
//     console.log('Server is running at port ' + 8888 + '...');
// });

//Write File
// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     const { method, url } = req;

//     let content = '';
//     if (method === 'GET' && url === '/') {
//         // try {
//         const logContent = `${new Date()} : ${method} ${url}\n`;
//         fs.writeFileSync('request.log', logContent, { flag: 'a+' });
//         //     content = marked(content);
//         // } catch (error) {
//         //     console.log(error);
//         // }

//         res.setHeader('Content-Type', 'text/html; charset=UTF-8');
//         res.statusCode = 200;
//         res.end(content)
//     }
// });

// server.listen(8888, () => {
//     console.log('Server is running at port ' + 8888 + '...');
// });

//Steam File
// const Stream = require('stream');

// const readStream = new Stream.Readable({
//     read() { }
// });

// const writeStream = new Stream.Writable({
//     write(chunk, encoding, callback) {
//         console.log(chunk.toString());
//         callback();
//     }
// });

// readStream.pipe(writeStream);

// readStream.push('Wave');
// readStream.push('Wave Tender');

//Stream many
// const fs = require('fs');
// const path = require('path');
// const http = require('http');

// const readStream = fs.createReadStream(path.join('home.txt'), 'utf-8');
// const writeStream = fs.createWriteStream(path.join('cloneHome.txt'), 'utf-8');

// readStream.pipe(writeStream);

// readStream.on('data', (chunk) => {
//     console.log(chunk);
// });

//Stream Video Reduce Memory
// const fs = require('fs');
// const path = require('path');
// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'video/mp4');

//     const readStream = fs.createReadStream(path.join('testVideo.mp4'));

//     readStream.pipe(res);
// });

// server.listen(8888, () => {
//     console.log('Server is running at port ' + 8888 + '...');
// });

//Package Json
console.log('Hello NPX');
