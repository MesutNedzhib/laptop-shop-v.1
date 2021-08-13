import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../../components/Filter/Filter";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./ProductsScreen.scss";
import LoadingBox from "../../components/LoadingBox/LoadingBox";
import MessageBox from "../../components/MessageBox/MessageBox";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MobileFilter from "../../components/MobileFilter/MobileFilter";
import {
  getAllFilters,
  getAllProducts,
  sortProducts,
} from "../../actions/productsActions";

function ProductsScreen() {
  const dispatch = useDispatch();

  const [filterContentActive, setFilterContentActive] = useState(false);

  const productsState = useSelector((state) => state.products);
  const filtersState = useSelector((state) => state.filters);

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllFilters());
    localStorage.removeItem("filters");
  }, [dispatch]);

  const getSortValue = (value) => {
    dispatch(sortProducts(value));
  };

  const clearFilterBtnHandle = () => {
    localStorage.removeItem("filters");
    dispatch(getAllProducts());
    dispatch(getAllFilters());
  };

  const changeFilterContentActiveState = () => {
    setFilterContentActive(!filterContentActive);
  };
  return (
    <div className="productsScreen">
      <div className="productScreen-container">
        <div className="productScreen-left-side">
          {localStorage.getItem("filters") ? (
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
              {/* <h4>Sort by</h4> */}
              {/* <span>value</span> */}
              <select
                onChange={(e) => getSortValue(e.target.value)}
                defaultValue="A-Z"
              >
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
                {localStorage.getItem("filters") ? (
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

export default ProductsScreen;
