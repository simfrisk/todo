import { useState } from "react";
import { CardStore } from "../store/CardStore";
import { Card } from "./Card";

export const AddCard = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const addTodo = CardStore((state) => state.addTodo)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title || description) {
      addTodo({ title, description })
      setDescription("")
      setTitle("")
    }
  }
  return (
    <>
      <form className="card-component" onSubmit={handleSubmit}>
        <fieldset className="primary-text flex flex-row justify-between items-start gap-4 w-full">
          <div className="flex flex-col flex-1 gap-2">
            <label>
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="secondary-text border rounded-md border-darkgray dark:border-lightgray py-1 px-3 placeholder:text-white dark:placeholder:text-darkgray w-90" />
            </label>
            <label>
              <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="secondary-text border rounded-md border-darkgray dark:border-lightgray py-1 px-3 placeholder:text-white dark:placeholder:text-darkgray w-90" />
            </label>
          </div>
          <button
            type="submit"
            className="primary-text-hover border border-darkgray p-2 my-5 bg-cyan-600">Submit</button>
        </fieldset>
      </form>


    </>
  );
}