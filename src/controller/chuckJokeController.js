const getChuckJokeService = require("../services/getchuckJokeService");


const getChuckJokeController = async (req, res) => {
       
    const joke = await getChuckJokeService();
    
    const { value } = joke;

    res.status(200).json({value});
}

module.exports = getChuckJokeController;