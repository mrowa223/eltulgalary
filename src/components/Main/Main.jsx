// import React, { useEffect, useState } from "react";
// import "./Main.scss";

// const images = [
//   require("./images/1.jpg"),
//   require("./images/2.jpg"),
//   require("./images/3.jpg"),
//   require("./images/4.jpg"),
//   require("./images/5.jpg"),
//   require("./images/6.jpg"),
//   require("./images/7.jpg"),
//   require("./images/8.jpg"),
// ];

// const Main = () => {
//   const [bgImage, setBgImage] = useState(images[0]);

//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       index = (index + 1) % images.length;
//       setBgImage(images[index]);
//     }, 4500); // Задержка в 4.5 секунды (45 секунд / 8 изображений)

//     return () => clearInterval(interval); // Очистка интервала при размонтировании
//   }, []);

//   useEffect(() => {
//     const ellipse = document.querySelector(".ellipse");
//     const letters = document.querySelectorAll(".main-title span");

//     const checkCollision = () => {
//       const ellipseRect = ellipse.getBoundingClientRect();

//       letters.forEach((letter) => {
//         const letterRect = letter.getBoundingClientRect();

//         const overlap = !(
//           ellipseRect.right < letterRect.left ||
//           ellipseRect.left > letterRect.right ||
//           ellipseRect.bottom < letterRect.top ||
//           ellipseRect.top > letterRect.bottom
//         );

//         if (overlap) {
//           letter.style.color = "rgba(0, 141, 210, 1)"; // Полупрозрачный синий
//         } else {
//           letter.style.color = "white";
//         }
//       });
//     };

//     const animate = () => {
//       checkCollision();
//       requestAnimationFrame(animate);
//     };

//     animate();
//   }, []); // Пустой массив зависимостей означает, что useEffect выполнится один раз после монтирования компонента

//   return (
//     <div
//       className="background-container"
//       style={{ backgroundImage: `url(${bgImage})` }}
//     >
//       <div className="ellipse"></div>
//       <div className="centered-text">
//         <h1 className="main-title">
//           {"ELTULGALARY".split("").map((letter, index) => (
//             <span key={index}>{letter}</span>
//           ))}
//         </h1>
//         <p className="main-text">
//           «Қазақстан мұнайына 125 жыл:
//           <br></br>
//           Мұра, Мақтаныш, Болашақ{" "}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Main;

import React from "react";
import "./Main.scss"
const Main = () => {
  return (
    <div class="maintenance">
      <h1>Сайт EltulGalary временно не работает</h1>
    </div>
  );
};

export default Main;
