import React, { useState } from "react";
import Header from "./Header";
import contactsData from "../contacts";
import CreateNewContact from "./CreateContact";
import AddContact from "./AddContact";
// import Form from "./Form"

// var userIsRegistered = true;


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
      const [contacts, setContacts] = useState([]) //destructure and set a state

      //this will check the contacts we have and add a contact
      function addContact(newContact){
        setContacts(prevContacts =>{
          return [...prevContacts, newContact] // use the spread operator add contacts to array of contacts
        });

      }

      //add a delete button to the each contact

      return (
        <div className="container">
        <Header/>
        <CreateNewContact onAdd={addContact}/>
        <br />
        {contactsData.map(newContacts)}
        {/* <Form isRegistered={userIsRegistered} /> */}

        </div>

      )
}
export default App;
