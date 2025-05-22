import { useState } from "react";
import { CardStore } from "../store/CardStore";
import { Card } from "./Card";
import { AddCardBtn } from "./AddCardBtn";

export const AddCard = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [isVisible, setIsVisible] = useState("block")
  const [isVisible2, setIsVisible2] = useState("hidden")
  const addTodo = CardStore((state) => state.addTodo)


  const toggleVisibility = () => {
    if (isVisible === "block") {
      setIsVisible("hidden")
      setIsVisible2("block")

    } else {
      setIsVisible("block")
      setIsVisible2("hidden")
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title || description) {
      addTodo({ title, description })
      setDescription("")
      setTitle("")
      toggleVisibility()
    }
  }
  return (
    <div className="
    card-component 
    relative
    ">
      <h2
        onClick={toggleVisibility}
        class={`
        secondary-text 
        primary-text-hover 
        absolute 
        top-1/2 
        left-1/2 
        -translate-x-1/2 
        -translate-y-1/2 
        z-50 
        ${isVisible}
        `}>Add</h2>
      <form
        onSubmit={handleSubmit}
        className={`
          ${isVisible2} 
        w-full 
        h-full`}>
        <fieldset className="
        primary-text 
        flex 
        items-center
        justify-center
        gap-8 
        w-full 
        h-full
       ">
          <div className="
          flex 
          flex-col 
          flex-1 
          gap-2">
            <label>
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="
                secondary-text 
                border-b 
                border-lightgray 
                dark:border-lightgray 
                py-1 
                px-3 
                placeholder:text-white 
                dark:placeholder:text-darkgray 
                w-full" />
            </label>
            <label>
              <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="secondary-text 
                border-b 
                border-lightgray 
                dark:border-lightgray 
                py-1 
                px-3 
                placeholder:text-white 
                dark:placeholder:text-darkgray 
                w-full" />
            </label>
          </div>
          <button
            type="submit"
            className="
            primary-text-hover 
            rounded-md 
            border-darkgray 
            p-2 my-5 
            bg-lightgray
            ">Submit</button>
        </fieldset>
      </form>


    </div>
  );
}