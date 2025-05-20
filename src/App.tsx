import { TodoCard } from "./components/Todocard"
import { AddCardBtn } from "./components/AddCardBtn"
import { BurgerMenu } from "./components/BurgerMenu"

export const App = () => {

  return (
    <div className="bg-neutral-800 min-h-screen">
      <BurgerMenu />
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <AddCardBtn />

    </div>
  )
}
