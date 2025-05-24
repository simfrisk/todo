import { CardType } from "../store/CardStore";
import { Item } from "./Item";
import { CheckBox } from "./CheckBox";
import { CardStore } from "../store/CardStore";
import { RemoveBtn } from "./RemoveBtn";

interface CardProps extends Pick<CardType, "title" | "description"> {
  index: number;
}

export const Card = ({ title, description, index }: CardProps) => {
  const { cards, toggleCheckBox, toggleDetails } = CardStore();

  const card = cards[index];
  const isChecked = card?.isChecked;
  const showDetails = card?.showDetails;

  const detailStyle = showDetails ? "border-2 border-rose-300 scale-103" : "";
  const bgColor = isChecked ? "bg-lightgray text-white line-through" : "";

  return (
    <article
      onClick={() => toggleDetails(index)}
      className={`
        card-component
        flex
        items-center
        justify-between
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
        onToggle={() => toggleCheckBox(index)}
        showDetails={showDetails}/>
      <RemoveBtn
        index={index} />
    </article>
  );
}