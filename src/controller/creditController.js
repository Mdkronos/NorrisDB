const addCreditService = require("../services/addCreditService");
const deleteCreditService = require("../services/deleteCreditService");
const getAllCreditsService = require("../services/getAllCreditsService");
const getCreditByIdService = require("../services/getCreditByIdService");
const updateCreditService = require("../services/updateCreditService");


const addCreditController = async (req, res) => {
    const credits = await addCreditService(req)

    res.status(201).json(credits);
}

const getAllCreditsController = async (req, res) => {
    const credits = await getAllCreditsService();

    res.json(credits);
}

const getCreditByIdController = async (req, res) => {
    const creditById = await getCreditByIdService(req);

    res.json(creditById);
}

const updateCreditController = async (req, res) => {
    const updatedCredit = await updateCreditService(req);

    res.json(updatedCredit);
}

const deleteCreditController = async (req, res) => {
    const deletedCredit = await deleteCreditService(req);
        
    res.json(deletedCredit);
    
}


module.exports = { 
    addCreditController,
    getAllCreditsController,
    getCreditByIdController,
    updateCreditController, 
    deleteCreditController
};