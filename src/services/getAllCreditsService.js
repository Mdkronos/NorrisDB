const CreditModel = require('../models/credit.model');

const getAllCreditsService = async () => {
    const allCredits = await CreditModel.find();
    
    return allCredits;
}

module.exports = getAllCreditsService;