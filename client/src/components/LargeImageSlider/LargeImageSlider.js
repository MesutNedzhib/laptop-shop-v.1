import React from "react";
import "./LargeImageSlider.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function LargeImageSlider() {

  // default array with random banners
  const asusBanners_L = [
    "https://www.digitaldreamsjaipur.com/wp-content/uploads/2020/05/ASUS-Gamimg-Laptop__Section-Banner.jpg",
    "https://i.pinimg.com/originals/76/2b/a2/762ba2bf06f1b06afe05db59024a6990.jpg",
  ];
  return (
    <div className="largeImageSlider">
      <div className="largeImageSlider-container">
        <Carousel
          //   onClickItem={() => offerBrandHandle()}
          //   showIndicators={inidicator}
          showThumbs={false}
          showArrows={false}
          showStatus={false}
          autoPlay
          infiniteLoop
          emulateTouch
        >
          {asusBanners_L.map((item, index) => (
            <img key={index} src={item} alt="" />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default LargeImageSlider;
