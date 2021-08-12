import React, { useState } from "react";
import "./Filter.scss";
import { useDispatch } from "react-redux";
import {
  getAllProducts,
  getProductsByMultyFilter,
} from "../../actions/productsActions";

import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

let GLOBAL_FILTER_STATE = {};
let GLOBAL_SORT_VALUE_STATE = "a-z";

function Filter({ show, name, data }) {
  const dispatch = useDispatch();
  const [activeFilterBody, setActiveFilterBody] = useState(show);

  const getCheckboxValue = () => {
    const lowName = name?.toLowerCase();
    GLOBAL_FILTER_STATE[lowName] = getFilterValue(
      document.getElementsByClassName(`${name}`)
    );
    if (GLOBAL_FILTER_STATE[lowName].length === 0) {
      delete GLOBAL_FILTER_STATE[lowName];
    }

    if (Object.keys(GLOBAL_FILTER_STATE).length === 0) {
      localStorage.removeItem("filters");
      dispatch(getAllProducts());
    } else {
      dispatch(
        getProductsByMultyFilter(GLOBAL_FILTER_STATE, GLOBAL_SORT_VALUE_STATE)
      );

      localStorage.setItem("filters", "active");
    }
  };

  const changeActiveFilterState = () => {
    setActiveFilterBody(!activeFilterBody);
  };

  return (
    <div className="filter">
      <div className="filter-container">
        <div
          onClick={() => changeActiveFilterState()}
          className="filter-header"
        >
          <h3>{name}</h3>
          {activeFilterBody ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </div>
        <div className={`filter-body ${activeFilterBody ? "f-active" : ""}`}>
          <ul>
            {data?.map((item, index) => (
              <li key={index}>
                <label htmlFor={item.name} onClick={() => getCheckboxValue()}>
                  <input
                    type="checkbox"
                    id={item.name}
                    defaultValue={item.name}
                    className={`${name}`}
                  />
                  <span>{item.name}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const getFilterValue = (list) => {
  let value = [];
  for (let i of list) {
    if (i.checked === true) {
      value.push(i.value);
    }
  }

  return value;
};

export default Filter;
