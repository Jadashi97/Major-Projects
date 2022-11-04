const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv'); //this helps us create global variables for our routes

const contacts = require('./routes/contacts');

dotenv.config({ path: './config/config.env'}); //this allows access of the created path on configs

const app = express();

app.use(express.json()) //Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.

// app.get("/", (req, res) =>{
//     res.send("yaaa Dunia")
// });


app.use('/api/v2/contacts', contacts) //this sets up out route

const PORT = process.env.PORT || 6000;


app.listen(PORT, () => {
    console.log(`port is up an running  on port ${PORT}`.yellow.bold)
})