const express = require('express');
const creditRouter = require('../routes/creditRouter');
const chuckJokeRouter = require('../routes/chuckJokeRouter');

const server = express();

server.use(express.json());

server.use('/api/norris', creditRouter);
server.use('/api/norris', chuckJokeRouter);

module.exports = server;
