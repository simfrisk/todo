import { CardStore } from "../store/CardStore";

export const RemoveBtn = ({ index }) => {
  const { cards, deleteCard } = CardStore();
  const showDetails = cards[index].showDetails;
  const detailStyle = showDetails ? "hidden" : "";

  const removeHandler = () => {
    deleteCard(index);
  };

  return (
    <button
      onClick={removeHandler}
      className={`
        ${detailStyle}
        bg-red-700 
        px-3
        py-1 
        hover:scale-110
        rounded-full 
        mx-2`}
    >
      X
    </button>
  );
};