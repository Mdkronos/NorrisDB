const CreditModel = require('../models/credit.model')

const idMiddleware = async (req, res, next) => {
    
    const { id } = req.params;
    
    const idValidator = await CreditModel.findById(id)

    if (!idValidator) {
        console.log(`Error: Unexpected Id:(${id})`)
        return res.json(`Error: Unexpected Id:(${id}). Doesn't have a Chuck Norris credit.`)
    } else {
        next();
    }
    console.log(`LOG: Id entered Correctly.- ${new Date().toLocaleTimeString()}`)
}

module.exports = idMiddleware;

