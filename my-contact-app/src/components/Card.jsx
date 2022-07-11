import React from "react";

//this sets a dynamic way of passing the contact information using react properties(props)
function Card(props){
    return(
        <div className="card">
            <div className="top">
                <h3 className="name">{props.firstName}</h3>
                <h3 className="name">{props.lastName}</h3>
                <h3 className="name">{props.otherNames}</h3>
                
            </div>
            <div className="bottom">
                <p className="userName">{props.userName}</p>
                <p className="email">{props.email}</p>
                <p className="info">{props.telNumber}</p>
                <p className="info">{props.birthDate}</p>
                <p className="address">{props.address}</p>
            </div>
        </div>
    );
}


export default Card;