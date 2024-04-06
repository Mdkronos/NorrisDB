const express = require('express');
const creditRouter = require('../routes/creditRouter');

const server = express();

server.use(express.json());

server.use('/api/norris', creditRouter);

module.exports = server;
