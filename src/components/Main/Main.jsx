import React from "react";
import oilImage from "./images/oilImage.png";
import "./Main.scss";
const Main = () => {
  return (
    <div className="background-container">
      <div className="ellipse"></div> {/* Добавлен эллипс */}
      <div className="centered-text">
        <h1 className="main-title">ELTULGALARY</h1>
        <p className="main-text">Beacuse Saas Can’t Drive</p>
      </div>
    </div>
  );
};

export default Main;
