import React from "react";
import "./ProductCard.scss";
import CheckSharpIcon from "@material-ui/icons/CheckSharp";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useHistory } from "react-router-dom";

function ProductCard() {
  const history = useHistory();
  return (
    <div className="productCard">
      <div className="productCard-container">
        <div className="productCard-image">
          <img
            onClick={() => history.push("/product-details")}
            src="https://laptop.bg/system/images/248254/normal/ROG_STRIX_G15_G512.jpg"
            alt=""
          />
        </div>
        <div className="productCard-body">
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
        <div className="productCard-footer">
          <div className="productCard-price">2199.99</div>
          <div className="productCard-buy">
            <AddShoppingCartIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
