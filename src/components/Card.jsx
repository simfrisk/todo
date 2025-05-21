import { Item } from "./Item"
import { CheckBox } from "./CheckBox"
import { CheckStore } from "../store/CheckStore"

export const Card = () => {

  const { isChecked } = CheckStore()
  const bgColor = isChecked ? "bg-lightgray text-white line-through" : "bg-white";

  return (
    <div className={`card-component ${bgColor} hover:bg-superlightgray hover:scale-102 transition duration-300
`}>
      <Item></Item>
      <CheckBox></CheckBox>
    </div>
  )
}