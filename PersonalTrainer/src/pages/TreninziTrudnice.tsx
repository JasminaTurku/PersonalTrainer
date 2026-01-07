import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import "./Treninzi.css";
import grudiImg from "../assets/grudi.jpg";
import ledjaImg from "../assets/ledja.jpg";
import nogeImg from "../assets/noge.webp";
import ramenaImg from "../assets/ramena.jpg";
import rukeImg from "../assets/ruke.jpg";
import trbuhImg from "../assets/trbuh.jpg";
import demoVideo from "../assets/5319426-uhd_2160_3840_25fps.mp4";

const TreninziTrudnice = () => {
  const navigate = useNavigate();
  const [showVideoPopup, setShowVideoPopup] = useState(false);
  const [selectedMuscle, setSelectedMuscle] = useState("");
  const muscleGroups = [
    {
      id: 1,
      title: "Grudi",
      description:
        "Razvijte snažne i definisane grudne mišiće kroz strukturiran program treninga.",
      icon: "💪",
      image: grudiImg,
    },
    {
      id: 2,
      title: "Leđa",
      description:
        "Izgradite široka i jaka leđa za savršenu V-liniju i bolju posturu.",
      icon: "🦾",
      image: ledjaImg,
    },
    {
      id: 3,
      title: "Noge",
      description:
        "Kompletan program za razvoj snage i mase donjih ekstremiteta.",
      icon: "🦵",
      image: nogeImg,
    },
    {
      id: 4,
      title: "Ramena",
      description: "Okrugla i definisana ramena koja daju impresivan izgled.",
      icon: "💪",
      image: ramenaImg,
    },
    {
      id: 5,
      title: "Ruke",
      description:
        "Bicepsi i tricepsi koji privlače pažnju - snaga i estetika.",
      icon: "💪",
      image: rukeImg,
    },
    {
      id: 6,
      title: "Core & Trbuh",
      description:
        "Jak core i definisan stomak za stabilnost i atletski izgled.",
      icon: "⚡",
      image: trbuhImg,
    },
  ];

  return (
    <>
      <Header />
      <main className="treninzi-page">
        <nav className="breadcrumbs-top">
          <Link to="/" className="breadcrumb-link">
            Početna
          </Link>
          <span className="breadcrumb-separator">/</span>
          <Link to="/treninzi/trudnice" className="breadcrumb-link">
            Treninzi za trudnice
          </Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Izaberite program</span>
        </nav>
        <section className="treninzi-hero">
          <h1>PROGRAMI ZA TRUDNICE</h1>
          <p>Bezbedni i prilagođeni treninzi tokom trudnoće</p>
        </section>

        <section className="muscle-groups-section">
          <div className="muscle-groups-container">
            <h2>Izaberite mišićnu grupu</h2>
            <div className="cards-grid">
              {muscleGroups.map((group) => (
                <div key={group.id} className="muscle-card">
                  <img
                    src={group.image}
                    alt={group.title}
                    className="muscle-card-image"
                  />
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <button
                    onClick={() => {
                      setSelectedMuscle(group.title);
                      setShowVideoPopup(true);
                    }}
                    className="card-button"
                  >
                    Pogledaj
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {showVideoPopup && (
          <div
            className="video-popup-overlay"
            onClick={() => setShowVideoPopup(false)}
          >
            <div
              className="video-popup-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="video-popup-close"
                onClick={() => setShowVideoPopup(false)}
              >
                ×
              </button>
              <h3 className="video-popup-title">
                {selectedMuscle} - Demo Video
              </h3>
              <video controls autoPlay className="video-popup-player">
                <source src={demoVideo} type="video/mp4" />
                Vaš pretraživač ne podržava video.
              </video>
            </div>
          </div>
        )}

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-text">
              <p>Vaš partner u postizanju vrhunske forme</p>
            </div>
            <div className="social-links">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="YouTube"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
              </a>
              <a
                href="mailto:your.email@example.com"
                className="social-link"
                aria-label="Email"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 NM Personal Training. Sva prava zadržana.</p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default TreninziTrudnice;
