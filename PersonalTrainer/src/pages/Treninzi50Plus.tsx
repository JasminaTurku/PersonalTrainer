import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Treninzi.css";
import grudiImg from "../assets/grudi.jpg";
import ledjaImg from "../assets/ledja.jpg";
import nogeImg from "../assets/noge.webp";
import ramenaImg from "../assets/ramena.jpg";
import rukeImg from "../assets/ruke.jpg";
import trbuhImg from "../assets/trbuh.jpg";
import demoVideo from "../assets/5319426-uhd_2160_3840_25fps.mp4";

const Treninzi50Plus = () => {
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
          <Link to="/treninzi/50-plus" className="breadcrumb-link">
            Treninzi 50+
          </Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Izaberite program</span>
        </nav>
        <section className="treninzi-hero">
          <h1>TRENINZI ZA 50+</h1>
          <p>Prilagođeni programi za održavanje snage i vitalnosti</p>
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
        <Footer />
      </main>
    </>
  );
};

export default Treninzi50Plus;
