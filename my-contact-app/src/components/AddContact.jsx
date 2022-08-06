import React, { useState } from "react";

 function AddContact(props){
    return(
    <div>

        <h4>Name: {props.firstName} {props.otherNames}, {props.lastName}</h4>
        <br></br>
        <p>Birth Date: {props.birthDate}</p>
        <br></br>
        <p>username: {props.userName}</p>
        <br></br>
        <p>Email: {props.email}</p>
        <br></br>
        <p> Phone: {props.telNumber}</p>
        <br />
        <hr />
    </div>)
 }

export default AddContact;