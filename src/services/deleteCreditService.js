const CreditModel = require('../models/credit.model');

const deleteCreditService = async (req) => {
    try {
        const { id } = req.params;
        const deleteCredit = await CreditModel.deleteOne({_id: id});
            
        // deletedCount: contador de eliminacion de los objetos de mongo
        if (deleteCredit.deletedCount === 0) {
            return { statusCode: 404, message: 'Credit not found'}
        }
        return deleteCredit;

    } catch (error) {
        return { statusCode: 500, message: 'Internal server error' }
    } // error si esta mal la peticion o cayo el servidor
   
}

module.exports = deleteCreditService;