import React from "react";
import ProfileCard from "./ProfileCard";

import cardsData from "../../data/cardsData";

const CardsContainer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
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
