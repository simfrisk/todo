import { CardStore } from "../store/CardStore";

export const CheckAll = () => {

  const toggleAllCheckBox = CardStore((state) => state.toggleAllCheckBox)

  const checkAllHandler = () => {
    toggleAllCheckBox()
  }

  return (
    <>
      <button onClick={checkAllHandler}
        className="
          primary-text 
          primary-text-hover"
      >✓ All</button>
    </>
  )
};