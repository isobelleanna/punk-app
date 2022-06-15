import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="nav-menu">
      <Link className="nav-menu__item" to="/">
        Home
      </Link>
      <Link className="nav-menu__item" to="/main">
        Catalogue
      </Link>
    </div>
  );
};

export default Nav;
