import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import TreninziMuskarciBiranje from "./pages/TreninziMuskarciBiranje";
import TreninziZeneBiranje from "./pages/TreninziZeneBiranje";
import Treninzi50Biranje from "./pages/Treninzi50Biranje";
import TreninziTrudniceBiranje from "./pages/TreninziTrudniceBiranje";
import TreninziMuskarci from "./pages/TreninziMuskarci";
import TreninziZene from "./pages/TreninziZene";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/treninzi/muskarci"
          element={<TreninziMuskarciBiranje />}
        />
        <Route path="/treninzi/zene" element={<TreninziZeneBiranje />} />
        <Route path="/treninzi/50-plus" element={<Treninzi50Biranje />} />
        <Route
          path="/treninzi/trudnice"
          element={<TreninziTrudniceBiranje />}
        />
        <Route
          path="/treninzi/muskarci/teretana"
          element={<TreninziMuskarci />}
        />
        <Route path="/treninzi/muskarci/kuca" element={<TreninziMuskarci />} />
        <Route path="/treninzi/zene/teretana" element={<TreninziZene />} />
        <Route path="/treninzi/zene/kuca" element={<TreninziZene />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
