import React from "react";
import { Link } from "react-router-dom";



function Home(){

    return(
        <div>
            <h1>South Sudanese Community Church</h1>
            <Link to="/bodyContent/Home">Home</Link> |
            <Link to="/bodyContent/about">About Us</Link>

        </div>

    )
}

export default Home;  