const express = require('express');
const { addCreditController,
    getAllCreditsController,
    getCreditByIdController,
    updateCreditController,
    deleteCreditController } = require('../controller/creditController');

const creditRouter = express.Router();

creditRouter.get('/credit', getAllCreditsController);
creditRouter.get('/credit/:id', getCreditByIdController);
creditRouter.post('/credit', addCreditController);
creditRouter.put('/credit/:id', updateCreditController);
creditRouter.delete('/credit/:id', deleteCreditController);


module.exports = creditRouter; // Export the router to be used in the app.js file.