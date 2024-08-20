import React from "react";
import Profile from "./Profile/Profile";
import cardsData from "../../data/cardsData";
import "./CardsContainer.scss"

const CardsContainer = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center cards-container">
      {cardsData.map((card, index) => (
        <Profile
          key={index}
          image={card.image}
          name={card.name}
          title={card.title}
          circleImage={card.circleImage}
          // description={card.description}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
