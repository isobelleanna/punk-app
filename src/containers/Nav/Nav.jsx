import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import menuIcon from "../../assets/images/menu-icon.png";
import MobileMenu from "../../components/MobileMenu/MobileMenu";
import gitHub from "../../assets/images/git-hub.png";

const Nav = ({ toggleMenu, handleMenuToggle }) => {
  return (
    <div className="nav-menu">
      <a href="https://github.com/isobelleanna/punk-app">
        {" "}
        <img src={gitHub} alt="github icon" />
      </a>

      {toggleMenu ? (
        <MobileMenu toggleMenu={toggleMenu} />
      ) : (
        <img
          className="nav-menu__icon"
          src={menuIcon}
          alt="menu icon"
          onClick={handleMenuToggle}
        />
      )}

      <div className="nav-menu__laptop">
        <Link className="nav-menu__item" to="/punk-app/">
          Home
        </Link>
        <Link className="nav-menu__item" to="/punk-app/main">
          Catalogue
        </Link>
        <Link className="nav-menu__item" to="/punk-app/random">
          Beer of the day
        </Link>
        <Link className="nav-menu__item" to="/punk-app/taster-menu">
          Taster Menu
        </Link>
      </div>
    </div>
  );
};

export default Nav;
