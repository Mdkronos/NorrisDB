
const mongoose = require('mongoose');
require("dotenv").config();

const DATABASE = process.env.DATABASE_URL || "";

const startConnection = async () => {
    try {
        await mongoose.connect(DATABASE);
            console.log("Database connected successfully");
    } catch (error) {
        console.log("Error while connecting to database", error);
    }
}

startConnection(); // calling the function