import React from 'react';
import ProfileCard from './ProfileCard';

const cardsData = [
  {
    image: 'path_to_image_1',
    name: 'A. НАРЕШЕВ',
    title: 'ATЫPAУ',
    description: '3D abstract renders are a form of digital art that',
  },
  {
    image: 'path_to_image_1',
    name: 'Hi',
    title: 'ATЫPAУ',
    description: '3D abstract renders are a form of digital art that',
  },
  {
    image: 'path_to_image_2',
    name: 'Pablo Escobar',
    title: '',
    description: '3D abstract renders are a form of digital art that',
  },
  {
    image: 'path_to_image_3',
    name: 'Mark Poola',
    title: '',
    description: '3D abstract renders are a form of digital art that',
  },
  {
    image: 'path_to_image_4',
    name: 'Jon Washington',
    title: '',
    description: '3D abstract renders are a form of digital art that',
  },
  {
    image: 'path_to_image_5',
    name: 'Jhon Wick',
    title: '',
    description: '3D abstract renders are a form of digital art that',
  },
];

const CardsContainer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {cardsData.map((card, index) => (
        <ProfileCard
          key={index}
          image={card.image}
          name={card.name}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
