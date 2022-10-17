const path = require('path'); //this hepls manipulate path names in production
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

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use('/api/v1/transactions', transactions); //this sets up our api routes


if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build')); //sets the static folder

    //below loads up when in production mode and when we have any other routes to load up aside from the api route
    app.get('*', (req, res)=> res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

const PORT = process.env.PORT || 4000;


app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`.yellow.bold)
)