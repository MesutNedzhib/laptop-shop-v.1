import React, { useState } from "react";
import "./MobileFilter.scss";

function MobileFilter({ show }) {
  const [activeFilterBody, setActiveFilterBody] = useState(show);
  const changeActiveFilterState = () => {
    setActiveFilterBody(!activeFilterBody);
  };
  return (
    <div className="mobileFilter">
      <div className="mobileFilter-container">
        <div
          onClick={() => changeActiveFilterState()}
          className="mobileFilter-header"
        >
          <h3>Brand</h3>
        </div>
        <div
          className={`mobileFilter-body ${activeFilterBody ? "mf-active" : ""}`}
        >
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

export default MobileFilter;
