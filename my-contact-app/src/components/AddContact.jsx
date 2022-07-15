import React from "react";

 function AddContact(props){
    return(
    <div>
        <h1>{props.firstname}</h1>
        <br></br>
        <p>{props.lastName}</p>
        <br></br>
        <p>{props.otherNames}</p>
        <br></br>
        <p>{props.birthDate}</p>
        <br></br>
        <p>{props.userName}</p>
        <br></br>
        <p>{props.email}</p>
        <br></br>
        <p>{props.telNumber}</p>
        <br />
        <hr />
    </div>)
 }

export default AddContact;