import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import {
  productsFiltersReducer,
  productsReducer,
} from "./reducers/productsReducers";

const initialState = {};

const reducer = combineReducers({
  products: productsReducer,
  filters: productsFiltersReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
