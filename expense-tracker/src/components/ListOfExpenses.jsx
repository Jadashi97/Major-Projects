import React from "react";
import expenseItems from "../expenseItems";

function ListOfExpenses(){
    return(
        <div>
            <p>here are all your expenses</p>
            {expenseItems.map()}
        </div>
    )
}

export default ListOfExpenses;
