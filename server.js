const express = require('express');
const dataRouter = require('./data/dataRouting');
const server = express();

server.use(express.json());
server.use('/api/posts', dataRouter);

server.get('/', (req, res) => {
    res.send(`<h1>Posts</h1>`);
})

server.get('*', (req, res) => {
    res.status(404).send('Page not found')
})

module.exports = server;