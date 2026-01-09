import "./FloatingContact.css";
import { create } from "zustand";

interface FloatingContactState {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const useFloatingContactStore = create<FloatingContactState>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}));

const FloatingContact = () => {
  const { isOpen, setIsOpen } = useFloatingContactStore();

  return (
    <div className="floating-contact">
      {isOpen && (
        <div className="contact-menu">
          <button
            className="close-button"
            onClick={() => setIsOpen(false)}
            aria-label="Zatvori"
          >
            ✕
          </button>
          <a
            href="https://www.instagram.com/inseniti_/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item instagram"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="url(#instagram-gradient)"
            >
              <defs>
                <linearGradient
                  id="instagram-gradient"
                  x1="0%"
                  y1="100%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" style={{ stopColor: "#FED373" }} />
                  <stop offset="25%" style={{ stopColor: "#F15245" }} />
                  <stop offset="50%" style={{ stopColor: "#D92E7F" }} />
                  <stop offset="100%" style={{ stopColor: "#9B36B7" }} />
                </linearGradient>
              </defs>
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" fill="white" />
              <circle cx="18" cy="6" r="1.5" fill="white" />
            </svg>
          </a>
          <a
            href="mailto:your.email@example.com"
            className="contact-item email"
            aria-label="Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#EA4335"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
          <a
            href="viber://chat?number=+381123456789"
            className="contact-item viber"
            aria-label="Viber"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 32 32"
              fill="#7360f2"
            >
              <path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm7.5 20.5c-.3.9-1.5 1.7-2.4 1.8-.7.1-1.2.3-4.1-.9-3.5-1.4-5.8-5-5.9-5.2-.2-.2-1.4-1.9-1.4-3.6s.9-2.6 1.2-2.9c.3-.3.6-.4 1-.4.1 0 .2 0 .3.1.3 0 .5 0 .7.5.2.6.8 2 .9 2.1.1.1.1.3 0 .5-.1.2-.2.3-.3.5-.2.2-.3.3-.5.5-.2.2-.4.4-.2.7.2.4.9 1.5 2 2.4 1.4 1.2 2.6 1.6 3 1.7.3.2.5.1.7-.1.2-.2.9-1 1.1-1.4.2-.3.5-.3.8-.2.3.1 1.9.9 2.2 1.1.3.2.5.2.6.4.1.3.1.9-.2 1.7z" />
            </svg>
          </a>
        </div>
      )}
      <div className="contact-button-wrapper">
        {!isOpen && <span className="contact-label">Kontaktiraj me!</span>}
        <button
          className={`contact-button ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Kontaktiraj me"
          title="Kontaktiraj me!"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default FloatingContact;
