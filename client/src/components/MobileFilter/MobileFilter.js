import React, { useState } from "react";
import "./MobileFilter.scss";
import { useDispatch } from "react-redux";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  changeFilterCheckedState,
  getProductsByMultyFilter,
} from "../../actions/productsActions";

let MOBILE_GLOBAL_FILTER_STATE = {};
let GLOBAL_SORT_VALUE_STATE = "a-z";

function MobileFilter({ show, name, data }) {
  const dispatch = useDispatch();
  const [activeFilterBody2, setActiveFilterBody] = useState(show);
  const changeActiveFilterState = () => {
    setActiveFilterBody(!activeFilterBody2);
  };

  if (Object.keys(MOBILE_GLOBAL_FILTER_STATE).length === 0) {
    localStorage.removeItem("mobile_filters");
  }

  const getCheckboxValue = () => {
    const lowName = name?.toLowerCase();
    let newFilterState = {};

    newFilterState.brand = getFilterValue(
      document.getElementsByClassName("BRAND")
    ).newList;
    newFilterState.processor = getFilterValue(
      document.getElementsByClassName("PROCESSOR")
    ).newList;
    newFilterState.memory = getFilterValue(
      document.getElementsByClassName("MEMORY")
    ).newList;
    newFilterState.storage = getFilterValue(
      document.getElementsByClassName("STORAGE")
    ).newList;
    newFilterState.video = getFilterValue(
      document.getElementsByClassName("VIDEO")
    ).newList;

    if (localStorage.getItem("sort")) {
      GLOBAL_SORT_VALUE_STATE = localStorage.getItem("sort");
    }

    MOBILE_GLOBAL_FILTER_STATE[lowName] = getFilterValue(
      document.getElementsByClassName(`${name}`)
    ).value;

    if (MOBILE_GLOBAL_FILTER_STATE[lowName]?.length === 0) {
      delete MOBILE_GLOBAL_FILTER_STATE[lowName];
    }

    dispatch(
      getProductsByMultyFilter(
        MOBILE_GLOBAL_FILTER_STATE,
        GLOBAL_SORT_VALUE_STATE
      )
    );
    dispatch(changeFilterCheckedState({ data: newFilterState }));

    localStorage.setItem("mobile_filters", "active");
  };

  return (
    <div className="mobileFilter">
      <div className="mobileFilter-container">
        <div
          onClick={() => changeActiveFilterState()}
          className="mobileFilter-header"
        >
          <h3>{name}</h3>
          {activeFilterBody2 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </div>
        <div
          className={`mobileFilter-body ${
            activeFilterBody2 ? "mf-active" : ""
          }`}
        >
          <ul>
            {data?.map((item, index) => (
              <li key={index}>
                <label htmlFor={item.name}>
                  <input
                    type="checkbox"
                    id={item.name}
                    className={`${name}`}
                    onClick={() => getCheckboxValue()}
                    defaultChecked={item.isChecked}
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
  let newList = [];
  if (list) {
    for (let i of list) {
      newList.push({ name: i.id, isChecked: i.checked });
      if (i.checked === true) {
        value.push(i.id);
      }
    }
  }

  return {
    value: value,
    newList: newList,
  };
};

export default MobileFilter;
