import React from "react";
import "./CartScreen.scss";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CartItem from "../../components/CartItem/CartItem";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import CurrencyFormat from "react-currency-format";

function CartScreen() {
  const history = useHistory();
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className="cartScreen">
      <div className="cartScreen-container">
        <div className="cartScreen-header">
          <ShoppingCartIcon />
          <span>MY CART</span>
        </div>
        {cartItems.length === 0 ? (
          <div className="empty-cart-message">
            <span>CART IS EMPTY</span>
            <span onClick={() => history.push("/products")}>
              CLICK FOR BACK TO THE SHOP
            </span>
          </div>
        ) : (
          <>
            {" "}
            <div className="cartScreen-body">
              <div className="cartScreen-body-header">
                <h4>Product</h4>
                <h4>Quantity</h4>
                <h4>Delete</h4>
                <h4>Price</h4>
              </div>
              <div className="cartScreen-body-main">
                {cartItems?.map((item, index) => (
                  <CartItem key={index} cartItem={item} />
                ))}
              </div>
            </div>
            <div className="cartScreen-footer">
              <div className="cartScreen-subtotal">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      Subtotal ({cartItems.length} items):<span>{value}</span>
                    </>
                  )}
                  decimalScale={2}
                  value={cartItems.reduce(
                    (amount, item) => item.quantity * item.price + amount,
                    0
                  )}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </div>
              <div className="cartScreen-buttons">
                <button onClick={() => history.push("/products")}>
                  BACK TO SHOP
                </button>
                <button disabled={true}>GO CHECKOUT</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartScreen;
