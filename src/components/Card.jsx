import { Item } from "./Item"
import { CheckBox } from "./CheckBox"

export const Card = () => {
  return (
    <div className="card-component">
      <Item></Item>
      <CheckBox></CheckBox>
    </div>
  )
}