const http = require('http');
const app = require('./app');

const PORT =  54863;
const server = http.createServer(app);

global.__basedir = __dirname + "/..";

async function startServer() {
    server.listen(PORT, '0.0.0.0', () => {
        console.log(`listening on port ${PORT}`);
    });
};

startServer();