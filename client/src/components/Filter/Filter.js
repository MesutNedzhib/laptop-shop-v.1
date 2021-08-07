import React, { useState } from "react";
import "./Filter.scss";

function Filter({ show, name, data }) {
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
          <h3>{name}</h3>
        </div>
        <div className={`filter-body ${activeFilterBody ? "f-active" : ""}`}>
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

export default Filter;
