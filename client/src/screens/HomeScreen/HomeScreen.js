import React from "react";
import LargeImageSlider from "../../components/LargeImageSlider/LargeImageSlider";
import SmallImageSlider from "../../components/SmallImageSlider/SmallImageSlider";
import "./HomeScreen.scss";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <div className="homeScreen-container">
        <LargeImageSlider />
        <LargeImageSlider />
        <LargeImageSlider />

        <SmallImageSlider />
        <SmallImageSlider />
        <SmallImageSlider />

        <LargeImageSlider />
        <LargeImageSlider />
        <LargeImageSlider />
      </div>
    </div>
  );
}

export default HomeScreen;
