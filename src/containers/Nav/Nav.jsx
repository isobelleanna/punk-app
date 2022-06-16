import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import menuIcon from "../../assets/images/menu-icon.png";

const Nav = ({ toggleMenu, handleMenuToggle }) => {
  return (
    <div className="nav-menu">
      {toggleMenu ? (
        <p>hello</p>
      ) : (
        <img className="nav-menu__icon" src={menuIcon} alt="menu icon" />
      )}

      <div className="nav-menu__laptop">
        <Link className="nav-menu__item" to="/">
          Home
        </Link>
        <Link className="nav-menu__item" to="/main">
          Catalogue
        </Link>

        <Link className="nav-menu__item" to="/random">
          Beer of the day
        </Link>
        <Link className="nav-menu__item" to="/taster-menu">
          Taster Menu
        </Link>
      </div>
    </div>
  );
};

export default Nav;
