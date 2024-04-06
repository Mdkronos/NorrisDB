const CreditModel = require('../models/credit.model');

const updateCreditService = async (req) => {
    try {
        const { id } = req.params;
        const updateCredit = req.body;
        const creditDatabase = await CreditModel.findById(id);
        // Validar que el credito exista:
        if (!creditDatabase) {
            return { statusCode: 404, message: 'Credit not found'}
        }
        // Actualizar el credito:
        creditDatabase.creditname = updateCredit.creditname;
        creditDatabase.discipline = updateCredit.discipline;
        creditDatabase.character = updateCredit.character;
        creditDatabase.date = updateCredit.date;
        creditDatabase.rating = updateCredit.rating;

        await creditDatabase.save();
        return { statusCode: 200, message: 'Credit updated successfully'}

    } catch (err) {
        return { statusCode: 500, message: 'Internal server error'}
    }
}

module.exports = updateCreditService;