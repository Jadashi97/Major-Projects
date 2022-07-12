import React from "react";
import contacts from "../contacts";
import Card from "./Card";

//this uses the card component created in card.jsx to dynamically create more contacts using the objects from contacts.js
function CreateList(contact){
   return (
    <Card
      key = {contact.id}
      firstName = {contact.firstName}
      lastName = {contact.lastName}
      otherNames = {contact.otherNames}
      birthDate = {contact.birthDate}
      userName = {contact.userName}
      email = {contact.email}
      telNumber = {contact.telNumber}
      address = {contact.address.country}
    />  
   )

}


function App(){
    return (
    <div>
        <h1 className="heading">My contacts</h1>
        {contacts.map(CreateList)}

    </div>
    );
}

export default App;
