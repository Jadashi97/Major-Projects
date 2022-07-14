import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function AddButton({onclick}){
    return(
        <a href="##" onclick={onclick}>
            <FontAwesomeIcon size="lg" icon={faPlus} color="white" />
        </a>
    );
}


export default AddButton;
