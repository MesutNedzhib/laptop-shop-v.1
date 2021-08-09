import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../../components/Filter/Filter";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./ProductsScreen.scss";
import LoadingBox from "../../components/LoadingBox/LoadingBox";
import MessageBox from "../../components/MessageBox/MessageBox";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MobileFilter from "../../components/MobileFilter/MobileFilter";
import { useHistory } from "react-router-dom";
import { getAllFilters, getAllProducts } from "../../actions/productsActions";
function ProductsScreen() {
  const dispatch = useDispatch();

  const [filterContentActive, setFilterContentActive] = useState(false);

  const { loading, error, products } = useSelector((state) => state.products);
  const { filters } = useSelector((state) => state.filters);

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllFilters());
  }, [dispatch]);

  const changeFilterContentActiveState = () => {
    setFilterContentActive(!filterContentActive);
  };
  return (
    <div className="productsScreen">
      <div className="productScreen-container">
        <div className="productScreen-left-side">
          <Filter show={true} name={"BRAND"} data={filters?.data?.brand} />
          <Filter
            show={true}
            name={"PROCESSOR"}
            data={filters?.data?.processor}
          />
          <Filter show={true} name={"MEMORY"} data={filters?.data?.memory} />
          <Filter show={true} name={"STORAGE"} data={filters?.data?.storage} />
          <Filter show={true} name={"VIDEO"} data={filters?.data?.video} />
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
                <MobileFilter
                  show={false}
                  name={"BRAND"}
                  data={filters?.data?.brand}
                />
                <MobileFilter
                  show={false}
                  name={"PROCESSOR"}
                  data={filters?.data?.processor}
                />
                <MobileFilter
                  show={false}
                  name={"MEMORY"}
                  data={filters?.data?.memory}
                />
                <MobileFilter
                  show={false}
                  name={"STORAGE"}
                  data={filters?.data?.storage}
                />
                <MobileFilter
                  show={false}
                  name={"VIDEO"}
                  data={filters?.data?.video}
                />
              </div>
            </div>
          </div>
          {loading ? (
            <LoadingBox />
          ) : error ? (
            <MessageBox message={error} variant={"error"} />
          ) : (
            <div className="productCards-container">
              {products?.data?.map((item, index) => (
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
