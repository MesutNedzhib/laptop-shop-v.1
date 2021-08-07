import React, { useEffect, useState } from "react";
import "./ProductDetailsScreen.scss";
import { useDispatch, useSelector } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CheckSharpIcon from "@material-ui/icons/CheckSharp";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { useLocation } from "react-router-dom";
import { getProductById } from "../../actions/productsActions";

function ProductDetailsScreen() {
  const location = useLocation();
  const dispatch = useDispatch();

  const productId = location.pathname.split("/")[2];
  const { product } = useSelector((state) => state.products);

  let images = [
    "https://laptop.bg/system/images/248254/normal/ROG_STRIX_G15_G512.jpg",
    "https://laptop.bg/system/images/248257/normal/ROG_STRIX_G15_G512.jpg",
    "https://laptop.bg/system/images/248256/normal/ROG_STRIX_G15_G512.jpg",
    "https://laptop.bg/system/images/248255/normal/ROG_STRIX_G15_G512.jpg",
    "https://laptop.bg/system/images/248258/normal/ROG_STRIX_G15_G512.jpg",
  ];

  const [footerBodyActive, SetFooterBodyActive] = useState(true);

  useEffect(() => {
    dispatch(getProductById(productId));
  }, [dispatch, productId]);

  const changeFooterBodyActiveState = () => {
    SetFooterBodyActive(!footerBodyActive);
  };
  return (
    <div className="productDetailsScreen">
      <div className="productDetailsScreen-container">
        <div className="productDetailsScreen-header">
          <span>{product?.data?.name}</span>
        </div>
        <div className="productDetailsScreen-body">
          <div className="productDetailsScreen-body-basic-info">
            <div>
              <Carousel
                id="carousel"
                showStatus={false}
                showArrows={false}
                showIndicators={false}
                emulateTouch
                infiniteLoop
                autoPlay={true}
                showThumbs={false}
              >
                {product?.data?.images?.map((item, index) => (
                  <img key={index} src={item} alt={item} />
                ))}
              </Carousel>
            </div>
            <div>
              <Carousel
                showStatus={false}
                showArrows={false}
                showIndicators={false}
                emulateTouch
                infiniteLoop
                autoPlay={true}
                showThumbs={false}
                interval={5000}
              >
                {images.map((item, index) => (
                  <img key={index} src={item} alt={item} />
                ))}
              </Carousel>
            </div>
            <div>
              <Carousel
                id="carousel"
                showStatus={false}
                showArrows={false}
                showIndicators={false}
                emulateTouch
                infiniteLoop
                autoPlay={true}
                showThumbs={false}
              >
                {product?.data?.images?.map((item, index) => (
                  <img key={index} src={item} alt={item} />
                ))}
              </Carousel>
            </div>
          </div>
          <div className="productDetailsScreen-body-carousel">
            <div>
              <Carousel
                id="carousel"
                showStatus={false}
                showArrows={true}
                // showIndicators={false}
                emulateTouch
                // infiniteLoop
                autoPlay={false}
                // showThumbs={false}
                thumbWidth={100}
              >
                {product?.data?.images?.map((item, index) => (
                  <img key={index} src={item} alt={item} />
                ))}
              </Carousel>
            </div>
          </div>
          <div className="productDetailsScreen-body-basic-info">
            <div className="price">${product?.data?.price}</div>
            <div>
              <h3>Characteristics</h3>
              <ul>
                <li>
                  <CheckSharpIcon className="icon" />{" "}
                  <span>{product?.data?.processorModel}</span>
                </li>
                <li>
                  <CheckSharpIcon className="icon" />{" "}
                  <span>{product?.data?.memory}</span>
                </li>
                <li>
                  <CheckSharpIcon className="icon" />{" "}
                  <span>{product?.data?.video}</span>
                </li>
                <li>
                  <CheckSharpIcon className="icon" />{" "}
                  <span>{product?.data?.storage}</span>
                </li>
              </ul>
            </div>

            <div className="available">
              {product?.data?.countInStock === 0 ? (
                ""
              ) : (
                <>
                  <CheckCircleIcon />
                  <span>Available</span>
                </>
              )}
            </div>
            <div className="qunatity">
              <RemoveIcon />
              <input type="number" min="1" defaultValue="1" />
              <AddIcon />
            </div>
            <div className="buyBtn">
              <button>BUY</button>
            </div>
          </div>
        </div>
        <div className="productDetailsScreen-footer">
          <div
            onClick={() => changeFooterBodyActiveState()}
            className="productDetailsScreen-footer-header"
          >
            <ArrowDropDownIcon />
            <span>SPECIFICATIONS</span>
            <ArrowDropDownIcon />
          </div>
          <div
            className={`productDetailsScreen-footer-body ${
              footerBodyActive ? "f-b-active" : ""
            }`}
          >
            <div className="footer-body-row">
              <div className="property-key">Name</div>
              <div className="property-value">{product?.data?.name}</div>
            </div>
            <div className="footer-body-row">
              <div className="property-key">Brand</div>
              <div className="property-value">{product?.data?.brand}</div>
            </div>
            <div className="footer-body-row">
              <div className="property-key">Processor</div>
              <div className="property-value">{product?.data?.processor}</div>
            </div>
            <div className="footer-body-row">
              <div className="property-key">Processor-model</div>
              <div className="property-value">
                {product?.data?.processorModel}
              </div>
            </div>
            <div className="footer-body-row">
              <div className="property-key">RAM</div>
              <div className="property-value">{product?.data?.memory}</div>
            </div>
            <div className="footer-body-row">
              <div className="property-key">Video Card</div>
              <div className="property-value">{product?.data?.video}</div>
            </div>
            <div className="footer-body-row">
              <div className="property-key">STORAGE</div>
              <div className="property-value">{product?.data?.storage}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsScreen;
