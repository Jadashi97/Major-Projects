import React from "react";
function Header(){
    return(
        <div>
            <div>
                <img alt="myimage" src="/logo_ss1/jpg" width={20} height={20}></img>
            </div>
            <div class="topnav">
                <a class="active" href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#news">New Members</a>
                <a href="#contact">Contact us</a>
                <a href="#news">Sermons and Resources</a>
                <a href="#news">Ministries</a>
                <a href="#news"><button>Giving</button></a>

            </div>
            {/* <img src={logo} alt="Logo" />; */}
        </div>
    )
}

export default Header;