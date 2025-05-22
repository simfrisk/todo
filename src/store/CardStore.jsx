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
  toggleAllCheckBox: () =>
    set((state) => {
      const allChecked = state.cards.every((card) => card.isChecked);
      const updatedCards = state.cards.map((card) => ({
        ...card,
        isChecked: !allChecked,
      }));
      return { cards: updatedCards };
    }),
  reset: () => set({ cards: [] }),
}));