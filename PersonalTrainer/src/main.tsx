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
import Treninzi50Plus from "./pages/Treninzi50Plus";
import TreninziTrudnice from "./pages/TreninziTrudnice";

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
        <Route path="/treninzi/50-plus/teretana" element={<Treninzi50Plus />} />
        <Route path="/treninzi/50-plus/kuca" element={<Treninzi50Plus />} />
        <Route
          path="/treninzi/trudnice/teretana"
          element={<TreninziTrudnice />}
        />
        <Route path="/treninzi/trudnice/kuca" element={<TreninziTrudnice />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
