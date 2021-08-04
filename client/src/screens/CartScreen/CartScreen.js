import React from "react";
import "./CartScreen.scss";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CartItem from "../../components/CartItem/CartItem";
import { useHistory } from "react-router-dom";
function CartScreen() {
  const history = useHistory();
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
            <CartItem />
            <CartItem />
          </div>
        </div>
        <div className="cartScreen-footer">
          <div className="cartScreen-subtotal">
            Subtotal : <span>2199.99</span>
          </div>
          <div className="cartScreen-buttons">
            <button onClick={() => history.push("/")}>BACK TO SHOP</button>
            <button disabled={true}>GO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartScreen;
