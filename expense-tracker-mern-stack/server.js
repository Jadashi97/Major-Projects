const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env'});

connectDB();

const transactions = require('./routes/transactions')

const app = express();

app.use(express.json()); //this allows us to use body parser


// app.get('/', (req, res)=> res.send("Ya Dunia! Mashallah!"));

app.use('/api/v1/transactions', transactions);

const PORT = process.env.PORT || 3000;


app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`.yellow.bold)
)