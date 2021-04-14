import React, { useContext } from "react";
import "./Header.css";
import { Link, useHistory } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { AiOutlineSearch } from "react-icons/ai";
import Navbar from "react-bootstrap/Navbar";

import { useStateValue } from "./StateProvider";
import { WrapperContext } from "../loginAndRegister/WrapperRoute";
function Header() {
  const [{ basket }, dispatch] = useStateValue();
  const { user, logout } = useContext(WrapperContext);

  const history = useHistory();

  return (
    <Navbar expand="md" className="header">
      {/* logo on the left */}
      <Link to="/user/products">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon Icon"
        />
      </Link>
      {/* search box */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="nav__toggle" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div className="header_search">
          <input type="text" className="header__searchInput" />
          <AiOutlineSearch className="header__searchIcon" />
        </div>
        <div className="header__nav">
          {/* 1 link */}
          <button onClick={logout} className="header__button header__link">
            <Link to="/" className="header__link">
              <div className="header__option">
                <span className="header__optionLineOne">
                  Hello {user.firstName}
                </span>
                <span className="header__optionLineTwo">sign out</span>
              </div>
            </Link>
          </button>
          {/* 2 link */}
          <Link className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">Orders</span>
            </div>
          </Link>
          {/* 3 link */}
          {
            <Link className="header__link">
              <div className="header__option">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Prime</span>
              </div>
            </Link>
          }
          {/* Basket icon with number */}
          <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
              {/* shopping basket icon  */}
              <TiShoppingCart className="header__basket" />
              {/* Number of Icons in the basket */}
              <span className="header__optionLinkTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
