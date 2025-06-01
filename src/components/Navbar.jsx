import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLanguage } from "../context/languageContext";
import { translations } from "../context/uiStrings";
import "../styles/Navbar.css";

const Navbar = () => {
  const favoriteCount = useSelector((state) => state.favorites.length);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom shadow-sm py-2 sticky-top custom-navbar">
      <div className="container">
        <Link
          className="navbar-brand fw-bold text-primary d-flex align-items-center gap-2"
          to="/"
        >
          🎬 <span>MovieApp</span>
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
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto d-flex align-items-center gap-2">
            <li className="nav-item">
              <NavLink to="/" end className="nav-link">
                {t.home}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/popular" className="nav-link">
                {t.popular}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/search" className="nav-link">
                {t.search}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/favorites" className="nav-link position-relative">
                ❤️ {t.favorites}
                {favoriteCount > 0 && (
                  <span className="badge bg-danger position-absolute top-0 start-100 translate-middle rounded-pill">
                    {favoriteCount}
                  </span>
                )}
              </NavLink>
            </li>
            <li className="nav-item">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="form-select form-select-sm ms-3"
              >
                <option value="en">English</option>
                <option value="ar">العربية</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
