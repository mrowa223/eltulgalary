import React from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa";
import cardsData from "../../data/cardsData";
import "./ProfileCard.scss";

// Пример изображений

const ProfileCard = () => {
  const { profileSlug } = useParams();

  // Находим карточку с соответствующим именем
  const card = cardsData.find(
    (card) => card.name.replace(/\s+/g, "-").toLowerCase() === profileSlug
  );

  // Если карточка не найдена, можно вернуть ошибку или другой компонент
  if (!card) {
    return <div>Profile not found</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <FaArrowRight />,
    prevArrow: <FaArrowRight />,
  };

  return (
    <div className="flex justify-center items-center w-full h-screen profile-card">
    <div className="w-full h-full flex flex-col sm:flex-row bg-white rounded-lg overflow-scroll container-section">
      {/* Image Section */}
      <div className="relative w-full img-section ">
        <img
          src={card.image}
          alt={card.name}
          className="w-full h-auto object-cover img-item"
        />
        <div className=" bottom-0 w-full p-4 bg-white bg-opacity-90">
          <h2 className="text-lg title">{card.rusname}</h2>
          <p className="text-sm text-gray-600 text">{card.workplace}</p>
          <div className="flex space-x-4 mt-2">
            <a href="#!" className="text-black">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#!" className="text-black">
              <i className="fab fa-pinterest-p"></i>
            </a>
            <a href="#!" className="text-black">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
  
      {/* Content Section */}
      <div className="w-full sm:w-1/2 h-full p-8 content-section flex flex-col">
        <Slider {...settings}>
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-bold bio-title">Биография:</h3>
            <p className="text-gray-800 mt-4 bio-text">{card.description[0]}</p>
          </div>
          <div className="flex flex-col h-full justify-center">
            <h3 className="text-xl font-bold bio-title ">Место Работы</h3>
            <p className="text-gray-800 mt-4 bio-text">{card.description[1]}</p>
          </div>
          <div className="flex flex-col h-full justify-center">
            <h3 className="text-xl font-bold bio-title">Достижения и награды</h3>
            <p className="text-gray-800 mt-4 bio-text">{card.description[2]}</p>
          </div>
          <div className="flex flex-col h-full justify-center">
            <h3 className="text-xl font-bold bio-title">Цитаты</h3>
            <p className="text-gray-800 mt-4 bio-text">{card.description[3]}</p>
          </div>
        </Slider>
      </div>
    </div>
  </div>
  
  );
};

export default ProfileCard;
