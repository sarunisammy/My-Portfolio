import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../photos/logo.png";
import { links } from "../data";
import { GoThreeBars } from "react-icons/go";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false)
  return (
    <nav className="container nav__container">
      <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
        <img src={Logo} alt="Nav Logo"/>
       
      </Link>
      <ul className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}>
        {links.map(({ name, path }, index) => {
          return (
            <li key={index}>
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active-nav" : "")}
                onClick={() => setIsNavShowing((prev) => !prev)}
              >
                {name}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <button
        className="nav__toggle-btn"
        onClick={() => setIsNavShowing((prev) => !prev)}
      >
        {isNavShowing ? <GrClose /> : <GoThreeBars />}
      </button>
    </nav>
  );
};

export default Navbar;
