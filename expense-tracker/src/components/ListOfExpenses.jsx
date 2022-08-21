import React from "react";
import expenseItems from "../expenseItems";
import ExpenseItems from "./ExpenseItems";
// import CreateItem from "./CreateItem";

function ListOfExpenses(){
    return(
        <div className="expenses">
            <h3>Expense List</h3>
            {expenseItems.map((item, index)=>{
                return(
                    <div>
                        <ExpenseItems 
                            key={index}
                            id={index}
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
