import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ExpenseItems(props){

     function handleClick(event){
        event.preventDefault();

        props.onDelete(props.id)
    }

    function handleUpdateClick(event){

        console.log("clicked");
        
        event.preventDefault();

        props.onClickUpdate(props.id)
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
                    <button onClick={handleClick}>delete</button>
                    <button onClick={handleUpdateClick}>Update</button>
                </div>
            </li>
        </div>
    )   

}


export default ExpenseItems;