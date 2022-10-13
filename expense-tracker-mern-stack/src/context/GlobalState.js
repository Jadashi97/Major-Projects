import React, {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";

// intial state
const initialState = {
    transactions : [
        {id: 1, text:"water", amount: -5},
        {id: 2, text:"salary", amount: 910},
        {id: 3, text:"gas", amount: -80},
        {id: 4, text:"doordash", amount: 74}
    ]
}

// create context

export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return(<GlobalContext.Provider value={{
        transactions: state.transactions,
    }}>
        {children}
    </GlobalContext.Provider>)
}