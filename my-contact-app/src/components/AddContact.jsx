import React from "react";

// import {Link} from "react-router-dom"; //this allows us to use this npm package as a dependency


// function AddContact(props){
//     //Fragments lets us group children without adding extra nodes to the DOM
//     <React.Fragment>
//         <Link to="/">Back</Link>
//         <form className="field" onsubmit = {props.onSubmit}>
//             <div className="control">
//                 <input
//                     type ="text"
//                     name = "fname"
//                     className="input"
//                     placeholder="First Name"
//                     value = {props.first}
//                     onchange = {props.onchange}
//                 />

//                 <input
//                     type ="text"
//                     name = "name"
//                     className="input"
//                     placeholder="Last Name"
//                     value = {props.first}
//                     onchange = {props.onchange}
//                 />


//                 <input
//                     type ="text"
//                     name = "name"
//                     className="input"
//                     placeholder="other names"
//                     value = {props.first}
//                     onchange = {props.onchange}
//                 />


//                 <input
//                     type ="tel"
//                     name = "phone"
//                     className="input"
//                     placeholder="Mobile"
//                     value = {props.phone}
//                     onchange = {props.onchange}
//                 />

//                 <input
//                     type ="tel"
//                     name = "phone"
//                     className="input"
//                     placeholder="Mobile"
//                     value = {props.phone}
//                     onchange = {props.onchange}
//                 />
//             </div>
//         </form>
//     </React.Fragment>
//     return (
//         <button onclick={onclick}>add</button>
//     )
// }


 function AddContact(props){
    return(
    <div>
        <h1>{props.firstname}</h1>
        <p>{props.lastName}</p>
        <p>{props.otherNames}</p>
        <p>{props.birthDate}</p>
        <p>{props.userName}</p>
        <p>{props.userName}</p>
        <p>{props.email}</p>
        <p>{props.telNumber}</p>
        <br />
        <hr />
    </div>)
 }

export default AddContact;