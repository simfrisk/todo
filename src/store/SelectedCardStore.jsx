import { create } from "zustand";

export const SelectedCardStore = create((set) => ({
  showDetails: false,
  toggleDetails: () => set((state) => ({ showDetails: !state.showDetails })),
}));