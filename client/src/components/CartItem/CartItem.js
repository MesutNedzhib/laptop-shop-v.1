import React from "react";
import "./CartItem.scss";
import CheckSharpIcon from "@material-ui/icons/CheckSharp";
import CancelSharpIcon from "@material-ui/icons/CancelSharp";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

function CartItem() {
  return (
    <div className="cartItem">
      <div className="cartItem-container">
        <div className="cartItem-info">
          <img
            src="https://laptop.bg/system/images/248254/normal/ROG_STRIX_G15_G512.jpg"
            alt=""
          />
          <p>ASUS ROG STRIX G15 G512LI-HN065</p>
          <ul>
            <li>
              <CheckSharpIcon className="icon" />{" "}
              <span>Intel Core i7-10750H</span>
            </li>
            <li>
              <CheckSharpIcon className="icon" /> <span>8 GB</span>
            </li>
            <li>
              <CheckSharpIcon className="icon" />{" "}
              <span>Nvidia GeForce GTX 1660 Ti</span>
            </li>
            <li>
              <CheckSharpIcon className="icon" /> <span>512 GB SSD</span>
            </li>
          </ul>
        </div>
        <div className="cartItem-quantity">
          <RemoveIcon />
          <input type="number" min="1" defaultValue="1" />
          <AddIcon />
        </div>
        <div className="cartItem-delete">
          <CancelSharpIcon />
        </div>
        <div className="cartItem-price">
          <span>$ 2199.99</span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
