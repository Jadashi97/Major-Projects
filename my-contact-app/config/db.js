const mongoose = require('mongoose');

const connectDB = async()=> {
    try {
        // use mongoose to connect to the Mongo database

        const conn = await mongoose.connect(process.env.MONGO_URI, {
            // useCreatedIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline.bold);
    } catch (error) {
        console.log(`Error: ${error.message}`.red);
        process.exit(1);
        
    }
}

// use the module system in node.js to export the file
module.exports = connectDB