import { Card } from "./components/Card"
import { AddCardBtn } from "./components/AddCardBtn"
import { BurgerMenu } from "./components/BurgerMenu"
import { CurrentList } from "./components/CurrentList"
import { Reset } from "./components/Reset"
import { CheckAll } from "./components/CheckAll"

export const App = () => {

  return (
    <div>
      <div className="flex justify-between">
        <BurgerMenu />
        <CurrentList />
      </div>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <AddCardBtn />
      <div className="flex justify-between text-white fixed bottom-0 right-5 left-4 z-20 text-white p-4 bg-neutral-800">
        <Reset />
        <CheckAll />
      </div>

    </div >
  )
}
