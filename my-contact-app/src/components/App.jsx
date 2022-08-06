import React from "react";
import Header from "./Header";
import contactsData from "../contacts";
import CreateNewContact from "./CreateContact";
import AddContact from "./AddContact";
import AddButton from "./AddButton";
import Form from "./Form"

var userIsRegistered = true;


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
    <CreateNewContact/>
    <AddButton/>
    <br />
    {contactsData.map(newContacts)}
    <Form isRegistered={userIsRegistered} />

    </div>

  )
}
export default App;
