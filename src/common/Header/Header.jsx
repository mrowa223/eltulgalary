import React from "react";
import { Link } from "react-router-dom";
import { Translation, useTranslation } from "react-i18next";
import "./Header.scss";

import logo from "./images/logo.png";
import kmg from "./images/kmg.png";

const Header = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage;

  const handleToggle = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="p-4 ">
      <div className="flex flex-col sm:flex-row items-center justify-around">
        {/* Логотип */}
        <img
          src={kmg}
          alt="Logo"
          className="
        header-img
        w-24 h-auto sm:w-32"
        />

        {/* Навигация */}
        <nav className="mt-4 sm:mt-0">
          <ul className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 items-center nav-list">
            <li className="nav-item">
              <Link to="/" className=" hover:text-blue-800">
                <Translation>{(t) => <span>{t("О нас")}</span>}</Translation>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/galery" className=" hover:text-blue-800">
                <Translation>{(t) => <span>{t("Герои")}</span>}</Translation>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/card" className="hover:text-blue-800">
                <Translation>{(t) => <span>{t("Тема")}</span>}</Translation>
              </Link>
            </li>

            {/* Тумблер для локализации */}
            <li className=" nav-item flex items-center mt-2 sm:mt-0">
              <div
                className={`px-4 py-2 rounded-l-lg cursor-pointer ${
                  currentLanguage === "kz"
                  // ? "bg-blue-500 text-white"
                  // : "bg-gray-200"
                }`}
                onClick={() => handleToggle("kz")}
              >
                KZ
              </div>
              <div
                className={`px-4 py-2 rounded-r-lg cursor-pointer ${
                  currentLanguage === "rus"
                  // ? "bg-blue-500 text-white"
                  // : "bg-gray-200"
                }`}
                onClick={() => handleToggle("rus")}
              >
                RUS
              </div>
            </li>
          </ul>
        </nav>

        {/* Дополнительное изображение */}
        <img
          src={logo}
          alt="Additional"
          className="
        header-img
        w-24 h-auto sm:w-32 mt-4 sm:mt-0"
        />
      </div>
    </header>
  );
};

export default Header;
