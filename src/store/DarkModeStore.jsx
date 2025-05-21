import { create } from "zustand";

export const DarkModeStore = create((set) => ({
  isDarkMode: false,
  toggleDarkMode: () =>
    set((state) => {
      const isDarkMode = !state.isDarkMode;
      document.body.classList.toggle("dark", isDarkMode);
      return { isDarkMode };
    }),
}));