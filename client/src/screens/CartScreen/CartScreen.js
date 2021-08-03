import React from "react";
import "./CartScreen.scss";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CartItem from "../../components/CartItem/CartItem";
function CartScreen() {
  return (
    <div className="cartScreen">
      <div className="cartScreen-container">
        <div className="cartScreen-header">
          <ShoppingCartIcon />
          <span>MY CART</span>
        </div>
        <div className="cartScreen-body">
          <div className="cartScreen-body-header">
            <h4>Product</h4>
            <h4>Quantity</h4>
            <h4>Delete</h4>
            <h4>Price</h4>
          </div>
          <div className="cartScreen-body-main">
            <CartItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartScreen;
