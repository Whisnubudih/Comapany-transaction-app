import { FETCH_TRANSACTIONS_SUCCESS,FETCH_TRANSACTIONSID_SUCCESS, LOADING_PRODUCTS, ERROR_PRODUCTS,TRANSACTIONSID_DELETE_SUCCESS } from '../actionTypes'

const initialState = {
    transactions: [],
    transactionId: [],
    productsLoading: true,
    productsError: null,
    
}

function transactionReducer(state = initialState,action) {
    switch (action.type) {
        case FETCH_TRANSACTIONS_SUCCESS :
            return {
                ...state,
                transactions: action.payload
            }
        case FETCH_TRANSACTIONSID_SUCCESS :
            return {
                ...state,
                transactionId: action.payload
            } 
        case TRANSACTIONSID_DELETE_SUCCESS :
          const id =action.payload
          const transactions = state.transactions.filter((transaction) => transaction.id !== id)
          return {
              ...state,
                  transactions,
          }
        case LOADING_PRODUCTS:
          return {
            ...state,
            productsLoading: action.payload,
          };
    
        case ERROR_PRODUCTS:
          return {
            ...state,
            productsError: action.payload,
          };
        default:
            return state
    }
}


export default transactionReducer