const Card = ({ id, title, date, url }) => {
  return (
    <div className="flex flex-col gap-1 max-w-52 mb-4">
      <figure>
        <img src="https://picsum.photos/200" alt="" />
      </figure>
      <h2>{title}</h2>
      <time>{date}</time>
      <section>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </section>
    </div>
  );
};

export default Card;
