import React, {useState} from "react";


function Contact(props){
    const [newContact, setNewContact] = useState(false); ///USE THIS TO FIX THE EDIT ISSUE HAPPENING


    //this passess the onDelete btn to the jsx when invoked in app.jsx

    function handleClick(event){
        event.preventDefault();
        
        props.onDelete(props.id)
    }

    function handleChange(event){
        setNewContact(event.target.value)

    }
    function handleEdit(event){
        event.preventDefault();
        props.onEdit(props.id, newContact);
        setNewContact(" ");
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
                <button onChange={handleChange} onClick={handleEdit}>Edit</button>
                <br/>
            </form>
        </div>
    )
}


export default Contact;
