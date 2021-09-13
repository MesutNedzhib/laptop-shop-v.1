import React from "react";
import "./ProductCard.scss";
import CheckSharpIcon from "@material-ui/icons/CheckSharp";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../actions/cartActions";

function ProductCard({ product }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const addToCartHandle = (item) => {
    dispatch(addToCart(item));
  };
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
          <p onClick={() => history.push(`/product-details/${product._id}`)}>
            {product.name}
          </p>
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
          <div
            className="productCard-buy"
            onClick={() =>
              addToCartHandle({
                _id: product._id,
                name: product.name,
                image: product.images[0],
                processorModel: product.processorModel,
                memory: product.memory,
                video: product.video,
                storage: product.storage,
                price: product.price,
                countInStock: product.countInStock,
                quantity: 1,
              })
            }
          >
            <AddShoppingCartIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
