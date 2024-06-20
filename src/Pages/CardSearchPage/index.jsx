import { useState, useEffect } from "react";
import SCardDisplay from "../../Components/SCardDisplay";
import SForm from "../../Components/SForm";

export default function CardSearchPage() {
    
 const [card, setCard] = useState(null);

  const getCard = async (searchTerm) => {
    const res = await fetch(
      `https://api.scryfall.com/cards/named?fuzzy=${searchTerm}`
    );
    const data = await res.json();

    console.log(data);
    setCard(data);
  };

  const getRandom = async () => {
    const res = await fetch("https://api.scryfall.com/cards/random");
    const data = await res.json();

    console.log(data);
    setCard(data);
  };

  useEffect(() => {
    console.log("running useEffect.....");
    getRandom();
  }, []);

    
    return (
        <>
        <SForm cardsearch={getCard} />
        {card && <SCardDisplay card={card} />}
        </>
    );
  }
  
  
  