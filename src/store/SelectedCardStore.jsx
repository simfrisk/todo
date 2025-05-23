import { create } from "zustand";

export const SelectedCardStore = create((set) => ({
  showDetails: true,
  toggleDetails: () => set((state) => ({ showDetails: !state.showDetails })),
}));