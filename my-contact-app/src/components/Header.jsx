import React from "react";
import Link from "react-router-dom"; //npm package that contains bindings for using a React Router


function Header(){
    return (
        <div>
            <h1>Contact</h1>
            <Link to="/add">Add Contact</Link>
        </div>
    )
}

export default Header;

