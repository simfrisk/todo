import { CardStore } from "../store/CardStore";

interface CheckBoxProps {
isChecked: boolean
onToggle: () => void
showDetails: boolean; 
}

export const CheckBox: React.FC<CheckBoxProps> = ({ isChecked, onToggle, showDetails }) => {

  const bgColorRing = isChecked ? "bg-neutral-300" : "bg-white dark:bg-darkgray ";

  const bgColorDot = isChecked ? "bg-darkgray" : "bg-white dark:bg-white";

  const checkVisibility = showDetails ? "hidden" : "block"

  return (
    <div
      className={`
        ${checkVisibility}
        relative 
        w-7 
        h-7 
        rounded-full 
        ml-auto 
        hover:scale-120
        transform
        transition-transform
        duration-300
        ${bgColorRing} 
        touch-manipulation`}>
     <div
  onClick={(e) => {
    e.stopPropagation(); // Still necessary
    onToggle();
  }}
  className={`
    absolute 
    top-1/2 
    left-1/2 
    w-5 h-5 
    rounded-full 
    ${checkVisibility}
    ${bgColorDot}   
    -translate-x-1/2 
    -translate-y-1/2 
    cursor-pointer
    hover:scale-110
    transform
    transition-transform
    duration-300
    pointer-events-auto
    touch-action-manipulation
  `}
/>
    </div>
  );
};

