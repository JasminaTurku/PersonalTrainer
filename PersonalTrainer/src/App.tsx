import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingContact, {
  useFloatingContactStore,
} from "./components/FloatingContact";
import backgroundImg from "./assets/slika1.jfif";
import aboutImg from "./assets/slike2.jfif";
import transformacija1 from "./assets/transformacija1.jpeg";
import transformacija2 from "./assets/transformacija2.jpeg";
import transformacija3 from "./assets/transformacija3.jpeg";
import transformacija4 from "./assets/transformacija4.jpeg";
import transformacija5 from "./assets/transformacija5.jpeg";
import transformacija6 from "./assets/transformacija6.jpeg";
import transformacija7 from "./assets/transformacija7.jpeg";
import transformacija8 from "./assets/transformacija8.jpeg";
import transformacija9 from "./assets/transformacija9.jpeg";
import transformacija10 from "./assets/transformacija10.jpeg";
import covekImg from "./assets/covek.jpg";
import zenaImg from "./assets/zena.jpg";
import zene50Img from "./assets/zene50.jpg";
import trudniceImg from "./assets/trudnice.jpg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const { isOpen, setIsOpen } = useFloatingContactStore();
  const programs = [
    {
      title: "Muškarci",
      description: "Programi za izgradnju mišićne mase i definiciju",
      route: "/treninzi/muskarci",
      image: covekImg,
    },
    {
      title: "Žene",
      description: "Specijalizovani programi za žensku transformaciju",
      route: "/treninzi/zene",
      image: zenaImg,
    },
    {
      title: "50+",
      description: "Prilagođeni programi za osobe 50+",
      route: "/treninzi/50-plus",
      image: zene50Img,
    },
    {
      title: "Trudnice",
      description: "Bezbedni i efektni programi za trudnice",
      route: "/treninzi/trudnice",
      image: trudniceImg,
    },
  ];

  const transformations = [
    transformacija1,
    transformacija2,
    transformacija3,
    transformacija4,
    transformacija5,
    transformacija6,
    transformacija7,
    transformacija8,
    transformacija9,
    transformacija10,
  ];

  const testimonials = [
    {
      name: "Marko Jovanović",
      text: "Sa Nemanjom sarađujem već duži vremenski period i dosta mi znači što je uz mene. Uvek mi je bio podrška i motivacija, i sve ciljeve sam puno lakše ostvario uz njegovu pomoć. Profesionalizam i znanje su na najvišem nivou!",
      rating: 5,
    },
    {
      name: "Ana Petrović",
      text: "Treniram već duži vremenski period, ali sam se odlučila da treniram sa Nemanjom jer želim da uđem još ozbiljnije u celu priču i da postignem životnu formu. Za sad sam prezadovoljna saradnjom, svaka preporuka!",
      rating: 5,
    },
    {
      name: "Stefan Nikolić",
      text: "Sa trenerom već duži vremenski period radim 1 na 1, i izuzetno sam zadovoljan celokupnim procesom. Hteo sam da promenim svoje navike i pristup, a on mi je puno pomogao u tome. Rezultati su vidljivi nakon samo mesec dana!",
      rating: 5,
    },
    {
      name: "Jelena Simić",
      text: "Nikada nisam bila disciplinovanija u treningu. Personalizovan pristup i konstantna podrška su ono što Nemanju izdvaja od prethodnih iskustava sa trenerima. Konačno vidim rezultate o kojima sam sanjala!",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % transformations.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [transformations.length]);

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <>
      <Header />
      <FloatingContact />
      <main className="main-content">
        <section
          id="home"
          className="hero"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>PODIGNITE VAŠ TRENING NA VIŠI NIVO</h1>
            <p>Personalni trening prilagođen vašim ciljevima</p>
            <button className="cta-button" onClick={() => setIsOpen(!isOpen)}>
              ZAPOČNI SARADNJU
            </button>
          </div>
        </section>

        <section id="programs" className="programs-section">
          <h2>PROGRAMI</h2>
          <p className="programs-subtitle">
            Izaberite program koji odgovara vašim ciljevima
          </p>
          <div className="programs-grid">
            {programs.map((program, index) => (
              <div
                key={index}
                className="program-card"
                onClick={() => navigate(program.route)}
              >
                <div className="program-card-inner">
                  <h3>{program.title}</h3>
                  <div className="program-image">
                    <img src={program.image} alt={program.title} />
                  </div>
                  <p>{program.description}</p>
                  <button className="program-button">Saznaj više</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="about-container">
            <div className="about-content">
              <h2>KO SAM JA?</h2>
              <p className="about-intro">
                Profesionalni sam trener sa preko 10 godina iskustva u svetu
                fitnesa i transformacije tela.
              </p>
              <div className="about-image-mobile">
                <img src={aboutImg} alt="Personal Trainer" />
              </div>

              <p>
                Tokom moje karijere, imao sam čast da radim sa stotinama
                klijenata, pomažući im da ostvare svoje ciljeve - od gubljenja
                težine i izgradnje mišićne mase, do priprema za takmičenja i
                postizanja vrhunske forme.
              </p>
              <p>
                Specijalizovan sam za personalizovane treninge koji su
                prilagođeni vašim individualnim potrebama, ciljevima i životnom
                stilu. Moj pristup kombinuje naučno zasnovane metode treninga sa
                godinama praktičnog iskustva, garantujući vam najbrže i
                najefikasnije rezultate.
              </p>
            </div>
            <div className="about-image-desktop">
              <img src={aboutImg} alt="Personal Trainer" />
            </div>
          </div>
        </section>

        <section id="gallery" className="gallery-section">
          <h2>TRANSFORMACIJE</h2>
          <p className="gallery-subtitle">
            Ovo su neke od mnogobrojnih transformacija klijenata sa kojima sam
            sarađivao
          </p>
          <div className="carousel">
            <div className="carousel-container">
              <div
                className="carousel-track"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {transformations.map((img, index) => (
                  <div key={index} className="carousel-slide">
                    <img
                      src={img}
                      alt={`Transformacija ${index + 1}`}
                      className="carousel-image"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="testimonials-section">
          <h2>ZADOVOLJNI KLIJENTI</h2>
          <p className="testimonials-subtitle">
            Moj pristup je takav da prema svakoj individui imam strogo
            personalizovani pristup
          </p>
          <div className="testimonials-container">
            <button
              className="testimonial-arrow testimonial-arrow-left"
              onClick={prevTestimonial}
              aria-label="Prethodni klijent"
            >
              ‹
            </button>
            <div className="testimonial-card">
              <div className="stars">
                {[...Array(testimonials[testimonialIndex].rating)].map(
                  (_, i) => (
                    <span key={i} className="star">
                      ★
                    </span>
                  )
                )}
              </div>
              <p className="testimonial-text">
                "{testimonials[testimonialIndex].text}"
              </p>
              <div className="testimonial-author">
                <h4>{testimonials[testimonialIndex].name}</h4>
              </div>
            </div>
            <button
              className="testimonial-arrow testimonial-arrow-right"
              onClick={nextTestimonial}
              aria-label="Sledeći klijent"
            >
              ›
            </button>
            <div className="testimonial-arrows-mobile">
              <button
                className="testimonial-arrow testimonial-arrow-left-mobile"
                onClick={prevTestimonial}
                aria-label="Prethodni klijent"
              >
                ‹
              </button>
              <button
                className="testimonial-arrow testimonial-arrow-right-mobile"
                onClick={nextTestimonial}
                aria-label="Sledeći klijent"
              >
                ›
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
