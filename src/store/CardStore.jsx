import { create } from "zustand";

export const CardStore = create((set) => ({
  cards: [],
  addTodo: (newCard) =>
    set((state) => ({
      cards: [...state.cards, newCard],
    })),
}));