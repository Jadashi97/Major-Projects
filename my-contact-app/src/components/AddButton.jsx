import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";


function AddButton({onclick}){
    return(
        <div>
            <input type="text" placeholder="FirstName" required/>{' '}

            <input type="text" placeholder="LastName" required/>{' '}
            <input type="text" placeholder="OtherNames" required/> {' '}
            <input type="text" placeholder="BirthDate" required/> {' '}
            <a href="##" onclick={onclick}>
                <FontAwesomeIcon size="lg" icon={faPlus} color="black" />
            </a>
        </div>
    );
}


export default AddButton;
