import { CardStore } from "../store/CardStore";

export const ResetBtn = () => {
  const reset = CardStore((state) => state.reset);


  return (
    <>
      <h2
        onClick={reset}
        className="primary-text primary-text-hover">
        Reset
      </h2>
    </>
  );
};