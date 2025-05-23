import { CardStore } from "../store/CardStore";

export const Count = () => {
  const counter = CardStore(state => state.cards.length);

  return (
    <>
      <p>{counter}</p>
    </>
  );
};