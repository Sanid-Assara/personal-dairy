const Card = ({ id, title, date, imageUrl, onClick }) => {
  return (
    <div className="flex flex-col gap-1 max-w-52 mb-4" onClick={onClick}>
      <figure>
        <img src="https://picsum.photos/200" alt="" />
      </figure>
      <h2>{title}</h2>
      <time>{date}</time>
    </div>
  );
};

export default Card;
