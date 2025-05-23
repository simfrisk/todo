import { create } from "zustand";

export interface CardType {
  title: string
  description: string
  isChecked: boolean
  showDetails: boolean
}

interface CardStoreType {
  cards: CardType[]
  addTodo: (newCard: Omit<CardType, "isChecked" | "showDetails">) => void
  toggleCheckBox: (index: number) => void
  toggleAllCheckBox: () => void
  toggleDetails: (index: number) => void
  deleteCard: (index: number) => void
  reset: () => void


}

export const CardStore = create<CardStoreType>((set) => {
  const savedCards: CardType[] = JSON.parse(localStorage.getItem("cards") || "[]");

  return {
    cards: savedCards,

    addTodo: (newCard) =>
      set((state) => {
        const updatedCards = [...state.cards, { ...newCard, isChecked: false, showDetails: false }];

        // Sort unchecked first, checked last
        updatedCards.sort((a, b) => {
          if (a.isChecked === b.isChecked) return 0;
          return a.isChecked ? 1 : -1;
        });

        localStorage.setItem("cards", JSON.stringify(updatedCards));
        return { cards: updatedCards };
      }),

    toggleCheckBox: (index) =>
      set((state) => {
        const updatedCards = [...state.cards];
        updatedCards[index].isChecked = !updatedCards[index].isChecked;
        updatedCards.sort((a, b) => {
          if (a.isChecked === b.isChecked) return 0
          return a.isChecked ? 1 : -1
        })

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

    toggleDetails: (index) =>
      set((state) => {
        const updatedCards = state.cards.map((card, i) => ({
          ...card,
          showDetails: i === index ? !card.showDetails : false
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