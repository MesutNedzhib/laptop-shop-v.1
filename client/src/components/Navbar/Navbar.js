import React, { useState } from "react";
import "./Navbar.scss";

// Material Ui - Icons
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SearchIcon from "@material-ui/icons/Search";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";

import { Link } from "react-router-dom";

function Navbar() {
  const [showSearchLine, setShowSearchLine] = useState(false);

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
          <span>PRODUCTS</span>
          <MenuIcon />
        </div>
        <div className="navbar-center-side">LAPTOP SHOP</div>
        <div className="navbar-right-side">
          <div className="navbar-search">
            <input
              type="text"
              className={showSearchLine ? "active-search-line" : ""}
              onChange={(e) => searchValueHandle(e.target.value)}
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
