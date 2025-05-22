import { create } from "zustand";

export const CardStore = create((set) => {
  const savedCards = JSON.parse(localStorage.getItem("cards")) || [];

  return {
    cards: savedCards,

    addTodo: (newCard) =>
      set((state) => {
        const updatedCards = [...state.cards, { ...newCard, isChecked: false }];
        localStorage.setItem("cards", JSON.stringify(updatedCards));
        return { cards: updatedCards };
      }),

    toggleCheckBox: (index) =>
      set((state) => {
        const updatedCards = [...state.cards];
        updatedCards[index].isChecked = !updatedCards[index].isChecked;
        localStorage.setItem("cards", JSON.stringify(updatedCards));
        return { cards: updatedCards };
      }),

    toggleAllCheckBox: () =>
      set((state) => {
        const allChecked = state.cards.every((card) => card.isChecked);
        const updatedCards = state.cards.map((card) => ({
          ...card,
          isChecked: !allChecked,
        }));
        localStorage.setItem("cards", JSON.stringify(updatedCards));
        return { cards: updatedCards };
      }),

    deleteCard: (index) =>
      set((state) => {
        const updatedCards = [...state.cards];
        updatedCards.splice(index, 1);
        localStorage.setItem("cards", JSON.stringify(updatedCards));
        return { cards: updatedCards };
      }),

    reset: () => {
      localStorage.removeItem("cards");
      set({ cards: [] });
    },
  };
});