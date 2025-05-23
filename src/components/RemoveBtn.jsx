import { CardStore } from "../store/CardStore";
import { SelectedCardStore } from "../store/SelectedCardStore";

export const RemoveBtn = ({ index }) => {

  const deleteCard = CardStore((state) => state.deleteCard);
  const { showDetails } = SelectedCardStore()
  const detailStyle = showDetails ? "hidden" : "";


  const removeHandeler = () => {
    deleteCard(index)
  }

  return (
    <>
      <button
        onClick={removeHandeler}
        className={`
        ${detailStyle}
        bg-red-700 
          px-3
          py-1 
          hover:scale-110
          rounded-full 
          mx-2`}
      >X</button>
    </>
  )
};