export const addToCart = (product) => {
  console.log(product);
  return {
    type: "ADD_TO_CART",
    product
  }
};

export const removeFromCart = (product) => (dispatch, getState) => {
  const cartItems = getState()
    .cart.cartItems.slice()
    .filter((x) => x._id !== product._id);
  dispatch({ type: "REMOVE_FROM_CART", payload: { cartItems } });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
