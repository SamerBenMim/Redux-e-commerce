//represent all stats of the app, it combines all the state together 
import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer'
export default combineReducers({
  user: userReducer,
  cart: cartReducer
});