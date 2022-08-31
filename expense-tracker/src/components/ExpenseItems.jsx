import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ExpenseItems(props){

     function handleClick(event){
        event.preventDefault();

        props.onDelete(props.id)
    }

    function handleUpdateClick(event){
        event.preventDefault();

        console.log("clicked");
        
        props.onClickUpdate(props.id)
    }
    




    return(
        <div className="alert alert-danger">
            <li>
                {/* solve the unique key bug */}
                {/* {props.id}  */}
                {props.name}
                ${props.cost}
                <div>
                    <button onClick={handleClick}>delete</button>
                    <button onClick={handleUpdateClick}>Update</button>
                </div>
            </li>
        </div>
    )   

}


export default ExpenseItems;