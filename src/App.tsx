import { Card } from "./components/Card"
import { AddCardBtn } from "./components/AddCardBtn"
import { BurgerMenu } from "./components/BurgerMenu"
import { CurrentList } from "./components/CurrentList"
import { Reset } from "./components/Reset"
import { CheckAll } from "./components/CheckAll"
import { NewCard } from "./components/NewCard"
import { CardStore } from "./store/CardStore"
import { AddCard } from "./components/addCard"

export const App = () => {

  const cards = CardStore((state) => state.cards);

  return (
    <div>
      <div className="flex justify-between max-w-150 m-auto">
        <BurgerMenu />
        <CurrentList />
      </div>
      {cards.map((card, index) => (
        <Card
          key={index}
          index={index}
          title={card.title}
          description={card.description}
        />
      ))}
      <AddCard />
      {/* <AddCardBtn /> */}
      <div className="flex justify-between max-w-150 m-auto fixed bottom-0 right-5 left-4 z-20 p-4 bg-white dark:bg-darkgray">
        <Reset />
        <CheckAll />
      </div>

    </div >
  )
}


