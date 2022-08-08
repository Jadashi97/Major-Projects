import React from "react";


function Contact(props){
    return(
        // console.log("this is a contact!!")
        <div>
            <h4>Name: {props.name}</h4>
            <p>Birth Date: {props.birthDate}</p>
            <p>username: {props.userName}</p>
            <p>Email: {props.email}</p>
            <p> Phone: {props.phone}</p>
            <br/>
        </div>
    )
}


export default Contact;
