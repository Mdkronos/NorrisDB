const CreditModel = require('../models/credit.model');

const getCreditByIdService = async (req) => {
    const { id } = req.params;
    const creditById = await CreditModel.findById(id);

    if(!creditById) {
        return {statusCode: 404, message: 'Credit not found'};
    }
    
    return creditById;
}

module.exports = getCreditByIdService;