import React from "react";

function CreateItem(props){
    return(
        <div className="created-items">
            <li>
                {props.name}
                <div>
                    <span>
                        ${props.cost}
                    </span>
                </div>
            </li>
        </div>
    )   

}


export default CreateItem;