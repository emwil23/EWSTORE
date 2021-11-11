const INITIAL_STATE = {
  token: '',
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return { ...state, token: action.payload };
    case 'LOG_OUT':
      return { ...state, token: '' };
    default:
      return state;
  }
};
