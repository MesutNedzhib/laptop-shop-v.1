import React from "react";
import Filter from "../../components/Filter/Filter";
import "./ProductsScreen.scss";

function ProductsScreen() {
  return (
    <div className="productsScreen">
      <div className="productScreen-container">
        <div className="productScreen-left-side">
          <Filter />
        </div>
      </div>
    </div>
  );
}

export default ProductsScreen;
