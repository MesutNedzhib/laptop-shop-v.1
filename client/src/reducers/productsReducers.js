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
} from "../constants/productsConstants";

export const productsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS_REQUEST:
      return { loading: true };
    case GET_ALL_PRODUCTS_SUCCESS:
      return { loading: false, products: action.payload };
    case GET_ALL_PRODUCTS_FAIL:
      return { loading: false, error: action.payload };

    case GET_PRODUCT_BY_ID_REQUEST:
      return { loading: true };
    case GET_PRODUCT_BY_ID_SUCCESS:
      return { loading: false, product: action.payload };
    case GET_PRODUCT_BY_ID_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productsFiltersReducer = (state = { filters: {} }, action) => {
  switch (action.type) {
    case GET_ALL_FILTERS_REQUEST:
      return { loading: true };
    case GET_ALL_FILTERS_SUCCESS:
      return { loading: false, filters: action.payload };
    case GET_ALL_FILTERS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
