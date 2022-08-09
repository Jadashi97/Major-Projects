import React from "react";


function Contact(props){

    //this passess the onDelete btn to the jsx when invoked in app.jsx

    function handleClick(event){
        event.preventDefault();
        
        props.onDelete(props.id)
    }

    function handleEdit(event){
        event.preventDefault();
        console.log("edit me!!");
        // props.onEdit(props.id)
    }

    return(
    
        <div>
            <form className="create-note">
                <h4>Name: {props.name}</h4>
                <p>Birth Date: {props.birthDate}</p>
                <p>username: {props.userName}</p>
                <p>Email: {props.email}</p>
                <p> Phone: {props.phone}</p>
                <button onClick={handleClick}>Delete</button>
                <button onClick={handleEdit}>Edit</button>
                <br/>
            </form>
        </div>
    )
}


export default Contact;
