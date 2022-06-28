const express = require("express", 4.18,1);

const app = express();


app.get("/", (req, res) =>{
    res.send("Hello world!")
});


app.listen(3000, ()=>{

    console.log("listening on local host port 3000");
});