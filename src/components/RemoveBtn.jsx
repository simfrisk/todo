import { CardStore } from "../store/CardStore";

export const RemoveBtn = ({ index }) => {

  const deleteCard = CardStore((state) => state.deleteCard);

  const removeHandeler = () => {
    deleteCard(index)
  }

  return (
    <>
      <button
        onClick={removeHandeler}
        className="
        bg-red-700 
          px-3
          py-1 
          hover:scale-110
          rounded-full 
          mx-2"
      >X</button>
    </>
  )
};