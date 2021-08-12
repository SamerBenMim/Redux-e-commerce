//represent all stats of the app, it combines all the state together 
import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

export default combineReducers({
  user: userReducer
});