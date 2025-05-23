import { create } from "zustand";

interface DarkModeStoreType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const DarkModeStore = create<DarkModeStoreType>((set) => {
  const savedDarkMode = JSON.parse(localStorage.getItem("isDarkMode") || "false") as boolean
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

