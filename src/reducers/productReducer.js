const INITIAL_STATE = {
  products: [],
  product: [],
  cart: {},
};

export const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_ALL':
      return { ...state, products: action.payload };

    case 'GET_SELECT':
      return { ...state, product: action.payload };

    case 'REMOVE_SELECT':
      return { ...state, product: {} };

    case 'GET_CATEGORY':
      return { ...state, products: action.payload };

    case 'REMOVE_CATEGORY':
      return { ...state, products: [] };

    case 'GET_CART':
      return { ...state, cart: action.payload };

    case 'REMOVE_CART':
      return { ...state, cart: {} };

    /* case 'ERROR':
      return { ...state, errors: action.payload };

    case 'REMOVE_ERROR':
      return { ...state, errors: '' }; */
    default:
      return state;
  }
};
