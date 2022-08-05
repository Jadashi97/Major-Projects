
import React from "react";

const date = new Date()

const currentYear = date.getFullYear();


function Footer(){
    return (
        <div className="footer">
            <footer>
            <h2>Worship Hours</h2>
            <h3>Sunday 1pm - 3pm</h3>
            <p> Copyright @ lokose {currentYear}</p>
            </footer>
        </div>
    )
}

export default Footer;