const express = require('express');
const getChuckJokeController = require('../controller/chuckJokeController');

const chuckJokeRouter = express.Router();

chuckJokeRouter.get('/joke', getChuckJokeController);

module.exports = chuckJokeRouter; // Exportando o router para ser usado em outros arquivos