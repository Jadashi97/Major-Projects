import React, { useCallback, useState } from "react";

function CreateNewContact(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [otherName, setOtherName] = useState("");
    const [birthDate, setBirthDate] = useState("");



    return(
        <div>
			<input value={firstName} type="text" placeholder="First Name" />
			<input value={lastName} type="text" placeholder="Last Name" />
            <input value={otherName} type="text" placeholder="OtherNames" required/> {' '}
            <input value={birthDate} type="text" placeholder="BirthDate" required/> {' '}
		</div>
    )

}


export default CreateNewContact;