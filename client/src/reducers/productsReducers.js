import {
  CHANGE_FILTER_CHECKED_STATE,
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

export const productsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS_REQUEST:
      return { loading: true };
    case GET_ALL_PRODUCTS_SUCCESS:
      return { loading: false, products: action.payload };
    case GET_ALL_PRODUCTS_FAIL:
      return { loading: false, error: action.payload };

    case GET_PRODUCT_BY_NAME_REQUEST:
      return { loading: true };
    case GET_PRODUCT_BY_NAME_SUCCESS:
      return { loading: false, products: action.payload };
    case GET_PRODUCT_BY_NAME_FAIL:
      return { loading: false, error: action.payload };

    case GET_PRODUCTS_BY_MULTY_FILTER_REQUEST:
      return { loading: true };
    case GET_PRODUCTS_BY_MULTY_FILTER_SUCCESS:
      return { loading: false, products: action.payload };
    case GET_PRODUCTS_BY_MULTY_FILTER_FAIL:
      return { loading: false, error: action.payload };

    case GET_SORTED_PRODUCTS:
      return { loading: false, products: { data: action.payload } };
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
    case CHANGE_FILTER_CHECKED_STATE:
      return { loading: false, filters: action.payload };

    default:
      return state;
  }
};
export const productDetailsReducer = (state = { product: [] }, action) => {
  switch (action.type) {
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
