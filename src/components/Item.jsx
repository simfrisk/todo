import { CheckStore } from "../store/CheckStore";

export const Item = () => {

  const { isChecked } = CheckStore()
  const bgColor = isChecked ? "bg-lightgray text-white line-through" : "bg-white text-lightgray";

  return (
    <>
      <div className="flex flex-col justify-center">
        <h3 className="text-lg font-semibold">Get the trash</h3>
        <p className={bgColor}>Take it out by 7pm</p>
      </div>
    </>
  )
};