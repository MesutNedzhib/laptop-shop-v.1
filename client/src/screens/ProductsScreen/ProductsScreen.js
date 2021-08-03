import React from "react";
import Filter from "../../components/Filter/Filter";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./ProductsScreen.scss";

function ProductsScreen() {
  return (
    <div className="productsScreen">
      <div className="productScreen-container">
        <div className="productScreen-left-side">
          <Filter show={true} />
          <Filter show={true} />
        </div>
        <div className="productScreen-right-side">
          <div className="productCards-container">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsScreen;
