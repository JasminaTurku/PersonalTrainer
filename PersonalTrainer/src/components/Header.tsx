import "./Header.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleScrollLink = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    closeMobileMenu();

    if (!isHomePage) {
      window.location.href = "/" + targetId;
    } else {
      setTimeout(() => {
        const element = document.querySelector(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          <div className="logo-circle">
            <span className="logo-text">NM</span>
          </div>
        </Link>

        {isHomePage && (
          <button
            className="hamburger-menu"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        )}

        {isMobileMenuOpen && (
          <div className="mobile-overlay" onClick={closeMobileMenu}></div>
        )}

        <nav className={`nav ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          <ul className="nav-list">
            {isHomePage ? (
              <>
                <li>
                  <a
                    href="#programs"
                    onClick={(e) => handleScrollLink(e, "#programs")}
                  >
                    Vrste programa
                  </a>
                </li>
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
                    className="contact-link"
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
