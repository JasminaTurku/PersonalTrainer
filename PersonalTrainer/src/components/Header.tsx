import "./Header.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isTreninziPage = location.pathname.startsWith("/treninzi");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const handleScrollLink = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    closeMobileMenu();

    setTimeout(() => {
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          <div className="logo-circle">
            <span className="logo-text">NM</span>
          </div>
        </Link>

        <button
          className="hamburger-menu"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {isMobileMenuOpen && (
          <div className="mobile-overlay" onClick={closeMobileMenu}></div>
        )}

        <nav className={`nav ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          <ul className="nav-list">
            {!isTreninziPage && (
              <li
                className="dropdown"
                onMouseEnter={() => {
                  if (window.innerWidth > 1024) {
                    setIsDropdownOpen(true);
                  }
                }}
                onMouseLeave={() => {
                  if (window.innerWidth > 1024) {
                    setIsDropdownOpen(false);
                  }
                }}
              >
                <a
                  href="#services"
                  onClick={(e) => {
                    if (window.innerWidth <= 1024) {
                      e.preventDefault();
                      setIsDropdownOpen(!isDropdownOpen);
                    }
                  }}
                >
                  Treninzi
                </a>
                {isDropdownOpen && (
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/treninzi/muskarci" onClick={closeMobileMenu}>
                        Muškarci
                      </Link>
                    </li>
                    <li>
                      <Link to="/treninzi/zene" onClick={closeMobileMenu}>
                        Žene
                      </Link>
                    </li>
                    <li>
                      <Link to="/treninzi/50-plus" onClick={closeMobileMenu}>
                        +50
                      </Link>
                    </li>
                    <li>
                      <Link to="/treninzi/trudnice" onClick={closeMobileMenu}>
                        Program za trudnice
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            )}
            {isHomePage ? (
              <>
                <li>
                  <a
                    href="#about"
                    onClick={(e) => handleScrollLink(e, "#about")}
                  >
                    O meni
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    onClick={(e) => handleScrollLink(e, "#gallery")}
                  >
                    Transformacije
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => handleScrollLink(e, "#contact")}
                  >
                    Kontakt
                  </a>
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
