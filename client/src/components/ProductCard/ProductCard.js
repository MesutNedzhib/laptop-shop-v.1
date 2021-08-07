import React from "react";
import "./ProductCard.scss";
import CheckSharpIcon from "@material-ui/icons/CheckSharp";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useHistory } from "react-router-dom";

function ProductCard({ product }) {
  const history = useHistory();
  return (
    <div className="productCard">
      <div className="productCard-container">
        <div className="productCard-image">
          <img
            onClick={() => history.push(`/product-details/${product._id}`)}
            src={product.images[0]}
            alt=""
          />
        </div>
        <div className="productCard-body">
          <p>{product.name}</p>
          <ul>
            <li>
              <CheckSharpIcon className="icon" />{" "}
              <span>{product.processor}</span>
            </li>
            <li>
              <CheckSharpIcon className="icon" /> <span>{product.memory}</span>
            </li>
            <li>
              <CheckSharpIcon className="icon" /> <span>{product.video}</span>
            </li>
            <li>
              <CheckSharpIcon className="icon" /> <span>{product.storage}</span>
            </li>
          </ul>
        </div>
        <div className="productCard-footer">
          <div className="productCard-price">{product.price}</div>
          <div className="productCard-buy">
            <AddShoppingCartIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
