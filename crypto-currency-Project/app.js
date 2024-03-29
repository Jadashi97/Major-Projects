const express = require("express", 4.18,1);

const https = require("https"); //use the native Https protocol

const app = express();

const bodyParser = require("body-parser");

//Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option
app.use(bodyParser.urlencoded({extended:true}));

//using https to perform get request from the polygon.io api
app.get("/", (req, res) =>{

    res.sendFile(__dirname + "/index.html");
});

app.post('/' , (req , res)=>{

    const query = req.body.crpto;

    const url = "https://api.polygon.io/v1/open-close/crypto/BTC/USD/2022-01-01?adjusted=true&apiKey=HM7ozeSZwtc0z4UsS9qmBRQEuXpJys7m"

    https.get(url, function(response){
        console.log(response.statusCode)


        response.on('data', (data) => {
            const btc22 = JSON.parse(data); //turns to a JavaScript Object Notation
            // console.log(btc22);

            const openTradePrice = btc22.openTrades[0].p; //allows us to tap into the p value of open BTC trades

            const closingTradePrice = btc22.closingTrades[1].p //allows us to tap into the p value of closing BTC trades

            //this allows sending of multiple infor to the browser thru the res.write

            res.write(`<h1>The opening price of BTC was USD: ${openTradePrice}</h1>`)
            res.write(`<h1>The closing price of BTC was USD: ${closingTradePrice}</h1>`)
            res.write(`<h1>The closing price of BTC was USD: ${closingTradePrice}</h1>`)
            res.end()
        });
    });

})


app.listen(3000, ()=>{

    console.log("listening on local host port 3000");
});