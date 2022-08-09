import React, { useState } from "react";
import Header from "./Header";
import contacts from "../contacts"
import CreateNewContact from "./CreateContact";
import Contact from "./Contact";
// import Form from "./Form"

// var userIsRegistered = true;

function App(){
      const [contacts, setContacts] = useState([]) //destructure and set a state

      //this will check the contacts we have and add a contact
      function addContact(newContact){
        setContacts(prevContacts =>{
          return [...prevContacts, newContact] // use the spread operator add contacts to array of contacts
        });

      }

      //add a delete button to the each contact
      function deleteContact(id){
        setContacts(prevContacts =>{
          return prevContacts.filter((contactItem, index)  => {
            return index !== id;
          })
        })
      }

      //add edit btn to update the contact

      function editContact(){
        console.log("update me")
      }

      return (
        <div className="container">
        <Header/>
        <CreateNewContact onAdd={addContact}/>
        <br />
        {contacts.map((contactItem, index)=> {
            return (
              <Contact
                Key= {index}
                id= {index}
                name = {contactItem.name}
                birthDate =  {contactItem.birthDate}
                userName =  {contactItem.userName}
                email = {contactItem.email}
                phone = {contactItem.phone}
                onDelete={deleteContact}          
              />
            );
        })}
        {/* <Form isRegistered={userIsRegistered} /> */}

        </div>

      )
}
export default App;
