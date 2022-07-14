import React from "react";
import Header from "./Header";
import {useState} from "react";
import contactsData from "../contacts";
// import { BrowserRouter } from "react-router-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import AddContact from "./AddContact";

//this uses the card component created in card.jsx to dynamically create more contacts using the objects from contacts.js

function App(){
  const [contacts, setContacts] = useState(contactsData);
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);

  const addContact = contact =>{
        setContacts([{...contact, id: Math.random()}].concat(contacts))
  };

  const deleteContact = id => {
    setContacts(contacts.filter(c => c.id !== id)) //this verifies if id is truthy or falsy
  };

  const showAddForm = () => {
    setisAddFormVisible(false);
  };
  
  return (
    <div>
      <Header
        onshowAddForm={showAddForm}
      />{isAddFormVisible && (
        <AddForm
        
          />
      )}
    </div>
  
    );
}

export default App;
