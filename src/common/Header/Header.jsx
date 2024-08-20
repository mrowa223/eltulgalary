import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Translation, useTranslation } from "react-i18next";
import "./Header.scss";

import logo from "./images/logo.svg";
import kmg from "./images/kmg.svg";

const Header = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage;

  const [isActive, setIsActive] = useState(currentLanguage);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Для управления состоянием бургер-меню

  const handleToggle = (lang) => {
    i18n.changeLanguage(lang);
    setIsActive(lang); // Обновление активного состояния
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Переключение состояния меню
  };

  return (
    <div className="header-container">
      <header className="p-4">
        <div className="flex flex-col sm:flex-row items-center justify-around">
          {/* Логотип */}
          <Link to="/" className="header-img w-24 h-auto sm:w-32">
            <img
              src={kmg}
              alt="Logo"
              className="header-img w-24 h-auto sm:w-32"
            />
          </Link>
          {/* Кнопка бургер-меню */}
          <button className="block sm:hidden text-white" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Навигация для больших экранов */}
          <nav className={`sm:flex ${isMenuOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 items-center nav-list">
              <li>
                <Link to="/">
                  <Translation>
                    {(t) => <p className="nav-item">{t("О НАС")}</p>}
                  </Translation>
                </Link>
              </li>
              <li>
                <Link to="/galery">
                  <Translation>
                    {(t) => <p className="nav-item">{t("ГЕРОИ")}</p>}
                  </Translation>
                </Link>
              </li>
              <li>
                <Link to="/card">
                  <Translation>
                    {(t) => <p className="nav-item">{t("ТЕМА")}</p>}
                  </Translation>
                </Link>
              </li>

              {/* Тумблер для локализации */}
              <div className="toggle-container">
                <div className="toggle">
                  <div
                    className={`toggle-item left ${
                      isActive === "kz" ? "active" : ""
                    }`}
                    onClick={() => handleToggle("kz")}
                  >
                    <span>KZ</span>
                  </div>
                  <div
                    className={`toggle-item right ${
                      isActive === "ru" ? "active" : ""
                    }`}
                    onClick={() => handleToggle("ru")}
                  >
                    <span>RU</span>
                  </div>
                </div>
              </div>
            </ul>
          </nav>

          {/* Дополнительное изображение */}
          <Link to="/" className="header-img w-24 h-auto sm:w-32">
            <img
              src={logo}
              alt="Additional"
              className="header-img w-24 h-auto sm:w-32 mt-4 sm:mt-0 logo"
            />
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
