import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./TreninjiBiranje.css";
import teretanaImg from "../assets/teretana.jpg";
import kodKuceImg from "../assets/kodKuce1.jfif";

const TreninziMuskarciBiranje = () => {
  const navigate = useNavigate();

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
            <span className="breadcrumb-current">Treninzi za muškarce</span>
          </nav>
          <h1 className="biranje-title">TRENINZI ZA MUŠKARCE</h1>
          <p className="biranje-subtitle">Izaberite gde želite da trenirate</p>
          <div className="biranje-cards">
            <Link to="/treninzi/muskarci/teretana" className="biranje-card">
              <img src={teretanaImg} alt="U Teretani" className="card-image" />
              <h2>U TERETANI</h2>
              <p>
                Profesionalni programi treninga sa opremom za maksimalan razvoj
                snage i mišićne mase
              </p>
              <span className="card-arrow">→</span>
            </Link>

            <Link to="/treninzi/muskarci/kuca" className="biranje-card">
              <img src={kodKuceImg} alt="Kod Kuće" className="card-image" />
              <h2>KOD KUĆE</h2>
              <p>
                Efektivni treninzi sa minimalnom opremom ili sopstvenom težinom
                tela koji donose rezultate
              </p>
              <span className="card-arrow">→</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TreninziMuskarciBiranje;
