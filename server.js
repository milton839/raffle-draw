// require('dotenv').config('');
const http = require('http');
const app = require('./app/app');

const server = http.createServer(app);

const port = process.env.PORT || 8080;
// console.log(process.env.PORT);
server.listen(port, () => {
    console.log("server started at " + port);
})