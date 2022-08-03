import React from "react";
function Header(){
    return(
        <div>
            <div class="topnav">
                <a class="active" href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
            {/* <img src={logo} alt="Logo" />; */}
        </div>
    )
}

export default Header;