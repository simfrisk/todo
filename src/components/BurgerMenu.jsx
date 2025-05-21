import { DarkModeStore } from "../store/DarkModeStore";

export const BurgerMenu = () => {
  const { toggleDarkMode } = DarkModeStore()
  return (
    <>
      <div onClick={toggleDarkMode} className="w-8 h-6 flex flex-col justify-between cursor-pointer " >
        <span className="block h-1 rounded bg-darkgray dark:bg-white"></span>
        <span className="block h-1 rounded bg-darkgray dark:bg-white"></span>
        <span className="block h-1 rounded bg-darkgray dark:bg-white"></span>
      </div >
    </>
  )
};

