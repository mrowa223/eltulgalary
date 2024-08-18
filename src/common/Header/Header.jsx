import { React, useState } from "react";
import { Link } from "react-router-dom";
import { Translation, useTranslation } from "react-i18next";
import "./Header.scss";

import logo from "./images/logo.png";
import kmg from "./images/kmg.png";

const Header = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage;
 
  const [isActive, setIsActive] = useState(currentLanguage);

  const handleToggle = (lang) => {
    i18n.changeLanguage(lang);
    setIsActive(lang); // Обновление активного состояния
  };

  return (
    <header className="p-4">
      <div className="flex flex-col sm:flex-row items-center justify-around">
        {/* Логотип */}
        <img src={kmg} alt="Logo" className="header-img w-24 h-auto sm:w-32" />

        {/* Навигация */}
        <nav className="mt-4 sm:mt-0">
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
        <img
          src={logo}
          alt="Additional"
          className="header-img w-24 h-auto sm:w-32 mt-4 sm:mt-0"
        />
      </div>
    </header>
  );
};

export default Header;
