import React from "react";
import "./CartItem.scss";
import CheckSharpIcon from "@material-ui/icons/CheckSharp";
import CancelSharpIcon from "@material-ui/icons/CancelSharp";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import CurrencyFormat from "react-currency-format";
import { useDispatch } from "react-redux";
import {
  changeCartItemQuantity,
  removeFromCartById,
} from "../../actions/cartActions";
import { useHistory } from "react-router-dom";
import { GET_ALL_CART_ITEMS } from "../../constants/cartConstants";

function CartItem({ cartItem }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const cartItemQuantityMinusHandle = () => {
    if (cartItem.quantity !== 1) {
      dispatch(
        changeCartItemQuantity({
          quantity: cartItem.quantity - 1,
          _id: cartItem._id,
        })
      );
      dispatch({ type: GET_ALL_CART_ITEMS });
    }
  };

  const cartItemQuantityPlusHandle = () => {
    if (cartItem.countInStock !== cartItem.quantity) {
      dispatch(
        changeCartItemQuantity({
          quantity: cartItem.quantity + 1,
          _id: cartItem._id,
        })
      );
    }
  };

  const removeFromCartHandle = (cartItem) => {
    dispatch(removeFromCartById({ _id: cartItem }));
  };

  return (
    <div className="cartItem">
      <div className="cartItem-container">
        <div className="cartItem-info">
          <img
            src={cartItem.image}
            alt=""
            onClick={() => history.push(`/product-details/${cartItem._id}`)}
          />
          <p onClick={() => history.push(`/product-details/${cartItem._id}`)}>
            {cartItem.name}
          </p>
          <ul>
            <li>
              <CheckSharpIcon className="icon" />{" "}
              <span>{cartItem.processorModel}</span>
            </li>
            <li>
              <CheckSharpIcon className="icon" /> <span>{cartItem.memory}</span>
            </li>
            <li>
              <CheckSharpIcon className="icon" /> <span>{cartItem.video}</span>
            </li>
            <li>
              <CheckSharpIcon className="icon" />{" "}
              <span>{cartItem.storage}</span>
            </li>
          </ul>
        </div>
        <div className="cartItem-quantity">
          <RemoveIcon onClick={() => cartItemQuantityMinusHandle()} />
          <input type="number" min="1" value={cartItem.quantity} />

          <AddIcon onClick={() => cartItemQuantityPlusHandle()} />
        </div>
        <div className="cartItem-delete">
          <CancelSharpIcon onClick={() => removeFromCartHandle(cartItem._id)} />
        </div>
        <div className="cartItem-price">
          <CurrencyFormat
            renderText={(value) => (
              <>
                <span>{value}</span>
              </>
            )}
            decimalScale={2}
            value={cartItem.quantity * cartItem.price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
