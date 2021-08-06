import React, { useState } from "react";
import Filter from "../../components/Filter/Filter";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./ProductsScreen.scss";

import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MobileFilter from "../../components/MobileFilter/MobileFilter";
function ProductsScreen() {
  const [filterContentActive, setFilterContentActive] = useState(false);

  const changeFilterContentActiveState = () => {
    setFilterContentActive(!filterContentActive);
  };
  return (
    <div className="productsScreen">
      <div className="productScreen-container">
        <div className="productScreen-left-side">
          <Filter show={true} />
          <Filter show={true} />
        </div>
        <div className="productScreen-right-side">
          <div className="productOptions">
            <div
              onClick={() => changeFilterContentActiveState()}
              className="productOption-filter"
            >
              <h4>Filters</h4>
              <span>Filters</span>
            </div>
            <div className="productOption-sort">
              <h4>Sort by</h4>
              <span>value</span>
            </div>
          </div>
          <div
            className={`productOption-filter-content ${
              filterContentActive ? "f-c-active" : ""
            } `}
          >
            <div className="productOption-filters-container">
              <div className="productOption-filters-container-header">
                <h3 id="filters">FILTERS</h3>
                <ArrowBackIcon
                  onClick={() => changeFilterContentActiveState()}
                />
              </div>
              <div className="productOption-filters-container-body">
                <MobileFilter show={false} />
                <MobileFilter show={false} />
                <MobileFilter show={false} />
                <MobileFilter show={false} />
                <MobileFilter show={false} />
              </div>
            </div>
          </div>
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
