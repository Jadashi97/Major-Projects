import React from "react";
import Link from "react-router-dom"
import AddButton from "./AddButton";


function Header(){
    return (
        <div>
            <h1>Contact</h1>
            <Link to="/add">Add Contact</Link>
        </div>
    )
}

export default Header;

