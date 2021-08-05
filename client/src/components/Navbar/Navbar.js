import React, { useState } from "react";
import "./Navbar.scss";

// Material Ui - Icons
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SearchIcon from "@material-ui/icons/Search";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import { Link, useHistory } from "react-router-dom";

function Navbar() {
  const history = useHistory();
  const [showSearchLine, setShowSearchLine] = useState(false);
  const [menuContentActive, setMenuContentActive] = useState(false);

  const changeMenuContentActiveState = () => {
    setMenuContentActive(!menuContentActive);
  };

  const searchValueHandle = (value) => {
    if (value) {
      setShowSearchLine(true);
    } else {
      setShowSearchLine(false);
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-left-side">
          <span onClick={() => history.push("/products")}>PRODUCTS</span>
          <MenuIcon onClick={() => changeMenuContentActiveState()} />
          <div
            className={`menu-content ${menuContentActive ? "m-c-active" : ""} `}
          >
            <div className="menu-content-container">
              <div
                onClick={() => history.push("/products")}
                className="menu-content-row"
              >
                <LaptopMacIcon />
                <h4>Products</h4>
                <ChevronRightIcon />
              </div>
            </div>
          </div>
        </div>
        <div onClick={() => history.push("/")} className="navbar-center-side">
          LAPTOP SHOP
        </div>

        <div className="navbar-right-side">
          <div className="navbar-search">
            <input
              type="text"
              className={showSearchLine ? "active-search-line" : ""}
              onChange={(e) => searchValueHandle(e.target.value)}
              placeholder="Search..."
            />
            <SearchIcon style={{ color: "white" }} />
          </div>
          <div className="navbar-cart">
            <Link to="/cart">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCartIcon
                  style={{ width: "25px", height: "25px", color: "white" }}
                />
              </Badge>
            </Link>
          </div>
          <div className="navbar-account">
            <AccountCircleIcon
              style={{
                width: "25px",
                height: "25px",
                color: "white",
                marginTop: "5px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
