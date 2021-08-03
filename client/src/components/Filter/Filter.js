import React, { useState } from "react";
import "./Filter.scss";

function Filter({ show }) {
  const [activeFilterBody, setActiveFilterBody] = useState(show);
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
          <h3>Brand</h3>
        </div>
        <div className={`filter-body ${activeFilterBody ? "f-active" : ""}`}>
          <ul>
            <li>
              <label htmlFor="brand">
                <input type="checkbox" id="brand" />
                <span>HP</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Filter;
