import { Item } from "./Item"
import { CheckBox } from "./CheckBox"
import { CardStore } from "../store/CardStore";

export const Card = ({ title, description, index }) => {
  const { cards, toggleCheckBox } = CardStore();
  const isChecked = cards[index]?.isChecked;
  const bgColor = isChecked ? "bg-lightgray text-white line-through" : "";

  return (
    <div className={`card-component card ${bgColor} hover:bg-superlightgray hover:scale-102 transition duration-300`}>
      <Item title={title} description={description} isChecked={isChecked} />
      <CheckBox isChecked={isChecked} onToggle={() => toggleCheckBox(index)} />
    </div>
  );
}