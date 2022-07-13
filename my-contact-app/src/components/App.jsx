import React from "react";
import contacts from "../contacts";
import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./Header";
import AddContact from "./AddContact";

//this uses the card component created in card.jsx to dynamically create more contacts using the objects from contacts.js

function App(){
    return (
      <Router>
        <div className="fluid-container">
          <div className="notification">
          <Header style ={{marginBottom: "30px"}}/>
          <h1 className="heading">My contacts</h1>
          <Route exact path = "/" component = {Contacts}/>
          <Route path = "/add" component = {AddContact}/>
          </div>

      </div>
      </Router>
    );
}

export default App;
