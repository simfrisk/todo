import { Item } from "./Item"
import { CheckBox } from "./CheckBox"
import { CardStore } from "../store/CardStore";
import { RemoveBtn } from "./RemoveBtn";

export const Card = ({ title, description, index }) => {
  const { cards, toggleCheckBox, toggleDetails } = CardStore();

  const card = cards[index];
  const isChecked = card?.isChecked;
  const showDetails = card?.showDetails;

  const detailStyle = showDetails ? "border border-amber-600" : "";
  const bgColor = isChecked ? "bg-lightgray text-white line-through" : "";

  return (
    <div
      onClick={() => toggleDetails(index)}
      className={`
        card-component
        flex
        items-center
        justify-center
        ${bgColor} 
        ${detailStyle}
        hover:bg-superlightgray 
        hover:scale-102 
        transition 
        duration-300
      `}>
      <Item
        title={title}
        description={description}
        isChecked={isChecked} />
      <CheckBox
        isChecked={isChecked}
        onToggle={() => toggleCheckBox(index)} />
      <RemoveBtn index={index} />
    </div>
  );
}