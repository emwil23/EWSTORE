//Types
import { LOG_IN, LOG_OUT } from './types';

export const logIn = (tokenId) => {
  return {
    type: LOG_IN,
    payload: tokenId,
  };
};

export const logOut = () => {
  return {
    type: LOG_OUT,
  };
};
