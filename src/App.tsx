import { CardStore } from "./store/CardStore"
import { CardType } from "./store/CardStore"
import { Card } from "./components/Card"
import { BurgerMenu } from "./components/BurgerMenu"
import { CurrentList } from "./components/CurrentList"
import { ResetBtn } from "./components/ResetBtn"
import { CheckAll } from "./components/CheckAll"
import { AddCard } from "./components/addCard"
import { Count } from "./components/Count"
import { WelcomeMessage } from "./components/WelcomeMessage"


export const App = () => {
  const cards: CardType[] = CardStore((state) => state.cards);

  return (
    <div>
      <header className="flex justify-between max-w-150 m-auto mb-10">
        <BurgerMenu />
        <CurrentList />
      </header>
      <main>
        <WelcomeMessage />
        {cards.map((card, index) => (
          <Card
            key={index}
            index={index}
            title={card.title}
            description={card.description}
          />
        ))}
        <AddCard />
        <footer className="flex justify-between max-w-150 m-auto fixed bottom-0 right-5 left-4 z-20 p-4 bg-white dark:bg-darkgray">
          <ResetBtn />
          <Count />
          <CheckAll />

        </footer>
      </main>
    </div >
  )
}


