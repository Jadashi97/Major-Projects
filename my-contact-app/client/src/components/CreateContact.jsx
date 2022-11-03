import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function CreateNewContact(props){
    const [contact, setContact] = useState({
        name: " ",
        birthDate: " ",
        userName: " ",
        email: " ",
        phone: " ",
    });

    //handling change
    function HandleChange(event){
        const {name, value} = event.target; //destructing the contact of the person

        //setting up a function with a spread operator
        setContact((prevContact) =>{
            return{
                ...prevContact,
                [name]: value
            };
        })
    }

    //submit contact
    function submitContact(event){
        console.log("clicked!!")
        props.onAdd(contact); //this will pass the new contact thru the props to App.jsx

        setContact({
            name: "",
            birthDate: "",
            userName: "",
            email: "",
            phone: "", 
        })

        event.preventDefault();
    }

    return(
        <div>
            <form  className="create-note">

                <input name="name" onChange={HandleChange} value={contact.name} placeholder="First Name" />
                <input name="userName" onChange={HandleChange} value={contact.userName} placeholder="userName" />
                <input name="birthDate" onChange={HandleChange} value={contact.birthDate} placeholder="BirthDate"/>
			    <input name="email" onChange={HandleChange} value={contact.email} placeholder="email" />
                <input name="phone" onChange={HandleChange} value={contact.phone} placeholder="phone"/>
                <button onClick={submitContact}>Add</button>
            </form>
        </div>
    )
}
export default CreateNewContact;