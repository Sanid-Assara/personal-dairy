import Card from "./Card";
const CardsList = () => {
  const localStorageData = [
    { id: 1, title: "title A", date: "2024-06-25" },
    { id: 2, title: "title B", date: "2024-06-24" },
    { id: 3, title: "title C", date: "2024-06-23" },
    { id: 4, title: "title Z", date: "2024-06-20" },
  ];

  console.log(localStorageData[0].id);

  localStorage.setItem("dairyCards", JSON.stringify(localStorageData));

  return (
    <main className="grid grid-cols-4 place-items-center p-8">
      {localStorageData.map((card) => (
        <Card key={card.id} title={card.title} date={card.date} />
      ))}
    </main>
  );
};

export default CardsList;
