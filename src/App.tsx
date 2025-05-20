import { Card } from "./components/Card"
import { AddCardBtn } from "./components/AddCardBtn"
import { BurgerMenu } from "./components/BurgerMenu"

export const App = () => {

  return (
    <div className="bg-neutral-800 min-h-screen">
      <BurgerMenu />
      <Card />
      <Card />
      <Card />
      <AddCardBtn />

    </div>
  )
}
