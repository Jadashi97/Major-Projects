import React, {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";
import axios from 'axios';

// intial state
const initialState = {

    // this is our initial state and displays the list transactions from the backend
    transactions : [],
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
            const res = await axios.get('/api/v1/transactions'); //this uses axios to get transactions from the backend

            // below dispatches the getTransactions in from the AppReducer.js
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



    async function deleteTransaction(id){

        try {
            await axios.delete(`/api/v1/transactions/${id}`);   //this uses axios to delete transactions in the backend
            
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            });
        } catch (err) {
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: err.resonse.data.error
            });
            
        }
    }

    async function addTransaction(transaction){
        const config = {
            headers: {
                'Content-Type': "application/json"
            }
        }

        try {
            const res = await axios.post('/api/v1/transactions', transaction, config);

            dispatch({
                type: 'ADD_TRANSACTION',
                payload: res.data.data
            });

        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            });  
        }
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