import { menuStore } from "../../store/menuStore";
import { DarkModeStore } from "../../store/DarkModeStore";

export const Menu = () => {

  const { isOpen } = menuStore()
  const { toggleDarkMode, isDarkMode } = DarkModeStore()

  const toggleText = isDarkMode ? "Light Mode" : "Dark Mode"

  return (
    <>
      <div
        className={`
        fixed top-0 left-0 h-full w-64 bg-lightgray text-white z-90
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div
          className="
        my-25
        mx-10
        ">
          <button
            onClick={toggleDarkMode}
            className="
            secondary-text
            secondary-text-hover
            "
          >{toggleText}</button>
          <hr
            className="my-10" />
          <div
            className="
          flex  
          flex-col
          items-start
          ">
            <button
              // onClick={}
              className="
            secondary-text
            secondary-text-hover
            mb-10"
            >List 1: in prgress</button>
            <button
              // onClick={}
              className="
            secondary-text
            secondary-text-hover
            mb-10"
            >List 2: in prgress</button>
            <button
              // onClick={}
              className="
            secondary-text
            secondary-text-hover
            mb-10"
            >List 3: in prgress</button>
          </div>
        </div>


      </div>
    </>
  )
};