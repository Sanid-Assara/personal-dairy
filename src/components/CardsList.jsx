import React, { useState, useEffect } from "react";
import Card from "./Card";
import CardModal from "./CardModal";
const CardsList = () => {
  // const localStorageData = [
  //   { id: 1, title: "title A", date: new Date("2019-06-25") },
  //   { id: 2, title: "title B", date: new Date("2020-06-24") },
  //   { id: 3, title: "title C", date: new Date("2024-06-23") },
  //   { id: 4, title: "title D", date: new Date("2024-04-10") },
  //   { id: 5, title: "title F", date: new Date("2024-05-23") },
  //   { id: 6, title: "title Z", date: new Date("2024-06-26") },
  // ];
  // localStorage.setItem("dairyCards", JSON.stringify(localStorageData));

  const [data, setData] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const loadData = () => {
      const localStorageData = localStorage.getItem("dairyCards");
      console.log(localStorageData);
      if (localStorageData) {
        const parsedData = JSON.parse(localStorageData);
        const sortedData = [...parsedData].sort((d1, d2) => {
          return new Date(d2.date) - new Date(d1.date);
        });
        setData(sortedData);
      }
    };

    loadData();
  }, []);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  return (
    <main className="grid grid-cols-4 gap-4 place-items-center p-8 ">
      {data.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          date={card.date}
          card={card}
          onClick={() => handleCardClick(card)}
        />
      ))}
      {isModalOpen && (
        <CardModal card={selectedCard} onClose={handleCloseModal} />
      )}
      {console.log(data)}
    </main>
  );
};
export default CardsList;
