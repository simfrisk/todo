import { menuStore } from "../store/menuStore";

export const BurgerMenu = () => {
  const { toggleMenu, isOpen } = menuStore();

  return (
    <div
      onClick={toggleMenu}
      className="w-8 h-6 flex flex-col justify-between cursor-pointer z-200"
      aria-label="Toggle menu"
      role="button"
    >

      <span
        className={`block h-1 rounded bg-darkgray dark:bg-white transition-transform duration-300 ease-in-out ${isOpen ? "translate-y-2" : "translate-y-0"
          }`}
      />

      <span
        className={`block h-1 rounded bg-darkgray dark:bg-white transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"
          }`}
      />

      <span
        className={`block h-1 rounded bg-darkgray dark:bg-white transition-transform duration-300 ease-in-out ${isOpen ? "-translate-y-2" : "translate-y-0"
          }`}
      />
    </div>
  );
};