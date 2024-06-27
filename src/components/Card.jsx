const Card = ({ id, title, date, imageUrl, onClick }) => {
  return (
    <div className="flex flex-col gap-1 max-w-52 mb-4" onClick={onClick}>
      <figure className="h-60 w-60 object-cover">
        <img className="h-60 w-60 object-cover" src={imageUrl} alt={title} />
      </figure>
      <h2>{title}</h2>
      <time>{date}</time>
    </div>
  );
};

export default Card;
