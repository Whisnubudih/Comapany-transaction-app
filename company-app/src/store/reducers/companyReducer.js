import { FETCH_COMPANIES_SUCCESS,FETCH_COMPANIESID_SUCCESS, LOADING_PRODUCTS, ERROR_PRODUCTS,COMPANIESID_DELETE_SUCCESS } from '../actionTypes'

const initialState = {
    companies: [],
    companyId: [],
    productsLoading: true,
    productsError: null,
    
}

function reimbursementReducer(state = initialState,action) {
    switch (action.type) {
        case FETCH_COMPANIES_SUCCESS :
            return {
                ...state,
                companies: action.payload
            }
        case FETCH_COMPANIESID_SUCCESS :
            return {
                ...state,
                companyId: action.payload
            } 
        case COMPANIESID_DELETE_SUCCESS :
          const id =action.payload
          const companies = state.companies.filter((company) => company.id !== id)
          return {
              ...state,
                  companies,
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


export default reimbursementReducer