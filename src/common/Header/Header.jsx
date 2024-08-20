import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
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
        <div className="flex items-center justify-around">
          {/* Логотип */}
          <Link to="/" className="header-img w-24 h-auto sm:w-32">
            <img
              src={kmg}
              alt="Logo"
              className="header-img w-24 h-auto sm:w-32"
            />
          </Link>
          {/* Кнопка бургер-меню */}
          {/* Навигация для больших экранов */}
          <nav className={`sm:flex`}>
            <ul className="flex flex-col sm:space-x-4 space-y-2 sm:space-y-0 items-center nav-list">
              <li>
                <Link to="/">
                  <p className="nav-item">{i18n.t('header.aboutUs')}</p>
                </Link>
              </li>
              <li>
                <Link to="/galery">
                  <p className="nav-item">{i18n.t('header.gallery')}</p>
                </Link>
              </li>
              <li>
                <Link to="/card">
                  <p className="nav-item">{i18n.t('header.theme')}</p>
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
              className="header-img-logo w-24 h-auto sm:w-32 mt-4 "
            />
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
