import React from "react";
import "./ProductsScreen.scss";
import { isMobile } from "react-device-detect";
import MobileProductScreen from "./MobileProductScreen/MobileProductScreen";
import DesktopProductScreen from "./DesktopProductScreen/DesktopProductScreen";

function ProductsScreen() {
  return (
    <div className="productsScreen">
      {isMobile ? <MobileProductScreen /> : <DesktopProductScreen />}
    </div>
  );
}

export default ProductsScreen;
