import { Item } from "./Item"
import { CheckBox } from "./CheckBox"
import { CardStore } from "../store/CardStore";
import { RemoveBtn } from "./RemoveBtn";
import { SelectedCardStore } from "../store/SelectedCardStore";

export const Card = ({ title, description, index }) => {
  const { cards, toggleCheckBox } = CardStore();
  const { toggleDetails } = SelectedCardStore()
  const isChecked = cards[index]?.isChecked;
  const bgColor = isChecked ? "bg-lightgray text-white line-through" : "";

  return (
    <div
      onClick={toggleDetails}
      className={`
        card-component
        flex
        items-center
        justify-center
        ${bgColor} 
        hover:bg-superlightgray 
        hover:scale-102 
        transition 
        duration-300`}>
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