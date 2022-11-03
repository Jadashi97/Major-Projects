const express = require('express');
const colors = require('colors');

const contacts = require('./routes/contacts')


const app = express();
const port = 3000;

app.use(express.json()) //Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.

// app.get("/", (req, res) =>{
//     res.send("yaaa Dunia")
// });


app.use('api/v2/constacts', contacts) //this sets up out route

app.listen(port, () => {
    console.log(`port is up an running  on port ${port}`.green.bold)
})