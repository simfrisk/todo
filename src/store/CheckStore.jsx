import { create } from "zustand";

export const CheckStore = create((set) => ({
  isChecked: false,
  toggleCheckBox: () => set((state) => ({ isChecked: !state.isChecked })),
}));