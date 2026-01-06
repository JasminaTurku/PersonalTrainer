import "./Header.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isTreninziPage = location.pathname.startsWith("/treninzi");

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <div className="logo-circle">
            <span className="logo-text">NM</span>
          </div>
        </Link>
        <nav className="nav">
          <ul className="nav-list">
            {!isTreninziPage && (
              <li
                className="dropdown"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <a href="#services">Treninzi</a>
                {isDropdownOpen && (
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/treninzi/muskarci">Muškarci</Link>
                    </li>
                    <li>
                      <Link to="/treninzi/zene">Žene</Link>
                    </li>
                    <li>
                      <Link to="/treninzi/50-plus">+50</Link>
                    </li>
                    <li>
                      <Link to="/treninzi/trudnice">Program za trudnice</Link>
                    </li>
                  </ul>
                )}
              </li>
            )}
            {isHomePage ? (
              <>
                <li>
                  <a href="#about">O meni</a>
                </li>
                <li>
                  <a href="#gallery">Transformacije</a>
                </li>
                <li>
                  <a href="#contact">Kontakt</a>
                </li>
              </>
            ) : null}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
