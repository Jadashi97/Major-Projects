import React, { useState } from "react";

function CreateArea(props){

    const [expense, setExpense]  = useState({
        name:" ",
        cost:" "
    });

    //handling the form change

    function HandleChange(event){

        const {name, value} = event.target; //destructuring the name and the value;

        //setting up a function with a spread operator
        setExpense((prevExpense) => {
            return{
                ...prevExpense,
                [name] : value
            };
            // console.log("clicked")
        });
    }

    // set function to handle the submit when the cost is created

    function submitExpense(event){
        event.preventDefault(); //this will prevent the default behaviour of the submit form

        // props.onAdd(expense); //this will pass the new contact thru the props created in the app.jsx

        setExpense({
            
            name: " ",
            cost: " "

        })

    }

    return(
        <div>
            <h3>Add Expense</h3>
            <form action="">
                <input name="item" onChange={HandleChange} value={expense.name} type="text" placeholder="Item"  /> {"  "}
                <input name="cost" onChange={HandleChange} value={expense.cost} type="text" placeholder="cost"  /> {"  "}
                <button onClick={submitExpense}>Create</button>
            </form>
        </div>
    )
}

export default CreateArea;
