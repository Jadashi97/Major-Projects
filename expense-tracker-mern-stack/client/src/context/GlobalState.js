import React, {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";

// intial state
const initialState = {
    transactions : [
        {id: 1, text:"phone-bill", amount: -117},
        {id: 2, text:"salary", amount: 1800},
        {id: 3, text:"gas", amount: -160},
        {id: 4, text:"doordash", amount: 280},
        {id: 5, text:"rent", amount: -600},
        {id: 6, text:"school", amount: -800}
    ]
}

// create context

export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return(<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
        
    }}>
        {children}
    </GlobalContext.Provider>)
}