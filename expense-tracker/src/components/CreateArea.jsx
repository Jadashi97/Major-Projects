import React, { useState } from "react";

function CreateArea(){

    const [expense, setExpense]  = useState({
        name: " ",
        cost: " "
    });

    //handling the form change

    function HandleChange(event){

        const {name, value} = event.target; //destructuring the name and the value;

        //setting up a function with a spread operator

        setExpense((prevExpense) => {
            return{
                ...prevExpense,
                [name]: value
            }

        })
    }

    return(
        <div>
            <p>Add Expense</p>
            <form action="">
                <input name="item"  value={expense.name} type="text" placeholder="Item"  /> {"  "}
                <input name="cost"  value={expense.cost} type="number" placeholder="cost"  /> {"  "}
                <button>Create</button>
            </form>
        </div>
    )
}

export default CreateArea;
