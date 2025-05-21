import { useState } from "react";
import { CardStore } from "../store/CardStore";

export const NewCard = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const addTodo = CardStore((state) => state.addTodo)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title && description) {
      addTodo({ title, description })
      setDescription("")
      setTitle("")
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p className="border-darkgray">tit, {title}</p>
        <p className="border-darkgray">des, {description}</p>
        <fieldset className="primary-text">
          <label>
            <p>Title</p>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-darkgray" />
            <p>Description</p>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border border-darkgray" />
          </label>
          <br />
          <button
            type="submit"
            className="primary-text-hover border border-darkgray p-2 my-5 bg-cyan-600">Submit</button>
        </fieldset>
      </form>
    </>
  )
};