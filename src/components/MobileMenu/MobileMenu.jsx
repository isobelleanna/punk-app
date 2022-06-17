import React from "react";
import "./MobileMenu.scss";
import { Link } from "react-router-dom";

const MobileMenu = ({ toggleMenu }) => {
  return (
    <div className="mobile-menu">
      <div className="mobile-menu__content">
        <Link className="mobile-menu__item" to="/" onClick={toggleMenu}>
          Home
        </Link>
        <Link className="mobile-menu__item" to="/main" onClick={toggleMenu}>
          Catalogue
        </Link>

        <Link className="mobile-menu__item" to="/random" onClick={toggleMenu}>
          Beer of the day
        </Link>
        <Link
          className="mobile-menu__item"
          to="/taster-menu"
          onClick={toggleMenu}
        >
          Taster Menu
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
