import React, { useState } from "react";
import "./MobileFilter.scss";

import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function MobileFilter({ show, name, data }) {
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
          <h3>{name}</h3>
          {activeFilterBody ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </div>
        <div
          className={`mobileFilter-body ${activeFilterBody ? "mf-active" : ""}`}
        >
          <ul>
            {data?.map((item, index) => (
              <li key={index}>
                <label htmlFor={item.name}>
                  <input type="checkbox" id={item.name} />
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

export default MobileFilter;
