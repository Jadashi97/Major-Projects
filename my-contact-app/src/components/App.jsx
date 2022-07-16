import React from "react";
import Header from "./Header";
import contactsData from "../contacts";
import Login from "./Login"
import AddContact from "./AddContact";
import AddButton from "./AddButton";

var isLoggedIn = true;


//this is a tempelate to cut down on repetition
const newContacts = (newContact) =>{
  return (
    <div className="header">
    <AddContact
      key = {newContact.id}
      firstName = {newContact.firstName}
      lastName = {newContact.lastName}
      otherNames=  {newContact.otherNames}
      birthDate =  {newContact.birthDate}
      userName =  {newContact.userName}
      email = {newContact.email}
      telNumber = {newContact.telNumber}
      address = {newContact.Address}
    />
    </div>    
  )
}

function App(){
  return (
    <div className="container">
    <Header/>
    <AddButton/>
    <br />
    {contactsData.map(newContacts)}
    {isLoggedIn === true? <h1>Voila, Welcome!!</h1>: <Login/>}
    </div>

  )
}
export default App;
