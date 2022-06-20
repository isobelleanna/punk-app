import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import menuIcon from "../../assets/images/menu-icon.png";
import gitHub from "../../assets/images/git-hub.png";
import whiteCross from "../../assets/images/white-cross.png";

const Nav = ({ toggleMenu, handleMenuToggle }) => {
  return (
    <div className="nav-menu">
      <a href="https://github.com/isobelleanna/punk-app">
        {" "}
        <img src={gitHub} alt="github icon" />
      </a>

      {toggleMenu ? (
        <div className="nav-menu__mobile">
          <img
            className="nav-menu__mobile--cross"
            src={whiteCross}
            alt="white-cross"
            onClick={handleMenuToggle}
          />
          <h1 className="nav-menu__mobile--item">PUNK APP</h1>
          <hr />
          <Link
            className="nav-menu__mobile--item"
            to="/punk-app/"
            onClick={handleMenuToggle}
          >
            Home
          </Link>
          <Link
            className="nav-menu__mobile--item"
            to="/punk-app/main"
            onClick={handleMenuToggle}
          >
            Catalogue
          </Link>
          <Link
            className="nav-menu__mobile--item"
            to="/punk-app/random"
            onClick={handleMenuToggle}
          >
            Beer of the day
          </Link>
          <Link
            className="nav-menu__mobile--item"
            to="/punk-app/taster-menu"
            onClick={handleMenuToggle}
          >
            Taster Menu
          </Link>
        </div>
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
