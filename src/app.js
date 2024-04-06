const server = require ('./server/server');
require("dotenv").config();
require("./db/config");

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})