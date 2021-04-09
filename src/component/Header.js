import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { AiOutlineSearch } from "react-icons/ai";

// TiShoppingCart;
// import SearchIcon from "@material-ui/icons/Search";
// import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
function Header() {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  return (
    <nav className="header">
      {/* logo on the left */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon Icon"
        />
      </Link>
      {/* search box */}
      <div className="header_search">
        <input type="text" className="header__searchInput" />
        <AiOutlineSearch className="header__searchIcon" />
      </div>
      <div className="header__nav">
        {/* 1 link */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello andy</span>
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
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
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
    </nav>
  );
}

export default Header;
