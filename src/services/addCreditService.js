const CreditModel = require('../models/credit.model');

const addCreditService = async (req, res) => {
    const credit = req.body;

    try {
        const newCredit = new CreditModel(credit);
        await newCredit.save();

        return { status: credit.status, message: 'Credit added successfully'}
    } catch (error) {
        return { status: credit.status, message: 'Failed to add credit' }
    }
}

module.exports = addCreditService; // Export the addCreditService function