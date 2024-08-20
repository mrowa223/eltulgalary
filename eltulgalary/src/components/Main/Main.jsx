import React, { useEffect } from "react";
import "./Main.scss";

const Main = () => {
  useEffect(() => {
    const ellipse = document.querySelector(".ellipse");
    const letters = document.querySelectorAll(".main-title span");

    const checkCollision = () => {
      const ellipseRect = ellipse.getBoundingClientRect();

      letters.forEach((letter) => {
        const letterRect = letter.getBoundingClientRect();

        const overlap = !(
          ellipseRect.right < letterRect.left ||
          ellipseRect.left > letterRect.right ||
          ellipseRect.bottom < letterRect.top ||
          ellipseRect.top > letterRect.bottom
        );

        if (overlap) {
          letter.style.color = "rgba(0, 141, 210, 1)"; // Полупрозрачный синий
        } else {
          letter.style.color = "white";
        }
      });
    };

    const animate = () => {
      checkCollision();
      requestAnimationFrame(animate);
    };

    animate();
  }, []); // Пустой массив зависимостей означает, что useEffect выполнится один раз после монтирования компонента

  return (
    <div className="background-container">
      <div className="ellipse"></div>
      <div className="centered-text">
        <h1 className="main-title">
          {"ELTULGALARY".split("").map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </h1>
        <p className="main-text">Because Saas Can’t Drive</p>
      </div>
    </div>
  );
};

export default Main;