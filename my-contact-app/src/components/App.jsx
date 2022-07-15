import React from "react";
import Header from "./Header";
// import {useState} from "react";
import contactsData from "../contacts";
// import { BrowserRouter } from "react-router-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import AddContact from "./AddContact";

var isLoggedIn = true;


//this is a tempelate to cut down on repetition
const newContacts = (newContact) =>{
  return (
    <div>
    <AddContact
      key = {newContact.id}
      firstName = {newContact.firstName}
      lastName = {newContact.lastName}
      otherNames=  {newContact.otherNames}
      birthDate =  {newContact.birthDate}
      userName =  {newContact.userName}
      email = {newContact.email}
      telNumber = {newContact.telNumber}
    />

    </div>    
  )
}

console.log(newContacts);


function App(){
  return (
    <div>
    <Header/>
    <hr />
    {contactsData.map(newContacts)}
    <br />
    </div>

  )
}
export default App;
