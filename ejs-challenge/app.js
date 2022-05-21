//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash"); // this requires the lodash module that is installed under modules 

const posts = []; // create empty array

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// this sends our content to the home root route

app.get("/", function(req, res){
  res.render("home", {homeContent:homeStartingContent, publishedPost:posts
  });
});

//shows the about page and it's content is rendered there
app.get("/about", function(req, res){

  res.render("about", {aboutus:aboutContent})
});

//this shows the contact page 
app.get("/contact", (req, res)=>{
  
  res.render("contact", {mycontact: contactContent})

});

//this shows the compose page
app.get("/compose", (req, res)=>{

  res.render("compose")
});

//create a post route to pass the infor that is publihed after hitting the compose button on the a new blog

app.post('/compose' , (req , res)=>{
  // this helps tap into the what user composes in the browser thru bodyparser
  const theTitle = req.body.title;
  const mainpost = req.body.content;
 
  //create an object to store the infor passed by the user when they publish their written blog
  const postedData = {
    title: theTitle,
    content : mainpost,
  };
  posts.push(postedData);

  // //turning the postedData above into a json format
  // const jsonData = JSON.stringify(postedData)

  //sends our user back to the root route
  res.redirect("/")
});

//set a root route to handle the different pages with different blogs using expresss routing 
app.get("/posts/:postName",(req, res)=>{
  const titleRequest = _.lowerCase(req.params.postName); //variable that stores express root route
  //using the forEach looping method to check whether the title of our blog post is same as our express, root route that we put in the browser.
  posts.forEach(function(post){
    //use the (_.) after using lodash in our app.js
    const storedTitle = _.lowerCase(post.title) // store the blog post title from (/compose)
    if(titleRequest === storedTitle){
      res.render("post", {
        title:post.title,
        content:post.content})
    }
  })
})
//this runs our server on the port 3000
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
