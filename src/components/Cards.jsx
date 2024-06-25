const Cards = () => {
  return (
    <main className="p-8">
      <div className="flex flex-col gap-1 max-w-52">
        <figure>
          <img src="https://picsum.photos/200" alt="" />
        </figure>
        <h1>Title</h1>
        <time datetime="2024-06-25">June 25, 2024</time>
        <section>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </section>
      </div>
    </main>
  );
};

export default Cards;
