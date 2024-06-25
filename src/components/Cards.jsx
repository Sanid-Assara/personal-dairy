const Cards = () => {
  const localStorageData = [
    { id: 1, title: "title A", date: "2024-06-25" },
    { id: 2, title: "title B", date: "2024-06-24" },
    { id: 3, title: "title C", date: "2024-06-23" },
    { id: 4, title: "title Z", date: "2024-06-20" },
  ];

  localStorage.setItem("dairyCards", JSON.stringify(localStorageData));

  return (
    <main className="grid grid-cols-4 place-items-center p-8">
      {localStorageData.map((card) => (
        <div className="flex flex-col gap-1 max-w-52">
          <figure>
            <img src="https://picsum.photos/200" alt="" />
          </figure>
          <h1>{localStorageData.title}</h1>
          <time>{localStorageData.date}</time>
          <section>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </section>
        </div>
      ))}
    </main>
  );
};

export default Cards;
