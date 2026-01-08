import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Treninzi.css";
import nogeImg from "../assets/noge.webp";
import trbuhImg from "../assets/trbuh.jpg";
import grudiImg from "../assets/grudi.jpg";
import ramenaImg from "../assets/ramena.jpg";
import rukeImg from "../assets/ruke.jpg";
import ledjaImg from "../assets/ledja.jpg";
import demoVideo from "../assets/5319426-uhd_2160_3840_25fps.mp4";

const TreninziZene = () => {
  const [showVideoPopup, setShowVideoPopup] = useState(false);
  const [showCodePopup, setShowCodePopup] = useState(false);
  const [selectedMuscle, setSelectedMuscle] = useState("");
  const [enteredCode, setEnteredCode] = useState("");
  const [codeError, setCodeError] = useState("");

  // Kod koji trener daje klijentima
  const ACCESS_CODE = "PT2026";

  const demoVideoSrc = useMemo(() => {
    const isMobile =
      typeof window !== "undefined" &&
      window.matchMedia?.("(max-width: 768px)").matches;

    if (!isMobile) return demoVideo;

    const videos = import.meta.glob("../assets/*.mp4", {
      eager: true,
      as: "url",
    }) as Record<string, string>;

    return videos["../assets/demo_1080.mp4"] ?? demoVideo;
  }, []);
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
          <Link to="/treninzi/zene" className="breadcrumb-link">
            Treninzi za žene
          </Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Izaberite program</span>
        </nav>
        <section className="treninzi-hero">
          <h1>TRENINZI ZA ŽENE</h1>
          <p>Prilagođeni programi za postizanje vaših ciljeva</p>
        </section>

        <section className="muscle-groups-section">
          <div className="muscle-groups-container">
            <h2>Izaberite program</h2>
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
                      setShowCodePopup(true);
                      setEnteredCode("");
                      setCodeError("");
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

        {showCodePopup && (
          <div
            className="code-popup-overlay"
            onClick={() => {
              setShowCodePopup(false);
              setCodeError("");
              setEnteredCode("");
            }}
          >
            <div
              className="code-popup-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="code-popup-close"
                onClick={() => {
                  setShowCodePopup(false);
                  setCodeError("");
                  setEnteredCode("");
                }}
              >
                ×
              </button>
              <h3 className="code-popup-title">Pristup Video Treningu</h3>
              <p className="code-popup-description">
                Unesite pristupni kod koji ste dobili od trenera
              </p>
              <input
                type="text"
                className="code-input"
                placeholder="Unesite kod..."
                value={enteredCode}
                onChange={(e) => {
                  setEnteredCode(e.target.value.toUpperCase());
                  setCodeError("");
                }}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    if (enteredCode === ACCESS_CODE) {
                      setShowCodePopup(false);
                      setShowVideoPopup(true);
                      setEnteredCode("");
                      setCodeError("");
                    } else {
                      setCodeError("Pogrešan kod. Pokušajte ponovo.");
                    }
                  }
                }}
              />
              {codeError && <p className="code-error">{codeError}</p>}
              <button
                className="code-submit-button"
                onClick={() => {
                  if (enteredCode === ACCESS_CODE) {
                    setShowCodePopup(false);
                    setShowVideoPopup(true);
                    setEnteredCode("");
                    setCodeError("");
                  } else {
                    setCodeError("Pogrešan kod. Pokušajte ponovo.");
                  }
                }}
              >
                Potvrdi
              </button>
            </div>
          </div>
        )}

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
              <video controls preload="metadata" className="video-popup-player">
                <source src={demoVideoSrc} type="video/mp4" />
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

export default TreninziZene;
