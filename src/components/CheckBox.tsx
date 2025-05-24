import { CardStore } from "../store/CardStore";

interface CheckBoxProps {
isChecked: boolean
onToggle: () => void
showDetails: boolean; 
}

export const CheckBox: React.FC<CheckBoxProps> = ({ isChecked, onToggle, showDetails }) => {
  const bgColor = isChecked ? "bg-darkgray" : "bg-white";

  const checkVisibility = showDetails ? "hidden" : "block"

  return (
    <div
      className={`
          ${checkVisibility}
    relative 
    w-8 
    h-8 
    rounded-full 
    ml-auto 
    border 
    border-darkgray
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
    w-6 h-6 
    rounded-full 
    ${checkVisibility}
    ${bgColor} 
    hover:bg-darkgray 
    -translate-x-1/2 
    -translate-y-1/2 
    cursor-pointer
    pointer-events-auto
    touch-action-manipulation
  `}
/>
    </div>
  );
};

