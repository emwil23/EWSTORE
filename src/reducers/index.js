import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
import { authReducer } from './authReducer';

import { productsReducer } from './productReducer';

export default combineReducers({
  auth: authReducer,
  productList: productsReducer,
  // form: formReducer,
});
