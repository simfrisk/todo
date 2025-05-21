import { create } from "zustand";

export const CardStore = create((set) => ({
  cards: [],
  addTodo: (newCard) =>
    set((state) => ({
      cards: [...state.cards, { ...newCard, isChecked: false }],
    })),
  toggleCheckBox: (index) =>
    set((state) => {
      const updatedCards = [...state.cards];
      updatedCards[index].isChecked = !updatedCards[index].isChecked;
      return { cards: updatedCards };
    }),
}));