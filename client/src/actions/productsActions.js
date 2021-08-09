import axios from "axios";
import {
  GET_ALL_FILTERS_FAIL,
  GET_ALL_FILTERS_REQUEST,
  GET_ALL_FILTERS_SUCCESS,
  GET_ALL_PRODUCTS_FAIL,
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_PRODUCT_BY_ID_FAIL,
  GET_PRODUCT_BY_ID_REQUEST,
  GET_PRODUCT_BY_ID_SUCCESS,
  GET_PRODUCT_BY_NAME_FAIL,
  GET_PRODUCT_BY_NAME_REQUEST,
  GET_PRODUCT_BY_NAME_SUCCESS,
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

export const getProductByName = (name) => async (dispatch) => {
  dispatch({
    type: GET_PRODUCT_BY_NAME_REQUEST,
  });
  try {
    const { data } = await axios.get(`/api/products/${name}`);
    dispatch({
      type: GET_PRODUCT_BY_NAME_SUCCESS,
      payload: data.data,
    });
  } catch (err) {
    dispatch({
      type: GET_PRODUCT_BY_NAME_FAIL,
      payload: err.message,
    });
  }
};
