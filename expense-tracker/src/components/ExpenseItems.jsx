import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ExpenseItems(props){

     function handleClick(event){
        event.preventDefault();

        props.onDelete(props.id)
    }



    return(
        <div className="alert alert-danger">
            <li>
                {/* solve the unique key bug */}
                {props.id} 
                {props.name}
                <div>
                    <span>
                        ${props.cost}
                    </span>
                    <button onClick={handleClick}>x</button>
                </div>
            </li>
        </div>
    )   

}


export default ExpenseItems;