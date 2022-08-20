import React from "react";
import expenseItems from "../expenseItems";
import ExpenseItems from "./ExpenseItems";
// import CreateItem from "./CreateItem";

function ListOfExpenses(){
    return(
        <div className="expenses">
            <p>Expense List</p>
            {expenseItems.map((item)=>{
                return(
                    <div>
                        <ExpenseItems 
                            id={item.id}
                            name={item.name}
                            cost={item.cost}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default ListOfExpenses;
