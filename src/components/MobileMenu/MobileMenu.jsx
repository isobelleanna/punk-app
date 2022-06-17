import React from "react";
import "./MobileMenu.scss";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  return (
    <div className="mobile-menu">
      <Link className="mobile-menu__item" to="/">
        Home
      </Link>
      <Link className="mobile-menu__item" to="/main">
        Catalogue
      </Link>

      <Link className="mobile-menu__item" to="/random">
        Beer of the day
      </Link>
      <Link className="mobile-menu__item" to="/taster-menu">
        Taster Menu
      </Link>
    </div>
  );
};

export default MobileMenu;
