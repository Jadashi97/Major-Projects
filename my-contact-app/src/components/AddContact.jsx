import React from "react";

import {Link} from "react-router-dom"; //this allows us to use this npm package as a dependency


function AddContact(props){
    //Fragments lets us group children without adding extra nodes to the DOM
    <React.Fragment>
        <Link to="/">Back</Link>
        <form className="field" onsubmit = {props.onSubmit}>
            <div className="control">

            </div>
        </form>
    </React.Fragment>
    return (
        <button onclick={onclick}>add</button>
    )
}

export default AddContact;