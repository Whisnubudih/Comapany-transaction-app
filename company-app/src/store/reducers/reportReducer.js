import { LOADING_PRODUCTS, ERROR_PRODUCTS,FETCH_REPORTS_SUCCESS } from '../actionTypes';

const initialState = {
  reports: [],
  userLoading: true,
  userError: null,
};

function reportReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_REPORTS_SUCCESS :
        return {
            ...state,
            reports: action.payload
        }
    case LOADING_PRODUCTS:
      return {
        ...state,
        userLoading: action.payload,
      };

    case ERROR_PRODUCTS:
      return {
        ...state,
        userError: action.payload,
      };

    default:
      return state;
  }
}

export default reportReducer;