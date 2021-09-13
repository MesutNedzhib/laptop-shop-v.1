import React from "react";
import "./SmallImageSlider.scss";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function SmallImageSlider() {
  // default array with random banners
  const acerBanners_S = [
    "https://laptop.bg/system/landing_pages/laptop/acer_aspire_5/aspire_5_newBanner2.png",
    "https://i0.wp.com/prebiu.com/wp-content/uploads/2020/05/The-New-Acer-Swift-3-Lands-in-Malaysia_Visual-1.jpg?fit=1281%2C721&ssl=1",
  ];
  return (
    <div className="smallImageSlider">
      <div className="smallImageSlider-container">
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
          {acerBanners_S.map((item, index) => (
            <img key={index} src={item} alt="" />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default SmallImageSlider;
