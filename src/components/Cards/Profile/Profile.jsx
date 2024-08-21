// Profile.js
import React, { useEffect, useRef } from "react";
import "./Profile.scss"; // Подключение SCSS файла
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Arrow from "./images/Arrow.svg";

// Регистрируем ScrollTrigger плагин
gsap.registerPlugin(ScrollTrigger);

const Profile = ({ image, name, title, description, circleImage }) => {
  const profileCardRef = useRef(null);

  useEffect(() => {
    // Анимация карточки профиля при скролле
    gsap.fromTo(
      profileCardRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: profileCardRef.current,
          start: "top 80%",
          end: "bottom 30%",
          toggleActions: "play none none none",
          markers: false, // Убедитесь, что это установлено в false для устранения маркеров
        },
      }
    );
  }, []);

  const profileSlug = name.replace(/\s+/g, "-").toLowerCase(); // create a URL-friendly slug

  return (
    <div className="profile-card dd" ref={profileCardRef}>
      <Link to={`/profile/${profileSlug}`}>
        <div className="profile-circle">
          <img src={circleImage} alt="" />
        </div>
        <h2 className="profile-name">{name}</h2>
        <h3 className="profile-title">{title}</h3>

        <div className="profile-arrow">
          <img src={Arrow} alt="" className="arrow-img" />
        </div>
      </Link>
    </div>
  );
};

export default Profile;
