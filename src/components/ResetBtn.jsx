import { CardStore } from "../store/CardStore";

export const ResetBtn = () => {
  const reset = CardStore((state) => state.reset);

  const resetHandler = () => {
    reset();
  };

  return (
    <>
      <h2
        onClick={resetHandler}
        className="primary-text primary-text-hover">
        Reset
      </h2>
    </>
  );
};