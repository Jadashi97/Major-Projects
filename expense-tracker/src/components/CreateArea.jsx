import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


function CreateArea(props){

    const [expense, setExpense]  = useState({
        name: " ",
        cost: " "
    });

    //handling the form change

    function HandleChange(event){

        const {name, value} = event.target; //destructuring the name and the value;

        //setting up a function with a spread operator
        setExpense((prevExpense) => {
            // console.log("clicked");

            return{
                ...prevExpense,
                [name]: value
            }
            
        });
    }

    // set function to handle the submit when the cost is created

    function submitExpense(event){
        // console.log("click me!")

        event.preventDefault(); //this will prevent the default behaviour of the submit form

        props.onAdd(expense); //this will pass the new contact thru the props created in the app.jsx

        setExpense({
            name: " ",
            cost: " "
        })

    }

    return(
        <div>
            <h3>Add Expense</h3>
            <form className="alert alert-success">
                <label htmlFor="name">Name</label>
                <input 
                    name="name" 
                    type= "text"
                    onChange={HandleChange} 
                    value={expense.name} 
                    placeholder="Item"  
                /> {"  "}
                
                <label htmlFor="cost">Cost</label>
                <input 
                    name="cost" 
                    type= "text"
                    onChange={HandleChange} 
                    value={expense.cost} 
                    placeholder="cost"  
                /> {"  "}
                <button onClick={submitExpense}>Create</button>
            </form>
        </div>
    )
}

export default CreateArea;
