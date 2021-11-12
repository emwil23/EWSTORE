import { combineReducers } from 'redux';
import { authReducer } from './authReducer';

import { productsReducer } from './productReducer';

export default combineReducers({
  auth: authReducer,
  productList: productsReducer,
});
