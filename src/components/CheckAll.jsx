import { CardStore } from "../store/CardStore";

export const CheckAll = () => {

  const toggleAllCheckBox = CardStore((state) => state.toggleAllCheckBox)

  const checkAllHandler = () => {
    toggleAllCheckBox()
  }

  return (
    <>
      <h2 onClick={checkAllHandler}
        className="
          primary-text 
          primary-text-hover"
      >✓ All</h2>
    </>
  )
};