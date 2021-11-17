//Types
import {
  LOG_IN,
  LOG_OUT,
  GET_ALL,
  GET_SELECT,
  REMOVE_SELECT,
  GET_USER,
  REMOVE_USER,
  GET_CATEGORY,
  GET_CART,
  REMOVE_CART,
  REMOVE_CATEGORY,
} from './types';
import history from '../history';

//API call
import api from '../Components/api/FakeStore';

// LOGIN ACTION
export const logIn = (formvalues) => async (dispatch) => {
  const response = await api.post('/auth/login', { ...formvalues });

  dispatch({ type: LOG_IN, payload: response.data });

  //Redirect user
  history.push('/dashboard');
};

//LOGOUT ACTION
export const logOut = () => {
  return {
    type: LOG_OUT,
  };
};

//USER GET ACTION
export const getUserInfo = (id) => async (dispatch) => {
  const response = await api.get(`/users/${id}`);

  dispatch({ type: GET_USER, payload: response.data });
};

//USER REMOVE ACTION
export const removeUserInfo = () => {
  return {
    type: REMOVE_USER,
  };
};

// PRODUCTS GET ACTION
export const getAllProducts = () => async (dispatch) => {
  //Test phase check for token
  // if (token === '') dispatch({ type: 'ERROR', payload: 'ERROR' });
  // else {
  const response = await api.get('/products');
  dispatch({ type: GET_ALL, payload: response.data });
};

/* export const removeError = () => {
  return {
    type: REMOVE_ERROR,
  };
}; */

// PRODUCT SELECT GET ACTION
export const getSelectedProduct = (id) => async (dispatch) => {
  const response = await api.get(`/products/${id}`);

  dispatch({ type: GET_SELECT, payload: response.data });
};

//PRODUCT SELECT REMOVE ACTION
export const removeSelectedProduct = () => {
  return {
    type: REMOVE_SELECT,
  };
};

// PRODUCT CATEGORY GET ACTION
export const getCategory = (category) => async (dispatch) => {
  const response = await api.get(
    `https://fakestoreapi.com/products/category/${category}`
  );

  dispatch({ type: GET_CATEGORY, payload: response.data });
};

// PRODUCT CATEGORY REMOVE ACTION
export const removeCategory = () => {
  return {
    type: REMOVE_CATEGORY,
  };
};

//CART GET ACTION
export const getCartDetails = (id) => async (dispatch) => {
  const response = await api.get(`https://fakestoreapi.com/carts/${id}`);

  dispatch({ type: GET_CART, payload: response.data });
};

//CART REMOVE ACTION
export const removeCartDetails = () => {
  return { type: REMOVE_CART };
};
