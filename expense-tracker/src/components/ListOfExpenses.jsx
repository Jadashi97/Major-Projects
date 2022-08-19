import React from "react";
import expenseItems from "../expenseItems";
import CreateItem from "./CreateItem";
// import CreateItem from "./CreateItem";

function ListOfExpenses(){
    return(
        <div>
            <p>Expense List</p>
            {expenseItems.map((item)=>{
                return(
                    <ul>
                        <CreateItem 
                            id={item.id}
                            name={item.name}
                            cost={item.cost}
                        />
                    </ul>
                )
            })}
        </div>
    )
}

export default ListOfExpenses;
