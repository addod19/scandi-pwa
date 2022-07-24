const initialState = {
  cartItems: [],
}

export const cartReducer = (
  state = initialState,
  action
) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      let newCart = [...state.cartItems];
      let itemIndex = state.cartItems.findIndex(item => item.id === action.product.id);
      let curItem = state.cartItems[itemIndex];

      if (curItem) {
        state.cartItems[itemIndex] = curItem;
        newCart = [ ...state.cartItems ];
      } else {
        newCart = newCart.concat(action.product);
      }
      return {
        cartItems: newCart
        };
    case "REMOVE_FROM_CART":
      return { product: action.payload };
    default:
      return state;
  }
};
