const express = require('express');
const { addCreditController,
    getAllCreditsController,
    getCreditByIdController,
    updateCreditController,
    deleteCreditController } = require('../controller/creditController');
const validatorMiddleware = require('../utils/validatorMiddleware');
const { check } = require('express-validator');
const idMiddleware = require('../utils/idMiddleware');


const creditRouter = express.Router();

creditRouter.get('/credit', getAllCreditsController);

creditRouter.get(
    '/credit/:id',
    idMiddleware,
    getCreditByIdController);

creditRouter.post(
    '/credit',
    check("date")
        .isInt({ min: 1940, max: 2025})
        .withMessage("Date must be a number between 1940 and 2025"),
    check("rating")
        .isFloat({ min: 0, max: 10 })
        .withMessage("Rating must be a number between 0 and 10"),
    validatorMiddleware,
    addCreditController);

creditRouter.put(
    '/credit/:id',
    check("date")
        .isInt({ min: 1940, max: 2025})
        .withMessage("Date must be a number between 1940 and 2025"),
    check("rating")
        .isFloat({ min: 0, max: 10 })
        .withMessage("Rating must be a number between 0 and 10"),
    validatorMiddleware,
    updateCreditController);

creditRouter.delete(
    '/credit/:id',
    idMiddleware,
    deleteCreditController);


module.exports = creditRouter; // Export the router to be used in the app.js file.