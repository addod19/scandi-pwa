const initialState = {
  categories: [],
  product: {},
  currency: '$',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'GET_CATEGORIES':
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };
    case 'GET_PRODUCT':
      return {
        ...state,
        product: action.payload,
        loading: false,
      };
    case 'FILTER_CURRENCY':
      return {
        ...state,
        currency: action.payload.data.category.products,
        loading: false,
      };
    default:
      return state;
  }
}