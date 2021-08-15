import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllFilters,
  getAllProducts,
  sortProducts,
} from "../../../actions/productsActions";
import Filter from "../../../components/Filter/Filter";
import LoadingBox from "../../../components/LoadingBox/LoadingBox";
import MessageBox from "../../../components/MessageBox/MessageBox";
import ProductCard from "../../../components/ProductCard/ProductCard";
import "../ProductsScreen.scss";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

function DesktopProductScreen() {
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
    <div className="destopProductScreen">
      <div className="productScreen-container">
        <div className="productScreen-left-side">
          {localStorage.getItem("desktop_filters") ? (
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
              <Filter
                show={true}
                name={"BRAND"}
                data={filtersState.filters?.data?.brand}
              />
              <Filter
                show={true}
                name={"PROCESSOR"}
                data={filtersState.filters?.data?.processor}
              />
              <Filter
                show={true}
                name={"MEMORY"}
                data={filtersState.filters?.data?.memory}
              />
              <Filter
                show={true}
                name={"STORAGE"}
                data={filtersState.filters?.data?.storage}
              />
              <Filter
                show={true}
                name={"VIDEO"}
                data={filtersState.filters?.data?.video}
              />
            </>
          )}
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
              <select onChange={(e) => getSortValue(e.target.value)}>
                <option value="a-z">A-Z</option>
                <option value="z-a">Z-A</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
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

export default DesktopProductScreen;
