import React from "react";
import "./App.scss";

import Card from "./components/Card/Card";
import Example from "./components/Example";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";

// COMMON
import Header from "./common/Header/Header";
import CardsPage from "./pages/CardsPage";
import CardPage from "./pages/CardPage";
import MainPage from "./pages/MainPage";

const lngs = {
  // kz: { nativeName: "Казахский" },
  // rus: { nativeName: "Русский" },
};

//

export default function App() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <Header />
      {/* Переключение языков */}
      <div className="language-switcher">
        {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            type="button"
            onClick={() => i18n.changeLanguage(lng)}
            disabled={i18n.resolvedLanguage === lng}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>

      <Routes>
        <Route path="/" element={<MainPage/ >} />
        <Route path="/galery" element={<CardsPage />} />
        <Route path="/card" element={<CardPage />} />
        <Route path="/profile/:profileSlug" element={<Card />} />
        {/* Другие маршруты */}
      </Routes>
    </div>
  );
}
