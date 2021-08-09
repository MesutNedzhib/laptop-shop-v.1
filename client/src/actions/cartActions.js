import {
  ADD_TO_CART,
  CHANGE_CART_ITEM_QUANTITY,
  REMOVE_FROM_CART_BY_ID,
} from "../constants/cartConstants";

export const addToCart = (cartItem) => (dispatch, getState) => {
  dispatch({
    type: ADD_TO_CART,
    payload: cartItem,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCartById = (_id) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_CART_BY_ID,
    payload: _id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const changeCartItemQuantity = (cartItem) => (dispatch) => {
  dispatch({
    type: CHANGE_CART_ITEM_QUANTITY,
    payload: cartItem,
  });
};
