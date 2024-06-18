function SCardDisplay({ card }) {
    return (
      <div className="cardFrame">
        <h1>{card.name}</h1>
        <div className="cardData">
          <h2>Mana Cost: {card.mana_cost}</h2>
          <h3>CMC: {card.cmc}</h3>
          <h3>Color: {card.color_identity}</h3>
        </div>
        <div className="imgFrame">
          <img src={card.image_uris.png} alt={card.name} />
          <h3>Card Type: {card.type_line}</h3>
          <p>{card.oracle_text}</p>
        </div>
      </div>
    );
  }
  
  export default SCardDisplay;
  