function AppReducer(state, action) {
    switch(action.type){

        // this handles the states and adds the transactions from GlobalState and passes that to components.
        case "GET_TRANSACTIONS":
            return{
                ...state,
                loading: false, 
                transactions: action.payload
            }
        case "DELETE_TRANSACTION":
            return{
                ...state,
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
            }
        case "ADD_TRANSACTION":
            return{
                ...state,
                transactions: [ ...state.transactions, action.payload]
            }
        case "TRANSACTION_ERROR":
            return{
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}   

export default AppReducer;
