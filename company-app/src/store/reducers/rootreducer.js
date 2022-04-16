import { combineReducers } from 'redux';
import userReducer from './userReducer';
import itemReducer from './itemReducer';
import companyReducer from './companyReducer';


const rootReducer = combineReducers({
    itemReducer,
  userReducer,
  companyReducer,
  
});

export default rootReducer;