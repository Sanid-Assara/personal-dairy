import { createPortal } from "react-dom";
const CardModal = ({ card, onClose }) => {
  return createPortal(
    <div className="fixed inset-0 bg-amber-800 bg-opacity-65 flex items-center justify-center z-50">
      <div className="bg-slate-900 rounded-r-3xl rounded-l-3xl flex  max-h-[460px] mx-auto ">
        <img
          src={card.imageUrl}
          alt={card.title}
          className="rounded-l-3xl h-[460px] w-[460px] object-cover"
        />
        <div className="w-[460px]">
          <div className="h-[100px] flex justify-between items-center p-4 ">
            <div className="text-white font-bold">
              <h2 className="text-2xl font-semibold mb-2">{card.title}</h2>
              <time className="text-gray-400 font-bold mb-4">{card.date}</time>
            </div>
            <button
              className=" w-12 h-12 bg-red-600 text-white rounded-full text-2xl flex items-center justify-center mr-2 hover:bg-red-800 focus:outline-none"
              onClick={onClose}
            >
              X
            </button>
          </div>
          <div className="h-[360px] bg-slate-800 ">
            <p className="text-gray-400 text-xl whitespace p-4 w-fit">
              {card.content}
            </p>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default CardModal;
