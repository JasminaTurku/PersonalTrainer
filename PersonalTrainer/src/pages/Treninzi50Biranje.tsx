import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./TreninjiBiranje.css";
import teretanaImg from "../assets/teretana.jpg";
import kodKuceImg from "../assets/kodKuce1.jfif";

const Treninzi50Biranje = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="biranje-content">
        <section className="biranje-section">
          <nav className="breadcrumbs">
            <Link to="/" className="breadcrumb-link">
              Početna
            </Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Treninzi 50+</span>
          </nav>
          <h1 className="biranje-title">TRENINZI ZA 50+</h1>
          <p className="biranje-subtitle">Izaberite gde želite da trenirate</p>
          <div className="biranje-cards">
            <Link to="/treninzi/50-plus/teretana" className="biranje-card">
              <h2>U TERETANI</h2>
              <img src={teretanaImg} alt="U Teretani" className="card-image" />
              <p>
                Prilagođeni programi za održavanje snage, mobilnosti i zdravlja
                sa profesionalnom opremom
              </p>
              <span className="program-button">Saznaj više</span>
            </Link>

            <Link to="/treninzi/50-plus/kuca" className="biranje-card">
              <h2>KOD KUĆE</h2>
              <img src={kodKuceImg} alt="Kod Kuće" className="card-image" />
              <p>
                Sigurni i efektivni treninzi kod kuće fokusirani na funkcionalnu
                snagu i vitalnost
              </p>
              <span className="program-button">Saznaj više</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Treninzi50Biranje;
