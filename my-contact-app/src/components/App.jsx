import React from "react";
import contacts from "../contacts";
import Card from "./Card";

//this uses the card component created in card.jsx to dynamically create more contacts using the objects from contacts.js

function App(){
    return (
    <div>
        <h1 className="heading">My contacts</h1>
        <Card
           firstName = {contacts[0].firstName}
           lastName = {contacts[0].lastName}
           otherNames = {contacts[0].otherNames}
           birthDate = {contacts[0].birthDate}
           userName = {contacts[0].userName}
           email = {contacts[0].email}
           telNumber = {contacts[0].telNumber}
        //    address = {contacts[0].address}
        />

        <Card
           firstName = {contacts[1].firstName}
           lastName = {contacts[1].lastName}
           otherNames = {contacts[1].otherNames}
           birthDate = {contacts[1].birthDate}
           userName = {contacts[1].userName}
           email = {contacts[1].email}
           telNumber = {contacts[1].telNumber}
        //    address = {contacts[1].address}
        />

        <Card
           firstName = {contacts[2].firstName}
           lastName = {contacts[2].lastName}
           otherName = {contacts[2].otherNames}
           birthDate = {contacts[2].birthDate}
           userName = {contacts[2].userName}
           email = {contacts[2].email}
           telNumber = {contacts[2].telNumber}
        //    address = {contacts[2].address}
        />

    </div>
    );
}

export default App;
