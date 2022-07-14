import React from "react";

import {useState} from "react";

function AddForm({onAdd, onCancel}){
    const [name, setName] = useState(" ");
    const [birthDate, setNumber] = useState("");
    const [telNumber] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    return(
        <div>
            <div>
                <input
                    value = {name}
                    placeholder = "name"
                    onchange = {function(e){
                        setName(e.target.value)
                    }}
                    required
                />
            </div>
            <div>
                <input
                    value = {telNumber}
                    placeholder = "Phone Number"
                    onchange = {function(e){
                        setNumber(e.target.value)
                    }}
                    required
                />
            </div>
            <div>
                <input
                    value = {birthDate}
                    placeholder = "BirthDate"
                    onchange = {function(e){
                        setNumber(e.target.value)
                    }}
                    required
                />
                <input
                    value = {email}
                    placeholder = "Email"
                    onchange = {function(e){
                        setAddress(e.target.value)
                    }}
                    required
                />
            </div>
            <div>
                <input
                    value = {address}
                    placeholder = "Address"
                    onchange = {function(e){
                        setName(e.target.value)
                    }}
                    required
                />
            </div>
            <div>
                <a href="##" onClick={()=> onAdd({name, telNumber,birthDate, email, address })}>
                    Save
                </a>
            </div>
        </div>
    );
}

export default AddForm; 