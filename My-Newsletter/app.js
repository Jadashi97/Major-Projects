const express = require("express");

var app = express();

var bodyParser = require("body-Parser");

// this helps our server  to serve up static files like CSS  and images
app.use(express.static("public"))


// this sets up the get method for the home route
app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html")
});

// this enables you to use body-parser to grab data from the user
app.use(bodyParser.urlencoded({extended:true}));


//grabbing the users infor onto our servers
app.post("/", function(res, req){
    const firstName = req.body.fname;
    const lastName = req.body.lname;
    const email = req.body.email;

    // creating our data object to store our subscribers and send that to mailchimp servers
    const data = {
        members: [{
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: firstName,
                NAME: lastName,
            }
        }]
    };

    // this is just to turn the data we have above into a JSON format
    const jsonData = JSON.stringify(data);

    //this sets up the url used in the request function
    const url = "https://us17.api.mailchimp.com/3.0/lists/df65c6c1f2"

    // this is for our option during the request to set up the authetication from mailChimp
    const options = {
        method: "POST",
        auth: "jadashi97:e07e95477e64d22e04ae25920ea06cd8-us17"
    }

    //this is to make a request to the browser and check what data should be sent to the user on the browser

    const request = https.request(url, options, function(response){
        
        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/succes.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }

        response.on("data", function (data) {
            console.log(JSON.parse(data));
        })
    });

    // this writes what needs to be shown to the user if successful or not
    request.write(jsonData);
    request.end()
});

// this is to post a redirect when the sign fails so the user can start over

app.post('/failure' , (req , res)=>{

    res.redirect("/")
 
 });

app.listen("3000", function(){
    console.log("listening on local host 3000");
})