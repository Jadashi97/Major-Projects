import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import AddButton from "./AddButton";


function Header({onshowAddForm, searchString, setSearchString}){
    return (
        <header>
            <AddButton onclick={onshowAddForm}/>
            <h1>Contacts </h1>
            <label>
                <div>
                    <FontAwesomeIcon icon={faSearch} color="#757575" />  
                </div>
                {/* <input
                    type="text"
                    className=""
                    placeholder="Search"
                    value = {searchString}
                    onChange = { e => setSearchString(e.target.value)}    
                /> */}
            </label>
        </header>
    )
}

export default Header;

