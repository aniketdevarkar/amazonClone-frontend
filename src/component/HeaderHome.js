import React, { useRef } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { AiOutlineSearch } from "react-icons/ai";
import { getProduct } from "../apicalls";
import Navbar from "react-bootstrap/Navbar";

function HeaderHome() {
  const product = useRef("");
  const search = async () => {
    try {
      const data = await getProduct(product.current.value);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Navbar expand="md" className="header">
      {/* logo on the left */}
      <Link to="/">
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
          <input type="text" className="header__searchInput" ref={product} />
          <AiOutlineSearch className="header__searchIcon" onClick={search} />
        </div>
        <div className="header__nav">
          {/* 1 link */}
          <Link to="/login" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Hello</span>
              <span className="header__optionLineTwo">sign in</span>
            </div>
          </Link>
          {/* 2 link */}
          <Link to="/login" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">Orders</span>
            </div>
          </Link>
          {/* 3 link */}
          {
            <Link to="/login" className="header__link">
              <div className="header__option">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Prime</span>
              </div>
            </Link>
          }
          {/* Basket icon with number */}
          <Link to="/login" className="header__link">
            <div className="header__optionBasket">
              {/* shopping basket icon  */}
              <TiShoppingCart className="header__basket" />
              {/* Number of Icons in the basket */}
              <span className="header__optionLinkTwo header__basketCount"></span>
            </div>
          </Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default HeaderHome;
