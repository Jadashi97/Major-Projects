import React from "react";


function Contact(props){

    //this passess the onDelete btn to the jsx when invoked in app.jsx

    function handleClick(){
        props.onDelete(props.id)
    }

    return(
    
        <div>
            <h4>Name: {props.name}</h4>
            <p>Birth Date: {props.birthDate}</p>
            <p>username: {props.userName}</p>
            <p>Email: {props.email}</p>
            <p> Phone: {props.phone}</p>
            <button onClick={handleClick}>Delete</button>
            <br/>
        </div>
    )
}


export default Contact;
