import { Item } from "./Item"
import { CheckBox } from "./CheckBox"

export const Card = () => {
  return (
    <div className="h-24 bg-white ml-6 mr-6 mt-4 rounded-xl text-neutral-800 flex items-center px-4">
      <Item></Item>
      <CheckBox></CheckBox>
    </div>


  )
}