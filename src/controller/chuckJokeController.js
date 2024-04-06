const getChuckJokeService = require("../services/getchuckJokeService");


const getChuckJokeController = async (req, res) => {
       
    const chuckJoke = await getChuckJokeService();
    
    const { icon_url: avatar, value: joke } = chuckJoke;

    res.status(200).json({avatar, joke});
}

module.exports = getChuckJokeController;