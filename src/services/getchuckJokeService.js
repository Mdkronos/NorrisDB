

const getChuckJokeService = async () => {
    const chuckJoke = await fetch('https://api.chucknorris.io/jokes/random');
    // console.log(chuckJoke);
    const { icon_url, value } = await chuckJoke;
    console.log({value})
    // return { icon_url, value }
    return chuckJoke;
}

module.exports = getChuckJokeService