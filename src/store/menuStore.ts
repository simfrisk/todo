import { create } from "zustand";

export const menuStore = create((set) => ({
  isDarkmode: false,
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
}));