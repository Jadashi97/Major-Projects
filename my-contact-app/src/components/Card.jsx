import React from "react";
import Address from "./Address";
import Detail from "./Detail";

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
                <Detail // add this component detail to cut repetition
                detailInfo = {props.birthDate}
                />
                <Detail
                detailInfo= {props.telNumber}
                />
                <Address
                addyInfor = {props.address}
                />
            </div>
        </div>
    );
}


export default Card;