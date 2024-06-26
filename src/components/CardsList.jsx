import React, { useState } from "react";
import Card from "./Card";
import CardModal from "./CardModal";

const CardsList = ({ entries }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  return (
    <main className="z-30  flex flex-wrap justify-center  mx-auto gap-12 px-4 pt-40 pb-28 max-w-7xl ">
      {entries.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          date={card.date}
          imageUrl={card.imageUrl}
          card={card}
          onClick={() => handleCardClick(card)}
        />
      ))}
      {isModalOpen && (
        <CardModal card={selectedCard} onClose={handleCloseModal} />
      )}
    </main>
  );
};

export default CardsList;
