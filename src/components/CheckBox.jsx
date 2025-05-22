export const CheckBox = ({ isChecked, onToggle }) => {
  const bgColor = isChecked ? "bg-darkgray" : "bg-white";

  return (
    <div
      className={`
        relative 
        w-8 
        h-8 
        rounded-full 
        ml-auto 
        border 
        border-darkgray`}>
      <div
        onClick={onToggle}
        className={`
          absolute 
          top-1/2 
          left-1/2 
          w-6 h-6 
          rounded-full 
          ${bgColor} 
          hover:bg-darkgray 
          -translate-x-1/2 
          -translate-y-1/2 
          cursor-pointer`}
      ></div>
    </div>
  );
};

