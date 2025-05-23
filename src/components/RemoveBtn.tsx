import { CardStore } from "../store/CardStore";

interface RemoveBtnProps {
  index: number
}

export const RemoveBtn = ({ index }: RemoveBtnProps) => {
  const { cards, deleteCard } = CardStore();
  const showDetails = cards[index].showDetails;
  const detailStyle = showDetails ? "" : "hidden";

  const removeHandler = () => {
    deleteCard(index);
  };

  return (
    <button
      onClick={removeHandler}
      className={`
        ${detailStyle}
        absolute
        top-0
        right-0
        text-red-600
        text-2xl
        px-3
        py-1 
        hover:scale-110
        rounded-full 
        mx-2`}
    >
      x
    </button>
  );
};