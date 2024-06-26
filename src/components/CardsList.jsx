import Card from "./Card";
const CardsList = () => {
  const localStorageData = [
    { id: 1, title: "title A", date: new Date("2019-06-25") },
    { id: 2, title: "title B", date: new Date("2020-06-24") },
    { id: 3, title: "title C", date: new Date("2024-06-23") },
    { id: 4, title: "title D", date: new Date("2024-04-10") },
    { id: 5, title: "title F", date: new Date("2024-05-23") },
    { id: 6, title: "title Z", date: new Date("2024-06-26") },
  ];

  const SortedData = [...localStorageData].sort((d1, d2) => d2.date - d1.date);
  // console.log(localStorageData[0].id);

  // localStorage.setItem("dairyCards", JSON.stringify(localStorageData));

  return (
    <main className="grid grid-cols-4 gap-4 place-items-center p-8 ">
      {SortedData.map((card) => (
        <Card key={card.id} title={card.title} date={card.date} />
      ))}
    </main>
  );
};

export default CardsList;
