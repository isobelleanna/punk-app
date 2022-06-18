import React from "react";
import "./MobileMenu.scss";
import { Link } from "react-router-dom";

const MobileMenu = ({ toggleMenu }) => {
  return (
    <div className="mobile-menu">
      <div className="mobile-menu__content">
        <h1 className="mobile-menu__item">PUNK APP</h1>
        <hr />
        <Link
          className="mobile-menu__item"
          to="/punk-app/"
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          className="mobile-menu__item"
          to="/punk-app/main"
          onClick={toggleMenu}
        >
          Catalogue
        </Link>

        <Link
          className="mobile-menu__item"
          to="/punk-app/random"
          onClick={toggleMenu}
        >
          Beer of the day
        </Link>
        <Link
          className="mobile-menu__item"
          to="/punk-app/taster-menu"
          onClick={toggleMenu}
        >
          Taster Menu
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
