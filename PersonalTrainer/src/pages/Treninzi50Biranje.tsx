import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./TreninjiBiranje.css";
import teretanaImg from "../assets/teretana.jpg";
import kodKuceImg from "../assets/kodKuce1.jfif";

const Treninzi50Biranje = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <main className="biranje-content">
        <section className="biranje-section">
          <button onClick={() => navigate(-1)} className="back-button">
            Nazad
          </button>
          <h1 className="biranje-title">TRENINZI ZA 50+</h1>
          <p className="biranje-subtitle">Izaberite gde želite da trenirate</p>
          <div className="biranje-cards">
            <Link to="/treninzi/50-plus/teretana" className="biranje-card">
              <img src={teretanaImg} alt="U Teretani" className="card-image" />
              <h2>U TERETANI</h2>
              <p>
                Prilagođeni programi za održavanje snage, mobilnosti i zdravlja
                sa profesionalnom opremom
              </p>
              <span className="card-arrow">→</span>
            </Link>

            <Link to="/treninzi/50-plus/kuca" className="biranje-card">
              <img src={kodKuceImg} alt="Kod Kuće" className="card-image" />
              <h2>KOD KUĆE</h2>
              <p>
                Sigurni i efektivni treninzi kod kuće fokusirani na funkcionalnu
                snagu i vitalnost
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

export default Treninzi50Biranje;
