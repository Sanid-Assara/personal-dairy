import { createPortal } from "react-dom";
const CardModal = ({ card, onClose }) => {
  return createPortal(
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-slate-900 rounded-tr-3xl rounded-bl-3xl flex  max-h-[460px] mx-auto ">
        <img
          src={card.imageUrl}
          alt={card.title}
          className="rounded-bl-3xl h-[460px] w-[460px] object-cover"
        />
        <div className="w-[460px]">
          <div className="h-[100px] flex justify-between items-center p-4 ">
            <div className="text-white font-bold">
              <h2 className="text-2xl font-sans font-semibold mb-2 line-clamp-1 max-w-[370px]">
                {card.title}
              </h2>
              <time className="font-sans text-gray-400 font-bold mb-4">
                {card.date}
              </time>
            </div>
            <button
              className="font-sans w-12 h-12 bg-red-600 text-white rounded-full text-2xl flex items-center justify-center mr-2 hover:bg-red-800 focus:outline-none"
              onClick={onClose}
            >
              X
            </button>
          </div>
          <div className="h-[360px] bg-slate-800 ">
            <p className="font-sans text-gray-400 text-xl  px-4 pt-4 w-fit line-clamp-[11]">
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
