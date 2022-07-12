import React from "react";
import Address from "./Address";
import Detail from "./Detail";

//this sets a dynamic way of passing the contact information using react properties(props)
function Card(props){
    return(
        <div>
            <div className="top">
                <p className="name">{props.firstName}</p>
                <p className="name">{props.lastName}</p>
                <p className="name">{props.otherNames}</p>
                <p className="userName">{props.userName}</p>
                <p className="email">{props.email}</p>
                <Detail // add this component detail to cut repetition
                detailInfo = {props.birthDate}
                />
                <Detail
                detailInfo= {props.telNumber}
                />
            </div>
            <hr />
            <div className="bottom">
                <Address
                addyInfor = {props.address}
                />
            </div>
        </div>
    );
}


export default Card;