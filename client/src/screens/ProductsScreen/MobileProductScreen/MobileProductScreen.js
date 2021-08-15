import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllFilters,
  getAllProducts,
  sortProducts,
} from "../../../actions/productsActions";
import LoadingBox from "../../../components/LoadingBox/LoadingBox";
import MessageBox from "../../../components/MessageBox/MessageBox";
import MobileFilter from "../../../components/MobileFilter/MobileFilter";
import ProductCard from "../../../components/ProductCard/ProductCard";
import "../ProductsScreen.scss";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

function MobileProductScreen() {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.products);
  const filtersState = useSelector((state) => state.filters);

  const [filterContentActive, setFilterContentActive] = useState(false);

  const getSortValue = (value) => {
    dispatch(sortProducts(value));
    localStorage.setItem("sort", value);
  };

  const clearFilterBtnHandle = () => {
    localStorage.removeItem("desktop_filters");
    localStorage.removeItem("mobile_filters");
    dispatch(getAllProducts());
    dispatch(getAllFilters());
  };

  const changeFilterContentActiveState = () => {
    setFilterContentActive(!filterContentActive);
  };
  return (
    <div className="mobileProductScreen">
      <div className="productScreen-container">
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
              <select onChange={(e) => getSortValue(e.target.value)}>
                <option value="a-z">A-Z</option>
                <option value="z-a">Z-A</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
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
                {localStorage.getItem("mobile_filters") ? (
                  <div
                    className="filter-clear-btn"
                    onClick={() => clearFilterBtnHandle()}
                  >
                    <HighlightOffIcon />
                    <span>CLEAR FILTERS</span>
                  </div>
                ) : (
                  ""
                )}
                {filtersState.loading ? (
                  <LoadingBox />
                ) : filtersState.error ? (
                  <MessageBox message={filtersState.error} variant="error" />
                ) : (
                  <>
                    <MobileFilter
                      show={false}
                      name={"BRAND"}
                      data={filtersState.filters?.data?.brand}
                    />
                    <MobileFilter
                      show={false}
                      name={"PROCESSOR"}
                      data={filtersState.filters?.data?.processor}
                    />
                    <MobileFilter
                      show={false}
                      name={"MEMORY"}
                      data={filtersState.filters?.data?.memory}
                    />
                    <MobileFilter
                      show={false}
                      name={"STORAGE"}
                      data={filtersState.filters?.data?.storage}
                    />
                    <MobileFilter
                      show={false}
                      name={"VIDEO"}
                      data={filtersState.filters?.data?.video}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
          {productsState?.loading ? (
            <LoadingBox />
          ) : productsState?.error ? (
            <MessageBox message={productsState?.error} variant={"error"} />
          ) : (
            <div className="productCards-container">
              {productsState?.products?.data?.map((item, index) => (
                <ProductCard key={index} product={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MobileProductScreen;
