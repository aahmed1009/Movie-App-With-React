import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/Navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const favoriteCount = useSelector((state) => state.favorites.length);

  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm custom-navbar">
      <div className="container">
        <Link className="navbar-brand fw-bold text-primary" to="/">
          🎬 MovieApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto gap-2">
            <li className="nav-item">
              <NavLink to="/" end className="nav-link nav-item-custom">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/popular" className="nav-link nav-item-custom">
                Popular
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/search" className="nav-link nav-item-custom">
                Search
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/favorites" className="nav-link">
                ❤️ Favorites ({favoriteCount})
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
