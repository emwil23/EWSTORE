const INITIAL_STATE = {
  products: [],
  product: {},
  errors: '',
};

export const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_ALL':
      return { ...state, products: action.payload };

    case 'GET_SELECT':
      return { ...state, product: action.payload };

    case 'REMOVE_SELECT':
      return { ...state, product: {} };

    case 'ERROR':
      return { ...state, errors: action.payload };

    case 'REMOVE_ERROR':
      return { ...state, errors: '' };
    default:
      return state;
  }
};
