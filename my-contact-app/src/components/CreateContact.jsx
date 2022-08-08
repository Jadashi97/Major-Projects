import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function CreateNewContact(props){
    const [contact, setContact] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        birthDate: "",
        number: "",


    });

    //handling change
    function HandleChange(event){
        const {person, value} = event.target; //destructing the contact of the person

        //setting up a function with a spread operator
        setContact((prevContact) =>{
            return{
                ...prevContact,
                [person]: value
            };
        })
    }

    //submit contact
    function submitContact(event){
        console.log("clicked!!")
        props.onAdd(contact); //this will pass the new contact thru the props to App.jsx

        setContact({
            firstName: "",
            lastName: "",
            userName: "",
            birthDate: "",
            number: "", 
        })

        event.preventDefault();
    }

    return(
        <div>
            <form  className="create-note">

                <input name="firstName" onChange={HandleChange} value={contact.firstName} placeholder="First Name" />
			    <input name="lastName" onChange={HandleChange} value={contact.lastName} placeholder="Last Name" />
                <input name="userName" onChange={HandleChange} value={contact.userName} placeholder="userName" />
                <input name="birthDate" onChange={HandleChange} value={contact.birthDate} placeholder="BirthDate"/>
                <input name="phone" onChange={HandleChange} value={contact.phone} placeholder="phone"/>
                <button onClick={submitContact}>Add</button>
            </form>
        </div>
    )
}
export default CreateNewContact;