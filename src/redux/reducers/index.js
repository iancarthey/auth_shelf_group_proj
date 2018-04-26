import { combineReducers } from 'redux';
import shelfReducer from './shelfReducer'
import user from './userReducer';
import login from './loginReducer';

const store = combineReducers({
  user,
  login,
  shelfReducer
});

export default store;
