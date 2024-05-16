import { useState } from 'react'
import './App.css'
import {Navbar} from "./NavBar/navbar"
import {Home} from "./Home/home"
import {CardSlider} from "./CardSlider/CardSlider"
import {Background} from "./BackgroundVideo/Background"


function App() {
  const [selectedCard, setSelectedCard] = useState(0);

  // Function to update the state with the selected card
  const handleSelectedCardChange = (cardProps) => {
    setSelectedCard(cardProps);
  };


  return (
    <>
    <Background num={selectedCard}/>
    <Navbar />
    <Home num={selectedCard}/>
    <CardSlider onCardClick={handleSelectedCardChange} />


    </>
  )
}

export default App
