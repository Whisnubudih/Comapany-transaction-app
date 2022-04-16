import { combineReducers } from 'redux';
import userReducer from './userReducer';
import itemReducer from './itemReducer';
import companyReducer from './companyReducer';
import transactionReducer from './transactionReducer';
import reportReducer from './reportReducer';


const rootReducer = combineReducers({
    itemReducer,
  userReducer,
  companyReducer,
  transactionReducer,
  reportReducer,
  
});

export default rootReducer;