const INITIAL_STATE = {
  token: '',
  userInfo: {},
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return { ...state, token: action.payload };
    case 'LOG_OUT':
      return { ...state, token: '' };

    case 'GET_USER':
      return { ...state, userInfo: action.payload };
    case 'REMOVE_USER':
      return { ...state, userInfo: {} };
    default:
      return state;
  }
};
