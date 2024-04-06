const axios = require('axios');

const getChuckJokeService = async () => {
    const response = await axios.get('https://api.chucknorris.io/jokes/random');
    
    const chuckJoke = await response.data
    
    return chuckJoke;
}

module.exports = getChuckJokeService