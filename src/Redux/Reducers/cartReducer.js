const initialState = {
  cartItems: [],
  quantity: 0,
}

export const cartReducer = (
  state = initialState,
  action
) => {
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
      const cartItems = [ ...state.cartItems ];
      const updatedCart = cartItems.filter(item => item.id !== action.product.id);
      return {
        ...state,
        cartItems: updatedCart,
      };
    default:
      return state;
  }
};
