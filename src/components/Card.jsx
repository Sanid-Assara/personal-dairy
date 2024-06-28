const Card = ({ id, title, date, imageUrl, onClick }) => {
  return (
    <div
      className="flex flex-col  max-w-96 mb-4 bg-slate-900 rounded-t-xl rounded-b-xl"
      onClick={onClick}
    >
      <figure className="rounded-t-xl h-96 w-96 object-cover">
        <img
          className="rounded-t-xl h-96 w-96 object-cover"
          src={imageUrl}
          alt={title}
        />
      </figure>
      <div className="flex justify-between items-center px-4 py-6 text-white">
        <h2 className="font-semibold line-clamp-1">{title.toUpperCase()}</h2>
        <time className=" min-w-fit text-right text-gray-400 font-bold ">
          {date}
        </time>
      </div>
    </div>
  );
};

export default Card;
