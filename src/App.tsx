import { Card } from "./components/Card"
import { AddCardBtn } from "./components/AddCardBtn"
import { BurgerMenu } from "./components/BurgerMenu"
import { CurrentList } from "./components/CurrentList"
import { Reset } from "./components/Reset"
import { CheckAll } from "./components/CheckAll"

export const App = () => {

  return (
    <div>
      <div className="flex justify-between max-w-150 m-auto">
        <BurgerMenu />
        <CurrentList />
      </div>
      <Card />
      <Card />
      <Card />
      <Card />
      <AddCardBtn />
      <div className="flex justify-between max-w-150 m-auto fixed bottom-0 right-5 left-4 z-20 p-4 bg-white dark:bg-darkgray">
        <Reset />
        <CheckAll />
      </div>

    </div >
  )
}
