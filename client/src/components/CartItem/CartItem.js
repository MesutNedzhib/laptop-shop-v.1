import React, { useState } from "react";
import "./CartItem.scss";
import CheckSharpIcon from "@material-ui/icons/CheckSharp";
import CancelSharpIcon from "@material-ui/icons/CancelSharp";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import CurrencyFormat from "react-currency-format";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCartItemQuantity,
  removeFromCartById,
} from "../../actions/cartActions";
import { GET_ALL_CART_ITEMS } from "../../constants/cartConstants";

function CartItem({ cartItem }) {
  const dispatch = useDispatch();

  const [currentQuantityState, setCurrentQuantityState] = useState(
    cartItem.quantity
  );

  const cartItemQuantityMinusHandle = () => {
    if (currentQuantityState !== 1) {
      setCurrentQuantityState(currentQuantityState - 1);
      dispatch(
        changeCartItemQuantity({
          quantity: currentQuantityState,
          _id: cartItem._id,
        })
      );
      dispatch({ type: GET_ALL_CART_ITEMS });
    }
  };
  const cartItemQuantityPlusHandle = () => {
    setCurrentQuantityState(currentQuantityState + 1);
    if (cartItem.countInStock !== cartItem.quantity) {
      dispatch(
        changeCartItemQuantity({
          quantity: currentQuantityState,
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
          <img src={cartItem.image} alt="" />
          <p>{cartItem.name}</p>
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
          <input
            type="number"
            min="1"
            value={currentQuantityState}
            // defaultValue={currentQuantityState}
            // onChange={(e) =>
            //   chnageCartItemQuantityHandle(e.target.value, cartItem._id)
            // }
          />

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
