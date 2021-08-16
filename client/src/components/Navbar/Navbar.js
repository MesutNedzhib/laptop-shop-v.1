import React, { useEffect, useState } from "react";
import "./Navbar.scss";

// Material Ui - Icons
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SearchIcon from "@material-ui/icons/Search";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import CloseIcon from "@material-ui/icons/Close";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getProductByName,
} from "../../actions/productsActions";

function Navbar() {
  const history = useHistory();
  const location = useLocation();
  let currentLocation = location.pathname.split("/")[1];

  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);
  const [showSearchLine, setShowSearchLine] = useState(false);
  const [menuContentActive, setMenuContentActive] = useState(false);
  const [menuContentAccountActive, setMenuContentAccountActive] =
    useState(false);

  useEffect(() => {
    if (currentLocation !== "") {
      setMenuContentActive(false);
    } else {
      setMenuContentActive(false);
    }
  }, [currentLocation]);

  const changeMenuContentActiveState = () => {
    setMenuContentActive(!menuContentActive);
  };

  const changeMenuContentAccountActiveState = () => {
    setMenuContentAccountActive(!menuContentAccountActive);
  };

  const searchValueHandle = (value) => {
    if (value) {
      history.push("/products");
      setShowSearchLine(true);
      dispatch(getProductByName(value));
    } else {
      dispatch(getAllProducts());
      setShowSearchLine(false);
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-left-side">
          <span onClick={() => history.push("/products")}>PRODUCTS</span>
          {menuContentActive ? (
            <CloseIcon onClick={() => changeMenuContentActiveState()} />
          ) : (
            <MenuIcon onClick={() => changeMenuContentActiveState()} />
          )}

          <div
            className={`menu-content ${menuContentActive ? "m-c-active" : ""} `}
          >
            <div className="menu-content-container">
              <div
                onClick={() => changeMenuContentAccountActiveState()}
                className="menu-content-account"
              >
                <div className="menu-content-account-header">
                  <AccountCircleIcon />
                  <h4>John Conner</h4>
                </div>
                {menuContentAccountActive ? (
                  <ExpandLessIcon />
                ) : (
                  <ExpandMoreIcon />
                )}
              </div>
              <div
                className={`menu-content-account-body ${
                  menuContentAccountActive ? "m-c-a-b-active" : ""
                } `}
              >
                <h4>Login</h4>
                <h4>Logout</h4>
              </div>
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
          {/* <div className="gif-container"></div> */}
          LAPTOP SHOP
        </div>

        <div className="navbar-right-side">
          <div className="navbar-search">
            <input
              type="text"
              className={showSearchLine ? "active-search-line" : ""}
              onChange={(e) => searchValueHandle(e.target.value)}
              placeholder="Search..."
              // ref={searchFiled}
            />
            <SearchIcon style={{ color: "white" }} />
          </div>
          <div className="navbar-cart">
            <Link to="/cart">
              <Badge
                badgeContent={cartItems?.lenght === 0 ? 0 : cartItems.length}
                color="error"
              >
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
