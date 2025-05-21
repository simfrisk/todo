import { CheckStore } from "../store/CheckStore";

export const CheckBox = () => {

  const { isChecked, toggleCheckBox } = CheckStore()
  const bgColor = isChecked ? "bg-darkgray" : "bg-white";

  return (
    <div className={`relative w-8 h-8 rounded-full ml-auto bg-darkgray`}>
      <div onClick={toggleCheckBox} className={`absolute top-1/2 left-1/2 w-6 h-6 rounded-full ${bgColor} hover:bg-darkgray -translate-x-1/2 -translate-y-1/2`}></div>
    </div>
  );
};