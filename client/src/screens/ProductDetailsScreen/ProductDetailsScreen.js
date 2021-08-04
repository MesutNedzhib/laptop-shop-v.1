import React, { useState } from "react";
import "./ProductDetailsScreen.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CheckSharpIcon from "@material-ui/icons/CheckSharp";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

function ProductDetailsScreen() {
  let images = [
    "https://laptop.bg/system/images/248254/normal/ROG_STRIX_G15_G512.jpg",
    "https://laptop.bg/system/images/248257/normal/ROG_STRIX_G15_G512.jpg",
    "https://laptop.bg/system/images/248256/normal/ROG_STRIX_G15_G512.jpg",
    "https://laptop.bg/system/images/248255/normal/ROG_STRIX_G15_G512.jpg",
    "https://laptop.bg/system/images/248258/normal/ROG_STRIX_G15_G512.jpg",
  ];

  const [footerBodyActive, SetFooterBodyActive] = useState(true);

  const changeFooterBodyActiveState = () => {
    SetFooterBodyActive(!footerBodyActive);
  };
  return (
    <div className="productDetailsScreen">
      <div className="productDetailsScreen-container">
        <div className="productDetailsScreen-header">
          <span>ASUS ROG STRIX G15 G512LI-HN065</span>
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
                {images.map((item, index) => (
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
                {images.map((item, index) => (
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
                {images.map((item, index) => (
                  <img key={index} src={item} alt={item} />
                ))}
              </Carousel>
            </div>
          </div>
          <div className="productDetailsScreen-body-basic-info">
            <div className="price">$ 2199.99</div>
            <div>
              <h3>Characteristics</h3>
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

            <div className="available">
              <CheckCircleIcon />
              <span>Available</span>
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
              <div className="property-key">Video Card</div>
              <div className="property-value">Nvidia GeForce GTX 1660 Ti</div>
            </div>
            <div className="footer-body-row">
              <div className="property-key">RAM</div>
              <div className="property-value">8 GB DDR4</div>
            </div>
            <div className="footer-body-row">
              <div className="property-key">STORAGE</div>
              <div className="property-value">512 GB SSD</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsScreen;
