import React from "react";

function ExpenseItems(props){

     function handleClick(event){
        event.preventDefault();

        props.onDelete(props.id)
    }


    return(
        <div className="created-items">
            <li>
                {props.name}
                <div>
                    <span>
                        ${props.cost}
                    </span>
                    <button onClick={handleClick}>X</button>
                </div>
            </li>
        </div>
    )   

}


export default ExpenseItems;