import { CheckStore } from "../store/CheckStore";

export const Item = ({ title, description }) => {

  const { isChecked } = CheckStore()
  const bgColor = isChecked ? "bg-lightgray text-white line-through" : "bg-white text-lightgray";

  return (
    <>
      <div className="flex flex-col justify-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className={bgColor}>{description}</p>
      </div>
    </>
  )
};