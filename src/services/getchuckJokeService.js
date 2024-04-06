const axios = require('axios');

const getChuckJokeService = async () => {
    const response = await axios.get('https://api.chucknorris.io/jokes/random');
    
    const chuckJoke = await response.data
    
    if (!chuckJoke) {
        return {statusCode: 500, message: 'Error getting joke'}
    }
    return chuckJoke;
}

module.exports = getChuckJokeService