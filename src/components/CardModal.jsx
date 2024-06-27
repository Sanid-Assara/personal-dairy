import { createPortal } from "react-dom";
const CardModal = ({ card, onClose }) => {
  return createPortal(
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg  w-full max-w-md mx-auto">
        <img
          src={card.imageUrl}
          alt={card.title}
          className="w-full h-48 object-cover mb-4"
        />
        <button
          className="absolute top-0 right-0  text-lg m-4 text-white bg-red-700 rounded-full"
          onClick={onClose}
        >
          Close&times;
        </button>
        <h2 className="text-2xl font-semibold mb-2">{card.title}</h2>
        <time className="text-gray-600 mb-4">{card.date}</time>
        <section>
          <p>{card.content}</p>
        </section>
      </div>
    </div>,
    document.body
  );
};

export default CardModal;
