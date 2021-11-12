//Types
import {
  LOG_IN,
  LOG_OUT,
  GET_ALL,
  GET_SELECT,
  REMOVE_SELECT,
  REMOVE_ERROR,
} from './types';
import history from '../history';

//API call
import api from '../Components/api/FakeStore';

export const logIn = (formvalues) => async (dispatch) => {
  const response = await api.post('/auth/login', { ...formvalues });

  dispatch({ type: LOG_IN, payload: response.data });

  //Redirect user
  history.push('/dashboard');
};

export const logOut = () => {
  return {
    type: LOG_OUT,
  };
};

export const getAllProducts = (token) => async (dispatch) => {
  //Test phase check for token
  if (token === '') dispatch({ type: 'ERROR', payload: 'ERROR' });
  else {
    const response = await api.get('/products');
    dispatch({ type: GET_ALL, payload: response.data });
  }
};

export const removeError = () => {
  return {
    type: REMOVE_ERROR,
  };
};

export const getSelectedProduct = (id) => async (dispatch) => {
  const response = await api.get(`/products/${id}`);

  dispatch({ type: GET_SELECT, payload: response.data });
};

export const removeSelectedProduct = () => {
  return {
    type: REMOVE_SELECT,
  };
};
