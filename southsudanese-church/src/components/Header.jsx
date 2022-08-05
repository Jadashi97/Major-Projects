import React from "react";


function Header(){

    return(


        <div>
            <div>
            </div>
            <div class="topnav">
                {/* <a class="active" href="#home">Home</a> */}
                <img href="#home" class="active" alt="myimage" src="/sspic4.png" width={170} height={120}></img>
                <a href="#news"><button>GIVING</button></a>
                <a href="#news">NEW MEMBERS</a>
                <a href="#contact">CONTACT US</a>
                <a href="#news">SERMONS</a>
                <a href="#news">RESOURCES</a>
                <a href="#about">ABOUT</a>
            </div>
        </div>
    )
}

export default Header;