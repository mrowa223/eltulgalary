import React from "react";
import ProfileCard from "./ProfileCard";

import cardsData from "../../data/cardsData";

const CardsContainer = () => {
  return (
    <div className="grid grid-cols-4 gap-4 justify-center">
      {cardsData.map((card, index) => (
        <ProfileCard
          key={index}
          image={card.image}
          name={card.name}
          title={card.title}
          // description={card.description}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
