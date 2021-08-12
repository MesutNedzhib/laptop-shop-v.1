import axios from "axios";
import {
  GET_ALL_FILTERS_FAIL,
  GET_ALL_FILTERS_REQUEST,
  GET_ALL_FILTERS_SUCCESS,
  GET_ALL_PRODUCTS_FAIL,
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_PRODUCTS_BY_MULTY_FILTER_FAIL,
  GET_PRODUCTS_BY_MULTY_FILTER_REQUEST,
  GET_PRODUCTS_BY_MULTY_FILTER_SUCCESS,
  GET_PRODUCT_BY_ID_FAIL,
  GET_PRODUCT_BY_ID_REQUEST,
  GET_PRODUCT_BY_ID_SUCCESS,
  GET_PRODUCT_BY_NAME_FAIL,
  GET_PRODUCT_BY_NAME_REQUEST,
  GET_PRODUCT_BY_NAME_SUCCESS,
  GET_SORTED_PRODUCTS,
} from "../constants/productsConstants";

export const getAllProducts = () => async (dispatch, getState) => {
  dispatch({
    type: GET_ALL_PRODUCTS_REQUEST,
  });
  try {
    const { data } = await axios.get("/api/products/get-all-products");
    dispatch({
      type: GET_ALL_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_ALL_PRODUCTS_FAIL,
      payload: err.message,
    });
  }
};

export const getAllFilters = () => async (dispatch) => {
  dispatch({
    type: GET_ALL_FILTERS_REQUEST,
  });
  try {
    const { data } = await axios.get("/api/products/get-all-filters");
    dispatch({
      type: GET_ALL_FILTERS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_ALL_FILTERS_FAIL,
      payload: err.message,
    });
  }
};

export const getProductById = (_id) => async (dispatch) => {
  dispatch({
    type: GET_PRODUCT_BY_ID_REQUEST,
  });
  try {
    const { data } = await axios.post("/api/products/get-product-by-id", {
      _id,
    });
    dispatch({
      type: GET_PRODUCT_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_PRODUCT_BY_ID_FAIL,
      payload: err.message,
    });
  }
};

export const getProductByName = (value) => async (dispatch) => {
  dispatch({
    type: GET_PRODUCT_BY_NAME_REQUEST,
  });

  try {
    const { data } = await axios.post(`/api/products/get-product-by-name`, {
      value,
    });

    dispatch({
      type: GET_PRODUCT_BY_NAME_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_PRODUCT_BY_NAME_FAIL,
      payload: err.message,
    });
  }
};

export const getProductsByMultyFilter =
  (model, sortValue) => async (dispatch) => {
    dispatch({
      type: GET_PRODUCTS_BY_MULTY_FILTER_REQUEST,
    });
    try {
      const { data } = await axios.post(
        `/api/products/get-products-by-multy-filter`,
        { model }
      );
      if (data && sortValue.length !== 0) {
        dispatch({
          type: GET_PRODUCTS_BY_MULTY_FILTER_SUCCESS,
          payload: sortData(sortValue, data.data),
        });
      }
      dispatch({
        type: GET_PRODUCTS_BY_MULTY_FILTER_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: GET_PRODUCTS_BY_MULTY_FILTER_FAIL,
        payload: err.message,
      });
    }
  };

export const sortProducts = (value) => (dispatch, getState) => {
  const getProducts = getState().products.products.data;
  let backProducts;
  if (getProducts && value.length !== 0) {
    backProducts = sortData(value, getProducts);
  }
  dispatch({
    type: GET_SORTED_PRODUCTS,
    payload: backProducts,
  });
};

const sortData = (sortOption, productsData) => {
  if (sortOption === "a-z") {
    return productsData.sort((a, b) => (a.name > b.name ? 1 : -1));
  }
  if (sortOption === "z-a") {
    return productsData.sort((a, b) => (a.name < b.name ? 1 : -1));
  }
  if (sortOption === "descending") {
    return productsData.sort((a, b) => (a.price > b.price ? 1 : -1));
  }
  if (sortOption === "ascending") {
    return productsData.sort((a, b) => (a.price < b.price ? 1 : -1));
  }
};
