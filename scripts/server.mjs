import RED from 'node-red';
import express from 'express';
import http from 'http';
import path from 'path';

const HOST = '0.0.0.0';
const PORT = 1880;
const WORKSPACE = 'workspace';

const settings = {
    httpAdminRoot: '/red',
    httpNodeRoot: '/api',
    userDir: WORKSPACE,
    functionGlobalContext: {},
    verbose: false,
    flowFile: 'flows.json',
    nodesDir: [
        path.resolve(WORKSPACE, 'node_modules')
    ]
};

const app = express();
const server = http.createServer(app);
app.use('/', express.static('public'));

RED.init(server, settings);
app.use(settings.httpAdminRoot, RED.httpAdmin);
app.use(settings.httpNodeRoot, RED.httpNode);
server.listen(PORT, HOST, () => {
    console.log(`The server is working on http://127.0.0.1:${PORT}`);
});
RED.start();