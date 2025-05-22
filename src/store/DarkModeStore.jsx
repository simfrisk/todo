import { create } from "zustand";

export const DarkModeStore = create((set) => {
  const savedDarkMode = JSON.parse(localStorage.getItem("isDarkMode")) || false;
  document.body.classList.toggle("dark", savedDarkMode);

  return {
    isDarkMode: savedDarkMode,
    toggleDarkMode: () =>
      set((state) => {
        const isDarkMode = !state.isDarkMode;
        document.body.classList.toggle("dark", isDarkMode);
        localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
        return { isDarkMode };
      }),
  };
});