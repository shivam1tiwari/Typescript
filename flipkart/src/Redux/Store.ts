import { createStore, combineReducers } from 'redux';
import { cartReducer } from './CartReducer.ts';
import { userReducer } from './UserReducer.ts';

const combineReducer = combineReducers({
  cart:cartReducer,
  user:userReducer,
})
 const store = createStore(combineReducer);

 export default store;