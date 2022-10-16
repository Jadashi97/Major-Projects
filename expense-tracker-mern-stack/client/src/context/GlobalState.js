import React, {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";
import axios from 'axios';

// intial state
const initialState = {
    transactions : [
        {id: 1, text:"phone-bill", amount: -117},
        {id: 2, text:"salary", amount: 1800},
        {id: 3, text:"gas", amount: -160},
        {id: 4, text:"doordash", amount: 280},
        {id: 5, text:"rent", amount: -600},
        {id: 6, text:"school", amount: -800}
    ],
    error: null,
    loading: true
}

// create context

export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions

    // using Axios to fetch out data from the backend
    async function getTransactions(){
        try {
            const res = await axios.get('/api/v1/transactions');

            dispatch({
                type: "GET_TRANSACTIONS",
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: "TRANSACTION_ERROR",
                payload: err.response.data.error
            });
        }
    }



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
        error: state.error,
        loading: state.loading,
        deleteTransaction,
        addTransaction,
        getTransactions, 
    }}>
        {children}
    </GlobalContext.Provider>)
}